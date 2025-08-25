import { HeroSection } from "@/components/HeroSection";
import { CommunityBenefits } from "@/components/CommunityBenefits";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="star star-1"></div>
      <div className="star star-2"></div>
      <HeroSection />
      <CommunityBenefits />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
