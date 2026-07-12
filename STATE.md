# STATE.md — Amma's Ayurvedic Soaps site

## What's built
- Phase 1 (walking skeleton) — done, live, verified.
  - `index.html`, `style.css`, `app.js` at repo root (static site, no build step).
  - Header: leaf logo (inline SVG) + wordmark.
  - One product card (Charcoal): image, name, ingredients, description, price/MRP, "Add to order" button.
  - `app.js` has a `CONFIG` object (WhatsApp number, promo code, UPI ID, payee name, feedback form URL, Google Form URL) and a `buildWhatsAppLink()` helper.
  - "Add to order" opens a prefilled `wa.me` link with an itemized message + promo code.
  - Deployed via GitHub Pages from `main` branch root. Live at https://karvani-brand.github.io/soap-store/

## Current phase
- Phase 1 complete. Next up: **Phase 2 — full static layout** (all sections from the design in order, all 7 product cards, images wired, full color/type from design). Not started.

## Decisions made
- Real repo root is `E:\Dev\personal\soap-store` (not the `./design-handoff`, `./assets/images` paths from the original request — those are subfolders here).
- `soap-store/assets/images/` (10 files, matches design's `uploads/` folder, typo-fixed filename for orange-peel-goat-milk) is the single source of truth for product/process images. `soap-store-assets/` (sibling dir, outside this repo) is staging only — not used.
- `CONFIG.WHATSAPP_NUMBER` = `+91-9396857360` and `CONFIG.PROMO_CODE` = `AMMA20` are treated as real launch values (confirmed with user), not placeholders — they were already baked into the design handoff as defaults.
- Still-placeholder CONFIG values needing launch-day input: `UPI_ID`, `FEEDBACK_FORM_URL`, `GOOGLE_FORM_URL`.
- Design-handoff HTML (`design-handoff/ayurvedic-soap-catalog/project/Ayurvedic Soap Catalog.dc.html`) already contains full working prototype logic (all 7 products, bundle pricing formula, 3 testimonials) — treat it as the reference source for content/copy/math when building later phases, not just visual reference.
- Bundle pricing formula (verified against required test cases 1→149, 3→399, 4→548, 6→798, 7→947): `UNIT=149, BUNDLE=399; bundles = floor(n/3); remainder = n%3; total = bundles*BUNDLE + remainder*UNIT`.
- GitHub Pages source: `main` branch, root — already enabled by user in repo settings before Phase 1.

## Open items
- Phases 2–7 not started (full layout, order builder + bundle math unit checks, testimonials swipe row, UPI/Google Form sections, mobile polish pass, README.md + ORDER_GUIDE.md docs).
- Google Form, Sheet, and Apps Script email trigger are being built outside this session (Google account work) — their URLs stay as CONFIG placeholders until supplied.
- UPI ID not yet provided — placeholder `[UPI_ID]` in `CONFIG`.
