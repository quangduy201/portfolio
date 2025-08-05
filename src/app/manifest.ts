import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quang Duy's Portfolio",
    short_name: "Portfolio",
    description:
      "Personal portfolio website of Quang Duy - A Full Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a202c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
