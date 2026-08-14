import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-08-13T00:00:00+07:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
