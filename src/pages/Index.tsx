import HeroSection from "@/components/HeroSection";
import ProblemsSolutionsSection from "@/components/ProblemsSolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemsSolutionsSection />
      <FeaturesSection />
      <FeaturesGrid />
      <BenefitsSection />
      <PricingSection />
      <WaitlistSection />
      <FooterSection />
    </main>
  );
};

export default Index;
