# Agency Site (placeholder template)

A single-page marketing site for a student-run web design agency, built with
Next.js (App Router), Tailwind CSS, and Framer Motion. Animated UI primitives
(hover cards, scroll-linked timeline, animated testimonials, background
beams) are hand-built in the style of [Aceternity UI](https://ui.aceternity.com/)
components, living under `src/components/ui/`.

This is a **placeholder/showcase** site — all copy, images, and portfolio
items are clearly marked and meant to be swapped out.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying as static HTML

This project is configured for static export (`output: "export"` in
`next.config.ts`). To generate plain HTML/CSS/JS files that any static host
can serve (no Node.js needed to run it — only to build it once):

```bash
npm install
npm run build
```

This produces an `out/` folder containing static files. Upload that folder's
contents to any static host — Netlify, GitHub Pages, Cloudflare Pages, S3, or
a plain shared-hosting FTP server all work. To preview it locally before
deploying:

```bash
npx serve out
```

## Where to edit things

Everything content-related lives in **`src/content.ts`** — open that one file
to update copy without touching any component code:

| What | Where in `src/content.ts` |
| --- | --- |
| Site name / logo / tagline | `site` |
| Hero headline, subheadline, CTA buttons | `hero` |
| Mission / about paragraph | `about` |
| Service cards | `services` |
| "How it works" steps | `process` |
| **Portfolio items (real client work)** | `portfolio` — marked with `TODO` comments, replace once projects launch |
| Testimonial quotes | `testimonials` |
| Contact email, socials, form heading | `contact` |

Other things to customize:

- **Colors** — `tailwind.config.js`, under `theme.extend.colors`. Three
  palettes: `forest` (primary), `cream` (background/neutral), `clay`
  (accent). Change the hex values to rebrand the whole site.
- **Fonts** — `src/app/layout.tsx` loads `Fraunces` (display/headings) and
  `Inter` (body) via `next/font/google`. Swap the imports there and the
  `fontFamily` mapping in `tailwind.config.js` to change the type pairing.
- **Logo image** — set `site.logoSrc` in `content.ts` and update
  `src/components/Nav.tsx` / `src/components/Hero.tsx` to render an `<img>`
  instead of the text wordmark.
- **Portfolio images** — drop files in `public/portfolio/` and set each
  item's `imageSrc` in `content.ts`; then swap the placeholder `<div>` in
  `src/components/Portfolio.tsx` for an `<img>`/`next/image`.
- **Contact form backend** — the form in `src/components/Contact.tsx` is UI
  only (`handleSubmit` just shows a success message). Wire it up to a real
  endpoint, API route, or form service when ready.

## Animated UI primitives

`src/components/ui/` contains the reusable animated pieces, each documented
inline:

- `background-beams.tsx` — drifting light beams behind the hero
- `card-hover-effect.tsx` — hover-tracking highlight for the Services and
  Portfolio grids
- `timeline.tsx` — scroll-linked vertical timeline for the process section
- `animated-testimonials.tsx` — autoplaying quote carousel
- `fade-in-section.tsx` — shared scroll-reveal wrapper (`whileInView`)
- `button.tsx` — primary/secondary CTA button

If you'd rather pull in the official Aceternity components instead of these
hand-built equivalents, they can be added individually via the shadcn CLI,
e.g. `npx shadcn@latest add <component-url-from-ui.aceternity.com>`.
