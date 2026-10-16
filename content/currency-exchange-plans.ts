export const CURRENCY_PLANS = [
  { id: "core", name: "Core", annual: 1500000, launch: 1318800, monthlyEquivalent: 109900, savings: 181200, branches: 1, backupDays: 7 },
  { id: "growth", name: "Growth", annual: 4200000, launch: 3150000, monthlyEquivalent: 262500, savings: 1050000, branches: 5, backupDays: 29 },
] as const;
export const ACTIVATION_FEE_COP = 3000000;
export const PLAN_COPY = {
  es: {
    eyebrow: "PLANES / CURRENCY EXCHANGE", title: "Elige capacidad. Conserva el control.",
    intro: "El mismo núcleo operativo para una sede o varias. Compara el alcance y evalúa el flujo de tu equipo antes de decidir.",
    taxLabel: "+ IVA", annualPayment: "Pago anual", annualOnly: "Equivalente mensual · pago anual", coreCta: "Solicitar prueba de 7 días",
    quoteTitle: "Cotización personalizada", quoteNote: "Según las sucursales y el acompañamiento que necesita tu operación.", quoteCta: "Solicitar cotización Growth", quoteScope: "Capacidad y condiciones acordadas en la propuesta",
    link: "Ver planes y precios", regular: "Tarifa anual", launch: "Lanzamiento · primer año", year: "COP / año", monthly: "Equivalente aproximado", perMonth: "COP / mes", savings: "Ahorro frente a la tarifa anual", users: "4 usuarios por sucursal", core: "Una sede, operación esencial", growth: "Varias sedes, visibilidad compartida", coreBranch: "1 sucursal", growthBranch: "Hasta 5 sucursales · orientado a operaciones de 2–5 sedes", cta: "Consultar", standard: "Soporte estándar", priority: "Soporte prioritario", backups: "días de retención de copias ofertada", billingNote: "Core: $1.318.800 COP + IVA por el primer año, equivalente a $109.900 COP + IVA al mes. Se paga la anualidad; no es una suscripción mensual. La vigencia del precio de lanzamiento se confirma en la propuesta aceptada.",
    featureTitle: "Tu operación incluida", financeTitle: "Reportería y finanzas", releaseBadge: "Incluido al lanzamiento",
    cardFeatures: ["Clientes naturales y jurídicos · historial y búsqueda", "Compra y venta de divisas · recibos", "Caja e inventario por divisa · arqueo y cierre", "Tasas con historial · ajustes con motivo", "Roles, permisos y acceso por sucursal", "Revisión de coincidencias de clientes"],
    financeFeatures: ["Reportes operativos · filtros y exportaciones", "Margen de intermediación identificado", "Cuentas, comprobantes y asientos · reversión", "Gastos, ajustes y conciliación contable", "Cierre de períodos · balance de prueba y mayor", "Balance general y estado de resultados", "Archivos DIAN 1099/1100 y UIAF*"],
    releaseNote: "El módulo financiero completo se entrega al liberar la aplicación. Su validación integral está pendiente; el margen de intermediación no equivale a utilidad neta.",
    trialCard: "Prueba de 7 días", trialCardNote: "Con compra anual: un mes total de evaluación, incluidos los 7 días iniciales.",
    sharedTitle: "Detalle del alcance y condiciones", shared: [
      { title: "Clientes y continuidad", text: "Personas naturales y jurídicas: registro, búsqueda y datos de contacto. Oculta y recupera clientes conservando su historial de actividad." },
      { title: "Compra, venta y recibos", text: "Operaciones con divisa, cantidad, tasa aplicada, importe y operador. Genera el recibo de la transacción; no equivale a una factura electrónica." },
      { title: "Caja, tasas e inventario", text: "Saldos por sede y divisa, ajustes con motivo, conteo físico y diferencias al cierre. Historial de tasas con responsable y motivo." },
      { title: "Permisos y revisión", text: "Propietario, administrador, operador y perfil de consulta. Accesos por sucursal y límites por miembro dentro del alcance de su rol." },
      { title: "Reportes para revisar", text: "Caja en PDF y filtros por divisa. Generación DIAN 1099/1100 y UIAF trimestral según permisos y configuración; no incluye envío ni aceptación por la autoridad." },
      { title: "Revisión de coincidencias", text: "Consulta de candidatos en el registro de clientes. Una similitud de nombre requiere evaluación; no garantiza un bloqueo universal ni cumplimiento integral." },
    ],
    activation: "Implementación y puesta en marcha", implementationItems: ["Configuración de la empresa, sucursal, usuarios y permisos", "Parametrización inicial de divisas, tasas y saldos", "Capacitación del equipo", "Acompañamiento en la primera operación y cierre", "Carga de información inicial dentro del alcance acordado"], activationNote: "El calendario de cobro y su relación con la prueba y la membresía se acuerdan por escrito antes de cualquier pago. No se presume exigibilidad al día 7 ni exoneración al comprar la anualidad.",
    termsTitle: "Condiciones claras antes de contratar", terms: [
      "Soporte: horarios, canales y alcance se definen en la política de servicio. Atención 24/7 y créditos por SLA requieren un acuerdo específico.",
      "Copias: frecuencia, cobertura y recuperación se documentan antes de contratar. Las ventanas de 7/29 días no equivalen al plazo de conservación del historial o de documentos del cliente.",
      "Prueba: 7 días con acceso coordinado. La compra anual permite llegar a un mes total, incluidos los primeros 7 días. Se confirman fechas, periodo anual, impuestos, cancelación, devoluciones y tratamiento de datos antes del pago.",
    ], extrasTitle: "Ampliaciones bajo cotización", extras: "Sucursales adicionales, integraciones bancarias, SLA, respaldos ampliados y migración requieren alcance escrito, viabilidad técnica y precio aprobado. Cotizar una ampliación no habilita automáticamente más capacidad.", scope: "El expediente ampliado de persona jurídica —RUT, certificados, socios, beneficiario final y poderes— se revisa campo por campo en el alcance acordado. La facturación electrónica y el asistente de IA siguen planeados. La renovación automática depende de habilitación del proveedor.",
  },
  en: {
    eyebrow: "PLANS / CURRENCY EXCHANGE", title: "Choose capacity. Keep control.",
    intro: "The same operational core for one branch or several. Compare scope and evaluate your team’s workflow before deciding.",
    taxLabel: "+ VAT", annualPayment: "Annual payment", annualOnly: "Monthly equivalent · billed annually", coreCta: "Request a 7-day trial",
    quoteTitle: "Custom quote", quoteNote: "Based on the branches and guidance your operation needs.", quoteCta: "Request a Growth quote", quoteScope: "Capacity and terms agreed in your proposal",
    link: "View plans and pricing", regular: "Annual price", launch: "Launch price · first year", year: "COP / year", monthly: "Approximate equivalent", perMonth: "COP / month", savings: "Savings versus the annual price", users: "4 users per branch", core: "One branch, essential operations", growth: "Multiple branches, shared visibility", coreBranch: "1 branch", growthBranch: "Up to 5 branches · designed for 2–5 branch operations", cta: "Ask about", standard: "Standard support", priority: "Priority support", backups: "days of offered backup retention", billingNote: "Core: COP $1,318,800 + VAT for the first year, equivalent to COP $109,900 + VAT per month. Billed annually; this is not a monthly subscription. Launch-price validity is confirmed in the accepted proposal.",
    featureTitle: "Your operations included", financeTitle: "Reporting and finance", releaseBadge: "Included at launch",
    cardFeatures: ["Individual and company customers · history and search", "Currency purchases and sales · receipts", "Cash and currency inventory · counts and closing", "Rate history · adjustments with reasons", "Roles, permissions and branch access", "Customer name-match review"],
    financeFeatures: ["Operational reports · filters and exports", "Clearly identified intermediation margin", "Accounts, vouchers and entries · reversals", "Expenses, adjustments and accounting reconciliation", "Period closing · trial balance and ledger", "Balance sheet and income statement", "DIAN 1099/1100 and UIAF files*"],
    releaseNote: "The complete financial module is delivered at application launch. End-to-end validation is pending; intermediation margin is separate from net income.",
    trialCard: "7-day trial", trialCardNote: "With annual purchase: one month total of evaluation, including the initial 7 days.",
    sharedTitle: "Scope details and terms", shared: [
      { title: "Customers and continuity", text: "Individual and company customers: registration, search and contact details. Hide and restore customers while retaining their activity history." },
      { title: "Purchases, sales and receipts", text: "Transactions with currency, amount, applied rate, COP total and operator. Generate a transaction receipt, separate from an electronic invoice." },
      { title: "Cash, rates and inventory", text: "Balances by branch and currency, adjustments with reasons, physical counts and closing differences. Rate history records the actor and reason." },
      { title: "Permissions and review", text: "Owner, administrator, operator and read-only roles. Branch access and member-level limits within each role’s scope." },
      { title: "Reports for review", text: "Cash PDFs and currency filters. DIAN 1099/1100 and quarterly UIAF file generation by permissions and configuration; generation is not submission or authority acceptance." },
      { title: "Match review", text: "Candidate review during customer registration. A similar name needs assessment; this does not guarantee universal blocking or complete compliance." },
    ],
    activation: "One-time implementation and onboarding", implementationItems: ["Company, branch, user and permission setup", "Initial currency, rate and balance configuration", "Team training", "Guidance through the first transaction and cash closing", "Initial data loading within the agreed scope"], activationNote: "Its payment date and relationship to the trial and membership are agreed in writing before any payment. It is not assumed due on day 7 or waived with annual purchase.",
    termsTitle: "Clear terms before purchase", terms: [
      "Support: hours, channels and scope are defined in the service policy. Round-the-clock coverage and SLA credits require a specific agreement.",
      "Backups: frequency, coverage and recovery are documented before purchase. The 7/29-day windows are separate from operational-record or customer-document retention requirements.",
      "Trial: 7 days with coordinated access. Annual purchase extends evaluation to one month total, including the first 7 days. Dates, annual period, taxes, cancellation, refunds and data handling are confirmed before payment.",
    ], extrasTitle: "Extensions quoted separately", extras: "Additional branches, banking integrations, SLAs, extended backups and migration require written scope, technical feasibility and agreed pricing. A quotation does not automatically enable extra capacity.", scope: "An expanded company-customer file—tax registration, certificates, shareholders, beneficial owners and powers of attorney—is reviewed field by field within the agreed scope. Electronic invoicing and the AI assistant remain planned. Automatic renewal depends on provider enablement.",
  },
} as const;
