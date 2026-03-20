"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "@/lib/send-email";
import { CheckCircle2, AlertCircle, Loader2, Zap } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  whatsapp: z
    .string()
    .min(8, "El WhatsApp debe tener al menos 8 dígitos")
    .regex(/^\+?[\d\s\-()]+$/, "Número de teléfono inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#a1a1aa] text-sm focus:outline-none focus:border-[#c8f000]/50 focus:ring-1 focus:ring-[#c8f000]/20 transition-all duration-200 hover:border-white/20";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-400 text-xs flex items-center gap-1 mt-1"
    >
      <AlertCircle size={12} />
      {message}
    </motion.p>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[#a1a1aa] text-xs font-medium uppercase tracking-wider">
      {children}
    </label>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const result = await sendEmail(data);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c8f000] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
              <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">Contacto</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight"
            >
              ¿Listo para{" "}
              <span className="gradient-text">encender</span>{" "}
              tu crecimiento?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-5 text-[#a1a1aa] text-base leading-relaxed"
            >
              Reservá tu auditoría gratuita de 30 minutos. Analizamos tu situación actual y te mostramos exactamente cómo podemos escalar tu negocio.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {[
                { icon: "🎯", text: "Análisis de tu pauta actual sin costo" },
                { icon: "📊", text: "Proyección de ROAS para los próximos 90 días" },
                { icon: "🚀", text: "Plan de acción personalizado para tu industria" },
                { icon: "💬", text: "Respuesta en menos de 24 horas hábiles" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#c8f000]/10 border border-[#c8f000]/20 flex items-center justify-center text-sm flex-shrink-0">
                    {b.icon}
                  </div>
                  <p className="text-white text-sm">{b.text}</p>
                </div>
              ))}
            </motion.div>

            {/* Trust logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-10 pt-8 border-t border-white/8"
            >
              <p className="text-[#a1a1aa] text-xs uppercase tracking-widest mb-4">Partners certificados</p>
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { label: "Meta Business Partner", color: "#c8f000" },
                  { label: "Google Partner", color: "#c8f000" },
                  { label: "TikTok Ads Partner", color: "#c8f000" },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                    <span className="text-[#a1a1aa] text-xs font-medium">{p.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,240,0,0.05)",
              }}
            >
              {/* Card glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c8f000] opacity-5 rounded-full blur-3xl pointer-events-none" />

              {/* Success state */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#c8f000]/15 border border-[#c8f000]/30 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#c8f000]" />
                  </motion.div>
                  <h3 className="text-white font-black text-2xl">¡Mensaje enviado!</h3>
                  <p className="text-[#a1a1aa] text-sm max-w-xs">
                    Te contactaremos en menos de 24 horas hábiles para coordinar tu auditoría gratuita.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-[#c8f000] font-bold text-sm border border-[#c8f000]/30 hover:bg-[#c8f000]/10 rounded-full px-6 py-2.5 transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
                  <div className="mb-6">
                    <h3 className="text-white font-black text-xl">Auditoría gratuita</h3>
                    <p className="text-[#a1a1aa] text-sm mt-1">Completá el formulario y nos ponemos en contacto.</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>Nombre completo</FieldLabel>
                    <input
                      {...register("name")}
                      placeholder="Tu nombre y apellido"
                      className={inputClass}
                    />
                    <FieldError message={errors.name?.message} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>Email</FieldLabel>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="tu@email.com"
                      className={inputClass}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>WhatsApp</FieldLabel>
                    <input
                      {...register("whatsapp")}
                      type="tel"
                      placeholder="+54 9 11 1234-5678"
                      className={inputClass}
                    />
                    <FieldError message={errors.whatsapp?.message} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>Mensaje</FieldLabel>
                    <textarea
                      {...register("message")}
                      placeholder="Contanos sobre tu negocio y objetivos..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                    <FieldError message={errors.message?.message} />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">
                        Hubo un error al enviar. Por favor intentá de nuevo o contactanos directamente.
                      </p>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                    className="w-full bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide py-4 rounded-xl btn-neon disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Zap size={16} />
                        Quiero Crecer
                      </>
                    )}
                  </motion.button>

                  <p className="text-[#a1a1aa] text-xs text-center">
                    Sin spam. Tu información está segura y no se comparte con terceros.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
