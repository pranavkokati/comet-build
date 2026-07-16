import { site } from "@/content";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <div className="sticky top-4 z-50 px-2">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-[28px] border border-yellow-100/50 bg-yellow-50/70 px-4 py-2.5 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/75">
        <a href="#" className="flex items-center gap-2">
          <span className="flex" aria-hidden="true">
            <span className="ml-0 block h-[18px] w-[6px] -skew-x-[18deg] rounded-sm bg-yellow-400" />
            <span className="ml-[2px] block h-[18px] w-[6px] -skew-x-[18deg] rounded-sm bg-yellow-400" />
            <span className="ml-[2px] block h-[18px] w-[6px] -skew-x-[18deg] rounded-sm bg-yellow-400" />
          </span>
          <span className="text-base font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
            {site.name}
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-neutral-600 md:flex dark:text-neutral-400">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-orange-500">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="#contact">Get a Free Site</Button>
        </div>
      </nav>
    </div>
  );
}
