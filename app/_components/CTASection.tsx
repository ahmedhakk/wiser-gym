import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function CTASection() {
  const t = useTranslations("CTASection");

  return (
    <section className="relative w-full overflow-hidden h-[460px] md:h-[620px] lg:h-[720px]">
      <Image
        src="/bg-cta.png"
        alt="CTA Background"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />

      <div className="mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-full flex-col items-center justify-center text-center text-white">
          <AnimateOnScroll direction="left" delayMs={300}>
            <h1
              className="
                max-w-6xl font-bold
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                leading-[1.2]
                tracking-tight sm:tracking-normal
              "
            >
              {t("mainText")}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delayMs={300}>
            <p
              className="
                mt-6 max-w-4xl font-medium
                text-[clamp(1rem,1.6vw,1.4rem)]
                leading-relaxed
              text-white/90
                tracking-normal
              "
            >
              {t("subText")}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delayMs={300}>
            <button
              type="button"
              className="
                mt-10 md:mt-12
                bg-primary hover:bg-primary-hover
                px-8 sm:px-10 md:px-12 py-3.5 sm:py-4
                text-sm sm:text-base lg:text-xl
                font-bold
                shadow-lg
                transition-colors duration-300
                min-h-[48px]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40
                rounded
              "
            >
              {t("buttonText")}
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
