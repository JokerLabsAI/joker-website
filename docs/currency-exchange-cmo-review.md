# Currency Exchange: revisión de mensaje y oportunidades comerciales

Fecha: 15 de octubre de 2026. Revisión de documentación, contenido ES y código
local del portal/backend. No certifica disponibilidad en producción ni resultados
de clientes. Revisión editorial aplicada al contenido local ES/EN de
`joker-website`; no modifica la oferta ni publica cambios en hosting.

## Diagnóstico

La landing explica qué reúne el producto: clientes, divisas, caja y reportes.
Explica menos qué preguntas permite resolver al dueño: ¿por qué no cuadra la caja?,
¿quién cambió una tasa?, ¿con qué información puede trabajar mi asesor?, ¿qué
puedo revisar antes de preparar un reporte? Ahí está la oportunidad principal.

“Todo en una plataforma” sirve como resumen, pero necesita pruebas concretas.
La hipótesis de posicionamiento es **control operativo con trazabilidad para
casas de cambio colombianas**. Validarla con compradores antes de afirmar que es
un diferenciador exclusivo del mercado. No se realizó comparación competitiva.

## Capacidades que merecen más protagonismo

| Prioridad | Evidencia disponible | Valor para el comprador y mensaje propuesto | Demostración y límite |
| --- | --- | --- | --- |
| Alta | Cierre con esperado, conteo físico, diferencia y estado por divisa. | **Entiende las diferencias de tu caja.** Compara lo esperado con el conteo físico e identifica faltantes o sobrantes por divisa. | Mostrar un cierre con diferencia. No prometer que elimina descuadres o detecta fraude. |
| Alta | Cambios de tasas y ajustes de caja con responsable y motivo en reportes. | **Revisa qué cambió, quién lo hizo y por qué.** Consulta el historial de cambios de tasas e ingresos o retiros de caja. | Mostrar un cambio y su registro. La trazabilidad aquí corresponde a estos eventos; no afirmar que toda acción tiene auditoría. |
| Alta | Rol External con consulta de historial, recibos y reportes; asignación por sucursal y límites por miembro. | **Da acceso para revisar sin habilitar cambios operativos.** Un asesor o revisor puede consultar información dentro de su alcance autorizado. | Comparar una sesión operativa con una de consulta. Confirmar permisos y configuración del cliente. |
| Alta | Revisión de coincidencias en el alta de clientes y screening en backend. | **Añade una revisión de coincidencias al registro de clientes.** Consulta candidatos y toma una decisión con contexto. | Validar el flujo de revisión del portal y las fuentes efectivamente sincronizadas antes de publicar nombres de listas. Coincidencia no equivale a identidad confirmada ni garantiza prevención del lavado. |
| Media | Recibo PDF de una operación persistida, con cliente, operador, divisa, tasa e importe. | **Consulta el soporte de cada operación registrada.** Revisa la información de la transacción y genera su recibo. | Recorrer operación → historial → recibo. El recibo no es facturación electrónica. |
| Media | Tasas aprobadas para ejecución, inventario y validación de existencias al vender. | **Opera con las tasas y existencias registradas de tu sede.** Conecta la compra y venta con el inventario disponible. | Mostrar una operación y actualización del inventario. No prometer inventario físico infalible ni la mejor tasa del mercado. |
| Media | Recuperación de clientes ocultos conservando historial; búsqueda y actualización de contacto. | **Retoma la atención sin perder el historial del cliente.** Localiza registros existentes y mantén actualizados sus datos de contacto. | Mostrar recuperación y consulta. No afirmar recuperación de datos borrados ni importación desde otros sistemas. |

La landing ya menciona conciliación, permisos, recibos e historial. La mejora es
darles una consecuencia concreta y una prueba visible, no repetir la lista.

## Mensaje recomendado

**Categoría:** Software de operación para casas de cambio colombianas.

**Titular:** Tu casa de cambio, bajo control.

**Descripción:** Conecta compra y venta de divisas, clientes y caja por sucursal.
Revisa diferencias de cierre, consulta quién cambió las tasas y prepara reportes
desde la información de tu operación.

**Tres pruebas:** conciliación por divisa; historial de cambios con responsable y
motivo; accesos por rol y sucursal, incluido un perfil de consulta.

**CTA:** Agenda una demostración de tu flujo de operación.
Usar “Solicitar una demo” si no existe agenda o reserva efectiva. El formulario
actual representa una solicitud; el texto debe corresponder a ese comportamiento.

**Pregunta para la conversación comercial:** ¿Qué te cuesta más revisar hoy:
las diferencias de caja, los cambios de tasas o la preparación de reportes?

DIAN/UIAF siguen siendo una prueba relevante de adaptación local. Presentar
generación de formatos, revisión y presentación como pasos separados, con UIAF
sujeto a configuración. No añadir afirmaciones sobre obligaciones legales actuales
sin revisión normativa específica.

## Hablarle a cada participante de la compra

- Dueño: visibilidad de sedes y control de accesos. Mostrar historial y permisos.
- Administrador: explicar diferencias y cambios. Mostrar arqueo y ajustes.
- Operador: una secuencia clara de cliente, operación y recibo. Demostrarla antes
  de prometer velocidad o facilidad.
- Asesor o responsable de reportes: información consultable y archivos para
  revisión. Mostrar acceso de consulta y alcance de los reportes.

El dueño compra el control; el equipo tiene que comprobar que puede trabajar con
el sistema. Una demo debe cubrir ambos puntos.

## Información comercial que falta reunir

1. **Prueba de valor:** medir tiempo para registrar una operación, localizar un
   soporte y preparar un reporte con tareas comparables. Hoy no hay evidencia
   revisada que permita publicar porcentajes de ahorro o reducción de errores.
2. **Adopción:** definir acompañamiento, capacitación, responsable de puesta en
   marcha y tiempo estimado según alcance. No venderlos como incluidos sin acuerdo.
3. **Migración:** confirmar si existe importación, qué datos admite y quién la
   ejecuta. La continuidad del historial interno no demuestra migración externa.
4. **Confianza:** documentar soporte, horarios, copias de seguridad, restauración,
   tratamiento de datos y exportación al terminar el servicio. Requieren evidencia
   operativa y contractual; el código por sí solo no demuestra estas garantías.
5. **Oferta clara:** publicar o explicar precios, impuestos, periodicidad y límites.
   Core: una sede; Growth: hasta cinco; cuatro usuarios por sede. Confirmar qué
   incluye la prueba y resolver sus términos antes de aceptar compras.
6. **Prueba social:** conseguir testimonios autorizados y casos con contexto,
   periodo y resultados verificables. Mientras tanto, usar demostraciones reales
   con datos de ejemplo claramente identificados.

## Qué mostrar primero

En la página general de JokerLabs, mantener una presentación breve: promesa,
tres pruebas concretas y solicitud de demo. Reservar el detalle para un material
comercial o página de producto con esta secuencia:

1. El problema del dueño y el resultado que busca.
2. Tres escenas: operación con recibo, cierre con diferencia, revisión de cambios.
3. Reportes DIAN/UIAF y revisión de clientes, con alcance explícito.
4. Permisos, planes, puesta en marcha y respuestas sobre datos y soporte.
5. Solicitud de evaluación con un flujo acordado.

El asistente de IA y la facturación electrónica siguen como capacidades planeadas.
La renovación automática está bajo validación y condicionada al proveedor.
La futura conciliación de pagos de membresía es distinta de la conciliación de
caja operativa actual. Evitar que la palabra “conciliación” mezcle ambas promesas.

## Próximo paso recomendado

Preparar tres demostraciones cortas con datos de ejemplo y probar estos mensajes
en conversaciones con dueños y administradores. Registrar qué problema reconocen,
qué prueba les resulta convincente y qué objeción impide evaluar. Priorizar la
actualización de copy con esa evidencia. La utilidad comercial propuesta aquí es
una hipótesis; la existencia de funciones en el código es evidencia del producto.

## Fuentes internas

- [Copy actual](../content/es.ts).
- [Estrategia y límites de la oferta](marketing-strategy.md).
- [Contexto de producto](currency-exchange-context.md).
- [Estado y límites de implementación](../../money-exchange-backend/docs/PROJECT-HANDOFF.md).
- [Tasas, ejecución y recibos](../../money-exchange-backend/app/services/fx.py).
- [Conciliación visible](../../currency-exchange/src/presentation/components/features/shift/ReconciliationResultModal.tsx).
- [Historial de tasas y ajustes](../../currency-exchange/src/presentation/components/features/reports/CashReportView.tsx).
- [Revisión de clientes](../../currency-exchange/src/presentation/components/features/customers/CustomerModal.tsx).
- [Reglas de acceso y fuentes de screening](../../money-exchange-backend/AGENTS.md).
