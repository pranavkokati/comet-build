"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

/**
 * Aceternity-style "Animated Testimonials" — an autoplaying quote carousel
 * that crossfades/slides between entries, with dot navigation.
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
            <p className="text-xl font-display italic leading-relaxed text-forest-800 sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 text-sm font-semibold text-cream-50">
                {current.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-forest-900">
                  {current.name}
                </div>
                <div className="text-sm text-forest-700/70">
                  {current.org}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === active
                ? "w-6 bg-clay-500"
                : "w-2 bg-forest-200 hover:bg-forest-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
