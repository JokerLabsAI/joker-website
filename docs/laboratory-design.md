# JokerLabs: positioning and commercial page structure

Updated 2026-10-13. Local implementation, not a hosting deployment.

## Identity and promise

JokerLabs is an AI laboratory building its flagship product, Currency Exchange,
and selling AI, software, automation and integration services. The flagship is
product evidence, not a competing company identity. Do not describe Currency
Exchange as AI-powered unless an implemented AI capability is verified.

## Visitor journey

1. **Hero — positioning:** AI laboratory, business benefit, flagship mention.
   Primary action: discuss a project. Secondary action: explore the flagship.
2. **Currency Exchange — product evidence:** operational problem, connected
   capabilities, recent developments (roles, currency reports, customer management,
   memberships/payments), and a demo inquiry CTA.
3. **Services — commercial bridge:** apply the laboratory's capabilities to a
   visitor's own business. Benefits precede technical methods.
4. **Why — confidence:** product experience, clear scope, staged validation and
   direct team access. Avoid unverified testimonials or performance statistics.
5. **Process — reduce uncertainty:** understand, define, validate, integrate, evolve.
6. **Team — people behind the work.**
7. **FAQ — objections:** distinguish lab/product; explain demos, other industries,
   price/timing and what happens after an inquiry. Native accordions, not simulated support.
8. **Contact — conversion:** explicit choice of services or Currency Exchange demo.

Navigation follows visible sections: Home, Product, Services, Process, Team,
Contact. Removed the generic project gallery and repeated lab/about sections
from composition; their source remains available for future use.

## Marketing decisions

- Concrete positioning before aspirational language.
- Product evidence close to the promise, followed by the service offer.
- Two audience paths ending at one short inquiry form.
- Clear next-step labels; requesting a demo is not scheduling an appointment.
- Progressive disclosure: concise flagship summary plus recent capabilities,
  replacing the nested product mini-landing and duplicate FAQ/offer blocks.
- No unsupported trial periods, guaranteed posting/filing, artificial urgency,
  inflated branch capacity or invented social proof.
- Blue/teal identity, geometric hero art, mobile layouts and reduced-motion CSS.

Reference: [Google's landing-page guidance](https://support.google.com/google-ads/answer/6238826?hl=en)
recommends relevant messaging, specific calls to action and a clear path from
promise to action. This implementation has no measured conversion-lift claim.

## Source and conversion handling

`app/page.tsx` owns order. Hero, CurrencyExchangeSection, ServicesSection,
WhySection, ProcessSection, TeamSection, FaqSection and ContactSection render it.
`content/es.ts`, `content/en.ts`, `lib/locale-types.ts` own bilingual copy.
`lib/constants.ts` owns anchor navigation; `app/layout.tsx` owns metadata.

`InquiryLink` dispatches an allowlisted transient services/product interest.
The form lets visitors change it and prepends interest/locale to the existing
email message, preserving the current server request contract. No inquiry is
sent until form submission. `generate_lead` includes interest/locale only after
server success; analytics remains subject to the existing consent setup.
No inquiry data is persisted in browser storage.

## Remaining integration work

Structured server metadata, input hardening/throttling, provider-safe errors,
durable lead storage and any trial lifecycle remain separate tasks in
[the OpenSpec proposal](../../currency-exchange/openspec/changes/landing-product-integration/proposal.md).
The current contact API's existing limitations remain documented there. Product
availability claims reflect local source, not production deployment verification.

## Validation

TypeScript and production build are the applicable code checks. Browser visual
and actual email-delivery validation need an available preview/delivery environment.
Monitor demo versus services inquiries and qualified conversations before claiming
marketing improvements. A/B test copy only with an explicit conversion definition.

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
