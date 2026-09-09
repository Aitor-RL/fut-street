import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cuidado de Prendas y Envíos",
  description:
    "Instrucciones de lavado, cuidado y mantenimiento para que tus camisetas FUT STREET duren impecables.",
  alternates: {
    canonical: "/envios",
  },
};

export default function EnviosPage() {
  return (
    <>
      <Navbar />
      <main className="simple-page shell">
        <p className="eyebrow">Información</p>
        <h1>Cuidado de prendas.</h1>
        <p>
          Para mantener tus camisetas FUT STREET en perfecto estado durante más
          tiempo, lávalas siempre del revés con agua fría (máximo 30°C), evita el
          uso de secadora y no planches directamente sobre los estampados y vinilos.
        </p>
      </main>
      <Footer />
    </>
  );
}
