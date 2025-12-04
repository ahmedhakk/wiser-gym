import BenefitItem from "@/components/ui/BenefitItem";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BenefitsContent() {
  const t = useTranslations();

  const benefitsListLeft = [
    { text: t("BenefitsOverview.list.benefit1") },
    { text: t("BenefitsOverview.list.benefit2") },
    { text: t("BenefitsOverview.list.benefit3") },
    { text: t("BenefitsOverview.list.benefit4") },
    { text: t("BenefitsOverview.list.benefit5") },
    { text: t("BenefitsOverview.list.benefit6") },
    { text: t("BenefitsOverview.list.benefit7") },
  ];
  const benefitsListRight = [
    { text: t("BenefitsOverview.list.benefit8") },
    { text: t("BenefitsOverview.list.benefit9") },
    { text: t("BenefitsOverview.list.benefit10") },
    { text: t("BenefitsOverview.list.benefit11") },
    { text: t("BenefitsOverview.list.benefit12") },
    { text: t("BenefitsOverview.list.benefit13") },
  ];

  return (
    <div className="container max-w-9xl mx-auto px-12 py-6 h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 md:mt-28 mb-5 md:mb-24">
        {t("title") + ": "}
        <span className="font-normal">{t("BenefitsOverview.headline")}</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div>
          {benefitsListLeft.map((benefit, index) => (
            <BenefitItem key={index} text={benefit.text} />
          ))}
        </div>

        {/* Image */}
        <Image
          src="/benefits-content.png"
          alt="Benefits Image"
          width={600}
          height={800}
          className="hidden lg:block w-auto h-auto max-w-full object-contain"
        />
        <div>
          {benefitsListRight.map((benefit, index) => (
            <BenefitItem key={index} text={benefit.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
