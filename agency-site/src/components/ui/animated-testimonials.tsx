"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-yellow-400">
      <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9l-5.6 3.1 1.4-6.2L1 7.5l6.4-.6L10 1z" />
    </svg>
  );
}

/**
 * Autoplaying quote carousel that crossfades between testimonials, with
 * dot navigation and a star rating above each quote.
 */
export function AnimatedTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-4 flex justify-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-xl leading-relaxed font-semibold text-neutral-800 sm:text-2xl dark:text-neutral-100">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-400 text-sm font-extrabold text-neutral-900">
                {current.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                  {current.name}
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-500">
                  {current.org}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-1.5">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === active
                ? "w-5 bg-orange-400"
                : "w-1.5 bg-neutral-200 hover:bg-neutral-400 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
