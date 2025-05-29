"use client"
import React, { useState } from 'react';

const faqs = [
  {
    question: "Can I start on a tourist visa?",
    answer: "While you can begin your credential evaluation and FPGEE application on a tourist visa, you cannot participate in required internships or work as a pharmacist. We recommend consulting with an immigration attorney about appropriate visa options for your specific situation."
  },
  {
    question: "How to submit ECE credentials?",
    answer: "The Educational Credential Evaluation (ECE) requires official transcripts sent directly from your university, degree certificates, and a completed application form. PharmaBridge guides you through each step, ensuring proper documentation and follow-up to avoid common delays."
  },
  {
    question: "What is the NABP e-Profile?",
    answer: "The NABP e-Profile is your digital identity with the National Association of Boards of Pharmacy, required for all licensure steps. It tracks your progress, stores documentation, and serves as your portal for exam registration and license verification."
  },
  {
    question: "When can I schedule FPGEE?",
    answer: "The FPGEE (Foreign Pharmacy Graduate Equivalency Examination) is offered twice yearly, typically in April and October. After NABP approves your application, you'll receive an Authorization to Test (ATT) with a 3-month window to schedule your exam at a Prometric center."
  },
  {
    question: "How long to prep for NAPLEX?",
    answer: "Most candidates need 3-6 months of focused study for the NAPLEX. Our consultants design personalized study plans based on your educational background, strengths, and weaknesses to optimize preparation time."
  },
  {
    question: "How to secure 1,500-hr internship?",
    answer: "The 1,500-hour internship requirement varies by state. We help identify pharmacy sites that accept international interns, assist with application documentation, and prepare you for interviews with potential preceptors who understand FPGEE candidates' unique situations."
  },
  {
    question: "Do you assist with travel & housing?",
    answer: "Yes, we offer comprehensive relocation support including flight booking assistance, temporary and permanent housing options, transportation guidance, and introduction to local resources and communities from your home country."
  },
  {
    question: "What if I fail an exam?",
    answer: "Exam setbacks are manageable. Our consultants provide exam result analysis, customized remediation plans, and strategic guidance for retaking tests with improved confidence and knowledge. Many of our successful clients overcame initial exam challenges."
  }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }: { question: string, answer: string, isOpen: boolean, toggleOpen: () => void }) => {
  return (
    <div className="faq-item">
      <button 
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
