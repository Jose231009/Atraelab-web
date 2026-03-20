"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

function AtraeLabLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-10 flex-shrink-0">
        <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="18" cy="30" r="11" stroke="white" strokeWidth="5" />
          <path d="M10 39 L7 44 L15 41" fill="white" />
          <rect x="15.5" y="18" width="5" height="16" rx="2.5" fill="#c8f000" />
          <path d="M18 7 L27 19 H9 Z" fill="#c8f000" />
          <line x1="18" y1="5" x2="18" y2="2" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" />
          <line x1="14.5" y1="7.5" x2="11.5" y2="5" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" />
          <line x1="21.5" y1="7.5" x2="24.5" y2="5" stroke="#c8f000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-white text-[1.1rem] leading-none tracking-tight">
        <span className="font-black">atrae</span>
        <span className="font-light">Lab</span>
      </span>
    </div>
  );
}

function PartnerBadges() {
  const partners = [
    {
      name: "Meta",
      icon: (
        <svg width="14" height="14" viewBox="0 0 40 24" fill="none">
          <path d="M10 12C10 8 12 5 15 5C17.5 5 19.5 7 20 12C20.5 7 22.5 5 25 5C28 5 30 8 30 12C30 16 28 19 25 19C22.5 19 20.5 17 20 12C19.5 17 17.5 19 15 19C12 19 10 16 10 12Z" fill="#0866FF"/>
        </svg>
      ),
    },
    {
      name: "Google",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <path d="M20.1 6.1a4.6 4.6 0 01-3.6-4V2h-3.3V15.5a2.75 2.75 0 01-5.5 0 2.75 2.75 0 012.75-2.75c.26 0 .51.04.75.1V9.45a6.1 6.1 0 105.35 6.05V8.15A7.85 7.85 0 0021.1 9.6V6.35a4.65 4.65 0 01-1-.25z" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      {partners.map((p) => (
        <div
          key={p.name}
          className="flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-2.5 py-1.5"
        >
          {p.icon}
          <span className="text-[#a1a1aa] text-[10px] font-medium">{p.name} Partner</span>
        </div>
      ))}
    </div>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/atraelab",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@atraelab",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@atraelab",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#servicios" },
  { label: "CRM", href: "#crm" },
  { label: "Proceso", href: "#proceso" },
  { label: "Resultados", href: "#resultados" },
  { label: "Blog", href: "/blog" },
];

// Latest 3 blog posts
const latestPosts = blogPosts.slice(0, 3);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      {/* Decorative stars */}
      <div className="absolute top-8 right-8 opacity-15 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 0L43.5 36.5L80 40L43.5 43.5L40 80L36.5 43.5L0 40L36.5 36.5L40 0Z" fill="#c8f000"/>
        </svg>
      </div>
      <div className="absolute bottom-12 left-10 opacity-10 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L21.75 18.25L40 20L21.75 21.75L20 40L18.25 21.75L0 20L18.25 18.25L20 0Z" fill="#c8f000"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <AtraeLabLogo />
            <p className="mt-4 text-[#a1a1aa] text-sm leading-relaxed max-w-xs">
              Agencia de performance marketing especializada en escalar negocios con Meta Ads, Google Ads y TikTok Ads.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:border-[#c8f000]/40 hover:bg-[#c8f000]/10 hover:text-[#c8f000] transition-all duration-200"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegación</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link
                      href={l.href}
                      className="text-[#a1a1aa] text-sm hover:text-[#c8f000] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-3 h-px bg-[#c8f000] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {l.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(l.href)}
                      className="text-[#a1a1aa] text-sm hover:text-[#c8f000] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-3 h-px bg-[#c8f000] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Services sub-links */}
            <p className="text-white font-bold text-sm uppercase tracking-wider mt-6 mb-3">Servicios</p>
            <ul className="space-y-2">
              {[
                { label: "Meta Ads", href: "/servicios/meta-ads", dot: "#0866FF" },
                { label: "Google Ads", href: "/servicios/google-ads", dot: "#4285F4" },
                { label: "TikTok Ads", href: "/servicios/tiktok-ads", dot: "#69C9D0" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[#a1a1aa] text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot }} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest blog posts */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Últimos artículos</p>
            <ul className="space-y-3">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#a1a1aa] text-sm hover:text-[#c8f000] transition-colors duration-200 line-clamp-2 leading-snug"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-[#c8f000] text-xs font-bold mt-4 hover:gap-2 transition-all duration-200"
            >
              Ver todos →
            </Link>
          </div>

          {/* CTA + Partners */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">¿Hablamos?</p>
            <p className="text-[#a1a1aa] text-sm mb-4">Reservá tu auditoría gratuita y empezá a escalar.</p>
            <motion.button
              onClick={() => handleNavClick("#contacto")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#c8f000] text-black font-black text-xs uppercase tracking-wide px-5 py-3 rounded-full btn-neon"
            >
              Auditoría Gratuita →
            </motion.button>

            <div className="mt-6">
              <a
                href="https://leads.atraelab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] text-sm hover:text-[#c8f000] transition-colors flex items-center gap-1.5 mb-5"
              >
                LeadShield CRM <span className="text-[#c8f000]">↗</span>
              </a>
              <p className="text-[#a1a1aa] text-xs uppercase tracking-widest mb-3">Partners Certificados</p>
              <PartnerBadges />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-[#a1a1aa] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} AtraeLab. Todos los derechos reservados.
          </p>
          {/* Legal links */}
          <div className="flex items-center gap-4 text-xs text-[#a1a1aa]">
            <Link href="/legal/privacidad" className="hover:text-[#c8f000] transition-colors">Privacidad</Link>
            <span>·</span>
            <Link href="/legal/terminos" className="hover:text-[#c8f000] transition-colors">Términos</Link>
            <span>·</span>
            <Link href="/legal/cookies" className="hover:text-[#c8f000] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#c8f000] text-black rounded-full flex items-center justify-center btn-neon"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </motion.button>
    </footer>
  );
}
