# TAJO website instructions

## Current scope
The user has explicitly authorized the new TAJO website on main. The previous migration-only restrictions are superseded for this branch. Do not change or merge the old-website branch; it preserves the original production website.

## Source of truth
Use the supplied leadflow_tajo.png reference for the new page layout and art direction. Use existing TAJO Inter typography, SVG bridge mark, navy #173E76, deep navy #0F2C58 and gold #C8A96A. The reference uses a dark navy photographic hero and warm paper sections. Follow its service-business copy and positioning. Agent.md describes the new positioning: intelligent infrastructure between inquiry and booking. Do not describe TAJO as a SaaS product, lead-generation company, generic agency or CRM replacement.

## Architecture
One lightweight Next.js App Router landing page using React and TypeScript with existing/local CSS. No CMS, database, auth, backend or unnecessary libraries. Static export for Netlify. Major sections should be understandable components. Use accessible responsive navigation, buttons, diagrams and diagnostic interactions.

## Assets
Use supplied files in assets/new_assets without modifying image bytes. Preserve all existing source assets. Serve browser files through public/. No stock imagery or invented customer testimonials.

## Forms and credentials
Never hardcode a form key in new committed source. Use NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY if configured. Without it, offer a reviewable email draft to the existing contact destination from the original site. Do not submit real test enquiries during validation.

## Checks and Git
Check main's current remote commit and local working tree before publishing. Run production build, TypeScript checks and browser checks at 1440, 1280, 1024, 768 and 390px. Check overflow, assets, menu, anchors, FAQ and diagnostic form. Commit and publish on main as requested; do not alter old-website.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
