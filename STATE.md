# STATE.md — KARVANI site

## Brand & legal

- Brand: **KARVANI**. Tagline: "Crafted with hands." Proprietor: Mogilipuram Sambavi, Secunderabad, Telangana.
- Trademark application 7946365, Class 3, word mark, filed 21 Aug 2026. Status: Ready for Examination — **NOT yet registered**. Use `KARVANI™` on first prominent use per page; never `®` until the certificate issues.
- Positioning is permanently fixed: plain cleansing soap. No skin-benefit, ayurvedic, medicinal, herbal, or "treats X" claims anywhere — copy, alt text, metadata, filenames, imagery. Full banned-word list and copy rule live in `CLAUDE.md`.
- Rebranded 2026-08-31 from "Amma's Ayurvedic Soaps": brand name, promo code (`AMMA20`→`KARVANI20`), payee name, and every skin-benefit/ayurvedic claim sentence replaced with plain ingredient/process copy — across `index.html`, `app.js`, all docs, and `design-handoff/`. `amma-portrait.jpg`→`sambavi-portrait.jpg`, `natural-ingredients.png`→`soap-ingredients.png`.

## Infrastructure

- Live at https://karvani.in — GitHub Pages, repo `karvani-brand/karvani-site`. `www.karvani.in` redirects to apex automatically.
- `CNAME` file must stay in repo root — removing it breaks the custom domain.
- Deploy: push to `main`, GitHub Pages builds from `main`/root, live in ~1 min.
- Git remote: SSH alias `git@github-karvani:karvani-brand/karvani-site.git` (never HTTPS). Commit identity is repo-local: `Karvani <322809778+karvani-brand@users.noreply.github.com>`.

## What's built

- **All phases (1–7) complete.** Site is live end to end at https://karvani.in
- Phase 1 — walking skeleton: header + one card + working wa.me link.
- Phase 2 — full static layout: every design section in order (hero, terracotta promo banner, 7 product cards with images/captions, testimonials, made-by-hand, how-to-order + UPI card, footer), design palette/typography in `style.css`.
- Phase 3 — order builder: qty steppers per card, sticky order bar (count, total, bundle badge, prefilled wa.me send link), bundle pricing `floor(n/3)*399 + (n%3)*149` as pure `orderTotal()`, unit-checked in `test/pricing.test.js` (0–7 bars, all pass).
- Phase 4 — testimonials swipe row: `min-width: 210px` on cards so the design's x-mandatory scroll-snap actually engages on phones.
- Phase 5 — CONFIG→DOM wiring: `data-config` spans (promo code, UPI ID, payee, footer number), general WhatsApp CTA, placeholder-aware feedback/Google-Form links (stay `#` until CONFIG filled).
- Phase 6 — mobile polish: sticky bar fits 360px (≤380px media query), `scroll-padding-left` snap alignment, `loading="lazy"` on 9 below-fold images, theme-color meta. Sticky bar (~72px) never covers content (96px spacer).
- Phase 7 — docs: `README.md` (technical), `ORDER_GUIDE.md` (non-technical operator). `BUILD_REPORT.md` holds per-phase verification evidence.
- Phase 8 — real assets: Sambavi's portrait into the hero founder-quote slot (replacing the `hero-soaps-crop.png` stand-in), real UPI QR into the payment card (replacing the striped placeholder box). Both cropped square from source with `scratchpad/prep_assets.py` (QR block auto-detected at 719×719, re-padded with a 10% quiet zone).

## Current phase

- Build complete. Only launch-day CONFIG values remain (below).

## Decisions made

- Real repo root is `E:\Dev\Karvani\soap-store`; `assets/images/` is the image source of truth; `design-handoff/` is visual/copy reference only, not served.
- `CONFIG.WHATSAPP_NUMBER` = `+91-9396857360` and `CONFIG.PROMO_CODE` = `KARVANI20` are real launch values.
- Bundle pricing formula verified: 1→149, 3→399, 4→548, 6→798, 7→947 (see BUILD_REPORT Phase 3).
- GitHub Pages source: `main` branch, root. Every push deploys in ~60–75s.
- Static text uses `data-config="..."` hooks overwritten from `CONFIG` on load — edit `app.js` CONFIG only, never the HTML copy.
- Testimonial cards deviate from the design's `33.333%` flex-basis with `min-width: 210px` — the design's own scroll-snap is dead code without it (cards would be ~100px on phones).
- `.claude/settings.local.json` briefly tracked in commit f44de7c; untracked + gitignored in 1ee540c.

## Open items (launch blockers — all are CONFIG edits in app.js + push)

- ~~`UPI_ID` placeholder~~ — done: `CONFIG.UPI_ID` = `shambavibl-1@okicici`. Added `CONFIG.UPI_PAYEE_NAME` = `moglipuram shambavi` (the bank account holder shown on the QR) as a field separate from `CONFIG.PAYEE_NAME` ("KARVANI", the business brand used in the WhatsApp CTA) — they're different real-world values that happened to share one config key before.
- `FEEDBACK_FORM_URL` — placeholder; "Share your experience" link stays dead until filled.
- `GOOGLE_FORM_URL` — placeholder; "Order via Google Form" link stays dead until filled.
- Google Form / Sheet / Apps Script email trigger being built outside this repo (Google account work).
