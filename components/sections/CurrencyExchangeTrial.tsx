"use client";

import { ArrowRight, CalendarDays, Check } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { InquiryLink } from "@/components/shared/InquiryLink";

export function CurrencyExchangeTrial() {
  const { currencyExchange: { trial } } = useContent();
  return (
    <section id="cx-trial" className="cx-trial" aria-labelledby="cx-trial-title">
      <div className="cx-trial-intro">
        <span className="lab-kicker"><CalendarDays size={16} aria-hidden="true" />{trial.eyebrow}</span>
        <h3 id="cx-trial-title">{trial.title}<br /><em>{trial.accent}</em></h3>
        <p>{trial.description}</p>
      </div>
      <div className="cx-trial-options">
        <article className="cx-trial-card">
          <div className="cx-trial-duration"><strong>7</strong><span>{trial.daysLabel}</span></div>
          <h4>{trial.startTitle}</h4><p>{trial.startDescription}</p>
          <InquiryLink interest="currency_exchange" offer="trial_7_days">{trial.startCta}</InquiryLink>
        </article>
        <article className="cx-trial-card cx-trial-card--annual">
          <span className="cx-trial-badge"><Check size={14} aria-hidden="true" />{trial.annualLabel}</span>
          <div className="cx-trial-duration"><strong>1</strong><span>{trial.monthLabel}</span></div>
          <h4>{trial.annualTitle}</h4><p>{trial.annualDescription}</p>
          <InquiryLink interest="currency_exchange" offer="annual_membership" className="lab-action lab-action--outline">{trial.annualCta}</InquiryLink>
        </article>
      </div>
      <ol className="cx-trial-steps">{trial.steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><div><h4>{step.title}</h4><p>{step.description}</p></div><ArrowRight size={16} aria-hidden="true" /></li>)}</ol>
      <p className="cx-trial-note">{trial.note}</p>
    </section>
  );
}
