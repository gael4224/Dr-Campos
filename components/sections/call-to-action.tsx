"use client";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MotionSection, MotionDiv } from "@/components/ui/motion";

export default function CallToAction() {
  return (
    <MotionSection
      id="contacto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="scroll-mt-20 bg-zinc-950 py-12 sm:py-20 md:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-hero sm:p-10 md:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] grain" />
          <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <MotionDiv
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8"
            >
              <div className="text-xs font-medium tracking-premium text-white/70">
                AGENDA TU CONSULTA
              </div>
              <h2 className="mt-5 font-display text-3xl text-white md:text-4xl">
                Un espacio tranquilo
                <br />
                pensado para tu salud.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                Elige el día y horario que mejor se adapte a ti. Te responderemos con la
                confirmación de tu cita y, si es necesario, indicaciones previas a la
                consulta.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-3 md:col-span-4 md:items-end"
            >
              <Button href="#contacto" variant="ghost" size="lg" className="w-full md:w-auto">
                Agendar cita
              </Button>
              <Button
                href="#work"
                variant="outline"
                size="lg"
                className="w-full border-white/20 bg-white/0 text-white hover:bg-white/10 md:w-auto"
              >
                Ver casos
              </Button>
              <div className="text-xs text-white/60 md:text-right">
                contacto@clinicadeldoctor.example
              </div>
            </MotionDiv>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}

