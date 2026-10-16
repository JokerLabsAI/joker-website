"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Scale, History, Check, Building2, FileText, ArrowRight, RefreshCw, ScanLine, BellRing } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { InquiryLink } from "@/components/shared/InquiryLink";

import { CurrencyExchangePlans } from "@/components/sections/CurrencyExchangePlans";
import { PLAN_COPY } from "@/content/currency-exchange-plans";
import { CurrencyExchangeTrial } from "@/components/sections/CurrencyExchangeTrial";
import { SiteLink } from "@/components/shared/SiteLink";

const icons = [Scale, History, ShieldCheck];

export function CurrencyExchangeSection() {
  // Rendered as the main content of /currency-exchange, so the product title is the page h1.
  const { currencyExchange: cx, locale } = useContent();
  const [viewIndex, setViewIndex] = useState(0);
  const view = cx.preview.views[viewIndex];

  return (
    <section id="currency-exchange" className="flagship flagship--sales flagship--showcase section-pad" aria-labelledby="flagship-title">
      <div className="wrap">
        <div className="lab-section-index"><span>{cx.eyebrow}</span><span>JOKERLABS / FINTECH</span></div>
        <div className="flagship-sales-hero">
          <div className="flagship-sales-copy"><div className="cx-brand-lockup"><span>CX</span><strong>Currency<br />Exchange</strong></div>
            <span className="flagship-product-label">{cx.productLabel}</span>
            <h1 id="flagship-title">{cx.title}<br /><em>{cx.headlineAccent}</em></h1>
            <p className="flagship-sales-description">{cx.description}</p>
            <div className="cx-hero-badges">{cx.heroBadges.map((badge) => <span key={badge}><Check size={12} aria-hidden="true" />{badge}</span>)}</div>
            <div className="flagship-sales-ctas"><InquiryLink interest="currency_exchange">{cx.cta}</InquiryLink><a href="#cx-benefits" className="lab-action lab-action--text">{cx.tourCta}<ArrowUpRight size={17} /></a></div>
            <p className="flagship-cta-note">{cx.ctaNote}</p><a href="#cx-plans" className="flagship-plan-link">{PLAN_COPY[locale].link}<ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <figure className="flagship-preview">
            <figcaption className="flagship-preview-label">{cx.preview.label}</figcaption>
            <div className="cx-preview-halo" aria-hidden="true" /><div className="flagship-preview-window">
              <div className="flagship-preview-header"><span className="flagship-preview-brand">CX<span>Currency Exchange</span></span><span className="flagship-preview-branch"><Building2 size={12} />{cx.preview.branch}</span></div>
              <div className="flagship-preview-body">
                <p className="flagship-preview-title">{cx.preview.title}</p>
                <div className="flagship-preview-controls" role="group" aria-label={cx.preview.title}>
                  {cx.preview.tabs.map((tab, index) => <button key={tab} type="button" aria-pressed={viewIndex === index} aria-controls="cx-preview-content" onClick={() => setViewIndex(index)}>{tab}</button>)}
                </div>
                <div id="cx-preview-content" className="flagship-preview-content" aria-live="polite" aria-atomic="true">
                  <h3>{view.title}</h3><p>{view.description}</p>
                  <dl>{view.rows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
                </div>
              </div>
            </div>
            <div className="cx-preview-ribbon"><ShieldCheck size={16} /><span>{cx.capabilities[0].title}</span><ArrowRight size={16} /></div><p className="flagship-preview-footnote">{cx.preview.footnote}</p>
          </figure>
        </div>
        <div id="cx-benefits" className="cx-benefit-heading"><span>{cx.availableLabel}</span><h3>{cx.summaryLabel}</h3></div>
        <div className="flagship-capabilities" aria-label={cx.summaryLabel}>
          {cx.capabilities.map((item, index) => {
            const Icon = icons[index];
            return <article key={item.title}><Icon size={25} strokeWidth={1.4} /><span className="flagship-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>;
          })}
        </div>
        <section className="cx-daily-cases" aria-labelledby="cx-daily-cases-title">
          <span className="lab-kicker">{cx.dailyCases.eyebrow}</span>
          <h2 id="cx-daily-cases-title">{cx.dailyCases.title}</h2>
          <p className="cx-daily-cases-intro">{cx.dailyCases.description}</p>
          <div className="cx-daily-cases-grid">
            {cx.dailyCases.items.map((item) => (
              <article key={item.title}>
                <span className="cx-daily-case-moment">{item.moment}</span>
                <h3>{item.title}</h3>
                <p>{item.situation}</p>
                <dl>
                  <div><dt>{cx.dailyCases.actionLabel}</dt><dd>{item.action}</dd></div>
                  <div><dt>{cx.dailyCases.resultLabel}</dt><dd>{item.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className="cx-daily-cases-note">{cx.dailyCases.note}</p>
          <InquiryLink interest="currency_exchange" className="lab-action lab-action--text">{cx.dailyCases.cta}<ArrowUpRight size={17} aria-hidden="true" /></InquiryLink>
        </section>
        <div className="cx-compliance" aria-labelledby="cx-compliance-title">
          <div className="cx-compliance-intro"><span className="lab-kicker"><ShieldCheck size={16} />{cx.compliance.eyebrow}</span><h3 id="cx-compliance-title">{cx.compliance.title}<br /><em>{cx.compliance.accent}</em></h3><p>{cx.compliance.description}</p></div>
          <div className="cx-compliance-cards">{cx.compliance.cards.map((card) => <article key={card.name}><div className="cx-compliance-card-top"><span>{card.name}</span><FileText size={24} strokeWidth={1.4} aria-hidden="true" /></div><h4>{card.title}</h4><p>{card.description}</p><div className="cx-compliance-tags">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
          <ol className="cx-compliance-flow">{cx.compliance.flow.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}{index < cx.compliance.flow.length - 1 && <ArrowRight size={15} aria-hidden="true" />}</li>)}</ol>
          <div className="cx-compliance-bottom"><p>{cx.compliance.note}</p><InquiryLink interest="currency_exchange" className="lab-action lab-action--text">{cx.compliance.cta}</InquiryLink></div>
        </div>
        <section className="cx-assistant" aria-labelledby="cx-assistant-title">
          <span className="lab-kicker"><BellRing size={16} aria-hidden="true" />{cx.assistant.eyebrow}</span>
          <h3 id="cx-assistant-title">{cx.assistant.title}<br /><em>{cx.assistant.accent}</em></h3>
          <p className="cx-assistant-description">{cx.assistant.description}</p>
          <div className="cx-assistant-events">{cx.assistant.events.map((event) => <article key={event.title}><BellRing size={20} aria-hidden="true" /><h4>{event.title}</h4><p>{event.description}</p></article>)}</div>
          <p className="cx-assistant-flow">{cx.assistant.flow}</p>
          <p className="cx-assistant-note">{cx.assistant.note}</p>
          <InquiryLink interest="currency_exchange" className="lab-action lab-action--text">{cx.assistant.cta}</InquiryLink>
        </section>
        <div className="cx-roadmap-heading"><span className="lab-kicker"><span className="lab-status-dot" />CURRENCY EXCHANGE / NEXT</span><h3>{cx.roadmapTitle}</h3><p>{cx.roadmapDescription}</p></div>
        <div className="cx-roadmap">
          {cx.roadmap.map((item, index) => {
            const Icon = [FileText, RefreshCw, ScanLine][index];
            return <article className={`cx-roadmap-card ${index === 0 ? "cx-roadmap-card--invoice" : ""}`} key={item.title}>
              <div className="cx-roadmap-copy"><div className="cx-roadmap-top"><Icon size={24} strokeWidth={1.4} /><span data-state={item.state}>{item.status}</span></div><span className="cx-roadmap-tag">{item.tag}</span><h4>{item.title}</h4><p>{item.description}</p></div>
              {index === 0 && <div className="cx-invoice-art" aria-label={cx.invoicePreview.subtitle}><div className="cx-invoice-paper"><div className="cx-invoice-mark"><span>CX</span><FileText size={22} /></div><span className="cx-invoice-caption">{cx.invoicePreview.subtitle}</span><strong>{cx.invoicePreview.title}</strong><p>{cx.invoicePreview.issuer}</p><div className="cx-invoice-lines" aria-hidden="true"><i /><i /><i /></div><div className="cx-invoice-row"><span>{cx.invoicePreview.row}</span><span>—</span></div><div className="cx-invoice-row"><b>{cx.invoicePreview.total}</b><b>—</b></div><span className="cx-invoice-note">{cx.invoicePreview.note}</span></div></div>}
            </article>;
          })}
        </div>
        <CurrencyExchangePlans />
        <CurrencyExchangeTrial />
        <p className="flagship-boundary">{cx.boundary}</p>
        <div className="flagship-services-bridge"><span>{cx.moreLabel}</span><SiteLink href="/services">{cx.moreCta}<ArrowUpRight size={16} /></SiteLink></div>
      </div>
    </section>
  );
}
