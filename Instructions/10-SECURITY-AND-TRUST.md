# Security and Trust Requirements

## Marketing rule

Never claim a certification or security capability that has not been implemented and verified.

Do not claim:
- SOC 2 compliant
- SOC 2 certified
- ISO 27001 certified
- HIPAA compliant
- PCI compliant
- private VPC deployment
- zero data retention

unless factually established.

## Security principles to communicate

Optimus products should be designed toward:

- least-privilege access
- role-based authorization
- secure authentication
- encryption in transit
- encryption at rest where applicable
- secrets management
- auditability
- tenant isolation
- human approval for sensitive actions
- data minimization
- configurable retention
- responsible AI practices

## Website security

- no secrets in browser bundles
- server-side form processing
- validate and sanitize input
- rate limit public endpoints
- spam protection
- security headers
- HTTPS only in production
- dependency scanning
- avoid unsafe HTML rendering
- Content Security Policy where practical

## Finance-product requirements

Finance features will eventually require stronger controls.

Architect toward:
- tenant-level isolation
- granular permissions
- audit logs
- source citations/traceability
- deterministic calculations outside the LLM where appropriate
- approval gates before external actions
- explicit data provenance
- secure file handling
- retention/deletion policies

## AI trust pattern

For consequential finance outputs, the product should distinguish:

- source data
- deterministic calculations
- AI interpretation
- recommendation
- approved action

An LLM should not be treated as the authoritative calculator or accounting ledger.

## Human-in-the-loop

Default to human approval for:
- sending sensitive financial communications during early product stages
- changing financial records
- committing payment terms
- accounting entries
- material business decisions

Autonomy can increase only after workflows are validated and controls exist.
