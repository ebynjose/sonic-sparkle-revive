import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import UseCasesSection from "@/components/UseCasesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBrandsSection />
      <FeaturesSection />
      <AccessoriesSection />
      <StatsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
