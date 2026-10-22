import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads para Network Marketing — Facebook e Instagram | AtraeLab",
  description:
    "Captamos distribuidores y clientes para tu red en Facebook e Instagram con pauta de alto rendimiento. Especialistas en MLM en LATAM y Europa. Desde $250 USD/mes.",
  keywords: [
    "meta ads network marketing",
    "facebook ads mlm latam",
    "instagram ads distribuidores",
    "publicidad facebook argentina",
    "meta ads españa latam",
    "captacion distribuidores facebook",
  ],
  openGraph: {
    title: "Meta Ads para Network Marketing | AtraeLab",
    description:
      "Generamos +1.200 leads calificados en 90 días para InCruises en Argentina y España. CPA: $8 USD. ROAS: 4.8x.",
    url: "https://atraelab.com/servicios/meta-ads",
  },
};

const includes = [
  "Configuración completa de Meta Business Suite",
  "Campañas de captación de distribuidores",
  "Audiencias lookalike de networkers activos",
  "Creatividades A/B testeadas para network marketing",
  "Retargeting dinámico de prospectos interesados",
  "Píxel + CAPI configurado para máximo tracking",
  "Campañas de reconocimiento de marca en LATAM y Europa",
  "Reporte semanal en LeadShield CRM",
];

const profiles = [
  {
    icon: "🌐",
    title: "Líderes de red que quieren duplicar su equipo",
    description:
      "Si ya tenés una red activa y querés escalar captando distribuidores calificados, Meta Ads es tu palanca. Llegamos a personas con perfil networker en tu mercado.",
  },
  {
    icon: "💸",
    title: "Networkers con inversión desde $250 USD/mes",
    description:
      "Diseñamos campañas adaptadas a tu presupuesto real. Desde $250 USD/mes ya podés tener campañas de captación corriendo en Facebook e Instagram con pauta profesional.",
  },
  {
    icon: "🚀",
    title: "Empresas MLM con expansión en LATAM/Europa",
    description:
      "Operamos en Argentina, España, México, Colombia y más. Si tu compañía quiere entrar o crecer en nuevos mercados, llevamos la pauta local con estrategia regional.",
  },
];

const faq = [
  {
    q: "¿Cuál es la inversión mínima en Meta Ads?",
    a: "Trabajamos desde $250 USD/mes en pauta publicitaria. Con ese presupuesto ya podemos lanzar campañas de captación de distribuidores con estructura profesional y datos suficientes para optimizar.",
  },
  {
    q: "¿Cuánto tiempo para ver resultados?",
    a: "Los primeros leads llegan en las primeras 72 horas de lanzada la campaña. La optimización completa del algoritmo ocurre en los primeros 30 días, cuando ya tenemos suficientes datos de conversión.",
  },
  {
    q: "¿Funciona Meta Ads para network marketing?",
    a: "Es nuestra especialidad. Tenemos casos documentados con InCruises, donde generamos +1.200 leads calificados en 90 días en Argentina y España con CPA de $8 USD por prospecto.",
  },
  {
    q: "¿Incluye las creatividades?",
    a: "Sí. Diseñamos, testeamos y optimizamos todos los creativos. Hacemos A/B testing de imágenes, videos y copies específicos para el perfil del networker en cada mercado.",
  },
  {
    q: "¿Cómo veo los resultados?",
    a: "Accedés a un dashboard en tiempo real dentro de LeadShield CRM. Ves cada lead generado, su estado, el costo y el ROAS de cada campaña. Sin Excel, sin esperar el reporte.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-white/8 last:border-0">
      <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-white font-semibold text-sm hover:text-[#0866FF] transition-colors">
        {q}
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs group-open:border-[#0866FF]/60 group-open:text-[#0866FF] group-open:bg-[#0866FF]/10 transition-all">
          +
        </span>
      </summary>
      <p className="text-[#a1a1aa] text-sm pb-5 leading-relaxed">{a}</p>
    </details>
  );
}

export default function MetaAdsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* HERO */}
      <div
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(8,102,255,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(200,240,0,0.04) 0%, transparent 60%)",
        }}
      >
        {/* Grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(8,102,255,1) 1px, transparent 1px)",
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
            <span className="text-white">Meta Ads</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Platform badge */}
              <div
                className="inline-flex items-center gap-3 mb-8 p-3 pr-5 rounded-2xl"
                style={{ background: "rgba(8,102,255,0.08)", border: "1px solid rgba(8,102,255,0.25)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(8,102,255,0.2)" }}
                >
                  <svg width="24" height="16" viewBox="0 0 44 28" fill="none">
                    <path
                      d="M8 14C8 9.8 10.4 7 13.5 7C15.8 7 17.7 8.5 19 12C19.8 14 20.5 16 21 18C21.5 16 22.2 14 23 12C24.3 8.5 26.2 7 28.5 7C31.6 7 34 9.8 34 14C34 18.2 31.6 21 28.5 21C26.2 21 24.3 19.5 23 16C22.2 14 21.5 12 21 10C20.5 12 19.8 14 19 16C17.7 19.5 15.8 21 13.5 21C10.4 21 8 18.2 8 14Z"
                      fill="#0866FF"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "#0866FF" }}>Meta Ads</p>
                  <p className="text-[#a1a1aa] text-xs">Facebook & Instagram</p>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                META ADS PARA{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #0866FF 0%, #0194F3 60%, #c8f000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  NETWORK MARKETING
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-10">
                Captamos distribuidores y clientes para tu red en Facebook e Instagram con pauta de alto rendimiento. Especialistas en redes de mercadeo en LATAM y Europa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  style={{ background: "#0866FF", color: "white", boxShadow: "0 0 35px rgba(8,102,255,0.4)" }}
                >
                  QUIERO CAPTAR DISTRIBUIDORES →
                </Link>
                <Link
                  href="/blog/como-triplicar-roas-meta-ads-90-dias"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#0866FF]/50 hover:text-[#0866FF] transition-all duration-300 w-full sm:w-auto"
                >
                  Leer guía de Meta Ads →
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4.8x", label: "ROAS InCruises", sub: "Argentina + España", color: "#0866FF" },
                { value: "+340%", label: "Nuevos distribuidores", sub: "Q1 campaña Meta", color: "#c8f000" },
                { value: "$8 USD", label: "CPA por lead calificado", sub: "promedio campañas NM", color: "#0866FF" },
                { value: "1.200+", label: "Leads en 90 días", sub: "caso InCruises real", color: "#c8f000" },
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
            <div className="w-1 h-8 rounded-full" style={{ background: "#0866FF" }} />
            <h2 className="text-white font-black text-2xl sm:text-3xl uppercase">¿Qué incluye el servicio?</h2>
          </div>
          <p className="text-[#a1a1aa] text-sm mb-8 pl-4">
            Todo lo que necesitás para captar distribuidores calificados desde el día 1.
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
                  style={{ background: "rgba(8,102,255,0.15)", color: "#0866FF", border: "1px solid rgba(8,102,255,0.3)" }}
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
              background: "linear-gradient(135deg, rgba(8,102,255,0.1) 0%, rgba(0,0,0,0.5) 100%)",
              border: "1px solid rgba(8,102,255,0.3)",
            }}
          >
            {/* Glow accent */}
            <div
              className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #0866FF 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(8,102,255,0.2)", color: "#0866FF", border: "1px solid rgba(8,102,255,0.4)" }}
              >
                ✦ InCruises — Argentina & España
              </div>
              <blockquote className="text-white text-lg sm:text-xl font-semibold leading-relaxed mb-10 max-w-3xl">
                "Generamos +1.200 leads calificados en 90 días para el equipo de InCruises en Argentina y España.
                CPA promedio: $8 USD por prospecto calificado. ROAS: 4.8x sobre la inversión publicitaria."
              </blockquote>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "1.200+", label: "Leads en 90 días" },
                  { value: "$8 USD", label: "CPA promedio" },
                  { value: "4.8x", label: "ROAS alcanzado" },
                  { value: "+340%", label: "Distribuidores Q1" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(8,102,255,0.2)" }}
                  >
                    <p className="text-[#c8f000] font-black text-2xl sm:text-3xl leading-none mb-2">{m.value}</p>
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
            <div className="w-1 h-8 rounded-full" style={{ background: "#0866FF" }} />
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
            <div className="w-1 h-8 rounded-full" style={{ background: "#0866FF" }} />
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
            background: "linear-gradient(135deg, rgba(8,102,255,0.12) 0%, rgba(200,240,0,0.04) 100%)",
            border: "1px solid rgba(8,102,255,0.3)",
          }}
        >
          <div
            className="absolute bottom-0 left-1/2 w-96 h-48 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #0866FF 0%, transparent 70%)", transform: "translate(-50%, 50%)" }}
          />
          <div className="relative">
            <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#0866FF" }}>
              Meta Ads · Network Marketing
            </p>
            <h3 className="text-white font-black text-3xl sm:text-4xl mb-4">
              ¿Listo para captar distribuidores en Meta?
            </h3>
            <p className="text-[#a1a1aa] text-lg mb-8 max-w-xl mx-auto">
              Contanos tu negocio y en 30 minutos te mostramos cómo podemos duplicar tu red en Facebook e Instagram.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-8 sm:px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{ background: "#0866FF", color: "white", boxShadow: "0 0 50px rgba(8,102,255,0.45)" }}
            >
              QUIERO CAPTAR DISTRIBUIDORES EN META →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
