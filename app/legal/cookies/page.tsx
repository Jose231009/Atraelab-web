import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | AtraeLab",
  description: "Información sobre cómo AtraeLab utiliza cookies en su sitio web.",
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-[#c8f000] text-sm font-medium transition-colors mb-10"
        >
          ← Volver al inicio
        </Link>

        <div
          className="p-8 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <h1 className="text-white font-black text-3xl mb-2">Política de Cookies</h1>
          <p className="text-[#a1a1aa] text-sm mb-8">Última actualización: enero 2025</p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">¿Qué son las cookies?</h2>
          <p className="text-[#a1a1aa]">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web.
            Se usan ampliamente para hacer que los sitios funcionen correctamente y para proporcionar información a los
            propietarios del sitio.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">Tipos de cookies que usamos</h2>

          <h3 className="text-white font-semibold text-base mt-5 mb-2">🍪 Cookies necesarias</h3>
          <p className="text-[#a1a1aa]">
            Son esenciales para el funcionamiento básico del sitio. Sin ellas, el sitio no puede funcionar correctamente.
            No se pueden desactivar.
          </p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5 mt-2 text-sm">
            <li><strong className="text-white">atraelab-cookies-accepted:</strong> Guarda tu preferencia de cookies</li>
            <li><strong className="text-white">Session cookies:</strong> Mantienen tu sesión activa</li>
          </ul>

          <h3 className="text-white font-semibold text-base mt-5 mb-2">📊 Cookies analíticas</h3>
          <p className="text-[#a1a1aa]">
            Nos permiten entender cómo los visitantes interactúan con el sitio para mejorar la experiencia.
          </p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5 mt-2 text-sm">
            <li><strong className="text-white">Vercel Analytics:</strong> Análisis de tráfico anónimo</li>
          </ul>

          <h3 className="text-white font-semibold text-base mt-5 mb-2">🎯 Cookies de marketing</h3>
          <p className="text-[#a1a1aa]">
            Usadas para rastrear visitantes y mostrar anuncios relevantes. Solo se activan con tu consentimiento.
          </p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5 mt-2 text-sm">
            <li><strong className="text-white">Meta Pixel:</strong> Para medición de campañas en Facebook/Instagram</li>
            <li><strong className="text-white">Google Analytics / Tag Manager:</strong> Para medición y remarketing</li>
            <li><strong className="text-white">TikTok Pixel:</strong> Para medición de campañas en TikTok</li>
          </ul>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">Cómo gestionar las cookies</h2>
          <p className="text-[#a1a1aa] mb-3">Podés gestionar tus preferencias de cookies de las siguientes maneras:</p>
          <ul className="text-[#a1a1aa] space-y-2 list-disc pl-5">
            <li>
              <strong className="text-white">Banner del sitio:</strong> Al ingresar al sitio, podés aceptar solo las necesarias
              o aceptar todas. Esta preferencia se guarda en tu navegador.
            </li>
            <li>
              <strong className="text-white">Configuración del navegador:</strong> Podés bloquear o eliminar cookies desde
              la configuración de tu navegador. Ten en cuenta que esto puede afectar la funcionalidad del sitio.
            </li>
            <li>
              <strong className="text-white">Herramientas de terceros:</strong> Podés optar por no recibir publicidad
              personalizada en <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#c8f000] hover:underline">Google</a> y{" "}
              <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-[#c8f000] hover:underline">Meta</a>.
            </li>
          </ul>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">Actualizaciones</h2>
          <p className="text-[#a1a1aa]">
            Podemos actualizar esta política para reflejar cambios en las tecnologías que usamos. Te recomendamos
            revisarla periódicamente.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">Contacto</h2>
          <p className="text-[#a1a1aa]">
            Para preguntas sobre el uso de cookies, escribinos a{" "}
            <a href="mailto:hola@atraelab.com" className="text-[#c8f000] hover:underline">hola@atraelab.com</a>.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-6 text-sm">
          <Link href="/legal/privacidad" className="text-[#a1a1aa] hover:text-[#c8f000] transition-colors">Política de Privacidad</Link>
          <Link href="/legal/terminos" className="text-[#a1a1aa] hover:text-[#c8f000] transition-colors">Términos de Servicio</Link>
        </div>
      </div>
    </main>
  );
}
