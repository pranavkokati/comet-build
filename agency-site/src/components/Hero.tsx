"use client";

import { motion } from "framer-motion";
import { hero, site } from "@/content";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-cream-50">
      <BackgroundBeams />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-forest-400/40 bg-forest-800/60 px-4 py-1 text-xs font-medium uppercase tracking-wide text-forest-200"
        >
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl font-semibold leading-tight sm:text-6xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-forest-100/80"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary" className="border-forest-400/40 text-cream-50 hover:bg-forest-800">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        {/* TODO: swap for a real logo image via site.logoSrc if desired */}
        <p className="mt-16 text-xs uppercase tracking-widest text-forest-300/60">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
