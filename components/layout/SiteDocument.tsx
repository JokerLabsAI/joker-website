import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { organization } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import "@/app/globals.css";
import "@/app/laboratory.css";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-jb",
  display: "swap",
});

export function SiteDocument({ children, locale }: { children: React.ReactNode; locale: "en" | "es" }) {
  return (
    <html lang={locale} suppressHydrationWarning>
      {GA_MEASUREMENT_ID && (
        // This shared document is rendered exclusively by the EN/ES root layouts.
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
      )}
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-space)]`}>
        <StructuredData data={organization} />
        <ThemeProvider defaultTheme="dark" storageKey="jl-theme">
          <LocaleProvider initialLocale={locale}>
            {children}
            <CookieConsentBanner />
          </LocaleProvider>
        </ThemeProvider>
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
