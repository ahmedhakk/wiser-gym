import Image from "next/image";
import ProductSpotlightContent from "@/ui/ProductSpotlightContent";

export default function ProductSpotlight() {
  return (
    <section className="w-full bg-black relative overflow-hidden min-h-screen">
      <Image
        src="/product-spotlight.png"
        alt="product-spotlight"
        width={788}
        height={900}
        className="hidden md:block absolute bottom-0 left-0 h-full w-[55%] max-w-[820px] object-cover z-0"
        sizes="(max-width: 768px) 0vw, 50vw"
      />

      <ProductSpotlightContent />
    </section>
  );
}
