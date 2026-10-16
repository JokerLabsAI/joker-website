import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const SITE_URL = "https://jokerlabs.ai";
import { localizedPath, type Locale } from "@/lib/page-routes";
export { localizedPath } from "@/lib/page-routes";
export type { Locale } from "@/lib/page-routes";
export type PageKey = "home" | "services" | "currency-exchange";
export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/", services: "/services", "currency-exchange": "/currency-exchange",
};


const copy = {
  en: {
    home: ["AI & Software Development in Cali, Colombia | JokerLabs", "Based in Cali, Colombia, JokerLabs develops AI, custom software and automation for businesses in Colombia, Peru and Mexico. Explore our services."],
    services: ["AI, Custom Software & Automation Services | JokerLabs", "AI, custom software, automation and integrations from Cali, Colombia, for businesses in Colombia, Peru and Mexico. Discuss your project with JokerLabs."],
    "currency-exchange": ["Software for Colombian Exchange Houses | Currency Exchange", "Manage currencies, customers and cash by branch. Review closing differences and rate changes, and prepare DIAN/UIAF files by configuration. Request a demo."],
  },
  es: {
    home: ["Inteligencia artificial y software en Cali | JokerLabs", "Desde Cali, Colombia, desarrollamos inteligencia artificial, software y automatización para empresas en Colombia, Perú y México. Conoce JokerLabs."],
    services: ["Desarrollo de software e inteligencia artificial | JokerLabs", "IA, desarrollo de software, automatización e integración desde Cali, Colombia, para empresas en Colombia, Perú y México. Hablemos de tu proyecto."],
    "currency-exchange": ["Software para casas de cambio en Colombia | Currency Exchange", "Gestiona divisas, clientes y caja por sucursal. Revisa diferencias de cierre, cambios de tasas y prepara archivos DIAN/UIAF según configuración. Solicita una demo."],
  },
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "JokerLabs",
  authors: [{ name: "JokerLabs" }],
  robots: { index: true, follow: true },
};

export function pageMetadata(page: PageKey, locale: Locale): Metadata {
  const [title, description] = copy[locale][page];
  const path = PAGE_PATHS[page];
  return metadataForPage(title, description, path, localizedPath(path, "es"), locale);
}

export function metadataForPage(title: string, description: string, englishPath: string, spanishPath: string, locale: Locale): Metadata {
  const url = `${SITE_URL}${locale === "es" ? spanishPath : englishPath}`;
  return {
    title, description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}${englishPath}`,
        es: `${SITE_URL}${spanishPath}`,
        "x-default": `${SITE_URL}${englishPath}`,
      },
    },
    openGraph: { title, description, url, type: "website", siteName: "JokerLabs", locale: locale === "es" ? "es_CO" : "en_US", alternateLocale: locale === "es" ? "en_US" : "es_CO", images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "JokerLabs — AI, Software, Automation" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/opengraph-image`] },
  };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "JokerLabs",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-monochrome.svg`,
  email: SITE.email,
  location: {
    "@type": "Place",
    name: SITE.location,
    address: { "@type": "PostalAddress", addressLocality: SITE.city, addressCountry: SITE.countryCode },
  },
  areaServed: SITE.serviceCountries.map((name) => ({ "@type": "Country", name })),
  sameAs: [SITE.googleBusinessProfile, SITE.linkedin, SITE.instagram, SITE.facebook, SITE.youtube, SITE.tiktok],
};
