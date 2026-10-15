# Mostafa Yahya — Portfolio

A personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Supabase.

## Local setup

Use Node.js 24 LTS (recommended), or Node.js 22.13 or newer.

1. Run `npm ci`.
2. Copy `.env.example` to `.env.local` and enter the Supabase project URL and publishable key. Do not overwrite an existing local environment file.
3. Run `npm run dev`, then open http://localhost:3000.

`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` is intentionally public. Never put a service-role or secret key in a `NEXT_PUBLIC_` variable.

Set `SITE_URL` to the actual public HTTPS origin before deployment. On Vercel, the application also accepts `VERCEL_PROJECT_PRODUCTION_URL`. Without a public URL, the sitemap is empty and robots.txt prevents indexing; localhost is used only as the local metadata base.

## Checks

- `npm run lint` — Next.js, TypeScript, React, and accessibility rules.
- `npm run typecheck` — generate route types and check TypeScript.
- `npm test` — isolated contact API tests; no real messages are inserted.
- `npm run build` — production build.
- `npm start` — serve the production build.

## Project structure

- `src/app`: Home, About, Projects, ContactUs, metadata, and the contact API.
- `src/app/_Components`: reusable UI components.
- `lib/SSRFunctions`: newest-first project queries.
- `lib/contact`: shared validation and testable request handling.
- `lib/supabase`: browser and server clients.
- `supabase/migrations`: database hardening applied to the existing Portfolio project.
- `tests`: contact request validation and error-path regression tests.

## Contact flow and security

The form posts to `POST /api/contact`. The server checks the origin, content type, maximum body size, honeypot, field types, allowed subject, and field lengths. It normalizes whitespace and email casing. A failed database insert returns an error; only a confirmed save clears the form. Controls remain disabled while sending, and a failed request keeps the user's message.

Supabase stores messages; this does **not** send an email notification. Messages remain available to the existing administrator.

The database independently checks every INSERT, including requests made directly to Supabase:
- 3 accepted messages per normalized email in a 15-minute window.
- 30 accepted messages globally in a 1-minute window.
- Atomic private counters work across server instances.
- Visitors may only insert the four contact fields; they cannot read messages or change projects.
- Existing administrator RLS policies remain intact.
- The private trigger function cannot be invoked as a public RPC.

Limits reduce abuse but do not establish a visitor's identity. A determined attacker can rotate email addresses; the global limit protects storage but may temporarily delay legitimate submissions. Add CAPTCHA and edge-level rate limits if traffic warrants them.

The private counter table intentionally has RLS enabled with no public policies, since only the internal trigger may access it. A Supabase advisor informational notice about that table is expected. The separate Auth leaked-password protection setting is outside this portfolio's public form; enable it for administrator password sign-ins when the account plan supports it.

For a new Supabase project, create the baseline `projects` and `contact` tables and administrator policies first. The included migration hardens the existing schema; it is not a complete database bootstrap. The migration was applied through Supabase MCP; the locally generated file was renamed to match its recorded remote version. Check migration history before pushing it again.

## Portfolio content

Edit projects in Supabase:
- `description`: what the product does and the problem it addresses.
- `Future`: your role (the legacy database name is retained for compatibility).
- `Future_description`: your actual contribution; displayed as “My contribution”.
- `tools`: separate technologies with ` - `.
- Optional URLs, images, dates, and descriptions may be empty; absent links are not rendered.
- Only publish outcomes and performance metrics you can substantiate.

Update the resume URL in Navbar and personal links in SocialLinks. Project dates are shown when available; homepage selection uses newest `created_at`.

## Dependency notes

Next.js was updated to 16.4.2 after the dependency audit reported security issues in 16.2.4. Runtime packages are in `dependencies`; tooling is in `devDependencies`. Supabase versions and the lockfile are pinned.

Run `npm audit` periodically. Remaining findings in the Tailwind 3 / ESLint glob-processing toolchain require upstream fixes or a separately verified major tooling migration. Do not use `npm audit fix --force` blindly.
