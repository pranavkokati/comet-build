"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, site } from "@/content";
import { FadeInSection } from "@/components/ui/fade-in-section";

// UI-only form: no backend wired up yet. TODO: connect `handleSubmit` to a
// real endpoint (API route, form service, email provider, etc.) when ready.
export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-forest-900 py-24 text-cream-50">
      <div className="mx-auto max-w-2xl px-6">
        <FadeInSection className="text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-forest-100/70">{contact.subheading}</p>
        </FadeInSection>

        <FadeInSection delay={0.1} className="mt-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-forest-700 bg-forest-800 p-8 text-center"
            >
              <p className="font-medium">Thanks — we&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-forest-700 bg-forest-800/60 px-4 py-3 text-cream-50 placeholder:text-forest-300 focus:border-clay-400 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-forest-700 bg-forest-800/60 px-4 py-3 text-cream-50 placeholder:text-forest-300 focus:border-clay-400 focus:outline-none"
                />
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about your organization and what you need"
                className="w-full rounded-xl border border-forest-700 bg-forest-800/60 px-4 py-3 text-cream-50 placeholder:text-forest-300 focus:border-clay-400 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-transform hover:scale-[1.02] hover:bg-clay-600 active:scale-[0.98]"
              >
                Send message
              </button>
            </form>
          )}
        </FadeInSection>

        <FadeInSection
          delay={0.2}
          className="mt-16 flex flex-col items-center gap-3 border-t border-forest-800 pt-8 text-sm text-forest-300/70"
        >
          <div>{contact.email}</div>
          <div className="flex gap-6">
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-cream-50">
                {s.label}
              </a>
            ))}
          </div>
          <div className="mt-2">
            &copy; {new Date().getFullYear()} {site.name}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
