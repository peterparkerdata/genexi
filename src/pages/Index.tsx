import { HeroSection } from "@/components/HeroSection";
import { CommunityBenefits } from "@/components/CommunityBenefits";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CommunityBenefits />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
