import Hero from "@/components/Hero";
import FeaturesOverview from "@/app/_components/FeaturesOverview";
import LifestyleTransformation from "@/components/LifestyleTransformation";
import GymPainPoints from "@/components/GymPainPoints";
import KeyFeatures from "@/components/KeyFeatures";
import BenefitsAndPayments from "@/components/BenefitsAndPayments";
import ProductSpotlight from "@/components/ProductSpotlight";
import PurchaseDetails from "@/components/PurchaseDetails";
import WhatYouGet from "@/components/WhatYouGet";
import ProductOverview from "@/components/ProductOverview";
import Reviews from "@/components/Reviews";
import EarlyAccessBanner from "@/components/EarlyAccessBanner";
import PricingBreakdown from "@/components/PricingBreakdown";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
      <WhatYouGet />
      <ProductOverview />
      <Reviews />
      <EarlyAccessBanner />
      <PricingBreakdown />
      <CTASection />
      <ProductOverview />
      <Footer />
    </main>
  );
}
