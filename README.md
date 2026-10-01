# TAJO

A lightweight Next.js + TypeScript landing page for TAJO, following the supplied leadflow_tajo.png reference. The original production website remains on the old-website branch.

## Development
Use Node 22 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The page is composed from app/page.tsx and section components in components/. Styling lives in app/globals.css. Existing source assets are preserved in assets/ and served from public/assets/.

## Build and checks

```sh
npm run typecheck
npm run build
```

The production build exports a static site to out/. Netlify uses the committed netlify.toml (build command npm run build, publish directory out, Node 22). No database, authentication or server runtime is needed.

## Diagnostic and FAQ
The diagnostic presents three questions and an initial assessment. By default it prepares a message for the user to review and open in their email app; it does not claim a message has been sent. Native dialogs provide keyboard handling, focus containment, Escape and close controls. The FAQ opens from the navigation.

If direct form delivery is desired, set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in the build environment and rebuild. It is a frontend form identifier and is included in the browser bundle. Do not commit actual keys. Without that variable the email-draft path works immediately. Automated checks do not send live enquiries.

## Validation
Production build, TypeScript and Netlify CLI offline production-context build passed. Chromium checks covered 1440, 1280, 1024, 768 and 390px, including overflow, fonts, images, anchors, every diagnostic CTA, mobile navigation, FAQ, dialog closing, diagnostic recommendations and the reviewable email draft. Browser font requests were supplied with real Google Fonts bytes downloaded from the original URLs to accommodate the execution environment's browser network restrictions. The app retains the Google Fonts stylesheet.

The landing page uses the supplied hero and device JPGs without modifying their bytes; the existing WebP provides the dark closing background. The inquiry and workflow cards are illustrative examples, not live customer records.

The final development-server smoke check also passed (rendering, React hydration and opening the diagnostic). Structured viewport results are stored in validation/responsive-checks.json.
