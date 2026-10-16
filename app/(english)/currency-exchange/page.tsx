import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_URL, pageMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { CurrencyExchangeSection } from "@/components/sections/CurrencyExchangeSection";
import { ContactSection } from "@/components/sections/ContactSection";


export const metadata = pageMetadata("currency-exchange", "en");

export default function CurrencyExchangePage() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/currency-exchange#software`,
        name: "Currency Exchange",
        url: `${SITE_URL}/currency-exchange`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        publisher: { "@id": `${SITE_URL}/#organization` },
        description: "Software for Colombian exchange houses: currency transactions, customers, branch cash control and reporting.",
      }} />
      <ScrollProgress />
      <Navbar />
      <main>
        <CurrencyExchangeSection />
        <ContactSection defaultInterest="currency_exchange" />
      </main>
      <Footer />
    </>
  );
}
