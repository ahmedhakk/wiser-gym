import { useTranslations } from "next-intl";
import Image from "next/image";

export default function LifestyleTransformationList({
  className,
}: {
  className?: string;
}) {
  const t = useTranslations();
  const transformationList = [
    {
      id: 1,
      icon: "/icons/Time-Icon.svg",
      text: t("LifestyleTransformation.list.advantage-1"),
    },
    {
      id: 2,
      icon: "/icons/calendar-icon.svg",
      text: t("LifestyleTransformation.list.advantage-2"),
    },
    {
      id: 3,
      icon: "/icons/wristwatch-icon.svg",
      text: t("LifestyleTransformation.list.advantage-3"),
    },
    {
      id: 4,
      icon: "/icons/wall-clock-icon.svg",
      text: t("LifestyleTransformation.list.advantage-4"),
    },
  ];

  return (
    <div
      className={`flex flex-col gap-12 md:gap-16 text-foreground ${className}`}
    >
      {transformationList.map((BenefitItem) => (
        <div key={BenefitItem.id} className="flex items-center gap-3 md:gap-4">
          <Image
            src={BenefitItem.icon}
            alt="icon"
            width={64}
            height={64}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
          />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            {BenefitItem.text}
          </p>
        </div>
      ))}
    </div>
  );
}
