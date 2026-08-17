# Optimus AI Website — Technology Stack

## Recommended production stack

### Application
- Next.js (current stable version)
- App Router
- React
- TypeScript

### Styling
- Tailwind CSS
- CSS variables for design tokens
- Avoid unnecessary UI frameworks

### Animation
- Framer Motion / Motion for React

### Icons
- Lucide React or equivalent lightweight icon set

### Forms
Initial:
- server-side Next.js route/server action
- validation with Zod

Email delivery:
- Resend or another transactional email provider

Never expose secret API keys client-side.

### Analytics
Recommended:
- PostHog for product/marketing event analytics

Optional:
- Google Analytics if marketing requirements demand it

### Error monitoring
Recommended:
- Sentry when site/application becomes production critical

### Hosting
- Vercel

### DNS/domain
- `optimus-ai.com`

### Content
Phase 1:
- MDX or local structured content

Later:
- add a headless CMS only when non-developers need frequent publishing

### Testing
- ESLint
- TypeScript strict mode
- Vitest or Jest for important utility logic
- Playwright for critical browser flows

### Package manager
Use `pnpm` unless existing repository requirements dictate otherwise.

## Suggested project structure

```text
src/
  app/
    (marketing)/
      page.tsx
      products/
      solutions/
      platform/
      security/
      resources/
      company/
      contact/
      design-partner/
    api/
  components/
    layout/
    marketing/
    product/
    forms/
    ui/
  content/
  data/
  lib/
  styles/
  types/
public/
```

## Configuration

Use environment variables:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
RESEND_API_KEY=
DEMO_REQUEST_TO_EMAIL=
DESIGN_PARTNER_TO_EMAIL=
```

Create `.env.example`.

Never commit real secrets.

## Rendering strategy

Marketing pages should favor:
- static generation
- server components by default
- client components only for actual interactivity

Avoid turning the entire homepage into a client component.

## Performance

- `next/image` for raster images
- optimized SVGs
- font optimization
- lazy-load below-the-fold heavy visuals
- dynamic import for expensive client-only visualizations
- minimize JavaScript
- no autoplay background video unless strongly justified
- no massive animation libraries beyond what is needed

## Future application architecture

Do not prematurely build the full SaaS backend into the marketing repository.

When product applications mature, consider:

```text
optimus-ai.com          marketing
app.optimus-ai.com      customer application
api.optimus-ai.com      application APIs if required
```

A monorepo can later contain:

```text
apps/
  web
  app
packages/
  ui
  config
  types
  ai
```

Do not introduce monorepo complexity until there is a real second application.
