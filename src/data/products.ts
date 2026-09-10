export type League = "LaLiga" | "Premier League" | "Ligue 1" | "Bundesliga" | "Serie A";

export type KitImage = {
  image: string;
  alt: string;
};

export type Kit = {
  name: string;
  images: KitImage[];
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  league: League;
  category: string;
  team: string;
  description: string;
  sizes: string[];
  badge?: string;
  accent: string;
  imageLabel: string;
  kits?: Kit[];
};

export const leagues: { name: League; country: string; code: string }[] = [
  { name: "LaLiga", country: "España", code: "ES" },
  { name: "Premier League", country: "Inglaterra", code: "EN" },
  { name: "Ligue 1", country: "Francia", code: "FR" },
  { name: "Bundesliga", country: "Alemania", code: "DE" },
  { name: "Serie A", country: "Italia", code: "IT" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "REAL MADRID CF",
    slug: "real-madrid-cf",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "REAL MADRID CF",
    description: "Camisetas oficiales del Real Madrid para la temporada 2026/2027. Elige entre primera, segunda o tercera equipación y consulta disponibilidad.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Top Ventas",
    accent: "lime",
    imageLabel: "REAL MADRID",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/real_madrid/1_1.png", alt: "Camiseta Real Madrid - Primera equipación frontal" },
          { image: "/kits/laliga/real_madrid/1_2.jpg", alt: "Camiseta Real Madrid - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/real_madrid/2_1.jpg", alt: "Camiseta Real Madrid - Segunda equipación frontal" },
          { image: "/kits/laliga/real_madrid/2_2.jpg", alt: "Camiseta Real Madrid - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/laliga/real_madrid/3_1.jpg", alt: "Camiseta Real Madrid - Tercera equipación frontal" },
          { image: "/kits/laliga/real_madrid/3_2.jpg", alt: "Camiseta Real Madrid - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "ATLÉTICO DE MADRID",
    slug: "atletico-de-madrid",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "ATLÉTICO DE MADRID",
    description: "Camisetas oficiales del Atlético de Madrid para la temporada 2026/2027. Colección con primera, segunda y tercera equipación rojiblanca.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Novedad",
    accent: "red",
    imageLabel: "AT. MADRID",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/at_madrid/1_1.png", alt: "Camiseta Atlético de Madrid - Primera equipación frontal" },
          { image: "/kits/laliga/at_madrid/1_2.png", alt: "Camiseta Atlético de Madrid - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/at_madrid/2_1.jpeg", alt: "Camiseta Atlético de Madrid - Segunda equipación frontal" },
          { image: "/kits/laliga/at_madrid/2_2.jpeg", alt: "Camiseta Atlético de Madrid - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/laliga/at_madrid/3_1.jpg", alt: "Camiseta Atlético de Madrid - Tercera equipación frontal" },
          { image: "/kits/laliga/at_madrid/3_2.jpg", alt: "Camiseta Atlético de Madrid - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "ATHLETIC CLUB",
    slug: "athletic-club",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "ATHLETIC CLUB",
    description: "Camiseta oficial del Athletic Club para la temporada 2026/2027 con las clásicas rayas rojiblancas y la esencia de San Mamés.",
    sizes: ["S", "M", "L", "XL"],
    accent: "red",
    imageLabel: "ATHLETIC",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/at_bilbao/1_1.jpg", alt: "Camiseta Athletic Club - Primera equipación frontal" },
          { image: "/kits/laliga/at_bilbao/1_2.jpg", alt: "Camiseta Athletic Club - Primera equipación trasera" },
          { image: "/kits/laliga/at_bilbao/1_3.jpg", alt: "Camiseta Athletic Club - Detalle equipación" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "REAL BETIS",
    slug: "real-betis",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "REAL BETIS",
    description: "Camisetas oficiales del Real Betis Balompié para la temporada 2026/2027. Disponibles en primera equipación verdiblanca y segunda equipación.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Popular",
    accent: "green",
    imageLabel: "BETIS",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/betis/1_1.jpg", alt: "Camiseta Real Betis - Primera equipación frontal" },
          { image: "/kits/laliga/betis/1_2.jpg", alt: "Camiseta Real Betis - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/betis/2_1.jpg", alt: "Camiseta Real Betis - Segunda equipación frontal" },
          { image: "/kits/laliga/betis/2_2.jpg", alt: "Camiseta Real Betis - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "RC CELTA DE VIGO",
    slug: "celta-de-vigo",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "RC CELTA",
    description: "Camisetas oficiales del RC Celta de Vigo para la temporada 2026/2027. Diseño en azul celeste representativo de Balaídos.",
    sizes: ["S", "M", "L", "XL"],
    accent: "sky",
    imageLabel: "CELTA",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/celta_vigo/1_1.jpg", alt: "Camiseta Celta de Vigo - Primera equipación frontal" },
          { image: "/kits/laliga/celta_vigo/1_2.jpg", alt: "Camiseta Celta de Vigo - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/celta_vigo/2_1.jpg", alt: "Camiseta Celta de Vigo - Segunda equipación frontal" },
          { image: "/kits/laliga/celta_vigo/2_2.jpg", alt: "Camiseta Celta de Vigo - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "RC DEPORTIVO DE LA CORUÑA",
    slug: "rc-deportivo",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "RC DEPORTIVO",
    description: "Camiseta oficial blanquiazul del RC Deportivo de La Coruña para la temporada 2026/2027. Tradición y orgullo de Riazor.",
    sizes: ["S", "M", "L", "XL"],
    accent: "blue",
    imageLabel: "DÉPOR",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/deportivo/1_1.jpg", alt: "Camiseta Deportivo de La Coruña - Primera equipación frontal" },
          { image: "/kits/laliga/deportivo/1_2.jpg", alt: "Camiseta Deportivo de La Coruña - Primera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "RCD ESPANYOL",
    slug: "rcd-espanyol",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "RCD ESPANYOL",
    description: "Camiseta oficial blanquiazul del RCD Espanyol de Barcelona para la temporada 2026/2027.",
    sizes: ["S", "M", "L", "XL"],
    accent: "blue",
    imageLabel: "ESPANYOL",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/espanyol/1_1.jpg", alt: "Camiseta RCD Espanyol - Primera equipación frontal" },
          { image: "/kits/laliga/espanyol/1_2.jpg", alt: "Camiseta RCD Espanyol - Primera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "GETAFE CF",
    slug: "getafe-cf",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "GETAFE CF",
    description: "Camiseta oficial azulona del Getafe CF para la temporada 2026/2027 en el Coliseum.",
    sizes: ["S", "M", "L", "XL"],
    accent: "blue",
    imageLabel: "GETAFE",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/getafe/1_1.jpeg", alt: "Camiseta Getafe CF - Primera equipación frontal" },
          { image: "/kits/laliga/getafe/1_2.jpeg", alt: "Camiseta Getafe CF - Primera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "MÁLAGA CF",
    slug: "malaga-cf",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "MÁLAGA CF",
    description: "Camisetas oficiales del Málaga CF para la temporada 2026/2027 con sus colores blanquiazules y diseño de La Rosaleda.",
    sizes: ["S", "M", "L", "XL"],
    accent: "sky",
    imageLabel: "MÁLAGA",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/malaga/1_1.jpg", alt: "Camiseta Málaga CF - Primera equipación frontal" },
          { image: "/kits/laliga/malaga/1_2.jpg", alt: "Camiseta Málaga CF - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/malaga/2_1.jpg", alt: "Camiseta Málaga CF - Segunda equipación frontal" },
          { image: "/kits/laliga/malaga/2_2.jpg", alt: "Camiseta Málaga CF - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "CA OSASUNA",
    slug: "ca-osasuna",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "CA OSASUNA",
    description: "Camiseta oficial rojilla del CA Osasuna para la temporada 2026/2027 con el carácter y la garra de El Sadar.",
    sizes: ["S", "M", "L", "XL"],
    accent: "red",
    imageLabel: "OSASUNA",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/osasuna/1_1.jpg", alt: "Camiseta CA Osasuna - Primera equipación frontal" },
          { image: "/kits/laliga/osasuna/1_2.png", alt: "Camiseta CA Osasuna - Primera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "RAYO VALLECANO",
    slug: "rayo-vallecano",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "RAYO VALLECANO",
    description: "Camisetas oficiales del Rayo Vallecano para la temporada 2026/2027 con su mítica franja roja y espíritu de barrio.",
    sizes: ["S", "M", "L", "XL"],
    accent: "red",
    imageLabel: "RAYO",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/rayo_vallecano/1_1.jpg", alt: "Camiseta Rayo Vallecano - Primera equipación frontal" },
          { image: "/kits/laliga/rayo_vallecano/1_2.jpg", alt: "Camiseta Rayo Vallecano - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/rayo_vallecano/2_1.jpg", alt: "Camiseta Rayo Vallecano - Segunda equipación frontal" },
          { image: "/kits/laliga/rayo_vallecano/2_2.jpg", alt: "Camiseta Rayo Vallecano - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "REAL SOCIEDAD",
    slug: "real-sociedad",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "REAL SOCIEDAD",
    description: "Camiseta oficial txuri-urdin de la Real Sociedad para la temporada 2026/2027. Calidad y diseño del Reale Arena.",
    sizes: ["S", "M", "L", "XL"],
    accent: "blue",
    imageLabel: "R. SOCIEDAD",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/real_sociedad/1_1.jpg", alt: "Camiseta Real Sociedad - Primera equipación frontal" },
          { image: "/kits/laliga/real_sociedad/1_2.png", alt: "Camiseta Real Sociedad - Primera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "SEVILLA FC",
    slug: "sevilla-fc",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "SEVILLA FC",
    description: "Camisetas oficiales del Sevilla FC para la temporada 2026/2027. Elige entre primera equipación blanca o segunda equipación roja.",
    sizes: ["S", "M", "L", "XL"],
    accent: "red",
    imageLabel: "SEVILLA",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/sevilla/1_1.png", alt: "Camiseta Sevilla FC - Primera equipación frontal" },
          { image: "/kits/laliga/sevilla/1_2.png", alt: "Camiseta Sevilla FC - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/sevilla/2_1.jpg", alt: "Camiseta Sevilla FC - Segunda equipación frontal" },
          { image: "/kits/laliga/sevilla/2_2.jpg", alt: "Camiseta Sevilla FC - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "VALENCIA CF",
    slug: "valencia-cf",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "VALENCIA CF",
    description: "Camisetas oficiales del Valencia CF para la temporada 2026/2027. Disponibles en primera equipación clásica y segunda equipación.",
    sizes: ["S", "M", "L", "XL"],
    accent: "orange",
    imageLabel: "VALENCIA",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/valencia/1_1.jpg", alt: "Camiseta Valencia CF - Primera equipación frontal" },
          { image: "/kits/laliga/valencia/1_2.jpg", alt: "Camiseta Valencia CF - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/laliga/valencia/2_1.jpg", alt: "Camiseta Valencia CF - Segunda equipación frontal" },
          { image: "/kits/laliga/valencia/2_2.jpg", alt: "Camiseta Valencia CF - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "VILLARREAL CF",
    slug: "villarreal-cf",
    league: "LaLiga",
    category: "Equipación oficial 26/27",
    team: "VILLARREAL CF",
    description: "Camiseta oficial del submarino amarillo, Villarreal CF, para la temporada 2026/2027 con tejido de máximo rendimiento en La Cerámica.",
    sizes: ["S", "M", "L", "XL"],
    accent: "yellow",
    imageLabel: "VILLARREAL",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/laliga/villareal/1_1.jpg", alt: "Camiseta Villarreal CF - Primera equipación frontal" },
          { image: "/kits/laliga/villareal/1_2.jpg", alt: "Camiseta Villarreal CF - Primera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "ARSENAL FC",
    slug: "arsenal-fc",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "ARSENAL FC",
    description: "Camisetas oficiales del Arsenal FC para la temporada 2026/2027. Disponibles en primera, segunda y tercera equipación de los Gunners.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Top Ventas",
    accent: "red",
    imageLabel: "ARSENAL",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/arsenal/1_1.jpg", alt: "Camiseta Arsenal - Primera equipación frontal" },
          { image: "/kits/premier/arsenal/1_2.jpg", alt: "Camiseta Arsenal - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/arsenal/2_1.jpg", alt: "Camiseta Arsenal - Segunda equipación frontal" },
          { image: "/kits/premier/arsenal/2_2.jpg", alt: "Camiseta Arsenal - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/arsenal/3_1.jpeg", alt: "Camiseta Arsenal - Tercera equipación frontal" },
          { image: "/kits/premier/arsenal/3_2.jpeg", alt: "Camiseta Arsenal - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "ASTON VILLA FC",
    slug: "aston-villa-fc",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "ASTON VILLA",
    description: "Camisetas oficiales del Aston Villa para la temporada 2026/2027. Elige entre segunda y tercera equipación de Villa Park.",
    sizes: ["S", "M", "L", "XL"],
    accent: "purple",
    imageLabel: "ASTON VILLA",
    kits: [
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/aston_villa/2_1.jpg", alt: "Camiseta Aston Villa - Segunda equipación frontal" },
          { image: "/kits/premier/aston_villa/2_2.jpg", alt: "Camiseta Aston Villa - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/aston_villa/3_1.jpg", alt: "Camiseta Aston Villa - Tercera equipación frontal" },
          { image: "/kits/premier/aston_villa/3_2.jpg", alt: "Camiseta Aston Villa - Tercera equipación trasera" },
          { image: "/kits/premier/aston_villa/3_3.jpg", alt: "Camiseta Aston Villa - Detalle tercera equipación" },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "BRIGHTON & HOVE ALBION",
    slug: "brighton-hove-albion",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "BRIGHTON",
    description: "Camisetas oficiales del Brighton & Hove Albion para la temporada 2026/2027. Primera, segunda y tercera equipación de los Seagulls.",
    sizes: ["S", "M", "L", "XL"],
    accent: "sky",
    imageLabel: "BRIGHTON",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/brighton/1_1.jpeg", alt: "Camiseta Brighton - Primera equipación frontal" },
          { image: "/kits/premier/brighton/1_2.jpeg", alt: "Camiseta Brighton - Primera equipación trasera" },
          { image: "/kits/premier/brighton/1_3.jpeg", alt: "Camiseta Brighton - Detalle primera equipación" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/brighton/2_1.jpg", alt: "Camiseta Brighton - Segunda equipación frontal" },
          { image: "/kits/premier/brighton/2_2.jpg", alt: "Camiseta Brighton - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/brighton/3_1.jpeg", alt: "Camiseta Brighton - Tercera equipación frontal" },
          { image: "/kits/premier/brighton/3_2.jpeg", alt: "Camiseta Brighton - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "CHELSEA FC",
    slug: "chelsea-fc",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "CHELSEA FC",
    description: "Camisetas oficiales del Chelsea FC para la temporada 2026/2027. Colección completa en Stamford Bridge.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Popular",
    accent: "blue",
    imageLabel: "CHELSEA",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/chelsea/1_1.jpeg", alt: "Camiseta Chelsea - Primera equipación frontal" },
          { image: "/kits/premier/chelsea/1_2.jpeg", alt: "Camiseta Chelsea - Primera equipación trasera" },
          { image: "/kits/premier/chelsea/1_3.jpeg", alt: "Camiseta Chelsea - Detalle primera equipación" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/chelsea/2_1.jpg", alt: "Camiseta Chelsea - Segunda equipación frontal" },
          { image: "/kits/premier/chelsea/2_2.jpg", alt: "Camiseta Chelsea - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/chelsea/3_1.jpg", alt: "Camiseta Chelsea - Tercera equipación frontal" },
          { image: "/kits/premier/chelsea/3_2.jpg", alt: "Camiseta Chelsea - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "FULHAM FC",
    slug: "fulham-fc",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "FULHAM FC",
    description: "Camisetas oficiales del Fulham FC para la temporada 2026/2027. Primera, segunda y tercera equipación en Craven Cottage.",
    sizes: ["S", "M", "L", "XL"],
    accent: "dark",
    imageLabel: "FULHAM",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/fullham/1_1.jpeg", alt: "Camiseta Fulham - Primera equipación frontal" },
          { image: "/kits/premier/fullham/1_2.jpeg", alt: "Camiseta Fulham - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/fullham/2_1.jpeg", alt: "Camiseta Fulham - Segunda equipación frontal" },
          { image: "/kits/premier/fullham/2_2.jpeg", alt: "Camiseta Fulham - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/fullham/3_1.jpeg", alt: "Camiseta Fulham - Tercera equipación frontal" },
          { image: "/kits/premier/fullham/3_2.jpeg", alt: "Camiseta Fulham - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "IPSWICH TOWN FC",
    slug: "ipswich-town-fc",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "IPSWICH TOWN",
    description: "Camisetas oficiales del Ipswich Town FC para la temporada 2026/2027. Disponibles en primera y segunda equipación en Portman Road.",
    sizes: ["S", "M", "L", "XL"],
    accent: "blue",
    imageLabel: "IPSWICH",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/ipswich_town/1_1.jpeg", alt: "Camiseta Ipswich Town - Primera equipación frontal" },
          { image: "/kits/premier/ipswich_town/1_2.jpeg", alt: "Camiseta Ipswich Town - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/ipswich_town/2_1.jpeg", alt: "Camiseta Ipswich Town - Segunda equipación frontal" },
          { image: "/kits/premier/ipswich_town/2_2.jpeg", alt: "Camiseta Ipswich Town - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 22,
    name: "LIVERPOOL FC",
    slug: "liverpool-fc",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "LIVERPOOL FC",
    description: "Camisetas oficiales del Liverpool FC para la temporada 2026/2027 con la esencia legendaria de Anfield.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Top Ventas",
    accent: "red",
    imageLabel: "LIVERPOOL",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/liverpool/1_1.jpg", alt: "Camiseta Liverpool - Primera equipación frontal" },
          { image: "/kits/premier/liverpool/1_2.jpg", alt: "Camiseta Liverpool - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/liverpool/2_1.jpg", alt: "Camiseta Liverpool - Segunda equipación frontal" },
          { image: "/kits/premier/liverpool/2_2.jpg", alt: "Camiseta Liverpool - Segunda equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 23,
    name: "MANCHESTER CITY",
    slug: "manchester-city",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "MANCHESTER CITY",
    description: "Camisetas oficiales del Manchester City para la temporada 2026/2027 en el Etihad Stadium.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Novedad",
    accent: "sky",
    imageLabel: "MAN. CITY",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/m_city/1_1.jpeg", alt: "Camiseta Manchester City - Primera equipación frontal" },
          { image: "/kits/premier/m_city/1_2.jpeg", alt: "Camiseta Manchester City - Primera equipación trasera" },
          { image: "/kits/premier/m_city/1_3.jpeg", alt: "Camiseta Manchester City - Detalle primera equipación" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/m_city/2_1.jpeg", alt: "Camiseta Manchester City - Segunda equipación frontal" },
          { image: "/kits/premier/m_city/2_2.jpeg", alt: "Camiseta Manchester City - Segunda equipación trasera" },
          { image: "/kits/premier/m_city/2_3.jpeg", alt: "Camiseta Manchester City - Detalle segunda equipación" },
        ],
      },
    ],
  },
  {
    id: 24,
    name: "MANCHESTER UNITED",
    slug: "manchester-united",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "MANCHESTER UNITED",
    description: "Camisetas oficiales del Manchester United para la temporada 2026/2027. Primera, segunda y tercera equipación de los Red Devils.",
    sizes: ["S", "M", "L", "XL"],
    badge: "Popular",
    accent: "red",
    imageLabel: "MAN. UNITED",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/m_united/1_1.jpg", alt: "Camiseta Manchester United - Primera equipación frontal" },
          { image: "/kits/premier/m_united/1_2.jpg", alt: "Camiseta Manchester United - Primera equipación trasera" },
          { image: "/kits/premier/m_united/1_3.jpg", alt: "Camiseta Manchester United - Detalle primera equipación" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/m_united/2_1.jpg", alt: "Camiseta Manchester United - Segunda equipación frontal" },
          { image: "/kits/premier/m_united/2_2.jpg", alt: "Camiseta Manchester United - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/m_united/3_1.jpg", alt: "Camiseta Manchester United - Tercera equipación frontal" },
          { image: "/kits/premier/m_united/3_2.jpg", alt: "Camiseta Manchester United - Tercera equipación trasera" },
        ],
      },
    ],
  },
  {
    id: 25,
    name: "NEWCASTLE UNITED",
    slug: "newcastle-united",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "NEWCASTLE UNITED",
    description: "Camisetas oficiales del Newcastle United para la temporada 2026/2027 en St James' Park.",
    sizes: ["S", "M", "L", "XL"],
    accent: "dark",
    imageLabel: "NEWCASTLE",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/newcastle/1_1.jpeg", alt: "Camiseta Newcastle - Primera equipación frontal" },
          { image: "/kits/premier/newcastle/1_2.jpeg", alt: "Camiseta Newcastle - Primera equipación trasera" },
          { image: "/kits/premier/newcastle/1_3.jpeg", alt: "Camiseta Newcastle - Detalle primera equipación" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/newcastle/2_1.jpg", alt: "Camiseta Newcastle - Segunda equipación frontal" },
          { image: "/kits/premier/newcastle/2_2.jpg", alt: "Camiseta Newcastle - Segunda equipación trasera" },
          { image: "/kits/premier/newcastle/2_3.jpg", alt: "Camiseta Newcastle - Detalle segunda equipación" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/newcastle/3_1.jpg", alt: "Camiseta Newcastle - Tercera equipación frontal" },
          { image: "/kits/premier/newcastle/3_2.jpg", alt: "Camiseta Newcastle - Tercera equipación trasera" },
          { image: "/kits/premier/newcastle/3_3.jpg", alt: "Camiseta Newcastle - Detalle tercera equipación" },
        ],
      },
    ],
  },
  {
    id: 26,
    name: "TOTTENHAM HOTSPUR",
    slug: "tottenham-hotspur",
    league: "Premier League",
    category: "Equipación oficial 26/27",
    team: "TOTTENHAM HOTSPUR",
    description: "Camisetas oficiales del Tottenham Hotspur para la temporada 2026/2027. Primera, segunda y tercera equipación de los Spurs.",
    sizes: ["S", "M", "L", "XL"],
    accent: "dark",
    imageLabel: "SPURS",
    kits: [
      {
        name: "Primera equipación",
        images: [
          { image: "/kits/premier/tottenham/1_1.png", alt: "Camiseta Tottenham - Primera equipación frontal" },
          { image: "/kits/premier/tottenham/1_2.png", alt: "Camiseta Tottenham - Primera equipación trasera" },
        ],
      },
      {
        name: "Segunda equipación",
        images: [
          { image: "/kits/premier/tottenham/2_1.jpg", alt: "Camiseta Tottenham - Segunda equipación frontal" },
          { image: "/kits/premier/tottenham/2_2.jpg", alt: "Camiseta Tottenham - Segunda equipación trasera" },
        ],
      },
      {
        name: "Tercera equipación",
        images: [
          { image: "/kits/premier/tottenham/3_1.jpg", alt: "Camiseta Tottenham - Tercera equipación frontal" },
          { image: "/kits/premier/tottenham/3_2.jpg", alt: "Camiseta Tottenham - Tercera equipación trasera" },
        ],
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
