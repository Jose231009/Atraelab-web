"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, Zap } from "lucide-react";

function ChannelLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10">
      <img src={src} alt={alt} className="w-5 h-5 object-contain" />
    </div>
  );
}

function HeroPanel() {
  const stages = [
    { title: "Nuevo", count: "18", note: "Meta y TikTok" },
    { title: "Contactado", count: "11", note: "menos de 5 min" },
    { title: "Presentacion", count: "7", note: "agenda activa" },
    { title: "Cierre", count: "3", note: "seguimiento claro" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      <div
        className="relative w-full rounded-2xl p-5 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8f000] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[#a1a1aa] text-xs font-medium uppercase tracking-wider">
              LeadShield CRM
            </p>
            <p className="text-white font-bold text-sm mt-0.5">
              Operación de reclutamiento
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000] animate-pulse" />
            <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-wider">
              seguimiento activo
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { label: "Tiempo de contacto", value: "< 5 min" },
            { label: "Origen del lead", value: "Meta / TikTok" },
            { label: "Estado siguiente", value: "llamar / agendar" },
            { label: "Responsable", value: "líder asignado" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 rounded-xl p-2.5 border border-white/5"
            >
              <p className="text-[#a1a1aa] text-[9px] font-medium uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-white font-bold text-sm leading-tight mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#a1a1aa] text-[10px] font-medium uppercase tracking-wider">
              Pipeline visible
            </p>
            <ArrowRight size={12} className="text-[#c8f000]" />
          </div>
          <div className="space-y-2.5">
            {stages.map((stage) => (
              <div key={stage.title} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white text-xs font-semibold">{stage.title}</p>
                  <p className="text-[#a1a1aa] text-[10px]">{stage.note}</p>
                </div>
                <span className="text-[#c8f000] font-black text-sm">{stage.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#c8f000] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c8f000] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-2 bg-white/5 border border-[#c8f000]/30 rounded-full px-4 py-2 mb-6 badge-pulse">
                <Clock3 size={14} className="text-[#c8f000]" />
                <span className="text-[#c8f000] text-xs font-bold tracking-widest uppercase">
                  Sistema para network marketing
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-black uppercase leading-[0.92] tracking-tighter text-4xl sm:text-5xl lg:text-7xl"
            >
              Más
              <br />
              presentaciones.
              <br />
              <span className="text-[#c8f000]">Menos prospección en frío.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-[#a1a1aa] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Armamos el sistema completo para captar prospectos calificados,
              filtrarlos mejor y hacer seguimiento rápido con pauta, landing,
              WhatsApp y CRM. Hecho para líderes y equipos de network
              marketing que necesitan volumen con orden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full btn-neon inline-flex items-center gap-2 justify-center"
                style={{ willChange: "transform" }}
              >
                <Zap size={16} />
                Quiero más prospectos
              </motion.a>

              <motion.a
                href="https://leads.atraelab.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-[#c8f000]/40 hover:text-[#c8f000] transition-all duration-300 inline-flex items-center gap-2 justify-center"
                style={{ willChange: "transform" }}
              >
                Ver LeadShield CRM
                <span className="text-[#c8f000]">→</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 w-full space-y-5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <ChannelLogo src="/logos/meta.svg" alt="Meta Ads" />
                <ChannelLogo src="/logos/google.svg" alt="Google Ads" />
                <ChannelLogo src="/logos/tiktok.svg" alt="TikTok Ads" />
                <div className="text-sm text-[#a1a1aa]">
                  Canales que activamos según tu oferta, tu país y tu tipo de
                  prospecto.
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 w-full max-w-2xl">
                {[
                  "Embudo con precalificación antes de hablar con el prospecto",
                  "Seguimiento visible por responsable, estado y origen",
                  "Operación lista para responder rápido sin perder leads",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#d4d4d8]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0 w-full overflow-hidden px-0">
            <div className="relative w-full max-w-[390px]">
              <HeroPanel />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p className="text-[#a1a1aa] text-[9px] tracking-[0.35em] uppercase font-medium">
          Scroll
        </p>
        <div className="relative w-[1px] h-14 bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="absolute left-0 w-full rounded-full"
            style={{
              background: "linear-gradient(to bottom, transparent, #c8f000, transparent)",
              willChange: "transform",
            }}
            animate={{
              top: ["-50%", "150%"],
              height: ["30%", "30%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.4,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
