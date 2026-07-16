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
    <section id="contact" className="bg-neutral-50 py-20 dark:bg-neutral-800/40">
      <div className="mx-auto max-w-2xl px-6">
        <FadeInSection className="rounded-[20px] border border-neutral-200 bg-white p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-12 dark:border-neutral-700 dark:bg-neutral-800">
          <div className="text-center">
            <span className="mb-2 block text-xs font-extrabold tracking-wide text-orange-500 uppercase">
              Contact
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-100">
              {contact.heading}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">{contact.subheading}</p>
          </div>

          <div className="mt-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-700 dark:bg-neutral-900"
              >
                <p className="font-bold text-neutral-800 dark:text-neutral-100">
                  Thanks — we&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-[10px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-[10px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                  />
                </div>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your organization and what you need"
                  className="w-full rounded-[10px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center self-start rounded-lg bg-orange-400 px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-orange-500 active:scale-[0.98]"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-700">
            <div>{contact.email}</div>
            {contact.socials.length > 0 && (
              <div className="flex gap-6">
                {contact.socials.map((s) => (
                  <a key={s.label} href={s.href} className="font-semibold hover:text-orange-500">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
            <div>
              &copy; {new Date().getFullYear()} {site.name}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
