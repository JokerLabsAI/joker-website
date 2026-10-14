"use client";

import { useContent } from "@/components/layout/LocaleProvider";
import { Eyebrow } from "@/components/shared/Eyebrow";

export function FaqSection() {
  const { faq } = useContent();
  return (
    <section id="faq" className="section-pad" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head"><Eyebrow>{faq.eyebrow}</Eyebrow><h2 id="faq-title">{faq.line1}<br /><span style={{ color: "var(--dim)" }}>{faq.line2}</span></h2></div>
        <div className="cx-faq" style={{ maxWidth: 850, margin: "0 auto" }}>
          {faq.items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}
