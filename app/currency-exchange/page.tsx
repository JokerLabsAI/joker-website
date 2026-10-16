import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { CurrencyExchangeSection } from "@/components/sections/CurrencyExchangeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Currency Exchange — JokerLabs",
  description:
    "Currency Exchange by JokerLabs: software for exchange houses with cash and currency control, customer management and reports. Request a demo.",
  openGraph: {
    title: "Currency Exchange — JokerLabs",
    description: "Software for exchange houses: cash and currencies, customers and reports in one place.",
    type: "website",
    url: "https://jokerlabs.ai/currency-exchange",
  },
  alternates: { canonical: "https://jokerlabs.ai/currency-exchange" },
};

export default function CurrencyExchangePage() {
  return (
    <>
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
