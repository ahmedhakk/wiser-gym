import Image from "next/image";
import ReviewsContent from "@/ui/ReviewsContent";

export default function Reviews() {
  return (
    <section
      id="testimonials"
      className="w-full relative min-h-[600px] lg:min-h-[700px] overflow-hidden"
    >
      <Image
        src="/bg-reviews.png"
        alt="Reviews Background"
        fill
        className="object-cover -z-20"
        priority
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-[#e60017] opacity-40 -z-10"
        style={{
          clipPath:
            "polygon(0 0, 60% 0, 100% 50%, 100% 100%, 40% 100%, 0% 50%)",
        }}
      />

      <ReviewsContent />
    </section>
  );
}
