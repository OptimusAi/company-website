# Deployment Guide

## Target

Production hosting:
**Vercel**

Domain:
**optimus-ai.com**

## Environments

Use:
- local
- preview
- production

Every pull request should generate a preview deployment when possible.

## Environment variables

Create `.env.example` with placeholders only.

Expected variables may include:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
RESEND_API_KEY=
DEMO_REQUEST_TO_EMAIL=
DESIGN_PARTNER_TO_EMAIL=
```

Configure real values in deployment environment, never Git.

## CI checks

Before merge/deploy:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Add Playwright critical-flow tests when practical.

## Pre-production checklist

- all links work
- mobile navigation works
- forms deliver correctly
- success/error states work
- metadata is correct
- favicon/app icons exist
- sitemap exists
- robots configuration correct
- analytics production key configured
- no staging URLs in metadata
- no secrets committed
- no fake customer claims
- legal pages linked
- 404 page exists
- reduced motion works
- keyboard navigation checked
- images optimized

## Domain

Point the production domain to the deployment provider according to the provider's current DNS instructions.

Configure:
- apex domain
- `www` redirect strategy
- HTTPS
- canonical domain

Recommended canonical:
`https://optimus-ai.com`

## Rollback

Use deployment history for immediate rollback if a production release introduces a serious regression.
