"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import {
  FORMACION_PRINCIPAL,
  SUBESPECIALIDADES_FORMACION,
  EXPERIENCIA_HOSPITALARIA,
  ESTUDIOS_ESPECIALIDAD_CURSOS,
  SOCIEDADES,
} from "@/lib/doctor-cv";

const ESTUDIOS_VISIBLES_INICIAL = 6;

export default function Presentacion() {
  const [verMasEstudios, setVerMasEstudios] = useState(false);
  const estudiosMostrados = verMasEstudios
    ? ESTUDIOS_ESPECIALIDAD_CURSOS
    : ESTUDIOS_ESPECIALIDAD_CURSOS.slice(0, ESTUDIOS_VISIBLES_INICIAL);
  return (
    <section
      id="presentacion"
      className="scroll-mt-20 border-b border-zinc-200 bg-white pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-8">
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
                Urólogo con formación en el Hospital Clinic i Provincial de Barcelona y subespecialización en Endourología (Clínica la Luz, Madrid) y Cirugía Robótica (Cleveland Clinic, Ohio). Certificado por el Consejo Mexicano de Urología desde 1990, con más de 35 años de experiencia y participación continua en congresos nacionales e internacionales, incluyendo la American Urological Association.
              </p>
            </div>

            {/* Formación principal */}
            <div className="rounded-2xl border border-zinc-200 bg-primary/5 p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Formación en Urología
              </h3>
              <p className="mt-2 font-medium text-zinc-800">
                {FORMACION_PRINCIPAL.institucion}
              </p>
              <p className="mt-1 text-zinc-600">
                Catedrático de Urología: {FORMACION_PRINCIPAL.catedratico}
              </p>
              <p className="mt-2 text-primary font-medium">
                {FORMACION_PRINCIPAL.calificacion}
              </p>
              <p className="text-sm text-zinc-500">
                {FORMACION_PRINCIPAL.calificacionEn}
              </p>
            </div>

            {/* Sub-especialidades */}
            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Sub-especialidades de Urología
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Subspecialties in Urology
              </p>
              <ul className="mt-4 space-y-4">
                {SUBESPECIALIDADES_FORMACION.map((sub) => (
                  <li
                    key={sub.id}
                    className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4"
                  >
                    <p className="font-medium text-zinc-900">
                      {sub.tituloEs} / {sub.tituloEn}
                    </p>
                    <p className="mt-1 text-zinc-600">{sub.institucion}</p>
                    <p className="mt-1 text-sm text-zinc-600">
                      {sub.cargo}: {sub.profesor}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Estudios de especialidad, cursos, subespecialidades */}
            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Estudios de especialidad, cursos de entrenamiento y subespecialidades
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Specialty studies, training courses, training subspecialties at other urology departments
              </p>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-600">
                {estudiosMostrados.map((e) => (
                  <li key={e.numero}>
                    <span className="font-medium text-zinc-800">{e.es}</span>
                    {e.fecha && <span className="block text-sm text-zinc-500">{e.fecha}</span>}
                    <span className="block text-sm text-zinc-500">{e.en}</span>
                  </li>
                ))}
              </ol>
              {ESTUDIOS_ESPECIALIDAD_CURSOS.length > ESTUDIOS_VISIBLES_INICIAL && (
                <button
                  type="button"
                  onClick={() => setVerMasEstudios(!verMasEstudios)}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  {verMasEstudios ? "Ver menos" : `Ver todos (${ESTUDIOS_ESPECIALIDAD_CURSOS.length} ítems)`}
                </button>
              )}
            </div>

            {/* Sociedades */}
            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Sociedades a las que pertenece
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Medical societies
              </p>
              <ul className="mt-4 space-y-2 text-zinc-600">
                {SOCIEDADES.map((s, i) => (
                  <li key={i} className="rounded-lg border border-zinc-200 bg-zinc-50/80 px-4 py-2">
                    <span className="font-medium text-zinc-800">{s.es}</span>
                    <span className="block text-sm text-zinc-500">{s.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiencia hospitalaria */}
            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Experiencia hospitalaria
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Hospital experience
              </p>
              <ul className="mt-4 space-y-3">
                {EXPERIENCIA_HOSPITALARIA.map((h, i) => (
                  <li
                    key={i}
                    className="flex flex-col gap-0.5 rounded-xl border border-zinc-200 bg-zinc-50/80 p-4"
                  >
                    <span className="font-medium text-zinc-900">
                      {h.institucion}
                    </span>
                    <span className="text-zinc-600">{h.detalle}</span>
                    <span className="text-sm text-zinc-500">{h.detalleEn}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-zinc-900 md:text-xl">
                Experiencia
              </h3>
              <ul className="mt-4 space-y-2 text-zinc-600 md:text-lg">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Más de 35 años de experiencia en urología
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Formación en Hospital Clinic Barcelona, Clínica la Luz Madrid y Cleveland Clinic Ohio
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Asistencia consecutiva a 35 congresos de la American Urological Association (1990-2025)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Certificación y re-certificación por el Consejo Mexicano de Urología (última: enero 2025)
                </li>
              </ul>
            </div>
        </div>
      </Container>
    </section>
  );
}
