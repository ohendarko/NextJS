'use client';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useIsMobile } from "@/hooks/use-mobile";
import Image from 'next/image';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
    
    // Preload the pharmacy-related image
    // const img = new Image();
    // img.onload = () => setImageLoaded(true);
    // img.src = "./face.png";
  }, []);

  return (
    <section className="min-h-[90vh] pt-24 md:pt-28 pb-12 md:pb-16 flex items-center w-full relative">
      {/* Background color overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
      
      {/* Hero background image with loading optimization */}
      {(
  <div 
    className="absolute inset-0 bg-cover bg-no-repeat z-0"
    style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      backgroundPosition: isMobile ? "center center" : "center center",
      backgroundSize: "cover"
    }}
  >
    <Image src="/face.png" width={100} height={100} alt="face of pharmabridge consulting" />
  </div>
)}
      
      {/* Fallback background while image loads */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-pharma-light-blue to-white z-0"></div> */}
      
      <div className="container mx-auto px-4 max-w-full w-full relative z-20">
        <div className="items-center max-w-full flex gap-2">
          <div className="text-center md:text-left ">
            <h1 
              className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-pharma-navy opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
            >
              Helping International Pharmacists <span className="text-pharma-blue">Succeed in the U.S.</span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 opacity-0 text-gray-700 ${isVisible ? 'animate-fade-up animate-delay-100' : ''}`}
            >
              Step-by-step support for FPGEE, TOEFL, licensure & internships.
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 justify-center md:justify-start opacity-0 ${isVisible ? 'animate-fade-up animate-delay-200' : ''}`}>
              <Link href="/createaccount">
                <Button size={isMobile ? "default" : "lg"} className="w-full sm:w-auto bg-pharma-navy hover:bg-pharma-blue text-white font-medium px-6 md:px-8">
                  Start My Journey
                </Button>
              </Link>
              <Button variant="outline" size={isMobile ? "default" : "lg"} className="w-full sm:w-auto border-pharma-navy text-pharma-navy hover:bg-pharma-light-blue font-medium">
                Book Free Consultation
              </Button> 
            </div>
            
          </div>
          <Image src="/face.png" width={500} height={500} alt="face of pharmabridge consulting" className=' hidden md:block rounded-md flex-1 ' />  
        </div>
      </div>
    </section>
  );
};

export default Hero;
