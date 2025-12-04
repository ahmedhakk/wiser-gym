import Image from "next/image";
import { useTranslations } from "next-intl";
import LifestyleTransformationList from "@/ui/LifestyleTransformationList";

export default function LifestyleTransformationContent() {
  const t = useTranslations();

  return (
    <div className="container max-w-9xl mx-auto px-12 py-6 h-screen relative">
      {/* Background overlay left */}
      <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-[#E60017] mix-blend-color -z-10"></div>

      {/* Image left */}
      <Image
        src="/lifestyle-transformation-content.png"
        alt="Lifestyle Transformation Content Image"
        width="788"
        height="960"
        className="w-1/2 h-full object-contain absolute bottom-0 left-0 z-0 hidden lg:block"
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-16 lg:gap-8 md:flex-row md:justify-center md:items-center h-full px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-24 md:mt-0 md:flex-1 leading-tight">
          {t("LifestyleTransformation.headline") + " "} <br />
          {t("title")}
        </h2>

        <LifestyleTransformationList className="md:flex-1" />
      </div>
    </div>
  );
}
