import Image from "next/image";
import type { DetailPageId, Locale } from "@/lib/page-routes";

const tips: Record<Locale, Record<DetailPageId, string>> = {
  es: {
    software: "Empieza por un proceso que tu equipo pueda recorrer de principio a fin.",
    ai: "Define primero cómo revisarás la utilidad y los errores del resultado.",
    automation: "Incluye las excepciones: ¿quién actúa si falta un dato o falla un paso?",
    integration: "Acuerda qué sistema confirma el resultado antes de conectar los pasos.",
    "fx-closing": "Ver la diferencia es el inicio: contrasta movimientos y soportes antes de atribuir una causa.",
    "fx-rates": "Revisa una operación con su tasa registrada, aunque la tasa de la sede haya cambiado.",
    "fx-reports": "Generar un archivo, revisarlo y presentarlo son pasos diferentes.",
  },
  en: {
    software: "Start with a process your team can walk through from beginning to end.",
    ai: "First define how you will review the usefulness and errors of the output.",
    automation: "Include exceptions: who acts if information is missing or a step fails?",
    integration: "Agree which system confirms the result before connecting the steps.",
    "fx-closing": "Seeing the difference is a start: compare movements and receipts before assigning a cause.",
    "fx-rates": "Review a transaction using its recorded rate, even if the branch rate has changed.",
    "fx-reports": "Generating a file, reviewing it and submitting it are separate steps.",
  },
};

export function JaisNote({ id, locale }: { id: DetailPageId; locale: Locale }) {
  return <aside className="jl-jais-note" aria-label={locale === "es" ? "Nota del laboratorio" : "A note from the lab"}>
    <Image src="/assets/jais-tray-96.png" width={64} height={64} alt="" className="jl-jais-avatar" />
    <div><span>Jais · {locale === "es" ? "Una idea para revisar" : "Something to consider"}</span><p>{tips[locale][id]}</p></div>
  </aside>;
}
