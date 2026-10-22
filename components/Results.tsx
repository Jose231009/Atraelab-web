"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, TimerReset, Users } from "lucide-react";

const improvements = [
  {
    title: "Más reuniones útiles",
    description:
      "Tu equipo deja de perseguir contactos tibios y entra a conversaciones mejor preparadas.",
    icon: <Users className="w-5 h-5 text-[#c8f000]" />,
  },
  {
    title: "Menos leads perdidos",
    description:
      "Cada prospecto queda trazado con origen, responsable y siguiente acción.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#c8f000]" />,
  },
  {
    title: "Mejor lectura semanal",
    description:
      "No miramos solo formularios: miramos contacto, show-up, avance y calidad.",
    icon: <TimerReset className="w-5 h-5 text-[#c8f000]" />,
  },
];

const kpis = [
  {
    label: "Costo por lead",
    value: "Controlado por canal",
    detail: "Para saber dónde conviene escalar y dónde conviene frenar.",
  },
  {
    label: "Velocidad de contacto",
    value: "Seguida por responsable",
    detail: "Porque un lead bueno se enfría rápido si nadie responde.",
  },
  {
    label: "Show-up a presentación",
    value: "Mirado cada semana",
    detail: "Si la llamada no ocurre, el problema no termina en la pauta.",
  },
  {
    label: "Activación del prospecto",
    value: "Seguida en CRM",
    detail: "Para entender si el volumen que entra realmente mueve la red.",
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c8f000] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">
              Resultados
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
          >
            Lo que empieza a{" "}
            <span className="text-[#c8f000]">mejorar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[#a1a1aa] text-lg max-w-lg mx-auto"
          >
            Cuando la captación y el seguimiento se ordenan, la red deja de
            depender solo de esfuerzo manual.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="mb-5"
            >
              <span className="text-white text-sm font-bold">Impacto operativo</span>
            </motion.div>

            <div className="space-y-4">
              {improvements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="glass-card p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-[#a1a1aa] text-sm leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="mt-4 rounded-2xl border border-[#c8f000]/15 bg-[#c8f000]/5 p-5"
            >
              <p className="text-[#c8f000] text-xs font-bold uppercase tracking-widest mb-2">
                Lo importante
              </p>
              <p className="text-white text-sm leading-relaxed">
                No vendemos fórmulas mágicas de duplicación. Construimos una
                operación donde el lead llega mejor filtrado, se responde más
                rápido y se sigue con disciplina.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {kpis.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                className="glass-card p-5 lg:p-6 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <ArrowRight className="w-4 h-4 text-[#c8f000] opacity-70" />
                </div>
                <p className="text-[#a1a1aa] text-[11px] font-bold uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-white font-black text-xl leading-tight mt-2">
                  {item.value}
                </p>
                <p className="text-[#a1a1aa] text-sm mt-3 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
