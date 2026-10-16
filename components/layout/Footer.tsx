"use client";

import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import { InquiryLink } from "@/components/shared/InquiryLink";
import { SITE, NAV_MENU } from "@/lib/constants";
import { SiteLink } from "@/components/shared/SiteLink";

const socials = [
  ["LinkedIn", SITE.linkedin], ["Instagram", SITE.instagram], ["TikTok", SITE.tiktok],
  ["Facebook", SITE.facebook], ["YouTube", SITE.youtube],
];

export function Footer() {
  const c = useContent();
  return <footer className="jl-footer"><div className="wrap"><div className="jl-footer-top"><div><SiteLink href="/" className="jl-footer-brand"><Logo size={38} /><span>JokerLabs</span></SiteLink><p>{c.footer.tagline}</p></div><nav className="jl-footer-nav" aria-label={c.nav.portfolio}><span>{c.nav.portfolio}</span>{NAV_MENU.products.map((item, index) => <SiteLink key={item.href} href={item.href}>{c.nav.products[index]?.title}</SiteLink>)}<SiteLink href={NAV_MENU.allServices}>{c.nav.servicesLabel}</SiteLink></nav><nav className="jl-footer-nav" aria-label={c.nav.company}><span>{c.nav.company}</span>{NAV_MENU.company.map((item, index) => <SiteLink key={item.href} href={item.href}>{c.nav.companyItems[index]?.title}</SiteLink>)}</nav><div className="jl-footer-contact"><span>{c.footer.contactLabel}</span><a href={`mailto:${SITE.email}`}>{SITE.email}<ArrowUpRight size={15} /></a><InquiryLink interest="services">{c.footer.cta}</InquiryLink></div></div><div className="jl-footer-social">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={12} /></a>)}</div><div className="jl-footer-bottom"><span>© {new Date().getFullYear()} JokerLabs</span><span>{c.footer.taglineBottom}</span><SiteLink href="/" aria-label={c.nav.home}><ArrowUpRight size={18} /></SiteLink></div></div><div className="jl-footer-wordmark" aria-hidden="true">JOKERLABS<span>.</span></div></footer>;
}
