import Image from "next/image";
import BenefitsAndPaymentsContent from "@/ui/BenefitsAndPaymentsContent";

export default function BenefitsAndPayments() {
  return (
    <section
      id="benefits-and-payments"
      className="relative w-full py-16 md:py-24"
    >
      <Image
        src="/bg-benefits-and-payments.png"
        alt="Benefits and Payments main background"
        fill
        className="object-cover object-center -z-20"
        priority
      />
      <div
        className="absolute inset-0 bg-[#E60017] opacity-75 -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 60% 100%)",
        }}
      ></div>

      <BenefitsAndPaymentsContent />
    </section>
  );
}
