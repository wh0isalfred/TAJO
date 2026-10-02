# TAJO website instructions

## Current scope
The user has explicitly authorized the new TAJO website on main. The previous migration-only restrictions are superseded for this branch. Do not change or merge the old-website branch; it preserves the original production website.

## Source of truth
For the hero and navigation, use the latest approved centred hero with local dotted hero-background.png, branching hero-illustration.png, transparent header and translucent navigation capsule. Keep the header visible and give it a navy background when only 15% of the viewport still shows the hero. Use locally hosted Switzer for these components, original SVG bridge mark, navy #173E76, deep navy #0F2C58 and gold #C8A96A. Respect reduced motion and provide a readable stacked mobile journey. Why we exist and How it works now follow the approved white three-column problem panel and pale process blocks with large faint step numbers. Use the supplied problem-illustration.jpg unchanged; “Stop losing” is gold. The problem headline is “Stop losing leads you’ve already earned.” with explicit service-business systems copy and no eyebrow capsule. Keep the gold dot on the How it works label. Keep the original compact single-paragraph Capture, Respond and Follow up cards; do not expand their copy. Keep desktop cards and step numbers aligned with equal grid rows, and put the shared CTA in its own row aligned to the card edge. Keep three compact cards on tablet and stack them on mobile. Keep slow one-time reveals and respect reduced motion. The trust section uses a narrow white service panel left and broad pale message panel right, preserving the user’s “No need to rip everything out” copy. Its message comes first on mobile. Who it’s for uses an open two-column comparison with the supplied exact copy, green checks and red crosses. Each column has a very subtle matching bottom glow that fades into the section; keep it open without card borders or boxes. Neither section has eyebrows, capsules or illustrations. The FAQ is an in-page six-question accordion before the existing closing CTA, following the supplied centred-heading reference without an eyebrow. Preserve the exact approved answers, first answer open, keyboard controls and a quiet contact panel. Navigation links to #faq. Keep the existing closing CTA and footer until separately redesigned. Follow its service-business copy and positioning. Agent.md describes the new positioning: intelligent infrastructure between inquiry and booking. Do not describe TAJO as a SaaS product, lead-generation company, generic agency or CRM replacement.

## Architecture
One lightweight Next.js App Router landing page using React and TypeScript with existing/local CSS. No CMS, database, auth or unnecessary libraries. Deploy using the Next.js runtime on Vercel. The only server endpoint is POST /api/inquiry for the explicitly requested Resend delivery. Major sections should be understandable components. Use accessible responsive navigation, buttons, diagrams and diagnostic interactions.

## Assets
Use supplied files in assets/new_assets without modifying image bytes. Preserve all existing source assets. Serve browser files through public/. No stock imagery or invented customer testimonials.

## Forms and credentials
The setup modal follows the approved image-left, form-right reference using unchanged assets/old_assets/hero.webp. Use Switzer, pale blue surfaces, navy actions and restrained gold focus accents. Persistent labels, explicit optional fields, single-column mobile, linked errors with summary focus, retained answers, keyboard dismissal/focus restoration and confirmed delivery are required. Ask the approved business type/inquiry source/follow-up questions plus name and email; business name and phone are optional. Do not restore the multi-step automated diagnostic.
Never hardcode a form key in new committed source. Use server-only RESEND_API_KEY and RESEND_FROM_EMAIL (verified sender). Send only to tajopartners@gmail.com with the visitor’s email as Reply-To. Never expose credentials in browser bundles. Delivery failures retain answers and offer a reviewable email draft to the same inbox. Do not submit real test enquiries during validation.

## Checks and Git
Check main's current remote commit and local working tree before publishing. Run production build, TypeScript checks and browser checks at 1440, 1280, 1024, 768 and 390px. Check overflow, assets, menu, anchors, FAQ and diagnostic form. Commit and publish on main as requested; do not alter old-website.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
