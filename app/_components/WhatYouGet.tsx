import Image from "next/image";
import WhatYouGetContent from "@/ui/WhatYouGetContent";

export default function WhatYouGet() {
  return (
    <section className="w-full h-screen relative transition-all duration-300">
      <Image
        src="/bg-what-you-will-get.png"
        alt="what you will get"
        width={788}
        height={960}
        className="w-full h-full object-cover absolute -z-20"
      />

      {/* Content */}
      <WhatYouGetContent />
    </section>
  );
}
