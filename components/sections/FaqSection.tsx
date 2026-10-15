"use client";

import { Plus } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FaqSection() {
  const { faq } = useContent();
  return <section id="faq" className="section-pad jl-faq" aria-labelledby="faq-title"><div className="wrap"><SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.line1} accent={faq.line2} /><div className="jl-faq-list">{faq.items.map((item, index) => <details key={item.question}><summary><span className="jl-card-index">0{index + 1}</span><span>{item.question}</span><Plus size={18} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
