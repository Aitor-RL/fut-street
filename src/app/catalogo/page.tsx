import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CatalogGrid } from "@/components/CatalogGrid";
import { products } from "@/data/products";
export const metadata = { title: "Catálogo | FUT STREET", description: "Descubre la colección de camisetas FUT STREET." };
export default function CatalogoPage() { return <><Navbar /><main className="catalog-page shell"><div className="page-intro"><p className="eyebrow">Colección 01 / 2025</p><h1>El catálogo.</h1><p>Diseños propios, espíritu futbolero y actitud de calle.</p></div><CatalogGrid products={products} /></main><Footer /></>; }
