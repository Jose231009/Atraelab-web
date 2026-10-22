import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio | AtraeLab",
  description: "Leé los términos y condiciones del servicio de AtraeLab.",
};

export default function TerminosPage() {
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
          <h1 className="text-white font-black text-3xl mb-2">Términos de Servicio</h1>
          <p className="text-[#a1a1aa] text-sm mb-8">Última actualización: enero 2025</p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">1. Aceptación de los términos</h2>
          <p className="text-[#a1a1aa]">
            Al acceder y utilizar el sitio web atraelab.com, aceptás estos Términos de Servicio. Si no estás de acuerdo
            con alguna de estas condiciones, por favor no utilices el sitio.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">2. Descripción del servicio</h2>
          <p className="text-[#a1a1aa]">
            AtraeLab es una agencia de performance marketing que presta servicios de gestión de publicidad digital en
            plataformas como Meta Ads, Google Ads y TikTok Ads, así como servicios de CRM y estrategia digital.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">3. Uso aceptable</h2>
          <p className="text-[#a1a1aa] mb-3">Al utilizar nuestros servicios, te comprometés a:</p>
          <ul className="text-[#a1a1aa] space-y-1 list-disc pl-5">
            <li>Proporcionar información veraz y actualizada</li>
            <li>No utilizar nuestros servicios para actividades ilegales o fraudulentas</li>
            <li>Respetar los derechos de propiedad intelectual de AtraeLab y terceros</li>
            <li>No intentar acceder a sistemas o datos no autorizados</li>
          </ul>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">4. Propiedad intelectual</h2>
          <p className="text-[#a1a1aa]">
            Todo el contenido del sitio web —incluyendo textos, imágenes, logos, diseños y código— es propiedad de
            AtraeLab o sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. Queda
            prohibida su reproducción sin autorización expresa.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">5. Limitación de responsabilidad</h2>
          <p className="text-[#a1a1aa]">
            AtraeLab no garantiza resultados específicos en campañas publicitarias, ya que estos dependen de múltiples
            factores externos. En ningún caso seremos responsables por daños indirectos, incidentales o consecuentes
            derivados del uso de nuestros servicios.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">6. Contratos de servicio</h2>
          <p className="text-[#a1a1aa]">
            Los servicios específicos de gestión de campañas se rigen por contratos individuales firmados entre AtraeLab
            y cada cliente. Estos términos generales no sustituyen dichos contratos.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">7. Modificaciones</h2>
          <p className="text-[#a1a1aa]">
            AtraeLab se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos
            al publicarse en este sitio. El uso continuado del servicio implica la aceptación de los nuevos términos.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">8. Ley aplicable</h2>
          <p className="text-[#a1a1aa]">
            Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se resolverá ante los
            tribunales competentes de la Ciudad Autónoma de Buenos Aires.
          </p>

          <h2 className="text-white font-bold text-xl mt-8 mb-3">9. Contacto</h2>
          <p className="text-[#a1a1aa]">
            Para consultas sobre estos términos, escribinos a{" "}
            <a href="mailto:hola@atraelab.com" className="text-[#c8f000] hover:underline">hola@atraelab.com</a>.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-6 text-sm">
          <Link href="/legal/privacidad" className="text-[#a1a1aa] hover:text-[#c8f000] transition-colors">Política de Privacidad</Link>
          <Link href="/legal/cookies" className="text-[#a1a1aa] hover:text-[#c8f000] transition-colors">Política de Cookies</Link>
        </div>
      </div>
    </main>
  );
}
