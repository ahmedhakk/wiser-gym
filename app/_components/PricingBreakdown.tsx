"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

const PricingBreakdown: React.FC = () => {
  const t = useTranslations("PricingBreakdown");
  const leftBenefits = [
    t("leftColumn.benefits.benefit1"),
    t("leftColumn.benefits.benefit2"),
    t("leftColumn.benefits.benefit3"),
  ];

  return (
    <AnimateOnScroll direction="up" delayMs={500}>
      <section
        id="pricing"
        className="min-h-screen w-full bg-white flex items-center justify-center"
      >
        <div className="mx-auto container flex w-full max-w-9xl flex-col px-4 md:px-12 py-6 sm:px-6 lg:px-16">
          {/* Two columns – same height, centered content */}
          <div className="mt-8 grid flex-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-16 lg:gap-24">
            {/* LEFT COLUMN */}
            <div className="flex h-full flex-col justify-between gap-6">
              {/* Top content stretches, CTA sticks to bottom */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
                  {t("leftColumn.headline")}
                </h3>

                {/* Dark card with left stripe SVG + price tag */}
                <div className="relative inline-block w-full max-w-md">
                  {/* Dark card with stripes */}
                  <div className="relative overflow-hidden bg-[#111111] px-6 py-6 text-white sm:px-8 sm:py-14">
                    {/* Left stripes background */}
                    <div className="pointer-events-none absolute top-4 left-4 bottom-0 right-0">
                      <Image
                        src="/pricing-left-bg.svg"
                        alt=""
                        fill
                        className="object-cover opacity-30"
                        priority
                      />
                    </div>

                    {/* Text on top */}
                    <div className="relative">
                      <p className="text-lg font-semibold sm:text-3xl">
                        {t("leftColumn.ownItToday")}
                      </p>
                      <p className="mt-1 text-sm text-gray-300 sm:text-base">
                        {t("leftColumn.coffeePerDay")}
                      </p>
                    </div>
                  </div>

                  {/* Price tag - pure red block overlapping on desktop */}
                  <div
                    className="
                    z-10 mt-3 inline-flex items-center bg-red-600 px-5 py-3 text-white shadow-lg
                    md:px-7 md:py-4
                    md:absolute ltr:md:-right-52 rtl:md:-left-52 md:top-1/2 md:mt-0 md:-translate-y-1/2
                  "
                  >
                    <span className="mr-2 flex items-center">
                      <Image
                        src="/icons/SAR.svg"
                        alt="SAR"
                        width={28}
                        height={28}
                        className="h-6 w-6 md:h-14 md:w-14 brightness-0 invert"
                      />
                    </span>
                    <span className="text-2xl font-bold tracking-wide sm:text-xl md:text-3xl lg:text-5xl">
                      {t("leftColumn.price")}
                    </span>
                  </div>
                </div>

                {/* Benefits box */}
                <div className="w-full max-w-md bg-[#F2F2F2] px-6 py-5 text-sm text-gray-900 sm:px-8 sm:py-6 sm:text-base">
                  {leftBenefits.map((item) => (
                    <div
                      key={item}
                      className="mb-3 flex items-center gap-3 last:mb-0"
                    >
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-white sm:h-5 sm:w-5">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="h-3 w-3 fill-current"
                        >
                          <path d="M8.293 13.293 4.5 9.5 5.914 8.086 8.293 10.464 14.086 4.671 15.5 6.086z" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left CTA */}
              <button
                type="button"
                className="w-full max-w-md bg-red-600 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-red-500 sm:text-sm"
              >
                {t("leftColumn.cta")}
              </button>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex h-full flex-col justify-between gap-6">
              {/* Top content stretches, CTA sticks to bottom */}
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
                  {t("rightColumn.headline")}
                </h3>

                <div className="space-y-0">
                  {/* Right price block with stripe SVG */}
                  <div className="relative w-full max-w-md overflow-hidden bg-[#F7F7F7] px-6 py-7 sm:px-8 sm:py-8">
                    {/* Right stripes background */}
                    <div className="pointer-events-none absolute inset-0">
                      <Image
                        src="/pricing-right-bg.svg"
                        alt=""
                        fill
                        className="object-cover opacity-90"
                        priority
                      />
                    </div>

                    {/* Price content */}
                    <div className="relative text-center">
                      <p className="flex items-baseline justify-center gap-1 text-red-600">
                        <span className="flex items-center">
                          <Image
                            src="/icons/SAR.svg"
                            alt="SAR"
                            width={28}
                            height={28}
                            className="h-6 w-6 sm:h-20 sm:w-20 [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(98%)_saturate(7495%)_hue-rotate(3deg)_brightness(95%)_contrast(118%)]"
                          />
                        </span>
                        <span className="text-4xl font-bold sm:text-8xl">
                          {t("rightColumn.pricePerDay")}
                        </span>
                        <span className="text-base font-bold text-red-600 sm:text-3xl">
                          {t("rightColumn.perDay")}
                        </span>
                      </p>
                      <p className="mt-2 text-sm font-bold text-gray-900 sm:text-xl">
                        {t("rightColumn.spreadOver")}
                      </p>
                    </div>
                  </div>

                  {/* Description box */}
                  <div className="w-full max-w-md bg-[#F2F2F2] px-6 py-5 text-md text-gray-900 sm:px-8 sm:py-6 sm:text-xl">
                    <p>{t("rightColumn.description")}</p>
                  </div>
                </div>
              </div>

              {/* Right CTA */}
              <button
                type="button"
                className="w-full max-w-md bg-red-600 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-red-500 sm:text-sm"
              >
                {t("rightColumn.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default PricingBreakdown;
