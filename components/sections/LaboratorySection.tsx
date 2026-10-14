"use client";

import { ArrowUpRight, Cpu, Code2, Workflow, Network } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";

const icons = [Cpu, Code2, Workflow, Network];

export function LaboratorySection() {
  const c = useContent();
  const lab = c.laboratory;
  return (
    <section id="laboratory" className="lab-manifesto section-pad" aria-labelledby="lab-manifesto-title">
      <div className="wrap">
        <div className="lab-section-index"><span>01 / {lab.eyebrow}</span><span>JOKERLABS</span></div>
        <div className="lab-manifesto-heading">
          <h2 id="lab-manifesto-title">{lab.title}<br /><em>{lab.titleAccent}</em></h2>
          <div><p>{lab.description}</p><a href="#about" className="lab-inline-link">{lab.link}<ArrowUpRight size={17} /></a></div>
        </div>
        <div className="lab-discipline-map">
          {lab.disciplines.map((item, i) => {
            const Icon = icons[i];
            return (
              <a href="#services" className="lab-discipline" key={item.title}>
                <div className="lab-discipline-top"><span>0{i + 1}</span><Icon size={23} strokeWidth={1.3} /></div>
                <h3>{item.title}</h3><p>{item.description}</p>
                <span className="lab-discipline-link">{lab.explore}<ArrowUpRight size={16} /></span>
              </a>
            );
          })}
        </div>
        <div className="lab-principle"><span className="lab-status-dot" /><p>{lab.principle}</p><span>IDEA → PROTOTYPE → IMPACT</span></div>
      </div>
    </section>
  );
}
