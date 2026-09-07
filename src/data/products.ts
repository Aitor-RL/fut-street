export type Product = { id: number; name: string; slug: string; price: number; category: string; team: string; description: string; sizes: string[]; badge?: string; accent: string; imageLabel: string };
export const products: Product[] = [
  { id: 1, name: "FS Blackout 01", slug: "fs-blackout-01", price: 29.9, category: "Diseño propio", team: "FUT STREET", description: "Camiseta de inspiración futbolera con estética nocturna y corte cómodo para la calle.", sizes: ["S", "M", "L", "XL"], badge: "Novedad", accent: "lime", imageLabel: "BLACKOUT" },
  { id: 2, name: "Street Club 90", slug: "street-club-90", price: 32.9, category: "Diseño propio", team: "FUT STREET", description: "Una camiseta retro con espíritu de grada, detalles deportivos y mucha personalidad.", sizes: ["S", "M", "L"], badge: "Destacada", accent: "orange", imageLabel: "CLUB 90" },
  { id: 3, name: "Away Lines 02", slug: "away-lines-02", price: 29.9, category: "Colección away", team: "FUT STREET", description: "Diseño ligero y deportivo pensado para combinar con tu look de diario.", sizes: ["M", "L", "XL"], accent: "blue", imageLabel: "AWAY" },
  { id: 4, name: "Concrete Football", slug: "concrete-football", price: 34.9, category: "Streetwear", team: "FUT STREET", description: "Gráfica urbana, tejido deportivo y una silueta relajada para moverte sin límites.", sizes: ["S", "M", "L", "XL"], accent: "pink", imageLabel: "CONCRETE" },
];
export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
