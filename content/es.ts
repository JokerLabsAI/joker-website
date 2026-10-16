import type { SiteContent } from "@/lib/locale-types";

export const es: SiteContent = {
  locale: "es",

  nav: {
    label: "Navegación principal",
    toggle: "Abrir o cerrar navegación",
    home: "Inicio",
    portfolio: "Portafolio",
    company: "Empresa",
    contact: "Contacto",
    productsLabel: "Productos",
    servicesLabel: "Servicios",
    companyLabel: "JokerLabs",
    products: [
      { title: "Currency Exchange", description: "Caja, divisas, clientes y reportes para casas de cambio" },
    ],
    companyItems: [
      { title: "Por qué JokerLabs", description: "Construimos producto propio y nos involucramos en el tuyo" },
      { title: "Cómo trabajamos", description: "Del reto de negocio a una solución validada" },
      { title: "Equipo", description: "Las personas detrás del laboratorio" },
      { title: "Preguntas frecuentes", description: "Tiempos, precios y qué pasa después de escribirnos" },
    ],
    allServices: "Ver todos los servicios",
    productCta: "Conoce Currency Exchange",
    demo: "Solicitar una demo",
    cta: "Hablemos",
  },

  hero: {
  "eyebrow": "JokerLabs · Laboratorio de inteligencia artificial",
  "cyclePrefix": "IA para transformar",
  "cycleWords": [
    "tu operación"
  ],
  "sub": "Desarrollamos productos propios y soluciones de IA para empresas que quieren avanzar. Currency Exchange, nuestro producto insignia para casas de cambio, reúne el desarrollo del laboratorio en una operación concreta.",
  "cta": "Hablemos de tu proyecto",
  "secondary": "Conoce Currency Exchange",
  "scroll": "Explorar el producto"
},

  laboratory: {
    location: "DESDE CALI, COLOMBIA",
    heroNote: "Ideas ambiciosas. Ingeniería aplicada.",
    eyebrow: "El laboratorio",
    title: "La curiosidad nos mueve.",
    titleAccent: "La ingeniería nos lleva.",
    description: "Exploramos posibilidades, conectamos disciplinas y construimos con propósito. Trabajamos contigo desde la primera pregunta hasta una solución que funciona en el mundo real.",
    link: "Conoce el laboratorio",
    explore: "Explorar disciplina",
    principle: "El progreso empieza cuando una buena pregunta se convierte en algo que puedes usar.",
    disciplines: [
      { title: "Inteligencia artificial", description: "De los datos a nuevas formas de pensar, decidir y crear." },
      { title: "Software", description: "De una idea a productos digitales diseñados para evolucionar." },
      { title: "Automatización", description: "De tareas repetitivas a tiempo para hacer lo que importa." },
      { title: "Sistemas", description: "De piezas separadas a una arquitectura que conecta todo." },
    ],
  },

  services: {
  "eyebrow": "01 / Servicios del laboratorio",
  "line1": "La capacidad que construye productos.",
  "line2": "Aplicada a tu negocio.",
  "sub": "Si necesitas una solución propia, trabajamos contigo para identificar el problema, validar una ruta y llevarla a producción. La IA es el centro; software, automatización e infraestructura hacen posible su uso.",
  "items": [
    {
      "title": "IA aplicada a tu operación",
      "tag": "Datos que se convierten en decisiones.",
      "desc": "Agentes, modelos y sistemas de análisis para procesos concretos. Empezamos por la necesidad de negocio y definimos cómo evaluar el resultado."
    },
    {
      "title": "Desarrollo de productos digitales",
      "tag": "De la idea a una herramienta usable.",
      "desc": "Plataformas, portales y APIs que conectan usuarios, datos y procesos. Diseñamos una base que puedas mantener y hacer evolucionar."
    },
    {
      "title": "Automatización de procesos",
      "tag": "Menos trabajo repetitivo.",
      "desc": "Conectamos herramientas y flujos para reducir tareas manuales, con controles y visibilidad sobre lo que ocurre en cada paso."
    },
    {
      "title": "Integración e infraestructura",
      "tag": "Tecnología que funciona en conjunto.",
      "desc": "Integramos sistemas e infraestructura para desplegar y operar tu solución. Acordamos requisitos de acceso, continuidad y mantenimiento."
    }
  ]
},

  work: {
    eyebrow: "Trabajo en progreso",
    line1: "Construyendo ahora.",
    line2: "Lanzando pronto.",
    sub: "¿Qué cartas tiene JokerLabs sobre la mesa en este momento? Estamos resolviendo problemas reales de alto impacto. Uno en fintech y otro enfocado en el comercio impulsado por IA.",
    liveBadge: "En desarrollo",
    visualLabel: "Exploración visual · No es una captura del producto",
    actionLabels: ["Explorar Currency Exchange", "Hablemos de comercio inteligente"],
    items: [
      {
        industry: "Fintech · Servicio Cloud",
        title: "Software Modernizado para Casas de Cambio",
        desc: "Automatización completa de una operación tradicional de cambio de divisas, reemplazando procesos manuales por una solución que vive en la nube y es accesible donde y cuando quieras. Con validación de cumplimiento en tiempo real, administración centralizada de roles y un panel de reportes unificado.",
        stat: "En progreso",
        statLabel: "Pipeline de automatización",
      },
      {
        industry: "Maverick · Wildcart AI",
        title: "Plataforma de Comercio Inteligente",
        desc: "Solución de comercio impulsada por IA donde puedes configurar completamente tu tienda personalizada a través de un agente conversacional, sin necesidad de programar. Personalización en tiempo real, lógica de productos e identidad de marca gestionadas de extremo a extremo por IA.",
        stat: "En progreso",
        statLabel: "Comercio impulsados por IA",
      },
    ],
    cta: "¿Tienes un proyecto en mente? Hablemos ♠",
  },

  currencyExchange: {
    dailyCases: {
      "eyebrow": "EN EL DÍA A DÍA DE TU CASA DE CAMBIO",
      "title": "Situaciones que tu equipo conoce.",
      "description": "Desde la atención al cliente hasta el cierre de caja: así puedes usar Currency Exchange para revisar lo que ocurre en tu operación.",
      "actionLabel": "Qué puedes hacer",
      "resultLabel": "Qué puedes revisar",
      "note": "Casos ilustrativos de capacidades actuales, sujetos a permisos, plan y configuración. El equipo revisa la información y toma las decisiones.",
      "cta": "Solicitar una demo de mi flujo de trabajo",
      "items": [
        {
          "moment": "Al cerrar caja",
          "title": "«Faltan 10 dólares. ¿Qué pasó?»",
          "situation": "El conteo físico es de 1.240 USD, pero el saldo esperado es de 1.250 USD.",
          "action": "Compara ambos saldos por divisa y consulta los movimientos y ajustes registrados.",
          "result": "Un faltante de 10 USD identificado para investigar. El sistema muestra la diferencia; tu equipo determina su causa."
        },
        {
          "moment": "Durante la jornada",
          "title": "«¿Quién cambió la tasa de compra?»",
          "situation": "La tasa de compra del dólar pasó de 4.000 a 4.020 COP durante el día.",
          "action": "Consulta el historial de cambios de tasas de la sede.",
          "result": "La tasa anterior, la nueva, el responsable y el motivo registrado, para entender el cambio con contexto."
        },
        {
          "moment": "Cuando vuelve un cliente",
          "title": "«Necesito el recibo de mi operación.»",
          "situation": "Un cliente pide el soporte de una venta de divisas que ya quedó registrada.",
          "action": "Localiza la transacción en el historial y genera su recibo.",
          "result": "El soporte con cliente, operador, divisa, tasa e importe. Este recibo es distinto de una factura electrónica."
        },
        {
          "moment": "Al registrar un cliente",
          "title": "«Este nombre se parece al de una lista.»",
          "situation": "Durante el registro aparecen candidatos con nombres similares.",
          "action": "Revisa los candidatos y la información disponible antes de registrar tu decisión.",
          "result": "Las coincidencias que requieren evaluación. La similitud de nombre por sí sola no confirma que sea la misma persona."
        },
        {
          "moment": "Al trabajar con tu asesor",
          "title": "«Necesito revisar los reportes de la sede.»",
          "situation": "Tu asesor necesita consultar información sin intervenir en la operación diaria.",
          "action": "Asigna el perfil de consulta y las sucursales que le correspondan.",
          "result": "Historial, recibos y reportes dentro de su alcance autorizado, sin permisos para modificar operaciones."
        },
        {
          "moment": "Al preparar reportes",
          "title": "«Es momento de organizar la información.»",
          "situation": "El responsable necesita preparar los archivos para su revisión y posterior presentación.",
          "action": "Genera formatos DIAN 1099/1100 y archivos UIAF trimestrales cuando la empresa tenga habilitada su configuración.",
          "result": "Archivos para revisión del responsable. La generación no implica envío ni aceptación por la autoridad."
        }
      ]
    },
    assistant: {
    "eyebrow": "VISIÓN DEL PRODUCTO · PLANIFICADA",
    "title": "Tu operación bajo control.",
    "accent": "Tu equipo informado a tiempo.",
    "description": "Nuestra visión para Currency Exchange: un asistente de cumplimiento con IA que ayude a identificar eventos relevantes, explicar por qué requieren atención y orientar al personal sobre el siguiente paso.",
    "events": [
        {
            "title": "Información por completar",
            "description": "Avisar cuando falten datos necesarios para revisar un registro."
        },
        {
            "title": "Operaciones por revisar",
            "description": "Dar contexto sobre eventos que requieran la atención del responsable."
        },
        {
            "title": "Fechas por atender",
            "description": "Recordar fechas de preparación de reportes según la configuración del negocio."
        }
    ],
    "flow": "Detectar → Alertar → Orientar → Revisión del equipo",
    "note": "Capacidad planificada. Los ejemplos ilustran la visión; no son alertas disponibles en la prueba actual. El alcance, los eventos y los canales están por definir. Las decisiones quedan en manos del personal.",
    "cta": "Conversar sobre el asistente"
},
    trial: {
    "eyebrow": "TU PRIMER PASO / CURRENCY EXCHANGE",
    "title": "Comprueba la diferencia",
    "accent": "en tu propia operación.",
    "description": "Conecta tu trabajo diario: divisas, clientes, permisos por sucursal y reportes. Empieza con una prueba de 7 días y evalúa el encaje para tu casa de cambio.",
    "daysLabel": "días para explorar",
    "monthLabel": "mes en total",
    "annualLabel": "CON MEMBRESÍA ANUAL",
    "startTitle": "Empieza con 7 días.",
    "startDescription": "Solicita tu prueba. Revisamos tu operación y coordinamos el acceso para que evalúes las capacidades actuales.",
    "startCta": "Solicitar mi prueba de 7 días",
    "annualTitle": "Dale más tiempo a tu equipo.",
    "annualDescription": "Adquiere una membresía de un año para extender tu prueba a un mes en total, incluidos los primeros 7 días.",
    "annualCta": "Explorar la membresía anual",
    "steps": [
        {
            "title": "Define tu flujo de trabajo",
            "description": "Elige un proceso diario y las personas que lo evaluarán."
        },
        {
            "title": "Prueba lo que importa",
            "description": "Revisa divisas, registros de clientes, permisos y reportes durante tu prueba."
        },
        {
            "title": "Decide con claridad",
            "description": "Revisa el encaje y la membresía anual con nuestro equipo antes de comprar."
        }
    ],
    "note": "El acceso a la prueba se coordina con nuestro equipo. La membresía anual requiere una compra; la prueba extendida suma un mes en total. Confirmamos precio, alcance del plan, fechas de activación y condiciones de la membresía antes del pago.",
    "requestLabel": "Solicitud de prueba de 7 días",
    "annualRequestLabel": "Solicitud de membresía anual / prueba de un mes"
},
  "eyebrow": "01 / Nuestro producto insignia",
  "title": "Tu casa de cambio.",
  "description": "Conecta compra y venta de divisas, clientes y caja por sucursal. Revisa diferencias de cierre, consulta quién cambió las tasas y prepara reportes desde la información de tu operación.",
  "problem": "Cuando la información está repartida, cada cierre exige reconstruir lo que pasó.",
  "benefit": "Currency Exchange reúne las piezas de tu operación para que puedas revisar movimientos, controlar accesos y tomar decisiones con contexto.",
  "summaryLabel": "Respuestas concretas para dirigir tu operación",
  "capabilities": [
    {
      "title": "Entiende las diferencias de caja",
      "description": "Compara el saldo esperado con el conteo físico e identifica faltantes o sobrantes por divisa al cerrar la sesión."
    },
    {
      "title": "Revisa quién cambió qué",
      "description": "Consulta cambios de tasas e ingresos o retiros de caja con el responsable y el motivo registrados."
    },
    {
      "title": "Comparte información con control",
      "description": "Asigna accesos por rol y sucursal. El perfil de consulta permite revisar historial, recibos y reportes sin habilitar cambios operativos."
    }
  ],
  "updatesLabel": "De la atención al cliente al soporte de cada operación.",
  "updatesDescription": "Tu equipo registra y consulta la actividad; tú cuentas con información para revisar lo ocurrido en cada sede.",
  "updates": [
    {
      "title": "Un soporte para cada operación",
      "description": "Consulta la transacción registrada y genera su recibo con cliente, operador, divisa, tasa e importe. El recibo es distinto de una factura electrónica."
    },
    {
      "title": "Clientes con continuidad",
      "description": "Busca registros existentes, actualiza datos de contacto y recupera clientes ocultos conservando su historial."
    },
    {
      "title": "Coincidencias para revisar",
      "description": "El registro de clientes incluye revisión de candidatos cuando se detectan coincidencias en listas. Tu equipo evalúa el resultado; una coincidencia de nombre no confirma una identidad."
    },
    {
      "title": "Tasas e inventario conectados",
      "description": "Registra compras y ventas con las tasas aprobadas de la sede y validación de existencias disponibles al vender."
    },
    {
      "title": "Reportes para revisar tu gestión",
      "description": "Filtra una o varias divisas, consulta cambios de tasas y ajustes de caja, y exporta reportes operativos en PDF. Prepara archivos DIAN y UIAF según configuración."
    },
    {
      "title": "Capacidad clara para tus sedes",
      "description": "Core para una sede o Growth para hasta cinco, con cuatro usuarios por sede. Revisamos contigo el plan que encaja con tu operación."
    }
  ],
  "boundary": "Core incluye una sede y Growth hasta cinco, con cuatro usuarios por sede. Capacidades sujetas al plan y la configuración. Los archivos regulatorios requieren revisión antes de su presentación.",
  "cta": "Solicitar una demo",
  "moreLabel": "¿Tu reto está en otra industria?",
  "moreCta": "Explora nuestros servicios",
  "headlineAccent": "Bajo control.",
  "productLabel": "SOFTWARE PARA CASAS DE CAMBIO COLOMBIANAS",
  "ctaNote": "¿Qué necesitas revisar mejor: caja, cambios de tasas o reportes? Cuéntanos y coordinamos una demostración de ese flujo.",
  "tourCta": "Ver capacidades",
  "preview": {
    "label": "Vista ilustrativa · Datos de ejemplo",
    "title": "Tu operación, en una sola vista",
    "branch": "Sucursal Centro",
    "tabs": [
      "Cierre de caja",
      "Cambios de tasas",
      "Operación y recibo"
    ],
    "views": [
      {
        "title": "Identifica una diferencia al cerrar",
        "description": "Compara el saldo esperado con el conteo físico de una divisa. Ejemplo en USD.",
        "rows": [
          {
            "label": "Saldo esperado · USD",
            "value": "1.250,00"
          },
          {
            "label": "Conteo físico · USD",
            "value": "1.240,00"
          },
          {
            "label": "Diferencia · USD",
            "value": "−10,00 · Faltante"
          }
        ]
      },
      {
        "title": "Un cambio con contexto",
        "description": "Revisa la tasa anterior, la nueva y quién registró el cambio con su motivo. Ejemplo de compra de USD en COP.",
        "rows": [
          {
            "label": "Tasa anterior → nueva",
            "value": "4.000 → 4.020"
          },
          {
            "label": "Responsable",
            "value": "Administrador de ejemplo"
          },
          {
            "label": "Motivo",
            "value": "Ajuste de tasa de compra"
          }
        ]
      },
      {
        "title": "De la operación a su soporte",
        "description": "Consulta el registro y genera un recibo de la transacción. El recibo no es una factura electrónica.",
        "rows": [
          {
            "label": "Operación",
            "value": "Venta · 100 USD"
          },
          {
            "label": "Tasa · COP por USD",
            "value": "4.100"
          },
          {
            "label": "Importe · COP",
            "value": "410.000"
          }
        ]
      }
    ],
    "footnote": "Representación del flujo. No es una captura del portal ni información en vivo."
  },
  "closingTitle": "Tu próxima etapa empieza con una demo.",
  "closingDescription": "Descubre las capacidades actuales, revisa el plan que encaja con tus sedes y conoce la evolución prevista del producto.",
  "roadmapTitle": "Lo que viene también cambia el juego.",
  "roadmapDescription": "Estamos construyendo una plataforma que evoluciona contigo. Esta es la siguiente etapa del producto, con su estado visible.",
  "availableLabel": "Capacidades actuales",
  "roadmap": [
    {
      "title": "Facturación electrónica",
      "description": "Una próxima etapa para conectar las operaciones con la emisión y el seguimiento de facturas electrónicas. Integración y alcance por definir.",
      "status": "Planificada",
      "state": "planned",
      "tag": "LA PRÓXIMA ETAPA"
    },
    {
      "title": "Renovación automática",
      "description": "La base de pagos recurrentes está implementada. La habilitación de cobros automáticos depende de la elegibilidad y aprobación del proveedor.",
      "status": "En validación",
      "state": "validation",
      "tag": "CONTINUIDAD"
    },
    {
      "title": "Conciliación de pagos",
      "description": "Seguimiento y conciliación de pagos del servicio para ampliar la trazabilidad de la membresía.",
      "status": "Planificada",
      "state": "planned",
      "tag": "TRAZABILIDAD"
    }
  ],
  "invoicePreview": {
    "title": "Factura electrónica",
    "subtitle": "Concepto de próxima funcionalidad",
    "issuer": "Tu casa de cambio",
    "row": "Operación vinculada",
    "total": "Total",
    "note": "Flujo previsto · No emite facturas"
  },
  "heroBadges": [
    "Conciliación por divisa",
    "Cambios con responsable",
    "Acceso de consulta"
  ],
  "compliance": {
    "eyebrow": "REPORTES Y CUMPLIMIENTO",
    "title": "Tu información operativa.",
    "accent": "Lista para preparar tus reportes.",
    "description": "El cumplimiento necesita información organizada. Currency Exchange conecta los registros de tu operación con la generación de reportes para DIAN y UIAF, según configuración y permisos.",
    "cards": [
      {
        "name": "DIAN",
        "title": "Compras y ventas, documentadas.",
        "description": "Generación de los formatos 1099 para compras y 1100 para ventas de divisas, a partir de los registros de tu operación.",
        "tags": [
          "Formato 1099",
          "Formato 1100"
        ]
      },
      {
        "name": "UIAF",
        "title": "Seguimiento por periodo.",
        "description": "Generación del reporte trimestral de operaciones que superan los umbrales configurados, cuando el módulo está habilitado.",
        "tags": [
          "Reporte trimestral",
          "Umbrales configurados"
        ]
      }
    ],
    "flow": [
      "Registra la operación",
      "Genera el archivo",
      "Revisa y presenta"
    ],
    "note": "Herramientas de apoyo al cumplimiento. La generación del archivo no equivale a presentación, validación o aceptación por DIAN o UIAF.",
    "cta": "Conocer los reportes en una demo"
  }
},

  why: {
  "eyebrow": "01 / Por qué trabajar con nosotros",
  "line1": "Construimos nuestro producto.",
  "line2": "Nos involucramos en el tuyo.",
  "sub": "Currency Exchange hace visible nuestra forma de trabajar: convertir necesidades operativas en capacidades que se pueden usar y revisar.",
  "items": [
    {
      "title": "Experiencia de producto",
      "desc": "Trabajamos en nuestro propio producto y enfrentamos decisiones de operación, integración y evolución del software."
    },
    {
      "title": "Un problema de negocio primero",
      "desc": "Definimos qué necesitas mejorar antes de decidir qué modelo o herramienta usar."
    },
    {
      "title": "Alcance y criterios claros",
      "desc": "Acordamos entregables, prioridades y cómo revisar si la solución cumple su propósito."
    },
    {
      "title": "Validación por etapas",
      "desc": "Prototipamos, revisamos contigo y ajustamos antes de ampliar la implementación."
    },
    {
      "title": "Acceso al equipo que construye",
      "desc": "Conversas con quienes diseñan e implementan la solución, para resolver preguntas con contexto."
    },
    {
      "title": "Evolución acordada",
      "desc": "Definimos contigo el soporte y las siguientes mejoras según las necesidades del proyecto."
    }
  ]
},

  compare: {
    eyebrow: "Ponlos a competir",
    line1: "La mano",
    line2: "habla por sí sola.",
    recommended: "★ Recomendado",
    cols: ["JokerLabs", "Contratar Empleados", "Otras Agencias"],
    rows: [
      { label: "Costo", jl: "Justo y transparente", hire: "$$$ (salario + beneficios)", agency: "$$$ – $$$$ por proyecto" },
      { label: "Experiencia", jl: "Talento senior en 4 disciplinas", hire: "Varía según la contratación", agency: "Varía" },
      { label: "Tiempos", jl: "Rápidos y confiables", hire: "Semanas más incorporación", agency: "Generalmente más lentos" },
      { label: "Flexibilidad", jl: "Escala cuando quieras", hire: "Contratos requeridos", agency: "Solo por proyecto" },
      { label: "Enfoque", jl: "Laboratorio multidisciplinario", hire: "Especialistas en silos", agency: "Depende de la agencia" },
      { label: "Foco en cliente", jl: "Ingeniería para cualquier reto, alcance definido", hire: "Prioridades internas", agency: "Múltiples clientes a la vez" },
      { label: "Soporte", jl: "Acompañamiento continuo", hire: "Capacidad interna", agency: "Suele terminar tras la entrega" },
    ],
  },

  about: {
    eyebrow: "Sobre nosotros",
    line1: "Somos el laboratorio",
    line2: "que tiene todos los palos de la baraja.",
    lead: "JokerLabs es un laboratorio de inteligencia artificial fundado por cinco ingenieros provenientes de tres ramas de la ingeniería: Mecatrónica, Biomédica y Mecánica, con especialización en inteligencia artificial, ingeniería de software, automatización y arquitectura de sistemas.",
    body1: "No somos una agencia generalista ni una consultora tradicional. Somos un laboratorio multidisciplinario diseñado para resolver problemas que viven en la intersección entre tecnología, procesos e infraestructura. Problemas que requieren todos los palos de la baraja para resolverse correctamente.",
    body2: "Con base en Cali, Colombia. Trabajamos con empresas en Colombia, Perú y México para desarrollar soluciones de inteligencia artificial, software y automatización adaptadas a su operación.",
    statsTitle: "El laboratorio, en números.",
    stats: [
      { value: "4", label: "Disciplinas principales" },
      { value: "5", label: "Fundadores expertos" },
      { value: "∞", label: "Problemas resueltos" },
      { value: "1", label: "Laboratorio unificado" },
    ],
  },

  process: {
  "eyebrow": "02 / Cómo empezamos",
  "line1": "Del reto de negocio",
  "line2": "a una solución validada.",
  "steps": [
    {
      "title": "Entender",
      "desc": "Revisamos el proceso, las herramientas y la necesidad de negocio que quieres resolver."
    },
    {
      "title": "Definir",
      "desc": "Acordamos alcance, prioridades, presupuesto y criterios para evaluar el resultado."
    },
    {
      "title": "Validar",
      "desc": "Construimos una primera versión y la revisamos contigo antes de ampliar el desarrollo."
    },
    {
      "title": "Integrar",
      "desc": "Conectamos la solución con tus sistemas y preparamos su uso en la operación."
    },
    {
      "title": "Evolucionar",
      "desc": "Definimos soporte y siguientes mejoras según lo que necesite tu negocio."
    }
  ]
},

  faq: {
  "eyebrow": "Antes de empezar",
  "line1": "Elige el camino",
  "line2": "que necesita tu negocio.",
  "selectLabel": "Selecciona una pregunta",
  "chatHeader": "JokerLabs · Preguntas frecuentes",
  "chatStatus": "Respuestas orientativas",
  "chatEmpty": "Selecciona una pregunta para conocer cómo trabajamos.",
  "items": [
{
    "question": "¿Cómo funciona la extensión de la prueba?",
    "answer": "Adquiere una membresía de un año para extender tu prueba a un mes en total, incluidos los primeros 7 días. El acceso a la prueba se coordina con nuestro equipo. La membresía anual requiere una compra; la prueba extendida suma un mes en total. Confirmamos precio, alcance del plan, fechas de activación y condiciones de la membresía antes del pago."
},
    {
      "question": "¿JokerLabs es un laboratorio o un software de cambio?",
      "answer": "JokerLabs es un laboratorio de inteligencia artificial. Currency Exchange es nuestro producto insignia para casas de cambio. También desarrollamos soluciones de IA, software y automatización para otros negocios."
    },
    {
      "question": "¿Cómo puedo conocer Currency Exchange?",
      "answer": "Solicita una demo en el formulario e indica que te interesa Currency Exchange. Revisaremos tu operación, las capacidades disponibles y los siguientes pasos de implementación."
    },
    {
      "question": "¿Pueden trabajar en una industria diferente?",
      "answer": "Sí. Cuéntanos el proceso que necesitas mejorar y las herramientas que usas. Evaluaremos el encaje y propondremos un alcance antes de iniciar el desarrollo."
    },
    {
      "question": "¿Cómo se definen el precio y los tiempos?",
      "answer": "Dependen del alcance, las integraciones y los requisitos del proyecto. Primero revisamos tu necesidad; después acordamos entregables, presupuesto y calendario."
    },
    {
      "question": "¿Qué pasa después de enviar mi consulta?",
      "answer": "El equipo revisa tu mensaje y te contacta para entender el contexto. Si hay encaje, definimos una demo del producto o una conversación de alcance para tu proyecto."
    }
  ]
},

  team: {
    eyebrow: "El laboratorio",
    line1: "Cinco fundadores.",
    line2: "Una misión.",
    sub: "Cada fundador aporta una especialidad. Juntos cubrimos cada ángulo del problema, desde el modelo hasta la máquina.",
    roles: [
      "DevOps Engineer",
      "AI Engineer",
      "AI Engineer",
      "Frontend Engineer",
      "Fullstack Engineer"
    ],
  },

  contact: {
    location: "Con base en Cali, Colombia",
    serviceArea: "Servicios para empresas en Colombia, Perú y México.",
  "eyebrow": "El siguiente paso",
  "line1": "Hablemos de",
  "line2": "tu operación.",
  "sub": "¿Buscas Currency Exchange o una solución para tu empresa? Elige tu interés y cuéntanos qué necesitas mejorar. Te contactaremos para definir el siguiente paso.",
  "nameLabel": "Tu nombre",
  "emailLabel": "Correo electrónico",
  "messageLabel": "¿Qué necesitas mejorar?",
  "messagePlaceholder": "Cuéntanos tu industria, el proceso que quieres mejorar y las herramientas que usas hoy.",
  "submitLabel": "Solicitar conversación",
  "sendingLabel": "Enviando…",
  "responseTime": "Revisamos cada consulta para preparar una conversación con contexto.",
  "successTitle": "Consulta recibida",
  "successMsg": "Gracias. El equipo revisará tu mensaje y te contactará para el siguiente paso.",
  "interestLabel": "Me interesa",
  "interestOptions": [
    "Un proyecto de IA o desarrollo",
    "Una demo de Currency Exchange"
  ]
},

  footer: {
    googleProfile: "JokerLabs en Google",
  "tagline": "JokerLabs es un laboratorio de inteligencia artificial. Creamos productos propios y soluciones para empresas. Currency Exchange es nuestro producto insignia.",
  "contactLabel": "Contacto",
  "cta": "Hablemos de tu proyecto",
  "taglineBottom": "Inteligencia artificial. Productos. Progreso."
},
};
