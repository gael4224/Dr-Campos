"use client";

import { cn } from "@/components/ui/cn";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#presentacion", label: "Presentación" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#acerca", label: "Acerca de mí" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white">
      <div className="container">
        <nav className="flex h-14 items-center justify-center gap-8 md:gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-900 transition hover:text-zinc-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
