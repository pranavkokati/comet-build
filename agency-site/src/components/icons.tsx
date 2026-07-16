import type { SVGProps } from "react";

// Small inline icon set used by the Services cards. Swap for a different
// icon library later if you'd like — components just import `{ Icon }` by
// name from `services[].icon` in content.ts.
export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s-7-4.35-9.5-8.5C.7 8 2.4 4.5 6 4.5c2 0 3.4 1.1 6 3.3 2.6-2.2 4-3.3 6-3.3 3.6 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20Z"
      />
    </svg>
  );
}

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a4 4 0 0 0-5.6 5l-6 6 2.6 2.6 6-6a4 4 0 0 0 5-5.6l-3 3-2.6-2.6 3-3Z"
      />
    </svg>
  );
}

export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v4M12 17v4M4 12h4M16 12h4M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2"
      />
    </svg>
  );
}

export const iconMap = {
  heart: HeartIcon,
  briefcase: BriefcaseIcon,
  wrench: WrenchIcon,
  sparkles: SparklesIcon,
} as const;
