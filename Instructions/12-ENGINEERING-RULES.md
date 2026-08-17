# Engineering Rules for Copilot

## General

Write maintainable production code.

### TypeScript
- strict mode
- no casual `any`
- define reusable types
- validate external input

### React
- server components by default
- client components only when interaction requires them
- avoid unnecessary state
- avoid effect-heavy implementations

### Components
Do not create a 1,000-line homepage component.

Break the site into logical reusable components.

### Data
Store product metadata in structured data/configuration.

Example:

```ts
type ProductStatus =
  | "private-pilot"
  | "early-access"
  | "in-development"
  | "planned";

interface Product {
  slug: string;
  name: string;
  family: "business" | "finance";
  status: ProductStatus;
  shortDescription: string;
}
```

Use this data to populate:
- navigation
- cards
- status badges
- related product sections

### Copy
Do not hardcode the same marketing copy in several components.

### Styling
- Tailwind for component styling
- CSS variables for global design tokens
- avoid arbitrary one-off values everywhere
- responsive by design

### Accessibility
Every interactive control must be keyboard usable.

### Performance
Avoid client-side libraries when CSS/server rendering can solve the problem.

### Forms
- server-side validation
- typed schema
- no client secrets
- graceful error handling

### Errors
Do not swallow errors silently.

### Logging
Never log sensitive form submissions or future financial/customer data indiscriminately.

### Comments
Comment why, not obvious syntax.

## Git workflow

Suggested branches:
- `main`
- feature branches

Suggested commit pattern:
- `feat: build homepage hero`
- `feat: add AR product page`
- `fix: mobile navigation overflow`
- `chore: configure analytics`

## Pull request expectations

Every PR should state:
- what changed
- screenshots for UI changes
- mobile tested
- accessibility considerations
- analytics changes
- known limitations
