"use client";

import Container from "@/components/ui/container";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { cn } from "@/components/ui/cn";

const SERVICES = [
  {
    title: "Consulta integral",
    description:
      "Valoración completa, historial clínico detallado y explicación clara de cada diagnóstico.",
  },
  {
    title: "Estudios y diagnóstico",
    description:
      "Solicitud e interpretación de estudios con enfoque en medicina basada en evidencia.",
  },
  {
    title: "Planes de tratamiento",
    description:
      "Tratamientos personalizados que equilibran efectividad, comodidad y estilo de vida.",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Acompañamiento cercano, ajustes de tratamiento y resolución de dudas entre consultas.",
  },
];

export default function Services() {
  return (
    <MotionSection
      id="servicios"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-zinc-50 py-20 md:py-28"
    >
      <Container>
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-medium text-zinc-950/70">
              Servicios
            </div>
            <h2 className="mt-5 font-display text-3xl text-zinc-950 md:text-4xl">
              Todo lo que necesitas
              <br />
              en un mismo lugar.
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-relaxed text-zinc-950/60 md:block">
            Un sistema de atención pensado para que cada paso —de la primera consulta
            al seguimiento— sea claro, ágil y humano.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <MotionDiv
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.55,
                delay: 0.05 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-zinc-950/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,.04)] transition",
                "hover:-translate-y-0.5 hover:border-zinc-950/20 hover:shadow-soft"
              )}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-shine-sweep" />
              </div>
              <h3 className="text-base font-semibold text-zinc-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-950/60">
                {s.description}
              </p>
              <div className="mt-6 h-px w-full bg-zinc-950/10" />
              <div className="mt-4 text-xs font-medium tracking-premium text-zinc-950/60">
                Más información
              </div>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}

