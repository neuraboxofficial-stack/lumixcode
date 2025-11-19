import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import TrustLogos from "@/components/TrustLogos";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntegrationsStrip />
      <TrustLogos />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
