"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import Container from "@/components/ui/container";

export default function Hero() {
  const [doctorError, setDoctorError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [hospitalError, setHospitalError] = useState(false);

  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden pt-14"
    >
      {/* Parte superior: fondo hospital + solo imágenes y nombre del doctor */}
      <div className="relative min-h-[380px] md:min-h-[420px]">
        <div className="absolute inset-0">
          {!hospitalError ? (
            <Image
              src="/hospital.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              onError={() => setHospitalError(true)}
            />
          ) : (
            <div className="h-full w-full bg-zinc-300" />
          )}
        </div>

        <Container className="relative z-10 flex h-full min-h-[340px] items-start pt-8 md:pt-10">
          <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
            {/* Foto del doctor */}
            <MotionDiv
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="shrink-0"
            >
              <div className="relative overflow-hidden rounded-xl border-4 border-white bg-white p-1 shadow-xl">
                <div className="relative h-[220px] w-[180px] md:h-[280px] md:w-[220px]">
                  {!doctorError ? (
                    <Image
                      src="/doctor.jpg"
                      alt="Dr. Jorge Alberto Campos Castellanos"
                      fill
                      className="object-cover object-top"
                      sizes="220px"
                      onError={() => setDoctorError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-200 text-center text-xs text-zinc-500">
                      doctor.jpg
                    </div>
                  )}
                </div>
              </div>
            </MotionDiv>

            {/* Solo el nombre del doctor en el área de las imágenes */}
            <MotionDiv
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-3xl font-bold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] md:text-4xl lg:text-5xl">
                Dr. Jorge Alberto Campos Castellanos
              </p>
            </MotionDiv>

            {/* Logo */}
            <MotionDiv
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative h-52 w-52 md:h-72 md:w-72 lg:h-96 lg:w-96">
                {!logoError ? (
                  <Image
                    src="/logo.png"
                    alt="Urología Innovadora"
                    fill
                    className="object-contain"
                    sizes="384px"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 text-sm text-white/60">
                    logo.png
                  </div>
                )}
              </div>
            </MotionDiv>
          </div>
        </Container>
      </div>

      {/* Parte inferior: especialidades y consulta centrados */}
      <div className="border-t border-zinc-200 bg-white py-8 md:py-10">
        <Container>
          <div className="flex flex-col items-center gap-5 text-center md:gap-6">
            <p className="text-lg font-semibold text-zinc-900 md:text-xl">
              Médico Urólogo de Alta Especialidad
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { href: "#endourologia", label: "Endourología" },
                { href: "#oncologia", label: "Oncología" },
                { href: "#cirugia-laparoscopica", label: "Cirugía Laparoscópica" },
                { href: "#laser", label: "Láser" },
                { href: "#cirugia-robotica", label: "Cirugía Robótica" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#consulta"
              className="group inline-flex max-w-3xl items-center justify-center rounded-full border-2 border-primary bg-primary/5 px-5 py-3 text-center text-sm font-medium text-primary transition hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base"
            >
              <span>
                Consulta para evaluación del Sistema Génito – Urinario detallada para diagnosticar con la mayor precisión y brevedad los padecimientos relacionados.
              </span>
            </a>
          </div>
        </Container>
      </div>
    </MotionSection>
  );
}
