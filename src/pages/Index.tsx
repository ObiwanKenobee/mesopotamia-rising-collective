import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModulesSection from "@/components/ModulesSection";
import ImpactSection from "@/components/ImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ModulesSection />
      <ImpactSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
};

export default Index;
