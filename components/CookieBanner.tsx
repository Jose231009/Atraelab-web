"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const STORAGE_KEY = "atraelab-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on first render
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (all: boolean) => {
    localStorage.setItem(STORAGE_KEY, all ? "all" : "necessary");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl"
            style={{
              background: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 -4px 40px rgba(0,0,0,0.6)",
              pointerEvents: "all",
            }}
          >
            {/* Cookie icon */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ background: "rgba(200,240,0,0.1)", border: "1px solid rgba(200,240,0,0.2)" }}
            >
              🍪
            </div>

            {/* Text */}
            <p className="flex-1 text-[#a1a1aa] text-sm leading-relaxed">
              Usamos cookies para mejorar tu experiencia en AtraeLab.{" "}
              <a href="/legal/cookies" className="text-[#c8f000] hover:underline font-medium">
                Más información
              </a>
              .
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => accept(false)}
                className="flex-1 sm:flex-none text-xs font-bold px-4 py-2.5 rounded-lg border border-white/15 text-[#a1a1aa] hover:text-white hover:border-white/30 transition-all duration-200 whitespace-nowrap"
              >
                Solo necesarias
              </button>
              <motion.button
                onClick={() => accept(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 sm:flex-none text-xs font-black px-5 py-2.5 rounded-lg uppercase tracking-wide whitespace-nowrap btn-neon"
                style={{ background: "#c8f000", color: "#000" }}
              >
                Aceptar todo
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
