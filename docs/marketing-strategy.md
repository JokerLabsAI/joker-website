# JokerLabs and Currency Exchange: commercial strategy

Date: 2026-10-14. Proposed operating plan; no campaign has been launched.

## Strategic choice

Build JokerLabs as the laboratory that turns business processes into usable software. Use Currency Exchange as the signature proof: an exchange house can connect currencies, customer information, branch permissions and reporting in one operational workflow. Keep the product endorsed as “Currency Exchange by JokerLabs” so product adoption strengthens the parent brand.

Primary product audience: owners and operating managers of Colombian exchange houses. Daily users are cashiers and branch supervisors; reporting stakeholders help assess suitability. Qualification should establish current tools, number of branches, decision maker, operational pain and readiness to evaluate. Start with businesses whose requirements fit current Core/Growth capacity; confirm capacity rather than imply unlimited branches.

Maintain a separate services path for businesses seeking custom AI, automation and software. The homepage serves both audiences; product campaigns should link directly to #currency-exchange or #cx-trial. Do not call Currency Exchange AI-powered without an implemented capability.

## Message hierarchy

1. Outcome: “Tu casa de cambio, bajo control.” / “Your exchange house, under control.”
2. Operational proof: currencies, customers, permissions and reports connected to daily work.
3. Evaluation offer: request a 7-day trial.
4. Expansion offer: purchase a one-year membership to extend the trial to one month total.
5. Trust: show real product workflows, explain plan boundaries and introduce the people behind the product.

Example product campaign: “Divisas, clientes y reportes en un mismo flujo. Solicita tu prueba de 7 días de Currency Exchange, el producto de JokerLabs para casas de cambio.” Annual follow-up: “¿Tu equipo necesita más tiempo para evaluar? Adquiere la membresía anual y extiende tu prueba a un mes en total.”

Avoid invented testimonials, savings percentages, scarcity, legal compliance guarantees or claims that planned invoicing is available. Explain that DIAN report generation supports review/submission and UIAF depends on configuration and permissions.

## Offer and conversion journey

The landing offers a request, not instant activation. Both buttons open the existing contact form, preserve product interest, display the offer selected and include the offer identifier in the email. Submitted leads are measured after server success. No payment or membership activation happens on this landing.

Interpretation used in the copy: one month is the total extended trial, including the first seven days. It is not an extra month. Annual membership is a paid purchase, not a free extension or refund promise.

Before accepting a purchase, define and communicate the exact trial start/end dates, calendar-month calculation, annual billing start, whether trial time is included in the membership term, plan limits, price, cancellation/refund conditions and treatment of trial data. These operational terms are unresolved; do not invent them in ads. The backend trial lifecycle remains a separate implementation task.

Keep the initial trial available as its own evaluation step. Offer annual membership after a useful workflow has been demonstrated. An annual purchase should follow clear terms and value evidence; track whether the extension actually improves adoption and retention.

## Acquisition priorities

Start with founder-led conversations and permission-based outreach to relevant exchange-house decision makers. Use short workflow demonstrations and a practical operational checklist as conversation starters. Seek introductions through existing customers and relevant industry contacts. Do not send automated outreach from this implementation.

Publish weekly Spanish-first product content: one workflow demonstration and one practical explanation about branch permissions, customer records or report preparation. Pair each with the same 7-day request CTA. Publish laboratory content separately about building software around real business processes, using Currency Exchange as evidence.

Test a small, capped search campaign only after trial delivery and lead follow-up work reliably. Proposed keyword themes: “software para casas de cambio”, “sistema para casa de cambio” and operational reporting needs. Validate volume and costs before committing budget. Exclude consumer exchange-rate and travel-currency intent. Keep ad wording and destination offers aligned; Google's guidance supports specific CTAs and landing-page relevance: https://support.google.com/google-ads/answer/6238826?hl=en.

Budget is unspecified. Establish a spending cap and maximum acceptable customer acquisition cost from actual contribution margin and retention before paid launch. Increase spending only when qualified opportunities and paid conversions justify it.

## Trial activation and annual conversion

Suggested playbook, measured from the coordinated trial start:

- Before day 1: agree on one evaluation workflow, success criteria, participants and access scope. Prefer sample data for the first walkthrough.
- Day 1: orient the evaluator to the chosen workflow; confirm they can use the relevant capabilities.
- Day 3: resolve friction and review whether the intended process was completed.
- Day 5: review fit with the decision maker, explain the annual plan and extension terms, and provide pricing.
- Day 7: record the decision and agreed next step. Do not silently renew or imply an annual purchase has occurred.
- Extended month: schedule weekly adoption reviews and verify the team can repeat the workflow. Review outcomes before the agreed trial end.

These are proposed team actions, not implemented email automation or guaranteed included services. Assign a named sales/onboarding owner before running the program. Obtain permission before using any customer story or operational data in marketing.

## Measurement

North-star commercial outcome: paid annual members who complete their agreed workflow and remain active after onboarding. Trial requests alone are not success.

Current landing events: inquiry_cta_click and successful generate_lead, segmented by interest and offer (trial_7_days / annual_membership), through the existing analytics setup. General product-demo clicks have no offer identifier. Analytics is subject to the site's consent configuration; offer choice also reaches the inquiry email.

Track the remaining funnel in a CRM or agreed manual tracker until lifecycle integration exists: source → qualified lead → coordinated trial start → workflow completed → annual purchase → 30/90-day adoption. Never emit purchase from an inquiry or button click.

Weekly review: qualified-lead rate, lead-to-trial rate, trial activation rate, trial-to-annual conversion, time to first useful workflow, cost per qualified lead, acquisition cost and retained revenue. Record loss reasons: fit, price, missing capability, onboarding friction, timing. Compare extended and standard trial cohorts while accounting for the fact that annual buyers selected themselves.

Establish baselines before setting conversion targets. Test one meaningful variable at a time (headline, workflow demonstration or offer placement); use qualified trials and paid memberships as outcomes rather than clicks alone.

## 90-day execution

Days 1–30: finalize offer terms and ownership; exercise inquiry delivery and coordinated trial setup; interview prospects; establish funnel tracking; create three factual workflow demonstrations. Collect objections and improve onboarding.

Days 31–60: run a bounded outreach/content pilot; test small search campaigns if delivery is reliable; follow the trial playbook; improve the largest observed funnel bottleneck. Capture permissioned customer evidence when available.

Days 61–90: compare qualification, activation, annual purchases and adoption by source; focus spending on the strongest qualified pipeline; publish verified customer stories; adjust membership messaging using actual loss reasons. Scale only when support capacity and unit economics support it.

## Implementation delivered

Reusable CurrencyExchangeTrial component replaces the previous demo closing panel. English and Spanish share a typed content contract. Responsive styling uses existing theme tokens. Offer-specific inquiry selection and analytics distinguish trial requests from annual-interest requests. FAQ explains the extension. No campaigns, checkout, trial entitlement or billing behavior were created.

## Approved direction: AI compliance assistant

The product vision is now “Tu operación bajo control. Tu equipo informado a tiempo.” Position the future assistant around staff attention: detect a relevant event, alert the responsible person, explain context and suggest the next step. Human review remains part of the workflow.

The landing introduces three illustrative event types: incomplete records, transactions requiring review and report preparation dates. This is a planned capability, separate from current operational/reporting functionality and the current trial. No implementation evidence establishes a continuously monitoring AI compliance assistant. Define supported events, responsible roles, notification channels and monitoring behavior before claiming availability.

Use rules for deterministic checks and deadlines; reserve AI claims for implemented explanation or contextual guidance. Proposed product acceptance criteria: traceable event evidence, a named recipient, clear severity, actionable context, acknowledgement/escalation behavior and permission-controlled access. Measure alert usefulness, false positives and time to review before making performance claims. Do not promise legal compliance or autonomous regulatory decisions.

For JokerLabs marketing operations, use AI to draft Spanish/English content, adapt workflow demonstrations for each audience, cluster recurring prospect objections and prepare follow-up drafts. A person reviews capability claims and approves publication or outreach. Use anonymized examples and approved product facts. This describes a proposed workflow; no outreach or content automation has been activated.

The assistant becomes the central product differentiator once verified and deliverable. Until then, lead with current operational value, show the AI vision in a visibly planned section and invite a discussion about it. Keep trial messaging tied to capabilities visitors can evaluate today.

## Public plan comparison — 2026-10-16

The owner authorized applying the revised commercial proposal to the website.
Core/Growth rates are unchanged: annual COP 1,500,000/4,200,000; first-year launch
COP 1,250,000/3,150,000; approximate monthly equivalents COP 104,167/262,500 and
savings COP 250,000/1,050,000. One-time activation remains COP 3,000,000 and is
shown separately. Equivalents are not monthly billing offers. Launch validity,
activation timing, taxes, precise trial/annual periods and cancellation/refund/data
conditions require confirmation in the accepted proposal before payment.

The product comparison supports an editable plan inquiry, not a purchase. All
seven-day/month-total trial boundaries remain. Support and backups follow the
qualified offer; no uptime, universal compliance, automated filing or live AI
assistant guarantee is introduced. No prices in the operational backend were changed.
