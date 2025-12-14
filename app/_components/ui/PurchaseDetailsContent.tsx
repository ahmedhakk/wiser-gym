import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function PurchaseDetailsContent() {
  const t = useTranslations("PurchaseDetails");
  const purchaseList = [
    {
      id: 1,
      imageSrc: "/purchase-content-1.jpg",
      text: t("list.purchase1"),
    },
    {
      id: 2,
      imageSrc: "/purchase-content-2.png",
      text: t("list.purchase2"),
    },
    {
      id: 3,
      imageSrc: "/purchase-content-3.jpg",
      text: t("list.purchase3"),
    },
  ];

  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-12 py-6 min-h-screen md:h-screen relative">
      {/* Desktop layout - images centered, text on right */}
      <div className="hidden md:flex flex-col items-center justify-center gap-16 h-full">
        {purchaseList.map((purchase) => (
          <Image
            key={purchase.id}
            src={purchase.imageSrc}
            alt={purchase.text}
            width={280}
            height={280}
            className="w-60 h-60 object-cover rounded-full outline outline-8 outline-white"
          />
        ))}
      </div>
      <div className="hidden md:flex flex-col items-end justify-between absolute top-0 right-0 h-full me-32 p-12">
        {purchaseList.map((purchase) => (
          <AnimateOnScroll key={purchase.id} direction="left" delayMs={300}>
            <p className="md:text-2xl lg:text-3xl max-w-[400px] my-16 pt-8 border-t-4 border-white capitalize">
              {purchase.text}
            </p>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Mobile layout - stacked image and text pairs */}
      <div className="flex md:hidden flex-col justify-center gap-8 h-screen">
        {purchaseList.map((purchase) => (
          <div key={purchase.id} className="flex flex-col items-center gap-4">
            <Image
              src={purchase.imageSrc}
              alt={purchase.text}
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full outline outline-4 outline-white"
            />
            <p className="text-lg sm:text-xl max-w-xs text-center pt-4 border-t-2 border-white capitalize">
              {purchase.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
