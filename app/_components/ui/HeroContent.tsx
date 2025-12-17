import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function HeroContent() {
  const t = useTranslations("Hero.content");

  return (
    <div className="flex-1 flex items-center mb-12 md:mb-20 lg:mb-24">
      <div className="max-w-3xl text-white space-y-4 sm:space-y-6">
        {/* Stars */}
        <AnimateOnScroll direction="up" delayMs={300}>
          <div className="flex space-x-1 text-[#FF8C00] text-base sm:text-lg">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </AnimateOnScroll>

        {/* Main Headline */}
        <AnimateOnScroll direction="up" delayMs={400}>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-wide
              leading-[1.2]
              sm:leading-[1.18]    
              lg:leading-[1.15]
              xl:leading-[1.12]"
          >
            {t("mainText.line1")} <br />
            {t("mainText.line2")} <br />
            {t("mainText.line3")}{" "}
            <span className="text-primary">{t("mainText.line4")}</span>
          </h1>
        </AnimateOnScroll>

        {/* Subtext */}
        <AnimateOnScroll direction="up" delayMs={500}>
          <p
            className=" text-base sm:text-lg lg:text-xl
          text-gray-200 font-normal max-w-2xl
          leading-[1.6] sm:leading-[1.65] lg:leading-[1.7]
          "
          >
            {t("subText")}
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
