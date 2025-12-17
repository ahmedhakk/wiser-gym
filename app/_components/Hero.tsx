import Header from "@/ui/Header";
import HeroContent from "@/ui/HeroContent";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://res.cloudinary.com/djiuuqgxs/video/upload/v1765977519/wisergym_doewdm.mp4"
          type="video/mp4"
        />
      </video>
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
