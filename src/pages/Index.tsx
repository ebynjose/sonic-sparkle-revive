import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import UseCasesSection from "@/components/UseCasesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AccessoriesSection />
      <StatsSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
