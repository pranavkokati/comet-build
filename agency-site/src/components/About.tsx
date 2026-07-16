import { about } from "@/content";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function About() {
  return (
    <section id="about" className="py-20">
      <FadeInSection className="mx-auto max-w-2xl px-6 text-center">
        <span className="mb-2 block text-xs font-extrabold tracking-wide text-orange-500 uppercase">
          Why we do this
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance text-neutral-800 sm:text-4xl dark:text-neutral-100">
          {about.heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {about.body}
        </p>
      </FadeInSection>
    </section>
  );
}
