"use client";

import Container from "@/components/ui/container";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { UBICACION, HORARIO_ATENCION } from "@/lib/constants";

export default function UbicacionHorarios() {
  return (
    <MotionSection
      id="ubicacion"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-20 border-b border-zinc-200 bg-white py-10 sm:py-14 md:py-20"
    >
      <Container>
        <MotionDiv
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
            Ubicación y horario de atención
          </h2>
          <p className="mt-3 text-zinc-600 md:text-lg">
            Te esperamos en nuestro consultorio.
          </p>
        </MotionDiv>

        <div className="grid gap-8 lg:grid-cols-5">
          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm lg:col-span-3"
          >
            <h3 className="border-b border-zinc-200 bg-white px-6 py-4 font-display text-lg font-semibold text-zinc-900">
              {UBICACION.nombre}
            </h3>
            <p className="px-6 pt-4 text-zinc-600 leading-relaxed">
              {UBICACION.direccion}
            </p>
            <div className="relative mt-4 aspect-video w-full overflow-hidden">
              <iframe
                title="Mapa - Ubicación"
                src={UBICACION.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-4">
              <a
                href={UBICACION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm lg:col-span-2"
          >
            <h3 className="font-display text-lg font-semibold text-zinc-900">
              Horario de atención
            </h3>
            <ul className="mt-4 space-y-2 text-zinc-600">
              {HORARIO_ATENCION.map((linea) => (
                <li key={linea} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {linea}
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
