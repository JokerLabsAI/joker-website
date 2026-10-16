export type Locale = "en" | "es";
export const DETAIL_ROUTES = [
  { id: "software", kind: "service", en: "/services/custom-software", es: "/es/services/desarrollo-software" },
  { id: "ai", kind: "service", en: "/services/artificial-intelligence", es: "/es/services/inteligencia-artificial" },
  { id: "automation", kind: "service", en: "/services/process-automation", es: "/es/services/automatizacion" },
  { id: "integration", kind: "service", en: "/services/system-integrations", es: "/es/services/integraciones" },
  { id: "fx-closing", kind: "guide", en: "/resources/exchange-house-cash-closing", es: "/es/recursos/cierre-caja-casa-cambio" },
  { id: "fx-rates", kind: "guide", en: "/resources/exchange-house-rate-control", es: "/es/recursos/control-tasas-casa-cambio" },
  { id: "fx-reports", kind: "guide", en: "/resources/colombian-exchange-house-reports", es: "/es/recursos/reportes-casas-cambio-colombia" },
] as const;
export type DetailPageId = typeof DETAIL_ROUTES[number]["id"];

export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const suffixStart = path.search(/[?#]/);
  const pathname = suffixStart === -1 ? path : path.slice(0, suffixStart);
  const suffix = suffixStart === -1 ? "" : path.slice(suffixStart);
  const route = DETAIL_ROUTES.find((item) => item.en === pathname || item.es === pathname);
  if (route) return route[locale] + suffix;
  const base = path.replace(/^\/es(?=\/|#|\?|$)/, "") || "/";
  return locale === "es" ? `/es${base === "/" ? "" : base.replace(/^\/(?=[#?])/, "")}` : (base.startsWith("#") || base.startsWith("?") ? `/${base}` : base);
}
