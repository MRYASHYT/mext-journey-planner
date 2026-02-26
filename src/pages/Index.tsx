import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import EligibilitySection from "@/components/EligibilitySection";
import RulesSection from "@/components/RulesSection";
import LivingSection from "@/components/LivingSection";
import ApplicationSection from "@/components/ApplicationSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <EligibilitySection />
      <RulesSection />
      <LivingSection />
      <ApplicationSection />
      <DisclaimerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
