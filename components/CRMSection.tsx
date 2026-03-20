"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const features = [
  "Pipeline visual tipo Kanban con drag & drop",
  "Seguimiento de fuente por plataforma (Meta, Google, TikTok)",
  "Notificaciones automáticas por WhatsApp",
  "Reportes en tiempo real de conversión",
];

const kanbanColumns = [
  {
    title: "Nuevo",
    count: 8,
    leads: [
      { name: "Lucía Fernández", source: "Meta", avatar: "L", value: "$1.2k" },
      { name: "Marcos Pérez", source: "Google", avatar: "M", value: "$3.5k" },
    ],
  },
  {
    title: "Contactado",
    count: 5,
    leads: [
      { name: "Ana García", source: "TikTok", avatar: "A", value: "$800" },
      { name: "Carlos Ruiz", source: "Meta", avatar: "C", value: "$2.1k" },
    ],
  },
  {
    title: "Propuesta",
    count: 3,
    leads: [
      { name: "Diego Martínez", source: "Google", avatar: "D", value: "$5k" },
    ],
  },
  {
    title: "Cerrado ✓",
    count: 12,
    leads: [
      { name: "Sofía López", source: "Meta", avatar: "S", value: "$4.5k" },
      { name: "Juan Torres", source: "TikTok", avatar: "J", value: "$1.8k" },
    ],
  },
];

function LeadCard({
  lead,
  delay,
}: {
  lead: { name: string; source: string; avatar: string; value: string };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="bg-white/5 border border-white/8 rounded-lg p-2.5 hover:border-[#c8f000]/20 transition-colors duration-200"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-6 h-6 rounded-full bg-[#c8f000]/15 border border-[#c8f000]/20 flex items-center justify-center text-[10px] font-black text-[#c8f000] flex-shrink-0">
          {lead.avatar}
        </div>
        <p className="text-white text-[11px] font-semibold truncate flex-1 min-w-0">
          {lead.name}
        </p>
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#c8f000]/10 text-[#c8f000] flex-shrink-0">
          {lead.source}
        </span>
        <span className="text-[#c8f000] text-[10px] font-black flex-shrink-0">{lead.value}</span>
      </div>
    </motion.div>
  );
}

function KanbanColumn({
  col,
  colIdx,
}: {
  col: (typeof kanbanColumns)[0];
  colIdx: number;
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[#a1a1aa] text-[10px] font-bold uppercase tracking-wider truncate">
          {col.title}
        </p>
        <span className="bg-white/10 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ml-1">
          {col.count}
        </span>
      </div>
      <div className="space-y-1.5">
        {col.leads.map((lead, leadIdx) => (
          <LeadCard
            key={lead.name}
            lead={lead}
            delay={0.8 + colIdx * 0.1 + leadIdx * 0.07}
          />
        ))}
      </div>
    </div>
  );
}

function KanbanBoard() {
  return (
    <div>
      {/* Mobile: only Nuevo + Cerrado */}
      <div className="sm:hidden grid grid-cols-2 gap-2">
        {[kanbanColumns[0], kanbanColumns[3]].map((col, i) => (
          <KanbanColumn key={col.title} col={col} colIdx={i} />
        ))}
      </div>
      {/* sm+: all 4 columns */}
      <div className="hidden sm:flex gap-2.5 overflow-hidden">
        {kanbanColumns.map((col, colIdx) => (
          <KanbanColumn key={col.title} col={col} colIdx={colIdx} />
        ))}
      </div>
    </div>
  );
}

export default function CRMSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="crm" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/70 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-[#c8f000] opacity-[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Mockup — mobile: first; desktop: second */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-first lg:order-last"
          >
            <div
              className="relative rounded-2xl p-4 sm:p-5 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,240,0,0.05)",
              }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8f000] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

              {/* CRM header bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                      <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="ml-1.5 bg-white/5 border border-white/8 rounded-md px-2.5 py-1 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000] animate-pulse" />
                    <span className="text-[#a1a1aa] text-[10px] truncate max-w-[120px]">leads.atraelab.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-2.5 py-1 flex-shrink-0">
                  <span className="text-[#c8f000] text-[9px] font-black uppercase whitespace-nowrap">28 leads hoy</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "Total", value: "284", color: "#ffffff" },
                  { label: "Cierre", value: "38%", color: "#c8f000" },
                  { label: "Valor", value: "$124k", color: "#c8f000" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center">
                    <p className="font-black text-base leading-none" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Kanban */}
              <KanbanBoard />
            </div>
          </motion.div>

          {/* Content — mobile: second; desktop: first */}
          <div className="order-last lg:order-first">
            {/* Badges row */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/30 rounded-full px-3 py-1.5 badge-pulse"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
                <span className="text-[#c8f000] text-[10px] font-black uppercase tracking-widest">Nuevo</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
              >
                <span className="text-[#a1a1aa] text-[10px] font-bold uppercase tracking-widest">LeadShield CRM</span>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight"
            >
              Ningún lead
              <br />
              <span className="gradient-text">se pierde</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-[#a1a1aa] text-base leading-relaxed"
            >
              LeadShield es nuestro CRM propio, diseñado específicamente para equipos de ventas que viven de la pauta digital. Cada lead, bien organizado, desde el primer clic hasta el cierre.
            </motion.p>

            <ul className="mt-7 space-y-3">
              {features.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#c8f000] flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{feat}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://leads.atraelab.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-7 py-3.5 rounded-full btn-neon"
              >
                <ExternalLink size={15} />
                Ver demo del CRM
              </motion.a>

              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 text-[#a1a1aa] font-semibold text-sm hover:text-white transition-colors duration-200"
              >
                Quiero implementarlo →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
