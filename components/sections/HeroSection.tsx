"use client";

import { HeroPlanet } from "@/components/shared/HeroPlanet";
import { ArrowUpRight } from "lucide-react";
import { InquiryLink } from "@/components/shared/InquiryLink";
import { SiteLink } from "@/components/shared/SiteLink";
import { useContent } from "@/components/layout/LocaleProvider";

function TechnologyCore() {
  return (
    <div className="lab-core">
      <div className="lab-core-grid" aria-hidden="true" />
      <div className="lab-core-orbit lab-core-orbit--one" />
      <div className="lab-core-orbit lab-core-orbit--two" />
      <div className="lab-core-orbit lab-core-orbit--three" />
      <HeroPlanet />
      <span className="lab-core-point lab-core-point--ai">AI</span>
      <span className="lab-core-point lab-core-point--systems">SYSTEMS</span>
      <span className="lab-core-point lab-core-point--code">SOFTWARE</span>
      <span className="lab-core-coordinate">JL / EXPLORATION FIELD</span>
      <span className="lab-core-index">01 — ∞</span>
    </div>
  );
}

export function HeroSection() {
  const c = useContent();
  return (
    <section id="home" className="lab-hero" aria-labelledby="lab-hero-title">
      <div className="lab-hero-glow" aria-hidden="true" />
      <div className="wrap lab-hero-layout">
        <div className="lab-hero-copy">
          <span className="lab-kicker"><span className="lab-status-dot" />{c.hero.eyebrow}</span>
          <h1 id="lab-hero-title">{c.hero.cyclePrefix}<br /><span>{c.hero.cycleWords[0]}</span><span className="lab-title-dot">.</span></h1>
          <p className="lab-hero-description">{c.hero.sub}</p>
          <div className="lab-hero-actions">
            <InquiryLink interest="services">{c.hero.cta}</InquiryLink>
            <SiteLink href="/currency-exchange" className="lab-action lab-action--text">{c.hero.secondary}<ArrowUpRight size={17} /></SiteLink>
          </div>
          <div className="lab-hero-disciplines"><span>AI</span><span>SOFTWARE</span><span>AUTOMATION</span><span>SYSTEMS</span></div>
        </div>
        <TechnologyCore />
      </div>
      <div className="wrap lab-hero-footer">
        <span>{c.laboratory.location}</span>
        <span className="lab-hero-footer-note">{c.laboratory.heroNote}</span>
        <SiteLink href="/currency-exchange">{c.hero.scroll}<ArrowUpRight size={15} /></SiteLink>
      </div>
    </section>
  );
}
