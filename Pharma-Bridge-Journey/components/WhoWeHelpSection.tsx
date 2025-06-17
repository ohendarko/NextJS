
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="section-padding bg-gradient-to-b from-white to-pharma-light-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-pharma-navy">WHO WE HELP</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg text-gray-700 mb-8">
            We provide comprehensive guidance across all stages of your U.S. pharmacy journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-pharma-navy text-lg mb-2">Students & New Graduates</h4>
                <p className="text-gray-600">Early preparation, basic U.S. pharmacy prep, professional document building</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-pharma-navy text-lg mb-2">International Pharmacists in U.S.</h4>
                <p className="text-gray-600">FPGEE eligibility, ECE evaluation, TOEFL, NABP process guidance</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-pharma-navy text-lg mb-2">Post-Bacc/Master's Students</h4>
                <p className="text-gray-600">Exam timeline planning, NABP profile setup, transition to pharmacy intern</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-pharma-navy text-lg mb-2">Pharmacy Schools & Alumni</h4>
                <p className="text-gray-600">Guest lectures, branded bootcamps, discounted courses, mentorship events</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-pharma-navy text-lg mb-2">Retake Candidates</h4>
                <p className="text-gray-600">Confidence rebuilding, personalized prep, mentor pairing, retake-friendly packages</p>
              </div>
            </div>
            
            {/* <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-pharma-navy text-lg mb-2">Why Choose PharmaBridge</h4>
                <p className="text-gray-600">Founded by successful pharmacists, affordable step-by-step mentorship</p>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium text-pharma-navy mb-6">You don't have to figure it all out alone — we'll guide you every step of the way.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/whowehelp">
              <Button variant="outline" size="lg" className="border-pharma-navy text-pharma-navy hover:bg-pharma-light-blue">
                Learn More About Our Support
              </Button>
            </Link>
            <Link href="/createaccount">
              <Button size="lg" className="bg-pharma-navy hover:bg-pharma-blue">Start Your Journey Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
