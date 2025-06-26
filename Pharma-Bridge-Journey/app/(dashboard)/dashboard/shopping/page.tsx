'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ShoppingCart } from 'lucide-react';
// import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/context/CartContext";
import { useRouter } from 'next/navigation';



interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  category: string;
  popular?: boolean;
  duration?: string;
  type?: string;
}

// interface userProfile {
//   name: string;
//   email: string;
//   profileImage: string | null;
//   [key: string]: any;
// }

// interface CartItem extends Service {
//   quantity: number;
// }



const Shopping = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const isMobile = useIsMobile();
  const router = useRouter()

  const isAddedToCart = (cartId: string) => {
    return cart.some(item => item.id === cartId);
  };




  const services: Service[] = [
    {
      id: "credential_guidance",
      name: "Credential Evaluation Guidance",
      description: "Support submitting transcripts and degree certificates to ECE",
      price: 200,
      category: "Documentation",
      features: [
        "ECE submission support",
        "Step-by-step guidance",
        "Timeline planning",
        "Error prevention"
      ]
    },
    {
      id: "fpgee_prep",
      name: "FPGEE Exam Preparation",
      description: "Comprehensive exam preparation with personalized study plans",
      price: 500,
      category: "Exam Prep",
      popular: true,
      features: [
        "High-yield topics focus",
        "Personalized study plans",
        "Resource guidance",
        "Mock exam reviews"
      ]
    },
    {
      id: "toefl_1hr",
      name: "TOEFL 1-Hour Class",
      description: "One-on-one TOEFL preparation class",
      price: 35,
      category: "TOEFL",
      duration: "1 hour",
      type: "Speaking/Writing/Both",
      features: [
        "One-on-one instruction",
        "Flexible class type selection",
        "Immediate feedback",
        "Customized learning"
      ]
    },
    {
      id: "toefl_2hr",
      name: "TOEFL 2-Hour Class",
      description: "Extended one-on-one TOEFL preparation class",
      price: 70,
      category: "TOEFL",
      duration: "2 hours",
      type: "Speaking/Writing/Both",
      features: [
        "Extended one-on-one instruction",
        "Comprehensive coverage",
        "Multiple skill practice",
        "Detailed feedback"
      ]
    },
    {
      id: "toefl_lifetime",
      name: "TOEFL Lifetime Subscription",
      description: "Complete TOEFL preparation package with unlimited access",
      price: 250,
      originalPrice: 400,
      category: "TOEFL",
      popular: true,
      features: [
        "4 x 2-hour OR 8 x 1-hour classes",
        "Drills, templates & strategies",
        "Speaking & writing feedback",
        "Test samples & reading questions",
        "Registration support & exam planning"
      ]
    },
    {
      id: "nabp_application",
      name: "NABP Application Support",
      description: "Complete application and scheduling assistance",
      price: 150,
      category: "Application",
      features: [
        "NABP e-Profile setup",
        "Eligibility application guidance",
        "Prometric scheduling"
      ]
    },
    {
      id: "fpgec_pathway",
      name: "FPGEC Certificate Pathway Coaching",
      description: "Comprehensive support for the FPGEC certificate pathway",
      price: 800,
      category: 'coaching',
      features: [
        "Credential evaluation (ECE & NABP) assistance",
        "Transcript and certification preparation",
        "NABP e-Profile setup",
        "FPGEE eligibility application support",
        "TOEFL registration + study resources",
        "Prometric exam scheduling",
        "Personalized FPGEE and TOEFL prep plans"
      ],
     
    },
    // {
    //   id: "travel_support",
    //   name: "Travel & Accommodation Support",
    //   description: "Complete travel and housing assistance",
    //   price: 300,
    //   category: "Travel",
    //   features: [
    //     "Flight booking guidance",
    //     "Housing support",
    //     "Local orientation",
    //     "Culture overview"
    //   ]
    // },
    // {
    //   id: "internship_placement",
    //   name: "Internship Placement Strategy",
    //   description: "Professional guidance for internship applications",
    //   price: 100,
    //   category: "Career",
    //   features: [
    //     "Application coaching",
    //     "Interview preparation",
    //     "Resume review",
    //     "Employer outreach"
    //   ]
    // },
    {
      id: "full_licensure",
      name: "Full Licensure Pathway Support",
      description: "Everything you need to become a licensed pharmacist",
      price: 3000,
      originalPrice: 4000,
      category: "Complete Package",
      popular: true,
      features: [
        "Complete credential evaluation",
        "TOEFL & FPGEE preparation",
        "All application support",
        "NAPLEX & MPJE prep",
        "Internship guidance",
        "Timeline tracking"
      ]
    }
  ];

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // const addToCart = (service: Service) => {
  //   setCart(prevCart => {
  //     const existingItem = prevCart.find(item => item.id === service.id);
  //     if (existingItem) {
  //       return prevCart.map(item =>
  //         item.id === service.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }
  //     return [...prevCart, { ...service, quantity: 1 }];
  //   });
  // };

  // const removeFromCart = (serviceId: string) => {
  //   setCart(prevCart => prevCart.filter(item => item.id !== serviceId));
  // };

  

  // const updateQuantity = (serviceId: string, quantity: number) => {
  //   if (quantity <= 0) {
  //     removeFromCart(serviceId);
  //     return;
  //   }
  //   setCart(prevCart =>
  //     prevCart.map(item =>
  //       item.id === serviceId ? { ...item, quantity } : item
  //     )
  //   );
  // };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    // Here you would integrate with payment processing
    alert(`Proceeding to checkout with ${cartItemCount} items totaling $${cartTotal}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="pt-20 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
              >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
         
        </div>
        <div className="container mx-auto py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-pharma-navy">Service Marketplace</h1>
              <p className="text-gray-600 mt-2">Browse and purchase additional services to enhance your journey</p>
            </div>
            
            {/* Cart Button */}
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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <Input
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category === 'all' ? 'All Categories' : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredServices.map(service => (
                  <Card key={service.id} className="relative hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          {service.duration && (
                            <Badge variant="outline" className="mt-1">
                              {service.duration}
                            </Badge>
                          )}
                        </div>
                        {service.popular && (
                          <Badge className="bg-pharma-blue text-white">Popular</Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600">{service.description}</p>
                      
                      <div>
                        <h5 className="font-medium text-sm mb-2">Features:</h5>
                        <ul className="text-xs space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-pharma-blue mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-pharma-blue text-xs font-medium">
                              +{service.features.length - 3} more feature(s)
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xl text-pharma-navy">
                              ${service.price}
                            </span>
                            {service.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${service.originalPrice}
                              </span>
                            )}
                          </div>
                          {service.type && (
                            <p className="text-xs text-gray-500">{service.type}</p>
                          )}
                        </div>
                        
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          {isCartOpen && (
            <div
              className={`z-50 ${isCartOpen ? 'fixed inset-0' : 'hidden'} lg:relative lg:block lg:inset-auto`}>
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-200 lg:hidden ${isCartOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsCartOpen(false)} />
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
                        </ScrollArea>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
          <div className='flex w-full justify-center mb-10'>
            <div className="flex justify-between items-center">
              <Link href="/dashboard/shopping/checkout">
                <Button className="bg-pharma-blue hover:bg-pharma-dark-blue">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Shopping;
