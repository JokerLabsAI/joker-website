"use client";

import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/components/layout/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import { InquiryLink } from "@/components/shared/InquiryLink";
import { SITE, NAV_ITEMS } from "@/lib/constants";

const socials = [
  ["LinkedIn", SITE.linkedin], ["Instagram", SITE.instagram], ["TikTok", SITE.tiktok],
  ["Facebook", SITE.facebook], ["YouTube", SITE.youtube],
];

export function Footer() {
  const c = useContent();
  return <footer className="jl-footer"><div className="wrap"><div className="jl-footer-top"><div><a href="#home" className="jl-footer-brand"><Logo size={38} /><span>JokerLabs</span></a><p>{c.footer.tagline}</p></div><div className="jl-footer-nav"><span>{c.footer.navigateLabel}</span>{NAV_ITEMS.map((item, index) => <a key={item.href} href={item.href}>{c.nav.items[index]}</a>)}</div><div className="jl-footer-contact"><span>{c.footer.contactLabel}</span><a href={`mailto:${SITE.email}`}>{SITE.email}<ArrowUpRight size={15} /></a><InquiryLink interest="services">{c.footer.cta}</InquiryLink></div></div><div className="jl-footer-social">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={12} /></a>)}</div><div className="jl-footer-bottom"><span>© {new Date().getFullYear()} JokerLabs</span><span>{c.footer.taglineBottom}</span><a href="#home" aria-label={c.nav.items[0]}><ArrowUpRight size={18} /></a></div></div><div className="jl-footer-wordmark" aria-hidden="true">JOKERLABS<span>.</span></div></footer>;
}
