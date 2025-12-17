import Image from "next/image";
import { useTranslations } from "next-intl";
import LifestyleTransformationList from "@/ui/LifestyleTransformationList";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function LifestyleTransformationContent() {
  const t = useTranslations();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 xl:py-20 relative min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
      {/* Background overlay left */}
      <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-[#E60017] mix-blend-color -z-10"></div>

      {/* Image left */}
      <Image
        src="/lifestyle-transformation-content.png"
        alt="Lifestyle Transformation Content Image"
        width="788"
        height="960"
        className="h-full object-contain absolute bottom-0 left-0 w-[38%] max-w-[480px] z-0 hidden lg:block"
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-12 lg:gap-8 md:flex-row md:justify-center md:items-center h-full min-h-[inherit] px-4 md:px-8">
        <AnimateOnScroll direction="right" className="md:flex-1" delayMs={350}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] lg:leading-[1.15]">
            {t("LifestyleTransformation.headline")} <br />
            {t("title")}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll direction="left" className="md:flex-1" delayMs={350}>
          <LifestyleTransformationList />
        </AnimateOnScroll>
      </div>
    </div>
  );
}
