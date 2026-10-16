import { TopicArtwork } from "@/components/shared/TopicArtwork";
import { JaisNote } from "@/components/shared/JaisNote";
import { ArrowUpRight } from "lucide-react";
import { DETAIL_CONTENT } from "@/content/detail-pages";
import { DETAIL_ROUTES, type DetailPageId, type Locale } from "@/lib/page-routes";
import { SITE_URL } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { InquiryLink } from "@/components/shared/InquiryLink";
import { SiteLink } from "@/components/shared/SiteLink";
import { StructuredData } from "@/components/seo/StructuredData";

export function DetailPage({ id, locale }: { id: DetailPageId; locale: Locale }) {
  const content = DETAIL_CONTENT[locale][id];
  const route = DETAIL_ROUTES.find((item) => item.id === id)!;
  const guide = route.kind === "guide";
  const spanish = locale === "es";
  const parent = guide ? "/currency-exchange" : "/services";
  const label = guide ? "Currency Exchange" : spanish ? "Servicios" : "Services";
  const interest = guide ? "currency_exchange" : "services";
  const related = DETAIL_ROUTES.filter((item) => item.kind === route.kind && item.id !== id);
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${route[locale]}#page`,
    url: `${SITE_URL}${route[locale]}`,
    name: content.title,
    description: content.description,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(guide ? { about: { "@id": `${SITE_URL}/currency-exchange#software` } } : {
      mainEntity: { "@type": "Service", name: content.title, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: ["Colombia", "Peru", "Mexico"].map((name) => ({ "@type": "Country", name })) },
    }),
  };
  return <>
    <StructuredData data={schema} />
    <Navbar />
    <main>
      <article className="jl-detail section-pad">
        <div className="wrap">
          <nav className="jl-detail-breadcrumb" aria-label={spanish ? "Ruta de navegación" : "Breadcrumb"}>
            <SiteLink href="/">JokerLabs</SiteLink><span aria-hidden="true">/</span><SiteLink href={parent}>{label}</SiteLink>
          </nav>
          <header className="jl-detail-header">
            <div className="jl-detail-hero-copy">
            <span className="lab-kicker">{guide ? (spanish ? "GUÍA DE OPERACIÓN · COLOMBIA" : "OPERATIONAL GUIDE · COLOMBIA") : (spanish ? "CALI · COLOMBIA, PERÚ Y MÉXICO" : "CALI · COLOMBIA, PERU & MEXICO")}</span>
            <h1>{content.title}</h1>
            <p className="jl-detail-intro">{content.intro}</p>
            <InquiryLink interest={interest}>{content.cta}</InquiryLink>
            </div>
            <figure className="jl-detail-hero-art">
              <div className="jl-detail-art-heading"><span>{guide ? "CURRENCY EXCHANGE" : "JOKERLABS / LAB"}</span><span className="jl-detail-art-status">{spanish ? "El flujo, a simple vista" : "The workflow, at a glance"}</span></div>
              <TopicArtwork id={id} locale={locale} />
              <figcaption>{spanish ? "Ilustración explicativa · Datos de ejemplo, no una pantalla en vivo." : "Explanatory illustration · Sample data, not a live screen."}</figcaption>
            </figure>
          </header>
          <nav className="jl-detail-jumpnav" aria-label={spanish ? "En esta página" : "On this page"}>
            <span>{spanish ? "EN ESTA PÁGINA" : "ON THIS PAGE"}</span>
            <a href="#detail-overview">{spanish ? "Qué puedes hacer" : "What you can do"}</a>
            <a href="#detail-example">{spanish ? "Ejemplo práctico" : "Practical example"}</a>
            <a href="#detail-steps">{spanish ? "Paso a paso" : "Step by step"}</a>
            <a href="#detail-faq">{spanish ? "Preguntas" : "Questions"}</a>
          </nav>
          <div id="detail-overview" className="jl-detail-sections">
            {content.sections.map((section, index) => <section key={section.title}>
              <span className="jl-detail-section-index" aria-hidden="true">0{index + 1}</span>
              <h2>{section.title}</h2><p>{section.body}</p>
              <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </section>)}
          </div>
          <section id="detail-example" className="jl-detail-example"><span className="lab-kicker">{spanish ? "EN LA PRÁCTICA" : "IN PRACTICE"}</span><h2>{content.example.title}</h2><p>{content.example.body}</p><JaisNote id={id} locale={locale} /></section>
          <section id="detail-steps" className="jl-detail-steps"><h2>{guide ? (spanish ? "Una secuencia para revisar" : "A review sequence") : (spanish ? "Cómo definimos el trabajo" : "How we define the work")}</h2><ol>{content.steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span><p>{step}</p></li>)}</ol></section>
          <section id="detail-faq" className="jl-detail-faq"><h2>{spanish ? "Antes de dar el siguiente paso" : "Before your next step"}</h2>{content.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
          <p className="jl-detail-boundary">{content.boundary}</p>
          <section className="jl-detail-related"><h2>{guide ? (spanish ? "Sigue explorando la operación" : "Explore more workflows") : (spanish ? "Conecta las piezas de tu proyecto" : "Connect your project’s pieces")}</h2><div>{related.map((item) => <SiteLink key={item.id} href={item[locale]}><TopicArtwork id={item.id} locale={locale} compact /><span>{DETAIL_CONTENT[locale][item.id].title}<ArrowUpRight size={16} aria-hidden="true" /></span></SiteLink>)}</div><SiteLink href={parent} className="lab-action lab-action--text">{spanish ? `Volver a ${label}` : `Back to ${label}`}<ArrowUpRight size={16} aria-hidden="true" /></SiteLink></section>
        </div>
      </article>
      <ContactSection defaultInterest={interest} />
    </main>
    <Footer />
  </>;
}
