"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { whatsappUrl } from "@/lib/constants";

const ESPECIALIDADES = [
  {
    id: "endourologia",
    imagen: "/especialidades/endourologia.jpg",
    titulo: "Endourología",
    descripcion: "La endourología permite diagnosticar y tratar patologías del tracto urinario mediante instrumentos mínimamente invasivos, sin incisiones grandes. Incluye procedimientos como litotricia, ureteroscopia y cirugía endoscópica de próstata.",
    causas: [
      "Cálculos en riñón, uréter o vejiga",
      "Obstrucción de la vía urinaria",
      "Tumores de vía urinaria que requieren abordaje endoscópico",
      "Sangrado urinario de origen por definir",
      "Estrecheces (estenosis) uretrales o ureterales",
    ],
  },
  {
    id: "oncologia",
    imagen: "/especialidades/oncologia.jpg",
    titulo: "Oncología urológica",
    descripcion: "Diagnóstico y tratamiento del cáncer que afecta riñón, vejiga, próstata, testículo y vías urinarias. Incluye cirugía, seguimiento y coordinación con otros especialistas cuando se requiere.",
    causas: [
      "Sospecha o diagnóstico de cáncer de próstata, riñón, vejiga o testículo",
      "Sangrado en orina sin causa aparente",
      "Masas o nódulos en riñón o vejiga en estudios de imagen",
      "Antecedentes familiares de cáncer urológico",
      "Seguimiento postratamiento oncológico urológico",
    ],
  },
  {
    id: "cirugia-laparoscopica",
    imagen: "/especialidades/cirugia-laparoscopica.jpg",
    titulo: "Cirugía laparoscópica",
    descripcion: "Técnica mínimamente invasiva con pequeñas incisiones y cámara, para procedimientos como nefrectomía, prostatectomía, cirugía de glándula suprarrenal y corrección de patologías renales o ureterales.",
    causas: [
      "Tumores renales o suprarrenales candidatos a cirugía",
      "Patología prostática que requiere cirugía",
      "Enfermedad quística renal o ureteral",
      "Cirugía reconstructiva de vía urinaria",
      "Segunda opinión para cirugía urológica mínimamente invasiva",
    ],
  },
  {
    id: "laser",
    imagen: "/especialidades/laser.jpg",
    titulo: "Láser en urología",
    descripcion: "Uso de tecnología láser para tratamientos de próstata (HoLEP, enucleación), litiasis (litotricia láser), estenosis y lesiones de vía urinaria, con menor sangrado y recuperación más rápida.",
    causas: [
      "Hiperplasia benigna de próstata con síntomas obstructivos",
      "Cálculos que requieren fragmentación con láser",
      "Estenosis de uretra o unión ureterovesical",
      "Tumores superficiales de vejiga",
      "Sangrado o lesiones que requieren fotocoagulación",
    ],
  },
  {
    id: "cirugia-robotica",
    imagen: "/especialidades/cirugia-robotica.jpg",
    titulo: "Cirugía robótica",
    descripcion: "Cirugía asistida por robot para máxima precisión en prostatectomía radical, nefrectomía parcial, cirugía de vejiga y procedimientos reconstructivos. Menor pérdida de sangre y recuperación más favorable en casos seleccionados.",
    causas: [
      "Cáncer de próstata candidato a prostatectomía radical",
      "Tumores renales que requieren nefrectomía parcial",
      "Cáncer de vejiga que requiere cistectomía",
      "Cirugía reconstructiva compleja (fístulas, reimplantes)",
      "Búsqueda de segunda opinión para cirugía robótica urológica",
    ],
  },
];

function MensajeWhatsApp(especialidad: string): string {
  return `Hola, me interesa solicitar evaluación en *${especialidad}*. Me gustaría agendar una cita.`;
}

function BloqueEspecialidad({
  esp,
  index,
}: {
  esp: (typeof ESPECIALIDADES)[number];
  index: number;
}) {
  const [imagenError, setImagenError] = useState(false);

  return (
    <MotionSection
      id={esp.id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-20 border-b border-zinc-200/80 py-10 sm:py-12 md:py-16"
    >
      <Container>
        <MotionDiv
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10"
        >
          <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
            <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
              {esp.titulo}
            </h2>
            <p className="max-w-2xl text-zinc-600 md:text-lg leading-relaxed">
              {esp.descripcion}
            </p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 md:text-base">
                Principales motivos para acudir a un chequeo
              </h3>
              <ul className="mt-3 space-y-2">
                {esp.causas.map((causa) => (
                  <li key={causa} className="flex items-start gap-2 text-zinc-600 md:text-lg">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {causa}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl(MensajeWhatsApp(esp.titulo))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Completar formato y enviar por WhatsApp
              </a>
              <p className="mt-2 text-xs text-zinc-500">
                Al hacer clic se abrirá WhatsApp. Cuando tengas el formato definitivo, aquí se enviará la información que el paciente llene.
              </p>
            </div>
          </div>

          <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 ${index % 2 === 1 ? "md:order-1" : ""}`}>
            {!imagenError ? (
              <Image
                src={esp.imagen}
                alt={`Imagen ilustrativa - ${esp.titulo}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImagenError(true)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-200/80 p-6 text-center text-zinc-500">
                <span className="text-sm font-medium">Imagen ilustrativa</span>
                <span className="text-xs">
                  Añade <code className="rounded bg-zinc-300 px-1 py-0.5">public/especialidades/{esp.id}.jpg</code>
                </span>
              </div>
            )}
          </div>
        </MotionDiv>
      </Container>
    </MotionSection>
  );
}

export default function EspecialidadesDetalle() {
  return (
    <div className="bg-zinc-50">
      {ESPECIALIDADES.map((esp, i) => (
        <BloqueEspecialidad key={esp.id} esp={esp} index={i} />
      ))}

      <MotionSection
        id="consulta"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="scroll-mt-24 border-b border-zinc-200/80 pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16"
      >
        <Container>
          <MotionDiv
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
              Consulta para evaluación del Sistema Génito – Urinario
            </h2>
            <p className="max-w-2xl text-zinc-600 md:text-lg leading-relaxed">
              Consulta detallada para diagnosticar con la mayor precisión y brevedad los padecimientos relacionados. Aquí puedes ampliar la información y añadir cómo es el proceso de evaluación.
            </p>
            <a
              href={whatsappUrl("Hola, me gustaría agendar una consulta para evaluación del Sistema Génito – Urinario.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Solicitar consulta por WhatsApp
            </a>
            <div className="h-px w-20 bg-zinc-300" />
          </MotionDiv>
        </Container>
      </MotionSection>
    </div>
  );
}
