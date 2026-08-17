# Forms and Lead Capture

## Goal

Every serious visitor should have a clear conversion path.

Primary conversions:

1. Demo request
2. Design Partner application
3. Contact request

## Demo form

Fields:

- Full name — required
- Work email — required
- Company — required
- Role/title — optional
- Company size — optional select
- Product interest — required
  - Voice
  - Lead
  - Office
  - AR
  - Analyst
  - Not sure
- What would you like to automate? — optional textarea
- Consent acknowledgement — required where legally appropriate

Submit CTA:
**Request Demo**

## Design Partner form

Fields:

- Full name
- Work email
- Company
- Website
- Industry
- Team/company size
- Product/workflow interest
- Current workflow/problem
- Approximate volume if relevant
- Desired outcome
- Optional additional notes

CTA:
**Apply to Become a Design Partner**

## Form behavior

- Validate on client for usability and server for security.
- Use Zod schemas.
- Prevent duplicate accidental submissions.
- Add spam protection.
- Show useful loading state.
- Show success confirmation.
- Log analytics event.
- Send notification to configured Optimus email.
- Never log confidential free-text form content to analytics.

## Suggested analytics events

- `demo_form_viewed`
- `demo_form_started`
- `demo_form_submitted`
- `design_partner_viewed`
- `design_partner_started`
- `design_partner_submitted`
- `product_cta_clicked`

## CRM

Do not add a CRM dependency in V1 unless needed.

Design form processing so HubSpot/Salesforce/another CRM can be added later through a server-side integration.
