import Image from "next/image";
import ReviewsContent from "@/ui/ReviewsContent";

export default function Reviews() {
  return (
    <section id="testimonials" className="w-full h-screen relative">
      <Image
        src="/bg-reviews.png"
        alt="Reviews Background"
        width={788}
        height={960}
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      <div
        className="absolute inset-0 bg-[#e60017] opacity-40 -z-10"
        style={{
          clipPath:
            "polygon(0 0, 60% 0, 100% 50%, 100% 100%, 40% 100%, 0% 50%)",
        }}
      ></div>

      <ReviewsContent />
    </section>
  );
}
