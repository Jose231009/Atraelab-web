"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function MagnetIcon() {
  return (
    <div className="w-14 h-14 flex items-center justify-center relative">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M10 8h8v20a8 8 0 0016 0V8h8v20a16 16 0 01-32 0V8z" fill="rgba(200,240,0,0.15)" stroke="#c8f000" strokeWidth="1.5"/>
        <rect x="10" y="8" width="8" height="6" rx="1" fill="#c8f000" opacity="0.8"/>
        <rect x="34" y="8" width="8" height="6" rx="1" fill="#c8f000" opacity="0.8"/>
        <path d="M2 44h6M2 40h4M44 44h6M48 40h4" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="26" cy="46" r="2" fill="#c8f000" opacity="0.6"/>
      </svg>
    </div>
  );
}

function NetworkIcon() {
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="10" r="5" fill="#c8f000" opacity="0.9"/>
        <circle cx="13" cy="30" r="4" fill="rgba(200,240,0,0.6)"/>
        <circle cx="39" cy="30" r="4" fill="rgba(200,240,0,0.6)"/>
        <circle cx="7" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <circle cx="19" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <circle cx="33" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <circle cx="45" cy="46" r="3" fill="rgba(200,240,0,0.35)"/>
        <path d="M26 15L13 26M26 15L39 26M13 34L7 43M13 34L19 43M39 34L33 43M39 34L45 43" stroke="#c8f000" strokeWidth="1.5" strokeOpacity="0.5"/>
      </svg>
    </div>
  );
}

function FunnelIcon() {
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M6 8h40L30 24v18l-8-4V24L6 8z" fill="rgba(200,240,0,0.12)" stroke="#c8f000" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 10h24M17 14h18M20 18h12" stroke="#c8f000" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round"/>
        <circle cx="26" cy="46" r="3" fill="#c8f000" opacity="0.8"/>
        <path d="M26 42v-4" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    </div>
  );
}

const pillars = [
  {
    id: "captacion",
    title: "LEADS FRIOS",
    headline: "Dejas de hablar con curiosos que nunca llegan a una presentación",
    description:
      "El embudo filtra mejor desde el anuncio, la landing y el primer contacto para que tu equipo no pierda tiempo en conversaciones sin perfil.",
    metric: "Filtro antes de entrar a WhatsApp",
    icon: <MagnetIcon />,
  },
  {
    id: "seguimiento",
    title: "SEGUIMIENTO",
    headline: "Cada prospecto entra con origen, estado y responsable",
    description:
      "Cuando varios líderes contactan al mismo tiempo, el CRM ordena tareas, próximos pasos y evita que los mejores leads queden sin respuesta.",
    metric: "Operación visible para todo el equipo",
    icon: <NetworkIcon />,
  },
  {
    id: "presentaciones",
    title: "PRESENTACIONES",
    headline: "Más agenda útil, menos energía puesta en perseguir gente",
    description:
      "Mensajes, recordatorios y contenidos de apoyo preparan al prospecto antes de la llamada para que la presentación llegue mejor armada.",
    metric: "Más orden antes, durante y después",
    icon: <FunnelIcon />,
  },
];

const networkMetrics = [
  { value: "<5 min", label: "Velocidad objetivo", sublabel: "para el primer contacto" },
  { value: "100%", label: "Trazabilidad", sublabel: "de origen, estado y responsable" },
  { value: "1 sistema", label: "Operación centralizada", sublabel: "para pauta, seguimiento y cierre" },
];

export default function NetworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="network" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0f06] to-[#050505] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#c8f000] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c8f000] opacity-[0.03] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">
              Problemas
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            Los 3 cuellos de botella{" "}
            <span className="text-[#c8f000]">que más frenan una red</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-2xl mx-auto"
          >
            Si tu crecimiento depende de mensajes manuales, seguimiento
            irregular o prospectos sin filtro, el problema no es solo la pauta:
            es el sistema completo.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
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

                <div className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-3 py-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#c8f000]" />
                  <span className="text-[#c8f000] text-xs font-bold">{pillar.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 p-5 rounded-2xl"
          style={{
            background: "rgba(200,240,0,0.03)",
            border: "1px solid rgba(200,240,0,0.12)",
          }}
        >
          {networkMetrics.map((metric) => (
            <div key={metric.label} className="text-center px-2">
              <p className="text-[#c8f000] font-black text-2xl sm:text-3xl lg:text-4xl leading-none">
                {metric.value}
              </p>
              <p className="text-white font-bold text-xs sm:text-sm mt-1">{metric.label}</p>
              <p className="text-[#a1a1aa] text-[10px] sm:text-xs mt-0.5">{metric.sublabel}</p>
            </div>
          ))}
        </motion.div>

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
              setTimeout(() => {
                const textarea = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
                if (textarea) {
                  const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
                  setter?.call(textarea, "Quiero ordenar la captación y el seguimiento de mi red.");
                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }, 800);
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full btn-neon"
            style={{ willChange: "transform" }}
          >
            Quiero ordenar mi captación
            <span>→</span>
          </motion.a>
          <p className="text-[#a1a1aa] text-xs mt-4">
            Diagnóstico inicial sin costo · Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
