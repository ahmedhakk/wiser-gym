import { useTranslations } from "next-intl";
import Image from "next/image";
import FooterLinks from "@/ui/FooterList";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

const socialIconsSrc = [
  { name: "facebook", src: "/icons/social-footer/facebook.svg" },
  { name: "twitter", src: "/icons/social-footer/twitter.svg" },
  { name: "instagram", src: "/icons/social-footer/instagram.svg" },
  { name: "tiktok", src: "/icons/social-footer/tiktok.svg" },
  { name: "youtube", src: "/icons/social-footer/youtube.svg" },
  { name: "snapchat", src: "/icons/social-footer/snapchat.svg" },
];

type PaymentMethod = { id: number; src: string; alt: string };

const Methods: PaymentMethod[] = [
  { id: 1, src: "/payment-methods/tabby.png", alt: "tabby" },
  { id: 2, src: "/payment-methods/mada.png", alt: "mada" },
  { id: 3, src: "/payment-methods/applepay.png", alt: "apple pay" },
  { id: 4, src: "/payment-methods/stc-pay.png", alt: "stc pay" },
  { id: 5, src: "/payment-methods/tamara.png", alt: "tamara" },
  { id: 6, src: "/payment-methods/visa.png", alt: "visa" },
  { id: 7, src: "/payment-methods/mastercard.png", alt: "mastercard" },
];

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="w-full bg-white px-8 pt-16">
      <AnimateOnScroll direction="up" delayMs={300}>
        <div className="bg-[#F9F9F9] w-full rounded-t-[80px] border border-[#A6A8AB]">
          <div className="mx-auto w-full max-w-7xl px-4 pt-12 pb-6 text-black">
            {/* upper footer */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
              {/* left */}
              <div className="text-center ltr:md:text-left rtl:md:text-right">
                <h3 className="text-lg font-semibold mb-2 md:mb-4">
                  {t("title")}
                </h3>
                <p className="text-xs md:text-sm max-w-72">
                  {t("Footer.description")}
                </p>

                <div className="flex justify-center md:justify-start gap-4 mt-6 cursor-pointer">
                  {socialIconsSrc.map((icon) => (
                    <Image
                      key={icon.name}
                      src={icon.src}
                      alt={icon.name}
                      width={24}
                      height={24}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>

              {/* right */}
              <FooterLinks />
            </div>

            {/* lower footer */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between py-4 border-t border-[#929598]">
              <p className="text-[#A6A8AB] text-xs sm:text-sm text-center sm:text-left">
                {t("Footer.copyright")}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
                {Methods.map((method) => (
                  <Image
                    src={method.src}
                    alt={method.alt}
                    key={method.id}
                    width={64}
                    height={24}
                    className="w-[48px] h-[18px] sm:w-[56px] sm:h-[21px] lg:w-[64px] lg:h-[24px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
