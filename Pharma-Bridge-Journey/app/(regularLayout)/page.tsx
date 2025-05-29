
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhoWeHelp from '@/components/WhoWeHelpSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Services />
      <WhyChoose />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
