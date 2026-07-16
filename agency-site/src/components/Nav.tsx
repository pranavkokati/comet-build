"use client";

import { motion } from "framer-motion";
import { site } from "@/content";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-forest-200/60 bg-cream-50/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold text-forest-800">
          {site.name}
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-forest-700 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-forest-900">
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" className="hidden sm:inline-flex">
          Get a Free Site
        </Button>
      </div>
    </motion.header>
  );
}
