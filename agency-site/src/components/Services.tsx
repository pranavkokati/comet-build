import { services } from "@/content";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { iconMap } from "@/components/icons";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function Services() {
  return (
    <section id="services" className="bg-neutral-50 py-20 dark:bg-neutral-800/40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-xl text-center">
          <span className="mb-2 block text-xs font-extrabold tracking-wide text-orange-500 uppercase">
            Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-100">
            What we build
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            A small set of services, done well, at a price that works for community organizations.
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
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-yellow-400 text-neutral-900">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
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
