import { DetailPage } from "@/components/pages/DetailPage";
import { detailRoute, detailParams, detailMetadata } from "@/lib/detail-page";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return detailParams("en", "guide"); }
export async function generateMetadata({ params }: Props) {
  return detailMetadata((await params).slug, "en", "guide");
}
export default async function Page({ params }: Props) {
  const route = detailRoute((await params).slug, "en", "guide");
  return <DetailPage id={route.id} locale="en" />;
}
