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
        "inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-bold transition active:scale-[0.98]",
        variant === "primary" &&
          "bg-orange-400 text-neutral-900 hover:bg-orange-500",
        variant === "secondary" &&
          "border border-neutral-200 bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600",
        className,
      )}
    >
      {children}
    </Link>
  );
}
