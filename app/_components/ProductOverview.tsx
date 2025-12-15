import ProductImagesSlider from "@/ui/ProductImagesSlider";
import ProductDetails from "@/ui/ProductDetails";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function ProductOverview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-10 lg:py-12">
        <AnimateOnScroll direction="up" delayMs={500}>
          <div className="grid grid-cols-1 lg:grid-cols-[520px_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            <ProductImagesSlider />
            <ProductDetails />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
