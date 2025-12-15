import Header from "@/ui/Header";
import HeroContent from "@/ui/HeroContent";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/bg-hero.jpg"
        alt="WiserGym Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-6 h-full flex flex-col">
        <Header />
        <HeroContent />
      </div>
    </section>
  );
}
