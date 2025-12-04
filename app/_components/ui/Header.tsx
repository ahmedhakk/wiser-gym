"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Hero");

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("navigation.Home"), href: "#" },
    { name: t("navigation.Features"), href: "#benefits-overview" },
    {
      name: t("navigation.Lifestyle Transformation"),
      href: "#transformation-section",
    },
    { name: t("navigation.Benefits"), href: "#", highlight: true },
    { name: t("navigation.Testimonials"), href: "#" },
    { name: t("navigation.Pricing"), href: "#" },
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

        <Link
          href="#"
          onClick={() => setIsOpen(false)}
          className={`bg-primary hover:bg-primary-hover px-8 py-3 rounded text-white transition transform mt-4
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
          }}
        >
          {t("navigation.Restore Btn")}
        </Link>
      </div>
    </nav>
  );
}
