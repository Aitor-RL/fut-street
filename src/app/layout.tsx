import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futstreet.es";

export const viewport: Viewport = {
  themeColor: "#090A09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FUT STREET — Fútbol fuera del campo",
    template: "%s | FUT STREET",
  },
  description: "Camisetas de fútbol, equipaciones y streetwear de diseño propio. Donde el fútbol se viste para la calle.",
  keywords: [
    "camisetas de fútbol",
    "streetwear fútbol",
    "equipaciones de fútbol",
    "camisetas retro fútbol",
    "FUT STREET",
    "ropa urbana fútbol",
  ],
  authors: [{ name: "FUT STREET" }],
  creator: "FUT STREET",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "FUT STREET — Fútbol fuera del campo",
    description: "Camisetas de fútbol, equipaciones y streetwear de diseño propio. Donde el fútbol se viste para la calle.",
    siteName: "FUT STREET",
    images: [
      {
        url: "/FutStreetNoFondo.png",
        width: 800,
        height: 800,
        alt: "FUT STREET Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT STREET — Fútbol fuera del campo",
    description: "Camisetas de fútbol y streetwear de diseño propio.",
    images: ["/FutStreetNoFondo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
