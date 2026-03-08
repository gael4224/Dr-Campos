"use client";

import Container from "@/components/ui/container";

export default function Opiniones() {
  return (
    <section
      id="opiniones"
      className="scroll-mt-20 bg-white py-12 sm:py-20 md:py-28"
    >
      <Container>
        <div>
          <div className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-medium text-zinc-950/70">
            Opiniones
          </div>
          <h2 className="mt-5 font-display text-3xl text-zinc-950 md:text-4xl">
            Lo que dicen los pacientes
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">
            Aquí podrás añadir testimonios y opiniones cuando tengas el contenido.
          </p>
        </div>
      </Container>
    </section>
  );
}
