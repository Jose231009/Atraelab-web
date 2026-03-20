"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Isometric magnet icon (CSS 3D)
function MagnetIcon() {
  return (
    <div className="w-14 h-14 flex items-center justify-center relative">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        {/* U-shape magnet */}
        <path d="M10 8h8v20a8 8 0 0016 0V8h8v20a16 16 0 01-32 0V8z" fill="rgba(200,240,0,0.15)" stroke="#c8f000" strokeWidth="1.5"/>
        <rect x="10" y="8" width="8" height="6" rx="1" fill="#c8f000" opacity="0.8"/>
        <rect x="34" y="8" width="8" height="6" rx="1" fill="#c8f000" opacity="0.8"/>
        {/* Field lines */}
        <path d="M2 44h6M2 40h4M44 44h6M48 40h4" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="26" cy="46" r="2" fill="#c8f000" opacity="0.6"/>
      </svg>
    </div>
  );
}

// Tree/network icon
function NetworkIcon() {
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        {/* Root node */}
        <circle cx="26" cy="10" r="5" fill="#c8f000" opacity="0.9"/>
        {/* Level 2 nodes */}
        <circle cx="13" cy="30" r="4" fill="rgba(200,240,0,0.6)"/>
        <circle cx="39" cy="30" r="4" fill="rgba(200,240,0,0.6)"/>
        {/* Level 3 nodes */}
        <circle cx="7" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <circle cx="19" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <circle cx="33" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <circle cx="45" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        {/* Connecting lines */}
        <path d="M26 15L13 26M26 15L39 26M13 34L7 43M13 34L19 43M39 34L33 43M39 34L45 43" stroke="#c8f000" strokeWidth="1.5" strokeOpacity="0.5"/>
      </svg>
    </div>
  );
}

// Funnel icon
function FunnelIcon() {
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        {/* Funnel shape */}
        <path d="M6 8h40L30 24v18l-8-4V24L6 8z" fill="rgba(200,240,0,0.12)" stroke="#c8f000" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* Flow lines */}
        <path d="M14 10h24M17 14h18M20 18h12" stroke="#c8f000" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round"/>
        {/* Output dot */}
        <circle cx="26" cy="46" r="3" fill="#c8f000" opacity="0.8"/>
        <path d="M26 42v-4" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    </div>
  );
}

const pillars = [
  {
    id: "captacion",
    title: "CAPTACIÓN",
    headline: "Leads que ya buscan una oportunidad",
    description: "Generamos prospectos calificados que están activamente interesados en iniciar o expandir un negocio. Sin prospectar en frío.",
    metric: "Avg CPA $8 / lead",
    icon: <MagnetIcon />,
  },
  {
    id: "duplicacion",
    title: "DUPLICACIÓN",
    headline: "Sistemas para escalar tu equipo",
    description: "Embudos automatizados que captan, educan y precalifican distribuidores. Tu red crece mientras vos dormís.",
    metric: "+500 distribuidores captados",
    icon: <NetworkIcon />,
  },
  {
    id: "conversion",
    title: "CONVERSIÓN",
    headline: "Embudos para el cierre de afiliados",
    description: "VSL, landing pages y secuencias de email optimizadas para convertir curiosos en distribuidores activos.",
    metric: "3x vs métodos tradicionales",
    icon: <FunnelIcon />,
  },
];

const networkMetrics = [
  { value: "500+", label: "Distribuidores captados", sublabel: "para nuestros clientes" },
  { value: "$8", label: "CPA promedio", sublabel: "por lead calificado en redes" },
  { value: "3x", label: "Más conversiones", sublabel: "vs métodos tradicionales" },
];

export default function NetworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="network" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Differentiated background — more intense radial */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0f06] to-[#050505] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#c8f000] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c8f000] opacity-[0.03] rounded-full blur-[80px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">Network Marketing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            ¿Tenés una red?{" "}
            <span className="gradient-text">La escalamos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-2xl mx-auto"
          >
            Generamos leads calificados para tu negocio de network marketing con pauta digital profesional. Captación, duplicación y conversión — todo en un sistema.
          </motion.p>
        </div>

        {/* 3 pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,240,0,0.12)",
                transition: { duration: 0.3 },
              }}
              className="group relative p-6 lg:p-8 overflow-hidden"
              style={{
                background: "rgba(200,240,0,0.02)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200,240,0,0.1)",
                borderRadius: "16px",
                willChange: "transform",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(200,240,0,0.06) 0%, transparent 65%)" }}
              />

              <div className="relative z-10">
                {pillar.icon}

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c8f000] mt-3 mb-1">
                  {pillar.title}
                </p>
                <h3 className="text-white font-black text-lg leading-tight mb-3">
                  {pillar.headline}
                </h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Metric badge */}
                <div className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-3 py-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#c8f000]" />
                  <span className="text-[#c8f000] text-xs font-bold">{pillar.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-12 p-5 rounded-2xl"
          style={{
            background: "rgba(200,240,0,0.03)",
            border: "1px solid rgba(200,240,0,0.12)",
          }}
        >
          {networkMetrics.map((m, i) => (
            <div key={i} className="text-center px-2">
              <p className="text-[#c8f000] font-black text-2xl sm:text-3xl lg:text-4xl leading-none">{m.value}</p>
              <p className="text-white font-bold text-xs sm:text-sm mt-1">{m.label}</p>
              <p className="text-[#a1a1aa] text-[10px] sm:text-xs mt-0.5">{m.sublabel}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <motion.a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              // Pre-fill the message field after scroll
              setTimeout(() => {
                const textarea = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
                if (textarea) {
                  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
                  nativeInputValueSetter?.call(textarea, "Me interesa el servicio de Network Marketing");
                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }, 800);
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full btn-neon"
            style={{ willChange: "transform" }}
          >
            Quiero escalar mi red
            <span>→</span>
          </motion.a>
          <p className="text-[#a1a1aa] text-xs mt-4">
            Primera auditoría sin costo · Respuesta en menos de 24hs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
