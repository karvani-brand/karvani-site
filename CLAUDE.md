# Karvani Site

Static storefront for Karvani — handmade non-medicated cleansing soaps.
Proprietor: Mogilipuram Sambavi. Secunderabad, Telangana.

## Live

https://karvani.in (GitHub Pages, karvani-brand/karvani-site)
www.karvani.in redirects to apex automatically.

## Stack

Plain HTML / CSS / JS. No build step, no package.json, no framework.

- `index.html` — single page, all sections
- `style.css` — all styles
- `app.js` — CONFIG object at top holds promo code, UPI ID, WhatsApp number

## Deploy

Push to main. GitHub Pages deploys from main /(root). Live in ~1 min.
CNAME file must stay in repo root — removing it breaks the custom domain.

## Brand — hard constraints

Brand: **KARVANI**. Tagline: "Crafted with hands."
Trademark: application 7946365, Class 3, word mark, filed 21 Aug 2026.
Status: Ready for Examination. **NOT yet registered.**

Positioning is permanently fixed: **plain cleansing soap.**
No skin-benefit, ayurvedic, medicinal, herbal or "treats X" claims —
ever, in copy, alt text, metadata, filenames or imagery.

### Banned words

ayurvedic · herbal · medicinal · natural · pure · gentle · organic ·
glow · nourishing · heals · treats · cures · remedy · therapeutic

Never reintroduce these, even if asked casually.

### Copy rule

Describe, never claim. Scent, size, weight, ingredients, how it's made.
Never what it does to skin.

- Wrong: "gentle natural soap that nourishes dry skin"
- Right: "sandalwood-scented bar soap, 100g, cold-process, hand-cut"

### Trademark symbol

Use `KARVANI™` on first prominent use per page. **Never ®.**
The mark is filed, not registered. Using ® on an unregistered mark is an
offence under the Trade Marks Act. Revisit only when the certificate issues.

### Testimonials

Only real, attributable quotes from actual customers.
Never invent, embellish or add a placeholder testimonial.

**Never publish a pigmentation, even-tone, fairness or complexion claim
in a testimonial — permanent rule, no exceptions.** Indra's original
review contained a sentence about pigmentation and even-toned skin. It is
deliberately omitted from the live quote and must never be added back:
under Indian law a claim to change pigmentation is a drug claim, not a
cosmetic one, and needs a drug licence — and a published testimonial is
legally the brand's own claim, whoever said it. This holds even though
the sentence is a genuine customer's own words.

Known exception, deliberate: the live quotes still carry skin-benefit
language — "smoother and softer" (Sravani), "gentle" plus "leaves the
skin feeling clean, soft, and refreshed" (Indra), "gentle" (Karthik).
These are genuine quotes, kept for now while selling to a close circle.
A published testimonial is legally the brand's own claim, so these must
be replaced before any public launch — with quotes about scent, lather
or how long a bar lasts. Do not add any new claim-carrying testimonial.

Closed 2026-09-18: no testimonial references a discontinued product any
more. Indra's quote used to mention the body scrub, removed from the
catalog in 9a0ed1f; her quote was replaced wholesale.

## Rules

- Minimal code. No dependencies. No frameworks. No build tooling.
- Mobile-first: must work at 360px width.
- Orders go via WhatsApp link. No cart, no checkout, no payment gateway.
- A UPI ID and QR image **are** displayed for manual payment. These are
  intentional and must not be removed.
- Do not commit anything under `brand-clearance/` (trademark evidence, gitignored).
- `design-handoff/` is reference material, not shipped code.

## Git

Remote uses SSH alias: `git@github-karvani:karvani-brand/karvani-site.git`
Never use an HTTPS remote URL for this repo.
Commit identity is repo-local: `Karvani <322809778+karvani-brand@users.noreply.github.com>`
