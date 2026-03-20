export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  source: "google" | "manual";
};

export const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "CEO",
    company: "Tienda Online MG",
    avatar: "M",
    text: "AtraeLab transformó nuestra estrategia de Meta Ads completamente. En 3 meses triplicamos nuestro ROAS y el equipo siempre está disponible para resolver dudas.",
    rating: 5,
    source: "google",
  },
  {
    name: "Andrés López",
    role: "Director Comercial",
    company: "Inmobiliaria López",
    avatar: "A",
    text: "El CRM LeadShield fue clave para que ningún lead se perdiera. Ahora cerramos el 40% de los prospectos que antes ignorábamos. La inversión se pagó sola en el primer mes.",
    rating: 5,
    source: "google",
  },
  {
    name: "Carolina Ruiz",
    role: "Fundadora",
    company: "Marca de Ropa CR",
    avatar: "C",
    text: "Probamos varias agencias y ninguna daba resultados reales. AtraeLab fue la primera que nos mostró datos claros desde la semana 1. Profesionales de verdad.",
    rating: 5,
    source: "google",
  },
  {
    name: "Sebastián Torres",
    role: "Gerente de Marketing",
    company: "SaaS B2B",
    avatar: "S",
    text: "Pasamos de gastar mal a invertir bien. Con Google Ads y TikTok en simultáneo bajamos el CPA un 35% en 60 días. Resultados que hablan por sí solos.",
    rating: 5,
    source: "manual",
  },
  {
    name: "Valentina Morales",
    role: "Directora",
    company: "Clínica Estética VM",
    avatar: "V",
    text: "El equipo entendió nuestro nicho desde el día uno. Las campañas de Meta Ads para tratamientos estéticos generan leads de calidad que realmente se convierten en clientes.",
    rating: 5,
    source: "google",
  },
];
