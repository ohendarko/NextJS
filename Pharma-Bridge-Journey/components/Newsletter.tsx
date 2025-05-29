"use client"
import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for subscribing! The U.S. Licensure Roadmap has been sent to your email.");
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-pharma-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Our Free U.S. Licensure Roadmap</h2>
          <p className="mb-8">Subscribe to receive our detailed guide on navigating the U.S. pharmacy licensure process</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white"
              aria-label="Email address"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-pharma-blue hover:bg-pharma-light-blue hover:text-pharma-blue"
            >
              {isSubmitting ? "Sending..." : "Get Roadmap"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
