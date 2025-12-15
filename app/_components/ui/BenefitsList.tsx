import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BenefitsList({ className }: { className?: string }) {
  const t = useTranslations("BenefitsAndPayments");

  const benefitsList = [
    {
      id: 1,
      text: t("list.strength"),
      icon: "/icons/strenth-icon.svg",
    },
    {
      id: 2,
      text: t("list.family"),
      icon: "/icons/family-icon.svg",
    },
    {
      id: 3,
      text: t("list.privacy"),
      icon: "/icons/hidden-eye-icon.svg",
    },
    { id: 4, text: t("list.time"), icon: "/icons/alarm-icon.svg" },
    {
      id: 5,
      text: t("list.directions"),
      icon: "/icons/directions-icon.svg",
    },
    {
      id: 6,
      text: t("list.smart"),
      icon: "/icons/thinking-icon.svg",
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 transition-all duration-300 ${className}`}
    >
      {benefitsList.map((benefit) => (
        <div key={benefit.id} className="flex items-center gap-3 md:gap-4">
          <Image
            src={benefit.icon}
            alt={benefit.text}
            width={64}
            height={64}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0"
          />

          <p className="text-foreground text-base sm:text-lg lg:text-xl leading-[1.4]">
            {benefit.text}
          </p>
        </div>
      ))}
    </div>
  );
}
