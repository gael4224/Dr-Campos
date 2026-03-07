"use client";

import Container from "@/components/ui/container";
import { MotionSection, MotionDiv } from "@/components/ui/motion";

export default function Presentacion() {
  return (
    <MotionSection
      id="presentacion"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-24 border-b border-zinc-200 bg-white py-14 md:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
                ¿Qué hace un urólogo?
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 md:text-lg">
                El urólogo es el especialista en el diagnóstico y tratamiento de las enfermedades del tracto urinario (riñones, uréteres, vejiga, uretra) y del sistema reproductor masculino. Realiza consultas, estudios, cirugías y seguimiento para padecimientos como infecciones, litiasis, cáncer urológico, hiperplasia prostática, disfunción eréctil, infertilidad masculina y más.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-zinc-900 md:text-2xl">
                Presentación del Dr. Jorge Alberto Campos Castellanos
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600 md:text-lg">
                [Aquí puedes redactar una breve presentación del doctor: formación, valores, enfoque de atención y qué lo distingue en su práctica.]
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Experiencia
              </h3>
              <ul className="mt-4 space-y-2 text-zinc-600 md:text-lg">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  +10 años de experiencia en urología
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Miles de pacientes atendidos
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Formación en centros de referencia nacional e internacional
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Miembro de sociedades urológicas
                </li>
              </ul>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
