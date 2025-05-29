"use client"
import React, { useEffect, useState, useRef } from 'react';

const benefitItems = [
  {
    title: "Expert Guidance",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 2v2"></path><path d="M8 2v2"></path><path d="M3 10h18"></path></svg>
    ),
    description: "Led by licensed pharmacists with firsthand experience in both domestic and international pharmacy practice"
  },
  {
    title: "Personalized Strategy",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    description: "Custom-tailored plans that address your unique background, strengths, and challenges"
  },
  {
    title: "Comprehensive Support",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
    ),
    description: "End-to-end assistance from initial evaluation to final licensure and professional placement"
  },
  {
    title: "Global Trust",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    ),
    description: "Supporting pharmacists from Ghana, Nigeria, India, Philippines, Egypt and beyond with cultural understanding"
  },
  {
    title: "Proven Results",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    ),
    description: "Track record of successful licensure pathways and career transitions for international pharmacists"
  }
];

const BenefitCard = ({ title, icon: Icon, description, index }: { title: string, icon: any, description: string, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-lg p-6 flex items-start shadow-sm opacity-0 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mr-4 text-pharma-blue">
        <Icon />
      </div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <section id="why-choose" className="section-padding bg-pharma-light-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose PharmaBridge</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitItems.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
