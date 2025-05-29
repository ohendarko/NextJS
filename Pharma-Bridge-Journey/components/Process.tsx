"use client"
import React, { useEffect, useState, useRef } from 'react';

const steps = [
  {
    title: "Sign Up",
    icon: ({ size = 24 }: { size?: number }) => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    description: "Join our platform and complete your profile"
  },
  {
    title: "Document Prep",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
    ),
    description: "We guide you through document preparation and submission"
  },
  {
    title: "Exam Coaching",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    ),
    description: "Personalized TOEFL and FPGEE preparation"
  },
  {
    title: "Internship",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 2v2"></path><path d="M8 2v2"></path><path d="M3 10h18"></path></svg>
    ),
    description: "Secure your 1,500-hour internship placement"
  },
  {
    title: "Licensure",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
    ),
    description: "NAPLEX/MPJE preparation and licensure support"
  }
];

const ProcessCard = ({ title, icon: Icon, description, isLast, index }: { title: string, icon: any, description: string, isLast: boolean, index: number }) => {
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
      className={`relative ${!isLast ? 'timeline-connector' : ''} flex flex-col items-center opacity-0 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="z-10 bg-white p-3 rounded-full border-4 border-pharma-light-blue mb-4">
        <div className="bg-pharma-blue text-white p-3 rounded-full">
          <Icon size={24} />
        </div>
      </div>
      <h3 className="font-semibold mb-1 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center max-w-[150px]">{description}</p>
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Process</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between items-start px-10 relative">
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              icon={step.icon}
              description={step.description}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden flex flex-col space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-start opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="bg-pharma-blue text-white p-3 rounded-full mr-4 shrink-0">
                <step.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
