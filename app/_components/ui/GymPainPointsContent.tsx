import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

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
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col lg:min-h-[80vh] lg:justify-center">
      <AnimateOnScroll direction="up" delayMs={300}>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 sm:mb-10 lg:mb-14 max-w-2xl leading-[1.25]">
          {t("headline")}
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {painPoints.map((item) => (
          <AnimateOnScroll direction="left" key={item.id} delayMs={400}>
            <div className="relative min-h-[140px] md:h-[340px] lg:h-[380px] xl:h-[420px] w-full md:rounded-2xl overflow-hidden group">
              <Image
                src={item.image}
                alt={item.title}
                width={396}
                height={560}
                className="hidden md:block absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
              />

              <div className="md:absolute md:bottom-0 md:left-0 w-full p-4 md:p-6 bg-[#FF001AB2]">
                {/* <h3 className="text-white text-lg md:text-xl font-medium leading-snug"> */}
                <h3 className="text-white text-base sm:text-md lg:text-lg font-medium leading-[1.3]">
                  {item.title}
                </h3>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
