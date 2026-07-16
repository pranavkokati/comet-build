import { testimonials } from "@/content";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function Testimonials() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            What clients say
          </h2>
        </FadeInSection>

        <div className="mt-14">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
