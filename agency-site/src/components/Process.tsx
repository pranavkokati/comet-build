import { process } from "@/content";
import { Timeline } from "@/components/ui/timeline";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function Process() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-xl text-center">
          <span className="mb-2 block text-xs font-extrabold tracking-wide text-orange-500 uppercase">
            Process
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-100">
            How it works
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            From first message to launch day, here&apos;s what to expect.
          </p>
        </FadeInSection>

        <div className="mt-14">
          <Timeline data={process} />
        </div>
      </div>
    </section>
  );
}
