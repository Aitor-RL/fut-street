import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { KitSwitcher } from "@/components/KitSwitcher";
import { getProduct, products } from "@/data/products";
export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProduct(slug); if (!product) notFound(); return <><Navbar /><main className="product-page shell"><Link className="back-link" href="/catalogo">← Volver al catálogo</Link><KitSwitcher teamName={product.team}><p className="eyebrow">{product.category} · {product.team}</p><h1>{product.name}</h1><WhatsAppButton /><p className="availability">Consulta la información de esta camiseta a través de WhatsApp.</p></KitSwitcher></main><Footer /></>; }
