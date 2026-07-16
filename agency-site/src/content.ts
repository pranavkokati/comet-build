/**
 * ============================================================================
 * SITE CONTENT — edit this file to customize the site. Components should not
 * need to change; they just render whatever is in here.
 *
 * Sections:
 *   1. Site identity (name, logo, nav, social links)
 *   2. Hero
 *   3. About / mission
 *   4. Services
 *   5. Process (how it works)
 *   6. Portfolio (TODO: replace with real client work)
 *   7. Testimonials
 *   8. Contact / footer
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// 1. SITE IDENTITY
// ---------------------------------------------------------------------------
export const site = {
  // TODO: replace with your agency's real name.
  name: "[Agency Name]",
  // Short tagline shown next to the name in the nav bar.
  tagline: "Student Web Design Collective",
  // Swap for a real logo image path (e.g. "/logo.svg") to use an <img> instead
  // of the text wordmark. Components currently render `name` as text.
  logoSrc: null as string | null,
};

// ---------------------------------------------------------------------------
// 2. HERO
// ---------------------------------------------------------------------------
export const hero = {
  eyebrow: "Built by students, for our community",
  headline: "Websites for the people doing good work near you.",
  subheadline:
    "[Agency Name] is a student-run design studio that builds free and low-cost websites for local nonprofits and small businesses — real client work, real impact, real portfolios.",
  primaryCta: {
    label: "Get a Free Site",
    href: "#contact",
  },
  secondaryCta: {
    label: "See our work",
    href: "#portfolio",
  },
};

// ---------------------------------------------------------------------------
// 3. ABOUT / MISSION
// ---------------------------------------------------------------------------
export const about = {
  heading: "Why we do this",
  // TODO: replace with the real origin story / mission paragraph.
  body: "We're a group of students who love building things and wanted our class projects to mean something. [Agency Name] pairs student designers and developers with local nonprofits and small businesses who need a website but don't have the budget for one — we get real-world experience, they get a site that actually helps them do their work.",
};

// ---------------------------------------------------------------------------
// 4. SERVICES
// ---------------------------------------------------------------------------
export type Service = {
  icon: "heart" | "briefcase" | "wrench" | "sparkles";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "heart",
    title: "Nonprofit Sites",
    description:
      "A clean, donation-ready website that tells your organization's story and makes it easy for people to get involved.",
  },
  {
    icon: "briefcase",
    title: "Small Business Sites",
    description:
      "A professional storefront for your business — hours, menu or services, location, and a way for customers to reach you.",
  },
  {
    icon: "wrench",
    title: "Maintenance & Updates",
    description:
      "Already have a site? We can take over small edits, content updates, and fixes so you don't have to.",
  },
  {
    icon: "sparkles",
    title: "Brand Refresh",
    description:
      "A lightweight redesign — new colors, layout, and copy polish — for organizations that just need a refresh, not a rebuild.",
  },
];

// ---------------------------------------------------------------------------
// 5. PROCESS / HOW IT WORKS
// ---------------------------------------------------------------------------
export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Reach out",
    description:
      "Tell us a bit about your organization and what you need using the form below. It takes five minutes.",
  },
  {
    step: "02",
    title: "We scope it",
    description:
      "We'll set up a quick call to understand your goals, then put together a simple plan and timeline.",
  },
  {
    step: "03",
    title: "We build",
    description:
      "Our student team designs and builds your site, checking in with you along the way for feedback.",
  },
  {
    step: "04",
    title: "You launch",
    description:
      "We publish your new site and hand off everything you need to keep it running — or we can maintain it for you.",
  },
];

// ---------------------------------------------------------------------------
// 6. PORTFOLIO — TODO: replace these placeholder entries with real client
// work once projects are completed. Keep the same shape (title, client,
// description, imageSrc, href).
// ---------------------------------------------------------------------------
export type PortfolioItem = {
  client: string;
  description: string;
  // TODO: replace with a real screenshot/photo, e.g. "/portfolio/project-1.jpg"
  imageSrc: string | null;
  // TODO: link to the live site once launched.
  href: string | null;
};

export const portfolio: PortfolioItem[] = [
  {
    client: "[Client Name 1]",
    description: "[One-line description of the project and what we built]",
    imageSrc: null,
    href: null,
  },
  {
    client: "[Client Name 2]",
    description: "[One-line description of the project and what we built]",
    imageSrc: null,
    href: null,
  },
  {
    client: "[Client Name 3]",
    description: "[One-line description of the project and what we built]",
    imageSrc: null,
    href: null,
  },
  {
    client: "[Client Name 4]",
    description: "[One-line description of the project and what we built]",
    imageSrc: null,
    href: null,
  },
];

// ---------------------------------------------------------------------------
// 7. TESTIMONIALS
// ---------------------------------------------------------------------------
export type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "[Placeholder quote about how the new site helped this organization reach more people.]",
    name: "[Name]",
    org: "[Organization]",
  },
  {
    quote:
      "[Placeholder quote about the team's communication and how smooth the process was.]",
    name: "[Name]",
    org: "[Organization]",
  },
  {
    quote:
      "[Placeholder quote about the quality of the final site relative to the cost.]",
    name: "[Name]",
    org: "[Organization]",
  },
];

// ---------------------------------------------------------------------------
// 8. CONTACT / FOOTER
// ---------------------------------------------------------------------------
export const contact = {
  heading: "Let's build something",
  subheading:
    "Fill out the form and we'll get back to you within a few days.",
  // TODO: replace with real contact details.
  email: "hello@example.org",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};
