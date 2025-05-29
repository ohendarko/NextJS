'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    inquiryType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      country: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pharma-navy to-pharma-blue bg-clip-text text-transparent">
              Let's Bridge Your Path to U.S. Pharmacy Practice
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to take the next step in your pharmacy career? Whether you have questions about our services, 
              need personalized guidance, or want to schedule a consultation, we're here to help you succeed.
            </p>
          </div>

          {/* Main Content - Form and Contact Info */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-pharma-navy mb-4">Send Us a Message</h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-base font-semibold text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-base font-semibold text-gray-700">
                      WhatsApp Number
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-base font-semibold text-gray-700">
                      Country/Region
                    </Label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="e.g., Nigeria, India, Ghana"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="text-base font-semibold text-gray-700">
                    Type of Inquiry *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select your inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fpgee-prep">FPGEE Preparation</SelectItem>
                      <SelectItem value="toefl-prep">TOEFL Preparation</SelectItem>
                      <SelectItem value="ece-evaluation">ECE Evaluation Guidance</SelectItem>
                      <SelectItem value="licensure-roadmap">Complete Licensure Roadmap</SelectItem>
                      <SelectItem value="mentorship">1-on-1 Mentorship</SelectItem>
                      <SelectItem value="institutional">Institutional Partnerships</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold text-gray-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your background, goals, and how we can help you achieve your U.S. pharmacy licensure..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="min-h-[120px] text-base resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-pharma-blue to-pharma-navy hover:from-pharma-navy hover:to-pharma-blue transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-pharma-navy mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg">
                  Choose the best way to reach us. We're committed to responding promptly and helping you succeed.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">General Inquiries:</p>
                    <a href="mailto:info@pharmabridgeconsulting.com" className="text-pharma-blue hover:text-pharma-navy font-medium">
                      info@pharmabridgeconsulting.com
                    </a>
                    <p className="text-gray-600 mb-1 mt-2">Student Services:</p>
                    <a href="mailto:students@pharmabridgeconsulting.com" className="text-pharma-blue hover:text-pharma-navy font-medium">
                      students@pharmabridgeconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-1">Quick questions and support:</p>
                    <a href="https://wa.me/1234567890" className="text-green-600 hover:text-green-700 font-medium">
                      +1 (234) 567-8900
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">Consultation calls:</p>
                    <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700 font-medium">
                      +1 (234) 567-8900
                    </a>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                    <p className="text-gray-600">
                      PharmaBridge Consulting<br />
                      123 Healthcare Plaza, Suite 456<br />
                      Boston, MA 02101<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Book a Call CTA */}
              <div className="bg-gradient-to-r from-pharma-blue to-pharma-navy p-8 rounded-xl text-white text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-3">Ready for a Personal Consultation?</h3>
                <p className="mb-6 text-blue-100">
                  Schedule a free 30-minute discovery call to discuss your unique situation and create a personalized roadmap.
                </p>
                <Button 
                  className="bg-white text-pharma-navy hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                  onClick={() => window.open('https://calendly.com/pharmabridgeconsulting', '_blank')}
                >
                  Book Your Free Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
