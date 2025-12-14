import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function CTASection() {
  const t = useTranslations("CTASection");
  return (
    <section className="relative h-[900px] w-full">
      <Image
        src="/bg-cta.png"
        alt="CTA Background"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
        sizes="100vw"
      />

      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <AnimateOnScroll direction="left" delayMs={300}>
          <h1
            className="
            font-bold leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
          >
            {t("mainText")}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delayMs={300}>
          <p
            className="
          mt-6 
          text-sm
          sm:text-base
          md:text-xl
          lg:text-2xl
          font-bold
          lg:leading-loose
          "
          >
            {t("subText")}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delayMs={300}>
          <button
            className="
          mt-16
          bg-primary px-6 py-3
          text-sm font-semibold uppercase tracking-wide
          text-white shadow-lg
          transition hover:bg-primary-hover
          sm:px-10 sm:text-md 
          md:text-base
          "
          >
            {t("buttonText")}
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
