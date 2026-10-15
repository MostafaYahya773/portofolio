import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler } from '../lib/contact/handler';

const valid = { name: 'Test Visitor', email: 'visitor@example.com', subject: 'project', description: 'A project message for isolated tests.' };
function request(body: unknown = valid, headers: Record<string, string> = {}) {
  return new Request('http://localhost:3000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
}

test('a rejected database insert never reports success', async () => {
  const handler = createContactHandler(async () => ({ error: { code: '42501' } }));
  const response = await handler(request());
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, undefined);
});
test('success waits for persistence and normalizes the input', async () => {
  let saved: unknown;
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  const handler = createContactHandler(async (message) => { await gate; saved = message; return { error: null }; });
  let resolved = false;
  const result = handler(request({ ...valid, name: '  Test Visitor  ', email: ' VISITOR@EXAMPLE.COM ', id: 'cannot-inject' })).then((response) => { resolved = true; return response; });
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(resolved, false);
  release();
  assert.equal((await result).status, 201);
  assert.deepEqual(saved, valid);
});
test('invalid and blank fields never reach the database', async () => {
  let writes = 0;
  const handler = createContactHandler(async () => { writes++; return { error: null }; });
  for (const body of [{ ...valid, name: '   ' }, { ...valid, email: 'bad-email' }, { ...valid, subject: 'admin' }, { ...valid, description: 'short' }, { ...valid, name: 123 }, null, []]) {
    assert.equal((await handler(request(body))).status, 400);
  }
  assert.equal(writes, 0);
});
test('database rate limits return a recoverable 429 error', async () => {
  const response = await createContactHandler(async () => ({ error: { code: 'P0001' } }))(request());
  assert.equal(response.status, 429);
  assert.match((await response.json()).error, /15 minutes/);
});
test('network failures return a generic error without internal details', async () => {
  const response = await createContactHandler(async () => { throw new Error('sensitive database detail'); })(request());
  assert.equal(response.status, 503);
  assert.doesNotMatch(await response.text(), /sensitive/);
});
test('cross-origin submissions are rejected before any write', async () => {
  const response = await createContactHandler(async () => { throw new Error('should not run'); })(request(valid, { origin: 'https://unrelated.example' }));
  assert.equal(response.status, 403);
});
test('oversized body is rejected even without Content-Length', async () => {
  const response = await createContactHandler(async () => { throw new Error('should not run'); })(request({ ...valid, description: 'x'.repeat(40_000) }));
  assert.equal(response.status, 413);
});
test('malformed JSON, unsupported content type, and honeypot are rejected', async () => {
  const handler = createContactHandler(async () => { throw new Error('should not run'); });
  assert.equal((await handler(new Request('http://localhost:3000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' }))).status, 400);
  assert.equal((await handler(request(valid, { 'Content-Type': 'text/plain' }))).status, 415);
  assert.equal((await handler(request({ ...valid, website: 'spam.example' }))).status, 400);
});
