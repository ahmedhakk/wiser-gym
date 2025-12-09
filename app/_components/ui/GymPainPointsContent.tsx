import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GymPainPointsContent() {
  const t = useTranslations("GymPainPoints.content");

  const painPoints = [
    {
      id: 1,
      title: t("list.painPoint1"),
      image: "/painPoint-1.png",
    },
    {
      id: 2,
      title: t("list.painPoint2"),
      image: "/painPoint-2.jpg",
    },
    {
      id: 3,
      title: t("list.painPoint3"),
      image: "/painPoint-3.png",
    },
    {
      id: 4,
      title: t("list.painPoint4"),
      image: "/painPoint-4.png",
    },
  ];

  return (
    <div className="container max-w-9xl mx-auto px-4 sm:px-6 md:px-12 py-6 h-screen flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 lg:mb-16 max-w-2xl leading-tight">
        {t("headline")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {painPoints.map((item) => (
          <div
            key={item.id}
            className="relative h-auto md:h-[400px] lg:h-[480px] w-full md:rounded-2xl overflow-hidden group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={396}
              height={560}
              className="hidden md:block absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />

            <div className="md:absolute md:bottom-0 md:left-0 w-full p-4 md:p-6 bg-[#FF001AB2] md:h-[100px]">
              <h3 className="text-white text-lg md:text-xl font-medium leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
