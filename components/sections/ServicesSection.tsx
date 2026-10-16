"use client";

import { TopicArtwork } from "@/components/shared/TopicArtwork";
import { Cpu, Code2, Workflow, Network, ArrowUpRight } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SiteLink } from "@/components/shared/SiteLink";
import { DETAIL_ROUTES } from "@/lib/page-routes";
import { InquiryLink } from "@/components/shared/InquiryLink";

const icons = [Cpu, Code2, Workflow, Network];
// Anchors used by the Portfolio menu (NAV_MENU.services).
const anchors = ["ai", "software", "automation", "integration"];

export function ServicesSection() {
  const { services, hero, locale } = useContent();
  return <section id="services" className="section-pad jl-services" aria-labelledby="services-title"><div className="wrap">
    <SectionHeading as="h1" id="services-title" eyebrow={services.eyebrow} title={services.line1} accent={services.line2} description={services.sub} />
    <div className="jl-service-grid">{services.items.map((service, index) => {
      const Icon = icons[index];
      const route = DETAIL_ROUTES.find((item) => item.id === anchors[index])!;
      return <article id={`service-${anchors[index]}`} className={`jl-service-card jl-service-card--${index}`} key={service.title}><div className="jl-card-top"><span className="jl-icon"><Icon size={25} strokeWidth={1.4} /></span><span className="jl-card-index">0{index + 1}</span></div><div className="jl-service-art"><TopicArtwork id={route.id} locale={locale} compact /></div><span className="jl-service-tag">{service.tag}</span><h3>{service.title}</h3><p>{service.desc}</p><SiteLink href={route.en} className="jl-card-link">{services.detailCta}<ArrowUpRight size={16} aria-hidden="true" /></SiteLink><InquiryLink interest="services" className="jl-card-link">{hero.cta}</InquiryLink><div className="jl-service-pattern" aria-hidden="true"><Icon size={150} strokeWidth={.4} /><ArrowUpRight size={40} strokeWidth={.5} /></div></article>;
    })}</div>
  </div></section>;
}
