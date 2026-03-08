"use client";

import Image from "next/image";
import Container from "@/components/ui/container";
import { cn } from "@/components/ui/cn";

const PROJECTS = [
  {
    title: "Launch Environment",
    type: "Live event",
    image: "/hero.jpg",
  },
  {
    title: "Luxury Retail Pop‑Up",
    type: "Retail",
    image: "/hero.jpg",
  },
  {
    title: "Immersive Installation",
    type: "Experience",
    image: "/hero.jpg",
  },
  {
    title: "Brand Showcase",
    type: "Activation",
    image: "/hero.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="scroll-mt-20 bg-white py-12 sm:py-20 md:py-28"
    >
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center rounded-full border border-zinc-950/10 bg-white px-3 py-1 text-xs font-medium text-zinc-950/70">
              Selected work
            </div>
            <h2 className="mt-5 font-display text-3xl text-zinc-950 md:text-4xl">
              Projects that hold attention.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-950/60">
            Visual-first grid with calm hover overlays and smooth transitions —
            inspired by premium studio portfolios.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {PROJECTS.map((p, i) => {
            const big = i === 0 || i === 3;
            return (
              <div
                key={p.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-zinc-950/10 bg-zinc-950",
                  big ? "md:col-span-7" : "md:col-span-5"
                )}
              >
                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition duration-500 group-hover:from-black/80" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium tracking-premium text-white/70">
                        {p.type}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                    <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur transition group-hover:bg-white/10 md:inline-flex">
                      View
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

