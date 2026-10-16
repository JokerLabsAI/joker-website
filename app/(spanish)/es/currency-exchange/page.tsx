import { pageMetadata } from "@/lib/seo";
import { ProductLanding } from "@/components/pages/ProductLanding";
export const metadata = pageMetadata("currency-exchange", "es");
export default function Page() { return <ProductLanding locale="es" />; }
