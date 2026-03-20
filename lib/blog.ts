export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  image: string;
}

// Static blog post registry — easy to extend
export const blogPosts: BlogPost[] = [
  {
    slug: "como-triplicar-roas-meta-ads-90-dias",
    title: "Cómo triplicar tu ROAS en Meta Ads en 90 días",
    description:
      "Una guía práctica con ejemplos reales sobre cómo optimizar tus campañas de Facebook e Instagram para multiplicar tu retorno por 3 en menos de 3 meses.",
    date: "2025-01-15",
    author: "AtraeLab",
    readTime: "8 min",
    tags: ["Meta Ads", "ROAS", "Optimización"],
    image: "/blog/meta-roas.jpg",
  },
  {
    slug: "google-ads-vs-meta-ads-cual-usar",
    title: "Google Ads vs Meta Ads: cuál elegir según tu negocio",
    description:
      "Comparativa completa entre las dos plataformas publicitarias más poderosas del mundo. Descubrí cuál es la correcta para tu negocio y cuándo usarlas juntas.",
    date: "2025-01-22",
    author: "AtraeLab",
    readTime: "7 min",
    tags: ["Google Ads", "Meta Ads", "Estrategia"],
    image: "/blog/google-vs-meta.jpg",
  },
  {
    slug: "tiktok-ads-latam-guia-completa",
    title: "TikTok Ads para negocios en LATAM: guía 2025",
    description:
      "Todo lo que necesitás saber para lanzar y escalar campañas de TikTok Ads en el mercado latinoamericano. Formatos, creatividades y estrategias que funcionan.",
    date: "2025-02-03",
    author: "AtraeLab",
    readTime: "8 min",
    tags: ["TikTok Ads", "LATAM", "Video"],
    image: "/blog/tiktok-latam.jpg",
  },
  {
    slug: "network-marketing-digital-leads-con-pauta",
    title: "Network Marketing digital: genera leads con pauta",
    description:
      "Cómo generar leads calificados para tu negocio de network marketing usando publicidad digital profesional. Estrategias de captación, duplicación y conversión.",
    date: "2025-02-18",
    author: "AtraeLab",
    readTime: "7 min",
    tags: ["Network Marketing", "Leads", "Pauta Digital"],
    image: "/blog/network-marketing.jpg",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
