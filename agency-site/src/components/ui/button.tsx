import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98]",
        variant === "primary" &&
          "bg-clay-500 text-cream-50 shadow-lg shadow-clay-500/20 hover:bg-clay-600",
        variant === "secondary" &&
          "border border-forest-300 text-forest-800 hover:bg-forest-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
