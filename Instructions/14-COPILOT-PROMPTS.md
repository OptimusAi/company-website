# GitHub Copilot Prompt Sequence

Use these prompts sequentially. Give Copilot access to this documentation directory before asking it to implement.

## Prompt 1 — Repository setup

Read all Markdown specifications in this repository, especially `00-START-HERE.md`, `02-WEBSITE-REQUIREMENTS.md`, `03-DESIGN-SYSTEM.md`, `04-TECH-STACK.md`, and `12-ENGINEERING-RULES.md`.

Create the initial Next.js App Router + TypeScript + Tailwind project structure for Optimus AI. Do not build the entire homepage yet. First establish:

- project configuration
- strict TypeScript
- global styles/design tokens
- shared Container/Section/Button/Badge primitives
- root layout and metadata
- navigation data model
- product configuration data
- `.env.example`
- lint/typecheck scripts

Use server components by default and keep dependencies minimal.

After implementation, report the files created and any decisions that differ from the specs.

## Prompt 2 — Navigation and layout

Using the specifications, build the production-quality responsive Navbar, Products mega-menu, mobile navigation, and Footer.

Requirements:
- accessible keyboard behavior
- visible focus
- responsive
- configuration-driven product links
- Book a Demo CTA
- no fake social proof
- premium enterprise aesthetic

Run lint/typecheck after implementation.

## Prompt 3 — Homepage

Build the homepage from `02-WEBSITE-REQUIREMENTS.md` and `06-HOMEPAGE-COPY.md`.

Create reusable sections rather than one monolithic component.

Implement:
- Hero
- transformation statement
- product family overview
- Voice showcase
- Lead/Office showcase
- Finance section
- AR dashboard simulation
- Analyst conversation simulation
- Platform section
- industries
- Connect/Understand/Act
- Security
- Vision
- Design Partner
- final CTA

Use sample/simulated data labels where required.

Do not copy Cohere assets or design.

## Prompt 4 — Motion

Add restrained Framer Motion interactions to explain product behavior.

Respect `prefers-reduced-motion`.

Prioritize:
- hero agent/data flow
- Voice state transition
- Lead qualification
- AR dashboard entrance
- Analyst response/drill-down

Do not add decorative motion that harms performance.

## Prompt 5 — Product pages

Read all five product specs in `products/`.

Create a reusable product-page system and implement:

- `/products/voice`
- `/products/lead`
- `/products/office`
- `/products/ar`
- `/products/analyst`

Each page needs:
- hero
- problem
- workflow
- product demo
- capabilities
- controls
- target use cases
- status
- CTA

Use honest maturity labels.

## Prompt 6 — Remaining marketing pages

Implement:
- Platform
- Security
- four Solution pages
- Resources
- About
- Contact
- Design Partner
- Privacy placeholder
- Terms placeholder

Do not invent legal claims. Clearly mark legal pages for professional review if they are only starter text.

## Prompt 7 — Forms

Implement Demo and Design Partner forms according to `07-FORMS-AND-LEAD-CAPTURE.md`.

Use:
- Zod
- server-side validation
- secure environment variables
- transactional email adapter
- spam/rate-limit protection appropriate to the stack
- accessible error/success states

Do not expose secrets.

## Prompt 8 — Analytics and SEO

Implement `08-SEO-AND-CONTENT.md` and `09-ANALYTICS.md`.

Add:
- page metadata
- sitemap
- robots
- canonical URLs
- Organization structured data
- PostHog adapter
- typed event helper

Do not send sensitive form text to analytics.

## Prompt 9 — Quality pass

Perform a comprehensive production review against every Markdown specification.

Check:
- responsive layout
- 375/430/768/1024/1440 widths
- keyboard navigation
- reduced motion
- accessibility
- TypeScript
- lint
- build
- broken links
- metadata
- form security
- secret exposure
- image optimization
- performance
- unsupported claims

Fix issues and produce a final checklist of what remains before production deployment.
