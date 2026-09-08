export type League = "LaLiga" | "Premier League" | "Ligue 1" | "Bundesliga" | "Serie A";
export type Product = { id: number; name: string; slug: string; league: League; category: string; team: string; description: string; sizes: string[]; badge?: string; accent: string; imageLabel: string };
export const leagues: { name: League; country: string; code: string }[] = [
  { name: "LaLiga", country: "España", code: "ES" },
  { name: "Premier League", country: "Inglaterra", code: "EN" },
  { name: "Ligue 1", country: "Francia", code: "FR" },
  { name: "Bundesliga", country: "Alemania", code: "DE" },
  { name: "Serie A", country: "Italia", code: "IT" },
];
export const products: Product[] = [
  { id: 1, name: "FS Blackout 01", slug: "fs-blackout-01", league: "LaLiga", category: "Diseño propio", team: "FUT STREET", description: "Camiseta de inspiración futbolera con estética nocturna y corte cómodo para la calle.", sizes: ["S", "M", "L", "XL"], badge: "Novedad", accent: "lime", imageLabel: "BLACKOUT" },
  { id: 2, name: "Street Club 90", slug: "street-club-90", league: "Premier League", category: "Diseño propio", team: "FUT STREET", description: "Una camiseta retro con espíritu de grada, detalles deportivos y mucha personalidad.", sizes: ["S", "M", "L"], badge: "Destacada", accent: "orange", imageLabel: "CLUB 90" },
  { id: 3, name: "Away Lines 02", slug: "away-lines-02", league: "Ligue 1", category: "Colección away", team: "FUT STREET", description: "Diseño ligero y deportivo pensado para combinar con tu look de diario.", sizes: ["M", "L", "XL"], accent: "blue", imageLabel: "AWAY" },
  { id: 4, name: "Concrete Football", slug: "concrete-football", league: "Bundesliga", category: "Streetwear", team: "FUT STREET", description: "Gráfica urbana, tejido deportivo y una silueta relajada para moverte sin límites.", sizes: ["S", "M", "L", "XL"], accent: "pink", imageLabel: "CONCRETE" },
  { id: 5, name: "Italia Terrace 05", slug: "italia-terrace-05", league: "Serie A", category: "Colección terrace", team: "FUT STREET", description: "Una pieza de inspiración terrace con líneas limpias y carácter clásico.", sizes: ["S", "M", "L", "XL"], accent: "blue", imageLabel: "TERRACE" },
];
export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
