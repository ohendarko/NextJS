
import React from 'react';
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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
    // {
    //   title: "Credential Evaluation Guidance",
    //   price: "$200",
    //   features: [
    //     'Support submitting transcripts and degree certificates to ECE',
    //     'Step-by-step guidance for gathering and organizing credentials',
    //     'Timeline planning to meet FPGEE eligibility deadlines',
    //     'Avoid costly documentation errors or delays'
    //   ],
    //   highlight: false
    // },
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
    }
  ];
  
  // Additional services
  const additionalServices = [
    {
      title: "NABP Application & Exam Scheduling",
      price: "$150",
      features: [
        'NABP e-Profile setup',
        'FPGEE eligibility application guidance',
        'Prometric testing center scheduling'
      ]
    },
    {
      title: "Accommodation, Flight & Hosting Support",
      price: "$300",
      features: [
        'Flight booking guidance',
        'Temporary housing support (Airbnb, student housing, extended stays)',
        'Local hosting orientation and connection (in select cities)',
        'U.S. culture overview: transport, shopping, safety tips'
      ]
    },
    {
      title: "Internship Placement Strategy",
      price: "$100",
      features: [
        'Coaching on where and how to apply',
        'Interview preparation',
        'Resume review and employer outreach support'
      ]
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
          {/* Header section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-pharma-blue">Service Packages & Pricing</h1>
            <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">Comprehensive support for international pharmacists pursuing U.S. licensure</p>
            <div className="w-24 h-1 bg-pharma-blue mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Main Services Grid - 3 columns evenly distributed */}
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
                <CardFooter>
                  <Button className={`w-full ${
                    service.highlight
                      ? "bg-pharma-blue hover:bg-pharma-dark-blue"
                      : "bg-white hover:bg-blue-50 text-pharma-blue border border-pharma-blue"
                  }`}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <div className="grid md:grid-cols-1 gap-8 mb-16">
            {/* TOEFL Preparation */}
              <Card className="border-2 border-gray-200 hover:border-pharma-light-blue hover:shadow-md transition-all rounded-xl overflow-hidden h-full">
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
                <CardFooter className="mt-4">
                  <Button className="w-full bg-white hover:bg-blue-50 text-pharma-blue border border-pharma-blue">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          {/* Featured Plan - Full Licensure Support */}
          {/* <div className="max-w-4xl mx-auto mb-16 px-4">
            <Card className="border-2 border-pharma-blue shadow-xl rounded-xl overflow-hidden">
              <div className="bg-pharma-blue text-white p-4 text-center">
                <h3 className="text-xl font-bold">Complete Solution</h3>
              </div>
              <CardHeader className="text-center pb-2 pt-6">
                <CardTitle className="text-2xl">Full Licensure Pathway Support</CardTitle>
                <div className="text-4xl font-bold text-pharma-blue mt-4">$3,000</div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {[
                      'Credential evaluation (ECE & NABP)',
                      'TOEFL and FPGEE preparation',
                      'NABP e-Profile setup & application support',
                      'Prometric test scheduling'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {[
                      'NAPLEX & MPJE prep strategy',
                      'Internship placement guidance',
                      'Timeline & eligibility tracking'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-8 pt-4">
                <Button size="lg" className="bg-pharma-blue hover:bg-pharma-dark-blue px-10">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div> */}
          
          <div className="grid md:grid-cols-1 gap-8 mb-16">
            {/* TOEFL Preparation */}
           

            {/* Custom Packages */}
            <Card className="border-2 border-gray-200 hover:border-pharma-light-blue hover:shadow-md transition-all rounded-xl overflow-hidden h-full bg-gradient-to-br from-white to-blue-50">
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
            </Card>
          </div>

          {/* Additional Services */}
          {/* <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-pharma-blue">Additional Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, idx) => (
                <Card key={idx} className="border border-gray-200 hover:border-pharma-light-blue hover:shadow-md transition-all rounded-lg h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <div className="text-xl font-bold text-pharma-blue mt-2">{service.price}</div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white hover:bg-blue-50 text-pharma-blue border border-pharma-blue">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div> */}

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
