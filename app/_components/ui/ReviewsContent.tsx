"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import ReviewCard from "@/ui/ReviewCard";
import ReviewsResults from "@/ui/ReviewsResults";

type Review = {
  id: number;
  name: string;
  rating: number; // 1-5
  message: string;
  avatarSrc: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Omar Ahmed",
    rating: 5,
    message:
      "WiserGym completely changed how I train. I’ve lost 8kg in 3 months without stepping into a gym!",
    avatarSrc: "/avatars/omar.png",
  },
  {
    id: 2,
    name: "Reem Saad Abdullah",
    rating: 5,
    message:
      "My whole family uses it! It’s efficient, clean, and the AI guidance keeps me accountable.",
    avatarSrc: "/avatars/reem.png",
  },
  {
    id: 3,
    name: "Faisal Shaheen",
    rating: 5,
    message:
      "I was skeptical at first, but the quality is unmatched. It feels like a full gym on my wall.",
    avatarSrc: "/avatars/faisal.png",
  },
  {
    id: 4,
    name: "Faisal Shaheen",
    rating: 5,
    message:
      "I was skeptical at first, but the quality is unmatched. It feels like a full gym on my wall.",
    avatarSrc: "/avatars/faisal.png",
  },
];

export default function ReviewsContent() {
  const t = useTranslations("Reviews");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Calculate how many cards are visible at current index
  const getVisibleReviews = () => {
    const maxVisible = 3;
    const visible = [];

    for (let i = 0; i < Math.min(maxVisible, reviews.length); i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }

    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="container max-w-9xl mx-auto px-4 py-6 md:px-12 h-full">
      <header className="flex justify-between items-center mt-16">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          {t("headline")}
        </h1>

        <div className="flex gap-3 md:gap-6">
          <button onClick={handlePrevious} aria-label="Previous review">
            <Image
              src={isRTL ? "/icons/right-arrow.svg" : "/icons/left-arrow.svg"}
              alt="previous arrow"
              width={56}
              height={56}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
          <button onClick={handleNext} aria-label="Next review">
            <Image
              src={isRTL ? "/icons/left-arrow.svg" : "/icons/right-arrow.svg"}
              alt="next arrow"
              width={56}
              height={56}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
        </div>
      </header>

      {/* Reviews Carousel - responsive */}
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-6 transition-all duration-500 ease-in-out items-stretch">
          {visibleReviews.map((review, idx) => (
            <div
              key={`${review.id}-${currentIndex}-${idx}`}
              className={`
                w-full flex-shrink-0 flex
                sm:w-[calc(50%-12px)] 
                lg:w-[calc(33.333%-16px)]
                transition-all duration-500 ease-in-out
                ${
                  idx === 0
                    ? "opacity-100 translate-x-0"
                    : "opacity-100 translate-x-0"
                }
              `}
            >
              <ReviewCard
                name={review.name}
                message={review.message}
                avatarSrc={review.avatarSrc}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </div>

      {/* content */}
      <ReviewsResults />
    </div>
  );
}
