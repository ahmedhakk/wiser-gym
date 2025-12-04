import Image from "next/image";
import BenefitsContent from "@/ui/BenefitsContent";

export default function BenefitsOverview() {
  return (
    <section
      id="benefits-overview"
      className="w-full relative h-screen overflow-hidden"
    >
      <Image
        src="/bg-benefits-overview.png"
        alt="benefits Background"
        fill
        className="object-cover object-center -z-20"
        priority
      />

      {/* Content Container */}
      {/* red overlay */}
      <div className="container max-w-9xl mx-auto px-12 py-6 h-screen bg-[#CF0002] opacity-85 absolute inset-0 mix-blend-color -z-10"></div>

      {/* Content */}
      <BenefitsContent />
    </section>
  );
}
