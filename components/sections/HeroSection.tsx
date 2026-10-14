"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { InquiryLink } from "@/components/shared/InquiryLink";
import { useContent } from "@/components/layout/LocaleProvider";

function TechnologyCore() {
  return (
    <div className="lab-core" aria-hidden="true">
      <div className="lab-core-grid" />
      <div className="lab-core-orbit lab-core-orbit--one" />
      <div className="lab-core-orbit lab-core-orbit--two" />
      <div className="lab-core-orbit lab-core-orbit--three" />
      <div className="lab-core-sphere">
        <svg viewBox="0 0 360 360" fill="none">
          <defs>
            <linearGradient id="core-lines" x1="50" y1="0" x2="300" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--jl-horizon)" />
              <stop offset="1" stopColor="var(--jl-accent)" />
            </linearGradient>
            <clipPath id="core-circle"><circle cx="180" cy="180" r="146" /></clipPath>
          </defs>
          <g stroke="url(#core-lines)" clipPath="url(#core-circle)">
            <circle cx="180" cy="180" r="146" />
            {[35, 70, 105, 138].map((r) => <ellipse key={r} cx="180" cy="180" rx={r} ry="146" />)}
            {[65, 105, 145, 185, 225, 265, 305].map((y) => <ellipse key={y} cx="180" cy={y} rx="146" ry="24" />)}
            <path d="M34 180h292M180 34v292" />
          </g>
          <circle cx="180" cy="180" r="5" fill="var(--jl-accent)" />
        </svg>
      </div>
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
            <a href="#currency-exchange" className="lab-action lab-action--text">{c.hero.secondary}<ArrowUpRight size={17} /></a>
          </div>
          <div className="lab-hero-disciplines"><span>AI</span><span>SOFTWARE</span><span>AUTOMATION</span><span>SYSTEMS</span></div>
        </div>
        <TechnologyCore />
      </div>
      <div className="wrap lab-hero-footer">
        <span>{c.laboratory.location}</span>
        <span className="lab-hero-footer-note">{c.laboratory.heroNote}</span>
        <a href="#currency-exchange">{c.hero.scroll}<ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
