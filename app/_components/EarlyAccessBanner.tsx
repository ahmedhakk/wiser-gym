import Image from "next/image";
import EarlyAccessBannerContent from "@/ui/EarlyAccessBannerContent";

export default function EarlyAccessBanner() {
  return (
    <section className="relative w-full h-[600px] md:h-[500px] overflow-hidden">
      <Image
        src="/bg-mobile-early-access-banner.png"
        alt="early access background"
        fill
        priority
        className="object-cover -z-20 block md:hidden"
        sizes="100vw"
      />

      <Image
        src="/bg-early-access-banner.png"
        alt="early access background"
        fill
        priority
        className="object-cover -z-20 hidden md:block"
        sizes="100vw"
      />

      <EarlyAccessBannerContent />
    </section>
  );
}
