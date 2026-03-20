"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { MetaCube, GoogleSphere, TikTokCylinder } from "@/components/Icons3D";

// Official Meta logo — infinity symbol
function MetaLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl"
      style={{
        width: size,
        height: size,
        background: "rgba(8,102,255,0.1)",
        border: "1px solid rgba(8,102,255,0.2)",
      }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 40 24" fill="none">
        <path
          d="M10 12C10 8 12 5 15 5C17.5 5 19.5 7 20 12C20.5 7 22.5 5 25 5C28 5 30 8 30 12C30 16 28 19 25 19C22.5 19 20.5 17 20 12C19.5 17 17.5 19 15 19C12 19 10 16 10 12Z"
          fill="#0866FF"
        />
      </svg>
    </div>
  );
}

// Official Google Ads logo — multicolor "G"
function GoogleAdsLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl"
      style={{
        width: size,
        height: size,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    </div>
  );
}

// Official TikTok logo — musical note with dual shadow
function TikTokLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl"
      style={{
        width: size,
        height: size,
        background: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
        {/* Cyan shadow layer */}
        <path
          d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-2.75 2.75A2.75 2.75 0 017.7 15.5a2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 00-.75-.05A6.1 6.1 0 004.35 15.5 6.1 6.1 0 0010.45 21.6a6.1 6.1 0 006.1-6.1V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z"
          fill="#69C9D0"
          transform="translate(-0.5, 0.5)"
        />
        {/* Red shadow layer */}
        <path
          d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-2.75 2.75A2.75 2.75 0 017.7 15.5a2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 00-.75-.05A6.1 6.1 0 004.35 15.5 6.1 6.1 0 0010.45 21.6a6.1 6.1 0 006.1-6.1V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z"
          fill="#EE1D52"
          transform="translate(0.5, -0.5)"
        />
        {/* White main layer */}
        <path
          d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-2.75 2.75A2.75 2.75 0 017.7 15.5a2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 00-.75-.05A6.1 6.1 0 004.35 15.5 6.1 6.1 0 0010.45 21.6a6.1 6.1 0 006.1-6.1V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z"
          fill="white"
        />
      </svg>
    </div>
  );
}

const services = [
  {
    id: "meta",
    platform: "META ADS",
    headline: "Domina Facebook e Instagram",
    description:
      "Creamos audiencias precisas, creatividades que convierten y campañas que escalan. De prospección a retargeting, cubrimos todo el funnel.",
    features: ["Audiencias lookalike avanzadas", "Creatividades A/B testeadas", "Retargeting dinámico", "Pixel + CAPI configurado"],
    accentColor: "#0866FF",
    accentBg: "rgba(8,102,255,0.06)",
    icon: <MetaCube size={72} />,
    href: "/servicios/meta-ads",
  },
  {
    id: "google",
    platform: "GOOGLE ADS",
    headline: "Capturá la intención de búsqueda",
    description:
      "Aparecé cuando el cliente ya busca lo que vos vendés. Search, Shopping, Display y Performance Max optimizados para tu ROI.",
    features: ["Campañas Search & Shopping", "Performance Max optimizado", "Negative keywords preciso", "Smart bidding con datos"],
    accentColor: "#4285F4",
    accentBg: "rgba(66,133,244,0.06)",
    icon: <GoogleSphere size={72} />,
    href: "/servicios/google-ads",
  },
  {
    id: "tiktok",
    platform: "TIKTOK ADS",
    headline: "Escalá con video corto",
    description:
      "El canal de mayor crecimiento orgánico y pago. Llegamos a audiencias jóvenes con creatividades nativas que no parecen publicidad.",
    features: ["Spark Ads & In-Feed videos", "UGC strategy para reducir CPA", "Pixel & Events configurados", "Tendencias en tiempo real"],
    accentColor: "#ffffff",
    accentBg: "rgba(105,201,208,0.06)",
    icon: <TikTokCylinder size={72} />,
    href: "/servicios/tiktok-ads",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,240,0,0.1)",
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
      className="group relative p-6 lg:p-8 cursor-default overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        willChange: "transform",
      }}
    >
      {/* Hover radial gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${service.accentBg} 0%, transparent 65%)` }}
      />
      {/* Border glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 0 1px rgba(200,240,0,0.2)` }}
      />

      {/* 3D Icon + Arrow row */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        {service.icon}
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8f000]/40 group-hover:bg-[#c8f000]/10 transition-all duration-300"
          whileHover={{ rotate: 45 }}
        >
          <svg className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-[#c8f000] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.div>
      </div>

      {/* Platform label + headline */}
      <div className="relative z-10 mb-4">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 text-[#a1a1aa]">
          {service.platform}
        </p>
        <h3 className="text-white font-black text-xl leading-tight">
          {service.headline}
        </h3>
      </div>

      {/* Description */}
      <p className="relative z-10 text-[#a1a1aa] text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Feature list */}
      <ul className="relative z-10 space-y-2">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2.5 text-sm text-[#a1a1aa]">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#c8f000]" />
            {feat}
          </li>
        ))}
      </ul>

      {/* Bottom line */}
      <div className="relative z-10 mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-[#a1a1aa] font-medium">Estrategia incluida</span>
        <Link
          href={service.href}
          className="text-[#c8f000] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all duration-300 hover:underline"
        >
          Ver más <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            Pauta que{" "}
            <span className="gradient-text">convierte</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-xl mx-auto"
          >
            Gestionamos tus campañas en las 3 plataformas más poderosas del mercado. Sin intermediarios, con resultados medibles.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 text-[#c8f000] font-bold text-sm border border-[#c8f000]/30 hover:bg-[#c8f000]/10 rounded-full px-6 py-3 transition-all duration-300 hover:border-[#c8f000]/60"
          >
            Conversemos sobre tu estrategia <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
