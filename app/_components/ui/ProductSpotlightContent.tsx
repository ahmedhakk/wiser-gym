import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function ProductSpotlightContent() {
  const t = useTranslations();

  return (
    <div className="container max-w-9xl mx-auto px-6 py-12 h-full flex flex-col justify-center ltr:items-end rtl:items-start relative z-10 transition-all duration-300">
      <div className="flex flex-col">
        <AnimateOnScroll direction="left" delayMs={300}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 md:mb-6 capitalize leading-tight lg:leading-[1.2]">
            {t("ProductSpotlight.headline1")} <br />
            {t("ProductSpotlight.headline2")} <br />
            {t("title")}
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 font-medium my-14 leading-relaxed">
            {t("ProductSpotlight.subtext")}
            <span className="block font-bold text-white mt-1">
              {t("ProductSpotlight.subtextBold")}
            </span>
          </p>

          <button className="bg-primary hover:bg-primary-hover text-white text-lg md:text-xl font-bold py-3 px-4 transition-colors shadow-lg capitalize tracking-wide w-fit">
            {t("ProductSpotlight.cta")}
          </button>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
