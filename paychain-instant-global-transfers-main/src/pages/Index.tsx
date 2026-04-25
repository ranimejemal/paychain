import { Navbar } from "@/components/paychain/Navbar";
import { Hero } from "@/components/paychain/Hero";
import { Features } from "@/components/paychain/Features";
import { SmartRouting } from "@/components/paychain/SmartRouting";
import { HowItWorks } from "@/components/paychain/HowItWorks";
import { DashboardPreview } from "@/components/paychain/DashboardPreview";
import { Security } from "@/components/paychain/Security";
import { CTA } from "@/components/paychain/CTA";
import { Footer } from "@/components/paychain/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <SmartRouting />
      <HowItWorks />
      <DashboardPreview />
      <Security />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;
