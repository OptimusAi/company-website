# Optimus AI Design System

## Design objective

Optimus should feel like a premium enterprise AI product company: intelligent, restrained, technically sophisticated, trustworthy, and modern.

Avoid the appearance of:
- generic AI agencies
- crypto projects
- template SaaS landing pages
- consumer chatbot products

## Visual principles

1. Large typography.
2. Generous whitespace.
3. Product UI as visual storytelling.
4. Restrained animation.
5. Strong hierarchy.
6. High-quality grid alignment.
7. Minimal decorative clutter.
8. Excellent mobile layout.

## Brand direction

Use a primarily neutral visual system:
- near-black / charcoal
- warm or clean whites
- subtle neutral borders
- one distinctive Optimus accent family

Do not copy Cohere's palette.

Exact production colors should be represented as CSS variables so they can be adjusted centrally.

Example token structure:

```css
:root {
  --background: ...;
  --foreground: ...;
  --surface: ...;
  --surface-elevated: ...;
  --border: ...;
  --muted: ...;
  --accent: ...;
  --accent-soft: ...;
}
```

## Typography

Prefer a high-quality modern sans-serif available through a legal web-font source or system stack.

Create tokens for:

- Display XL
- Display L
- H1
- H2
- H3
- Body Large
- Body
- Small
- Label

Headlines should be concise.

Do not fill sections with oversized marketing paragraphs.

## Layout

Desktop max content width:
approximately 1200–1360px.

Use:
- 12-column grid on desktop
- sensible tablet breakpoints
- single-column mobile layouts where appropriate

Sections should have generous vertical rhythm.

## Components

Required shared components:

- `Navbar`
- `MegaMenu`
- `MobileNavigation`
- `Footer`
- `Container`
- `Section`
- `SectionHeader`
- `Button`
- `Badge`
- `ProductCard`
- `FeatureCard`
- `MetricCard`
- `DemoWindow`
- `AgentFlow`
- `IntegrationGrid`
- `IndustryCard`
- `QuoteCard` only when real quotes exist
- `CTASection`
- `FormField`
- `StatusBadge`

## Product UI illustrations

Avoid stock photography.

Prefer custom UI simulations:

### Voice
- incoming call
- live transcript
- intent
- urgency
- contact details
- booking confirmation

### Lead
- lead profile
- qualification fields
- conversation
- score/status
- appointment

### Office
- email/document trigger
- workflow nodes
- retrieval
- approval
- action

### AR
- aging metrics
- collection priority list
- payment blockers
- promise-to-pay
- disputes
- escalation

### Analyst
- finance question
- answer
- variance bridge/chart
- drivers
- follow-up prompts

## Motion

Use motion to explain behavior, not merely decorate.

Preferred:
- fades
- subtle transforms
- staggered data flow
- number transitions
- line/flow animation
- UI state transitions

Avoid:
- excessive parallax
- constant floating objects
- huge spinning gradients
- animation that interferes with reading

Respect `prefers-reduced-motion`.

## Accessibility

- Semantic HTML.
- Visible keyboard focus.
- WCAG-oriented contrast.
- Form labels.
- Meaningful button/link text.
- ARIA only where necessary.
- Do not rely on color alone to communicate status.
- All interactions keyboard accessible.

## Responsive requirements

Test at minimum:
- 375px
- 430px
- 768px
- 1024px
- 1440px

No horizontal scrolling.

Product dashboard illustrations must simplify gracefully on mobile.
