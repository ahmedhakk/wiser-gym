import Image from "next/image";
import { useTranslations } from "next-intl";

type PaymentMethod = {
  id: number;
  src: string;
  alt: string;
};

const Methods: PaymentMethod[] = [
  {
    id: 1,
    src: "/payment-methods/tabby.png",
    alt: "tabby",
  },
  {
    id: 2,
    src: "/payment-methods/mada.png",
    alt: "mada",
  },
  {
    id: 3,
    src: "/payment-methods/applepay.png",
    alt: "apple pay",
  },
  {
    id: 4,
    src: "/payment-methods/stc-pay.png",
    alt: "stc pay",
  },
  {
    id: 5,
    src: "/payment-methods/tamara.png",
    alt: "tamara",
  },
  {
    id: 6,
    src: "/payment-methods/visa.png",
    alt: "visa",
  },
  {
    id: 7,
    src: "/payment-methods/mastercard.png",
    alt: "mastercard",
  },
];

export default function PaymentMethods() {
  const t = useTranslations("BenefitsAndPayments");

  return (
    <div className="flex flex-col items-center md:items-end">
      <div className="flex flex-col gap-8">
        <span className="text-foreground border sm:text-lg md:text-xl border-foreground bg-black px-2 py-2 text-center">
          {t("checkout now")}
        </span>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Methods.map((method) => (
            <Image
              src={method.src}
              alt={method.alt}
              key={method.id}
              width={120}
              height={44}
              className="w-[120px] h-[44px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
