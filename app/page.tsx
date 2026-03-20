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
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <NetworkSection />
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
      <CookieBanner />
    </main>
  );
}
