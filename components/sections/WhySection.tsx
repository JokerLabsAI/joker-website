"use client";

import { Layers3, Target, ListChecks, FlaskConical, Users, GitBranch } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";

const icons = [Layers3, Target, ListChecks, FlaskConical, Users, GitBranch];

export function WhySection() {
  const { why } = useContent();
  return <section id="why" className="section-pad jl-why" aria-labelledby="why-title"><div className="wrap"><SectionHeading id="why-title" eyebrow={why.eyebrow} title={why.line1} accent={why.line2} description={why.sub} /><div className="jl-why-grid">{why.items.map((item, index) => {
    const Icon = icons[index];
    return <article className="jl-why-card" key={item.title}><span className="jl-icon"><Icon size={23} strokeWidth={1.4} /></span><div><h3>{item.title}</h3><p>{item.desc}</p></div></article>;
  })}</div></div></section>;
}
