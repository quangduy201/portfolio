import { MetadataRoute } from "next";

import { fetchPortfolioConfig } from "@/lib/config";
import { Seo } from "@/lib/types";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const config = await fetchPortfolioConfig();
  const seo: Seo = config.seo;

  return {
    name: seo.title,
    short_name: seo.appName,
    description: seo.description,
    start_url: "/",
    icons: [
      {
        "src": "/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    theme_color: "#000000",
    background_color: "#1a1a1a",
    display: "standalone",
  };
}
