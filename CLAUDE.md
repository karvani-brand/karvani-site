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
Current testimonials on the site are verified genuine — leave them intact.
Never invent, embellish or add a placeholder testimonial.

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
