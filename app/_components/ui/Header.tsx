"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import FlagIcon from "@/ui/FlagIcon";

export default function Header() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const navLinks = [
    { name: t("navigation.Home"), href: "#" },
    { name: t("navigation.Features"), href: "#features-overview" },
    {
      name: t("navigation.Lifestyle Transformation"),
      href: "#lifestyle-transformation",
    },
    {
      name: t("navigation.Benefits"),
      href: "#benefits-and-payments",
    },
    { name: t("navigation.Testimonials"), href: "#testimonials" },
    { name: t("navigation.Pricing"), href: "#pricing" },
  ];

  return (
    <nav className="relative w-full">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14">
          <Image
            src="/Logo.png"
            alt="WiserGym"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-bold text-white whitespace-nowrap transition-all duration-300 hover:bg-gradient-to-b hover:from-primary hover:to-primary-800 px-3 py-1.5 rounded"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={switchLocale}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition px-3 py-2 rounded-md hover:bg-white/10"
            aria-label="Switch language"
          >
            <FlagIcon locale={locale} />
            <span className="text-xs xl:text-sm font-bold">
              {locale === "en" ? "EN" : "AR"}
            </span>
          </button>

          {/* Reserve Button (CTA) */}
          <Link
            href="#"
            className="bg-primary hover:bg-primary-hover text-white px-4 xl:px-5 py-2 rounded font-bold text-xs xl:text-sm transition whitespace-nowrap"
          >
            {t("navigation.Reserve")}
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 block lg:hidden focus:outline-none w-8 h-8 p-1"
          aria-label="Toggle menu"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Top Line */}
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out
              ${isOpen ? "rotate-45" : "-translate-y-2"}`}
            />

            {/* Middle Line */}
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out
              ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            />

            {/* Bottom Line */}
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out
              ${isOpen ? "-rotate-45" : "translate-y-2"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-5 text-lg sm:text-xl font-bold text-white transition-all duration-300 ease-in-out lg:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`transition transform px-3 py-1.5 hover:bg-gradient-to-b hover:from-primary hover:to-primary-800 hover:text-gray-300
            ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
            }}
          >
            {link.name}
          </Link>
        ))}

        {/* Language Switcher Mobile */}
        <button
          onClick={() => {
            switchLocale();
            setIsOpen(false);
          }}
          className={`flex items-center gap-3 text-white hover:text-primary-hover transition transform
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
          }}
        >
          <FlagIcon locale={locale} />
          <span>{locale === "en" ? "English" : "العربية"}</span>
        </button>

        <Link
          href="#"
          onClick={() => setIsOpen(false)}
          className={`bg-primary hover:bg-primary-hover px-6 sm:px-8 py-2.5 sm:py-3 rounded text-white transition transform mt-4
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{
            transitionDelay: isOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms",
          }}
        >
          {t("navigation.Reserve")}
        </Link>
      </div>
    </nav>
  );
}
