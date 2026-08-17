# Product Specification — Optimus AR

## Positioning

**Turn receivables into actionable intelligence.**

Optimus AR is designed to help finance teams prioritize collections, organize follow-up, understand payment blockers, and focus people on accounts requiring human intervention.

## Target users

- AR specialists
- controllers
- finance managers
- CFOs

## Initial customer profile

Mid-market organizations with:
- meaningful B2B receivables
- recurring overdue invoices
- manual collections workflows
- multiple payment blockers
- finance teams using spreadsheets/email alongside accounting/ERP systems

## Problem

Typical process:

```text
aging report
→ identify overdue invoice
→ inspect customer
→ email
→ wait
→ follow up
→ interpret response
→ update spreadsheet
→ escalate issue
```

This creates repetitive work and poor visibility into why cash is delayed.

## MVP

Start with secure import/sample workflow rather than claiming universal ERP integration.

Capabilities:

- AR-aging import
- aging segmentation
- account/invoice prioritization
- customer-level view
- collections queue
- draft follow-up
- response categorization
- blocker tracking
- promise-to-pay tracking
- dispute status
- escalation
- management dashboard

## Example blocker categories

- missing PO
- invoice not received
- invoice dispute
- incorrect invoice
- awaiting internal approval
- payment promised
- customer unresponsive
- unknown/other

## Dashboard example

Metrics may include:

- total AR
- overdue AR
- 1–30 / 31–60 / 61–90 / 90+
- promise-to-pay
- disputed
- missing documentation
- high-priority accounts

Do not display invented customer results as real results.

## AI responsibilities

AI may assist with:
- response interpretation
- summarization
- draft communication
- prioritization recommendations
- blocker classification

Deterministic code should calculate:
- invoice age
- balances
- totals
- aging buckets
- financial arithmetic

## Human control

During early stages, external collections communications should support review/approval unless a customer explicitly configures a validated automated workflow.

## Future

- ERP/accounting integrations
- email integration
- payment prediction
- collection strategies
- team assignment
- workflow automation
- cash forecasting signals

## Success metrics

- overdue AR trend
- collection-cycle time
- employee touches per invoice/account
- blocker resolution time
- promise-to-pay tracking
- DSO, interpreted carefully in customer context
