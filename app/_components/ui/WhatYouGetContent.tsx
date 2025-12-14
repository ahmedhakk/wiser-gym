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
    <div className="conatiner max-w-9xl mx-auto px-4 md:px-12 py-12 h-screen transition-all duration-300">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold md:mt-16 lg:mt-28 mb-6 md:mb-24">
        {t("headline")}
      </h1>

      <div className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-x-36 sm:gap-y-12 lg:gap-y-16">
        {featuresList.map((feature) => (
          <AnimateOnScroll
            key={feature.id}
            direction="left"
            delayMs={feature.id * 100}
          >
            <div
              key={feature.id}
              className="flex items-center gap-3 md:gap-6 bg-primary ltr:rounded-l-full rtl:rounded-r-full"
            >
              <Image
                src={feature.iconSrc}
                alt={feature.text}
                width={64}
                height={64}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
              />

              <p className="text-foreground text-xl lg:text-2xl xl:text-3xl">
                {feature.text}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
