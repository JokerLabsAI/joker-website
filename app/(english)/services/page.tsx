import { pageMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";


export const metadata = pageMetadata("services", "en");

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
