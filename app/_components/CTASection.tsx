import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CTASection() {
  const t = useTranslations("CTASection");
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/bg-cta.png"
        alt="CTA Background"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover"
        sizes="100vw"
      />

      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
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

        <button
          className="
            mt-16
            bg-primary px-6 py-3
            text-base font-semibold uppercase tracking-wide
            text-white shadow-lg
            transition hover:bg-primary-hover
            sm:px-10 sm:text-md 
            md:text-base
          "
        >
          {t("buttonText")}
        </button>
      </div>
    </section>
  );
}
