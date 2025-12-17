"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

const PricingBreakdown: React.FC = () => {
  const t = useTranslations("PricingBreakdown");
  const locale = useLocale();
  const isRTL = locale === "ar";

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
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-10 lg:py-12">
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 md:items-stretch md:justify-items-center">
            {/* LEFT COLUMN */}
            <div className="flex w-full max-w-md flex-col justify-between gap-6">
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-start">
                  {t("leftColumn.headline")}
                </h3>

                {/* Card + price tag */}
                <div className="relative w-full overflow-visible">
                  <div className="relative overflow-hidden bg-[#111111] px-6 py-6 text-white sm:px-8 sm:py-14">
                    {/* stripes */}
                    <div className="pointer-events-none absolute top-4 left-4 bottom-0 right-0 opacity-30">
                      <Image
                        src="/pricing-left-bg.svg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 420px"
                      />
                    </div>

                    <div className="relative">
                      <p className="text-lg font-semibold sm:text-3xl">
                        {t("leftColumn.ownItToday")}
                      </p>
                      <p className="mt-1 text-sm text-gray-300 sm:text-base">
                        {t("leftColumn.coffeePerDay")}
                      </p>
                    </div>
                  </div>

                  {/* Price tag */}
                  <div
                    className="
                      z-10 mt-3 inline-flex items-center gap-2 bg-red-600 px-4 py-2.5 text-white shadow-lg
                      sm:px-5 sm:py-3
                      md:absolute md:top-1/2 md:mt-0 md:-translate-y-1/2 md:px-7 md:py-4
                      ltr:md:-right-28 rtl:md:-left-28
                      lg:ltr:-right-32 lg:rtl:-left-32
                      xl:ltr:-right-40 xl:rtl:-left-40
                    "
                  >
                    <Image
                      src="/icons/SAR.svg"
                      alt="SAR"
                      width={28}
                      height={28}
                      className="h-5 w-5 sm:h-6 sm:w-6 md:h-10 md:w-10 lg:h-14 lg:w-14 brightness-0 invert"
                    />
                    <span className="text-xl font-bold tracking-wide sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      {t("leftColumn.price")}
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="w-full bg-[#F2F2F2] px-6 py-5 text-sm text-gray-900 sm:px-8 sm:py-6 sm:text-base">
                  {leftBenefits.map((item) => (
                    <div
                      key={item}
                      className="mb-3 flex items-center gap-3 last:mb-0"
                    >
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-600 text-white flex-shrink-0">
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="h-3 w-3 fill-current"
                        >
                          <path d="M8.293 13.293 4.5 9.5 5.914 8.086 8.293 10.464 14.086 4.671 15.5 6.086z" />
                        </svg>
                      </span>
                      <span className="text-start">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-red-600 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-red-500 sm:text-sm"
              >
                {t("leftColumn.cta")}
              </button>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex w-full max-w-md flex-col justify-between gap-6">
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-start">
                  {t("rightColumn.headline")}
                </h3>

                <div className="space-y-0">
                  <div className="relative w-full overflow-hidden bg-[#F7F7F7] px-6 py-7 sm:px-8 sm:py-8">
                    <div className="pointer-events-none absolute inset-0">
                      <Image
                        src="/pricing-right-bg.svg"
                        alt=""
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 768px) 90vw, 420px"
                      />
                    </div>

                    <div className="relative text-center">
                      <p className="flex items-baseline justify-center gap-2 text-red-600">
                        <Image
                          src="/icons/SAR.svg"
                          alt="SAR"
                          width={28}
                          height={28}
                          className="h-6 w-6 sm:h-20 sm:w-20 [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(98%)_saturate(7495%)_hue-rotate(3deg)_brightness(95%)_contrast(118%)]"
                        />
                        <span className="text-4xl font-bold sm:text-8xl">
                          {t("rightColumn.pricePerDay")}
                        </span>
                        <span className="text-base font-bold sm:text-3xl">
                          {t("rightColumn.perDay")}
                        </span>
                      </p>

                      <p className="mt-2 text-sm font-bold text-gray-900 sm:text-xl">
                        {t("rightColumn.spreadOver")}
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-[#F2F2F2] px-6 py-5 text-md text-gray-900 sm:px-8 sm:py-6 sm:text-xl">
                    <p className="text-start">{t("rightColumn.description")}</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-red-600 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-red-500 sm:text-sm"
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
