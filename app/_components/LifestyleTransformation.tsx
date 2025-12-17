import Image from "next/image";
import LifestyleTransformationContent from "@/ui/LifestyleTransformationContent";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function LifestyleTransformation() {
  return (
    <AnimateOnScroll direction="up" delayMs={300}>
      <section
        id="lifestyle-transformation"
        className="w-full relative min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] overflow-hidden"
      >
        <Image
          src="/bg-lifestyle-transformation.png"
          alt="Lifestyle Transformation Background"
          fill
          className="object-cover object-center -z-20"
          priority
        />

        {/* red overlay */}
        <div className="absolute inset-0 bg-[#CF0002] opacity-85 -z-10"></div>

        {/* Content */}
        <LifestyleTransformationContent />
      </section>
    </AnimateOnScroll>
  );
}
