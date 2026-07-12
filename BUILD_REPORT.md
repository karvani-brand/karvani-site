# BUILD_REPORT — Amma's Ayurvedic Soaps

Evidence log, one entry per phase. Live URL: https://karvani-brand.github.io/soap-store/

---

## Phase 2 — Full static layout (commit f44de7c)

**Built:** All sections from the design in order — hero (logo, title, intro, Amma quote card), terracotta promo banner (code AMMA20), Our Soaps intro + 3-bar bundle callout, all 7 product cards (Charcoal, Goat Milk & Flaxseed, Orange Peel & Goat Milk, Shea Butter & Coconut, Saffron & Goat Milk, Neem w/ caption, Body Scrub Bar w/ caption), testimonials section (3 quotes, static), Made by Hand (2 photos), How to Order & Pay (3 steps, UPI card with QR placeholder, WhatsApp CTA, Google Form line), footer. Inline styles from the design converted to `style.css` classes; palette/typography (Lora + Mulish, oklch colors, terracotta accent) taken verbatim from the handoff.

**Verification:**

Local — all image paths resolve, 7 cards present:
```
OK  assets/images/body-scrub-soap.png
OK  assets/images/charcoal-soap.png
OK  assets/images/goat-milk-flaxseed.png
OK  assets/images/hero-soaps-crop.png
OK  assets/images/making-process-ingredients.png
OK  assets/images/natural-ingredients.png
OK  assets/images/neem-soap-mould.png
OK  assets/images/orange-peel-goat-milk.png
OK  assets/images/saffron-goat-milk.png
OK  assets/images/sheabutter-coconut-oil.png
product cards: 7
```

Live — polled https://karvani-brand.github.io/soap-store/ after push:
```
LIVE after ~60s: found 'What Friends Are Saying'
live product cards: 7
```

**Note:** commit f44de7c accidentally tracked `.claude/settings.local.json` (via `git add -A`); untracked + gitignored in the Phase 2 wrap-up commit.

---

## Phase 3 — Order builder + bundle pricing (commit 57850fb)

**Built:** `app.js` rewritten around a qty state map. "Add to order" swaps to a −/+ stepper per card (stepper markup injected once by JS). Sticky order bar (fixed, max-width 560px) shows bar count, total, "3-bar bundle price applied ✓" when ≥3 bars, and a Send-order wa.me link with itemized message + promo code. Spacer div (96px) toggles with the bar so it never covers the last content. Pricing is a pure `orderTotal(bars)` exported for Node (`bundles*399 + remainder*149`), unit-checked in `test/pricing.test.js`.

**Verification:**

`node --check app.js` → `syntax OK`

`node test/pricing.test.js` (actual output):
```
0 bars -> ₹0 (expected ₹0) OK
1 bars -> ₹149 (expected ₹149) OK
2 bars -> ₹298 (expected ₹298) OK
3 bars -> ₹399 (expected ₹399) OK
4 bars -> ₹548 (expected ₹548) OK
5 bars -> ₹697 (expected ₹697) OK
6 bars -> ₹798 (expected ₹798) OK
7 bars -> ₹947 (expected ₹947) OK
wa.me link OK: https://wa.me/919396857360?text=Hi!%202%C3%97%20Neem
All pricing checks passed.
```
All five required cases (1→149, 3→399, 4→548, 6→798, 7→947) pass.

Live — polled after push:
```
LIVE after ~75s: order-bar markup + orderTotal() in app.js served
```

---

## Phase 4 — Testimonials swipe row (commit fd81b81)

**Built:** The design's `flex-basis: calc(33.333% - 7px)` squeezes each quote card to ~100px at 360px viewports and never overflows, so the scroll-snap the design specifies never engages. Added `min-width: 210px` to `.testimonial-card` — cards stay readable and the row swipes with x-mandatory snap.

**Verification:**

Layout arithmetic (row = 3 cards + 2×10px gaps vs visible width inside 20px section padding):
```
360px viewport: card=210px, row=650px vs visible 320px -> SWIPES (overflow 330px)
390px viewport: card=210px, row=650px vs visible 350px -> SWIPES (overflow 300px)
430px viewport: card=210px, row=650px vs visible 390px -> SWIPES (overflow 260px)
560px viewport: card=210px, row=650px vs visible 520px -> SWIPES (overflow 130px)
```

Live — polled after push:
```
LIVE after ~60s: testimonial min-width 210px served in style.css
```

---

## Phase 5 — CONFIG wiring: UPI, forms, WhatsApp CTA (commit df63d42)

**Built:** `app.js` now injects CONFIG into the static sections on load: all `[data-config]` spans (promo code ×2, UPI ID, payee name, footer WhatsApp number), the general "Message Us on WhatsApp" CTA (prefilled wa.me link with promo code), and the feedback / Google Form links. Form links keep `href="#"` while their CONFIG values are `[PLACEHOLDER]`-style — no invented URLs; filling `CONFIG.FEEDBACK_FORM_URL` / `CONFIG.GOOGLE_FORM_URL` / `CONFIG.UPI_ID` and redeploying is the entire launch procedure.

**Verification:**

```
node --check app.js -> syntax OK
node test/pricing.test.js -> All pricing checks passed.
data-config hooks in index.html (all mapped in app.js):
      1 data-config="payeeName"
      2 data-config="promoCode"
      1 data-config="upiId"
      1 data-config="whatsappDisplay"
```

Live — polled after push:
```
LIVE after ~75s: CONFIG wiring served in app.js
```

---

## Phase 6 — Mobile polish (commit 6440b66)

**Built:** ≤380px media query on the sticky bar (smaller send-button font/padding, tighter bar padding) — before it, the bar row needed ~339px of the 320px available at 360px viewports; `scroll-padding-left: 20px` so snapped testimonial cards align with the section padding; `loading="lazy"` on all 9 below-fold images (hero stays eager); `theme-color` meta.

**Verification:**

Sticky-bar coverage (all values from style.css):
```
order bar height ~72px vs spacer 96px -> NEVER COVERS ✓
```

Order-bar row fit across the required 360–430px range (after fix):
```
360px: bar row needs ~315px of 332px -> fits ✓
375px: bar row needs ~315px of 347px -> fits ✓
380px: bar row needs ~315px of 352px -> fits ✓
390px: bar row needs ~339px of 350px -> fits ✓
430px: bar row needs ~339px of 390px -> fits ✓
```
Product card text column at 360/390/430px: 182/212/252px — flex column, no overflow (`min-width: 0` on body).

Live — polled after push:
```
LIVE after ~30s: 380px media query + lazy images served
```
