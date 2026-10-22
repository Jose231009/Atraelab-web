import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | AtraeLab",
  description: "Conocé cómo AtraeLab trata y protege tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <main className="relative min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-[#c8f000] text-sm font-medium transition-colors mb-10"
        >
          ← Volver al inicio
        </Link>

        <div
          className="prose prose-invert prose-sm max-w-none p-8 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <h1 className="text-white font-black text-3xl mb-2">Política de Privacidad</h1>
          <p className="text-[#a1a1aa] text-sm mb-8">Última actualización: enero 2025</p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">1. Responsable del tratamiento</h2>
          <p className="text-[#a1a1aa]">
            AtraeLab es el responsable del tratamiento de los datos personales que se recopilan a través del sitio web
            atraelab.com. Para cualquier consulta relacionada con tus datos, podés contactarnos en{" "}
            <a href="mailto:hola@atraelab.com" className="text-[#c8f000] hover:underline">hola@atraelab.com</a>.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">2. Datos que recopilamos</h2>
          <p className="text-[#a1a1aa] mb-3">Recopilamos los siguientes datos cuando utilizás nuestro sitio o completás el formulario de contacto:</p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5">
            <li>Nombre y apellido</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono / WhatsApp</li>
            <li>Información sobre tu negocio (en el mensaje del formulario)</li>
            <li>Datos de navegación (cookies, IP, tipo de dispositivo)</li>
          </ul>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">3. Finalidad del tratamiento</h2>
          <p className="text-[#a1a1aa] mb-3">Utilizamos tus datos para:</p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5">
            <li>Responder a tus consultas y coordinar auditorías gratuitas</li>
            <li>Enviarte información relevante sobre nuestros servicios (solo si lo solicitaste)</li>
            <li>Mejorar la experiencia de navegación en nuestro sitio</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">4. Base legal del tratamiento</h2>
          <p className="text-[#a1a1aa]">
            El tratamiento de tus datos se basa en: (a) tu consentimiento explícito al completar el formulario de contacto,
            y (b) el interés legítimo de AtraeLab para responder consultas comerciales.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">5. Compartición de datos</h2>
          <p className="text-[#a1a1aa]">
            No vendemos ni alquilamos tus datos personales a terceros. Podemos compartirlos con proveedores de servicios
            que nos asisten (como plataformas de email) bajo estrictas obligaciones de confidencialidad.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">6. Retención de datos</h2>
          <p className="text-[#a1a1aa]">
            Conservamos tus datos durante el tiempo necesario para cumplir con la finalidad por la que fueron recopilados
            o según lo exija la legislación aplicable.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">7. Tus derechos</h2>
          <p className="text-[#a1a1aa] mb-3">Tenés derecho a:</p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5">
            <li>Acceder a los datos que tenemos sobre vos</li>
            <li>Rectificar datos incorrectos o incompletos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al tratamiento de tus datos</li>
            <li>Portar tus datos a otro proveedor</li>
          </ul>
          <p className="text-[#a1a1aa] mt-3">
            Para ejercer cualquier derecho, escribinos a{" "}
            <a href="mailto:hola@atraelab.com" className="text-[#c8f000] hover:underline">hola@atraelab.com</a>.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">8. Seguridad</h2>
          <p className="text-[#a1a1aa]">
            Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos contra accesos no autorizados,
            pérdidas o alteraciones.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">9. Cambios en esta política</h2>
          <p className="text-[#a1a1aa]">
            Podemos actualizar esta política periódicamente. Te notificaremos de cambios significativos publicando la nueva
            versión en esta página con la fecha de actualización.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-6 text-sm">
          <Link href="/legal/terminos" className="text-[#a1a1aa] hover:text-[#c8f000] transition-colors">Términos de Servicio</Link>
          <Link href="/legal/cookies" className="text-[#a1a1aa] hover:text-[#c8f000] transition-colors">Política de Cookies</Link>
        </div>
      </div>
    </main>
  );
}
