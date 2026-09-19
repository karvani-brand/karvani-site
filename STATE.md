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

- 2026-09-14 — hero ingredient line reworded (neem, goat milk, sandalwood, saffron, tulsi, rose; `by&nbsp;hand.` kept on one line at 360px); "hand-poured in small batches" dropped from all 12 card descriptions; product thumb 110px→132px; made-by-hand photos replaced with `ingredients-flatlay.jpg` + `soap-batch.jpg` (bottom 17% cropped off), old `soap-ingredients.png`/`making-process-ingredients.png` deleted; Sunnipindi card labelled "Sunnipindi (Ubtan Soap)".

- 2026-09-14 — masthead `™` glyph replaced by circled "TM" (`.brandmark .tm`, true circle, top-aligned with the cap height); Sunnipindi ingredients corrected to Sunnipindi Powder / goat milk / orange essential oil / vitamin E (almond oil and glycerin dropped); "Red Sandalwood" removed from the Sandalwood card; single-ingredient cards renamed with "Soap" (Manjishta, Papaya, Sandalwood, Charcoal, Rose) — paired names (Neem & Tulasi etc.) left alone; footer gained 🧿 KARVANI 🧿 and the made-by-hand → how-to-order gap was halved.

- 2026-09-14 — shipping is **not** included in any listed price. Stated in three places: the catalog sub-line, a `+ shipping` line in the sticky order bar (`.ship-note`), and the prefilled WhatsApp message ("Total: ₹N + shipping"). Delivery charge is quoted manually on WhatsApp — no shipping calculation in code. Worst-case sticky-bar height with both notes = 93px, still under the 96px `#order-bar-spacer`.

- 2026-09-14 — free shipping on 10+ bars (`FREE_SHIP_MIN = 10` in `app.js`): the sticky bar's ship note flips to "Free shipping ✓" and the WhatsApp total reads "(free shipping)" instead of "+ shipping". Stated positively as a threshold to hit, not as a fee. Products header order is now title → 3-bar bundle callout → sub-line.

- 2026-09-18 — testimonials: Indra's quote replaced wholesale (it referenced the body scrub, a product dropped from the catalog in 9a0ed1f); Karthik's restored as a claim-light version ("the only soap I use now — it's gentle and I like how it feels", replacing "keeps my skin calm"); Sravani's untouched. The pigmentation/even-tone sentence in Indra's original review is deliberately left out — a pigmentation claim is a drug claim under Indian law and needs a drug licence; now a permanent rule in `CLAUDE.md`. Verified at a real 360px viewport (headless Chrome, CDP device metrics): 3 cards × 210px, scroll-snap-type `x mandatory` engaged, every probed scrollLeft rests on a snap point (0 / 220 / 330), no text clipping, no horizontal page overflow. All three quotes still carry skin-benefit wording and must be swapped before a public launch.

- 2026-09-18 — testimonials swipe row replaced by a vertical stack (`.testimonial-row` is now `flex-direction: column; gap: 10px`; `.testimonial-card` is down to background/radius/padding). Cards are content-height instead of all stretching to the tallest, and full width (320px at 360px viewport) so long quotes reflow shorter. Measured at 360px: Indra 164px, Karthik 89px, Sravani 89px (was 220/220/220), section 493px tall, no nested scroll in either axis, no clipping, no horizontal page overflow. Show-more/`<details>` capping deliberately not built — expected ceiling is 5–8 testimonials, which all fit.

## Current phase

- Build complete. Only launch-day CONFIG values remain (below).

## Decisions made

- Real repo root is `E:\Dev\Karvani\soap-store`; `assets/images/` is the image source of truth; `design-handoff/` is visual/copy reference only, not served.
- `CONFIG.WHATSAPP_NUMBER` = `+91-9396857360` and `CONFIG.PROMO_CODE` = `KARVANI20` are real launch values.
- Bundle pricing formula verified: 1→149, 3→399, 4→548, 6→798, 7→947 (see BUILD_REPORT Phase 3).
- GitHub Pages source: `main` branch, root. Every push deploys in ~60–75s.
- Static text uses `data-config="..."` hooks overwritten from `CONFIG` on load — edit `app.js` CONFIG only, never the HTML copy.
- Testimonials are a **vertical stack**, not the design's horizontal swipe row (changed 2026-09-18). The row's `33.333%` flex-basis, `min-width: 210px`, `scroll-snap-type: x mandatory`, `scroll-padding-left` and `margin: 0 -20px` are all gone. Reason: in a flex row every card stretches to the tallest, so a long quote forced ~110px of dead space onto every short one. Do not reintroduce a nested vertical scroll box here — an inner vertical scroller inside a vertically scrolling page steals the swipe on phones and hides content.
- `.claude/settings.local.json` briefly tracked in commit f44de7c; untracked + gitignored in 1ee540c.

## Open items (launch blockers — all are CONFIG edits in app.js + push)

- ~~`UPI_ID` placeholder~~ — done: `CONFIG.UPI_ID` = `shambavibl-1@okicici`. Added `CONFIG.UPI_PAYEE_NAME` = `moglipuram shambavi` (the bank account holder shown on the QR) as a field separate from `CONFIG.PAYEE_NAME` ("KARVANI", the business brand used in the WhatsApp CTA) — they're different real-world values that happened to share one config key before.
- `FEEDBACK_FORM_URL` — placeholder; "Share your experience" link stays dead until filled.
- `GOOGLE_FORM_URL` — placeholder; "Order via Google Form" link stays dead until filled.
- Google Form / Sheet / Apps Script email trigger being built outside this repo (Google account work).
