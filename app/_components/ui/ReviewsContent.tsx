"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import ReviewCard from "@/ui/ReviewCard";
import ReviewsResults from "@/ui/ReviewsResults";
import AnimateOnScroll from "./AnimateOnScroll";

type Review = {
  id: number;
  name: string;
  rating: number;
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

  const visibleReviews = useMemo(() => {
    const maxVisible = 3;
    const out: Review[] = [];
    for (let i = 0; i < Math.min(maxVisible, reviews.length); i++) {
      out.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return out;
  }, [currentIndex]);

  const animDir = isRTL ? "right" : "left";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-10 lg:py-12 h-full">
      <header className="flex items-center justify-between gap-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
          {t("headline")}
        </h1>

        <div className="flex gap-3 md:gap-6">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous review"
          >
            <Image
              src={isRTL ? "/icons/right-arrow.svg" : "/icons/left-arrow.svg"}
              alt=""
              width={56}
              height={56}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
          <button type="button" onClick={handleNext} aria-label="Next review">
            <Image
              src={isRTL ? "/icons/left-arrow.svg" : "/icons/right-arrow.svg"}
              alt=""
              width={56}
              height={56}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
        </div>
      </header>

      {/* Reviews row */}
      <div className="mt-10 overflow-hidden">
        <div className="flex gap-6 items-stretch rtl:flex-row-reverse">
          {visibleReviews.map((review, idx) => (
            <div
              key={`${review.id}-${currentIndex}-${idx}`}
              className="basis-full sm:basis-1/2 lg:basis-1/3 flex"
            >
              <AnimateOnScroll direction={animDir}>
                <ReviewCard
                  name={review.name}
                  message={review.message}
                  avatarSrc={review.avatarSrc}
                  rating={review.rating}
                />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>

      <ReviewsResults />
    </div>
  );
}
