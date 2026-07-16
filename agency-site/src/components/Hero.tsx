"use client";

import { motion } from "framer-motion";
import { hero } from "@/content";
import { Button } from "@/components/ui/button";

const avatarColors = ["#facc15", "#fb923c", "#525252", "#171717"];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-yellow-400">
      <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9l-5.6 3.1 1.4-6.2L1 7.5l6.4-.6L10 1z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-bold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl leading-[1.06] font-extrabold tracking-tight text-balance text-neutral-800 sm:text-5xl lg:text-6xl dark:text-neutral-100"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-4 max-w-lg text-lg text-neutral-600 dark:text-neutral-400"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <div className="flex" aria-hidden="true">
              {avatarColors.map((color, i) => (
                <span
                  key={i}
                  className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-100 text-xs font-bold text-white first:ml-0 dark:border-neutral-900"
                  style={{ background: color }}
                >
                  {i === avatarColors.length - 1 ? "+" : String.fromCharCode(65 + i)}
                </span>
              ))}
            </div>
            <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Trusted by <b className="text-neutral-800 dark:text-neutral-100">{hero.trustCount}</b> local organizations
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative flex aspect-[4/3.2] items-end rounded-[20px] bg-[repeating-linear-gradient(135deg,transparent,transparent_22px,rgba(250,204,21,0.08)_22px,rgba(250,204,21,0.08)_24px),linear-gradient(155deg,#262626,#171717)] p-6"
        >
          {/* TODO: swap for a real product/project screenshot */}
          <span className="rounded-lg border border-dashed border-white/40 px-3 py-1.5 text-xs font-bold tracking-wide text-white/80 uppercase">
            [ project screenshot / photo ]
          </span>
        </motion.div>
      </div>
    </section>
  );
}
