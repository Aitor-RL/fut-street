import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "FUT STREET — Fútbol fuera del campo", description: "Camisetas de fútbol y streetwear de diseño propio." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
