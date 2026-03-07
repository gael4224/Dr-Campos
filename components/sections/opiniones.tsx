"use client";

import Container from "@/components/ui/container";
import { MotionSection, MotionDiv } from "@/components/ui/motion";

export default function Opiniones() {
  return (
    <MotionSection
      id="opiniones"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-20 md:py-28"
    >
      <Container>
        <MotionDiv
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-medium text-zinc-950/70">
            Opiniones
          </div>
          <h2 className="mt-5 font-display text-3xl text-zinc-950 md:text-4xl">
            Lo que dicen los pacientes
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">
            Aquí podrás añadir testimonios y opiniones cuando tengas el contenido.
          </p>
        </MotionDiv>
      </Container>
    </MotionSection>
  );
}
