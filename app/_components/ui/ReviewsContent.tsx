"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import ReviewCard from "@/ui/ReviewCard";
import ReviewsResults from "@/ui/ReviewsResults";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Review = {
  id: number;
  name: string;
  rating: number;
  message: string;
  avatarSrc: string;
};

export default function ReviewsContent() {
  const t = useTranslations("Reviews");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const animDir = isRTL ? "right" : "left";

  const reviews: Review[] = [
    {
      id: 1,
      name: t("list.review1.author"),
      rating: 5,
      message: t("list.review1.text"),
      avatarSrc: "/avatars/omar.png",
    },
    {
      id: 2,
      name: t("list.review2.author"),
      rating: 5,
      message: t("list.review2.text"),
      avatarSrc: "/avatars/reem.png",
    },
    {
      id: 3,
      name: t("list.review3.author"),
      rating: 5,
      message: t("list.review3.text"),
      avatarSrc: "/avatars/faisal.png",
    },
    {
      id: 4,
      name: t("list.review4.author"),
      rating: 5,
      message: t("list.review4.text"),
      avatarSrc: "/avatars/reem.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndex = (idx: number) => {
    const next = ((idx % reviews.length) + reviews.length) % reviews.length;
    const el = itemRefs.current[next];
    if (!el) return;

    setCurrentIndex(next);

    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const handlePrevious = () => {
    const active = getActiveIndex();
    scrollToIndex(active - 1);
  };

  const handleNext = () => {
    const active = getActiveIndex();
    scrollToIndex(active + 1);
  };

  // Update currentIndex while user scrolls (swipe/trackpad)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    const update = () => {
      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!items.length) return;

      const sRect = scroller.getBoundingClientRect();
      const scrollerCenter = sRect.left + sRect.width / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      items.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        const itemCenter = r.left + r.width / 2;
        const dist = Math.abs(itemCenter - scrollerCenter);

        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setCurrentIndex(bestIdx);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    // initial
    update();

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [isRTL]);

  const getActiveIndex = () => {
    const scroller = scrollerRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!scroller || !items.length) return 0;

    const sRect = scroller.getBoundingClientRect();
    const scrollerCenter = sRect.left + sRect.width / 2;

    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    items.forEach((el, idx) => {
      const r = el.getBoundingClientRect();
      const itemCenter = r.left + r.width / 2;
      const dist = Math.abs(itemCenter - scrollerCenter);

      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    return bestIdx;
  };

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
            className="
              group inline-flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-full border border-white/70
              bg-transparent transition
              hover:bg-white
              focus:outline-none
            "
          >
            {isRTL ? (
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white transition group-hover:text-black" />
            ) : (
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white transition group-hover:text-black" />
            )}
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="
              group inline-flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-full border border-white/70
              bg-transparent transition
              hover:bg-white
              focus:outline-none
            "
          >
            {isRTL ? (
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white transition group-hover:text-black" />
            ) : (
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white transition group-hover:text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Scrollable Reviews row */}
      <div
        ref={scrollerRef}
        dir={isRTL ? "rtl" : "ltr"}
        className="
          mt-8
          flex gap-6 items-stretch
          overflow-x-auto overscroll-x-contain
          snap-x snap-mandatory scroll-smooth
          pb-2
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {reviews.map((review, idx) => (
          <div
            key={review.id}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="
              snap-center shrink-0 flex
              w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
              min-h-[180px] sm:min-h-[240px]
            "
          >
            <AnimateOnScroll direction={animDir} className="w-full flex">
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

      <ReviewsResults />
    </div>
  );
}
