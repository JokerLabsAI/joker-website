import { notFound } from "next/navigation";
import { DETAIL_CONTENT } from "@/content/detail-pages";
import { DETAIL_ROUTES, type Locale } from "@/lib/page-routes";
import { metadataForPage } from "@/lib/seo";

export function detailRoute(slug: string, locale: Locale, kind: "service" | "guide") {
  const route = DETAIL_ROUTES.find((item) => item.kind === kind && item[locale].split("/").at(-1) === slug);
  if (!route) notFound();
  return route;
}
export function detailParams(locale: Locale, kind: "service" | "guide") {
  return DETAIL_ROUTES.filter((item) => item.kind === kind).map((item) => ({ slug: item[locale].split("/").at(-1)! }));
}
export function detailMetadata(slug: string, locale: Locale, kind: "service" | "guide") {
  const route = detailRoute(slug, locale, kind);
  const content = DETAIL_CONTENT[locale][route.id];
  return metadataForPage(`${content.title} | JokerLabs`, content.description, route.en, route.es, locale);
}
