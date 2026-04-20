import { HeroSection } from "@/components/HeroSection";
// import VideoSection from "@/components/VideoSection"; // HIDDEN
import ProblemsSolutionsSection from "@/components/ProblemsSolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import BenefitsSection from "@/components/BenefitsSection";
// import PricingSection from "@/components/PricingSection"; // HIDDEN
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";
import FaqSection from "@/components/FaqSection";
import { StickyCta } from "@/components/StickyCta";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <VideoSection /> */}{/* HIDDEN: Cómo Funciona */}
      <ProblemsSolutionsSection />
      <FeaturesSection />
      <FeaturesGrid />
      <FaqSection />
      <BenefitsSection />
      {/* <PricingSection /> */}{/* HIDDEN */}
      <WaitlistSection />
      <FooterSection />
      <StickyCta />
    </main>
  );
};

export default Index;
