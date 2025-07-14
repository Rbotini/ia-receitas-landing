
import HeroSection from "@/components/HeroSection";
import RecipeCards from "@/components/RecipeCards";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecipeCards />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
