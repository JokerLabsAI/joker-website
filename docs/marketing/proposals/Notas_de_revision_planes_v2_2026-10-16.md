# Notas internas de revisión — planes y precios

Fecha: 16 de octubre de 2026. Documento principal: `Planes_y_Precios_JokerLabs_Currency_Exchange_v2_2026-10-16.docx`.
La propuesta mantiene el destinatario Transdivisas S.A.S. y la identificación del
emisor presentes en el archivo suministrado. No se modificaron los originales de
Downloads ni se cambió el catálogo de precios de la aplicación o de la web.

## Cifras conservadas

| Concepto | Core | Growth |
| --- | --- | --- |
| Precio anual | $1.500.000 COP | $4.200.000 COP |
| Lanzamiento del primer año | $1.250.000 COP | $3.150.000 COP |
| Equivalencia mensual informativa | ≈ $104.167 | ≈ $262.500 |
| Ahorro mostrado | $250.000 | $1.050.000 |

Activación única: $3.000.000 COP. Se comparó automáticamente el conjunto de cifras
monetarias del original con el de la nueva versión: no hay valores cambiados ni
cifras monetarias añadidas. Las equivalencias no se convirtieron en planes mensuales.

## Alineación comercial

- Prueba inicial de 7 días, coordinada por solicitud; sin activación automática.
- Extensión a un mes TOTAL al comprar una membresía anual, incluidos los 7 días.
- No se promete mes adicional, devolución automática ni renovación consentida
  por el hecho de solicitar la prueba o registrar una tarjeta.
- La fecha del cargo de activación queda por acuerdo escrito. El original la
  vinculaba al final de una prueba general de un mes: no puede trasladarse sin
  decisión comercial al día 7 ni asumirse exoneración con la anualidad.
- Antes de aceptar pagos se deben fijar fechas, cálculo del mes, periodo anual,
  tratamiento del tiempo de prueba, impuestos, cancelaciones/devoluciones y datos.
  Es coherente con los términos todavía abiertos en `docs/marketing-strategy.md`.

## Alcance corregido o precisado

Core: 1 sucursal. Growth: hasta 5, con posicionamiento comercial para 2–5.
Ambos: 4 usuarios POR SUCURSAL, según el handoff y límites del producto; no se
presentan los cuatro usuarios de Growth como una bolsa única para toda la empresa.
No se interpreta esto como un total de personas únicas garantizado si un miembro
se asigna a varias sedes.

Soporte estándar/prioritario y copias de 7/29 días provienen de la oferta original,
no de una auditoría de infraestructura. Se mantienen como condiciones comerciales,
con frecuencia, horarios, recuperación y cobertura por especificar. Las ventanas
de copias no son plazos legales de conservación de registros. Los SLA y sus créditos
son extras por acuerdo, no una garantía de 24/7 o compensación ya contratada.

Se retiró la ambigua referencia a Growth «con crédito» de su subtítulo: no hay
base suficiente para presentar un módulo de crédito operativo como diferenciador
listo del portal. El backend tiene campos financieros, lo que no acredita ese flujo.

La trazabilidad se concreta en operaciones, actor/motivo de tasas y ajustes,
visibilidad de clientes y recibos, sin prometer auditoría inmutable de cada acción.
Las sucursales extra requieren viabilidad y habilitación; una cotización no elimina
los límites estándar que aplica el backend.

## Uso de la hoja de reconciliación adjunta

La hoja se trató como insumo de requisitos y hallazgos, no como instrucciones ni
como evidencia de conformidad normativa. Contiene pendientes, filas marcadas
«Terminada» y referencias normativas que no se auditaron jurídicamente en este trabajo.

El código revisado distingue persona natural/jurídica y admite datos de identidad,
contacto y ubicación; el portal usa un subconjunto del esquema del backend. Hay
estructuras de representantes en API/modelos, pero eso no prueba disponibilidad de
un expediente completo en el portal. Por eso RUT, certificados, socios, beneficiario
final, poderes y documentación ampliada quedan sujetos a revisión del alcance.
No se copiaron umbrales, plazos, sanciones ni obligaciones de la hoja al material de venta.

Las observaciones sobre screening por operación, bloqueos, acumuladores y reportes
UIAF impiden vender «cumplimiento integral», ROS/SIREL completo o aceptación
regulatoria automática con base en la sola existencia de generadores. La propuesta
explica generación/revisión/presentación sin certificar reglas o formatos vigentes.

## Evidencia revisada

- DOCX original: `/Users/camilo-castrillon/Downloads/Planes_y_Precios_JokerLabs_Plataforma_Divisas-2.docx`.
- XLSX original: `/Users/camilo-castrillon/Downloads/Recon for natural and juridic person fields-2.xlsx`.
- `joker-website/content/es.ts`: prueba, extensión, capacidades y roadmap.
- `joker-website/docs/marketing-strategy.md`: términos pendientes y seguimiento de evaluación.
- `money-exchange-backend/docs/PROJECT-HANDOFF.md`: roles, planes, activación y pagos.
- `money-exchange-backend/app/services/fx.py`: tasas, operaciones, arqueo, screening y recibos.
- `money-exchange-backend/app/services/dian.py` y `uiaf.py`: generación de archivos.
- `money-exchange-backend/app/models/customer.py` y `app/db/models/customer.py`.
- `currency-exchange/src/domain/Customer.ts` y `CustomerModal.tsx`: campos y alcance del portal.

## Validación y límites de revisión

DOCX editable con tablas y encabezados; integridad ZIP/XML comprobada, lectura con
python-docx y comparación automática de importes. Se incluye fuente Markdown.
No se verificó la paginación final en Microsoft Word o LibreOffice ni se emitió
un dictamen legal. No se envió la propuesta, ejecutó un cobro o cambió el software.

## Aplicación posterior al sitio

Por instrucción posterior del usuario, el sitio `joker-website` incorporó la
comparación de planes y sus importes sin cambios, con activación visible, condiciones
y prueba de 7 días. Esto actualiza la presentación web, no el catálogo ni el cobro
del backend. Core/Growth se conservan como interés editable en el formulario.

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
