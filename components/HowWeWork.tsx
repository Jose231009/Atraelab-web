"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── Step icons (SVG, isometric-inspired) ──────────────────
function LupaIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="15" cy="15" r="9" stroke="#c8f000" strokeWidth="2" fill="rgba(200,240,0,0.08)" />
      <line x1="22" y1="22" x2="30" y2="30" stroke="#c8f000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="15" x2="18" y2="15" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="15" y1="12" x2="15" y2="18" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="6" width="28" height="22" rx="2" stroke="#c8f000" strokeWidth="2" fill="rgba(200,240,0,0.08)" />
      <path d="M4 14h28M14 6v22" stroke="#c8f000" strokeWidth="1.5" opacity="0.4" />
      <circle cx="22" cy="20" r="3" fill="#c8f000" opacity="0.9" />
      <path d="M10 10h6M10 19h4" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 4C18 4 26 8 26 18L22 22H14L10 18C10 8 18 4 18 4Z" stroke="#c8f000" strokeWidth="2" fill="rgba(200,240,0,0.08)" />
      <circle cx="18" cy="16" r="3" fill="#c8f000" opacity="0.8" />
      <path d="M14 22L12 28L18 26L24 28L22 22" stroke="#c8f000" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(200,240,0,0.1)" />
      <path d="M9 16L6 20M27 16L30 20" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="28" height="24" rx="2" stroke="#c8f000" strokeWidth="2" fill="rgba(200,240,0,0.08)" />
      <polyline points="8,22 13,16 18,19 23,12 28,8" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="8" r="2.5" fill="#c8f000" />
      <path d="M4 30h28" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function ArrowDoubleIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M10 26L18 8L26 26" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(200,240,0,0.08)" />
      <path d="M14 20h8" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M15 10l3-4 3 4" stroke="#c8f000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M18 6v26" stroke="#c8f000" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" opacity="0.3" />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "DIAGNÓSTICO",
    timing: "Semana 1",
    description:
      "Auditoría completa de tu negocio, competencia, audiencias y oportunidades de crecimiento.",
    icon: <LupaIcon />,
  },
  {
    number: "02",
    title: "ESTRATEGIA",
    timing: "Semana 1–2",
    description:
      "Plan de medios personalizado con objetivos SMART, presupuesto optimizado y creatividades definidas.",
    icon: <MapIcon />,
  },
  {
    number: "03",
    title: "LANZAMIENTO",
    timing: "Semana 2–3",
    description:
      "Activación de campañas, píxeles, CRM LeadShield y seguimiento de conversiones en tiempo real.",
    icon: <RocketIcon />,
  },
  {
    number: "04",
    title: "OPTIMIZACIÓN",
    timing: "Mes 1–3",
    description:
      "Análisis semanal, A/B testing constante y escala de lo que funciona. Reportes 100% transparentes.",
    icon: <ChartIcon />,
  },
  {
    number: "05",
    title: "ESCALA TOTAL",
    timing: "Mes 3+",
    description:
      "Duplicamos presupuesto en canales ganadores y expandimos a nuevas audiencias y plataformas.",
    icon: <ArrowDoubleIcon />,
  },
];

function StepCard({
  step,
  index,
  totalSteps,
}: {
  step: (typeof steps)[0];
  index: number;
  totalSteps: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative flex-1 min-w-0"
      style={{ willChange: "transform" }}
    >
      {/* Connector line (desktop) */}
      {index < totalSteps - 1 && (
        <div
          className="hidden lg:block absolute top-[22px] left-[calc(50%+28px)] right-[-16px] h-px z-0"
          style={{
            background:
              "linear-gradient(to right, rgba(200,240,0,0.4), rgba(200,240,0,0.1))",
          }}
        />
      )}

      {/* Card */}
      <div
        className="relative z-10 p-5 rounded-2xl h-full group hover:-translate-y-1 transition-transform duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          willChange: "transform",
        }}
      >
        {/* Step number + icon row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(200,240,0,0.08)",
              border: "1px solid rgba(200,240,0,0.2)",
            }}
          >
            {step.icon}
          </div>
          <span
            className="font-black text-3xl leading-none"
            style={{ color: "rgba(200,240,0,0.2)" }}
          >
            {step.number}
          </span>
        </div>

        {/* Timing badge */}
        <div className="mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
            style={{
              color: "#c8f000",
              background: "rgba(200,240,0,0.08)",
              border: "1px solid rgba(200,240,0,0.15)",
            }}
          >
            {step.timing}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-[#a1a1aa] text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowWeWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proceso" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-transparent pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(200,240,0,0.025)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">
              Proceso
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            De cero a resultados{" "}
            <span className="gradient-text">en 5 pasos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-xl mx-auto"
          >
            Nuestro proceso probado, inspirado en las agencias top globales.
            Claridad total en cada etapa.
          </motion.p>
        </div>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 items-stretch">
          {steps.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              index={i}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full btn-neon"
            style={{ willChange: "transform" }}
          >
            Empezá con la Auditoría Gratuita
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
