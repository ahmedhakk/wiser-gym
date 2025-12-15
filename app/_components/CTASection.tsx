import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function CTASection() {
  const t = useTranslations("CTASection");

  return (
    <section className="relative w-full overflow-hidden h-[640px] md:h-[720px] lg:h-[760px]">
      <Image
        src="/bg-cta.png"
        alt="CTA Background"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />

      <div className="mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-full flex-col items-center justify-center text-center text-white pt-10 md:pt-0">
          <AnimateOnScroll direction="left" delayMs={300}>
            <h1
              className="
                max-w-7xl font-bold
                text-[clamp(2.25rem,4.5vw,4.25rem)]
                leading-[1.08]
                tracking-normal sm:tracking-wide
              "
            >
              {t("mainText")}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delayMs={300}>
            <p
              className="
                mt-6 max-w-5xl font-semibold
                text-[clamp(1rem,1.6vw,1.5rem)]
                leading-[1.65]
                text-white/90
                tracking-normal sm:tracking-wider
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
                px-8 py-3
                text-[clamp(.95rem,1.2vw,1.125rem)]
                font-bold
                shadow-lg
                transition-colors duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40
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
