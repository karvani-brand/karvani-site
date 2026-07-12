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
