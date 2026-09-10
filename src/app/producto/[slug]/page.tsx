import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { KitSwitcher } from "@/components/KitSwitcher";
import { getProduct, products } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  const title = `${product.name} — ${product.team}`;
  const description = `${product.description} Descubre las equipaciones y tallas disponibles de ${product.name} en FUT STREET.`;

  const primaryImage =
    product.kits?.[0]?.images?.[0]?.image || "/FutStreetNoFondo.png";

  return {
    title,
    description,
    alternates: {
      canonical: `/producto/${product.slug}`,
    },
    openGraph: {
      title: `${title} | FUT STREET`,
      description,
      url: `/producto/${product.slug}`,
      type: "website",
      images: [
        {
          url: primaryImage,
          width: 800,
          height: 800,
          alt: `Camiseta ${product.name} - ${product.team}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | FUT STREET`,
      description,
      images: [primaryImage],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const primaryImage =
    product.kits?.[0]?.images?.[0]?.image || "/FutStreetNoFondo.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: primaryImage,
    brand: {
      "@type": "Brand",
      name: product.team || "FUT STREET",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      price: "0.00",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "FUT STREET",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="product-page shell">
        <Link className="back-link" href="/catalogo">
          ← Volver al catálogo
        </Link>
        <KitSwitcher teamName={product.team} kits={product.kits}>
          <p className="eyebrow">
            {product.category} · {product.team}
          </p>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <WhatsAppButton />
          <p className="availability">
            Consulta disponibilidad y haz tu pedido a través de WhatsApp.
          </p>
        </KitSwitcher>
      </main>
      <div className="mobile-sticky-cta" aria-hidden="true">
        <WhatsAppButton />
      </div>
      <Footer />
    </>
  );
}
