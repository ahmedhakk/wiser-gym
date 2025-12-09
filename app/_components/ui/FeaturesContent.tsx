import FeatureItem from "@/app/_components/ui/FeatureItem";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
    <div className="container max-w-9xl mx-auto px-12 py-6 h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 md:mt-28 mb-5 md:mb-24">
        {t("title") + ": "}
        <span className="font-normal">{t("FeaturesOverview.headline")}</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div>
          {featuresListLeft.map((feature, index) => (
            <FeatureItem key={index} text={feature.text} />
          ))}
        </div>

        {/* Image */}
        <Image
          src="/features-content.png"
          alt="Features Image"
          width={600}
          height={800}
          className="hidden lg:block w-auto h-auto max-w-full object-contain"
        />
        <div>
          {featuresListRight.map((feature, index) => (
            <FeatureItem key={index} text={feature.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
