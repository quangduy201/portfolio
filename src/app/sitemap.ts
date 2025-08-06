import { MetadataRoute } from "next";

import { fetchPortfolioConfig } from "@/lib/config";
import { Seo } from "@/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = await fetchPortfolioConfig();
  const seo: Seo = config.seo;

  return [
    {
      url: seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
