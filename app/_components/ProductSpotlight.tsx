import Image from "next/image";
import ProductSpotlightContent from "@/ui/ProductSpotlightContent";

export default function ProductSpotlight() {
  return (
    <section className="w-full h-screen bg-black relative">
      <Image
        src="/product-spotlight.png"
        alt="product-spotlight"
        width={788}
        height={900}
        className="w-[60%] h-full object-cover absolute bottom-0 left-0 hidden md:block z-0"
        sizes="(max-width: 768px) 0vw, 50vw"
      />

      <ProductSpotlightContent />
    </section>
  );
}
