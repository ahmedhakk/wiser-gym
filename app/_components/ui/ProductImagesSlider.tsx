"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductImagesSlider() {
  const wiserGymImages = [
    { id: 1, src: "/wisergym-trainer-1.jpg", alt: "Woman Training Back" },
    { id: 2, src: "/wisergym-trainer-2.jpg", alt: "Man Training Arms" },
    { id: 3, src: "/wisergym-trainer-3.jpg", alt: "Woman Stretching" },
    { id: 4, src: "/wisergym-machine.png", alt: "WiserGym Main Unit" },
  ];

  const [selectedImage, setSelectedImage] = useState(wiserGymImages[3]);

  return (
    <div className="w-full flex flex-col items-center gap-6 lg:gap-8">
      {/* Main */}
      <div className="relative w-full max-w-[520px] aspect-square">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          className="object-contain drop-shadow-2xl"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbs */}
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
        {wiserGymImages.map((image) => {
          const isActive = selectedImage.id === image.id;

          return (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={[
                "relative rounded-full overflow-hidden border-2 transition",
                "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20",
                isActive
                  ? "border-[#D0D2D3] scale-105 shadow-lg ring-2 ring-[#D0D2D3]/30"
                  : "border-transparent opacity-70 hover:opacity-100",
              ].join(" ")}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="96px"
              />
              {!isActive && (
                <div className="absolute inset-0 bg-white/40 hover:bg-transparent transition" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
