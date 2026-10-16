import type { MetadataRoute } from "next";
import { DETAIL_ROUTES } from "@/lib/page-routes";
import { PAGE_PATHS, SITE_URL, localizedPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...Object.values(PAGE_PATHS), ...DETAIL_ROUTES.map((route) => route.en)].flatMap((path) =>
    (["en", "es"] as const).map((locale) => ({
      url: `${SITE_URL}${localizedPath(path, locale)}`,
      alternates: { languages: { en: `${SITE_URL}${path}`, es: `${SITE_URL}${localizedPath(path, "es")}`, "x-default": `${SITE_URL}${path}` } },
    })),
  );
}
