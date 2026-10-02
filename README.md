# TAJO

One Next.js App Router landing page with React, TypeScript and local CSS. The original website is preserved on `old-website`; development is on `main`.

## Development and production
Use Node 22 or later. Run `npm ci`, `npm run dev`, `npm run typecheck`, and `npm run build`. Preview the production build with `npm start`. Section components live in `components/`; styles live in `app/`. Source assets remain in `assets/`; browser copies are served from `public/assets/` unchanged.

## Vercel and Resend
Use Vercel’s Next.js preset and default build/output settings. This is a Next.js runtime build, not a static `out/` export. The single `POST /api/inquiry` endpoint sends through Resend’s REST API, with no additional dependencies, database or authentication.

Set these **server-only** environment variables in Vercel, then redeploy:

- `RESEND_API_KEY`: a Resend API key authorized to send emails.
- `RESEND_FROM_EMAIL`: a sender on a domain verified in Resend, optionally formatted `TAJO <address@your-verified-domain>`.

The destination is fixed to `tajopartners@gmail.com`. The visitor’s address becomes Reply-To, never the sender. Gmail is the receiving inbox; verify a domain you own for the sender. Do not prefix these variables with `NEXT_PUBLIC_` or commit secrets. Local credentials belong in ignored `.env.local`. Remove the obsolete `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from deployment settings.

The setup form retains answers on errors, validates fields on client and server, uses retry-safe Resend idempotency keys, and confirms success only after Resend accepts the email and returns an ID. This confirms acceptance, not eventual inbox delivery. Missing configuration or provider failure offers retry and an explicitly unsent email draft. No live test inquiries are sent during automated validation.

## Validation
Run TypeScript and production build checks, then browser checks at 1440, 1280, 1024, 768 and 390px. Check assets, typography, overflow, navigation, anchors, FAQ, modal focus, validation, retained answers, pending states, failure/retry and success using mocked delivery. See `docs/FORM_UX.md` for the form’s interaction requirements. Live email delivery still requires the Vercel environment variables and a verified Resend sender.
