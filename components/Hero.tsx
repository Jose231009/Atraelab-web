"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, BarChart2, Bell, Calendar, ChevronDown,
  LayoutDashboard, Search, Settings, TrendingUp, Users,
  UserPlus, Zap,
} from "lucide-react";
import React from "react";

// ── Design tokens ─────────────────────────────────────────────
const LM = "#D5E83F";
const FG = "#F4F1E7";
const FG2 = "rgba(244,241,231,0.72)";
const FG3 = "rgba(244,241,231,0.45)";
const CB = "#13243A";
const BD = "rgba(255,255,255,0.08)";

// ── Kanban lead card ─────────────────────────────────────────
function LeadCard({ name, source, time, checkmark = false }: {
  name: string; source: string; time: string; checkmark?: boolean;
}) {
  const initials = name.split(" ").slice(0, 2).map(w => w[0]).join("");
  const palette = ["#6366f1", "#8b5cf6", "#06b6d4", "#f97316", "#ec4899", "#10b981"];
  const ac = palette[name.charCodeAt(0) % palette.length];
  return (
    <div style={{
      background: CB, border: `1px solid ${BD}`, borderRadius: 10,
      padding: "8px 10px", display: "flex", alignItems: "center", gap: 8, marginBottom: 5,
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%", background: ac + "30",
        border: `1.5px solid ${ac}60`, display: "flex", alignItems: "center",
        justifyContent: "center", flexShrink: 0, fontSize: 10, fontWeight: 700, color: ac,
      }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: FG, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
        <div style={{ color: FG3, fontSize: 10 }}>{source} · {checkmark ? "✓" : time}</div>
      </div>
      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, letterSpacing: 1 }}>···</span>
    </div>
  );
}

// ── Kanban column ─────────────────────────────────────────────
const COL_COLORS: Record<string, string> = {
  NUEVO: "#60a5fa", CONTACTADO: LM, "PRESENTACIÓN": "#a78bfa", CIERRE: "#34d399",
};
function KanbanCol({ title, count, cards }: {
  title: string; count: number;
  cards: { name: string; source: string; time: string; checkmark?: boolean }[];
}) {
  const color = COL_COLORS[title] ?? "#60a5fa";
  return (
    <div style={{ flex: "1 1 0", minWidth: 0 }}>
      <div style={{ height: 3, background: color, borderRadius: "2px 2px 0 0", marginBottom: 9 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 9, paddingLeft: 1 }}>
        <span style={{ color: "rgba(244,241,231,0.85)", fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>{title}</span>
        <span style={{ color: FG3, fontSize: 10 }}>· {count}</span>
      </div>
      {cards.map(c => <LeadCard key={c.name} {...c} />)}
    </div>
  );
}

// ── CRM Dashboard ─────────────────────────────────────────────
function CRMDashboard() {
  const columns = [
    { title: "NUEVO", count: 8, cards: [
      { name: "Lucía F.", source: "Meta", time: "4 min" },
      { name: "Marcos P.", source: "Meta", time: "12 min" },
      { name: "Valentina R.", source: "TikTok", time: "1 h" },
      { name: "Daniel L.", source: "Google", time: "2 h" },
    ]},
    { title: "CONTACTADO", count: 11, cards: [
      { name: "Ana G.", source: "TikTok", time: "Ayer" },
      { name: "Carlos R.", source: "Meta", time: "Ayer" },
      { name: "José M.", source: "Referido", time: "2d" },
    ]},
    { title: "PRESENTACIÓN", count: 7, cards: [
      { name: "Diego M.", source: "Google", time: "3d" },
      { name: "Sofía L.", source: "Meta", time: "4d" },
      { name: "Andrea P.", source: "TikTok", time: "4d" },
    ]},
    { title: "CIERRE", count: 3, cards: [
      { name: "Juan T.", source: "Meta", time: "✓", checkmark: true },
      { name: "Miguel C.", source: "Google", time: "✓", checkmark: true },
      { name: "Laura S.", source: "Referido", time: "✓", checkmark: true },
    ]},
  ];
  const nav = [
    { icon: LayoutDashboard, label: "Pipeline", active: true },
    { icon: Users, label: "Leads" },
    { icon: Zap, label: "Automatizaciones" },
    { icon: Calendar, label: "Calendario" },
    { icon: BarChart2, label: "Reportes" },
    { icon: Settings, label: "Configuración" },
  ];
  const metrics = [
    { num: "161", label: "LEADS ESTE MES", trend: "↑ +23% vs mes anterior", tc: "#4ade80" },
    { num: "4.2 min", label: "VELOCIDAD PROM.", trend: "↓ 28% vs mes anterior", tc: "#f87171" },
  ];
  const jdAvatar = (size: number) => (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.34, fontWeight: 700, color: "#fff", flexShrink: 0,
    }}>JD</div>
  );
  return (
    <div style={{
      display: "flex", borderRadius: 20, overflow: "hidden",
      background: "linear-gradient(145deg, #0F1E2E 0%, #0D1B28 55%, #091622 100%)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 35px 100px rgba(0,0,0,0.55), 0 0 80px rgba(190,220,50,0.08)",
      height: 500,
    }}>
      {/* Sidebar */}
      <div style={{
        width: 158, flexShrink: 0, background: "rgba(0,0,0,0.2)",
        borderRight: `1px solid ${BD}`, display: "flex", flexDirection: "column", padding: "16px 0",
      }}>
        <div style={{ padding: "0 12px 16px", display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6,
            background: `linear-gradient(135deg, ${LM}, #a8c400)`,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}><LayoutDashboard size={11} color="#07131D" /></div>
          <span style={{ color: FG, fontWeight: 700, fontSize: 12 }}>Pipeline<span style={{ color: LM }}>CRM</span></span>
        </div>
        <div style={{ flex: 1, padding: "0 6px" }}>
          {nav.map(({ icon: Icon, label, active }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 7, padding: "7px 9px",
              borderRadius: 7, marginBottom: 1,
              background: active ? "rgba(213,232,63,0.1)" : "transparent",
              color: active ? LM : FG3,
            }}>
              <Icon size={12} />
              <span style={{ fontSize: 11, fontWeight: active ? 600 : 400 }}>{label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 12px 0", borderTop: `1px solid ${BD}`, display: "flex", alignItems: "center", gap: 7 }}>
          {jdAvatar(26)}
          <div>
            <div style={{ color: FG, fontSize: 11, fontWeight: 600 }}>Juan D.</div>
            <div style={{ color: FG3, fontSize: 9 }}>Líder de Red</div>
          </div>
        </div>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 18px", borderBottom: `1px solid ${BD}`, flexShrink: 0,
        }}>
          <div>
            <div style={{ color: FG, fontWeight: 700, fontSize: 15 }}>Pipeline</div>
            <div style={{ color: FG3, fontSize: 10 }}>Convierte más personas en tu misión.</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 5,
              background: "rgba(255,255,255,0.05)", border: `1px solid ${BD}`,
              borderRadius: 7, padding: "5px 9px",
            }}>
              <Search size={10} color={FG3} />
              <span style={{ color: "rgba(244,241,231,0.3)", fontSize: 10 }}>Buscar leads...</span>
            </div>
            <div style={{ position: "relative" }}>
              <Bell size={14} color="rgba(244,241,231,0.55)" />
              <div style={{ position: "absolute", top: -2, right: -2, width: 6, height: 6, borderRadius: "50%", background: LM }} />
            </div>
            {jdAvatar(24)}
            <div style={{
              display: "flex", alignItems: "center", gap: 3,
              background: "rgba(255,255,255,0.05)", border: `1px solid ${BD}`,
              borderRadius: 7, padding: "4px 9px",
            }}>
              <span style={{ color: "rgba(244,241,231,0.65)", fontSize: 10 }}>Este mes</span>
              <ChevronDown size={10} color={FG3} />
            </div>
          </div>
        </div>

        {/* Kanban */}
        <div style={{ flex: 1, display: "flex", gap: 8, padding: "12px 16px", overflow: "hidden" }}>
          {columns.map(col => <KanbanCol key={col.title} {...col} />)}
        </div>

        {/* Bottom metrics */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 16px 12px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: "auto" }}>
            {jdAvatar(22)}
            <div>
              <div style={{ color: FG, fontSize: 10, fontWeight: 600 }}>Juan D.</div>
              <div style={{ color: FG3, fontSize: 8 }}>Líder de Red</div>
            </div>
            <ArrowRight size={10} color={LM} />
          </div>
          {metrics.map(({ num, label, trend, tc }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.04)", border: `1px solid ${BD}`,
              borderRadius: 9, padding: "7px 12px", minWidth: 88,
            }}>
              <div style={{ color: FG, fontWeight: 800, fontSize: 18, lineHeight: 1 }}>{num}</div>
              <div style={{ color: FG3, fontSize: 8, marginTop: 2, letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ color: tc, fontSize: 8, marginTop: 2 }}>{trend}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export default function Hero() {
  const reduced = useReducedMotion();
  const float1 = reduced ? {} : {
    animate: { y: [0, -6, 0] as number[] },
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
  };
  const float2 = reduced ? {} : {
    animate: { y: [0, -4, 0] as number[] },
    transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
  };

  return (
    <section id="home" style={{
      position: "relative", minHeight: "90vh", display: "flex",
      alignItems: "center", paddingTop: 80, paddingBottom: 60, overflow: "hidden",
      background: `
        radial-gradient(circle at 75% 35%, rgba(185,220,50,.12), transparent 32%),
        radial-gradient(circle at 45% 65%, rgba(110,180,50,.07), transparent 35%),
        linear-gradient(135deg, #07131D 0%, #091822 55%, #07121C 100%)
      `,
    }}>
      {/* Responsive + animations */}
      <style>{`
        #hero-grid{display:grid;grid-template-columns:40% 60%;gap:48px;align-items:center}
        #hero-dash{transform:perspective(1400px) rotateY(-3deg) rotateX(1deg);transform-origin:center center}
        #hero-wrap{position:relative;width:100%;padding-top:52px;padding-bottom:44px}
        @media(max-width:1024px){
          #hero-grid{grid-template-columns:1fr}
          #hero-dash{transform:none}
          .hero-h1{font-size:clamp(44px,9vw,64px)!important}
        }
        @media(max-width:640px){
          #hero-cnt{padding:0 20px!important}
          .hero-h1{font-size:clamp(40px,11vw,54px)!important}
        }
        @keyframes glow-pulse{0%,100%{opacity:.12}50%{opacity:.2}}
        #hero-glow-bg{animation:glow-pulse 7s ease-in-out infinite}
        @media(prefers-reduced-motion:reduce){#hero-glow-bg{animation:none}}
      `}</style>

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient glow - dashboard side */}
      <div id="hero-glow-bg" style={{
        position: "absolute", right: "3%", top: "15%", width: 600, height: 600,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(185,220,50,0.14) 0%, transparent 70%)",
        filter: "blur(70px)",
      }} />
      <div style={{
        position: "absolute", left: "5%", bottom: "10%", width: 350, height: 350,
        borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(110,180,50,0.07) 0%, transparent 70%)",
        filter: "blur(90px)",
      }} />

      {/* Container */}
      <div id="hero-cnt" style={{ maxWidth: 1480, margin: "0 auto", padding: "0 52px", width: "100%" }}>
        <div id="hero-grid">

          {/* ── Left column ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                borderRadius: 999, background: "rgba(213,232,63,0.08)",
                border: "1px solid rgba(213,232,63,0.28)", padding: "10px 18px", marginBottom: 28,
              }}>
                <span style={{ fontSize: 14 }}>⚡</span>
                <span style={{ color: LM, fontSize: 14, fontWeight: 500 }}>
                  Sistema activo en 30+ redes de network marketing
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              style={{
                fontSize: "clamp(54px, 5.5vw, 90px)",
                fontWeight: 800, lineHeight: 0.96,
                letterSpacing: "-0.045em", color: FG, margin: 0,
              }}
            >
              Más<br />
              presentaciones.<br />
              Menos{" "}
              <span style={{ color: LM, fontStyle: "italic" }}>prospección</span>
              <br />en frío.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              style={{ marginTop: 28, color: FG2, fontSize: 19, lineHeight: 1.55, maxWidth: 520 }}
            >
              Publicidad, automatización y CRM en un solo sistema para líderes que necesitan más prospectos calificados, seguimiento rápido y orden en su operación.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <motion.a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(213,232,63,0.3)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: LM, color: "#07131D", fontWeight: 700, fontSize: 18,
                  padding: "18px 32px", borderRadius: 12, textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(213,232,63,0.22)",
                  willChange: "transform", width: "fit-content",
                }}
              >
                Quiero más prospectos <ArrowRight size={18} />
              </motion.a>
              <div style={{ display: "flex", alignItems: "center", gap: 7, color: FG3, fontSize: 14 }}>
                <span style={{ color: LM, fontSize: 15 }}>📅</span>
                Agenda una demo de 15 min
              </div>
            </motion.div>

            {/* Mini benefits */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.60 }}
              style={{ display: "flex", alignItems: "center", marginTop: 36 }}
            >
              {([
                { icon: Users, l1: "Más leads", l2: "calificados" },
                { icon: Zap, l1: "Procesos", l2: "automatizados" },
                { icon: BarChart2, l1: "Crecimiento", l2: "predecible" },
              ] as const).map(({ icon: Icon, l1, l2 }, i) => (
                <React.Fragment key={l1}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <Icon size={15} style={{ color: LM, flexShrink: 0 }} />
                    <div>
                      <div style={{ color: FG, fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>{l1}</div>
                      <div style={{ color: FG3, fontSize: 11, lineHeight: 1.2 }}>{l2}</div>
                    </div>
                  </div>
                  {i < 2 && <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.13)", margin: "0 18px" }} />}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.25, 0.46, 0.45, 0.94] }}
            id="hero-wrap"
          >
            {/* Floating: Nuevo lead */}
            <motion.div
              {...float1}
              style={{
                position: "absolute", top: 0, left: 14, zIndex: 30,
                background: "rgba(14,28,44,0.9)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(213,232,63,0.22)", borderRadius: 15,
                boxShadow: "0 8px 32px rgba(0,0,0,0.42), 0 0 22px rgba(213,232,63,0.09)",
                padding: "12px 16px", display: "flex", alignItems: "center", gap: 11, minWidth: 200,
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: "50%", background: "rgba(213,232,63,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <UserPlus size={15} color={LM} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ color: FG, fontWeight: 700, fontSize: 13 }}>Nuevo lead</span>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                </div>
                <span style={{ color: FG3, fontSize: 11 }}>Hace 2 min</span>
              </div>
            </motion.div>

            {/* Dashboard */}
            <div id="hero-dash">
              <CRMDashboard />
            </div>

            {/* Floating: Traffic */}
            <motion.div
              {...float2}
              style={{
                position: "absolute", bottom: 0, right: -10, zIndex: 30,
                background: "rgba(14,28,44,0.94)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(213,232,63,0.16)", borderRadius: 18,
                boxShadow: "0 8px 32px rgba(0,0,0,0.52), 0 0 24px rgba(213,232,63,0.07)",
                padding: "15px 20px", minWidth: 172,
              }}
            >
              <div style={{ color: FG3, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 6 }}>
                TRÁFICO HOY
              </div>
              <div style={{ color: LM, fontWeight: 800, fontSize: 28, lineHeight: 1, marginBottom: 5 }}>28 leads</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <TrendingUp size={11} color="#4ade80" />
                <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 600 }}>+12% vs ayer</span>
              </div>
              <svg width="100%" height="24" viewBox="0 0 140 24" style={{ marginTop: 9, opacity: 0.8 }}>
                <defs>
                  <linearGradient id="hcg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={LM} stopOpacity="0.35" />
                    <stop offset="100%" stopColor={LM} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline points="0,20 20,16 40,18 60,10 80,14 100,6 120,9 140,3"
                  fill="none" stroke={LM} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="0,20 20,16 40,18 60,10 80,14 100,6 120,9 140,3 140,24 0,24"
                  fill="url(#hcg)" />
              </svg>
            </motion.div>

            {/* Glow behind dashboard */}
            <div style={{
              position: "absolute", inset: "5% -8%", zIndex: -1, pointerEvents: "none",
              background: "radial-gradient(ellipse, rgba(185,220,50,0.11) 0%, transparent 70%)",
              filter: "blur(50px)",
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
