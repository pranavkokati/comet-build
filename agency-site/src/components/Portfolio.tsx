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
    <section id="portfolio" className="bg-forest-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            Our work
          </h2>
          <p className="mt-4 text-forest-800/70">
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
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-xl border border-dashed border-forest-300 bg-forest-100 text-sm text-forest-500">
                    Project image placeholder
                  </div>
                  <h3 className="text-lg font-semibold text-forest-900">
                    {item.client}
                  </h3>
                  <p className="mt-2 text-sm text-forest-800/70">
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
