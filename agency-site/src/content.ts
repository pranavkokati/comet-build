/**
 * ============================================================================
 * SITE CONTENT — edit this file to customize the site. Components should not
 * need to change; they just render whatever is in here.
 *
 * Sections:
 *   1. Site identity (name, logo, nav, social links)
 *   2. Hero
 *   3. Trust strip (logos/names row under the hero)
 *   4. About / mission
 *   5. Services
 *   6. Process (how it works)
 *   7. Portfolio (TODO: replace with real client work)
 *   8. Testimonials
 *   9. Contact / footer
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// 1. SITE IDENTITY
// ---------------------------------------------------------------------------
export const site = {
  name: "Comet Builds",
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
  eyebrow: "Built by students, for the community",
  headline: "Websites for the people doing good work.",
  subheadline:
    "Comet Builds is a student-run studio that builds free and low-cost websites for local nonprofits, organizations, and small businesses. Our builders dive into real client work and real impact, which help them create strong portfolios.",
  primaryCta: {
    label: "Get a Free Site",
    href: "#contact",
  },
  secondaryCta: {
    label: "See our work",
    href: "#portfolio",
  },
  // Shown in the social-proof row under the CTAs ("Trusted by 30+ ...").
  trustCount: "30+",
};

// ---------------------------------------------------------------------------
// 3. TRUST STRIP — short list of org names/types shown as a row under the
// hero. Replace with real client names once available.
// ---------------------------------------------------------------------------
export const trust: string[] = [
  "Non-profit Organizations",
  "Local cafés",
  "Community Centers",
  "Small Studios",
  "Food Banks",
];

// ---------------------------------------------------------------------------
// 4. ABOUT / MISSION
// ---------------------------------------------------------------------------
export const about = {
  heading: "Real projects = Real Impact",
  body: "We're a group of students who love building things and wanted our personal projects to mean something. Comet Builds pairs student designers and developers with local nonprofits and small businesses who need a website but don't have the budget for one. The result: we get real-world experience, they get a site that actually helps them with their work.",
};

// ---------------------------------------------------------------------------
// 5. SERVICES
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
      "A professional storefront for your business with hours, menu or services, locations, and a way for customers to reach you.",
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
    description: "A lightweight redesign with new colors, layout, and polish.",
  },
];

// ---------------------------------------------------------------------------
// 6. PROCESS / HOW IT WORKS
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
      "Tell us a bit about your organization and what you need using the form below.",
  },
  {
    step: "02",
    title: "We research your needs",
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
      "We publish your new site and hand off everything you need to keep it running, or we can maintain it for you.",
  },
];

// ---------------------------------------------------------------------------
// 7. PORTFOLIO — TODO: replace these placeholder entries with real client
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
// 8. TESTIMONIALS
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
// 9. CONTACT / FOOTER
// ---------------------------------------------------------------------------
export const contact = {
  heading: "Let's build something",
  subheading: "Fill out the form and we'll get back to you in a few business days.",
  // TODO: replace with real contact details.
  email: "hello@example.org",
  // TODO: add social links once decided — leave empty to hide the row.
  socials: [] as { label: string; href: string }[],
};
