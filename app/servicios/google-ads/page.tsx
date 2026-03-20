import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads — Search, Shopping & PMax | AtraeLab",
  description:
    "Gestionamos tus campañas de Google Ads para capturar intención de compra. Search, Shopping, Performance Max y Display optimizados para tu ROI.",
};

const includes = [
  "Auditoría completa de cuenta existente o setup desde cero",
  "Investigación de keywords y análisis de competidores",
  "Estructura de campañas Search con ad groups temáticos",
  "Configuración de negative keywords y bid adjustments",
  "Campañas Shopping para e-commerce con feed optimizado",
  "Performance Max con creative assets de calidad",
  "Smart bidding con targets de CPA o ROAS definidos",
  "Conversiones configuradas en Google Analytics 4 + Tag Manager",
  "Reportes semanales y dashboard en tiempo real",
  "Reunión mensual de revisión estratégica",
];

const profiles = [
  {
    icon: "🔍",
    title: "Servicios con demanda activa",
    description:
      "Plomeros, médicos, abogados, estudios contables. Si la gente busca lo que ofrecés en Google, este es tu canal.",
  },
  {
    icon: "🛒",
    title: "E-commerce con catálogo",
    description:
      "Shopping Ads muestran tu producto con imagen y precio directamente en los resultados de búsqueda. Ideal para tiendas online.",
  },
  {
    icon: "🏢",
    title: "B2B y servicios corporativos",
    description:
      "Software, logística, consultoría. Los tomadores de decisión buscan proveedores en Google. Estar ahí primero importa.",
  },
];

const faq = [
  {
    q: "¿Cuál es la diferencia entre Google Ads y SEO?",
    a: "Google Ads te da resultados inmediatos pagando por cada click. El SEO lleva meses pero genera tráfico gratuito a largo plazo. Para resultados rápidos y escalables, Google Ads es el camino. Idealmente se usan juntos.",
  },
  {
    q: "¿Qué es Performance Max y cuándo usarlo?",
    a: "Performance Max es el tipo de campaña más nuevo de Google que usa IA para mostrar tus anuncios en Search, Shopping, YouTube, Gmail y Display. Funciona mejor cuando ya tenés historial de conversiones (mínimo 50 al mes) y datos de calidad.",
  },
  {
    q: "¿Por qué mi campaña anterior no dio resultados?",
    a: "Los problemas más comunes son: keywords demasiado amplias que atraen clics irrelevantes, falta de negative keywords, landing page que no convierte, y conversiones mal configuradas. En la auditoría gratuita identificamos exactamente dónde está el problema.",
  },
  {
    q: "¿Cuánto tiempo lleva ver resultados?",
    a: "Con una cuenta nueva, las primeras 2-4 semanas son de aprendizaje. Los resultados óptimos llegan entre el mes 2 y 3. Cuentas existentes que ya tienen historial pueden mejorar más rápido.",
  },
  {
    q: "¿Manejan también Google Shopping para e-commerce?",
    a: "Sí. Gestionamos el feed de productos, la estructura de campañas Shopping y la integración con Merchant Center. También configuramos Performance Max para e-commerce cuando el catálogo y el presupuesto lo justifican.",
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

export default function GoogleAdsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero */}
      <div
        className="relative pt-24 pb-16"
        style={{ background: "radial-gradient(ellipse at top left, rgba(66,133,244,0.07) 0%, transparent 60%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-8">
            <Link href="/" className="hover:text-[#c8f000] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-[#c8f000] transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white">Google Ads</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Platform badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#4285F4" }}>Google Ads</p>
                  <p className="text-[#a1a1aa] text-xs">Search · Shopping · Display · PMax</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-5">
                Capturá la{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #c8f000, #a8d400)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  intención
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
                Aparecé cuando el cliente ya busca lo que vos vendés. Search, Shopping y Performance Max optimizados para maximizar tu ROI con datos reales.
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
                  href="/blog/google-ads-vs-meta-ads-cual-usar"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#c8f000]/40 hover:text-[#c8f000] transition-all duration-300"
                >
                  Leer guía →
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3.2x", label: "ROAS promedio Search", sub: "en campañas activas" },
                { value: "-24%", label: "Reducción de CPC", sub: "vs configuración anterior" },
                { value: "500+", label: "Campañas lanzadas", sub: "en Google Ads" },
                { value: "4.7/5", label: "Calidad de la cuenta", sub: "Quality Score promedio" },
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
          <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {faq.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-2xl text-center" style={{ background: "rgba(200,240,0,0.04)", border: "1px solid rgba(200,240,0,0.2)" }}>
          <h3 className="text-white font-black text-3xl mb-3">¿Tu negocio debería estar en Google?</h3>
          <p className="text-[#a1a1aa] text-lg mb-7 max-w-lg mx-auto">
            Seguramente sí. Y nosotros te mostramos exactamente cómo. Auditoría gratuita en 30 minutos.
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
