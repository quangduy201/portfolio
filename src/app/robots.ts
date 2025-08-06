import { MetadataRoute } from "next";

import { fetchPortfolioConfig } from "@/lib/config";
import { Seo } from "@/lib/types";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const config = await fetchPortfolioConfig();
  const seo: Seo = config.seo;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${seo.url}/sitemap.xml`,
    host: seo.url,
  };
}
