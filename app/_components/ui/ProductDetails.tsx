"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type imageLinks = {
  src: string;
  alt: string;
};

const paymentMethods: imageLinks[] = [
  { src: "/payment-methods/tabby.png", alt: "Tabby" },
  { src: "/payment-methods/mada.png", alt: "Mada" },
  { src: "/payment-methods/applepay.png", alt: "Apple Pay" },
  { src: "/payment-methods/stc-pay.png", alt: "STC Pay" },
  { src: "/payment-methods/tamara.png", alt: "Tamara" },
  { src: "/payment-methods/visa.png", alt: "Visa" },
  { src: "/payment-methods/mastercard.png", alt: "Mastercard" },
];

const socialIcons: imageLinks[] = [
  { src: "/icons/Facebook.svg", alt: "Facebook" },
  { src: "/icons/Twitter.svg", alt: "Twitter" },
  { src: "/icons/Instagram.svg", alt: "Instagram" },
  { src: "/icons/Tiktok.svg", alt: "Tiktok" },
  { src: "/icons/YouTube.svg", alt: "YouTube" },
  { src: "/icons/Snapchat.svg", alt: "Snapchat" },
];

const ProductDetails: React.FC = () => {
  const t = useTranslations("ProductOverview");
  const [qty, setQty] = useState(1);

  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));
  const increase = () => setQty((q) => q + 1);

  return (
    <section className="w-full lg:w-1/2">
      <div className="mx-auto px-4 py-8 lg:px-12">
        {/* Title */}
        <header className="space-y-2 mb-12 lg:mb-2 xl:mb-4">
          <h1 className="text-xl leading-snug text-gray-900 sm:text-2xl mb-4 lg:mb-2">
            {t("title")}
          </h1>

          {/* Stars */}
          <div className="flex items-center text-[#FF8C00]">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 fill-current"
              >
                <path d="M10 1.5 12.59 7l5.41.46-4.14 3.6 1.26 5.29L10 13.9l-5.12 2.45L6.14 11 2 7.46 7.41 7 10 1.5z" />
              </svg>
            ))}
          </div>
        </header>

        {/* Price */}
        <div className="flex items-baseline gap-1 w-fit relative mb-4 lg:mb-2 xl:my-8">
          <span className="text-6xl font-bold tracking-wide text-gray-900">
            {t("price")}
          </span>
          <span className="text-2xl text-gray-800 absolute -right-9 -top-4">
            <Image
              src="/icons/SAR.svg"
              alt="SAR"
              width={56}
              height={56}
              className="w-9 h-9"
            />
          </span>
        </div>

        {/* Red banner */}
        <p className="bg-accent px-4 py-3 text-md leading-relaxed text-white lg:text-base xl:text-lg">
          {t("about")}
        </p>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-4 md:text-3xl lg:text-5xl xl:text-6xl md:my-8 lg:my-5">
            {t("features.headline")}
          </h2>

          <div className="bg-[#E6E7E8] px-5 py-4 text-sm text-gray-800 sm:text-xl mb-8">
            <ul className="list-disc pl-5">
              <li>{t("features.list.feature1")}</li>
              <li>{t("features.list.feature2")}</li>
              <li>{t("features.list.feature3")}</li>
              <li>{t("features.list.feature4")}</li>
              <li>{t("features.list.feature5")}</li>
              <li>{t("features.list.feature6")}</li>
            </ul>
          </div>
        </section>

        {/* Quantity + CTA */}
        <div className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-center">
          {/* Quantity selector */}
          <div className="inline-flex items-center justify-center border border-gray-300 w-fit">
            <button
              type="button"
              onClick={decrease}
              aria-label="Decrease quantity"
              className="h-11 w-11 border-r border-gray-300 text-3xl leading- bg-[#E6E7E8] text-gray-700 hover:bg-gray-50"
            >
              −
            </button>
            <div className="flex h-11 w-14 items-center justify-center text-lg font-semibold text-gray-900">
              {qty}
            </div>
            <button
              type="button"
              onClick={increase}
              aria-label="Increase quantity"
              className="h-11 w-11 border-l border-gray-300 text-3xl leading-none bg-[#E6E7E8] text-gray-700 hover:bg-gray-50"
            >
              +
            </button>
          </div>

          {/* Buy button */}
          <button
            type="button"
            className="flex-1 bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:text-base"
          >
            {t("buyNow")}
          </button>
        </div>

        {/* Payment methods */}
        <div className="my-6 flex flex-wrap items-center gap-3">
          {paymentMethods.map((pm) => (
            <div
              key={pm.alt}
              className="flex items-center justify-center rounded-md bg-gray-100 px-2 py-1"
            >
              <Image
                src={pm.src}
                alt={pm.alt}
                width={60}
                height={60}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-gray-200 pt-5" />

        {/* Social icons */}
        <div className="flex flex-wrap justify-end lg:justify-start mt-4 lg:mt-0 gap-3">
          {socialIcons.map((icon) => (
            <Link key={icon.alt} href="#">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={56}
                height={56}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
