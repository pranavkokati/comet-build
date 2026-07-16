"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type TimelineEntry = {
  step: string;
  title: string;
  description: string;
};

/**
 * Scroll-linked vertical "Timeline" — a line whose fill height tracks
 * scroll progress through the section, with each entry fading/sliding in
 * as it enters view. Used for the "how it works" section.
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
    <div ref={containerRef} className="relative mx-auto max-w-2xl">
      <div className="absolute left-[19px] top-0 h-full w-0.5 rounded-full bg-neutral-200 dark:bg-neutral-700">
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className="absolute inset-x-0 top-0 w-full rounded-full bg-orange-400"
        />
      </div>

      <div className="flex flex-col gap-9">
        {data.map((entry, idx) => (
          <motion.div
            key={entry.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-neutral-200 bg-white text-xs font-extrabold text-orange-500 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] dark:border-neutral-700 dark:bg-neutral-800">
              {entry.step}
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {entry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
