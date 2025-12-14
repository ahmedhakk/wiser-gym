import Image from "next/image";
import EarlyAccessBannerContent from "@/ui/EarlyAccessBannerContent";

export default function EarlyAccessBanner() {
  return (
    <section className="h-[868px] w-full relative">
      <Image
        src="/bg-early-access-banner.png"
        alt="early access background"
        width={788}
        height={960}
        className="object-cover w-full h-full absolute inset-0"
      />

      <EarlyAccessBannerContent />
    </section>
  );
}
