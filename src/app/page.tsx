import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return <><Navbar /><main>
    <section className="hero shell"><div className="hero-copy"><p className="eyebrow">Donde el fútbol se viste</p><h1>Juega<br /><em>a tu</em> manera.</h1><p className="hero-text">🔥 Camisetas que hablan fútbol<br />Diseñadas para llevar el juego fuera del campo.</p><Link href="/catalogo" className="primary-button">Ver colección <span>↗</span></Link></div><div className="hero-art"><div className="hero-circle"></div><Image className="hero-logo" src="/FutStreetNoFondo.png" alt="FUT STREET Clothing" width={430} height={430} priority /><span className="hero-sticker">DISEÑO<br />PROPIO</span><span className="hero-vertical">EST. 2025 / STREET FOOTBALL</span></div></section>
    <section className="ticker"><div>FÚTBOL · CALLE · DISEÑO PROPIO&nbsp;&nbsp;&nbsp;&nbsp; FÚTBOL · CALLE · DISEÑO PROPIO</div></section>
    <section className="section shell" id="la-marca"><div className="section-heading"><div><p className="eyebrow">01 / Selección</p><h2>Lo último en la calle</h2></div><Link href="/catalogo" className="text-link">Ver todo <span>↗</span></Link></div><div className="catalog-grid featured-grid">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="manifesto shell"><p className="eyebrow">02 / Nuestra forma de jugar</p><p className="manifesto-copy">No hacemos camisetas para quedarse en el armario. <span>Hacemos piezas para jugar, crear y ocupar la calle.</span></p></section>
  </main><Footer /></>;
}
