import Image from "next/image";
import LifestyleTransformationContent from "@/ui/LifestyleTransformationContent";

export default function LifestyleTransformation() {
  return (
    <section
      id="lifestyle-transformation"
      className="w-full relative h-screen overflow-hidden"
    >
      <Image
        src="/bg-lifestyle-transformation.png"
        alt="Lifestyle Transformation Background"
        fill
        className="object-cover object-center -z-20"
        priority
      />

      {/* Content Container */}
      {/* red overlay */}
      <div className="container max-w-9xl mx-auto px-12 py-6 h-screen bg-[#CF0002] opacity-85 absolute inset-0 -z-10"></div>

      {/* Content */}
      <LifestyleTransformationContent />
    </section>
  );
}
