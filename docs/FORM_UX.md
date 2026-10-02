# TAJO setup modal

## Purpose and layout
The supplied reference establishes an image beside a pale form panel, with persistent labels, rounded controls and a single primary action. The unchanged `assets/old_assets/hero.webp` is served from its existing public copy. Switzer, navy actions and restrained gold focus accents match the landing page. The image is decorative and disappears on tablets and phones; inputs stack into one column. The title and close control stay visible while the form body scrolls, including short mobile viewports.

The form asks for name, email and the three approved setup questions. Business name/website and phone are optional. No work-email requirement, role field, automatic assessment or qualification gate. The descriptive heading receives initial focus so opening the modal does not immediately open a phone keyboard.

## Feedback and accessibility
- Persistent labels and explicit optional instructions; placeholders provide examples rather than replacing labels.
- Validate on submission. Show errors beside their fields, connect them with `aria-describedby`/`aria-invalid`, and focus a linked error summary. Clear existing errors when corrected; do not interrupt first-time typing.
- Preserve all answers through validation, delivery failure, draft editing, closing and reopening. Answers are held in component memory, not persistent browser storage; reloading clears them.
- Use native modal dialog semantics, keyboard wrapping, Escape, a visible close control and focus restoration. Lock background scrolling only while the setup dialog is open.
- Keep 16px input text and controls at least 44px high. Respect reduced motion and allow short viewports to scroll internally.
- Disable controls while submitting, announce pending status and guard against concurrent duplicate submissions. Requests time out after 20 seconds.
- Show success only when the provider returns both a successful HTTP status and `success: true`. Failures retain answers and offer retry or an email draft.

## Delivery configuration
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` must be configured at build time for direct delivery. No key is committed. Without it, the action explicitly prepares an email for review and sending; opening a draft never triggers a sent confirmation. Keep the existing contact destination unless the user requests a change. The delivery provider handles server-side validation; client validation is an aid rather than a security boundary.

## Research
- [W3C WAI: forms](https://www.w3.org/WAI/tutorials/forms/) — ask only what is needed and label controls.
- [W3C WAI: notifications](https://www.w3.org/WAI/tutorials/forms/notifications/) — inline errors, descriptions and accessible feedback.
- [W3C WAI: instructions](https://www.w3.org/WAI/tutorials/forms/instructions/) — placeholders are not persistent instructions.
- [GOV.UK: validation](https://design-system.service.gov.uk/patterns/validation/) — avoid premature validation and preserve answers.
- [GOV.UK: error summary](https://design-system.service.gov.uk/components/error-summary/) — summary focus and links to affected fields.
- [W3C APG: modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) — contained keyboard navigation, Escape and focus return.
- [Web3Forms API reference](https://docs.web3forms.com/getting-started/api-reference) — provider request and confirmation handling.

## Validation
Browser checks cover 1440, 1280, 1024, 768 and 390px, plus short 390px viewports, reduced motion, focus wrapping, summary links, optional fields, personal email, invalid email, retained answers, email drafts and keyboard/backdrop dismissal. Delivery checks use a synthetic key and intercepted requests only: HTTP error, rejected success flag, malformed JSON, network failure, timeout, retry, pending state, duplicate prevention and confirmed success. No real test enquiries are submitted. Browser checks supplement production build and TypeScript checks; they do not certify every browser or assistive technology.
