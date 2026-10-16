"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sun, Moon, Menu, X, ChevronDown, ArrowRight, BookOpen, BadgeDollarSign, CalendarDays } from "lucide-react";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { SiteLink } from "@/components/shared/SiteLink";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useContent, useLocale } from "@/components/layout/LocaleProvider";
import { NAV_MENU } from "@/lib/constants";
import { DETAIL_CONTENT } from "@/content/detail-pages";
import { DETAIL_ROUTES } from "@/lib/page-routes";
import { localizedPath } from "@/lib/page-routes";
import type { NavEntry } from "@/lib/locale-types";

type MenuId = "portfolio" | "company";
type MenuLink = NavEntry & { href: string; icon: LucideIcon };

const PORTFOLIO_PATHS = ["/currency-exchange", "/services", "/resources"];

function MenuItem({ item, onSelect }: { item: MenuLink; onSelect: () => void }) {
  const pathname = usePathname();
  const { locale } = useLocale();
  const Icon = item.icon;
  return (
    <li>
      <SiteLink href={item.href} className="jl-mega-item" afterClick={onSelect} aria-current={localizedPath(item.href, locale) === pathname ? "page" : undefined}>
        <span className="jl-mega-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.7} /></span>
        <span className="jl-mega-text"><strong>{item.title}</strong><small>{item.description}</small></span>
      </SiteLink>
    </li>
  );
}

function MenuGroup({ id, label, items, onSelect, columns = 1 }: { id: string; label: string; items: MenuLink[]; onSelect: () => void; columns?: 1 | 2 }) {
  return (
    <div className="jl-mega-group">
      <p className="jl-mega-label" id={id}>{label}</p>
      <ul className={columns === 2 ? "jl-mega-list jl-mega-list--two" : "jl-mega-list"} aria-labelledby={id}>
        {items.map((item) => <MenuItem key={item.href} item={item} onSelect={onSelect} />)}
      </ul>
    </div>
  );
}

function MenuTrigger({ id, label, open, current, onToggle, onHover }: {
  id: MenuId; label: string; open: boolean; current: boolean;
  onToggle: (id: MenuId) => void; onHover: (id: MenuId, event: React.PointerEvent) => void;
}) {
  return (
    <button
      type="button"
      className={`jl-nav-trigger${open ? " is-open" : ""}${current ? " is-current" : ""}`}
      aria-expanded={open}
      aria-controls={`jl-mega-${id}`}
      onClick={() => onToggle(id)}
      onPointerEnter={(event) => onHover(id, event)}
    >
      {label}<ChevronDown size={14} aria-hidden="true" />
    </button>
  );
}

export function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { locale } = useLocale();
  const content = useContent();
  const { nav } = content;
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const menuAreaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverOpenedAt = useRef(0);

  const links = {
    products: [
      ...NAV_MENU.products.map((link, i) => ({ ...link, ...nav.products[i] })),
      { href: "/currency-exchange#cx-plans", icon: BadgeDollarSign, title: locale === "es" ? "Planes y precios" : "Plans and pricing", description: locale === "es" ? "Core y cotización personalizada Growth" : "Core and custom Growth quotes" },
      { href: "/currency-exchange#cx-trial", icon: CalendarDays, title: locale === "es" ? "Prueba de 7 días" : "7-day trial", description: locale === "es" ? "Un mes total con compra anual" : "One month total with annual purchase" },
    ],
    guides: DETAIL_ROUTES.filter((route) => route.kind === "guide").map((route) => ({ href: route.en, icon: BookOpen, title: DETAIL_CONTENT[locale][route.id].title, description: "" })),
    services: NAV_MENU.services.map((link, i) => ({ ...link, title: content.services.items[i]?.title ?? "", description: content.services.items[i]?.tag ?? "" })),
    company: NAV_MENU.company.map((link, i) => ({ ...link, ...nav.companyItems[i] })),
  };

  const closeAll = () => { setOpenMenu(null); setMobileOpen(false); };
  const cancelClose = () => window.clearTimeout(closeTimer.current);
  const scheduleClose = () => { cancelClose(); closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160); };

  // Close the desktop panel on Escape (returning focus) or on a click outside the menu area.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (openMenu) document.querySelector<HTMLButtonElement>(`[aria-controls="jl-mega-${openMenu}"]`)?.focus();
      setOpenMenu(null);
      setMobileOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (openMenu && !menuAreaRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, [openMenu, mobileOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // A click that lands right after hover opened the panel keeps it open instead of toggling it shut.
  const toggleMenu = (id: MenuId) => {
    const justHovered = Date.now() - hoverOpenedAt.current < 600;
    setOpenMenu((current) => current === id && !justHovered ? null : id);
  };
  const hoverMenu = (id: MenuId, event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    if (openMenu !== id) hoverOpenedAt.current = Date.now();
    setOpenMenu(id);
  };

  const panelMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.18 } };

  const languageButton = (className: string) => (
    <a href={localizedPath(pathname, locale === "en" ? "es" : "en")} hrefLang={locale === "en" ? "es" : "en"} className={className} aria-label={locale === "es" ? "Cambiar a inglés" : "Switch to Spanish"}>
      {locale === "en" ? "EN" : "ES"}
    </a>
  );
  const themeButton = (className: string) => (
    <button type="button" onClick={toggleTheme} className={className} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      {theme === "dark" ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
    </button>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 jl-navbar" style={{ pointerEvents: "none" }}>
        {/* ── Mobile: logo + toggle ── */}
        <div className="flex items-center justify-between px-5 py-4 lg:hidden" style={{ pointerEvents: "auto" }}>
          <SiteLink href="/" className="flex items-center" aria-label="JokerLabs" afterClick={closeAll}>
            <Logo size={34} />
          </SiteLink>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center"
            style={{ color: "var(--dim)" }}
            aria-label={nav.toggle}
            aria-expanded={mobileOpen}
            aria-controls="jl-mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Desktop ── */}
        <div className="hidden lg:block relative h-20">
          <SiteLink href="/" className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center gap-2.5" style={{ pointerEvents: "auto" }}>
            <Logo size={26} />
            <span className="text-sm font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>JokerLabs</span>
          </SiteLink>

          <div ref={menuAreaRef} className="jl-nav-area" style={{ pointerEvents: "auto" }} onPointerEnter={cancelClose} onPointerLeave={(event) => { if (event.pointerType === "mouse") scheduleClose(); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null); }}>
            <nav className="jl-nav-pill" aria-label={nav.label}>
              {/* Each panel follows its trigger in the DOM so Tab moves from the button into its links. */}
              <MenuTrigger id="portfolio" label={nav.portfolio} open={openMenu === "portfolio"} current={PORTFOLIO_PATHS.some((path) => localizedPath(pathname, "en").startsWith(path))} onToggle={toggleMenu} onHover={hoverMenu} />
              <AnimatePresence>
                {openMenu === "portfolio" && (
                  <motion.div key="portfolio" id="jl-mega-portfolio" className="jl-mega" {...panelMotion}>
                    <div className="jl-mega-columns jl-mega-columns--portfolio">
                      <div className="jl-mega-product-links"><MenuGroup id="jl-mega-products" label={nav.productsLabel} items={links.products} onSelect={closeAll} />
                      <MenuGroup id="jl-mega-guides" label={locale === "es" ? "Guías de Currency Exchange" : "Currency Exchange guides"} items={links.guides} onSelect={closeAll} /></div>
                      <MenuGroup id="jl-mega-services" label={nav.servicesLabel} items={links.services} onSelect={closeAll} columns={2} />
                    </div>
                    <div className="jl-mega-footer">
                      <SiteLink href={NAV_MENU.allServices} afterClick={closeAll}>{nav.allServices}<ArrowRight size={15} aria-hidden="true" /></SiteLink>
                      <SiteLink href={NAV_MENU.products[0].href} afterClick={closeAll}>{nav.productCta}<ArrowRight size={15} aria-hidden="true" /></SiteLink>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <MenuTrigger id="company" label={nav.company} open={openMenu === "company"} current={false} onToggle={toggleMenu} onHover={hoverMenu} />
              <AnimatePresence>
                {openMenu === "company" && (
                  <motion.div key="company" id="jl-mega-company" className="jl-mega jl-mega--compact" {...panelMotion}>
                    <div className="jl-mega-columns">
                      <MenuGroup id="jl-mega-company-list" label={nav.companyLabel} items={links.company} onSelect={closeAll} columns={2} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <SiteLink href={NAV_MENU.contact} className="jl-nav-trigger" afterClick={closeAll}>{nav.contact}</SiteLink>
            </nav>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-1" style={{ pointerEvents: "auto" }}>
            {languageButton("jl-nav-icon-button jl-nav-lang")}
            {themeButton("jl-nav-icon-button")}
            <SiteLink href={NAV_MENU.demo} className="jl-nav-demo">{nav.demo}</SiteLink>
            <SiteLink href={NAV_MENU.contact} className="jl-nav-cta">{nav.cta}</SiteLink>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            id="jl-mobile-navigation"
            className="jl-mobile-nav lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <nav aria-label={nav.label} className="jl-mobile-nav-inner">
              <section aria-labelledby="jl-mobile-portfolio">
                <h2 id="jl-mobile-portfolio" className="jl-mega-label">{nav.portfolio}</h2>
                <ul className="jl-mega-list">
                  {links.products.map((item) => <MenuItem key={item.href} item={item} onSelect={closeAll} />)}
                  <MenuItem item={{ href: NAV_MENU.allServices, icon: NAV_MENU.services[0].icon, title: nav.servicesLabel, description: links.services.map((s) => s.title).join(" · ") }} onSelect={closeAll} />
                </ul>
              </section>
              <section aria-labelledby="jl-mobile-services">
                <h2 id="jl-mobile-services" className="jl-mega-label">{nav.servicesLabel}</h2>
                <ul className="jl-mega-list">{links.services.map((item) => <MenuItem key={item.href} item={item} onSelect={closeAll} />)}</ul>
              </section>
              <section aria-labelledby="jl-mobile-guides">
                <h2 id="jl-mobile-guides" className="jl-mega-label">{locale === "es" ? "Guías de Currency Exchange" : "Currency Exchange guides"}</h2>
                <ul className="jl-mega-list">{links.guides.map((item) => <MenuItem key={item.href} item={item} onSelect={closeAll} />)}</ul>
              </section>
              <section aria-labelledby="jl-mobile-company">
                <h2 id="jl-mobile-company" className="jl-mega-label">{nav.company}</h2>
                <ul className="jl-mega-list">
                  {links.company.map((item) => <MenuItem key={item.href} item={item} onSelect={closeAll} />)}
                </ul>
              </section>
              <div className="jl-mobile-nav-actions">
                <SiteLink href={NAV_MENU.demo} className="jl-nav-demo" afterClick={closeAll}>{nav.demo}</SiteLink>
                <SiteLink href={NAV_MENU.contact} className="jl-nav-cta" afterClick={closeAll}>{nav.cta}</SiteLink>
              </div>
              <div className="jl-mobile-nav-settings">
                {languageButton("jl-nav-icon-button jl-nav-lang jl-nav-bordered")}
                {themeButton("jl-nav-icon-button jl-nav-bordered")}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
