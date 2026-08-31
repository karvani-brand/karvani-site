# Karvani Site

Static storefront for Karvani — handmade non-medicated cleansing soaps.
Proprietor: Mogilipuram Sambavi. Secunderabad, Telangana.

## Live

https://karvani.in (GitHub Pages, karvani-brand/karvani-site)
www.karvani.in redirects to apex automatically.

## Stack

Plain HTML / CSS / JS. No build step, no package.json, no framework.

- index.html — single page, all sections
- style.css — all styles
- app.js — CONFIG object at top holds promo code, UPI ID, WhatsApp number

## Deploy

Push to main. GitHub Pages deploys from main /(root). Live in ~1 min.
CNAME file must stay in repo root — removing it breaks the custom domain.

## Rules

- Minimal code. No dependencies. No frameworks. No build tooling.
- Mobile-first: must work at 360px width.
- Orders go via WhatsApp link. No cart, no checkout, no payment processing.
- Do not commit anything under brand-clearance/ (trademark evidence, gitignored).
- design-handoff/ is reference material, not shipped code.

## Git

Remote uses SSH alias: git@github-karvani:karvani-brand/karvani-site.git
Commit identity is repo-local: Karvani <322809778+karvani-brand@users.noreply.github.com>
