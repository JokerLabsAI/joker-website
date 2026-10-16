import { SiteDocument } from "@/components/layout/SiteDocument";
import { baseMetadata } from "@/lib/seo";

export const metadata = baseMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
