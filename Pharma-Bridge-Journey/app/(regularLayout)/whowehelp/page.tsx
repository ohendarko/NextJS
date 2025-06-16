import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Check, Star } from 'lucide-react';

const WhoWeHelpSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              WHO WE HELP
            </h1>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                At PharmaBridge Consulting, we specialize in guiding internationally trained pharmacists on their journey to becoming licensed professionals in the United States.
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-lg md:text-xl font-semibold">
                  Whether you're just graduating, already licensed abroad, or restarting your career after relocation — <span className="text-blue-200">we are your bridge.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Support Categories */}
          <div className="space-y-12 mb-16">
            
            {/* 1. Final-Year Students */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Star className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Final-Year Pharmacy Students</h2>
                    <p className="text-blue-200 text-lg">From Ghana, Nigeria, India, Egypt, the Philippines, and beyond</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 italic">
                    "You're preparing to graduate and want to start early toward your U.S. dream. You're ambitious but unsure where to begin."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Understand the full licensure roadmap (FPGEE, TOEFL, ECE, Visa)",
                    "Get started with basic U.S. pharmacy prep",
                    "Build your professional documents (CVs, LinkedIn, Statement of Purpose)",
                    "Join student-focused prep webinars and bootcamps"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl text-center">
                  <p className="text-blue-900 font-semibold">You don't have to wait till after school — start the right way now.</p>
                </div>
              </div>
            </div>

            {/* 2. International Pharmacists Already in U.S. */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Star className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">International Pharmacists Already in the U.S.</h2>
                    <p className="text-green-100 text-lg">On student visas, working visas, or permanent residents</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 italic">
                    "You're here but not yet licensed. You know the basics but need focused guidance on the FPGEE, ECE evaluation, and next steps."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Check FPGEE eligibility & apply through NABP",
                    "Complete ECE evaluation (transcript submission, course-by-course analysis)",
                    "Master TOEFL requirements & speaking sections",
                    "Navigate state board applications & internship requirements"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl text-center">
                  <p className="text-green-700 font-semibold">You're close to the finish line — let's get you there efficiently.</p>
                </div>
              </div>
            </div>

            {/* 3. Post-Bacc/Master's Students */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Star className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Post-Bacc/Master's Students</h2>
                    <p className="text-blue-100 text-lg">In pharmaceutical sciences, public health, or related programs</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 italic">
                    "You're enhancing your credentials through additional education but want to strategically plan your pharmacy licensure timeline."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Plan exam timeline around your academic schedule",
                    "Set up NABP profile & submit applications early",
                    "Prep for FPGEE while completing your program",
                    "Transition from student to pharmacy intern smoothly"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-xl text-center">
                  <p className="text-blue-700 font-semibold">Maximize your time in school — graduate job-ready.</p>
                </div>
              </div>
            </div>

            {/* 4. Pharmacy Schools & Alumni Networks */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Star className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Pharmacy Schools & Alumni Networks</h2>
                    <p className="text-blue-100 text-lg">Universities, professional associations, and alumni groups</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 italic">
                    "You want to provide value to your students/members with expert U.S. licensure guidance and exclusive educational resources."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">We partner with you to offer:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Guest lectures & webinars for your students",
                    "Branded bootcamps & prep courses",
                    "Discounted group rates for members",
                    "Mentorship events & networking sessions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl text-center">
                  <p className="text-blue-700 font-semibold">Let's build a pipeline of success for your community.</p>
                </div>
              </div>
            </div>

            {/* 5. Retake Candidates */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Star className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Retake Candidates</h2>
                    <p className="text-blue-100 text-lg">Those who didn't pass on the first attempt</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 italic">
                    "You've been through this before. You need focused, strategic support to identify gaps and build confidence for your next attempt."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Rebuild confidence with targeted study plans",
                    "Identify specific knowledge gaps & weaknesses",
                    "Get personalized prep & mentor pairing",
                    "Access retake-friendly packages & pricing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl text-center">
                  <p className="text-blue-700 font-semibold">Your setback is your comeback — we believe in your success.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Why Choose PharmaBridge */}
          {/* <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Star className="h-12 w-12" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PharmaBridge</h2>
              <p className="text-blue-200 text-xl mb-8">Founded by successful pharmacists who understand your journey</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-2xl">
                  <h4 className="text-xl font-bold mb-3">Proven Track Record</h4>
                  <p className="text-blue-200">Founded by pharmacists who've successfully navigated the U.S. licensure process</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl">
                  <h4 className="text-xl font-bold mb-3">Affordable Excellence</h4>
                  <p className="text-blue-200">High-quality mentorship and resources at accessible prices</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl">
                  <h4 className="text-xl font-bold mb-3">Step-by-Step Guidance</h4>
                  <p className="text-blue-200">Clear roadmaps tailored to your specific situation and goals</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8">
                <Link href="/createaccount">Start Your Journey Today</Link>
              </Button>
            </div>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeHelpSection;
