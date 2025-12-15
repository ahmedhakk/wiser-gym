import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function KeyFeaturesContent() {
  const t = useTranslations("KeyFeatures");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-12 lg:py-16 relative">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 lg:items-center">
        <div className="w-full lg:w-[65%] text-white space-y-8 pr-0 lg:pr-12 relative z-10">
          {/* Header Section */}
          <div className="mb-10 sm:mb-12 lg:mb-14">
            <AnimateOnScroll direction="down" delayMs={300}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 opacity-90 leading-[1.3]">
                {t("headline")}
              </h3>
            </AnimateOnScroll>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:gap-0">
              <AnimateOnScroll direction="right" delayMs={300}>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] font-bold tracking-wide">
                  {t("sub-headline.number")}
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right" delayMs={300}>
                <div className="bg-[#B90012] bg-opacity-60 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 inline-block self-start sm:self-center w-fit">
                  <span className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
                    {t("sub-headline.text")}
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Feature List */}
          <AnimateOnScroll direction="up" delayMs={300}>
            <div className="flex flex-col xl:flex-row gap-6 md:gap-8 lg:gap-10">
              <div className="flex flex-col gap-6 md:gap-10 lg:gap-12 flex-1">
                {/* Feature 1 */}
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <Image
                      src="/virtual-personal-trainer.jpg"
                      alt="Personal Trainer"
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <p className="text-sm sm:text-base lg:text-md font-medium leading-[1.6]">
                    {t("list.feature1")}
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <Image
                      src="/Wall-mounted.jpg"
                      alt="Space Saving"
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <p className="text-sm sm:text-base lg:text-md font-medium leading-[1.6]">
                    {t("list.feature2")}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex-1">
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <Image
                      src="/track-your-fitness.jpg"
                      alt="Fitness Tracking"
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <p className="text-sm sm:text-base lg:text-md font-medium leading-[1.6]">
                    {t("list.feature3")}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Image Area */}
        <div className="hidden lg:flex lg:w-[35%] relative justify-end z-0">
          <AnimateOnScroll direction="left" delayMs={300}>
            <div className="relative h-[520px] xl:h-[620px] w-[360px] xl:w-[420px]">
              <Image
                src="/key-features-main.png"
                alt="Smart Gym Workout"
                fill
                className="object-cover"
                priority
                sizes="35vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
