"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import { FloatingDecor3D } from "@/components/Icons3D";

const metrics = [
  { value: 240, suffix: "%", prefix: "+", label: "ROAS Promedio", description: "de incremento en retorno de inversión", color: "#c8f000" },
  { value: 5, suffix: "M+", prefix: "", label: "Leads Generados", description: "contactos calificados para nuestros clientes", color: "#c8f000" },
  { value: 30, suffix: "+", prefix: "", label: "Clientes Activos", description: "empresas que escalan con nosotros", color: "#c8f000" },
  { value: 2, suffix: "M+", prefix: "", label: "USD Gestionados", description: "en inversión publicitaria optimizada", color: "#c8f000" },
];

// Google "G" logo SVG
function GoogleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function CountUpNumber({ target, prefix, suffix, color, active }: {
  target: number; prefix: string; suffix: string; color: string; active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return (
    <span className="font-black text-4xl sm:text-5xl lg:text-6xl leading-none" style={{ color }}>
      {prefix}{count}{suffix}
    </span>
  );
}

function MetricCard({ metric, index, active }: {
  metric: (typeof metrics)[0]; index: number; active: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card p-5 lg:p-7 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
      style={{ willChange: "transform" }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: metric.color }} />
      <div className="absolute top-3 right-3">
        <svg className="w-5 h-5 opacity-50" style={{ color: metric.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
      <CountUpNumber target={metric.value} prefix={metric.prefix} suffix={metric.suffix} color={metric.color} active={active} />
      <p className="text-white font-bold text-base mt-2">{metric.label}</p>
      <p className="text-[#a1a1aa] text-xs mt-0.5 leading-snug">{metric.description}</p>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card p-5 sm:p-6 relative"
    >
      {/* Quote mark */}
      <div className="text-4xl font-black leading-none mb-3 text-[#c8f000] opacity-50">&ldquo;</div>

      <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">{testimonial.text}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 text-black"
          style={{ background: "#c8f000" }}
        >
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-bold truncate">{testimonial.name}</p>
          <p className="text-[#a1a1aa] text-xs truncate">{testimonial.role} · {testimonial.company}</p>
        </div>
        {/* Source badge */}
        {testimonial.source === "google" ? (
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1.5 flex-shrink-0">
            <GoogleIcon size={12} />
            <span className="text-[10px] text-[#a1a1aa] font-medium">Google</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-2.5 py-1.5 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[10px] text-[#c8f000] font-medium">Verificado</span>
          </div>
        )}
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mt-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-3 h-3 text-[#c8f000]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-[#a1a1aa] text-[10px] ml-1.5">
          {testimonial.rating}.0
        </span>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIdx((i) => (i + 1) % testimonials.length);
  }, []);

  // Auto-scroll every 4s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="resultados" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c8f000] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
      <FloatingDecor3D />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">Resultados</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            Los números{" "}
            <span className="gradient-text">hablan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-lg mx-auto"
          >
            Resultados reales de clientes reales. Sin datos inflados, sin promesas vacías.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Testimonials — carousel (auto-scroll on all, pauses on hover) */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Header row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="flex items-center justify-between mb-5"
            >
              <div className="flex items-center gap-2">
                <GoogleIcon size={16} />
                <span className="text-white text-sm font-bold">Reviews verificados</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#c8f000]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#a1a1aa] text-xs">5.0</span>
              </div>
              {/* Carousel controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:border-[#c8f000]/40 hover:text-[#c8f000] transition-all duration-200 text-xs"
                >
                  ←
                </button>
                <button
                  onClick={() => next()}
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:border-[#c8f000]/40 hover:text-[#c8f000] transition-all duration-200 text-xs"
                >
                  →
                </button>
              </div>
            </motion.div>

            {/* Active testimonial */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={activeIdx}
                  testimonial={testimonials[activeIdx]}
                  isActive={true}
                />
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIdx
                      ? "w-6 h-1.5 bg-[#c8f000]"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Metrics grid — 2x2 */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} metric={m} index={i} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
