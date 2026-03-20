import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads — Agencia Facebook e Instagram | AtraeLab",
  description:
    "Gestionamos tus campañas en Facebook e Instagram con estrategia avanzada. Pixel, CAPI, audiencias lookalike y creatividades que convierten.",
};

const includes = [
  "Auditoría y diagnóstico inicial de tu cuenta y competencia",
  "Configuración completa de Meta Pixel y Conversions API (CAPI)",
  "Creación y optimización de audiencias lookalike y custom audiences",
  "Diseño de estructura de campañas en funnel completo (TOF, MOF, BOF)",
  "Producción de brief creativo con referencias y especificaciones",
  "A/B testing sistemático de creatividades y copies",
  "Retargeting dinámico para recuperar carritos y visitantes",
  "Reportes semanales con métricas clave y proyecciones",
  "Reunión mensual de análisis estratégico",
  "Acceso al CRM LeadShield para gestión de leads",
];

const profiles = [
  {
    icon: "🛍️",
    title: "E-commerce en crecimiento",
    description:
      "Tiendas online que quieren escalar ventas con un ROAS sostenible. Ideal para tickets de $2.000 a $50.000 ARS.",
  },
  {
    icon: "📚",
    title: "Infoproductores y coaches",
    description:
      "Venta de cursos online, consultorías o programas de mentoría. Meta es el canal rey para educación digital.",
  },
  {
    icon: "🏠",
    title: "Servicios locales y profesionales",
    description:
      "Clínicas, estudios, gimnasios y servicios que quieren generar leads calificados en su zona.",
  },
];

const faq = [
  {
    q: "¿Cuánto presupuesto necesito para empezar?",
    a: "Recomendamos un mínimo de $300 USD mensuales en pauta para que el algoritmo tenga suficiente data. Con menos inversión, el período de aprendizaje se extiende y los resultados son inconsistentes.",
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Los primeros datos significativos aparecen en 2-4 semanas. Los resultados óptimos se logran a los 60-90 días, cuando el algoritmo ya aprendió suficiente sobre tu audiencia y el testeo creativo arrojó ganadores.",
  },
  {
    q: "¿Cómo manejo las creatividades? ¿Las hacen ustedes?",
    a: "Te preparamos el brief creativo completo con referencias, guiones y especificaciones técnicas. La producción puede ser tuya, de un creador de contenido, o podemos recomendarte opciones. Hacemos la edición final optimizada para la plataforma.",
  },
  {
    q: "¿Cuál es el contrato mínimo?",
    a: "Trabajamos con contratos de 3 meses mínimo. La publicidad digital necesita tiempo para optimizar y evaluar. Contratos mensuales existen pero no los recomendamos porque no da tiempo suficiente para ver resultados reales.",
  },
  {
    q: "¿Qué pasa con mi cuenta cuando termina el contrato?",
    a: "Tu cuenta siempre es tuya. Todas las configuraciones, píxeles, audiencias y datos históricos permanecen en tu Business Manager. Si decidís no continuar, te hacemos una sesión de traspaso para que quede todo documentado.",
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

export default function MetaAdsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero */}
      <div
        className="relative pt-24 pb-16"
        style={{ background: "radial-gradient(ellipse at top left, rgba(8,102,255,0.08) 0%, transparent 60%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-8">
            <Link href="/" className="hover:text-[#c8f000] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-[#c8f000] transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white">Meta Ads</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Platform badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(8,102,255,0.15)", border: "1px solid rgba(8,102,255,0.3)" }}
                >
                  <svg width="28" height="18" viewBox="0 0 40 24" fill="none">
                    <path d="M10 12C10 8 12 5 15 5C17.5 5 19.5 7 20 12C20.5 7 22.5 5 25 5C28 5 30 8 30 12C30 16 28 19 25 19C22.5 19 20.5 17 20 12C19.5 17 17.5 19 15 19C12 19 10 16 10 12Z" fill="#0866FF"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0866FF]">Meta Ads</p>
                  <p className="text-[#a1a1aa] text-xs">Facebook & Instagram</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-5">
                Domina Facebook{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #c8f000, #a8d400)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  e Instagram
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
                Creamos audiencias precisas, creatividades que convierten y campañas que escalan. De prospección a retargeting, cubrimos todo el funnel con estrategia data-driven.
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
                  href="/blog/como-triplicar-roas-meta-ads-90-dias"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#c8f000]/40 hover:text-[#c8f000] transition-all duration-300"
                >
                  Leer guía →
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4.8x", label: "ROAS promedio alcanzado", sub: "en clientes activos" },
                { value: "-38%", label: "Reducción de CPA", sub: "en los primeros 90 días" },
                { value: "2M+", label: "USD gestionados", sub: "en Meta Ads" },
                { value: "5.0★", label: "Calificación Google", sub: "de nuestros clientes" },
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
        {/* What's included */}
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

        {/* Who is it for */}
        <div className="mb-20">
          <h2 className="text-white font-black text-2xl sm:text-3xl uppercase mb-8">¿Para quién es?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
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
          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {faq.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="p-10 rounded-2xl text-center"
          style={{
            background: "rgba(200,240,0,0.04)",
            border: "1px solid rgba(200,240,0,0.2)",
          }}
        >
          <h3 className="text-white font-black text-3xl mb-3">¿Listo para escalar con Meta Ads?</h3>
          <p className="text-[#a1a1aa] text-lg mb-7 max-w-lg mx-auto">
            Reservá tu auditoría gratuita y en 30 minutos te mostramos el potencial real de tu negocio en Facebook e Instagram.
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
