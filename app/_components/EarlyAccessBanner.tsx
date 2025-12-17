import Image from "next/image";
import EarlyAccessBannerContent from "@/ui/EarlyAccessBannerContent";

export default function EarlyAccessBanner() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      <Image
        src="/bg-early-access-banner.png"
        alt="early access background"
        fill
        priority
        className="object-cover -z-20"
        sizes="100vw"
      />

      <EarlyAccessBannerContent />
    </section>
  );
}
