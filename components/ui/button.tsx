import Link from "next/link";
import { cn } from "@/components/ui/cn";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-md hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg focus-visible:ring-primary",
  ghost:
    "bg-white/10 text-white backdrop-blur hover:bg-white/15 focus-visible:ring-white/30",
  outline:
    "border-2 border-primary bg-primary/5 text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11",
  lg: "h-12 px-6 text-[0.92rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
      <span className="h-[1px] w-0 bg-current opacity-30 transition-all duration-300 group-hover:w-4" />
    </Link>
  );
}

