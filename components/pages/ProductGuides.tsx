import { TopicArtwork } from "@/components/shared/TopicArtwork";
import { DETAIL_CONTENT } from "@/content/detail-pages";
import { DETAIL_ROUTES, type Locale } from "@/lib/page-routes";
import { SiteLink } from "@/components/shared/SiteLink";

export function ProductGuides({ locale }: { locale: Locale }) {
  return <section className="section-pad" aria-labelledby="cx-guides-title"><div className="wrap cx-guides">
    <span className="lab-kicker">CURRENCY EXCHANGE</span>
    <h2 id="cx-guides-title">{locale === "es" ? "Guías para entender tu operación" : "Guides to understand your operation"}</h2>
    <div className="cx-guides-grid">{DETAIL_ROUTES.filter((item) => item.kind === "guide").map((item) => <SiteLink key={item.id} href={item[locale]}><TopicArtwork id={item.id} locale={locale} compact /><h3>{DETAIL_CONTENT[locale][item.id].title}</h3><p>{DETAIL_CONTENT[locale][item.id].description}</p></SiteLink>)}</div>
  </div></section>;
}
