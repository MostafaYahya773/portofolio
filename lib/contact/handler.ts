import { ValidationError } from 'yup';
import { contactSchema, type ContactMessage } from './schema';

type SaveMessage = (message: ContactMessage) => Promise<{ error: { code?: string } | null }>;

const json = (body: object, status: number) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '900' } : {}) } });

// Dependency injection keeps request validation and error handling testable without writing real messages.
export function createContactHandler(saveMessage: SaveMessage) {
  return async function POST(request: Request): Promise<Response> {
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) {
      return json({ error: 'This request is not allowed.' }, 403);
    }
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return json({ error: 'Send the message as JSON.' }, 415);
    }
    // Read a bounded stream instead of trusting a caller-controlled Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return json({ error: 'Your message is empty.' }, 400);
    let length = 0;
    const chunks: Uint8Array[] = [];
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > 32_768) {
          await reader.cancel();
          return json({ error: 'Your message is too long.' }, 413);
        }
        chunks.push(value);
      }
      const bytes = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
      const body: unknown = JSON.parse(new TextDecoder().decode(bytes));
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return json({ error: 'Check your message and try again.' }, 400);
      }
      const fields = body as Record<string, unknown>;
      // A hidden honeypot reduces simple automated spam; database limits also cover direct API inserts.
      if (typeof fields.website === 'string' && fields.website.trim()) {
        return json({ error: 'This submission could not be accepted.' }, 400);
      }
      if (!['name', 'email', 'subject', 'description'].every((field) => typeof fields[field] === 'string')) {
        return json({ error: 'Please complete all message fields.' }, 400);
      }
      const message = await contactSchema.validate(fields, { abortEarly: false, stripUnknown: true });
      const { error } = await saveMessage(message);
      if (error?.code === 'P0001') {
        return json({ error: 'Too many messages. Please wait 15 minutes before trying again.' }, 429);
      }
      if (error) return json({ error: 'Your message could not be saved. Please try again or email me directly.' }, 503);
      return json({ ok: true }, 201);
    } catch (error) {
      if (error instanceof SyntaxError) return json({ error: 'The message format is invalid.' }, 400);
      if (error instanceof ValidationError) return json({ error: error.errors[0] }, 400);
      return json({ error: 'Unable to send your message right now. Please try again or email me directly.' }, 503);
    } finally {
      reader.releaseLock();
    }
  };
}
