import BenefitsList from "@/ui/BenefitsList";
import PaymentMethods from "@/ui/PaymentMethods";
import AnimateOnScroll from "@/ui/AnimateOnScroll";

export default function BenefitsAndPaymentsContent() {
  return (
    <div className="container max-w-9xl mx-auto px-12 py-6 h-screen">
      {/* Bebefits */}
      <AnimateOnScroll direction="right" delayMs={300}>
        <BenefitsList className="my-20 md:mt-56 md:mb-48" />
      </AnimateOnScroll>

      {/* Payments */}
      <AnimateOnScroll direction="left" delayMs={300}>
        <PaymentMethods />
      </AnimateOnScroll>
    </div>
  );
}
