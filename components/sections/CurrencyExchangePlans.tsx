"use client";

import { Building2, Check, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { InquiryLink } from "@/components/shared/InquiryLink";
import { CURRENCY_PLANS, ACTIVATION_FEE_COP, PLAN_COPY } from "@/content/currency-exchange-plans";

export function CurrencyExchangePlans() {
  const { locale } = useLocale();
  const copy = PLAN_COPY[locale];
  const amount = (value: number) => `$${new Intl.NumberFormat(locale === "es" ? "es-CO" : "en-US").format(value)}`;
  return <section id="cx-plans" className="cx-pricing" aria-labelledby="cx-plans-title">
    <span className="lab-kicker">{copy.eyebrow}</span><h2 id="cx-plans-title">{copy.title}</h2><p className="cx-plans-intro">{copy.intro}</p>
    <div className="cx-plan-grid">{CURRENCY_PLANS.map((plan) => <article key={plan.id} className={`cx-plan-card cx-plan-card--${plan.id}`}>
      <div className="cx-plan-heading"><Building2 size={24} aria-hidden="true" /><h3>{plan.name}</h3></div>
      <p>{plan.id === "core" ? copy.core : copy.growth}</p>
      {plan.id === "growth" ? <div className="cx-plan-price cx-plan-price--quote"><strong>{copy.quoteTitle}</strong><p>{copy.quoteNote}</p></div> : <>
      <div className="cx-plan-price"><span>{copy.annualOnly}</span><strong>{amount(plan.monthlyEquivalent)}</strong><span>{copy.perMonth} {copy.taxLabel}</span><p className="cx-plan-annual-total">{copy.annualPayment}: <b>{amount(plan.launch)} COP {copy.taxLabel}</b></p><span>{copy.launch}</span></div>
      <dl className="cx-plan-breakdown"><div><dt>{copy.regular}</dt><dd>{amount(plan.annual)} COP {copy.taxLabel}</dd></div><div><dt>{copy.savings}</dt><dd>{amount(plan.savings)} COP</dd></div></dl>
      </>}
      <ul>{[plan.id === "core" ? copy.coreBranch : copy.quoteScope, copy.users, plan.id === "core" ? copy.standard : copy.priority, `${plan.backupDays} ${copy.backups}*`].map((text) => <li key={text}><Check size={16} aria-hidden="true" />{text}</li>)}</ul>
      <div className="cx-plan-feature-group"><h4>{copy.featureTitle}</h4><ul>{copy.cardFeatures.map((text) => <li key={text}><Check size={16} aria-hidden="true" /><span>{text}</span></li>)}</ul></div>
      <div className="cx-plan-feature-group cx-plan-finance"><h4>{copy.financeTitle}</h4><span className="cx-plan-release-badge">{copy.releaseBadge}</span><ul>{copy.financeFeatures.map((text) => <li key={text}><Check size={16} aria-hidden="true" /><span>{text}</span></li>)}</ul><p>{copy.releaseNote}</p></div>
      <div className="cx-plan-trial"><strong>{copy.trialCard}</strong><p>{copy.trialCardNote}</p></div>
      <InquiryLink interest="currency_exchange" offer={plan.id === "core" ? "trial_7_days" : "annual_membership"} plan={plan.id} className="lab-action lab-action--outline">{plan.id === "growth" ? copy.quoteCta : copy.coreCta}</InquiryLink>
    </article>)}</div>
    <p className="cx-plan-billing-note">{copy.billingNote}</p>
    <div className="cx-plan-activation"><ShieldCheck size={24} aria-hidden="true" /><div><h3>{copy.activation}: {amount(ACTIVATION_FEE_COP)} COP</h3><ul className="cx-plan-onboarding">{copy.implementationItems.map((text) => <li key={text}><Check size={16} aria-hidden="true" /><span>{text}</span></li>)}</ul><p>{copy.activationNote}</p></div></div>
    <details className="cx-plan-terms"><summary>{copy.sharedTitle}</summary><div className="cx-plan-shared">{copy.shared.map((item) => <article key={item.title}><h4>{item.title}</h4><p>{item.text}</p></article>)}</div><h4>{copy.termsTitle}</h4><ul>{copy.terms.map((text, index) => <li key={text}>{index === 1 ? "* " : ""}{text}</li>)}</ul><h4>{copy.extrasTitle}</h4><p>{copy.extras}</p><p>{copy.scope}</p></details>
  </section>;
}
