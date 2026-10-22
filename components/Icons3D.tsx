"use client";

import { motion } from "framer-motion";

// Shared 3D hover animation
const hoverVariant = {
  rest: { rotateY: 0, rotateX: 0 },
  hover: {
    rotateY: 15,
    rotateX: -8,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

// META: Isometric cube with Meta blue face
export function MetaCube({ size = 80 }: { size?: number }) {
  const s = size;
  const f = s * 0.6; // face size
  const d = s * 0.15; // depth offset

  return (
    <motion.div
      variants={hoverVariant}
      initial="rest"
      whileHover="hover"
      style={{
        width: s,
        height: s,
        perspective: 800,
        perspectiveOrigin: "50% 50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        cursor: "default",
      }}
    >
      <div style={{ position: "relative", width: f, height: f }}>
        {/* Top face */}
        <div
          style={{
            position: "absolute",
            width: f,
            height: d,
            background: "linear-gradient(135deg, #1a8cff 0%, #0866FF 100%)",
            top: -d,
            left: 0,
            transform: `skewX(${-45}deg) scaleY(0.6)`,
            transformOrigin: "bottom",
            opacity: 0.8,
          }}
        />
        {/* Right face */}
        <div
          style={{
            position: "absolute",
            width: d,
            height: f,
            background: "linear-gradient(180deg, #0550cc 0%, #033a99 100%)",
            top: 0,
            right: -d * 0.7,
            transform: `skewY(${-45}deg) scaleX(0.6)`,
            transformOrigin: "left",
            opacity: 0.9,
          }}
        />
        {/* Front face */}
        <div
          style={{
            position: "absolute",
            width: f,
            height: f,
            background: "rgba(8,102,255,0.15)",
            border: "1.5px solid rgba(8,102,255,0.5)",
            borderRadius: 10,
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Meta infinity logo */}
          <svg width={f * 0.55} height={f * 0.3} viewBox="0 0 40 24" fill="none">
            <path d="M10 12C10 8 12 5 15 5C17.5 5 19.5 7 20 12C20.5 7 22.5 5 25 5C28 5 30 8 30 12C30 16 28 19 25 19C22.5 19 20.5 17 20 12C19.5 17 17.5 19 15 19C12 19 10 16 10 12Z" fill="#4da6ff"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// GOOGLE: Sphere with multicolor gradient using CSS
export function GoogleSphere({ size = 80 }: { size?: number }) {
  const s = size * 0.65;

  return (
    <motion.div
      variants={hoverVariant}
      initial="rest"
      whileHover="hover"
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        cursor: "default",
      }}
    >
      {/* Sphere simulation with radial gradients */}
      <div
        style={{
          width: s,
          height: s,
          borderRadius: "50%",
          position: "relative",
          background:
            "conic-gradient(from 0deg, #EA4335 0deg, #EA4335 90deg, #FBBC05 90deg, #FBBC05 180deg, #34A853 180deg, #34A853 270deg, #4285F4 270deg, #4285F4 360deg)",
          boxShadow: "0 8px 24px rgba(66,133,244,0.3), inset 0 -4px 8px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}
      >
        {/* Highlight for 3D sphere effect */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "35%",
            height: "35%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />
        {/* Google G overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <svg width={s * 0.45} height={s * 0.45} viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// TIKTOK: Cylinder with TikTok colors
export function TikTokCylinder({ size = 80 }: { size?: number }) {
  const w = size * 0.55;
  const h = size * 0.65;
  const topH = size * 0.12;

  return (
    <motion.div
      variants={hoverVariant}
      initial="rest"
      whileHover="hover"
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        cursor: "default",
      }}
    >
      <div style={{ position: "relative", width: w, height: h + topH / 2 }}>
        {/* Cylinder top ellipse */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: w,
            height: topH,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #69C9D0 0%, #3aa8b0 100%)",
            boxShadow: "0 2px 8px rgba(105,201,208,0.4)",
            zIndex: 2,
          }}
        />
        {/* Cylinder body */}
        <div
          style={{
            position: "absolute",
            top: topH / 2,
            left: 0,
            width: w,
            height: h,
            background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
            border: "1px solid rgba(105,201,208,0.3)",
            borderTop: "none",
            borderRadius: `0 0 ${w / 2}px ${w / 2}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Red left stripe accent */}
          <div
            style={{
              position: "absolute",
              left: "12%",
              top: "15%",
              width: "3px",
              height: "70%",
              background: "#EE1D52",
              borderRadius: 2,
            }}
          />
          {/* TikTok note icon */}
          <svg width={w * 0.55} height={w * 0.55} viewBox="0 0 24 24" fill="none">
            <path
              d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-5.5 0 2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 105.35 6.05V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z"
              fill="white"
            />
          </svg>
        </div>
        {/* Bottom ellipse */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: w,
            height: topH,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
            border: "1px solid rgba(238,29,82,0.3)",
            zIndex: 1,
          }}
        />
      </div>
    </motion.div>
  );
}

// Decorative 3D floating elements for Results section background
export function FloatingDecor3D() {
  const shapes = [
    { x: "8%", y: "20%", delay: 0, size: 32 },
    { x: "85%", y: "15%", delay: 0.5, size: 24 },
    { x: "75%", y: "70%", delay: 1, size: 40 },
    { x: "5%", y: "75%", delay: 0.8, size: 20 },
  ];

  return (
    <>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          className="absolute pointer-events-none"
          style={{ left: s.x, top: s.y, opacity: 0.06, willChange: "transform" }}
        >
          {i % 2 === 0 ? (
            // Bar chart shape
            <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="#c8f000">
              <rect x="2" y="14" width="4" height="8" rx="1"/>
              <rect x="10" y="8" width="4" height="14" rx="1"/>
              <rect x="18" y="4" width="4" height="18" rx="1"/>
            </svg>
          ) : (
            // Arrow up shape
            <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke="#c8f000" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          )}
        </motion.div>
      ))}
    </>
  );
}
