"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

const EarlyAccessBannerContent: React.FC = () => {
  const t = useTranslations("EarlyAccessBanner");

  const leftPerks = [
    t("leftSidePerks.perk1"),
    t("leftSidePerks.perk2"),
    t("leftSidePerks.perk3"),
  ];

  const rightPerks = [t("rightSidePerks.perk1"), t("rightSidePerks.perk2")];
  return (
    <section className="relative container max-w-9xl mx-auto text-white">
      <div className="flex flex-col px-4 py-10 sm:px-6 md:px-8 lg:py-14 min-h-[868px] justify-between">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 mt-16">
          {/* Left side */}
          <AnimateOnScroll direction="right" delayMs={300}>
            <div>
              <h2 className="text-xl font-semibold leading-snug sm:text-2xl md:text-3xl mb-8">
                {t("leftSidePerks.headline")}
              </h2>

              <ul className="mt-6 space-y-5 text-sm sm:text-base">
                {leftPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    {/* Square checkbox */}
                    <span className="flex h-4 w-4 items-center justify-center rounded-sm border-2 border-white sm:h-5 sm:w-5 bg-white" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Right side */}
          <AnimateOnScroll direction="left" delayMs={300}>
            <div>
              <h2 className="text-xl font-semibold leading-snug sm:text-2xl md:text-3xl mb-8">
                {t("rightSidePerks.headline")}
              </h2>

              <ul className="mt-6 space-y-5 text-sm sm:text-base">
                {rightPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="flex h-4 w-4 items-center justify-center rounded-sm border-2 border-white sm:h-5 sm:w-5 bg-white" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* CTA bar */}
        <div className="flex justify-center pb-24">
          <AnimateOnScroll direction="up" delayMs={300}>
            <button
              type="button"
              className="
            inline-flex items-center justify-center
            rounded-sm bg-white px-6 py-3 text-center text-base font-semibold
            tracking-wide text-gray-900 shadow-lg
            sm:px-10 sm:text-lg md:text-2xl
            "
            >
              {t("cta")}
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessBannerContent;
