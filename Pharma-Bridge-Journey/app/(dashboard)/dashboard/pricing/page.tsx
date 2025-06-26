
import React from 'react';
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Pricing = () => {
  // Function to render check icon
  const CheckIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="h-5 w-5 text-pharma-blue mr-2 shrink-0 mt-0.5"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
  
  // Main services data
  const mainServices = [
 
    {
      title: "FPGEC Certificate Pathway Coaching",
      price: "$800",
      features: [
        'Credential evaluation (ECE & NABP) assistance',
        'Transcript and certification preparation',
        'NABP e-Profile setup',
        'FPGEE eligibility application support',
        'TOEFL registration + study resources',
        'Prometric exam scheduling',
        'Personalized FPGEE and TOEFL prep plans'
      ],
      highlight: false
    },
    {
      title: "Full Licensure Pathway Support",
      price: "$3,000",
      features: [
        'Credential evaluation (ECE & NABP)',
        'TOEFL and FPGEE preparation',
        'NABP e-Profile setup & application support',
        'Prometric test scheduling',
        'NAPLEX & MPJE prep strategy',
        'Internship placement guidance',
        'Timeline & eligibility tracking'
      ],
      highlight: true
    },
    {
      title: "FPGEE Exam Preparation Only",
      price: "$500",
      features: [
        'Focus on high-yield topics: Pharmacology, Clinical Sciences, and more',
        'Personalized study plans based on NABP Competency Requirements',
        'Resource guidance (books, platforms, practice tests)',
        'Test-taking strategies and mock exam reviews'
      ],
      highlight: false
    },
    {
      id: 'toefl_prep-1hr',
      title: 'TOEFL  One-on-One Classes: 1 hour class',
      features: ['Focused preparation for the TOEFL iBT exam'],
      price: '$35',
      highlight: false
    },
    {
      id: 'toefl-prep-2hr',
      title: 'TOEFL One-on-One Classes: 2 hours',
      features: [
        'Personalized TOEFL preparation with expert instructors.',
        'Choose your duration and class type.'
        ],
      price: '$70',
      highlight: false,
    },
    {
      id: 'toefl-lifetime',
      title: 'TOEFL Lifetime Subscription',
      features: [
        'Complete TOEFL preparation package:',
        '4 two-hour classes OR 8 one-hour classes',
        'Comprehensive drills',
        'Templates Strategies',
        'Speaking and Writing feedback',
        'Test samples',
        'Reading questions ',
        'Registration support'
      ],
      price: '$250',
      highlight: true,
    }
  ];
  

  // TOEFL pricing tiers
  const toeflPricing = [
    { name: "1-Hour Class", price: "$35" },
    { name: "2-Hour Class", price: "$70" },
    { name: "7-Day Intensive Program", price: "$250" }
  ];

  return (
    <div className="min-h-screen flex flex-col mt-20">
      <main className="flex-grow pt-16 pb-16 bg-gradient-to-b from-white to-blue-50">
        
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          {/* Header section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-pharma-blue">Service Packages & Pricing</h1>
            <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">Comprehensive support for international pharmacists pursuing U.S. licensure</p>
            <div className="w-24 h-1 bg-pharma-blue mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Main Services Grid - columns evenly distributed */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {mainServices.map((service, idx) => (
              <Card key={idx} className={`border-2 h-full flex flex-col ${
                service.highlight 
                  ? "border-pharma-blue shadow-lg relative" 
                  : "border-gray-200 hover:border-pharma-light-blue hover:shadow-md"
              } transition-all rounded-xl`}>
                {service.highlight && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-pharma-blue font-medium px-3 py-1">
                      POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader className={`pb-2 ${service.highlight ? "bg-blue-50" : ""}`}>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-pharma-blue mt-2">{service.price}</div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            <div className="grid md:grid-cols-1 gap-8 mb-16">
            {/* TOEFL Preparation */}
              <Card className="border-2 border-gray-200 hover:border-pharma-light-blue hover:shadow-md transition-all rounded-xl overflow-hidden h-full pb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-pharma-blue">TOEFL-iBT Speaking & Writing Prep</CardTitle>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="overflow-x-auto mb-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-blue-50">
                          <TableHead className="font-bold">Program</TableHead>
                          <TableHead className="text-right font-bold">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {toeflPricing.map((tier, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{tier.name}</TableCell>
                            <TableCell className="text-right">{tier.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {[
                        'Speaking & Writing test practice with feedback',
                        'Access to drills, templates, and strategies',
                        'TOEFL registration support and exam planning'
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
              </Card>
            </div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 mb-16">

            {/* Custom Packages */}
            {/* <Card className="border-2 border-gray-200 hover:border-pharma-light-blue hover:shadow-md transition-all rounded-xl overflow-hidden h-full bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-pharma-blue">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent className="pb-0">
                <p className="mb-4">Need a tailored approach for your unique situation? We offer customized packages to meet your specific needs.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <CheckIcon />
                    <span>Mix and match services based on your needs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon />
                    <span>Flexible payment options available</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon />
                    <span>Group rates for 3+ pharmacists</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-4">
                <Button className="w-full bg-pharma-blue hover:bg-pharma-dark-blue text-white">
                  Contact Us
                </Button>
              </CardFooter>
            </Card> */}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground italic max-w-3xl mx-auto">
              All pricing reflects one-time service fees unless stated otherwise. Customized packages available upon request.
            </p>
            <Button size="lg" className="mt-6 bg-pharma-blue hover:bg-pharma-dark-blue">
              Contact Us for Custom Solutions
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
