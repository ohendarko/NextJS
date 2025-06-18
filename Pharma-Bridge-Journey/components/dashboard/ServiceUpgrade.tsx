'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { LucideShoppingBag, ShoppingCart } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';


interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  upgradeFrom?: string[];
  popular?: boolean;
}

interface ServiceUpgradeProps {
  userProfile: any;
}

const ServiceUpgrade: React.FC<ServiceUpgradeProps> = ({ userProfile }) => {

  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  // Services data from pricing page

  const isAddedToCart = (cartId: string) => {
    return cart.some(item => item.id === cartId);
  };

  const services: Service[] = [
   
    
    {
      id: "fpgee_prep_only",
      name: "FPGEE Exam Preparation Only",
      description: "Focus on high-yield topics: Pharmacology, Clinical Sciences, and more",
      price: 500,
      features: [
        "Focus on high-yield topics: Pharmacology, Clinical Sciences, and more",
        "Personalized study plans based on NABP Competency Requirements",
        "Resource guidance (books, platforms, practice tests)",
        "Test-taking strategies and mock exam reviews"
      ],
      upgradeFrom: ["credential_guidance", "fpgee_prep_only", "fpgec_pathway", "toefl_prep", "toefl-prep-2hr", "toefl-prep-1hr"]
    },
    {
      id: "fpgec_pathway",
      name: "FPGEC Certificate Pathway Coaching",
      description: "Comprehensive support for the FPGEC certificate pathway",
      price: 800,
      features: [
        "Credential evaluation (ECE & NABP) assistance",
        "Transcript and certification preparation",
        "NABP e-Profile setup",
        "FPGEE eligibility application support",
        "TOEFL registration + study resources",
        "Prometric exam scheduling",
        "Personalized FPGEE and TOEFL prep plans"
      ],
      upgradeFrom: ["credential_guidance", "fpgee_prep_only", "toefl_prep", "toefl-prep-2hr", "toefl-prep-1hr"],
      popular: true
    },
    // {
    //   id: "nabp_application",
    //   name: "NABP Application & Exam Scheduling",
    //   description: "Complete application and scheduling support",
    //   price: 150,
    //   features: [
    //     "NABP e-Profile setup",
    //     "FPGEE eligibility application guidance",
    //     "Prometric testing center scheduling"
    //   ],
    //   upgradeFrom: ["credential_guidance", "fpgee_prep_only", "fpgec_pathway", "toefl_prep"]
    // },
    // {
    //   id: "accommodation_support",
    //   name: "Accommodation, Flight & Hosting Support",
    //   description: "Complete travel and accommodation assistance",
    //   price: 300,
    //   features: [
    //     "Flight booking guidance",
    //     "Temporary housing support (Airbnb, student housing, extended stays)",
    //     "Local hosting orientation and connection (in select cities)",
    //     "U.S. culture overview: transport, shopping, safety tips"
    //   ],
    //   upgradeFrom: ["fpgee_prep_only", "fpgec_pathway", "toefl_prep"]
    // },
    // {
    //   id: "internship_placement",
    //   name: "Internship Placement Strategy",
    //   description: "Coaching on where and how to apply for internships",
    //   price: 100,
    //   features: [
    //     "Coaching on where and how to apply",
    //     "Interview preparation",
    //     "Resume review and employer outreach support"
    //   ],
    //   upgradeFrom: ["fpgee_prep_only", "fpgec_pathway", "toefl_prep"]
    // },
    {
      id: 'toefl-prep-1hr',
      name: 'TOEFL One-on-One Classes: 1 hour class',
      description: "TOEFL class in one hours",
      price: 35,
      features: ['Focused preparation for the TOEFL iBT exam'],
      upgradeFrom: ["toefl_prep", "fpgee_prep_only", "fpgec_pathway"]
    },
    {
      id: 'toefl-prep-2hr',
      name: 'TOEFL One-on-One Classes: 2 hours',
      description: "TOEFL class in two hours",
      price: 70,
      features: [
        'Personalized TOEFL preparation with expert instructors.',
        'Choose your duration and class type.'
        ],
      upgradeFrom: ["toefl_prep", "fpgee_prep_only", "fpgec_pathway", "toefl-prep-1hr"]
    },
    {
      id: 'toefl-lifetime',
      name: 'TOEFL Lifetime Subscription',
      description: "Comprehensive TOEFL preparation with all options",
      price: 250,
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
      upgradeFrom: [ "toefl_prep", "fpgee_prep_only", "fpgec_pathway", "toefl-prep-2hr", "toefl-prep-1hr"]

    },
    // {
    //   id: "toefl_prep",
    //   name: "TOEFL-iBT Speaking & Writing Prep",
    //   description: "Comprehensive TOEFL preparation with multiple options",
    //   price: 35,
    //   features: [
    //     "1-Hour Class ($35)",
    //     "2-Hour Class ($70)",
    //     "7-Day Intensive Program ($250)",
    //     "Speaking & Writing test practice with feedback",
    //     "Access to drills, templates, and strategies",
    //     "TOEFL registration support and exam planning"
    //   ],
    //   upgradeFrom: ["credential_guidance", "fpgee_prep_only", "fpgec_pathway", "toefl_prep"]
    // },
    {
      id: "full",
      name: "Full Licensure Pathway Support",
      description: "Everything you need to become a licensed pharmacist in the U.S.",
      price: 3000,
      features: [
        "Credential evaluation (ECE & NABP)",
        "TOEFL and FPGEE preparation",
        "NABP e-Profile setup & application support",
        "Prometric test scheduling",
        "NAPLEX & MPJE prep strategy",
        "Internship placement guidance",
        "Timeline & eligibility tracking"
      ],
      upgradeFrom: ["credential_guidance", "fpgee_prep_only", "fpgec_pathway", "toefl_prep", "toefl-prep-2hr", "toefl-prep-1hr"],
      popular: true
    }
  ];
  
  // Function to check if a service is active for the user
  const isServiceActive = (serviceId: string) => {
    return userProfile.selectedPackage?.includes(serviceId) || userProfile.selectedPackage?.includes("full");
  };
  
  // Function to check if user can upgrade to a service
  const canUpgradeTo = (service: Service) => {
    if (isServiceActive(service.id)) return false;
    if (!service.upgradeFrom || service.upgradeFrom.length === 0) return true;
    
    return service.upgradeFrom.some(serviceId => userProfile.selectedPackage.includes(serviceId));
  };
  
  // Get recommended upgrades based on current services
  const getRecommendedUpgrades = () => {
    return services.filter(service => {
      if (isServiceActive(service.id)) return false;
      if (service.upgradeFrom && service.upgradeFrom.length > 0) {
        return service.upgradeFrom.some(serviceId => userProfile.selectedPackage.includes(serviceId));
      }
      return false;
    });
  };
  
  // Calculate overall progress
  const totalServices = services.length;
  const activeServices = services.filter(service => isServiceActive(service.id)).length;
  const progressPercentage = Math.round((activeServices / totalServices) * 100);
  
  const recommendedUpgrades = getRecommendedUpgrades();

  const handleCheckout = () => {
    // Here you would integrate with payment processing
    alert(`Proceeding to checkout with ${cartItemCount} items totaling $${cartTotal}`);
  };

  return (
    <div className="space-y-6">
      {/* Progress Section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-pharma-blue">Your Journey Progress</h3>
          <div className="text-sm font-medium text-pharma-blue">{progressPercentage}% Complete</div>
        </div>
        <Progress value={progressPercentage} className="h-3 mb-2" />
        <p className="text-sm text-gray-600">
          You have {activeServices} of {totalServices} services active. Continue your journey to U.S. pharmacy licensure!
        </p>
      </div>

      {/* Current Active Services */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-pharma-blue">Your Current Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.filter(service => isServiceActive(service.id)).map(service => (
            <div key={service.id} className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-green-800">{service.name}</h4>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <p className="text-sm text-green-700 mb-3">{service.description}</p>
              <p className="font-bold text-green-800">${service.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Upgrades */}
      {recommendedUpgrades.length > 0 && (
        <div>
          <div className='flex justify-between'>

            <h3 className="text-lg font-semibold mb-4 text-pharma-blue">Recommended Next Steps</h3>
            <Button 
              variant="outline" 
              className="relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cartItemCount})
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pharma-blue text-white">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {recommendedUpgrades.map(service => (
              <div key={service.id} className="border-2 border-pharma-blue bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-pharma-blue">{service.name}</h4>
                  {service.popular && (
                    <Badge className="bg-pharma-blue text-white">Popular</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2">Includes:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pharma-blue mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-pharma-blue text-xs">+{service.features.length - 3} more feature(s)</li>
                    )}
                  </ul>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <p className="font-bold text-pharma-blue text-lg">${service.price}</p>
                  {isAddedToCart(service.id) ?
                    <div>
                    <Button 
                      onClick={() => removeFromCart(service.id)}
                      className="bg-pharma-blue hover:bg-pharma-navy"
                      
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Remove From Cart
                    </Button>
                    <p className='text-xs text-center text-red-500 bg-gray-100 border rounded-sm w-50 py-1'>Added to Cart</p>
                    </div> : 
                    <div>
                      <Button 
                        onClick={() => addToCart(service)}
                        className="bg-pharma-blue hover:bg-pharma-navy"
                        
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      <div className='flex gap-5 justify-center'>
        <Link href='/dashboard/shopping'>
          <Button>
            <LucideShoppingBag />
            Go to Shop
          </Button>
        </Link>

        {cart.length > 0 && <Link href='/dashboard/shopping/checkout'>
          <Button
          >
            <LucideShoppingBag />
            Proceed to Checkout
          </Button>
        </Link>}
      </div>

      {/* Contact for Custom Solutions */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2 text-pharma-blue">Need a Custom Solution?</h3>
        <p className="text-gray-600 mb-4">
          Looking for a tailored package or have specific needs? We offer customized solutions and group discounts.
        </p>
        <Button variant="outline" className="border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white">
          Contact Us for Custom Package
        </Button>
      </div>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
          <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl lg:relative lg:w-full lg:max-w-md lg:mx-auto lg:mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Shopping Cart</CardTitle>
                  <Button variant="ghost" onClick={() => setIsCartOpen(false)}>
                    ×
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="h-full flex flex-col">
                {cart.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <ScrollArea className="flex-1">
                      <div className="space-y-4">
                        {cart.map(item => (
                          <div key={item.id} className="border rounded-lg p-3">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </Button>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled
                                >
                                  -
                                </Button>
                                <span>{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  disabled
                                >
                                  +
                                </Button>
                              </div>
                              <span className="font-medium">${item.price * item.quantity}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-xl">${cartTotal}</span>
                      </div>
                      
                      <Button 
                        onClick={handleCheckout}
                        className="w-full bg-pharma-blue hover:bg-pharma-navy"
                        disabled={cart.length === 0}
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceUpgrade;
