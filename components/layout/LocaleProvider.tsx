"use client";

import { createContext, useContext } from "react";
import type { SiteContent } from "@/lib/locale-types";
import { en } from "@/content/en";
import { es } from "@/content/es";

import { usePathname } from "next/navigation";
import { localizedPath, type Locale } from "@/lib/page-routes";

const CONTENT_MAP: Record<Locale, SiteContent> = { en, es };

interface LocaleContextValue {
  locale: Locale;
  content: SiteContent;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  content: en,
  setLocale: () => {},
});

export function useContent() {
  return useContext(LocaleContext).content;
}

export function useLocale() {
  const { locale, setLocale } = useContext(LocaleContext);
  return { locale, setLocale };
}

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale: Locale }) {
  const pathname = usePathname();
  const locale = initialLocale;
  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    // Each language has a static root document; navigate to its equivalent URL.
    window.location.assign(`${localizedPath(pathname, nextLocale)}${window.location.search}${window.location.hash}`);
  };

  return (
    <LocaleContext.Provider value={{ locale, content: CONTENT_MAP[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
