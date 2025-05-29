"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const navigate = useRouter();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pharma-gray flex items-center justify-center p-4 mt-20">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-pharma-blue p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0078D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome to PharmaBridge Consulting!</h1>
          <p className="text-xl text-white/90 mt-2">Your account has been successfully created.</p>
        </div>
        
        <div className="p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-pharma-blue text-center">
              Let's begin your journey to U.S. pharmacy licensure
            </h2>
            
            <div className="space-y-4 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-pharma-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium">Complete Your Profile</p>
                  <p className="text-gray-600">Tell us about your education, experience, and goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-pharma-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium">Upload Required Documents</p>
                  <p className="text-gray-600">Prepare your degree, license, and identification documents</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-pharma-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium">Select Your Path</p>
                  <p className="text-gray-600">Choose the service package that best fits your needs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
              <div className="mr-4 text-pharma-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium">Check your email</p>
                <p className="text-sm text-gray-600">We've sent you a welcome email with login details and helpful resources</p>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <Button 
                onClick={() => navigate.push('/login')} 
                size="lg"
                className="bg-pharma-blue hover:bg-pharma-dark-blue text-white font-semibold py-2 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start My Onboarding
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;