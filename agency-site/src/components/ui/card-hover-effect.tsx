"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style "Hover Effect" card grid — a soft highlight glides to
 * whichever card the pointer is over. Used for the Services and Portfolio
 * grids.
 */
export function HoverEffect({
  items,
  className,
}: {
  items: {
    key: string;
    content: React.ReactNode;
  }[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.key}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] dark:border-neutral-700 dark:bg-neutral-800">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
