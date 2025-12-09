import Image from "next/image";
import FeaturesContent from "@/app/_components/ui/FeaturesContent";

export default function FeaturesOverview() {
  return (
    <section
      id="features-overview"
      className="w-full relative h-screen overflow-hidden"
    >
      <Image
        src="/bg-features-overview.png"
        alt="features Background"
        fill
        className="object-cover object-center -z-20"
        priority
      />

      {/* red overlay */}
      <div className="container max-w-9xl mx-auto px-12 py-6 h-screen bg-[#CF0002] opacity-85 absolute inset-0 mix-blend-color -z-10"></div>

      {/* Content */}
      <FeaturesContent />
    </section>
  );
}
