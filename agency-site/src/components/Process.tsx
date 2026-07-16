import { process } from "@/content";
import { Timeline } from "@/components/ui/timeline";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function Process() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-forest-800/70">
            From first message to launch day, here&apos;s what to expect.
          </p>
        </FadeInSection>

        <div className="mt-16">
          <Timeline data={process} />
        </div>
      </div>
    </section>
  );
}
