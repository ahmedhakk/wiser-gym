"use client";
import Image from "next/image";
import PurchaseDetailsContent from "@/ui/PurchaseDetailsContent";
import { useParams } from "next/navigation";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function PurchaseDetails() {
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "ar";

  return (
    <AnimateOnScroll direction="up" delayMs={300}>
      <section className="w-full h-screen relative">
        {/* Background Images */}
        <div
          className={`flex absolute inset-0 -z-20 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left Image */}
          <Image
            src="/purchase.png"
            alt="purchase"
            width="788"
            height="960"
            className="w-1/2 h-full object-cover hidden md:block"
          />

          {/* Right Image */}
          <Image
            src="/bg-hero.jpg"
            alt="hero"
            width="788"
            height="960"
            className="w-1/2 h-full object-cover hidden md:block"
          />
        </div>

        {/* Overlay */}
        <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-[#E60017D9] -z-10"></div>

        {/* Content */}
        <PurchaseDetailsContent />
      </section>
    </AnimateOnScroll>
  );
}
