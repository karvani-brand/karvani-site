# KARVANI — catalog site

Single-page product catalog + WhatsApp order flow. Static HTML/CSS/vanilla JS, no build step, no dependencies.

**Live:** https://karvani.in

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page — hero, promo banner, 7 product cards, testimonials, made-by-hand, how-to-order, footer, sticky order bar |
| `style.css` | All styling; design tokens in `:root` (palette from the design handoff, terracotta accent) |
| `app.js` | `CONFIG` block + order builder (qty steppers, bundle pricing, wa.me links) + CONFIG→DOM wiring |
| `test/pricing.test.js` | Pricing unit checks — `node test/pricing.test.js` |
| `assets/images/` | All product/process photos (source of truth) |
| `design-handoff/` | Original design prototype (visual source of truth, not served) |
| `STATE.md` | Session-to-session build state |
| `BUILD_REPORT.md` | Per-phase evidence log |
| `ORDER_GUIDE.md` | Non-technical guide for whoever runs the orders |

## How it works

- Every edit to `main` auto-deploys via GitHub Pages (Settings → Pages → `main` / root). Deploys take ~1 minute.
- Pricing: ₹149/bar, any 3 bars ₹399, applied automatically — `orderTotal(bars) = floor(bars/3)*399 + (bars%3)*149` in `app.js`.
- "Send order on WhatsApp" opens wa.me with an itemized message, total, and promo code prefilled. No backend; WhatsApp *is* the order pipe.
- Static text marked `data-config="..."` in the HTML is overwritten from `CONFIG` on page load — edit values once in `app.js`, they update everywhere.

## Launch checklist (the only remaining work)

Edit the `CONFIG` block at the top of `app.js`, commit, push:

1. `UPI_ID` — currently `[UPI_ID]`. Also replace the striped QR placeholder in `index.html` (`.upi-qr`) with a real QR image once the UPI ID exists.
2. `FEEDBACK_FORM_URL` — currently `[FEEDBACK_FORM_URL]`; the "Share your experience" link stays dead (`#`) until filled.
3. `GOOGLE_FORM_URL` — currently `[GOOGLE_FORM_URL]`; the "Order via Google Form" link stays dead (`#`) until filled.

`WHATSAPP_NUMBER` (+91-9396857360) and `PROMO_CODE` (KARVANI20) are already real values.

## Checks

```
node --check app.js
node test/pricing.test.js   # 0/1/2/3/4/5/6/7 bars + wa.me link encoding
```

Run both before pushing changes to `app.js`.
