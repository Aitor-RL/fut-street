import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal y condiciones de uso de FUT STREET.",
  alternates: {
    canonical: "/legal",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="simple-page shell">
        <p className="eyebrow">FUT STREET</p>
        <h1>Aviso legal.</h1>
        <p>
          Esta página es una base informativa. Antes de publicar la web comercialmente,
          completa aquí los datos identificativos de la marca, titularidad del sitio web
          y las condiciones generales de uso del servicio.
        </p>
      </main>
      <Footer />
    </>
  );
}
