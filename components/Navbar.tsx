"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#servicios" },
  { label: "Network", href: "#network" },
  { label: "CRM", href: "#crm" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contacto", href: "#contacto" },
];

function AtraeLabLogo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 group">
      {/* Icon */}
      <div className="relative w-9 h-10 flex-shrink-0">
        <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* White ring — chat bubble style */}
          <circle cx="18" cy="30" r="11" stroke="white" strokeWidth="5" />
          {/* Chat bubble tail (bottom-left) */}
          <path d="M10 39 L7 44 L15 41" fill="white" />
          {/* Lime arrow shaft */}
          <rect x="15.5" y="18" width="5" height="16" rx="2.5" fill="#c8f000" />
          {/* Lime arrowhead */}
          <path d="M18 7 L27 19 H9 Z" fill="#c8f000" />
          {/* Spark lines */}
          <line x1="18" y1="5" x2="18" y2="2" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" />
          <line x1="14.5" y1="7.5" x2="11.5" y2="5" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" />
          <line x1="21.5" y1="7.5" x2="24.5" y2="5" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {/* Hover glow */}
        <div className="absolute inset-0 bg-[#c8f000] opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300" />
      </div>
      {/* Text */}
      <span className="text-white text-[1.1rem] leading-none tracking-tight">
        <span className="font-black">atrae</span>
        <span className="font-light">Lab</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.8)" : "none",
          transition: "background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <AtraeLabLogo />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 relative group font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#c8f000] group-hover:w-4 transition-all duration-200 rounded-full" />
                </button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <motion.button
                onClick={() => handleNavClick("#contacto")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:flex items-center gap-2 bg-[#c8f000] text-black font-black text-xs lg:text-sm px-4 lg:px-5 py-2.5 rounded-full btn-neon uppercase tracking-wide whitespace-nowrap"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                ¡Reservá tu Auditoría!
              </motion.button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-white hover:text-[#c8f000] transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0a0a0a] border-l border-white/8 lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/8">
                <AtraeLabLogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#a1a1aa] hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 py-6 px-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-4 py-3.5 text-[#a1a1aa] hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium text-left w-full group"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#c8f000] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-white/8">
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => handleNavClick("#contacto")}
                  className="w-full bg-[#c8f000] text-black font-black text-sm py-3.5 rounded-full btn-neon uppercase tracking-wide"
                >
                  ¡Reservá tu Auditoría Gratuita!
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
