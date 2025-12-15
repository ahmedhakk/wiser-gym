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
      className={`flex flex-col gap-8 sm:gap-10 lg:gap-12 text-foreground ${className}`}
    >
      {transformationList.map((BenefitItem) => (
        <div key={BenefitItem.id} className="flex items-center gap-3 md:gap-4">
          <Image
            src={BenefitItem.icon}
            alt={BenefitItem.text}
            width={64}
            height={64}
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0"
          />

          {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl"> */}
          <p className="text-sm sm:text-base lg:text-md leading-[1.6]">
            {BenefitItem.text}
          </p>
        </div>
      ))}
    </div>
  );
}
