import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services — JokerLabs",
  description:
    "Applied AI, digital product development, process automation and integration services from JokerLabs, an AI laboratory in Colombia.",
  openGraph: {
    title: "Services — JokerLabs",
    description: "Applied AI, software, automation and integration for your business.",
    type: "website",
    url: "https://jokerlabs.ai/services",
  },
  alternates: { canonical: "https://jokerlabs.ai/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
