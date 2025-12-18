"use client";

import { useTranslations, useLocale } from "next-intl";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function EarlyAccessBannerContent() {
  const t = useTranslations("EarlyAccessBanner");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const leftPerks = [
    t("leftSidePerks.perk1"),
    t("leftSidePerks.perk2"),
    t("leftSidePerks.perk3"),
  ];

  const rightPerks = [t("rightSidePerks.perk1"), t("rightSidePerks.perk2")];

  const leftAnim = isRTL ? "left" : "right";
  const rightAnim = isRTL ? "right" : "left";

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 text-white h-full">
      <div className="flex h-full flex-col lg:py-14 justify-between">
        <div className="grid gap-10 md:grid-cols-2 md:gap-20 mt-8 rtl:text-right">
          {/* Left side */}
          <AnimateOnScroll direction={leftAnim} delayMs={300}>
            <div>
              <h2 className="text-xl font-semibold leading-snug md:text-2xl lg:text-3xl mb-8">
                {t("leftSidePerks.headline")}
              </h2>

              <ul className="mt-6 space-y-5 text-sm sm:text-base">
                {leftPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="h-4 w-4 sm:h-5 sm:w-5 rounded-sm border-2 border-white bg-white flex-shrink-0" />
                    <span className="rtl:text-right">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Right side */}
          <AnimateOnScroll direction={rightAnim} delayMs={300}>
            <div>
              <h2 className="text-xl font-semibold leading-snug md:text-2xl lg:text-3xl mb-8">
                {t("rightSidePerks.headline")}
              </h2>

              <ul className="mt-6 space-y-5 text-sm sm:text-base">
                {rightPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="h-4 w-4 sm:h-5 sm:w-5 rounded-sm border-2 border-white bg-white flex-shrink-0" />
                    <span className="rtl:text-right">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* CTA bar */}
        <div className="flex justify-center pb-6">
          <AnimateOnScroll direction="up" delayMs={300}>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded bg-white px-6 py-3 text-center text-sm font-semibold tracking-wide text-gray-900 shadow-lg sm:px-10 sm:text-lg lg:text-xl"
            >
              {t("cta")}
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
