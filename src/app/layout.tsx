import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import { fetchPortfolioConfig } from "@/lib/config";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-family-jetbrains-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await fetchPortfolioConfig();
  const seo = config.seo;
  const info = config.info;

  return {
    title: `${info.name} | Portfolio`,
    description: `Personal portfolio of ${info.name} - ${info.position}`,
    keywords: seo.keywords,
    openGraph: {
      title: `${info.name} | Portfolio`,
      description: `Personal portfolio of ${info.name} - ${info.description}`,
      images: [
        {
          url: `${seo.url}/${seo.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${info.name}'s Portfolio`,
        },
      ],
      url: seo.url,
      type: "website",
    },
    metadataBase: new URL(seo.url),
    alternates: {
      canonical: seo.url,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <ClientLayoutWrapper>
          <Header />
          {children}
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
