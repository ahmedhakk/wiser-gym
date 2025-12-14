import ProductImagesSlider from "@/ui/ProductImagesSlider";
import ProductDetails from "@/ui/ProductDetails";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function ProductOverview() {
  return (
    <section className="w-full h-[200vh] lg:h-screen relative transition-all duration-300 bg-white">
      <div className="container max-w-9xl mx-auto px-4 md:px-12 py-6 h-full">
        <AnimateOnScroll direction="up" delayMs={500}>
          <div className="flex flex-col items-center justify-between lg:flex-row h-full">
            {/* Left product image + slider */}
            <ProductImagesSlider />

            {/* Right product content */}
            <ProductDetails />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
