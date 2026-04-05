import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const AccessoriesSection = lazy(() => import("@/components/AccessoriesSection"));
const UseCasesSection = lazy(() => import("@/components/UseCasesSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBrandsSection />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <FeaturesSection />
        <AccessoriesSection />
        <StatsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
