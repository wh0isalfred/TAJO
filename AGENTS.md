# TAJO website instructions

## Current scope and Git
The user promoted the photographic redesign to main and authorized further work on main. Preserve techstartup_inspo (previous main), redesign/photographic-landing (approved draft), and old-website. The latest explicit user instruction supersedes earlier design directions.

## Latest hero approval
Use the spacious white full-width split hero with near-black headline, charcoal body, no gold headline underline, supplied hero-office.webp photograph on the right, and navy email strip under the left panel. Desktop navigation places the stacked gold bridge/navy TAJO logo first on the left, followed by Why TAJO / How it works / What we fix; Who it’s for / FAQ / Talk to us remain on the right. Keep all sections below the hero unchanged.

## Design source of truth
Use the approved white photographic layout: open navigation with original bridge logo centered on desktop; split hero with text left and workshop photograph right; four-block problem row; portrait photograph and three vertical process steps; simplified open trust section with the headline “No need to rip everything out.”, one quiet supporting sentence “Already have part of this handled? Good. We’ll work on what’s missing.” without a divider or second heading, and three service columns; open green/red fit comparison; pale two-column FAQ headed “Quickly find your answers.”; separate navy closing CTA; white minimal footer. Use local Switzer and selective italic DM Serif Display emphasis. Navy #173E76, deep navy #0F2C58, gold bridge mark with navy wordmark (white on the navy header) and gold active navigation underlines, restrained gold focus accents. The hero uses a warm neutral background, a gold underline beneath its italic phrase, and the full rectangular hero photograph without corner cut-outs. No eyebrows, capsules, floating hero diagram, trust illustration or decorative glows. Navigation stays visible and turns navy when 15% of the viewport still shows the hero. Replay subtle fade-in entrances when sections re-enter; respect reduced motion and keyboard focus.

## Architecture and assets
One Next.js App Router + TypeScript landing page with local CSS and understandable major components. No CMS, authentication, database or unnecessary dependencies. Preserve all original supplied assets. New photographic assets are generated visual examples, not customer evidence or team portraits. Serve compressed WebP photos and locally hosted fonts through public/. Preserve the exact existing fit and FAQ copy.

## Forms and credentials
Preserve the existing accessible setup modal, labels, validation, answer retention, confirmed success and failure recovery. Keep the old hero.webp modal image. Resend is server-only, sends to tajopartners@gmail.com, uses a verified RESEND_FROM_EMAIL, and sets the visitor as Reply-To. Never expose secrets or send real test inquiries. Mock delivery in browser validation.

## Validation
Check production build and TypeScript, development startup, browser console, assets, overflow, navigation, FAQ and form behavior at 1440, 1280, 1024, 768 and 390px. Verify reduced motion, replay reveals and no-JavaScript readability. Commit and publish authorized changes on main. Preserve the archived branches.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
