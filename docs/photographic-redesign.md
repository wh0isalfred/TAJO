# Photographic landing-page draft

Branch: `redesign/photographic-landing`. No merge into main is authorized.

The approved visual direction is implemented as real responsive components: split photographic hero, open centered navigation, four-block problem row, photograph beside vertical process steps, compact open trust section, fit comparison, FAQ, separate navy contact panel and white footer. Switzer is locally hosted; DM Serif Display italic supplies selective emphasis. The original bridge logo is preserved. New WebP photographs recreate the approved generated reference; they are illustrative and do not represent clients or team members. All existing assets are retained.

Motion consists of replaying section entrances, a slight photograph hover zoom and button arrow movement. Entrances start before content reaches the viewport; focused content stays visible. Reduced-motion preferences are respected, including changes made while the page is open. Navigation stays fixed and becomes navy near the end of the hero.

Existing setup form and server-side Resend integration are preserved. FAQ answers and fit copy remain complete rather than being shortened to match the mockup's limited text space. Original production assets and secrets were not changed. No dependencies were added.

## Validation

- Production build and TypeScript checks passed.
- Browser checks at 1440, 1280, 1024, 768 and 390px passed: no horizontal overflow, loaded images and fonts.
- Menu opening/dismissal, five anchor links and persistent navy header passed.
- Native FAQ exclusive opening and keyboard activation passed.
- Form error summary, invalid email, retained answers, email draft recipient and confirmed success passed using mocked delivery. No real email was sent.
- Development startup, repeat reveal entrances and modal focus trapping/restoration passed.
- Runtime reduced motion and no-JavaScript content readability passed.
- Desktop and mobile screenshots were reviewed against the approved composition.

This remains a reviewable design branch. Production is unchanged until explicitly approved for merge.
