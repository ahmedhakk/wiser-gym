import BenefitsList from "@/ui/BenefitsList";
import PaymentMethods from "@/ui/PaymentMethods";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function BenefitsAndPaymentsContent() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      {/* Bebefits */}
      <AnimateOnScroll direction="right" delayMs={300}>
        <BenefitsList className="mt-10 sm:mt-12 mb-10 sm:mb-12 lg:mb-16" />
      </AnimateOnScroll>

      {/* Payments */}
      <AnimateOnScroll direction="left" delayMs={300}>
        <PaymentMethods />
      </AnimateOnScroll>
    </div>
  );
}
