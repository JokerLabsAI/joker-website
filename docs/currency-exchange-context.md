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
- `app/(english)/currency-exchange/page.tsx`: standalone product page (section + demo contact form).
- `app/(english)/services/page.tsx`: standalone services page.
- `app/(english)/page.tsx`, `lib/constants.ts`: company page order and Portfolio/Company navigation (`NAV_MENU`).

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

## Search entry points — 2026-10-15

`/currency-exchange` is the English product URL; `/es/currency-exchange` is its
Spanish equivalent. Route-group pages share the product component while serving
localized static HTML through separate language root layouts. Metadata, canonical
URLs and reciprocal language alternates come from `lib/seo.ts`; the sitemap lists
both. Language selection is URL-based. See [SEO implementation and launch steps](seo.md).


## Dedicated services and operational guides — 2026-10-16

The four service topics now have dedicated ES/EN pages; the product page links to
cash-closing, rate-review and report-preparation guides. `content/detail-pages.ts`
contains their supported copy, and `lib/page-routes.ts` owns translated detail
paths. Static entry files under services/[slug] and resources/[slug] (recursos in
Spanish) render the shared detail page. The sitemap now lists twenty page URLs.
Read [delivery evidence](marketing/keyword-research/PAGE-DELIVERY.md) for source
boundaries and the workbook's distinction between implementation and research.

## Plans and pricing from the revised commercial proposal — 2026-10-16

The product page now has `#cx-plans` before the trial closing panel. Public ES/EN
copy in `content/currency-exchange-plans.ts` preserves the approved document's
annual prices, first-year launch prices, monthly equivalents, savings and one-time
activation amount. Launch validity and annual payment are explicit; activation
payment timing is agreed before payment rather than inferred from the trial end.
Core is one branch, Growth up to five, both with four users per branch.
Support and offered 7/29-day backup windows retain the proposal's qualifications.
The six shared capability cards distinguish file generation, human review and
planned features; expanded corporate customer documentation requires scope review.

`CurrencyExchangePlans` and its dedicated `app/currency-exchange-plans.css` use the
shared theme and mobile layouts. A unique root class (`cx-pricing`) avoids the old
legacy `cx-plans` grid styles; the anchor ID remains `cx-plans`.
Core/Growth inquiry links pass an allowlisted transient plan choice to the contact
form. Visitors may change or clear it; switching interest clears plan/offer. The
existing contact message carries `[plan:core]` or `[plan:growth]`, and analytics may
include the non-sensitive plan value. No backend contract, checkout, provisioning,
billing entitlement or payment consent changes were made.

## Alcance incluido para la liberación: reportería, contabilidad y finanzas

Por decisión comercial del 16 de octubre de 2026, Core y Growth incluirán al liberar la aplicación el módulo de reportería, contabilidad y finanzas, sin recargo por este módulo ni modificación de los precios actuales. Se conservan los límites de sucursales, usuarios y las condiciones de servicio de cada plan, así como la prueba inicial de 7 días y su extensión a un mes total con la compra anual.

El alcance de lanzamiento comprende reportes operativos de caja, compras, ventas, movimientos y cambios de tasas; filtros y exportaciones; margen de intermediación con su fórmula visible; catálogo de cuentas y comprobantes; asientos y reversión; cierre de períodos; balance de prueba, mayor, balance general y estado de resultados. La generación de archivos regulatorios conserva sus condiciones de configuración, permisos y revisión, sin prometer presentación ni aceptación automática.

La entrega debe incluir pantallas utilizables y permisos para configurar, consultar y exportar la información financiera; registro o incorporación de gastos y ajustes que alimenten los estados; y conciliación entre las operaciones de cambio y sus asientos, con identificación de pendientes, motivos y reprocesamiento trazable. El margen de intermediación se distinguirá de la utilidad neta.

Este es un compromiso de alcance para el lanzamiento, no una declaración de disponibilidad actual. Antes de liberar: validar de extremo a extremo compras, ventas, gastos, ajustes, reversión y cierre; verificar saldos y resultados contra casos conocidos; probar accesos y exportaciones; y resolver o exponer de forma recuperable toda operación pendiente de contabilización. La existencia de endpoints no constituye aceptación del módulo.

La inclusión de este módulo no amplía automáticamente la oferta a crédito, conciliación bancaria, facturación electrónica o asistente de IA; estos conservan su alcance y estado previamente definidos.

## Implementación y puesta en marcha incluida en la activación

La activación única de $3.000.000 COP incluye los siguientes servicios, aprobados por el propietario. No se modifica el importe ni se establece un calendario de pago nuevo.

- Configuración de la empresa, sucursal, usuarios y permisos.
- Parametrización inicial de divisas, tasas y saldos.
- Capacitación del equipo.
- Acompañamiento en la primera operación y cierre.
- Carga de información inicial dentro del alcance acordado.

Antes de iniciar se acuerdan fuentes, volumen y formato de la carga inicial, responsables y agenda de capacitación y acompañamiento. La migración adicional o compleja requiere cotización separada. Se conservan la prueba de 7 días, su extensión a un mes total con compra anual y el acuerdo escrito del calendario de cobro antes de cualquier pago.

## Growth: cotización personalizada

Growth se ofrece mediante cotización según las sucursales requeridas y el acompañamiento. No se publica una anualidad, descuento, ahorro ni equivalencia mensual fija para Growth. La capacidad estándar del producto sigue limitada a cinco sucursales; cualquier ampliación requiere evaluación y habilitación. Se mantienen el núcleo incluido, la implementación y la estrategia de prueba. Las tarifas anteriores se conservan únicamente como referencia interna, no como oferta vigente.

## Presentación de precio y promoción — 2026-10-16

Core muestra el equivalente aproximado de $104.167 COP + IVA al mes, con pago anual de $1.250.000 COP + IVA por el primer año inmediatamente visible. No se ofrece pago mensual. Growth conserva cotización personalizada. La implementación se cobra por separado y su tratamiento tributario se confirma en la propuesta. La promoción comienza con 7 días de prueba; comprar la anualidad extiende la evaluación a un mes total, incluidos esos 7 días, no un mes adicional. No modifica los términos pendientes del período anual ni promete devolución.

## Actualización aprobada de tarifa Core — 2026-10-16

Sustituye los importes anteriores: equivalente mensual de $109.900 COP + IVA, con pago anual de lanzamiento de $1.318.800 COP + IVA (12 × $109.900). La tarifa anual regular continúa en $1.500.000 COP antes de IVA; el ahorro del primer año es $181.200 COP antes de IVA. Growth sigue bajo cotización y la implementación mantiene su importe. No se habilita pago mensual ni se cambia la promoción de 7 días / un mes total con compra anual. Este cambio actualiza la oferta comercial, no los cobros del backend.
