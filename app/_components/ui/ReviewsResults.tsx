"use client";
import { useTranslations } from "next-intl";
import React from "react";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

const ReviewsResults: React.FC = () => {
  const t = useTranslations("Reviews");

  const benefits = [
    t("results.highlights.0"),
    t("results.highlights.1"),
    t("results.highlights.2"),
  ];

  return (
    <section className="w-full py-10 text-white">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <AnimateOnScroll direction="left" delayMs={300}>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight mb-6">
            {t("results.heading")}
          </h2>
        </AnimateOnScroll>

        {/* Benefits row */}
        <div className="flex flex-wrap items-center gap-x-12 gap-y-3 text-sm sm:text-lg">
          {benefits.map((benefit) => (
            <AnimateOnScroll direction="up" delayMs={300} key={benefit}>
              <div className="flex items-center gap-2">
                {/* Check icon in circle */}
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 fill-current"
                  >
                    <path d="M8.293 13.293 4.5 9.5 5.914 8.086 8.293 10.464 14.086 4.671 15.5 6.086z" />
                  </svg>
                </span>
                <span>{benefit}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-2">
          <AnimateOnScroll direction="up" delayMs={300}>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide shadow-md transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700 sm:w-auto sm:text-base"
            >
              {t("results.cta")}
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ReviewsResults;
