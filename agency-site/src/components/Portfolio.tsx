import { portfolio } from "@/content";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FadeInSection } from "@/components/ui/fade-in-section";

// TODO(portfolio): This whole section renders straight from
// `portfolio` in src/content.ts. Once real client projects are done,
// replace the placeholder entries there with real client names,
// descriptions, screenshots (imageSrc), and live links (href) — no changes
// needed here.
export function Portfolio() {
  return (
    <section id="portfolio" className="bg-neutral-50 py-20 dark:bg-neutral-800/40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-xl text-center">
          <span className="mb-2 block text-xs font-extrabold tracking-wide text-orange-500 uppercase">
            Work
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-100">
            Our work
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            {/* TODO(portfolio): swap this line once there's real work to point to */}
            A few of the organizations we&apos;ve built for.
          </p>
        </FadeInSection>

        <div className="mt-12">
          <HoverEffect
            items={portfolio.map((item) => ({
              key: item.client,
              content: (
                <div>
                  {/* TODO(portfolio): replace with <img src={item.imageSrc} /> once available */}
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50 text-sm text-neutral-400 dark:border-neutral-600 dark:bg-neutral-900">
                    Project image placeholder
                  </div>
                  <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100">
                    {item.client}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
