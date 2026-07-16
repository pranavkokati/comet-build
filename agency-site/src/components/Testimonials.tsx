import { testimonials } from "@/content";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FadeInSection } from "@/components/ui/fade-in-section";

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection className="mx-auto max-w-xl text-center">
          <span className="mb-2 block text-xs font-extrabold tracking-wide text-orange-500 uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-100">
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
