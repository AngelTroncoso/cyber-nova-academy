import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import CalendarSection from "@/components/CalendarSection";
import VirtualClassroomSection from "@/components/VirtualClassroomSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <CalendarSection />
        <VirtualClassroomSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
