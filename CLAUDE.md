# CLAUDE.md — aitherapy-website

## Project overview
Astro + Tailwind CSS landing page for TherapySupport (aitherapy.support).
Deployed via GitHub Actions to Azure Static Web Apps.

## Key architecture decisions

### Centralized URLs (src/data/links.ts)
All beta-related URLs are defined in `src/data/links.ts`:
- `BETA_PAGE_URL` = `/betatester/` — used in nav, Hero, CTA, blog links
- `BETA_CHECKOUT_URL` = `https://app.aitherapy.support/betatester` — only for reference

**DO NOT hardcode `app.aitherapy.support/betatester` in any component.**
Always import from `src/data/links.ts`.

### Beta signup flow (betatester.astro)
The `/betatester/` page has an inline Stripe checkout form (email + phone + consent).
It calls the backend API directly:
- `GET https://app.aitherapy.support/api/stripe/plans` — fetches plans with stripePriceId
- `POST https://app.aitherapy.support/api/stripe/create-checkout-session` — creates Stripe session

Stripe config from AITS-React:
- Coupon ID: `promo_1Sz2UvALc8BRQ1zZG52z9NDN` (Beta Tester -30% forever)
- Trial days: 35 (5 weeks)
- Plan: `professional` (billingPeriodId 1=monthly, 2=yearly)

CORS is configured on the backend to allow requests from `https://aitherapy.support`.

### Navigation
Defined in `src/data/navigation.ts`, imports `BETA_PAGE_URL` from links.ts.

## Commands
- `npm run build` — build the site
- `npm run dev` — local dev server

## Important rules
- Never link CTA buttons directly to `app.aitherapy.support` — always go through `/betatester/` first
- Do not change URLs in `links.ts` without explicit approval from the project owner
- The backend app lives at `/Users/bartlomiejglowacki/Documents/REPOS/TherapySupportRepo/AITS-React`
