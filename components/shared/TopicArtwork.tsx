import type { DetailPageId, Locale } from "@/lib/page-routes";

const descriptions: Record<Locale, Record<DetailPageId, string>> = {
  es: {
    software: "Ilustración de un portal que conecta registros, equipo y reportes mediante permisos.",
    ai: "Flujo conceptual: fuentes, borrador asistido por IA y revisión de una persona.",
    automation: "Flujo conceptual con disparador, tarea y revisión; una excepción vuelve al responsable.",
    integration: "Sistemas conectados por un flujo central que distingue datos, eventos y confirmación.",
    "fx-closing": "Ejemplo de caja: esperado 1.250 USD, físico 1.240 USD, faltante de 10 USD para investigar.",
    "fx-rates": "Ejemplo de cambio de tasa de compra: 4.000 a 4.020 COP por USD, con responsable y motivo.",
    "fx-reports": "Archivos 1099, 1100 y UIAF según configuración: generar, revisar y continuar la presentación.",
  },
  en: {
    software: "Illustration of a portal connecting records, team and reports through permissions.",
    ai: "Conceptual workflow: sources, an AI-assisted draft and human review.",
    automation: "Conceptual trigger, task and review workflow; exceptions return to an owner.",
    integration: "Connected systems with a central flow separating data, events and confirmation.",
    "fx-closing": "Cash example: expected 1,250 USD, physical 1,240 USD, a 10 USD shortage to investigate.",
    "fx-rates": "Purchase rate change example: 4,000 to 4,020 COP per USD, with an owner and reason.",
    "fx-reports": "Configured 1099, 1100 and UIAF files: generate, review and continue submission.",
  },
};

function Panel({ x, y, width, height, children }: { x: number; y: number; width: number; height: number; children?: React.ReactNode }) {
  return <g><rect x={x} y={y} width={width} height={height} rx="14" className="topic-panel" />{children}</g>;
}

export function TopicArtwork({ id, locale, compact = false }: { id: DetailPageId; locale: Locale; compact?: boolean }) {
  const es = locale === "es";
  const flow = id === "ai" || id === "automation";
  const labels = id === "ai" ? (es ? ["Fuentes", "Borrador IA", "Revisión"] : ["Sources", "AI draft", "Review"]) : (es ? ["Inicio", "Tarea", "Revisión"] : ["Trigger", "Task", "Review"]);
  return <svg viewBox="0 0 520 340" className={`topic-artwork topic-artwork--${id}`} role={compact ? undefined : "img"} aria-label={compact ? undefined : descriptions[locale][id]} aria-hidden={compact || undefined} focusable="false">
    <rect x="1" y="1" width="518" height="338" rx="25" className="topic-canvas" />
    <g className="topic-grid" aria-hidden="true"><path d="M0 85H520M0 170H520M0 255H520M130 0V340M260 0V340M390 0V340" /></g>
    <g className="topic-ink">
      {id === "software" && <>
        <Panel x={44} y={41} width={432} height={256} />
        <path d="M44 84H476" className="topic-line" /><circle cx="66" cy="63" r="4" className="topic-accent" /><circle cx="81" cy="63" r="4" className="topic-muted-fill" /><circle cx="96" cy="63" r="4" className="topic-muted-fill" />
        <text x="118" y="68" className="topic-small">{es ? "Tu operación" : "Your operation"}</text>
        {[es ? "Registros" : "Records", es ? "Equipo" : "Team", es ? "Reportes" : "Reports"].map((label,i) => <g key={label}><rect x="62" y={103+i*54} width="104" height="37" rx="8" className={i===0?"topic-accent-soft":"topic-muted-surface"}/><text x="73" y={127+i*54} className="topic-small">{label}</text></g>)}
        <rect x="187" y="103" width="267" height="48" rx="8" className="topic-accent-soft"/><text x="204" y="132" className="topic-small">{es ? "Acceso por rol" : "Role-based access"}</text>
        {[177,213,249].map((y,i)=><g key={y}><circle cx="204" cy={y} r="5" className="topic-accent"/><path d={`M222 ${y}H${i===1?380:432}`} className="topic-line" /></g>)}
      </>}
      {flow && <>
        <path d="M89 166H430" className="topic-connector" />
        {labels.map((label,i)=><g key={label}><Panel x={28+i*168} y={91} width={128} height={148}/><circle cx={92+i*168} cy="137" r="24" className="topic-accent-soft"/>{i===2?<path d={`m${80+i*168} 137 8 8 16-17`} className="topic-connector"/>:<text x={92+i*168} y="144" textAnchor="middle" className="topic-number">0{i+1}</text>}<text x={92+i*168} y="193" textAnchor="middle" className="topic-label">{label}</text></g>)}
        <path d="M428 253V277H260V253" className="topic-line topic-dashed"/><text x="344" y="303" textAnchor="middle" className="topic-small">{es ? "La persona decide" : "A person decides"}</text>
      </>}
      {id === "integration" && <>
        <path d="M132 97 260 170 389 97M132 245 260 170 389 245" className="topic-connector"/>
        {[["API",66,52],[es?"Datos":"Data",326,52],[es?"Eventos":"Events",66,213],[es?"Estado":"Status",326,213]].map(([label,x,y])=><g key={label}><Panel x={Number(x)} y={Number(y)} width={128} height={70}/><text x={Number(x)+64} y={Number(y)+42} textAnchor="middle" className="topic-label">{label}</text></g>)}
        <circle cx="260" cy="170" r="53" className="topic-hub"/><path d="m241 170 13 13 27-28" className="topic-connector"/><text x="260" y="315" textAnchor="middle" className="topic-small">{es?"Conectar · Validar · Confirmar":"Connect · Validate · Confirm"}</text>
      </>}
      {id === "fx-closing" && <>
        <text x="39" y="49" className="topic-label">USD · {es?"Cierre de caja":"Cash closing"}</text>
        <text x="39" y="97" className="topic-small">{es?"Esperado":"Expected"}</text><rect x="39" y="112" width="436" height="34" rx="9" className="topic-muted-surface"/><rect x="39" y="112" width="400" height="34" rx="9" className="topic-accent-soft"/><text x="455" y="97" textAnchor="end" className="topic-label">{es?"1.250":"1,250"}</text>
        <text x="39" y="181" className="topic-small">{es?"Conteo físico":"Physical count"}</text><rect x="39" y="196" width="436" height="34" rx="9" className="topic-muted-surface"/><rect x="39" y="196" width="397" height="34" rx="9" className="topic-accent"/><text x="455" y="181" textAnchor="end" className="topic-label">{es?"1.240":"1,240"}</text>
        <rect x="39" y="255" width="436" height="52" rx="10" className="topic-accent-soft"/><text x="60" y="287" className="topic-label">−10 USD</text><text x="451" y="287" textAnchor="end" className="topic-small">{es?"Por investigar":"To investigate"}</text>
      </>}
      {id === "fx-rates" && <>
        <text x="39" y="47" className="topic-label">{es?"Compra · COP por USD":"Purchase · COP per USD"}</text><path d="M46 226H260V125H467" className="topic-rate-line"/><circle cx="100" cy="226" r="7" className="topic-accent"/><circle cx="416" cy="125" r="7" className="topic-accent"/><text x="98" y="203" className="topic-number">{es?"4.000":"4,000"}</text><text x="373" y="100" className="topic-number">{es?"4.020":"4,020"}</text>
        <path d="M45 252H475" className="topic-line"/><text x="45" y="278" className="topic-small">{es?"Antes":"Before"}</text><text x="475" y="278" textAnchor="end" className="topic-small">{es?"Después":"After"}</text><text x="260" y="316" textAnchor="middle" className="topic-small">{es?"Responsable + motivo registrados":"Recorded owner + reason"}</text>
      </>}
      {id === "fx-reports" && <>
        {["1099","1100","UIAF"].map((label,i)=><g key={label}><Panel x={30+i*168} y={49} width={124} height={166}/><path d={`M${49+i*168} 122H${134+i*168}M${49+i*168} 143H${119+i*168}M${49+i*168} 164H${128+i*168}`} className="topic-line"/><text x={92+i*168} y="94" textAnchor="middle" className="topic-number">{label}</text></g>)}
        <path d="M77 262H443" className="topic-connector"/>
        {(es?["Generar","Revisar","Presentar*"]:["Generate","Review","Submit*"]).map((label,i)=><g key={label}><circle cx={86+i*174} cy="262" r="7" className="topic-accent"/><text x={86+i*174} y="296" textAnchor="middle" className="topic-small">{label}</text></g>)}
        <text x="260" y="325" textAnchor="middle" className="topic-tiny">{es?"*Fuera del flujo de generación":"*Outside the generation workflow"}</text>
      </>}
    </g>
  </svg>;
}
