"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_STORAGE_KEY = "atraelab-cookies-accepted";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const cookiesSet = Boolean(localStorage.getItem(COOKIE_STORAGE_KEY));
      setVisible(cookiesSet && window.scrollY > 320);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("storage", updateVisibility);

    const contact = document.querySelector("#contacto");
    if (!contact) {
      return () => {
        window.removeEventListener("scroll", updateVisibility);
        window.removeEventListener("storage", updateVisibility);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("storage", updateVisibility);
      observer.disconnect();
    };
  }, []);

  const shouldShow = visible && !contactInView;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          className="sm:hidden fixed left-4 right-4 bottom-4 z-40"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-full rounded-2xl bg-[#c8f000] px-5 py-4 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_12px_28px_rgba(200,240,0,0.18)]"
          >
            Agendá diagnóstico
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
