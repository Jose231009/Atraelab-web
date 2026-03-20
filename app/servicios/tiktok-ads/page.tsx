import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Ads para Network Marketing — LATAM | AtraeLab",
  description:
    "Llegá a millones de personas en LATAM y Europa con video corto. El canal de mayor crecimiento para networkers. CPM desde $1.2 USD. Desde $250 USD/mes.",
  keywords: [
    "tiktok ads network marketing latam",
    "tiktok ads mlm argentina españa",
    "tiktok ads distribuidores",
    "spark ads network marketing",
    "publicidad tiktok latam",
    "tiktok ads para negocios",
  ],
  openGraph: {
    title: "TikTok Ads para Network Marketing | AtraeLab",
    description:
      "2.3M impresiones en Argentina y España en 60 días. CPM $1.2 USD. CTR 4.7%. 500+ distribuidores captados con Spark Ads.",
    url: "https://atraelab.com/servicios/tiktok-ads",
  },
};

const includes = [
  "Spark Ads con contenido orgánico amplificado",
  "In-Feed Ads con creatividades nativas",
  "UGC strategy para reducir CPA al mínimo",
  "Audiencias de personas interesadas en oportunidades",
  "Pixel & Events configurados para tracking exacto",
  "Tendencias locales por país (ARG, ESP, MEX, COL)",
  "A/B testing de hooks y CTAs en video",
  "Reporte semanal en LeadShield CRM",
];

const profiles = [
  {
    icon: "📱",
    title: "Networkers que quieren llegar a audiencias jóvenes",
    description:
      "TikTok tiene la audiencia más amplia y activa de LATAM entre 18-35 años. Si tu negocio apunta a ese rango etario, el CPM más bajo del mercado te da una ventaja brutal.",
  },
  {
    icon: "🎬",
    title: "Líderes de red con mentalidad de contenido",
    description:
      "Los testimonios en video son el formato más convertidor para network marketing. Te ayudamos a estructurar la narrativa y amplificamos con pauta el contenido que ya grabás.",
  },
  {
    icon: "💰",
    title: "Negocios con inversión desde $250 USD/mes",
    description:
      "El CPM más bajo de todas las plataformas ($1.2 USD promedio en nuestras campañas) significa que con menos presupuesto llegás a más personas que en cualquier otro canal.",
  },
];

const faq = [
  {
    q: "¿Necesito crear los videos yo?",
    a: "Te asesoramos en la estrategia de contenido, vos grabás con el teléfono. Los videos más naturales y auténticos (UGC) convierten mejor que los producidos en estudio. Te damos el brief exacto de qué decir y cómo.",
  },
  {
    q: "¿Funciona TikTok Ads para network marketing?",
    a: "TikTok es la plataforma con mayor crecimiento para MLM y network marketing en LATAM. Los testimonios reales de distribuidores en formato Spark Ads tienen un CTR hasta 3x mayor que otros formatos.",
  },
  {
    q: "¿Cuál es la inversión mínima en TikTok Ads?",
    a: "Trabajamos desde $250 USD/mes en pauta de TikTok. El CPM promedio de $1.2 USD hace que ese presupuesto llegue a muchísimas más personas que el mismo monto en Meta o Google.",
  },
  {
    q: "¿En qué países operan?",
    a: "Cubrimos LATAM completo (Argentina, México, Colombia, Chile, Perú, Uruguay) y España/Europa. Adaptamos las tendencias, el copy y los hooks a cada mercado.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Dashboard en tiempo real en LeadShield CRM. Ves impresiones, CTR, costo por lead y conversiones. Además te mandamos un reporte semanal con análisis de qué hooks y formatos están funcionando mejor.",
  },
];

// TikTok logo with double shadow effect
const TikTokIcon = () => (
  <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
    <path
      d="M20.5 5h5.8v20a5.4 5.4 0 005.4 5.4 5.4 5.4 0 005.4-5.4v-3a14 14 0 003.9.6V16.5a9 9 0 01-4.2-1.1V29a11.2 11.2 0 01-11.2 11.2A11.2 11.2 0 0114.4 29a11.2 11.2 0 019.9-11.1v6.1a5.4 5.4 0 00-4.1 5 5.4 5.4 0 005.4 5.4"
      fill="#69C9D0"
      transform="translate(-1.2, 1.2)"
    />
    <path
      d="M20.5 5h5.8v20a5.4 5.4 0 005.4 5.4 5.4 5.4 0 005.4-5.4v-3a14 14 0 003.9.6V16.5a9 9 0 01-4.2-1.1V29a11.2 11.2 0 01-11.2 11.2A11.2 11.2 0 0114.4 29a11.2 11.2 0 019.9-11.1v6.1a5.4 5.4 0 00-4.1 5 5.4 5.4 0 005.4 5.4"
      fill="#EE1D52"
      transform="translate(1.2, -1.2)"
    />
    <path
      d="M20.5 5h5.8v20a5.4 5.4 0 005.4 5.4 5.4 5.4 0 005.4-5.4v-3a14 14 0 003.9.6V16.5a9 9 0 01-4.2-1.1V29a11.2 11.2 0 01-11.2 11.2A11.2 11.2 0 0114.4 29a11.2 11.2 0 019.9-11.1v6.1a5.4 5.4 0 00-4.1 5 5.4 5.4 0 005.4 5.4"
      fill="white"
    />
  </svg>
);

function AccordionItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-white/8 last:border-0">
      <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-white font-semibold text-sm hover:text-[#69C9D0] transition-colors">
        {q}
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs group-open:border-[#69C9D0]/60 group-open:text-[#69C9D0] group-open:bg-[#69C9D0]/10 transition-all">
          +
        </span>
      </summary>
      <p className="text-[#a1a1aa] text-sm pb-5 leading-relaxed">{a}</p>
    </details>
  );
}

export default function TikTokAdsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* HERO */}
      <div
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 20% 0%, rgba(105,201,208,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 80% 15%, rgba(238,29,82,0.07) 0%, transparent 55%)",
        }}
      >
        {/* Grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(105,201,208,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(238,29,82,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-10">
            <Link href="/" className="hover:text-[#c8f000] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-[#c8f000] transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white">TikTok Ads</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Platform badge */}
              <div
                className="inline-flex items-center gap-3 mb-8 p-3 pr-5 rounded-2xl"
                style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(105,201,208,0.3)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <TikTokIcon />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "#69C9D0" }}>
                    TikTok Ads
                  </p>
                  <p className="text-[#a1a1aa] text-xs">Spark Ads · In-Feed · UGC</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                TIKTOK ADS PARA{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #69C9D0 0%, #EE1D52 60%, #c8f000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  NETWORK MARKETING
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-10">
                Llegá a millones de personas en LATAM y Europa con video corto. El canal de mayor crecimiento para networkers — con el CPM más bajo del mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #69C9D0, #1cb5bd)",
                    color: "black",
                    boxShadow: "0 0 35px rgba(105,201,208,0.4)",
                  }}
                >
                  QUIERO CRECER EN TIKTOK →
                </Link>
                <Link
                  href="/blog/tiktok-ads-latam-guia-completa"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#69C9D0]/50 hover:text-[#69C9D0] transition-all duration-300"
                >
                  Guía TikTok Ads LATAM →
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2.3M", label: "Impresiones en 60 días", sub: "ARG + España — InCruises", color: "#69C9D0" },
                { value: "$1.2 USD", label: "CPM promedio", sub: "el más bajo del mercado", color: "#EE1D52" },
                { value: "4.7%", label: "CTR videos testimonios", sub: "Spark Ads distribuidores", color: "#69C9D0" },
                { value: "500+", label: "Distribuidores captados", sub: "campaña InCruises real", color: "#c8f000" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-black text-3xl leading-none mb-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-white font-bold text-sm">{s.label}</p>
                  <p className="text-[#a1a1aa] text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">

        {/* QUÉ INCLUYE */}
        <div className="mt-20 mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-1 h-8 rounded-full"
              style={{ background: "linear-gradient(to bottom, #69C9D0, #EE1D52)" }}
            />
            <h2 className="text-white font-black text-2xl sm:text-3xl uppercase">¿Qué incluye el servicio?</h2>
          </div>
          <p className="text-[#a1a1aa] text-sm mb-8 pl-4">
            Estrategia creativa nativa + pauta optimizada para el algoritmo de TikTok.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {includes.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black"
                  style={{ background: "rgba(105,201,208,0.15)", color: "#69C9D0", border: "1px solid rgba(105,201,208,0.3)" }}
                >
                  {i + 1}
                </div>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CASO DE ÉXITO */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#c8f000]" />
            <h2 className="text-white font-black text-2xl sm:text-3xl uppercase">Caso de éxito real</h2>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(105,201,208,0.08) 0%, rgba(238,29,82,0.05) 50%, rgba(0,0,0,0.5) 100%)",
              border: "1px solid rgba(105,201,208,0.25)",
            }}
          >
            {/* Glow cyan */}
            <div
              className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #69C9D0 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
            {/* Glow red */}
            <div
              className="absolute bottom-0 left-0 w-48 h-48 opacity-08 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #EE1D52 0%, transparent 70%)",
                transform: "translate(-30%, 30%)",
              }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(105,201,208,0.15)", color: "#69C9D0", border: "1px solid rgba(105,201,208,0.35)" }}
              >
                ✦ InCruises — Spark Ads Argentina & España
              </div>
              <blockquote className="text-white text-lg sm:text-xl font-semibold leading-relaxed mb-10 max-w-3xl">
                "Campaña de Spark Ads con testimonios de distribuidores. 2.3M de impresiones en Argentina y España en 60 días. CPM: $1.2 USD — el más bajo de todas las plataformas. CTR: 4.7% en videos de testimonios reales."
              </blockquote>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "2.3M", label: "Impresiones (60 días)", color: "#69C9D0" },
                  { value: "$1.2 USD", label: "CPM promedio", color: "#EE1D52" },
                  { value: "4.7%", label: "CTR testimonios", color: "#69C9D0" },
                  { value: "500+", label: "Nuevos distribuidores", color: "#c8f000" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(105,201,208,0.15)" }}
                  >
                    <p className="font-black text-2xl sm:text-3xl leading-none mb-2" style={{ color: m.color }}>{m.value}</p>
                    <p className="text-[#a1a1aa] text-xs">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PARA QUIÉN ES */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-1 h-8 rounded-full"
              style={{ background: "linear-gradient(to bottom, #69C9D0, #EE1D52)" }}
            />
            <h2 className="text-white font-black text-2xl sm:text-3xl uppercase">¿Para quién es?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-white font-black text-base mb-3">{p.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-1 h-8 rounded-full"
              style={{ background: "linear-gradient(to bottom, #69C9D0, #EE1D52)" }}
            />
            <h2 className="text-white font-black text-2xl sm:text-3xl uppercase">Preguntas frecuentes</h2>
          </div>
          <div
            className="rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-6">
              {faq.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div
          className="relative overflow-hidden p-10 sm:p-14 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(105,201,208,0.1) 0%, rgba(238,29,82,0.05) 60%, rgba(0,0,0,0.4) 100%)",
            border: "1px solid rgba(105,201,208,0.3)",
          }}
        >
          <div
            className="absolute bottom-0 left-1/2 w-96 h-48 opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, #69C9D0 0%, transparent 70%)",
              transform: "translate(-50%, 50%)",
            }}
          />
          <div className="relative">
            <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#69C9D0" }}>
              TikTok Ads · Spark Ads · UGC · Network Marketing
            </p>
            <h3 className="text-white font-black text-3xl sm:text-4xl mb-4">
              ¿Listo para crecer en TikTok?
            </h3>
            <p className="text-[#a1a1aa] text-lg mb-8 max-w-xl mx-auto">
              La oportunidad en TikTok para network marketing todavía está abierta. Los que entran ahora tienen la ventaja. Contanos tu negocio.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wide px-12 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #69C9D0, #1cb5bd)",
                color: "black",
                boxShadow: "0 0 50px rgba(105,201,208,0.45)",
              }}
            >
              QUIERO CRECER EN TIKTOK →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
