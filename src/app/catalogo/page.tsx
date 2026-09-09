import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CatalogGrid } from "@/components/CatalogGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo de Camisetas y Equipaciones",
  description:
    "Explora toda la colección de camisetas de fútbol y streetwear de FUT STREET. Diseños por ligas, primera equipación y piezas urbanas.",
  alternates: {
    canonical: "/catalogo",
  },
  openGraph: {
    title: "Catálogo de Camisetas | FUT STREET",
    description:
      "Explora toda la colección de camisetas de fútbol y streetwear de FUT STREET.",
    url: "/catalogo",
  },
};

export default function CatalogoPage() {
  return (
    <>
      <Navbar />
      <main className="catalog-page shell">
        <div className="page-intro">
          <p className="eyebrow">Colección 01 / 2025</p>
          <h1>El catálogo.</h1>
          <p>Explora camisetas por competición y descubre el universo FUT STREET.</p>
        </div>
        <CatalogGrid products={products} />
      </main>
      <Footer />
    </>
  );
}
