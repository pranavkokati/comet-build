# Comet Builds — website

A single-page marketing site for Comet Builds, a student-run web design
studio. Plain HTML/CSS/JS — **no build step, no Node, no npm.** Just open
the file or upload it to a host.

This is a **placeholder/showcase** site — copy, images, and portfolio items
are marked with `TODO` comments where you should swap in real content.

## Viewing it

Just double-click `index.html`, or open it from your browser
(`File > Open`). Everything — styles, scripts, fonts — loads from the
`css/`, `js/`, and Google Fonts, no server required.

## Hosting it

Upload the whole `agency-site/` folder (or its contents) to any static
host:

- **Netlify** — drag-and-drop the folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages** — push this folder to a repo and enable Pages in Settings
- **Cloudflare Pages / Vercel** — connect the repo, no build command needed
- **Plain shared hosting / FTP** — upload the files as-is; `index.html` is
  the homepage

There's nothing to configure — it's just static files.

## Where to edit things

Everything lives in **`index.html`** — open it and edit the text directly
in the markup (there's no separate content/data file since there's no
build step to pull one into). Look for these landmarks:

| What | Section in `index.html` |
| --- | --- |
| Site name / logo | `<div class="nav-outer">` near the top |
| Hero headline, subheadline, CTA buttons | `<section class="hero">` |
| Trust strip (row under the hero) | `<div class="trust-strip">` |
| Mission / about paragraph | `<section id="about">` |
| Service cards | `<section id="services">` |
| "How it works" steps | the `.timeline` inside the process section |
| Testimonial quotes | `<section>` above Contact, `.testi-slide` blocks |
| Contact email, form heading | `<section id="contact">` |

Other things to customize:

- **Colors** — all defined as CSS custom properties at the top of
  `css/styles.css` (`--ice-*` for the blue accent, `--slate-*` for text).
  Change the hex values there to rebrand the whole site, light and dark
  mode both included.
- **Dark mode** — the moon/sun button in the nav toggles a `data-theme`
  attribute on `<html>` (see `js/script.js`); `prefers-color-scheme` is
  respected automatically if the visitor hasn't toggled it.
- **Fonts** — loaded via the Google Fonts `<link>` tags in `<head>`
  (`Inter`). Swap the `href` and the `font-family` in `css/styles.css` to
  change the typeface.
## Receiving contact form submissions

The form is wired up to submit to [Formspree](https://formspree.io) (free,
no backend code) — you just need to point it at your own form:

1. Go to [formspree.io](https://formspree.io) and sign up (free tier is
   fine — 50 submissions/month).
2. Click **New Form**, give it a name, and set the destination to whichever
   email should receive messages.
3. Formspree gives you an endpoint that looks like
   `https://formspree.io/f/abcdwxyz`. Copy it.
4. In `index.html`, find the `<form>` tag in the Contact section and
   replace `YOUR_FORM_ID` in the `action` attribute with your real ID:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/abcdwxyz" method="POST">
   ```
5. That's it — no other changes needed. `js/script.js` already submits the
   form via `fetch` so visitors see the "Thanks, we'll be in touch" message
   in place, without a page reload or redirect to Formspree's site.

Formspree will send you a confirmation email the first time you submit the
form for real — you have to click the link in it once to activate the
form. After that, every submission lands directly in your inbox.

(Netlify Forms works similarly if you end up hosting on Netlify — just add
`data-netlify="true"` to the `<form>` tag instead and skip Formspree
entirely.)
