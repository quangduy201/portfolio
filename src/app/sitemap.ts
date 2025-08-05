import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://quangduy.id.vn",
      lastModified: new Date(),
    },
  ];
}
