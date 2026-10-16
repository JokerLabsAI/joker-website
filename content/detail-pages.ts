import type { DetailPageId, Locale } from "@/lib/page-routes";

export interface DetailContent {
  title: string; description: string; intro: string;
  sections: Array<{ title: string; body: string; points: string[] }>;
  example: { title: string; body: string };
  steps: string[]; faq: Array<{ question: string; answer: string }>;
  boundary: string; cta: string;
}

export const DETAIL_CONTENT = {
  "es": {
    "software": {
      "title": "Desarrollo de software a medida para tu operación",
      "description": "Desarrollo de software a medida desde Cali para empresas en Colombia, Perú y México. Procesos, permisos y reportes conectados con un alcance definido.",
      "intro": "Cuando una operación depende de hojas separadas, mensajes y registros repetidos, el problema empieza en cómo circula la información. Diseñamos software alrededor del trabajo de tu equipo: quién registra, quién revisa y qué necesita cada persona para decidir.",
      "sections": [
        {
          "title": "Empieza por el proceso que necesitas resolver",
          "body": "Definimos usuarios, reglas, datos y excepciones antes de elegir qué construir. El alcance debe permitir comprobar si el flujo acordado funciona.",
          "points": [
            "Portales de operación con acceso por rol.",
            "Registros, búsquedas y documentos vinculados al proceso.",
            "Reportes y conexiones con sistemas existentes según alcance."
          ]
        },
        {
          "title": "Lo que aporta nuestra experiencia de producto",
          "body": "Currency Exchange conecta clientes, compra y venta de divisas, caja y reportes por sucursal. Esa experiencia permite discutir permisos, historial y revisión de información con ejemplos concretos.",
          "points": [
            "Elegir qué información puede consultar o modificar cada perfil.",
            "Conservar contexto al pasar de un registro a su soporte.",
            "Probar los casos habituales y las excepciones antes de aceptar una entrega."
          ]
        }
      ],
      "example": {
        "title": "Un registro que deja de viajar entre herramientas",
        "body": "Un equipo recibe una solicitud, otro la revisa y el responsable necesita conocer el estado. Un portal a medida puede reunir el registro, los permisos y el seguimiento en el mismo flujo. Este es un ejemplo de alcance a diseñar, no una promesa de funciones incluidas en cualquier proyecto."
      },
      "steps": [
        "Mapear el proceso y sus responsables.",
        "Acordar un primer alcance y criterios de aceptación.",
        "Construir y validar con las personas que lo usarán.",
        "Definir despliegue, transferencia y soporte en la propuesta."
      ],
      "faq": [
        {
          "question": "¿Necesito reemplazar todo lo que uso?",
          "answer": "Primero revisamos las herramientas actuales. El proyecto puede conectar o sustituir una parte del flujo; la decisión depende de las necesidades y restricciones verificadas."
        },
        {
          "question": "¿Cuánto cuesta y cuánto tarda?",
          "answer": "La propuesta depende del alcance, datos, integraciones y validación requerida. Confirmamos entregables y condiciones antes de iniciar; esta página no establece un precio ni un plazo fijo."
        }
      ],
      "boundary": "Con base en Cali, Colombia, atendemos proyectos para empresas en Colombia, Perú y México. Integraciones, migración de datos y soporte se definen por proyecto.",
      "cta": "Hablemos de tu proyecto de software"
    },
    "ai": {
      "title": "Inteligencia artificial aplicada al trabajo de tu empresa",
      "description": "Diseñamos soluciones de IA para empresas en Colombia, Perú y México desde Cali. Investigación asistida, organización de información y revisión humana.",
      "intro": "La oportunidad para usar IA empieza con una tarea concreta: reunir información, organizarla o preparar un primer análisis. Revisamos dónde puede ayudar un modelo, qué fuentes necesita y qué debe seguir bajo decisión de tu equipo.",
      "sections": [
        {
          "title": "De una tarea repetida a un piloto evaluable",
          "body": "Definimos el resultado esperado y probamos con ejemplos representativos. La evaluación debe incluir errores, calidad de las fuentes y utilidad para quien recibe el resultado.",
          "points": [
            "Investigación asistida y resúmenes para revisión.",
            "Organización de resultados en estructuras que el equipo pueda usar.",
            "Asistentes conectados a un flujo, con alcance y permisos definidos."
          ]
        },
        {
          "title": "Un ejemplo de trabajo del laboratorio",
          "body": "Nuestro proyecto interno de inteligencia de mercado reúne investigación asistida por modelos, resultados estructurados y un reporte por correo. Es una referencia de diseño y código; no acredita resultados comerciales ni una solución lista para cualquier empresa.",
          "points": [
            "Separar la recopilación de información de su aprobación.",
            "Definir fuentes, formato de salida y destinatarios.",
            "Evaluar la utilidad antes de automatizar decisiones."
          ]
        }
      ],
      "example": {
        "title": "Preparar una revisión semanal de información",
        "body": "En lugar de empezar cada revisión desde cero, un flujo puede reunir fuentes y preparar un borrador estructurado. Una persona comprueba las referencias y decide qué merece atención. El alcance, acceso a datos y canales se acuerdan durante el piloto."
      },
      "steps": [
        "Elegir una tarea y criterios para evaluar su resultado.",
        "Revisar fuentes, permisos y manejo de información.",
        "Probar un piloto con supervisión y casos difíciles.",
        "Decidir la siguiente etapa a partir de la evaluación."
      ],
      "faq": [
        {
          "question": "¿Toda automatización necesita IA?",
          "answer": "No. Una regla conocida o una fecha puede resolverse con lógica determinista. Proponemos IA cuando la tarea requiere interpretación o generación y podemos evaluar el resultado."
        },
        {
          "question": "¿El asistente de Currency Exchange ya está disponible?",
          "answer": "El asistente de cumplimiento de Currency Exchange es una capacidad planeada. Esta oferta de proyectos de IA no implica que ese asistente esté disponible ni incluido en la prueba del producto."
        }
      ],
      "boundary": "Los modelos pueden producir errores. El proyecto define revisión humana, alcance de acceso y condiciones de proveedores antes de su uso operativo.",
      "cta": "Evaluemos tu caso de IA"
    },
    "automation": {
      "title": "Automatización de procesos con controles claros",
      "description": "Automatización de procesos empresariales desde Cali para Colombia, Perú y México. Define disparadores, revisiones y excepciones antes de conectar tareas.",
      "intro": "Una tarea repetida necesita algo más que ejecutarse sola: debe tener un inicio definido, un responsable y una forma de revisar lo que ocurrió. Diseñamos flujos para conectar pasos y hacer visibles las excepciones.",
      "sections": [
        {
          "title": "Elegir qué automatizar primero",
          "body": "Revisamos frecuencia, datos de entrada, reglas y puntos de revisión. Empezamos por una secuencia acotada cuyo resultado pueda comprobar el equipo.",
          "points": [
            "Preparación y distribución de información.",
            "Actualización de estados entre etapas de un proceso.",
            "Notificaciones y tareas programadas según alcance."
          ]
        },
        {
          "title": "Diseñar el camino cuando algo falla",
          "body": "La automatización debe contemplar datos incompletos, servicios no disponibles y resultados pendientes. Los reintentos y las acciones humanas se definen según la operación.",
          "points": [
            "Un responsable para revisar excepciones.",
            "Registro de ejecución y resultado esperado.",
            "Límites para evitar repetir una acción sin control."
          ]
        }
      ],
      "example": {
        "title": "Un reporte que necesita llegar a revisión",
        "body": "Una tarea programada puede reunir información, preparar un reporte y entregarlo a un responsable. El proyecto interno de inteligencia de mercado del laboratorio contiene una secuencia de investigación, preparación y envío; su código es una referencia, no una garantía de ahorro para otros procesos."
      },
      "steps": [
        "Describir el flujo manual y sus excepciones.",
        "Acordar disparador, resultado y responsable.",
        "Probar ejecución, fallos y recuperación.",
        "Definir operación y soporte antes del despliegue."
      ],
      "faq": [
        {
          "question": "¿Se puede automatizar un paso que requiere aprobación?",
          "answer": "Sí, podemos diseñar el flujo para preparar información y dejar una decisión a una persona. El alcance debe distinguir qué se ejecuta automáticamente y qué requiere revisión."
        },
        {
          "question": "¿Se garantiza una reducción de tiempos?",
          "answer": "Primero necesitamos una línea base y una tarea comparable. Medimos el resultado del piloto antes de afirmar ahorro o reducción de errores."
        }
      ],
      "boundary": "El alcance depende de las herramientas, sus permisos y las condiciones de sus proveedores. No se activa ningún envío ni tarea por solicitar información.",
      "cta": "Revisemos tu proceso repetitivo"
    },
    "integration": {
      "title": "Integración de sistemas para conectar tu operación",
      "description": "Integramos sistemas y APIs desde Cali para empresas en Colombia, Perú y México. Conecta datos y estados con permisos y reglas de confirmación definidos.",
      "intro": "Cuando dos herramientas tienen versiones distintas del mismo registro, alguien termina conciliando la información a mano. Revisamos qué sistema es responsable de cada dato y cómo deben comunicarse antes de construir la conexión.",
      "sections": [
        {
          "title": "Conectar un proceso, no solo dos aplicaciones",
          "body": "Definimos datos, identificadores, permisos y cambios de estado. Una conexión debe dejar claro cuándo una operación está pendiente, confirmada o necesita revisión.",
          "points": [
            "APIs y eventos entre plataformas según sus contratos.",
            "Correspondencia de registros y validación de datos.",
            "Manejo de errores y estados pendientes."
          ]
        },
        {
          "title": "Una referencia concreta: los pagos del producto",
          "body": "Currency Exchange conecta la membresía con pagos verificados por el proveedor. El regreso del navegador muestra el estado; la confirmación se procesa en el backend. Esa separación ayuda a explicar por qué una pantalla de éxito no debe ser la única prueba de una operación.",
          "points": [
            "Identificar el evento que confirma el resultado.",
            "Distinguir el registro interno de la referencia del proveedor.",
            "Acordar controles para eventos repetidos y fallos."
          ]
        }
      ],
      "example": {
        "title": "El pago aparece pendiente al regresar",
        "body": "El cliente vuelve desde el proveedor antes de que llegue la confirmación. La integración debe mostrar ese estado y actualizarlo cuando exista evidencia válida. En otros proyectos, definimos el contrato equivalente con cada proveedor y sistema."
      },
      "steps": [
        "Inventariar herramientas, datos y permisos disponibles.",
        "Acordar fuentes de verdad y estados del proceso.",
        "Probar casos pendientes, repetidos y fallidos.",
        "Definir monitoreo, responsables y condiciones de operación."
      ],
      "faq": [
        {
          "question": "¿Pueden conectar cualquier herramienta?",
          "answer": "Primero comprobamos sus APIs, permisos, límites y condiciones. Algunas conexiones pueden requerir cambios de alcance o no ser viables con el acceso disponible."
        },
        {
          "question": "¿Los cobros recurrentes de Currency Exchange ya están habilitados?",
          "answer": "Su habilitación depende de elegibilidad y aprobación del proveedor. La existencia de una integración no elimina esas condiciones ni implica disponibilidad general."
        }
      ],
      "boundary": "Las aprobaciones del proveedor, costos externos y mantenimiento se acuerdan en la propuesta. No se prometen certificaciones ni acceso que todavía no esté disponible.",
      "cta": "Hablemos de tus sistemas"
    },
    "fx-closing": {
      "title": "Cómo revisar diferencias en el cierre de caja de una casa de cambio",
      "description": "Revisa saldos esperados, conteos físicos y diferencias por divisa con Currency Exchange. Un ejemplo práctico de cierre y revisión de movimientos.",
      "intro": "Al cerrar una sesión, una cifra total no explica si faltan dólares o sobran euros. Revisar cada divisa por separado permite identificar dónde aparece una diferencia y orientar la investigación del responsable.",
      "sections": [
        {
          "title": "Comparar lo esperado con lo contado",
          "body": "Currency Exchange presenta el saldo esperado, el conteo físico y la diferencia por divisa en el resultado de conciliación. El cierre puede registrar diferencias; no significa que su causa ya esté resuelta.",
          "points": [
            "Revisar la sede y la fecha de la sesión.",
            "Registrar el conteo físico de las divisas requeridas.",
            "Consultar si cada resultado está cuadrado, presenta faltante o sobrante."
          ]
        },
        {
          "title": "Investigar con los movimientos registrados",
          "body": "Los reportes de caja permiten revisar operaciones y ajustes. Los ingresos y retiros incluyen responsable y motivo registrados, útiles para contrastar lo ocurrido.",
          "points": [
            "Verificar que se revisan la misma sede, periodo y divisa.",
            "Contrastar soportes de operaciones con los registros.",
            "Revisar ajustes y su contexto con el responsable."
          ]
        }
      ],
      "example": {
        "title": "Ejemplo ilustrativo: faltan 10 USD",
        "body": "El saldo esperado es 1.250 USD y el conteo físico es 1.240 USD. La diferencia es −10 USD, un faltante. Ese dato delimita qué investigar; no permite atribuir una causa ni una responsabilidad sin revisar la evidencia."
      },
      "steps": [
        "Seleccionar la sesión y confirmar el alcance de revisión.",
        "Comparar esperado y físico por divisa.",
        "Revisar operaciones, recibos y ajustes pertinentes.",
        "Documentar el seguimiento con el procedimiento de tu empresa."
      ],
      "faq": [
        {
          "question": "¿El sistema encuentra automáticamente la causa?",
          "answer": "No. Muestra la diferencia y los registros para revisión. El equipo investiga y determina las acciones apropiadas."
        },
        {
          "question": "¿Puedo revisar solo algunas divisas en los reportes?",
          "answer": "Los reportes de caja admiten una o varias divisas y exportación PDF. Los saldos de apertura y cierre en COP pueden representar contexto de toda la sede; no deben confundirse con un subtotal del filtro."
        }
      ],
      "boundary": "Guía del flujo del producto, sujeta a permisos y configuración. Los valores son ejemplos; no son datos de clientes ni un procedimiento contable o regulatorio obligatorio.",
      "cta": "Ver este cierre en una demo"
    },
    "fx-rates": {
      "title": "Cómo revisar cambios de tasas en tu casa de cambio",
      "description": "Consulta tasas anteriores y nuevas, responsable y motivo con Currency Exchange. Distingue referencia de mercado, tasa operativa e historial de la operación.",
      "intro": "Una tasa puede cambiar durante la jornada. Para entender una operación anterior necesitas su contexto: qué tasa quedó registrada y qué cambios se hicieron después en la sede.",
      "sections": [
        {
          "title": "Distinguir referencia y tasa de operación",
          "body": "Currency Exchange ejecuta las operaciones con las tasas aprobadas de la sesión. Una referencia de mercado no debe interpretarse por sí sola como la tasa de compra o venta ejecutada.",
          "points": [
            "Confirmar si revisas compra o venta y cuál es la divisa.",
            "Consultar la tasa registrada en la operación.",
            "Separar esa tasa de la referencia o de una estimación."
          ]
        },
        {
          "title": "Seguir el historial del cambio",
          "body": "Los cambios de tasas incluyen valores anteriores y nuevos, responsable y motivo. El reporte de caja expone ese historial para revisión.",
          "points": [
            "Revisar sede y fecha del cambio.",
            "Comparar las tasas anteriores con las nuevas.",
            "Consultar el motivo registrado y los soportes relacionados."
          ]
        }
      ],
      "example": {
        "title": "Ejemplo ilustrativo: una tasa cambia a media jornada",
        "body": "Una compra de 100 USD quedó registrada a 4.000 COP por USD: su importe es 400.000 COP. Después, la tasa de compra cambia a 4.020. Revisar la operación original exige conservar su tasa de 4.000; multiplicarla por la tasa nueva produciría 402.000 COP y confundiría el historial."
      },
      "steps": [
        "Localizar la operación y confirmar su tasa registrada.",
        "Consultar los cambios de tasas de la sede.",
        "Relacionar el cambio con su responsable y motivo.",
        "Usar el contexto para responder la consulta o revisar una excepción."
      ],
      "faq": [
        {
          "question": "¿El historial garantiza que la tasa era la mejor del mercado?",
          "answer": "No. Permite revisar cambios y el contexto registrado; no acredita una comparación de mercado ni garantiza rentabilidad."
        },
        {
          "question": "¿Quién puede cambiar tasas?",
          "answer": "Depende de los permisos del miembro. Los perfiles de consulta no pueden modificar operaciones y el propietario puede limitar funciones dentro del alcance de cada rol."
        }
      ],
      "boundary": "Las cifras son ilustrativas. Esta guía explica la revisión operativa del producto; no recomienda tasas ni sustituye las políticas comerciales de tu empresa.",
      "cta": "Revisar tasas e historial en una demo"
    },
    "fx-reports": {
      "title": "De las operaciones a los archivos de reportes de tu casa de cambio",
      "description": "Conoce la preparación de archivos DIAN 1099/1100 y UIAF según configuración en Currency Exchange. Generación, revisión y presentación son etapas distintas.",
      "intro": "Preparar un archivo y presentarlo ante una autoridad son pasos diferentes. Esta guía explica qué información organiza Currency Exchange y qué debe revisar el responsable antes de continuar su proceso de reporte.",
      "sections": [
        {
          "title": "Qué archivos contempla el producto",
          "body": "Currency Exchange contempla la generación de XML DIAN 1099 para compras y 1100 para ventas de divisas. También existe generación UIAF trimestral condicionada a la configuración de la empresa.",
          "points": [
            "Confirmar tipo de archivo, empresa y periodo.",
            "Revisar permisos y disponibilidad de la configuración.",
            "Distinguir estos archivos de los reportes operativos de caja en PDF."
          ]
        },
        {
          "title": "Qué revisar antes de continuar",
          "body": "El responsable contrasta el alcance y los datos del archivo con los registros de la operación. La existencia de un generador no acredita por sí sola que una empresa esté obligada a usarlo o que el formato sea aceptado sin revisión.",
          "points": [
            "Comprobar el periodo y las operaciones incluidas.",
            "Verificar los datos de identificación y configuración pertinentes.",
            "Confirmar requisitos vigentes por los canales oficiales y con el responsable competente."
          ]
        }
      ],
      "example": {
        "title": "Ejemplo ilustrativo: compras y ventas no se mezclan",
        "body": "El responsable necesita revisar las compras de un periodo. Selecciona el flujo de generación 1099, confirma el alcance y revisa el archivo obtenido. Para ventas, el flujo del producto usa 1100. Obtener el archivo no constituye su envío ni prueba de aceptación."
      },
      "steps": [
        "Revisar los registros y la configuración del periodo.",
        "Generar el archivo disponible para el alcance seleccionado.",
        "Revisar el resultado con el responsable de reportes.",
        "Continuar la presentación por el canal que corresponda fuera de este flujo de generación."
      ],
      "faq": [
        {
          "question": "¿Currency Exchange envía automáticamente estos archivos?",
          "answer": "La capacidad descrita es generación de archivos. No presentamos ese resultado como envío automático, recepción o aceptación por una autoridad."
        },
        {
          "question": "¿Esto incluye facturación electrónica?",
          "answer": "No. La facturación electrónica es una etapa planeada y distinta. Un recibo de operación, un reporte de caja y un archivo regulatorio tienen propósitos diferentes."
        }
      ],
      "boundary": "Guía de capacidades del producto, no asesoría normativa. No define obligaciones, plazos ni umbrales. Confirma requisitos vigentes con el responsable competente y fuentes oficiales antes de presentar.",
      "cta": "Conocer el flujo de reportes en una demo"
    }
  },
  "en": {
    "software": {
      "title": "Custom software built around your operation",
      "description": "Custom software development from Cali for businesses in Colombia, Peru and Mexico. Connect processes, permissions and reporting with a defined scope.",
      "intro": "When work depends on separate spreadsheets, messages and repeated records, the first question is how information moves. We design software around your team: who records information, who reviews it and what each person needs to make a decision.",
      "sections": [
        {
          "title": "Start with the process that needs to work",
          "body": "We define users, rules, data and exceptions before choosing what to build. The scope should make it possible to verify the agreed workflow.",
          "points": [
            "Operational portals with role-based access.",
            "Records, search and documents connected to the process.",
            "Reporting and connections to existing systems within the agreed scope."
          ]
        },
        {
          "title": "Experience grounded in a product",
          "body": "Currency Exchange connects customers, currency transactions, cash and reporting by branch. That experience provides concrete examples for discussing permissions, history and information review.",
          "points": [
            "Decide what each role can view or change.",
            "Keep context between a record and its supporting document.",
            "Test routine cases and exceptions before accepting a delivery."
          ]
        }
      ],
      "example": {
        "title": "A record that stops moving between tools",
        "body": "One team receives a request, another reviews it and a manager needs its status. A custom portal can connect the record, permissions and follow-up in one workflow. This is a scope example to design, not functionality automatically included in every project."
      },
      "steps": [
        "Map the process and its owners.",
        "Agree on an initial scope and acceptance criteria.",
        "Build and validate with the people who will use it.",
        "Define deployment, handover and support in the proposal."
      ],
      "faq": [
        {
          "question": "Do I need to replace every tool?",
          "answer": "We review your current tools first. A project may connect or replace part of a workflow; the decision depends on verified needs and constraints."
        },
        {
          "question": "How much does it cost and how long does it take?",
          "answer": "The proposal depends on scope, data, integrations and validation. We agree deliverables and terms before starting; this page does not establish a fixed price or timeline."
        }
      ],
      "boundary": "Based in Cali, Colombia, we serve businesses in Colombia, Peru and Mexico. Integrations, migration and support are defined for each project.",
      "cta": "Discuss your software project"
    },
    "ai": {
      "title": "Applied artificial intelligence for business workflows",
      "description": "AI projects for businesses in Colombia, Peru and Mexico, designed from Cali. Assisted research, organized information and human review.",
      "intro": "An AI opportunity starts with a specific task: collecting information, organizing it or preparing an initial analysis. We review where a model may help, which sources it needs and which decisions should remain with your team.",
      "sections": [
        {
          "title": "Turn a repeated task into an evaluable pilot",
          "body": "We define the expected outcome and test representative examples. Evaluation should consider errors, source quality and usefulness for the recipient.",
          "points": [
            "Assisted research and summaries for review.",
            "Structured outputs that a team can use in its workflow.",
            "Assistants with defined scope, permissions and workflow connections."
          ]
        },
        {
          "title": "A laboratory project as a design reference",
          "body": "Our internal market-intelligence project combines model-assisted research, structured results and an email report. It is a design and code reference, not evidence of commercial outcomes or a ready-made solution for every business.",
          "points": [
            "Separate information collection from approval.",
            "Define sources, output format and recipients.",
            "Evaluate usefulness before automating decisions."
          ]
        }
      ],
      "example": {
        "title": "Prepare a weekly information review",
        "body": "Rather than starting each review from scratch, a workflow can collect sources and prepare a structured draft. A person checks references and decides what needs attention. Scope, data access and delivery channels are agreed during the pilot."
      },
      "steps": [
        "Choose a task and criteria for evaluating its output.",
        "Review sources, permissions and information handling.",
        "Test a supervised pilot, including difficult cases.",
        "Decide the next stage using evaluation results."
      ],
      "faq": [
        {
          "question": "Does every automation need AI?",
          "answer": "No. A known rule or date may be handled with deterministic logic. We propose AI where interpretation or generation is needed and its output can be evaluated."
        },
        {
          "question": "Is the Currency Exchange assistant available?",
          "answer": "The Currency Exchange compliance assistant is planned. Our AI project offering does not imply that assistant is available or included in the current product trial."
        }
      ],
      "boundary": "Models can make mistakes. The project defines human review, access scope and provider conditions before operational use.",
      "cta": "Discuss your AI use case"
    },
    "automation": {
      "title": "Process automation with clear controls",
      "description": "Business process automation from Cali for Colombia, Peru and Mexico. Define triggers, review steps and exceptions before connecting tasks.",
      "intro": "A repeated task needs more than unattended execution: it needs a defined start, an owner and a way to review what happened. We design workflows that connect steps and make exceptions visible.",
      "sections": [
        {
          "title": "Choose what to automate first",
          "body": "We review frequency, inputs, rules and review points. Start with a bounded sequence whose result the team can verify.",
          "points": [
            "Information preparation and distribution.",
            "Status updates between process stages.",
            "Notifications and scheduled tasks within the agreed scope."
          ]
        },
        {
          "title": "Design what happens when something fails",
          "body": "Automation should account for incomplete inputs, unavailable services and pending results. Retries and human actions are defined for the operation.",
          "points": [
            "An owner to review exceptions.",
            "Execution records and expected outcomes.",
            "Limits that prevent uncontrolled repetition of an action."
          ]
        }
      ],
      "example": {
        "title": "A report that needs to reach a reviewer",
        "body": "A scheduled task can gather information, prepare a report and deliver it to an owner. The laboratory’s internal market-intelligence project contains research, preparation and delivery stages; its code is a reference, not a guarantee of savings for other processes."
      },
      "steps": [
        "Describe the manual workflow and its exceptions.",
        "Agree on the trigger, outcome and owner.",
        "Test execution, failures and recovery.",
        "Define operation and support before deployment."
      ],
      "faq": [
        {
          "question": "Can a workflow include an approval?",
          "answer": "Yes. We can design a flow that prepares information and leaves a decision to a person. Scope must distinguish automatic actions from human review."
        },
        {
          "question": "Is a time reduction guaranteed?",
          "answer": "We first need a baseline and a comparable task. We measure the pilot before claiming time savings or fewer errors."
        }
      ],
      "boundary": "Scope depends on the tools, permissions and provider conditions. An inquiry does not activate messages or scheduled tasks.",
      "cta": "Review your repeated process"
    },
    "integration": {
      "title": "System integrations that connect your operation",
      "description": "System and API integrations from Cali for businesses in Colombia, Peru and Mexico. Connect data and statuses with defined permissions and confirmation rules.",
      "intro": "When tools hold different versions of the same record, someone ends up reconciling information manually. We review which system owns each piece of data and how systems should communicate before building the connection.",
      "sections": [
        {
          "title": "Connect a process, not just two applications",
          "body": "We define data, identifiers, permissions and state changes. A connection should make it clear when an action is pending, confirmed or needs review.",
          "points": [
            "APIs and events according to platform contracts.",
            "Record mapping and data validation.",
            "Error handling and pending states."
          ]
        },
        {
          "title": "A concrete reference: product payments",
          "body": "Currency Exchange connects membership with provider-verified payments. The browser return displays status; confirmation is processed in the backend. That separation illustrates why a success screen should not be the only evidence of an operation.",
          "points": [
            "Identify the event that confirms the outcome.",
            "Separate internal records from provider references.",
            "Agree controls for repeated events and failures."
          ]
        }
      ],
      "example": {
        "title": "Payment is still pending on return",
        "body": "A customer returns from the provider before confirmation arrives. The integration should display that state and update it once valid evidence exists. For other projects, we define the equivalent contract with each provider and system."
      },
      "steps": [
        "Inventory tools, data and available permissions.",
        "Agree on sources of truth and process states.",
        "Test pending, repeated and failed cases.",
        "Define monitoring, ownership and operating conditions."
      ],
      "faq": [
        {
          "question": "Can you connect any tool?",
          "answer": "We first check its APIs, permissions, limits and terms. Some connections require a different scope or may not be viable with the available access."
        },
        {
          "question": "Are Currency Exchange recurring charges enabled?",
          "answer": "Enablement depends on provider eligibility and approval. An integration does not remove those conditions or imply general availability."
        }
      ],
      "boundary": "Provider approvals, external costs and maintenance are agreed in the proposal. We do not promise certifications or access that is not yet available.",
      "cta": "Discuss your systems"
    },
    "fx-closing": {
      "title": "How to review exchange-house cash closing differences",
      "description": "Review expected balances, physical counts and currency differences in Currency Exchange. A practical closing example and movement-review workflow.",
      "intro": "At closing, one total does not explain whether dollars are missing or euros are in surplus. Reviewing each currency separately identifies where a difference appears and helps the responsible person focus their investigation.",
      "sections": [
        {
          "title": "Compare expected balances with physical counts",
          "body": "Currency Exchange presents expected balances, physical counts and differences by currency in its reconciliation result. A session can close with differences recorded; that does not mean their cause has been resolved.",
          "points": [
            "Check the session branch and date.",
            "Record physical counts for the required currencies.",
            "Review whether each result is balanced, short or in surplus."
          ]
        },
        {
          "title": "Investigate using recorded movements",
          "body": "Cash reports let you review transactions and adjustments. Deposits and withdrawals include the recorded person responsible and reason, providing context to compare.",
          "points": [
            "Review the same branch, period and currency.",
            "Compare supporting receipts with transaction records.",
            "Review adjustments and their context with the responsible person."
          ]
        }
      ],
      "example": {
        "title": "Illustrative example: a 10 USD shortage",
        "body": "The expected balance is 1,250 USD and the physical count is 1,240 USD. The difference is −10 USD, a shortage. This narrows the investigation; it does not establish a cause or responsibility without reviewing evidence."
      },
      "steps": [
        "Select the session and confirm the review scope.",
        "Compare expected and physical balances by currency.",
        "Review relevant transactions, receipts and adjustments.",
        "Document follow-up using your company procedure."
      ],
      "faq": [
        {
          "question": "Does the system automatically find the cause?",
          "answer": "No. It shows differences and records for review. Your team investigates and determines appropriate action."
        },
        {
          "question": "Can reports focus on selected currencies?",
          "answer": "Cash reports support one or several currencies and PDF export. COP opening and closing balances can represent whole-branch context; do not confuse them with a filtered subtotal."
        }
      ],
      "boundary": "This is a product-workflow guide, subject to permissions and configuration. Values are examples, not customer data or mandatory accounting/regulatory procedures.",
      "cta": "See this closing workflow in a demo"
    },
    "fx-rates": {
      "title": "How to review rate changes at your exchange house",
      "description": "Review old and new rates, the person responsible and recorded reason in Currency Exchange. Separate market references from transaction rates and history.",
      "intro": "A rate can change during the day. Understanding an earlier transaction requires context: which rate was recorded and what changed later at the branch.",
      "sections": [
        {
          "title": "Separate the reference from the transaction rate",
          "body": "Currency Exchange executes transactions using approved session rates. A market reference alone should not be treated as the executed purchase or sale rate.",
          "points": [
            "Check purchase versus sale and the currency involved.",
            "Review the rate recorded on the transaction.",
            "Separate that rate from a reference or estimate."
          ]
        },
        {
          "title": "Follow the change history",
          "body": "Rate changes include previous and new values, the person responsible and a reason. Cash reports expose this history for review.",
          "points": [
            "Review the branch and change date.",
            "Compare the previous and new rates.",
            "Consult the recorded reason and related supporting documents."
          ]
        }
      ],
      "example": {
        "title": "Illustrative example: a rate changes during the day",
        "body": "A purchase of 100 USD was recorded at 4,000 COP per USD, for 400,000 COP. The purchase rate later changes to 4,020. Reviewing the original transaction requires its recorded rate of 4,000; using the new rate would produce 402,000 COP and confuse the history."
      },
      "steps": [
        "Find the transaction and confirm its recorded rate.",
        "Review the branch rate changes.",
        "Connect the change with its recorded owner and reason.",
        "Use the context to answer a question or review an exception."
      ],
      "faq": [
        {
          "question": "Does history prove that the rate was the best market rate?",
          "answer": "No. It supports review of changes and recorded context; it does not establish a market comparison or guarantee profitability."
        },
        {
          "question": "Who can change rates?",
          "answer": "That depends on member permissions. Read-only profiles cannot change transactions, and the owner can limit functions within each role’s scope."
        }
      ],
      "boundary": "Figures are illustrative. This guide explains operational product review; it does not recommend exchange rates or replace your company’s commercial policies.",
      "cta": "Review rates and history in a demo"
    },
    "fx-reports": {
      "title": "From transactions to exchange-house reporting files",
      "description": "Explore DIAN 1099/1100 and configured UIAF file preparation in Currency Exchange. Generation, review and submission are separate stages.",
      "intro": "Preparing a file and submitting it to an authority are different steps. This guide explains which information Currency Exchange organizes and what the responsible person should review before continuing their reporting process.",
      "sections": [
        {
          "title": "Which files the product supports",
          "body": "Currency Exchange supports DIAN 1099 XML generation for currency purchases and 1100 for currency sales. Quarterly UIAF generation also exists, conditional on company configuration.",
          "points": [
            "Confirm file type, company and period.",
            "Review permissions and configuration availability.",
            "Separate these files from operational cash-report PDFs."
          ]
        },
        {
          "title": "What to review before continuing",
          "body": "The responsible person compares the file scope and data with operational records. A generator alone does not establish that a company must use it or that a format will be accepted without review.",
          "points": [
            "Check the period and included transactions.",
            "Review relevant identification and configuration data.",
            "Confirm current requirements through official channels and the competent reporting owner."
          ]
        }
      ],
      "example": {
        "title": "Illustrative example: purchases and sales stay distinct",
        "body": "The reporting owner needs to review purchases for a period. They select the 1099 generation workflow, confirm the scope and review the resulting file. The product uses 1100 for sales. Obtaining a file is not submission or proof of acceptance."
      },
      "steps": [
        "Review records and configuration for the period.",
        "Generate the available file for the selected scope.",
        "Review the result with the reporting owner.",
        "Continue submission through the appropriate channel outside this file-generation workflow."
      ],
      "faq": [
        {
          "question": "Does Currency Exchange automatically submit these files?",
          "answer": "The capability described here is file generation. We do not present the result as automatic submission, receipt or authority acceptance."
        },
        {
          "question": "Does this include electronic invoicing?",
          "answer": "No. Electronic invoicing is a separate planned stage. A transaction receipt, cash report and regulatory file serve different purposes."
        }
      ],
      "boundary": "This is a product-capability guide, not regulatory advice. It defines no obligations, deadlines or thresholds. Confirm current requirements with the competent owner and official sources before submission.",
      "cta": "Explore reporting in a demo"
    }
  }
} satisfies Record<Locale, Record<DetailPageId, DetailContent>>;
