import { services } from "@/content";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { iconMap } from "@/components/icons";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function Services() {
  return (
    <section id="services" className="bg-forest-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            What we build
          </h2>
          <p className="mt-4 text-forest-800/70">
            A small set of services, done well, at a price that works for
            community organizations.
          </p>
        </FadeInSection>

        <div className="mt-12">
          <HoverEffect
            items={services.map((service) => {
              const Icon = iconMap[service.icon];
              return {
                key: service.title,
                content: (
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-forest-600 text-cream-50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-forest-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-forest-800/70">
                      {service.description}
                    </p>
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
    </section>
  );
}
