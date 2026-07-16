import { about } from "@/content";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function About() {
  return (
    <section id="about" className="bg-cream-50 py-24">
      <FadeInSection className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
          {about.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-forest-800/80">
          {about.body}
        </p>
      </FadeInSection>
    </section>
  );
}
