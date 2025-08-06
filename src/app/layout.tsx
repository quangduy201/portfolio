import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import { fetchPortfolioConfig } from "@/lib/config";
import { Seo } from "@/lib/types";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-family-jetbrains-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await fetchPortfolioConfig();
  const seo: Seo = config.seo;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(seo.url),
    alternates: {
      canonical: seo.url,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.url,
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
