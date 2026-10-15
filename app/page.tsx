import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CurrencyExchangeSection } from "@/components/sections/CurrencyExchangeSection";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <CurrencyExchangeSection />
        <ServicesSection />
        <WhySection />
        <ProcessSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
