import FeatureItem from "@/ui/FeatureItem";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function FeaturesContent() {
  const t = useTranslations();

  const featuresListLeft = [
    { text: t("FeaturesOverview.list.feature1") },
    { text: t("FeaturesOverview.list.feature2") },
    { text: t("FeaturesOverview.list.feature3") },
    { text: t("FeaturesOverview.list.feature4") },
    { text: t("FeaturesOverview.list.feature5") },
    { text: t("FeaturesOverview.list.feature6") },
    { text: t("FeaturesOverview.list.feature7") },
  ];
  const featuresListRight = [
    { text: t("FeaturesOverview.list.feature8") },
    { text: t("FeaturesOverview.list.feature9") },
    { text: t("FeaturesOverview.list.feature10") },
    { text: t("FeaturesOverview.list.feature11") },
    { text: t("FeaturesOverview.list.feature12") },
    { text: t("FeaturesOverview.list.feature13") },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <h2
        className="
          text-xl sm:text-2xl lg:text-3xl xl:text-4xl
          font-bold
          mt-6 sm:mt-10 lg:mt-16
          mb-8 sm:mb-12 lg:mb-16
          leading-[1.25]
        "
      >
        {t("title") + ": "}
        <span className="font-normal">{t("FeaturesOverview.headline")}</span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-12">
        <AnimateOnScroll direction="right" delayMs={350}>
          <div>
            {featuresListLeft.map((feature, index) => (
              <FeatureItem key={index} text={feature.text} />
            ))}
          </div>
        </AnimateOnScroll>

        {/* Image */}
        <Image
          src="/features-content.png"
          alt="Features Image"
          width={600}
          height={800}
          className="hidden lg:block max-w-md xl:max-w-lg object-contain"
        />
        <AnimateOnScroll direction="left" delayMs={350}>
          <div>
            {featuresListRight.map((feature, index) => (
              <FeatureItem key={index} text={feature.text} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
