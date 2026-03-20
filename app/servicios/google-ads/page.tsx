import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads para Network Marketing y Negocios | AtraeLab",
  description:
    "Aparecé cuando tu cliente ideal ya está buscando una oportunidad de negocio. Search, PMax y Display optimizados para LATAM y Europa. Desde $250 USD/mes.",
  keywords: [
    "google ads network marketing latam",
    "google ads mlm argentina",
    "google ads oportunidad negocio",
    "google search ads latam",
    "publicidad google argentina españa",
    "captacion leads google ads",
  ],
  openGraph: {
    title: "Google Ads para tu Negocio | AtraeLab",
    description:
      "CTR 8.4% vs 2.1% de industria. CPA $6 USD por lead calificado. 3x más conversiones para InCruises en LATAM.",
    url: "https://atraelab.com/servicios/google-ads",
  },
};

const includes = [
  "Campañas Search para keywords de alta intención",
  "Performance Max optimizado para conversiones",
  "Display en sitios relevantes de LATAM y Europa",
  "Shopping para productos físicos",
  "Negative keywords para eliminar tráfico basura",
  "Smart bidding con datos reales de conversión",
  "Remarketing en toda la red de Google",
  "Reporte semanal en LeadShield CRM",
];

const profiles = [
  {
    icon: "🔍",
    title: "Negocios que venden productos o servicios online",
    description:
      "Si tu cliente busca lo que ofrecés en Google, este es tu canal. Capturamos esa intención en el momento exacto en que están listos para comprar o unirse.",
  },
  {
    icon: "🤝",
    title: "Networkers en búsquedas de oportunidades",
    description:
      'Hay miles de búsquedas mensuales de "ganar dinero online", "oportunidad de negocio LATAM" y similares. Aparecer ahí con tu propuesta es una ventaja enorme.',
  },
  {
    icon: "💼",
    title: "Empresas con inversión desde $250 USD/mes",
    description:
      "Estructuramos campañas eficientes desde presupuestos mínimos. Smart bidding y negative keywords para que cada centavo cuente desde el primer día.",
  },
];

const faq = [
  {
    q: "¿Cuál es la inversión mínima en Google Ads?",
    a: "Trabajamos desde $250 USD/mes en pauta de Google. Con ese presupuesto podemos correr campañas Search con keywords de alta intención y datos suficientes para optimizar el smart bidding.",
  },
  {
    q: "¿Search o Performance Max para network marketing?",
    a: "Dependiendo del objetivo te recomendamos la mejor estrategia. Para captación de distribuidores arrancamos con Search (keywords de intención) y escalamos a Performance Max cuando ya tenemos suficiente historial de conversiones.",
  },
  {
    q: "¿Funciona Google Ads para network marketing?",
    a: "Sí. Hay mucha búsqueda activa de oportunidades de negocio en Google. Lo demostramos con InCruises: campaña Search para 'ganar dinero online' y 'oportunidad de negocio LATAM' con CTR de 8.4% vs 2.1% de la industria.",
  },
  {
    q: "¿Cuánto tarda en dar resultados?",
    a: "Las primeras conversiones aparecen en 48-72 horas tras el lanzamiento. La optimización completa llega a los 30-60 días cuando el algoritmo de smart bidding ya aprendió el perfil de conversión ideal.",
  },
  {
    q: "¿Cómo sé que funciona?",
    a: "Tracking completo de conversiones configurado desde el día 1, más dashboard en tiempo real en LeadShield CRM. Ves exactamente qué keyword generó cada lead y cuánto costó.",
  },
];

// Google "G" multicolor paths
const GoogleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.2-2.7-.5-4z" fill="#FBC02D"/>
    <path d="M6.3 14.7l7 5.1C15.1 16.2 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 16.3 3 9.7 7.9 6.3 14.7z" fill="#E53935"/>
    <path d="M24 45c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.6C29.5 36.1 26.9 37 24 37c-6.1 0-10.7-3.1-11.8-7.5l-7 5.4C8.7 41.7 15.8 45 24 45z" fill="#4CAF50"/>
    <path d="M44.5 20H24v8.5h11.8c-.6 2.2-2 4.1-3.8 5.4l6.6 5.6C42.4 36.2 45 30.6 45 24c0-1.3-.2-2.7-.5-4z" fill="#1565C0"/>
  </svg>
);

function AccordionItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-white/8 last:border-0">
      <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-white font-semibold text-sm hover:text-[#4285F4] transition-colors">
        {q}
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs group-open:border-[#4285F4]/60 group-open:text-[#4285F4] group-open:bg-[#4285F4]/10 transition-all">
          +
        </span>
      </summary>
      <p className="text-[#a1a1aa] text-sm pb-5 leading-relaxed">{a}</p>
    </details>
  );
}

export default function GoogleAdsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* HERO */}
      <div
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 15% 0%, rgba(66,133,244,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 10%, rgba(52,168,83,0.05) 0%, transparent 50%)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(66,133,244,1) 1px, transparent 1px), linear-gradient(90deg, rgba(66,133,244,1) 1px, transparent 1px)",
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
            <span className="text-white">Google Ads</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Platform badge */}
              <div
                className="inline-flex items-center gap-3 mb-8 p-3 pr-5 rounded-2xl"
                style={{ background: "rgba(66,133,244,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <GoogleIcon />
                </div>
                <div>
                  <p
                    className="font-bold text-xs uppercase tracking-widest"
                    style={{
                      background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC04, #34A853)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Google Ads
                  </p>
                  <p className="text-[#a1a1aa] text-xs">Search · PMax · Display · Shopping</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                GOOGLE ADS PARA{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #c8f000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  TU NEGOCIO
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-10">
                Aparecé cuando tu cliente ideal ya está buscando una oportunidad de negocio o tu producto. La intención de compra más alta de todos los canales digitales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #4285F4, #1a73e8)",
                    color: "white",
                    boxShadow: "0 0 35px rgba(66,133,244,0.4)",
                  }}
                >
                  QUIERO APARECER EN GOOGLE →
                </Link>
                <Link
                  href="/blog/google-ads-vs-meta-ads-cual-usar"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#4285F4]/50 hover:text-[#4285F4] transition-all duration-300"
                >
                  Google vs Meta → ¿cuál usar?
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8.4%", label: "CTR promedio Search", sub: "vs 2.1% del mercado", color: "#4285F4" },
                { value: "$6 USD", label: "CPA por lead calificado", sub: "campaña InCruises LATAM", color: "#34A853" },
                { value: "3x", label: "Más conversiones", sub: "vs método anterior", color: "#FBBC04" },
                { value: "$250", label: "Inversión mínima USD/mes", sub: "para empezar con pauta", color: "#EA4335" },
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
              style={{ background: "linear-gradient(to bottom, #4285F4, #34A853)" }}
            />
            <h2 className="text-white font-black text-2xl sm:text-3xl uppercase">¿Qué incluye el servicio?</h2>
          </div>
          <p className="text-[#a1a1aa] text-sm mb-8 pl-4">
            Estructura completa de campañas para capturar intención de búsqueda desde el primer día.
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
                  style={{ background: "rgba(66,133,244,0.15)", color: "#4285F4", border: "1px solid rgba(66,133,244,0.3)" }}
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
              background: "linear-gradient(135deg, rgba(66,133,244,0.08) 0%, rgba(52,168,83,0.05) 50%, rgba(0,0,0,0.5) 100%)",
              border: "1px solid rgba(66,133,244,0.25)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #4285F4 0%, transparent 70%)",
                transform: "translate(25%, -25%)",
              }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(66,133,244,0.15)", color: "#4285F4", border: "1px solid rgba(66,133,244,0.35)" }}
              >
                ✦ InCruises — LATAM Search Campaign
              </div>
              <blockquote className="text-white text-lg sm:text-xl font-semibold leading-relaxed mb-10 max-w-3xl">
                "Campaña Search para keywords como 'ganar dinero online' y 'oportunidad de negocio LATAM'. CPA: $6 USD por lead calificado. CTR promedio 8.4% cuando la industria promedia 2.1%."
              </blockquote>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "$6 USD", label: "CPA por lead", color: "#4285F4" },
                  { value: "8.4%", label: "CTR promedio", color: "#34A853" },
                  { value: "3x", label: "Más conversiones", color: "#FBBC04" },
                  { value: "2.1%", label: "Avg industria CTR", color: "#EA4335" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
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
              style={{ background: "linear-gradient(to bottom, #4285F4, #34A853)" }}
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
              style={{ background: "linear-gradient(to bottom, #4285F4, #34A853)" }}
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
            background: "linear-gradient(135deg, rgba(66,133,244,0.1) 0%, rgba(52,168,83,0.05) 50%, rgba(200,240,0,0.04) 100%)",
            border: "1px solid rgba(66,133,244,0.25)",
          }}
        >
          <div
            className="absolute bottom-0 left-1/2 w-96 h-48 opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, #4285F4 0%, transparent 70%)",
              transform: "translate(-50%, 50%)",
            }}
          />
          <div className="relative">
            <p
              className="font-bold text-xs uppercase tracking-widest mb-3"
              style={{
                background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC04, #34A853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Google Ads · Search · PMax · Display
            </p>
            <h3 className="text-white font-black text-3xl sm:text-4xl mb-4">
              ¿Listo para aparecer en Google?
            </h3>
            <p className="text-[#a1a1aa] text-lg mb-8 max-w-xl mx-auto">
              Contanos tu negocio y te mostramos en 30 minutos qué keywords usaría tu cliente ideal para encontrarte.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wide px-12 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #4285F4, #1a73e8)",
                color: "white",
                boxShadow: "0 0 50px rgba(66,133,244,0.45)",
              }}
            >
              QUIERO APARECER EN GOOGLE →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
