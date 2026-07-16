"use client";

import { cn } from "@/lib/utils";

/**
 * Aceternity-style "Background Beams" — a set of vertical light beams that
 * drift upward behind hero content. Pure CSS/Tailwind animation, no canvas,
 * so it's cheap to render behind text.
 */
export function BackgroundBeams({ className }: { className?: string }) {
  const beams = [
    { left: "10%", delay: "0s", duration: "beam-1" },
    { left: "25%", delay: "1.5s", duration: "beam-3" },
    { left: "40%", delay: "0.5s", duration: "beam-2" },
    { left: "58%", delay: "2.2s", duration: "beam-1" },
    { left: "74%", delay: "0.8s", duration: "beam-3" },
    { left: "88%", delay: "1.8s", duration: "beam-2" },
  ] as const;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {beams.map((beam, i) => (
        <div
          key={i}
          className={cn(
            "absolute bottom-0 h-full w-px bg-gradient-to-t from-clay-500/0 via-clay-500/60 to-forest-400/0",
            beam.duration,
          )}
          style={{ left: beam.left, animationDelay: beam.delay }}
        />
      ))}
    </div>
  );
}
