# Currency Exchange: flagship context for agents

JokerLabs is an AI laboratory. Currency Exchange is its flagship product for
Colombian exchange houses. The main landing sells the laboratory's services and
provides a distinct path to a product demo. Do not describe product functionality
as AI-driven without implementation evidence.

Read [positioning and page structure](laboratory-design.md) first.
The flagship section now contains a concise capability summary and recent portal/API
developments: roles/branches, currency reports, customer management and memberships.
The older long product mini-landing has been removed. The current closing offer
promotes the user-authorized 7-day trial, extendable to one month total by
purchasing annual membership. Access remains coordinated through an inquiry;
trial provisioning and billing are not implemented by this landing. See
[the marketing strategy](marketing-strategy.md) for commercial boundaries.

Product demo CTAs select Currency Exchange in the contact form. Interest and locale
are included in the existing email message; structured backend lead metadata,
contact hardening and durable intake remain pending.

## Source map

- `components/sections/CurrencyExchangeSection.tsx`: flagship capabilities and updates.
- `components/sections/CurrencyExchangeTrial.tsx`: bilingual trial and annual offer.
- `components/shared/InquiryLink.tsx`: transient inquiry and offer selection.
- `components/sections/ContactSection.tsx`: editable interest and delivery confirmation.
- `content/es.ts`, `content/en.ts`, `lib/locale-types.ts`: bilingual content contract.
- `app/currency-exchange/page.tsx`: standalone product page (section + demo contact form).
- `app/services/page.tsx`: standalone services page.
- `app/page.tsx`, `lib/constants.ts`: company page order and Portfolio/Company navigation (`NAV_MENU`).

## Evidence and contract boundaries

- [Integration review](../../money-exchange-backend/docs/currency-exchange-integration-review-2026-10-13.md): historical source review and risks.
- [Active proposal](../../currency-exchange/openspec/changes/landing-product-integration/proposal.md): current completed slice and pending integration tasks.
- [Backend handoff](../../money-exchange-backend/docs/PROJECT-HANDOFF.md): operational product continuation.
- [Frontend rules](../../currency-exchange/AGENTS.md): portal constraints.

Keep plan/configuration qualifications, verified-payment activation and feature-gated
recurring billing accurate. Report generation is not regulatory submission. The
landing never activates a tenant or executes a currency trade.

## Currency Exchange sales section

The flagship now leads with an operational benefit (exchange house under control),
followed by less fragmented information, branch permissions and informed decisions.
A labelled interactive illustration lets visitors switch between cash/currencies,
customer information and reports. All values are sample data, not live tenant
records or screenshots. The illustration runs locally without API calls.

Recent capabilities support the commercial story rather than exposing API or
provider implementation details. Core/Growth capacity is described accurately.
Demo CTA appears beside the promise and in the closing offer; both preserve the
existing Currency Exchange inquiry interest. ES/EN share the same content contract.

## Product showcase and roadmap presentation

The Currency Exchange section uses a distinct brand lockup, dimensional illustrated
panel, benefit cards, high-contrast electronic-invoicing exhibit and demo closing.
The ES/EN roadmap separates current capabilities from planned invoicing, provider-
gated automatic renewal (under validation), and planned service-payment reconciliation.
The invoice is a concept illustration, not an issued document or live feature.
No launch date, provider certification, authority acceptance or availability guarantee
is made. Source baseline: backend `docs/PROJECT-HANDOFF.md` electronic-invoicing
milestone and `docs/integrations/wompi.md` payment boundaries.

## Reporting and compliance spotlight

DIAN Formats 1099 (FX purchases) and 1100 (FX sales), plus configured UIAF
quarterly reporting, now have distinct commercial cards and an illustrative
record → generate → review/submit flow. Copy describes support for compliance,
not a blanket legal compliance guarantee or automatic authority acceptance.
UIAF is conditional on company configuration and reporting access is permission-
controlled. Electronic invoicing remains separately labelled Planned.
Source evidence: `money-exchange-backend/app/api/routers/reports.py`,
`app/services/dian.py`, and `app/services/uiaf.py`. Both locales and mobile styles
are aligned; the preview remains illustrative and calls no reporting APIs.

## AI assistant vision

The user-approved direction is an AI compliance assistant that helps staff detect,
understand and act on relevant events. The landing presents this as Planned, with
illustrative incomplete-record, transaction-review and report-date events. Do not
claim constant monitoring, available AI alerts or inclusion in the current trial
without implementation evidence. See the marketing strategy for proposed scope.

## CMO message expansion — 2026-10-15

The product page now leads with exchange-house control, demonstrated through
closing differences by currency, rate/cash changes with a recorded actor and
reason, and read-only access. The illustrative tabs show a closing shortage,
a rate change and a transaction/receipt example; sample-data labels remain.
ES/EN also explain customer continuity, name-match review, approved rates,
inventory checks and current plan capacity. No savings metric or support,
migration or deployment guarantee is implied. Roadmap and trial boundaries remain.
See [the CMO review](currency-exchange-cmo-review.md) for evidence and unresolved
commercial information to gather before advertising additional commitments.

## Everyday scenarios — 2026-10-15

The generic updates grid is replaced by six localized, illustrative cases:
cash shortage at closing, an intraday rate change, a returning customer's receipt,
name-match review, advisor read-only access and report preparation. Each presents
a situation, a supported action and reviewable evidence. Cases describe current
workflows, separately from the planned AI events, and do not imply automatic
cause detection or regulatory submission. The responsive grid uses three, two or
one columns; every case remains visible without animation or timed rotation.
Core/Growth limits remain in the closing qualification. The demo inquiry CTA
preserves Currency Exchange interest and requires explicit form submission.
