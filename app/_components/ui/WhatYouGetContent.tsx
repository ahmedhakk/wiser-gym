import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function WhatYouGetContent() {
  const t = useTranslations("WhatYouGet");

  const featuresList = [
    { id: 1, text: t("list.item1"), iconSrc: "/icons/speech-icon.svg" },
    { id: 2, text: t("list.item2"), iconSrc: "/icons/all-in-one-icon.svg" },
    { id: 3, text: t("list.item3"), iconSrc: "/icons/family-icon.svg" },
    { id: 4, text: t("list.item4"), iconSrc: "/icons/progress-icon.svg" },
    { id: 5, text: t("list.item5"), iconSrc: "/icons/Time-Icon.svg" },
    { id: 6, text: t("list.item6"), iconSrc: "/icons/eye-icon.svg" },
    { id: 7, text: t("list.item7"), iconSrc: "/icons/fingerprint-icon.svg" },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8 md:mt-12 lg:mt-16 mb-6 md:mb-12 lg:mb-16">
        {t("headline")}
      </h1>
      <div className="px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-x-24 lg:gap-x-36 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
        {featuresList.map((feature) => (
          <AnimateOnScroll
            key={feature.id}
            direction="left"
            delayMs={feature.id * 100}
          >
            <div
              key={feature.id}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-primary ltr:rounded-l-full rtl:rounded-r-full pr-3 sm:pr-4"
            >
              <Image
                src={feature.iconSrc}
                alt={feature.text}
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
              />

              <p className="text-foreground text-base sm:text-lg md:text-xl lg:text-2xl leading-snug">
                {feature.text}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
