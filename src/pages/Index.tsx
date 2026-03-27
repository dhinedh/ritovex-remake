import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AutomationSection from "@/components/AutomationSection";
import AISection from "@/components/AISection";
import CTASection from "@/components/CTASection";
import ServiceMarquee from "@/components/ServiceMarquee";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zech Soft - Innovative Digital Solutions</title>
        <meta name="description" content="Zech Soft provides premium digital solutions including Web Development, ERP Systems, and Digital Marketing. Transform your business with our expertise." />
        <link rel="canonical" href="https://zechsoft.tech/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <PartnersMarquee />
      <AboutSection />
      <ServicesSection />
      <ProblemSection />
      <PortfolioSection />
      <ProcessSection />
      <ServiceMarquee />
      <TestimonialsSection />
      <AutomationSection />
      <AISection />
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
