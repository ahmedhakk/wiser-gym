import { useTranslations } from "next-intl";

export default function HeroContent() {
  const t = useTranslations("Hero.content");

  return (
    <div className="flex-1 flex items-center mb-24">
      <div className="max-w-3xl text-white space-y-6">
        {/* Stars */}
        <div className="flex space-x-1 text-[#FF8C00] text-xl">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-wide md:mb-3">
          {t("mainText.line1")} <br />
          {t("mainText.line2")} <br />
          {t("mainText.line3")}{" "}
          <span className="text-primary">{t("mainText.line4")}</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-200 font-normal max-w-2xl leading-relaxed">
          {t("subText")}
        </p>
      </div>
    </div>
  );
}
