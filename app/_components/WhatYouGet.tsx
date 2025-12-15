import Image from "next/image";
import WhatYouGetContent from "@/ui/WhatYouGetContent";

export default function WhatYouGet() {
  return (
    <section className="w-full relative overflow-hidden py-14 md:py-16 lg:py-20">
      <Image
        src="/bg-what-you-will-get.png"
        alt="what you will get"
        fill
        priority
        className="object-cover -z-20"
      />

      <WhatYouGetContent />
    </section>
  );
}
