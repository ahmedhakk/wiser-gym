import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function ProductSpotlightContent() {
  const t = useTranslations();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 min-h-screen flex flex-col justify-center ltr:items-end rtl:items-start relative z-10">
      <div className="flex flex-col">
        <AnimateOnScroll direction="left" delayMs={300}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.12] capitalize">
            {t("ProductSpotlight.headline1")} <br />
            {t("ProductSpotlight.headline2")} <br />
            {t("title")}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-medium mt-4 sm:mt-6 mb-8 leading-[1.7] max-w-xl">
            {t("ProductSpotlight.subtext")}
            <span className="block font-bold text-white mt-2">
              {t("ProductSpotlight.subtextBold")}
            </span>
          </p>

          <button className="bg-primary hover:bg-primary-hover text-white text-sm sm:text-base lg:text-lg font-bold py-3 px-6 transition-colors shadow-lg capitalize tracking-wide w-fit">
            {t("ProductSpotlight.cta")}
          </button>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
