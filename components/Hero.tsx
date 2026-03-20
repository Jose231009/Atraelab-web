"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";

// Mini bar chart for dashboard
function MiniBarChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-0.5 h-8">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1 + i * 0.05, duration: 0.4 }}
          style={{
            height: `${(v / max) * 100}%`,
            backgroundColor: color,
            transformOrigin: "bottom",
            willChange: "transform",
          }}
          className="w-2 rounded-sm opacity-80"
        />
      ))}
    </div>
  );
}

// Floating dashboard mockup
function DashboardMockup() {
  const roasData = [45, 62, 55, 78, 85, 70, 92, 88, 95];
  const convData = [30, 45, 38, 55, 48, 65, 58, 72, 80];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative animate-float"
    >
      {/* Platform badges — unified lime styling */}
      {[
        { label: "Meta Ads", pos: { top: "-16px", left: "10px" } },
        { label: "Google Ads", pos: { top: "-16px", right: "10px" } },
        { label: "TikTok Ads", pos: { bottom: "-16px", left: "50%", transform: "translateX(-50%)" } },
      ].map(({ label, pos }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            ...pos,
            boxShadow: "0 4px 20px rgba(200,240,0,0.12)",
          }}
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md border border-[#c8f000]/20 bg-black/60 z-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000] opacity-80" />
          {label}
        </motion.div>
      ))}

      {/* Main dashboard card */}
      <div
        className="relative w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[390px] rounded-2xl p-5 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,240,0,0.05)",
        }}
      >
        {/* Radial glow inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8f000] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[#a1a1aa] text-xs font-medium uppercase tracking-wider">Panel de Control</p>
            <p className="text-white font-bold text-sm mt-0.5">Q1 2025</p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000] animate-pulse" />
            <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-wider">En vivo</span>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "ROAS", value: "4.8x", change: "+32%", up: true },
            { label: "CPA", value: "$12.4", change: "-18%", up: true },
            { label: "CTR", value: "3.7%", change: "+0.9%", up: true },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-white/5 rounded-xl p-2.5 border border-white/5"
            >
              <p className="text-[#a1a1aa] text-[9px] font-medium uppercase tracking-wider">{m.label}</p>
              <p className="text-white font-black text-lg leading-tight mt-0.5">{m.value}</p>
              <p className={`text-[9px] font-bold ${m.up ? "text-[#c8f000]" : "text-red-400"}`}>
                {m.change}
              </p>
            </div>
          ))}
        </div>

        {/* ROAS Chart */}
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#a1a1aa] text-[10px] font-medium uppercase tracking-wider">ROAS Histórico</p>
            <TrendingUp size={12} className="text-[#c8f000]" />
          </div>
          <MiniBarChart data={roasData} color="#c8f000" />
        </div>

        {/* Conversiones */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#a1a1aa] text-[10px] font-medium uppercase tracking-wider">Conversiones</p>
            <Zap size={12} className="text-[#c8f000]" />
          </div>
          <MiniBarChart data={convData} color="#c8f000" />
          <div className="flex justify-between mt-2">
            <p className="text-white font-black text-sm">1,284 leads</p>
            <p className="text-[#c8f000] text-xs font-bold">↑ 24%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  // Line-by-line H1 reveal
  const h1Lines = [
    { text: "ENCENDÉ TU", isAccent: false },
    { text: "DEMANDA", isAccent: true },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Subtle lime glows — very low opacity */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#c8f000] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c8f000] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Copy */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-2 bg-white/5 border border-[#c8f000]/30 rounded-full px-4 py-2 mb-6 badge-pulse">
                <div className="flex gap-1.5">
                  {[1, 0.65, 0.35].map((opacity, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: `rgba(200,240,0,${opacity})` }}
                    />
                  ))}
                </div>
                <span className="text-[#c8f000] text-xs font-bold tracking-widest uppercase">
                  Pauta · CRM · Reportes en vivo
                </span>
              </div>
            </motion.div>

            {/* H1 — staggered line-by-line reveal */}
            <h1 className="font-black uppercase leading-[0.9] tracking-tighter">
              {h1Lines.map((line, i) => (
                <div key={i} style={{ overflow: "hidden" }}>
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.25 + i * 0.14,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ willChange: "transform" }}
                    className={`block ${
                      line.isAccent ? "gradient-text" : "text-white"
                    } text-[2.25rem] sm:text-5xl lg:text-7xl xl:text-8xl`}
                  >
                    {line.text}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-[#a1a1aa] text-base sm:text-lg leading-relaxed max-w-md"
            >
              Escalamos tu negocio con{" "}
              <span className="text-white font-semibold">Meta Ads</span>,{" "}
              <span className="text-white font-semibold">Google Ads</span> y{" "}
              <span className="text-white font-semibold">TikTok Ads</span>. CRM propio, reportes en tiempo real y estrategia data-driven.
            </motion.p>

            {/* CTA buttons */}
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
                Quiero crecer ahora
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
                Ver demo del CRM
                <span className="text-[#c8f000]">→</span>
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {["A", "M", "L", "C"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-xs font-black text-black"
                    style={{
                      background: `rgba(200,240,0,${[1, 0.8, 0.6, 0.42][i]})`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#c8f000]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#a1a1aa] text-xs mt-0.5">
                  <span className="text-white font-bold">30+</span> clientes confían en nosotros
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Dashboard */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0 px-2 sm:px-0">
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Elegant vertical scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p className="text-[#a1a1aa] text-[9px] tracking-[0.35em] uppercase font-medium">Scroll</p>
        {/* Thin vertical line with traveling light */}
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
