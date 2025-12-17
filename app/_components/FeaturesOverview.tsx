import Image from "next/image";
import FeaturesContent from "@/ui/FeaturesContent";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function FeaturesOverview() {
  return (
    <AnimateOnScroll direction="up" delayMs={300}>
      <section
        id="features-overview"
        className="w-full relative py-16 md:py-20 lg:py-24"
      >
        <Image
          src="/bg-features-overview.png"
          alt="features Background"
          fill
          className="object-cover object-center -z-20"
          priority
        />

        {/* red overlay */}
        <div className="absolute inset-0 bg-[#CF0002]/85 mix-blend-color -z-10" />

        {/* Content */}
        <FeaturesContent />
      </section>
    </AnimateOnScroll>
  );
}
