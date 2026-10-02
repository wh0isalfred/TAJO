# Approved hero and navigation update

The hero now uses a white full-width split layout, inset deep navy headline, muted blue description, navy actions and an email strip beneath the text panel. The supplied office photograph is preserved as a local WebP; its 872×589 source resolution remains a limitation on large displays.

Desktop navigation starts with the stacked gold bridge and navy TAJO wordmark, then Why TAJO / How it works / What we fix. Who it’s for / FAQ / Talk to us remain on the right. The header stays visible and becomes navy when only 15% of a viewport remains below the hero. Mobile uses the existing accessible menu.

All sections below the hero, the modal and delivery API are unchanged.

Validation: production build and TypeScript passed. Browser checks at 1440, 1280, 1024, 768 and 390px confirmed no overflow or runtime errors, valid anchors, loaded hero image, scrolling header state, mobile menu, FAQ and form error summary. No-JavaScript readability and reduced motion passed. No real inquiry was sent. Development startup succeeded with a local QA-only network-interface shim; production browser validation was used after an environment-specific development cache failure.

Follow-up correction: restored the established navy hero and navigation text and removed individual white backgrounds from the two right-hand navigation links. The contact button retains its white pill.
