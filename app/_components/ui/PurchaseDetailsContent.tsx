import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function PurchaseDetailsContent({ isRTL }: { isRTL: boolean }) {
  const t = useTranslations("PurchaseDetails");

  const purchaseList = [
    { id: 1, imageSrc: "/purchase-content-1.jpg", text: t("list.purchase1") },
    { id: 2, imageSrc: "/purchase-content-2.png", text: t("list.purchase2") },
    { id: 3, imageSrc: "/purchase-content-3.jpg", text: t("list.purchase3") },
  ];

  const animDir = isRTL ? "right" : "left";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-10 md:py-12 h-full relative">
      {/* ========================= */}
      {/* XL+ Desktop: circle + text paired (mirrors in RTL) */}
      {/* Fix zoom/small-height clipping */}
      {/* ========================= */}
      <div className="hidden xl:block absolute inset-0">
        <div className="absolute inset-0 flex items-center py-10 [max-height:820px]:py-6">
          <div className="w-full">
            <div className="grid grid-rows-3 gap-12 2xl:gap-16 [max-height:820px]:gap-8">
              {purchaseList.map((purchase) => (
                <div
                  key={purchase.id}
                  className="grid grid-cols-2 items-center"
                >
                  {isRTL ? (
                    <>
                      {/* Text (LEFT in RTL) */}
                      <div className="pr-24 2xl:pr-32 pl-12 2xl:pl-20 text-right">
                        <AnimateOnScroll direction={animDir} delayMs={300}>
                          <p className="text-xl 2xl:text-2xl max-w-[560px] text-white capitalize leading-[1.6] [max-height:820px]:text-lg">
                            {purchase.text}
                          </p>
                        </AnimateOnScroll>
                      </div>

                      {/* Circle (RIGHT on split) */}
                      <div className="flex justify-start pl-6">
                        <Image
                          src={purchase.imageSrc}
                          alt={purchase.text}
                          width={280}
                          height={280}
                          className="
                      w-44 h-44 2xl:w-56 2xl:h-56
                      [max-height:820px]:w-36 [max-height:820px]:h-36
                      object-cover rounded-full
                      outline outline-6 2xl:outline-8 outline-white
                      -translate-x-1/2
                    "
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Circle (LEFT on split) */}
                      <div className="flex justify-end pr-6">
                        <Image
                          src={purchase.imageSrc}
                          alt={purchase.text}
                          width={280}
                          height={280}
                          className="
                      w-44 h-44 2xl:w-56 2xl:h-56
                      [max-height:820px]:w-36 [max-height:820px]:h-36
                      object-cover rounded-full
                      outline outline-6 2xl:outline-8 outline-white
                      translate-x-1/2
                    "
                        />
                      </div>

                      {/* Text (RIGHT in LTR) */}
                      <div className="pl-24 2xl:pl-32 pr-12 2xl:pr-20 text-left">
                        <AnimateOnScroll direction={animDir} delayMs={300}>
                          <p className="text-xl 2xl:text-2xl max-w-[560px] text-white capitalize leading-[1.6] [max-height:820px]:text-lg">
                            {purchase.text}
                          </p>
                        </AnimateOnScroll>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* Tablet + Laptop (md → <xl): paired rows (mirrors in RTL) */}
      {/* ========================= */}
      <div className="hidden md:flex xl:hidden min-h-[70vh] lg:min-h-[80vh] items-center">
        <div className="w-full flex flex-col gap-10 lg:gap-12">
          {purchaseList.map((purchase) => (
            <div key={purchase.id} className="flex items-center">
              {isRTL ? (
                <>
                  {/* Text on LEFT */}
                  <div className="w-1/2 pr-24 lg:pr-28 pl-6 text-right flex justify-end">
                    <AnimateOnScroll direction={animDir} delayMs={300}>
                      <p className="text-base lg:text-lg text-white max-w-[460px] capitalize leading-[1.65]">
                        {purchase.text}
                      </p>
                    </AnimateOnScroll>
                  </div>

                  {/* Circle on RIGHT (split) */}
                  <div className="w-1/2 flex justify-start pl-3 lg:pl-6">
                    <Image
                      src={purchase.imageSrc}
                      alt={purchase.text}
                      width={220}
                      height={220}
                      className="
                        w-32 h-32 lg:w-40 lg:h-40
                        object-cover rounded-full
                        outline outline-4 lg:outline-6 outline-white
                        -translate-x-1/2
                      "
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Circle on LEFT (split) */}
                  <div className="w-1/2 flex justify-end pr-3 lg:pr-6">
                    <Image
                      src={purchase.imageSrc}
                      alt={purchase.text}
                      width={220}
                      height={220}
                      className="
                        w-32 h-32 lg:w-40 lg:h-40
                        object-cover rounded-full
                        outline outline-4 lg:outline-6 outline-white
                        translate-x-1/2
                      "
                    />
                  </div>

                  {/* Text on RIGHT */}
                  <div className="w-1/2 pl-24 lg:pl-28 pr-6 text-left">
                    <AnimateOnScroll direction={animDir} delayMs={300}>
                      <p className="text-base lg:text-lg text-white max-w-[460px] capitalize leading-[1.65]">
                        {purchase.text}
                      </p>
                    </AnimateOnScroll>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================= */}
      {/* Mobile (<md): stacked layout (works for both) */}
      {/* ========================= */}
      <div className="flex md:hidden flex-col justify-center gap-10 py-6">
        {purchaseList.map((purchase) => (
          <div key={purchase.id} className="flex flex-col items-center gap-4">
            <Image
              src={purchase.imageSrc}
              alt={purchase.text}
              width={160}
              height={160}
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full outline outline-4 outline-white"
            />
            <p className="text-base sm:text-lg max-w-xs text-center text-white capitalize leading-[1.6]">
              {purchase.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
