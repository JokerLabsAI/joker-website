import type { SiteContent } from "@/lib/locale-types";

export const es: SiteContent = {
  locale: "es",

  nav: {
    items: ["Inicio", "Producto", "Servicios", "Proceso", "Equipo", "Contacto"],
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
    location: "DESDE COLOMBIA · PARA EL MUNDO",
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
  "eyebrow": "02 / Servicios del laboratorio",
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
  "title": "Toda tu operación.",
  "description": "Clientes, divisas, caja y reportes DIAN y UIAF conectados en una misma plataforma. Más visibilidad para operar y herramientas para apoyar tus procesos de cumplimiento.",
  "problem": "Cuando la información está repartida, cada cierre exige reconstruir lo que pasó.",
  "benefit": "Currency Exchange reúne las piezas de tu operación para que puedas revisar movimientos, controlar accesos y tomar decisiones con contexto.",
  "summaryLabel": "Más claridad en cada paso de tu operación",
  "capabilities": [
    {
      "title": "Cada sede, bajo control",
      "description": "Asigna accesos por rol y sucursal. Tu equipo trabaja con los permisos que necesita y tú mantienes visibilidad."
    },
    {
      "title": "Menos información dispersa",
      "description": "Conecta clientes, operaciones, divisas y recibos para revisar la actividad desde un mismo entorno."
    },
    {
      "title": "Reportes que respaldan tu gestión",
      "description": "Consulta caja por divisa y prepara archivos DIAN y UIAF según configuración. Mantén información organizada para revisión y seguimiento."
    }
  ],
  "updatesLabel": "Control para operar. Herramientas para crecer.",
  "updatesDescription": "Estas capacidades conectan el trabajo de tu equipo con la información que necesitas como dueño o administrador.",
  "updates": [
    {
      "title": "Caja y divisas con trazabilidad",
      "description": "Tasas aprobadas, inventario y conciliación por sede, con historial de movimientos para revisar lo ocurrido."
    },
    {
      "title": "Clientes más fáciles de gestionar",
      "description": "Búsqueda, actualización de contacto y recuperación de registros ocultos, conservando su historial."
    },
    {
      "title": "Reportes a tu medida",
      "description": "Filtra una o varias divisas y exporta reportes de caja en PDF para revisar el periodo que te interesa."
    },
    {
      "title": "Un plan para tu operación",
      "description": "Core para una sede o Growth para hasta cinco, con cuatro usuarios por sede y gestión de membresía."
    }
  ],
  "boundary": "Capacidades sujetas al plan y la configuración. Los archivos regulatorios requieren revisión antes de su presentación.",
  "cta": "Solicitar una demo",
  "moreLabel": "¿Tu reto está en otra industria?",
  "moreCta": "Explora nuestros servicios",
  "headlineAccent": "Un solo Currency Exchange.",
  "productLabel": "PRODUCTO INSIGNIA DE JOKERLABS",
  "ctaNote": "Cuéntanos cómo opera tu casa de cambio. Revisamos contigo el encaje y los siguientes pasos.",
  "tourCta": "Ver capacidades",
  "preview": {
    "label": "Vista ilustrativa · Datos de ejemplo",
    "title": "Tu operación, en una sola vista",
    "branch": "Sucursal Centro",
    "tabs": [
      "Caja y divisas",
      "Clientes",
      "Reportes"
    ],
    "views": [
      {
        "title": "Visibilidad de tu caja",
        "description": "Consulta el inventario por divisa y revisa los movimientos de la sede.",
        "rows": [
          {
            "label": "USD · Disponible",
            "value": "1.250,00"
          },
          {
            "label": "EUR · Disponible",
            "value": "840,00"
          },
          {
            "label": "COP · Saldo de caja",
            "value": "4.800.000,00"
          }
        ]
      },
      {
        "title": "Información del cliente conectada",
        "description": "Consulta sus datos y el estado de revisión antes de continuar la atención.",
        "rows": [
          {
            "label": "Registro",
            "value": "Datos de contacto"
          },
          {
            "label": "Verificación",
            "value": "Resultado de listas"
          },
          {
            "label": "Trazabilidad",
            "value": "Historial de cambios"
          }
        ]
      },
      {
        "title": "De la operación al reporte",
        "description": "Consulta los reportes operativos y conoce la generación de archivos regulatorios.",
        "rows": [
          {
            "label": "Caja por divisa",
            "value": "PDF"
          },
          {
            "label": "DIAN · Compras / Ventas",
            "value": "1099 / 1100"
          },
          {
            "label": "UIAF · Según configuración",
            "value": "Trimestral"
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
    "Control por sede",
    "Reportes DIAN y UIAF",
    "Trazabilidad operativa"
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
  "eyebrow": "03 / Por qué trabajar con nosotros",
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
    body2: "Con base en Colombia y trabajando a nivel global. Llevamos el talento y la innovación latinoamericana a proyectos en cualquier parte del mundo, con la calidad y disciplina de un laboratorio de primer nivel.",
    statsTitle: "El laboratorio, en números.",
    stats: [
      { value: "4", label: "Disciplinas principales" },
      { value: "5", label: "Fundadores expertos" },
      { value: "∞", label: "Problemas resueltos" },
      { value: "1", label: "Laboratorio unificado" },
    ],
  },

  process: {
  "eyebrow": "04 / Cómo empezamos",
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
  "tagline": "JokerLabs es un laboratorio de inteligencia artificial. Creamos productos propios y soluciones para empresas. Currency Exchange es nuestro producto insignia.",
  "navigateLabel": "Explorar",
  "contactLabel": "Contacto",
  "cta": "Hablemos de tu proyecto",
  "taglineBottom": "Inteligencia artificial. Productos. Progreso."
},
};
