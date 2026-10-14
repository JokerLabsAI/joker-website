"use client";

import { Search, Compass, FlaskConical, Blocks, GitBranch, ArrowDown } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InquiryLink } from "@/components/shared/InquiryLink";

const icons = [Search, Compass, FlaskConical, Blocks, GitBranch];

export function ProcessSection() {
  const { process, hero } = useContent();
  return <section id="process" className="section-pad jl-process" aria-labelledby="process-title"><div className="wrap"><SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.line1} accent={process.line2} /><div className="jl-process-layout"><div className="jl-process-art" aria-hidden="true"><div className="jl-process-orbit"><FlaskConical size={70} strokeWidth={.8} /></div><span>JOKERLABS / METHOD</span><div className="jl-process-art-path"><span>01</span><ArrowDown size={18} /><span>05</span></div></div><ol className="jl-process-steps">{process.steps.map((step, index) => {
    const Icon = icons[index];
    return <li key={step.title}><span className="jl-process-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div><Icon size={23} strokeWidth={1.3} aria-hidden="true" /></li>;
  })}</ol></div><div className="jl-process-action"><InquiryLink interest="services">{hero.cta}</InquiryLink></div></div></section>;
}
