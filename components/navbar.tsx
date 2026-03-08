"use client";

import { useState, useEffect } from "react";
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

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}
function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Cerrar menú al hacer scroll o al redimensionar (ej. rotar a landscape)
  useEffect(() => {
    if (!menuAbierto) return;
    const cerrar = () => setMenuAbierto(false);
    window.addEventListener("scroll", cerrar, { passive: true });
    window.addEventListener("resize", cerrar);
    return () => {
      window.removeEventListener("scroll", cerrar);
      window.removeEventListener("resize", cerrar);
    };
  }, [menuAbierto]);

  // Evitar scroll del body cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white">
      <div className="container">
        <nav className="flex h-14 items-center justify-between md:justify-center md:gap-8 lg:gap-10">
          {/* En desktop: enlaces centrados */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-900 transition hover:text-zinc-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* En móvil: botón menú */}
          <div className="flex flex-1 md:hidden" />
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 md:hidden"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Menú móvil: pantalla completa */}
      <div
        className={cn(
          "fixed inset-0 top-14 z-40 bg-white transition-opacity duration-200 md:hidden",
          menuAbierto ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 overflow-auto p-4 pb-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuAbierto(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-zinc-900 transition hover:bg-zinc-100 active:bg-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
