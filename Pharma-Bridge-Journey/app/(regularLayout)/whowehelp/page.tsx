
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CheckCircle, GraduationCap, Globe, Users, School, RotateCcw, Star, ArrowRight, Download, Calendar, Shield } from 'lucide-react';

const WhoWeHelp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pharma-navy to-pharma-blue bg-clip-text text-transparent">
              WHO WE HELP
            </h1>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                At PharmaBridge Consulting, we specialize in guiding internationally trained pharmacists on their journey to becoming licensed professionals in the United States.
              </p>
              <div className="bg-gradient-to-r from-pharma-blue to-pharma-navy text-white rounded-2xl p-6 shadow-xl">
                <p className="text-lg md:text-xl font-semibold">
                  Whether you're just graduating, already licensed abroad, or restarting your career after relocation — <span className="text-yellow-300">we are your bridge.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Support Categories */}
          <div className="space-y-12 mb-16">
            
            {/* 1. Final-Year Students */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">🎓 Final-Year Pharmacy Students</h2>
                    <p className="text-blue-100 text-lg">From Ghana, Nigeria, India, Egypt, the Philippines, and beyond</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 italic">
                    "You're preparing to graduate and want to start early toward your U.S. dream. You're ambitious but unsure where to begin."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-pharma-navy mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Understand the full licensure roadmap (FPGEE, TOEFL, ECE, Visa)",
                    "Get started with basic U.S. pharmacy prep",
                    "Build your professional documents (CVs, LinkedIn, Statement of Purpose)",
                    "Join student-focused prep webinars and bootcamps"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-xl text-center">
                  <p className="text-blue-800 font-semibold">📘 You don't have to wait till after school — start the right way now.</p>
                </div>
              </div>
            </div>

            {/* 2. Foreign-Trained Pharmacists */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Globe className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">👩🏽‍⚕️ Foreign-Trained Pharmacists Already Living in the U.S.</h2>
                    <p className="text-green-100 text-lg">Ready to reclaim your pharmacy career without going back to school</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-green-50 p-6 rounded-xl mb-6 border-l-4 border-green-500">
                  <p className="text-lg text-gray-700 italic">
                    "You've migrated to the U.S. — maybe recently or years ago — and now you're ready to reclaim your pharmacy career without going back to school. Whether you arrived through family, diversity visa, asylum, or employment, we're here to guide you."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-pharma-navy mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Determine your eligibility to take the FPGEE as a foreign graduate",
                    "Guide you through the ECE evaluation, TOEFL, and NABP process",
                    "Build a customized plan to become licensed in the U.S. as a pharmacist or intern",
                    "Support you with step-by-step mentorship, documentation, and licensure strategy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. International Students */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Users className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">✈️ International Pharmacy Graduates in the U.S.</h2>
                    <p className="text-purple-100 text-lg">On Post-Bacc or Master's Programs</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-purple-50 p-6 rounded-xl mb-6 border-l-4 border-purple-500">
                  <p className="text-lg text-gray-700 italic">
                    "You're already in the U.S. on a student visa — studying a Post-Bacc, Master's, or other program — and now you're ready to take the steps toward U.S. pharmacist licensure."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-pharma-navy mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Understand whether you're eligible to take the FPGEE and TOEFL iBT as a foreign pharmacy graduate",
                    "Set up your NABP profile and complete your ECE credential evaluation",
                    "Create a personalized timeline to complete your exams before or after graduation",
                    "Prepare to transition from student to licensed pharmacy intern"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-xl text-center">
                  <p className="text-purple-800 font-semibold">🧭 You've made the move. Now let's build your U.S. pharmacy future — the right way.</p>
                </div>
              </div>
            </div>

            {/* 4. Pharmacy Schools */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <School className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">🏫 Pharmacy Schools, Alumni Offices & Student Bodies</h2>
                    <p className="text-orange-100 text-lg">International career support for your students</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-orange-50 p-6 rounded-xl mb-6 border-l-4 border-orange-500">
                  <p className="text-lg text-gray-700 italic">
                    "You're a university, faculty member, or student group looking to add international career support for your students."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-pharma-navy mb-4">We offer:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Guest lectures on U.S. pharmacy pathways",
                    "Branded bootcamps and licensure prep webinars",
                    "Discounted access to premium prep courses",
                    "Co-hosted alumni spotlight and mentorship events"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-xl text-center">
                  <p className="text-orange-800 font-semibold">🎓 Let's empower your graduates with a clear global career pathway.</p>
                </div>
              </div>
            </div>

            {/* 5. Retake Candidates */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-teal-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <RotateCcw className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">🧠 Pharmacists Who Have Failed FPGEE/TOEFL in the Past</h2>
                    <p className="text-teal-100 text-lg">A fresh start with the right support</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-teal-50 p-6 rounded-xl mb-6 border-l-4 border-teal-500">
                  <p className="text-lg text-gray-700 italic">
                    "You've tried, failed, and feel discouraged. You still want that U.S. dream — you just need a better strategy."
                  </p>
                </div>
                <h4 className="text-xl font-bold text-pharma-navy mb-4">We help you:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Rebuild your confidence with diagnostic reviews",
                    "Personalize your prep to fit your learning style",
                    "Pair you with mentors who have passed successfully",
                    "Provide retake-friendly packages"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-teal-100 to-teal-50 p-4 rounded-xl text-center">
                  <p className="text-teal-800 font-semibold">🌱 A setback is not the end — it's a fresh start with the right support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose PharmaBridge */}
          <div className="bg-gradient-to-r from-pharma-navy to-pharma-blue text-white rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Star className="h-12 w-12" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">💡 Why Work With PharmaBridge?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "We are founded by pharmacists who've done it — and guided others to success",
                "We know the exact NABP, ECE, TOEFL, Visa processes",
                "We offer affordable, step-by-step, and mentorship-backed services",
                "We believe international pharmacists deserve the same clarity and coaching as anyone born in the U.S."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-pharma-navy mb-6">🚀 Ready to Start?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're starting early, returning to the profession, or relocating — we have a path tailored for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" className="bg-pharma-navy hover:bg-pharma-blue text-lg px-8 py-4 rounded-full shadow-lg">
                <Calendar className="h-5 w-5 mr-3" />
                Book a Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-pharma-navy text-pharma-navy hover:bg-pharma-light-blue text-lg px-8 py-4 rounded-full shadow-lg">
                <Download className="h-5 w-5 mr-3" />
                Download Free Roadmap
              </Button>
            </div>
            <Link href="/createaccount">
              <Button size="lg" className="bg-gradient-to-r from-pharma-blue to-pharma-navy hover:from-pharma-navy hover:to-pharma-blue text-xl px-10 py-4 rounded-full shadow-xl">
                Start Your Journey Today
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoWeHelp;
