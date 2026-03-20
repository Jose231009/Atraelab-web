import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Ads — Agencia Especializada LATAM | AtraeLab",
  description:
    "Escalá con TikTok Ads en LATAM. Spark Ads, In-Feed videos y UGC strategy para llegar a audiencias jóvenes con CPMs hasta 5x más bajos que Meta.",
};

const includes = [
  "Auditoría de cuenta o setup completo desde cero",
  "Configuración del TikTok Pixel y Events API",
  "Estrategia creativa con brief detallado para UGC",
  "Estructura de campañas In-Feed, TopView y Spark Ads",
  "Investigación de tendencias y sonidos virales del mes",
  "A/B testing de hooks y formatos de video",
  "Smart+ campaigns con optimización automática",
  "Retargeting de espectadores de video (75% de view)",
  "Reportes semanales con métricas de video y conversión",
  "Acceso al TikTok Ads Manager de la cuenta",
];

const profiles = [
  {
    icon: "👗",
    title: "Moda, belleza y lifestyle",
    description:
      "Productos visuales con gran potencial viral. TikTok es el nuevo Instagram para descubrir marcas y tendencias en LATAM.",
  },
  {
    icon: "🎓",
    title: "Cursos y educación online",
    description:
      "La generación Z y Millennials aprenden en TikTok. Si vendés educación o desarrollo personal, este canal es oro.",
  },
  {
    icon: "🌐",
    title: "Network marketing",
    description:
      "Las oportunidades de negocio viajan en formato video corto. Captamos distribuidores calificados con pauta nativa.",
  },
];

const faq = [
  {
    q: "¿Necesito producir videos profesionalmente?",
    a: "No. De hecho, los videos más naturales y auténticos suelen funcionar mejor que los producidos en estudio. Trabajamos con brief de UGC (User Generated Content) que podés grabar vos mismo, un empleado o creadores de contenido locales.",
  },
  {
    q: "¿Funciona TikTok Ads para negocios B2B?",
    a: "Depende del sector. Para B2B muy técnico o tickets muy altos, Meta o Google suelen ser mejores. Pero para servicios orientados a emprendedores, profesionales jóvenes o industrias con componente aspiracional, TikTok puede sorprenderte.",
  },
  {
    q: "¿Cuál es el presupuesto mínimo para TikTok Ads?",
    a: "TikTok requiere un mínimo de $50 USD diarios por ad group para que el algoritmo funcione correctamente. Por eso recomendamos arrancar con $1.500 USD mensuales en pauta para tener al menos 2-3 ad groups corriendo en paralelo.",
  },
  {
    q: "¿Con qué frecuencia hay que renovar las creatividades?",
    a: "En TikTok la fatiga creativa es más rápida que en Meta. Como regla general, hay que renovar las creatividades cada 2-3 semanas. Por eso integramos en el servicio la producción de brief creativo mensual.",
  },
  {
    q: "¿Pueden gestionar también la cuenta orgánica?",
    a: "La gestión de pauta y el contenido orgánico son servicios separados. Sin embargo, coordinamos con tu equipo de contenido para que las publicaciones orgánicas que funcionan se puedan impulsar con Spark Ads.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-white/8 last:border-0">
      <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none text-white font-semibold text-sm hover:text-[#c8f000] transition-colors">
        {q}
        <span className="flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-xs group-open:border-[#c8f000]/40 group-open:text-[#c8f000] transition-all">
          +
        </span>
      </summary>
      <p className="text-[#a1a1aa] text-sm pb-4 leading-relaxed">{a}</p>
    </details>
  );
}

export default function TikTokAdsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero */}
      <div
        className="relative pt-24 pb-16"
        style={{ background: "radial-gradient(ellipse at top left, rgba(105,201,208,0.06) 0%, transparent 60%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-8">
            <Link href="/" className="hover:text-[#c8f000] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-[#c8f000] transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white">TikTok Ads</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Platform badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-5.5 0 2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 105.35 6.05V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z" fill="#69C9D0" transform="translate(-0.4, 0.4)"/>
                    <path d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-5.5 0 2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 105.35 6.05V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z" fill="#EE1D52" transform="translate(0.4, -0.4)"/>
                    <path d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-5.5 0 2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 105.35 6.05V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#69C9D0" }}>TikTok Ads</p>
                  <p className="text-[#a1a1aa] text-xs">In-Feed · Spark Ads · Smart+</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-5">
                Escalá con{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #c8f000, #a8d400)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  video corto
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
                El canal de mayor crecimiento en LATAM. CPMs hasta 5x más bajos que Meta, audiencias millonarias y creatividades nativas que no parecen publicidad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full"
                  style={{ boxShadow: "0 0 30px rgba(200,240,0,0.3)" }}
                >
                  Auditoría gratuita →
                </Link>
                <Link
                  href="/blog/tiktok-ads-latam-guia-completa"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#c8f000]/40 hover:text-[#c8f000] transition-all duration-300"
                >
                  Leer guía →
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$3-8", label: "CPM promedio USD", sub: "vs $12-20 en Meta" },
                { value: "3.8x", label: "ROAS promedio", sub: "en e-commerce LATAM" },
                { value: "40%", label: "Crecimiento de usuarios", sub: "año a año en la región" },
                { value: "35%", label: "Descubren marcas", sub: "via TikTok mensualmente" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[#c8f000] font-black text-3xl leading-none mb-1">{s.value}</p>
                  <p className="text-white font-bold text-sm">{s.label}</p>
                  <p className="text-[#a1a1aa] text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Includes */}
        <div className="mb-20">
          <h2 className="text-white font-black text-2xl sm:text-3xl uppercase mb-8">¿Qué incluye el servicio?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {includes.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-5 h-5 rounded-full bg-[#c8f000] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L4 7L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profiles */}
        <div className="mb-20">
          <h2 className="text-white font-black text-2xl sm:text-3xl uppercase mb-8">¿Para quién es?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {profiles.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-white font-black text-lg mb-2">{p.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-white font-black text-2xl sm:text-3xl uppercase mb-8">Preguntas frecuentes</h2>
          <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {faq.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-2xl text-center" style={{ background: "rgba(200,240,0,0.04)", border: "1px solid rgba(200,240,0,0.2)" }}>
          <h3 className="text-white font-black text-3xl mb-3">¿Listo para dominar TikTok en LATAM?</h3>
          <p className="text-[#a1a1aa] text-lg mb-7 max-w-lg mx-auto">
            La oportunidad todavía está abierta. Los que entran ahora se llevan la ventaja.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-10 py-4 rounded-full"
            style={{ boxShadow: "0 0 40px rgba(200,240,0,0.35)" }}
          >
            Quiero mi auditoría gratuita →
          </Link>
        </div>
      </div>
    </main>
  );
}
