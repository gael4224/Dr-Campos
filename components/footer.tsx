import Link from "next/link";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#presentacion", label: "Presentación" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#acerca", label: "Acerca de mí" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-950/10 bg-white">
      <div className="container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-premium text-zinc-950">
              DR. NOMBRE APELLIDO
            </div>
            <p className="max-w-sm text-sm text-zinc-950/60">
              Consulta especializada con enfoque humano y tecnología de última generación
              para el cuidado integral de la salud.
            </p>
            <p className="text-xs text-zinc-950/50">© {new Date().getFullYear()}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-zinc-950/70">Navegación</div>
              <div className="flex flex-col gap-2">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-zinc-950/60 transition hover:text-zinc-950"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold text-zinc-950/70">Redes</div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-zinc-950/60 transition hover:text-zinc-950"
                >
                  Instagram
                </Link>
                <Link
                  href="/"
                  className="text-sm text-zinc-950/60 transition hover:text-zinc-950"
                >
                  LinkedIn
                </Link>
                <Link
                  href="/"
                  className="text-sm text-zinc-950/60 transition hover:text-zinc-950"
                >
                  Behance
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold text-zinc-950/70">Contacto</div>
              <div className="text-sm text-zinc-950/60">
                <div>contacto@clinicadeldoctor.example</div>
                <div>Ciudad • País</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

