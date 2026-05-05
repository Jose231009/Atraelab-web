import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import NetworkSection from "@/components/NetworkSection";
import HowWeWork from "@/components/HowWeWork";
import CRMSection from "@/components/CRMSection";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider />
      <NetworkSection />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <HowWeWork />
      <SectionDivider />
      <CRMSection />
      <SectionDivider />
      <Results />
      <SectionDivider />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
      <CookieBanner />
    </main>
  );
}
