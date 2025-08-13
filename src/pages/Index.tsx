import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import AreasServed from "@/components/AreasServed";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Services />
      <AreasServed />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
