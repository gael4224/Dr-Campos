"use client";

import Container from "@/components/ui/container";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { cn } from "@/components/ui/cn";

const BLOQUES = [
  {
    id: "cirugias",
    titulo: "Cirugías",
    descripcion: "Procedimientos realizados en endourología, laparoscopia, láser y cirugía robótica. Aquí podrás añadir casos destacados o estadísticas.",
  },
  {
    id: "patentes",
    titulo: "Patentes",
    descripcion: "Desarrollos e innovaciones registradas por el doctor. Añade título, número de patente y breve descripción.",
  },
  {
    id: "conferencias",
    titulo: "Conferencias y participación académica",
    descripcion: "Ponencias, congresos, cursos y colaboraciones en docencia e investigación.",
  },
];

export default function TrabajosDelDoctor() {
  return (
    <MotionSection
      id="trabajos"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50 py-14 md:py-20"
    >
      <Container>
        <MotionDiv
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
            Trabajos y trayectoria
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-zinc-600 md:text-lg">
            Cirugías, patentes, conferencias y participación en la comunidad urológica.
          </p>
        </MotionDiv>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOQUES.map((bloque, i) => (
            <MotionDiv
              key={bloque.id}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={cn(
                "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              )}
            >
              <h3 className="font-display text-lg font-semibold text-zinc-900">
                {bloque.titulo}
              </h3>
              <p className="mt-3 text-zinc-600">
                {bloque.descripcion}
              </p>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
