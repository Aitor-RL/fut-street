import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guía de Tallas",
  description:
    "Consulta las medidas de pecho y largo para todas las tallas de camisetas FUT STREET. Encuentra tu talla ideal.",
  alternates: {
    canonical: "/tallas",
  },
};

export default function TallasPage() {
  const rows = [
    ["S", "50 cm", "69 cm"],
    ["M", "53 cm", "71 cm"],
    ["L", "56 cm", "73 cm"],
    ["XL", "59 cm", "75 cm"],
  ];

  return (
    <>
      <Navbar />
      <main className="simple-page shell">
        <p className="eyebrow">Información</p>
        <h1>Guía de tallas.</h1>
        <p>
          Si estás entre dos tallas, te recomendamos elegir la más grande para un
          fit más relajado y cómodo al estilo streetwear.
        </p>
        <div className="size-table" role="table" aria-label="Tabla de medidas">
          <div role="row">
            <b role="columnheader">Talla</b>
            <b role="columnheader">Pecho</b>
            <b role="columnheader">Largo</b>
          </div>
          {rows.map((row) => (
            <div key={row[0]} role="row">
              {row.map((cell) => (
                <span key={cell} role="cell">
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
