import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de FUT STREET.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="simple-page shell">
        <p className="eyebrow">FUT STREET</p>
        <h1>Privacidad.</h1>
        <p>
          En FUT STREET nos tomamos en serio tu privacidad. Esta página contiene
          la información sobre el tratamiento de datos personales conforme al RGPD
          cuando contactas con nosotros a través de WhatsApp o redes sociales.
        </p>
      </main>
      <Footer />
    </>
  );
}
