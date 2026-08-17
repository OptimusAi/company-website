# Analytics and Measurement

## Primary business metrics

The marketing website should measure:

- qualified demo requests
- Design Partner applications
- product-page engagement
- traffic source
- CTA conversion
- article → product conversion
- returning visitors

## Recommended platform

PostHog initially.

## Core events

### Navigation
- `nav_product_opened`
- `nav_cta_clicked`

### Homepage
- `hero_demo_clicked`
- `hero_explore_clicked`
- `product_card_clicked`
- `platform_section_viewed`
- `design_partner_cta_clicked`

### Product pages
- `product_page_viewed`
- `product_demo_interacted`
- `product_demo_cta_clicked`

Properties:
- product
- page
- CTA location

### Forms
- `demo_form_started`
- `demo_form_submitted`
- `design_partner_form_started`
- `design_partner_form_submitted`

## Privacy

Do not capture:
- financial data entered into demos
- sensitive free-text form content
- passwords
- authentication tokens
- customer documents

Use analytics intentionally rather than recording everything.

## Funnel

Primary:

Landing page
→ product engagement
→ demo CTA
→ demo form
→ submitted

Secondary:

Article
→ related product
→ demo
→ submitted
