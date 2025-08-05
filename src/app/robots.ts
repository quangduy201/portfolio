import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://quangduy.id.vn/sitemap.xml",
    host: "https://quangduy.id.vn",
  };
}
