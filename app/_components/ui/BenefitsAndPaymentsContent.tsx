import BenefitsList from "@/ui/BenefitsList";
import PaymentMethods from "@/ui/PaymentMethods";

export default function BenefitsAndPaymentsContent() {
  return (
    <div className="container max-w-9xl mx-auto px-12 py-6 h-screen">
      {/* Bebefits */}
      <BenefitsList className="mt-28 mb-20 md:mt-56 md:mb-48" />

      {/* Payments */}
      <PaymentMethods />
    </div>
  );
}
