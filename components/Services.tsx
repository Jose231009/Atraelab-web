"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "captacion",
    platform: "META ADS",
    headline: "La fuente principal de prospectos para la mayoría de las redes",
    description:
      "Captamos personas interesadas en generar ingresos extra, emprender o escuchar una presentación, con filtros desde el anuncio hasta el formulario.",
    features: [
      "Segmentación por interés y comportamiento",
      "Creatividades con gancho y filtro",
      "Formulario con preguntas de precalificación",
      "Seguimiento por origen y responsable",
    ],
    accentBg: "rgba(8,102,255,0.06)",
    logo: "/logos/meta.svg",
    note: "Ideal para volumen y control de mensaje",
  },
  {
    id: "intencion",
    platform: "GOOGLE ADS",
    headline: "Capturamos demanda cuando ya están buscando opciones",
    description:
      "Sirve para atacar tráfico con intención alta, proteger tu marca y aparecer frente a prospectos que comparan oportunidades o buscan referencias.",
    features: [
      "Búsqueda por términos de oportunidad y negocio",
      "Campañas de marca para cerrar dudas",
      "Negativas para limpiar tráfico frío",
      "Landing alineada con la búsqueda",
    ],
    accentBg: "rgba(66,133,244,0.06)",
    logo: "/logos/google.svg",
    note: "Ideal para captar prospectos con intención",
  },
  {
    id: "expansion",
    platform: "TIKTOK ADS",
    headline: "Escala creatividad, alcance y mensajes de entrada",
    description:
      "Cuando la oferta necesita más alcance y contenido nativo, TikTok ayuda a generar volumen y testear ángulos rápido antes de escalar.",
    features: [
      "Videos cortos con hooks claros",
      "Testeo rápido de ángulos de oferta",
      "Retargeting para los que miran y no aplican",
      "Aprendizaje útil para todo el funnel",
    ],
    accentBg: "rgba(105,201,208,0.06)",
    logo: "/logos/tiktok.svg",
    note: "Ideal para bajar fatiga creativa y ganar alcance",
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
      className="group relative p-6 lg:p-8 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        willChange: "transform",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${service.accentBg} 0%, transparent 65%)` }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(200,240,0,0.2)" }}
      />

      <div className="relative z-10 flex items-start justify-between mb-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <img src={service.logo} alt={service.platform} className="w-8 h-8 object-contain" />
        </div>
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8f000]/40 group-hover:bg-[#c8f000]/10 transition-all duration-300"
          whileHover={{ rotate: 45 }}
        >
          <ArrowRight className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-[#c8f000] transition-colors duration-300" />
        </motion.div>
      </div>

      <div className="relative z-10 mb-4">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 text-[#a1a1aa]">
          {service.platform}
        </p>
        <h3 className="text-white font-black text-xl leading-tight">
          {service.headline}
        </h3>
      </div>

      <p className="relative z-10 text-[#a1a1aa] text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      <ul className="relative z-10 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-[#a1a1aa]">
            <CheckCircle2 className="w-4 h-4 text-[#c8f000] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-[#a1a1aa] font-medium">{service.note}</span>
        <span className="text-[#c8f000] text-xs font-bold">Canal activable</span>
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
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">
              Sistema
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            Canales que alimentan{" "}
            <span className="text-[#c8f000]">tu sistema</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-xl mx-auto"
          >
            No elegimos canales por moda. Elegimos los que mejor traen
            prospectos para tu oferta, tu país y la madurez de tu red.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
