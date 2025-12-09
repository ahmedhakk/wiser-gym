import Hero from "@/components/Hero";
import FeaturesOverview from "@/app/_components/FeaturesOverview";
import LifestyleTransformation from "@/components/LifestyleTransformation";
import GymPainPoints from "@/components/GymPainPoints";
import KeyFeatures from "@/components/KeyFeatures";
import BenefitsAndPayments from "@/components/BenefitsAndPayments";
import ProductSpotlight from "@/components/ProductSpotlight";
import PurchaseDetails from "@/components/PurchaseDetails";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesOverview />
      <LifestyleTransformation />
      <GymPainPoints />
      <KeyFeatures />
      <BenefitsAndPayments />
      <ProductSpotlight />
      <PurchaseDetails />
    </main>
  );
}
