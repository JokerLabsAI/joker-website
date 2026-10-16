import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProvider } from "@/components/layout/LocaleProvider";
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import "./globals.css";
import "./laboratory.css";
// Test1
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

export const metadata: Metadata = {
  metadataBase: new URL("https://jokerlabs.ai"),
  title: "JokerLabs — AI Laboratory & Currency Exchange",
  description:
    "JokerLabs is an AI laboratory building Currency Exchange, our flagship product for exchange houses, and AI, software and automation solutions for businesses.",
  keywords: ["AI", "software", "automation", "systems", "technology lab", "Colombia"],
  authors: [{ name: "Joker Labs" }],
  openGraph: {
    title: "JokerLabs — AI Laboratory & Currency Exchange",
    description: "AI laboratory. Discover Currency Exchange, our flagship product, and explore AI, software and automation services. Colombia — working globally.",
    type: "website",
    url: "https://jokerlabs.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "JokerLabs — AI Laboratory & Currency Exchange",
    description: "AI laboratory · Currency Exchange · AI and software services.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jokerlabs.ai" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {GA_MEASUREMENT_ID && (
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
        <ThemeProvider defaultTheme="dark" storageKey="jl-theme">
          <LocaleProvider>
            {children}
            <CookieConsentBanner />
          </LocaleProvider>
        </ThemeProvider>
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
