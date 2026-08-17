# Product Specification — Optimus Analyst

## Positioning

**Ask business questions. Get financial answers.**

Optimus Analyst is designed to help finance leaders investigate performance, understand variances, identify drivers, and explore financial information conversationally.

## Users

- CFO
- controller
- FP&A
- finance manager
- business leaders with authorized access

## Problem

Questions such as:

- Why are operating expenses over budget?
- What drove margin decline?
- Which departments caused the variance?
- Which vendors increased the most?
- How does this month compare with the prior six months?

often require analysts to manually pull, clean, join, calculate, investigate, and explain data.

## MVP strategy

Do not begin with autonomous access to every ERP.

Start with controlled sample/authorized structured datasets such as:

- GL
- budget
- actuals
- AR
- AP
- dimensions such as department/vendor/project

## Architecture principle

Separate:

1. Data ingestion/validation
2. Semantic/metric layer
3. Deterministic calculations
4. Retrieval/context
5. LLM interpretation
6. Response with traceability

The LLM should not be the authoritative calculation engine.

## MVP capabilities

- upload/import structured financial data
- validate schema
- calculate standard metrics
- budget-vs-actual analysis
- variance ranking
- trend analysis
- drill-down
- natural-language question interface
- source/driver references
- follow-up questions
- export/share summary later

## Example interaction

**Question:** Why were operating expenses above budget?

**Response structure:**

- total variance
- percentage variance
- ranked drivers
- explanation
- relevant departments/vendors/accounts
- source period/data
- suggested follow-up questions

All numeric answers must originate from deterministic calculations or verified query results.

## Trust requirements

Every material answer should make it possible to understand:
- period
- scope
- source
- calculation
- AI interpretation

## Website demo

Use clearly labeled sample financial data.

Do not present sample metrics as customer results.

## Future

- ERP integrations
- semantic financial model
- forecasting
- management reporting
- board/report preparation assistance
- anomaly investigation
- role-based views

## Success metrics

- time to answer finance questions
- analyst hours saved
- accuracy
- source traceability
- user adoption
- repeated query workflows
