"use client";

import { Cpu, Code2, Workflow, Network, ArrowUpRight } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InquiryLink } from "@/components/shared/InquiryLink";

const icons = [Cpu, Code2, Workflow, Network];

export function ServicesSection() {
  const { services, hero } = useContent();
  return <section id="services" className="section-pad jl-services" aria-labelledby="services-title"><div className="wrap">
    <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.line1} accent={services.line2} description={services.sub} />
    <div className="jl-service-grid">{services.items.map((service, index) => {
      const Icon = icons[index];
      return <article className={`jl-service-card jl-service-card--${index}`} key={service.title}><div className="jl-card-top"><span className="jl-icon"><Icon size={25} strokeWidth={1.4} /></span><span className="jl-card-index">0{index + 1}</span></div><span className="jl-service-tag">{service.tag}</span><h3>{service.title}</h3><p>{service.desc}</p><InquiryLink interest="services" className="jl-card-link">{hero.cta}</InquiryLink><div className="jl-service-pattern" aria-hidden="true"><Icon size={150} strokeWidth={.4} /><ArrowUpRight size={40} strokeWidth={.5} /></div></article>;
    })}</div>
  </div></section>;
}
