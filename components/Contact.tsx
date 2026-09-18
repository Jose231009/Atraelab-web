"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { sendEmail } from "@/lib/send-email";
import { CheckCircle2, AlertCircle, Loader2, Zap } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  business: z.string().min(2, "Contanos el nombre de tu red o negocio"),
  email: z.string().email("Ingresá un email válido"),
  whatsapp: z
    .string()
    .refine((val) => {
      if (!val || !val.startsWith('+')) return false;
      const phone = parsePhoneNumberFromString(val);
      return phone?.isValid() ?? false;
    }, "Número inválido para el país seleccionado"),
  teamSize: z.string().min(1, "Seleccioná la etapa de tu operación"),
  budget: z.string().min(1, "Seleccioná un rango de presupuesto"),
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
  const [phoneCC, setPhoneCC] = useState("57");
  const [phoneLocal, setPhoneLocal] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const updatePhone = (cc: string, local: string) => {
    const digits = local.replace(/\D/g, "");
    setValue("whatsapp", digits ? `+${cc}${digits}` : "", { shouldValidate: !!digits });
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const result = await sendEmail(data);
    if (result.success) {
      setStatus("success");
      reset();
      setPhoneCC("57");
      setPhoneLocal("");
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
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
              <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">
                Contacto
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight"
            >
              ¿Listo para ordenar{" "}
              <span className="text-[#c8f000]">tu captación</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-5 text-[#a1a1aa] text-base leading-relaxed"
            >
              Dejanos tus datos y te mostramos qué está frenando hoy tu
              reclutamiento: tráfico, filtro, seguimiento o cierre.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {[
                { icon: "01", text: "Análisis de tu embudo y de la velocidad de respuesta" },
                { icon: "02", text: "Mapa claro de canales, mensaje y CRM" },
                { icon: "03", text: "Recomendación puntual para la etapa de tu red" },
                { icon: "04", text: "Respuesta en menos de 24 horas hábiles" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#c8f000]/10 border border-[#c8f000]/20 flex items-center justify-center text-sm flex-shrink-0 text-[#c8f000] font-bold">
                    {item.icon}
                  </div>
                  <p className="text-white text-sm">{item.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-10 pt-8 border-t border-white/8"
            >
              <p className="text-[#a1a1aa] text-xs uppercase tracking-widest mb-4">
                Canales que trabajamos
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { label: "Meta Ads", color: "#0866FF" },
                  { label: "Google Ads", color: "#4285F4" },
                  { label: "TikTok Ads", color: "#69C9D0" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    <span className="text-[#a1a1aa] text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

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
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c8f000] opacity-5 rounded-full blur-3xl pointer-events-none" />

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
                  <h3 className="text-white font-black text-2xl">Mensaje enviado</h3>
                  <p className="text-[#a1a1aa] text-sm max-w-xs">
                    Te contactaremos en menos de 24 horas hábiles para revisar
                    tu operación y proponer el siguiente paso.
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
                    <h3 className="text-white font-black text-xl">Diagnóstico inicial</h3>
                    <p className="text-[#a1a1aa] text-sm mt-1">
                      Completá el formulario y te escribimos con contexto.
                    </p>
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
                    <FieldLabel>Red o negocio</FieldLabel>
                    <input
                      {...register("business")}
                      placeholder="Nombre de tu equipo, red o marca"
                      className={inputClass}
                    />
                    <FieldError message={errors.business?.message} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <FieldLabel>WhatsApp</FieldLabel>
                      <div className="flex gap-2">
                        <select
                          value={phoneCC}
                          onChange={e => { setPhoneCC(e.target.value); updatePhone(e.target.value, phoneLocal); }}
                          className="w-[105px] flex-shrink-0 bg-white/5 border border-white/10 rounded-xl px-2 py-3.5 text-white text-sm focus:outline-none focus:border-[#c8f000]/50 focus:ring-1 focus:ring-[#c8f000]/20 transition-all hover:border-white/20"
                        >
                          <option value="34">🇪🇸 +34</option>
                          <option value="52">🇲🇽 +52</option>
                          <option value="57">🇨🇴 +57</option>
                          <option value="56">🇨🇱 +56</option>
                          <option value="54">🇦🇷 +54</option>
                          <option value="51">🇵🇪 +51</option>
                          <option value="1">🇺🇸 +1</option>
                          <option value="58">🇻🇪 +58</option>
                          <option value="593">🇪🇨 +593</option>
                          <option value="591">🇧🇴 +591</option>
                          <option value="595">🇵🇾 +595</option>
                          <option value="598">🇺🇾 +598</option>
                          <option value="55">🇧🇷 +55</option>
                          <option value="44">🇬🇧 +44</option>
                          <option value="351">🇵🇹 +351</option>
                        </select>
                        <input
                          type="tel"
                          value={phoneLocal}
                          onChange={e => { setPhoneLocal(e.target.value); updatePhone(phoneCC, e.target.value); }}
                          placeholder="314 385 7823"
                          className={`flex-1 min-w-0 ${inputClass}`}
                        />
                      </div>
                      <input type="hidden" {...register("whatsapp")} />
                      <FieldError message={errors.whatsapp?.message} />
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
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>Etapa actual</FieldLabel>
                    <select
                      {...register("teamSize")}
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled className="bg-[#0a0a0a] text-[#a1a1aa]">
                        Seleccioná una opción
                      </option>
                      <option value="Estoy empezando" className="bg-[#0a0a0a] text-white">
                        Estoy empezando
                      </option>
                      <option value="Tengo un equipo pequeño" className="bg-[#0a0a0a] text-white">
                        Tengo un equipo pequeño
                      </option>
                      <option value="Ya tengo líderes activos" className="bg-[#0a0a0a] text-white">
                        Ya tengo líderes activos
                      </option>
                      <option value="Ya invierto en pauta" className="bg-[#0a0a0a] text-white">
                        Ya invierto en pauta
                      </option>
                    </select>
                    <FieldError message={errors.teamSize?.message} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>Presupuesto mensual para publicidad</FieldLabel>
                    <select
                      {...register("budget")}
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled className="bg-[#0a0a0a] text-[#a1a1aa]">
                        Seleccioná un rango
                      </option>
                      <option value="menos_100" className="bg-[#0a0a0a] text-white">Menos de USD 100</option>
                      <option value="100_300" className="bg-[#0a0a0a] text-white">USD 100 – 300</option>
                      <option value="300_500" className="bg-[#0a0a0a] text-white">USD 300 – 500</option>
                      <option value="mas_500" className="bg-[#0a0a0a] text-white">Más de USD 500</option>
                    </select>
                    <FieldError message={errors.budget?.message} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FieldLabel>Mensaje</FieldLabel>
                    <textarea
                      {...register("message")}
                      placeholder="Contanos qué querés mejorar: más volumen, mejor filtro, seguimiento, show-up o cierre."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                    <FieldError message={errors.message?.message} />
                  </div>

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
                        Quiero el diagnóstico
                      </>
                    )}
                  </motion.button>

                  <p className="text-[#a1a1aa] text-xs text-center">
                    Sin spam. Tu información se usa solo para responderte.
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
