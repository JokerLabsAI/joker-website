import type { MetadataRoute } from "next";
import { PAGE_PATHS, SITE_URL, localizedPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGE_PATHS).flatMap((path) =>
    (["en", "es"] as const).map((locale) => ({
      url: `${SITE_URL}${localizedPath(path, locale)}`,
      alternates: { languages: { en: `${SITE_URL}${path}`, es: `${SITE_URL}${localizedPath(path, "es")}`, "x-default": `${SITE_URL}${path}` } },
    })),
  );
}
