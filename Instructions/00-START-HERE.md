# Optimus AI — Copilot Build Pack

## Purpose

This repository contains the product, design, architecture, engineering, security, content, SEO, analytics, and deployment instructions for building the Optimus AI marketing website and preparing it to grow into the Optimus product platform.

Treat these files as the source of truth. When requirements conflict, use this priority:

1. `01-PRODUCT-VISION.md`
2. `02-WEBSITE-REQUIREMENTS.md`
3. `03-DESIGN-SYSTEM.md`
4. `04-TECH-STACK.md`
5. Product specifications under `products/`
6. Engineering/security/deployment documents
7. Copy/content documents

## Copilot Operating Instructions

You are building a production-quality website for **Optimus AI**, an AI operations company based in Calgary, Canada.

Do not build a generic AI-agency template.

The website should communicate that Optimus is becoming a product company with a focused initial portfolio and a larger platform vision.

### Core positioning

**Optimus AI — AI that does the work.**

Optimus develops AI agents for customer operations and finance.

### Initial product portfolio

**Optimus Business**
- Optimus Voice
- Optimus Lead
- Optimus Office

**Optimus Finance**
- Optimus AR
- Optimus Analyst

### Platform vision

The five products should appear to be powered by a common Optimus intelligence platform consisting of:

- AI agents
- workflow orchestration
- business context
- integrations
- permissions
- human approvals
- observability
- security

### Important honesty rule

Do not fabricate:
- customers
- revenue
- usage statistics
- testimonials
- partnerships
- certifications
- SOC 2 status
- ISO certification
- integrations that have not been built
- product availability

Use honest labels such as:
- Private Pilot
- Early Access
- In Development
- Planned

### Design inspiration

The information architecture may take inspiration from premium enterprise AI companies such as Cohere, but do **not** copy their exact visual design, source code, illustrations, text, brand assets, colors, or page content.

Optimus must have its own visual identity.

## Build sequence

1. Set up Next.js application.
2. Implement design tokens and global layout.
3. Build responsive navigation and footer.
4. Build homepage.
5. Build reusable product-page template.
6. Build five product pages.
7. Build Platform, Solutions, Security, About, Contact, and Resources pages.
8. Implement demo/design-partner forms.
9. Add analytics.
10. Add SEO/schema/metadata.
11. Run accessibility, performance, mobile, and security checks.
12. Deploy.

## Definition of done

The first release is done when:

- Homepage is polished on desktop and mobile.
- Five product pages exist.
- Product status is transparent.
- Demo request form works.
- Design Partner form works.
- Analytics events work.
- Metadata and sitemap exist.
- Lighthouse-oriented performance practices are followed.
- No fake social proof appears.
- Website can be deployed to `optimus-ai.com`.
