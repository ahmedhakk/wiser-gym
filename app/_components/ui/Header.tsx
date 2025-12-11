"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

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
      highlight: true,
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
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs xl:text-sm font-bold text-white transition hover:text-gray-300 whitespace-nowrap
                ${
                  link.highlight
                    ? "bg-gradient-to-b from-primary to-primary-800 px-3 py-1.5"
                    : ""
                }`}
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
            {locale === "en" ? (
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="2" fill="#B22234" />
                <path d="M0 0H32V2.46154H0V0Z" fill="#B22234" />
                <path d="M0 2.46154H32V4.92308H0V2.46154Z" fill="white" />
                <path d="M0 4.92308H32V7.38462H0V4.92308Z" fill="#B22234" />
                <path d="M0 7.38462H32V9.84615H0V7.38462Z" fill="white" />
                <path d="M0 9.84615H32V12.3077H0V9.84615Z" fill="#B22234" />
                <path d="M0 12.3077H32V14.7692H0V12.3077Z" fill="white" />
                <path d="M0 14.7692H32V17.2308H0V14.7692Z" fill="#B22234" />
                <path d="M0 17.2308H32V19.6923H0V17.2308Z" fill="white" />
                <path d="M0 19.6923H32V22.1538H0V19.6923Z" fill="#B22234" />
                <path d="M0 22.1538H32V24.6154H0V22.1538Z" fill="white" />
                <path d="M0 24.6154H32V27.0769H0V24.6154Z" fill="#B22234" />
                <path d="M0 27.0769H32V29.5385H0V27.0769Z" fill="white" />
                <path d="M0 29.5385H32V32H0V29.5385Z" fill="#B22234" />
                <rect width="12.8" height="17.2308" fill="#3C3B6E" />
                <circle cx="2.13333" cy="1.84615" r="0.533333" fill="white" />
                <circle cx="4.26667" cy="1.84615" r="0.533333" fill="white" />
                <circle cx="6.4" cy="1.84615" r="0.533333" fill="white" />
                <circle cx="8.53333" cy="1.84615" r="0.533333" fill="white" />
                <circle cx="10.6667" cy="1.84615" r="0.533333" fill="white" />
                <circle cx="3.2" cy="3.07692" r="0.533333" fill="white" />
                <circle cx="5.33333" cy="3.07692" r="0.533333" fill="white" />
                <circle cx="7.46667" cy="3.07692" r="0.533333" fill="white" />
                <circle cx="9.6" cy="3.07692" r="0.533333" fill="white" />
                <circle cx="2.13333" cy="4.30769" r="0.533333" fill="white" />
                <circle cx="4.26667" cy="4.30769" r="0.533333" fill="white" />
                <circle cx="6.4" cy="4.30769" r="0.533333" fill="white" />
                <circle cx="8.53333" cy="4.30769" r="0.533333" fill="white" />
                <circle cx="10.6667" cy="4.30769" r="0.533333" fill="white" />
                <circle cx="3.2" cy="5.53846" r="0.533333" fill="white" />
                <circle cx="5.33333" cy="5.53846" r="0.533333" fill="white" />
                <circle cx="7.46667" cy="5.53846" r="0.533333" fill="white" />
                <circle cx="9.6" cy="5.53846" r="0.533333" fill="white" />
                <circle cx="2.13333" cy="6.76923" r="0.533333" fill="white" />
                <circle cx="4.26667" cy="6.76923" r="0.533333" fill="white" />
                <circle cx="6.4" cy="6.76923" r="0.533333" fill="white" />
                <circle cx="8.53333" cy="6.76923" r="0.533333" fill="white" />
                <circle cx="10.6667" cy="6.76923" r="0.533333" fill="white" />
                <circle cx="3.2" cy="8" r="0.533333" fill="white" />
                <circle cx="5.33333" cy="8" r="0.533333" fill="white" />
                <circle cx="7.46667" cy="8" r="0.533333" fill="white" />
                <circle cx="9.6" cy="8" r="0.533333" fill="white" />
                <circle cx="2.13333" cy="9.23077" r="0.533333" fill="white" />
                <circle cx="4.26667" cy="9.23077" r="0.533333" fill="white" />
                <circle cx="6.4" cy="9.23077" r="0.533333" fill="white" />
                <circle cx="8.53333" cy="9.23077" r="0.533333" fill="white" />
                <circle cx="10.6667" cy="9.23077" r="0.533333" fill="white" />
                <circle cx="3.2" cy="10.4615" r="0.533333" fill="white" />
                <circle cx="5.33333" cy="10.4615" r="0.533333" fill="white" />
                <circle cx="7.46667" cy="10.4615" r="0.533333" fill="white" />
                <circle cx="9.6" cy="10.4615" r="0.533333" fill="white" />
                <circle cx="2.13333" cy="11.6923" r="0.533333" fill="white" />
                <circle cx="4.26667" cy="11.6923" r="0.533333" fill="white" />
                <circle cx="6.4" cy="11.6923" r="0.533333" fill="white" />
                <circle cx="8.53333" cy="11.6923" r="0.533333" fill="white" />
                <circle cx="10.6667" cy="11.6923" r="0.533333" fill="white" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="2" fill="#165B33" />
                <rect y="10.6667" width="32" height="10.6667" fill="white" />
                <path
                  d="M11 16C11 13.7909 12.7909 12 15 12H17C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20H15C12.7909 20 11 18.2091 11 16Z"
                  fill="#165B33"
                />
                <path d="M13 16L16 13L19 16L16 19L13 16Z" fill="#165B33" />
                <path
                  d="M14.5 16L16 14.5L17.5 16L16 17.5L14.5 16Z"
                  fill="white"
                />
              </svg>
            )}
            <span className="text-xs xl:text-sm font-bold">
              {locale === "en" ? "EN" : "AR"}
            </span>
          </button>

          {/* Reserve Button (CTA) */}
          <Link
            href="#"
            className="bg-primary hover:bg-primary-hover text-white px-4 xl:px-5 py-2 rounded font-bold text-xs xl:text-sm transition whitespace-nowrap"
          >
            {t("navigation.Restore Btn")}
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
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-xl sm:text-2xl font-bold text-white transition-all duration-300 ease-in-out lg:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`transition transform
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            ${
              link.highlight
                ? "bg-gradient-to-b from-primary to-primary-800 px-3 py-1.5 hover:text-gray-300"
                : "hover:text-primary-hover"
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
          {locale === "en" ? (
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="2" fill="#B22234" />
              <path d="M0 0H32V2.46154H0V0Z" fill="#B22234" />
              <path d="M0 2.46154H32V4.92308H0V2.46154Z" fill="white" />
              <path d="M0 4.92308H32V7.38462H0V4.92308Z" fill="#B22234" />
              <path d="M0 7.38462H32V9.84615H0V7.38462Z" fill="white" />
              <path d="M0 9.84615H32V12.3077H0V9.84615Z" fill="#B22234" />
              <path d="M0 12.3077H32V14.7692H0V12.3077Z" fill="white" />
              <path d="M0 14.7692H32V17.2308H0V14.7692Z" fill="#B22234" />
              <path d="M0 17.2308H32V19.6923H0V17.2308Z" fill="white" />
              <path d="M0 19.6923H32V22.1538H0V19.6923Z" fill="#B22234" />
              <path d="M0 22.1538H32V24.6154H0V22.1538Z" fill="white" />
              <path d="M0 24.6154H32V27.0769H0V24.6154Z" fill="#B22234" />
              <path d="M0 27.0769H32V29.5385H0V27.0769Z" fill="white" />
              <path d="M0 29.5385H32V32H0V29.5385Z" fill="#B22234" />
              <rect width="12.8" height="17.2308" fill="#3C3B6E" />
              <circle cx="2.13333" cy="1.84615" r="0.533333" fill="white" />
              <circle cx="4.26667" cy="1.84615" r="0.533333" fill="white" />
              <circle cx="6.4" cy="1.84615" r="0.533333" fill="white" />
              <circle cx="8.53333" cy="1.84615" r="0.533333" fill="white" />
              <circle cx="10.6667" cy="1.84615" r="0.533333" fill="white" />
              <circle cx="3.2" cy="3.07692" r="0.533333" fill="white" />
              <circle cx="5.33333" cy="3.07692" r="0.533333" fill="white" />
              <circle cx="7.46667" cy="3.07692" r="0.533333" fill="white" />
              <circle cx="9.6" cy="3.07692" r="0.533333" fill="white" />
              <circle cx="2.13333" cy="4.30769" r="0.533333" fill="white" />
              <circle cx="4.26667" cy="4.30769" r="0.533333" fill="white" />
              <circle cx="6.4" cy="4.30769" r="0.533333" fill="white" />
              <circle cx="8.53333" cy="4.30769" r="0.533333" fill="white" />
              <circle cx="10.6667" cy="4.30769" r="0.533333" fill="white" />
              <circle cx="3.2" cy="5.53846" r="0.533333" fill="white" />
              <circle cx="5.33333" cy="5.53846" r="0.533333" fill="white" />
              <circle cx="7.46667" cy="5.53846" r="0.533333" fill="white" />
              <circle cx="9.6" cy="5.53846" r="0.533333" fill="white" />
              <circle cx="2.13333" cy="6.76923" r="0.533333" fill="white" />
              <circle cx="4.26667" cy="6.76923" r="0.533333" fill="white" />
              <circle cx="6.4" cy="6.76923" r="0.533333" fill="white" />
              <circle cx="8.53333" cy="6.76923" r="0.533333" fill="white" />
              <circle cx="10.6667" cy="6.76923" r="0.533333" fill="white" />
              <circle cx="3.2" cy="8" r="0.533333" fill="white" />
              <circle cx="5.33333" cy="8" r="0.533333" fill="white" />
              <circle cx="7.46667" cy="8" r="0.533333" fill="white" />
              <circle cx="9.6" cy="8" r="0.533333" fill="white" />
              <circle cx="2.13333" cy="9.23077" r="0.533333" fill="white" />
              <circle cx="4.26667" cy="9.23077" r="0.533333" fill="white" />
              <circle cx="6.4" cy="9.23077" r="0.533333" fill="white" />
              <circle cx="8.53333" cy="9.23077" r="0.533333" fill="white" />
              <circle cx="10.6667" cy="9.23077" r="0.533333" fill="white" />
              <circle cx="3.2" cy="10.4615" r="0.533333" fill="white" />
              <circle cx="5.33333" cy="10.4615" r="0.533333" fill="white" />
              <circle cx="7.46667" cy="10.4615" r="0.533333" fill="white" />
              <circle cx="9.6" cy="10.4615" r="0.533333" fill="white" />
              <circle cx="2.13333" cy="11.6923" r="0.533333" fill="white" />
              <circle cx="4.26667" cy="11.6923" r="0.533333" fill="white" />
              <circle cx="6.4" cy="11.6923" r="0.533333" fill="white" />
              <circle cx="8.53333" cy="11.6923" r="0.533333" fill="white" />
              <circle cx="10.6667" cy="11.6923" r="0.533333" fill="white" />
            </svg>
          ) : (
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="2" fill="#165B33" />
              <rect y="10.6667" width="32" height="10.6667" fill="white" />
              <path
                d="M11 16C11 13.7909 12.7909 12 15 12H17C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20H15C12.7909 20 11 18.2091 11 16Z"
                fill="#165B33"
              />
              <path d="M13 16L16 13L19 16L16 19L13 16Z" fill="#165B33" />
              <path
                d="M14.5 16L16 14.5L17.5 16L16 17.5L14.5 16Z"
                fill="white"
              />
            </svg>
          )}
          <span>{locale === "en" ? "English" : "العربية"}</span>
        </button>

        <Link
          href="#"
          onClick={() => setIsOpen(false)}
          className={`bg-primary hover:bg-primary-hover px-8 py-3 rounded text-white transition transform mt-4
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{
            transitionDelay: isOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms",
          }}
        >
          {t("navigation.Restore Btn")}
        </Link>
      </div>
    </nav>
  );
}
