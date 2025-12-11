"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductImagesSlider() {
  const wiserGymImages = [
    {
      id: 1,
      src: "/wisergym-trainer-1.jpg",
      alt: "Woman Training Back",
    },
    {
      id: 2,
      src: "/wisergym-trainer-2.jpg",
      alt: "Man Training Arms",
    },
    {
      id: 3,
      src: "/wisergym-trainer-3.jpg",
      alt: "Woman Stretching",
    },
    {
      id: 4,
      src: "/wisergym-machine.png",
      alt: "WiserGym Main Unit",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(wiserGymImages[3]);

  return (
    <div className="flex flex-col items-center justify-evenly gap-8 w-full lg:w-1/2">
      {/* --- MAIN IMAGE DISPLAY --- */}
      <div className="relative w-full aspect-[3/4] md:aspect-square flex items-center justify-center p-4">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          className="object-contain drop-shadow-2xl transition-all duration-500 ease-in-out"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* --- THUMBNAIL SLIDER --- */}
      <div className="flex gap-4 justify-center items-center">
        {wiserGymImages.map((image) => {
          const isActive = selectedImage.id === image.id;

          return (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`
                relative w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden border-2 transition-all duration-300
                ${
                  isActive
                    ? "border-[#D0D2D3] scale-110 shadow-lg ring-2 ring-[#D0D2D3]/30" // Active Styles
                    : "border-transparent opacity-70 hover:opacity-100" // Inactive Styles
                }
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 112px"
              />

              {!isActive && (
                <div className="absolute inset-0 bg-white/40 hover:bg-transparent transition-colors duration-300" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
