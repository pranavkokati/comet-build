"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type TimelineEntry = {
  step: string;
  title: string;
  description: string;
};

/**
 * Aceternity-style scroll-linked "Timeline" — a vertical line whose fill
 * height tracks scroll progress through the section, with each entry
 * fading/sliding in as it enters view. Used for the "how it works" section.
 */
export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      <div className="absolute left-[19px] top-0 h-full w-px bg-forest-200 sm:left-[27px]">
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-clay-500 to-forest-500"
        />
      </div>

      <div className="flex flex-col gap-10">
        {data.map((entry, idx) => (
          <motion.div
            key={entry.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
            className="relative flex gap-6 pl-0"
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-forest-500 bg-cream-50 text-sm font-semibold text-forest-700 sm:h-14 sm:w-14">
              {entry.step}
            </div>
            <div className="pt-1">
              <h3 className="text-xl font-semibold text-forest-800">
                {entry.title}
              </h3>
              <p className="mt-1 text-forest-700/80">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
