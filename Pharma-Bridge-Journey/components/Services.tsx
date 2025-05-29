"use client"
import React, { useEffect, useState, useRef } from 'react';

const serviceItems = [
  {
    title: "Full Licensure Pathway Support",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    ),
    description: "All-inclusive support for the entire U.S. licensure journey: credential evaluation, TOEFL, FPGEE, internship guidance, NAPLEX/MPJE strategy & eligibility tracking."
  },
  {
    title: "FPGEC Pathway Support",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
    ),
    description: "Guidance through credential evaluation, TOEFL, FPGEE, and Prometric scheduling—includes e-Profile setup & personalized prep plans."
  },
  {
    title: "Credential Evaluation (ECE/NABP)",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
    ),
    description: "We help you prepare and submit transcripts & certificates correctly to avoid delays."
  },
  {
    title: "NABP Application & Exam Scheduling",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    ),
    description: "Complete e-Profile setup, FPGEE eligibility application support, and Prometric test scheduling."
  },
  {
    title: "Travel & Arrival Assistance",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 2v2"></path><path d="M8 2v2"></path><path d="M3 10h18"></path></svg>
    ),
    description: "Flight booking, accommodation arrangements, and U.S. local orientation."
  },
  {
    title: "TOEFL-iBT Prep (Speaking + Writing)",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
    description: "Custom speaking & writing coaching to meet NABP's minimum scores, with materials & drills."
  }
];

const ServiceCard = ({ title, icon: Icon, description, index }: { title: string, icon: any, description: string, index: number }) => {
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
      className={`service-card bg-white rounded-xl shadow-md p-6 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-4 text-pharma-blue">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-pharma-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
