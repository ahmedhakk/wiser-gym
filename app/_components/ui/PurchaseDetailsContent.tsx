import { useTranslations } from "next-intl";
import Image from "next/image";

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
    <div className="container max-w-9xl mx-auto px-12 py-6 h-screen relative">
      <div className="flex flex-col items-center justify-center gap-16 h-full">
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
      <div className="flex flex-col items-end justify-between absolute top-0 right-0 h-full p-12">
        {purchaseList.map((purchase) => (
          <p
            key={purchase.id}
            className="text-4xl max-w-[400px] my-16 pt-8 border-t-4 border-white capitalize"
          >
            {purchase.text}
          </p>
        ))}
      </div>
    </div>
  );
}
