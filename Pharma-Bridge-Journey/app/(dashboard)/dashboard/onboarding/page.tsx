"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { useSession } from 'next-auth/react'
import Spinner from '@/components/Spinner';
// import { set } from 'date-fns';



const OnboardingForm = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession()
  const navigate = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    timezone: '',
    
    // Education
    countryOfDegree: '',
    degreeType: '',
    graduationYear: '',
    degreeFile: null,
    passportFile: null,
    licenseFile: null,
    
    // Travel
    hasVisa: false,
    visaType: '',
    arrivalDate: '',
    preferredState: '',
    
    // Service
    selectedPackage: '',
    activeServices: [] as string[],

    // TOEFL-specific options
    toeflDuration: '1hr' as '1hr' | '2hr',
    toeflType: 'speaking' as 'speaking' | 'writing' | 'both',
  });

  
  useEffect(() => {
    if (status === 'loading') {
      setIsLoading(true);
      return;
    }
    setIsLoading(false);
    

    if (status === 'unauthenticated') {
      alert('You must be logged in to access this page.');
      navigate.push('/login')
    } 
    
  }, [status, navigate])

  
  
  
  
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBooleanRadioChange = (field: string, value: string) => {
    const parsedValue = value === 'yes' ? true : value === 'no' ? false : value;
    setFormData((prev) => ({
      ...prev,
      [field]: parsedValue,
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      });
    }
  };
  
  const handleNext = () => {
    // console.log("handleNext called");
    // Validate current step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
    // console.log("formData:", formData);
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  function sanitizeFormData(data: Record<string, any>) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (value === '') return [key, null];
        
        // Convert specific fields to ISO string if they're not null/undefined
        if (
          ['dateOfBirth', 'arrivalDate'].includes(key) &&
          typeof value === 'string' &&
          value
        ) {
          return [key, new Date(value).toISOString()];
        }

        return [key, value];
      })
    );
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < totalSteps) {
      handleNext();
      return;
    }
    
    // Validate required fields in the final step
    if (!formData.selectedPackage) {
      toast({
        title: "Please select a package",
        description: "You must select a service package to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!session?.user?.email || !formData.selectedPackage) {
      alert('Missing required fields')
      return
    }
    
    // In a real app, you'd make an API call to save the data
    // Making the API call to submit the form data

    const cleanedData = sanitizeFormData(formData);

    try {
      setIsLoading(true);
      const payload = {
        email: session.user.email,
        ...cleanedData,
      };
      // console.log('Submitting payload:', payload);

      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: session.user.email,
          ...formData,
        }),
      })

      if (!res.ok) {
        setIsLoading(false);
        throw new Error('Failed to submit onboarding data');
        
      }
      // toast({
      //   title: "Onboarding Completed",
      //   description: "Your information has been saved successfully",
      //   variant: "success",
      // });

      navigate.push('/dashboard')
    } catch (err) {
      console.error(err)
      setIsLoading(false);
      // console.log(err)
      alert('Something went wrong. Try again.')
    }
    
    toast({
      title: "Submission Successful",
      description: "Thank you! Our team will review your details shortly.",
    });
    
    // Navigate to the dashboard page
    setTimeout(() => {
      navigate.push('/dashboard');
    }, 2000);
  };
  
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming"
  ];
  
  const countries = [
    "United States", "India", "Philippines", "United Kingdom", "Canada", 
    "Australia", "Nigeria", "South Africa", "Egypt", "Pakistan",
    "Saudi Arabia", "UAE", "Jordan", "Kenya", "Ghana", "Other"
  ];
  
  const timeZones = [
    "Pacific Time (PT)", "Mountain Time (MT)", "Central Time (CT)", 
    "Eastern Time (ET)", "Atlantic Time (AT)", "Greenwich Mean Time (GMT)", 
    "Central European Time (CET)", "Eastern European Time (EET)", 
    "Indian Standard Time (IST)", "China Standard Time (CST)", 
    "Japan Standard Time (JST)", "Australian Eastern Standard Time (AEST)"
  ];
  
  // Service packages with pricing from the pricing page
  const servicePackages = [
    {
      id: 'fpgee_prep_only',
      name: 'FPGEE Exam Preparation Only',
      description: 'Preparation for FPGEE exam',
      price: '$500',
      popular: false
    },
    {
      id: 'fpgec_pathway',
      name: 'FPGEE Pathway Support',
      description: 'Guidance through credential evaluation, TOEFL, FPGEE, and Prometric scheduling—includes e-Profile setup & personalized prep plans.',
      price: '$800',
      popular: false
    },
    {
      id: 'full',
      name: 'Full Licensure Pathway',
      description: 'Complete guidance from credential evaluation through state licensure',
      price: '$3,000',
      mostPopular: true
    },
    {
      id: 'toefl_prep-1hr',
      name: 'TOEFL  One-on-One Classes: 1 hour class',
      description: 'Focused preparation for the TOEFL iBT exam',
      price: '$35',
      popular: false
    },
    {
      id: 'toefl-prep-2hr',
      name: 'TOEFL One-on-One Classes: 2 hours',
      description: 'Personalized TOEFL preparation with expert instructors. Choose your duration and class type.',
      price: '$70',
      popular: false,
      hasToeflOptions: true
    },
    {
      id: 'toefl-lifetime',
      name: 'TOEFL Lifetime Subscription',
      description: 'Complete TOEFL preparation package: 4 two-hour classes OR 8 one-hour classes, comprehensive drills, templates, strategies, speaking and writing feedback, test samples, reading questions, registration support',
      price: '$250',
      popular: true,
      hasToeflOptions: false
    }
  ];
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-pharma-blue">Basic Information</h2>
            <p className="text-gray-600">Tell us a bit about yourself so we can personalize your experience.</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label>Gender</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleRadioChange('gender', value)}
                  className="flex flex-col space-y-1 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other / Prefer not to say</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+1 (123) 456-7890"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="timezone">Preferred Time Zone</Label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Select your time zone</option>
                  {timeZones.map((zone, index) => (
                    <option key={index} value={zone}>{zone}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-pharma-blue">Education</h2>
            <p className="text-gray-600">Please provide details about your pharmacy education.</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="countryOfDegree">Country of Pharmacy Degree</Label>
                <select
                  id="countryOfDegree"
                  name="countryOfDegree"
                  value={formData.countryOfDegree}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Select country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label>Type of Degree</Label>
                <RadioGroup
                  value={formData.degreeType}
                  onValueChange={(value) => handleRadioChange('degreeType', value)}
                  className="flex flex-col space-y-1 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5-Year B.Pharm" id="bpharm" />
                    <Label htmlFor="bpharm">5-Year B.Pharm</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pharm.D" id="pharmd" />
                    <Label htmlFor="pharmd">Pharm.D</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="otherDegree" />
                    <Label htmlFor="otherDegree">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="graduationYear">Year of Graduation</Label>
                <Input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  min="1950"
                  max="2025"
                  placeholder="YYYY"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  required
                />
              </div>

            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-pharma-blue">Travel Intent</h2>
            <p className="text-gray-600">Please share your plans for traveling to the United States.</p>
            
            <div className="space-y-4">
              <div>
                <Label>Do you have a U.S. visa?</Label>
                <RadioGroup
                  value={formData.hasVisa === true ? 'yes' : formData.hasVisa === false ? 'no' : ''}
                  onValueChange={(value) => handleBooleanRadioChange('hasVisa', value)}
                  className="flex flex-col space-y-1 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="visa-yes" />
                    <Label htmlFor="visa-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="visa-no" />
                    <Label htmlFor="visa-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-process" id="visa-process" />
                    <Label htmlFor="visa-process">In Process</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {formData.hasVisa === true && (
                <div>
                  <Label htmlFor="visaType">Visa Type</Label>
                  <Input
                    type="text"
                    id="visaType"
                    name="visaType"
                    placeholder="e.g., H1-B, F1, J1"
                    value={formData.visaType}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="arrivalDate">Intended Arrival Month/Year</Label>
                <Input
                  type="month"
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <Label htmlFor="preferredState">Preferred U.S. State for Licensure</Label>
                <select
                  id="preferredState"
                  name="preferredState"
                  value={formData.preferredState}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select state</option>
                  {usStates.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-pharma-blue">Service Selection</h2>
            <p className="text-gray-600">Choose the support package that best fits your needs.</p>
            
            <RadioGroup
              value={formData.selectedPackage}
              onValueChange={(value) => handleRadioChange('selectedPackage', value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            >
              {servicePackages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`border-2 cursor-pointer transition-all hover:shadow-md ${
                    formData.selectedPackage === pkg.id 
                      ? 'border-pharma-blue bg-blue-50' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleRadioChange('selectedPackage', pkg.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <RadioGroupItem 
                        id={pkg.id} 
                        className="mt-1" 
                        value={pkg.id}
                      />
                      <div className="ml-3">
                        <Label htmlFor={pkg.id} className="text-lg font-medium">
                          {pkg.name}
                        </Label>
                        {pkg.mostPopular && (
                          <div className="bg-pharma-blue text-white text-xs rounded-full px-2 py-0.5 inline-block mb-2 ml-1">
                            Most Popular
                          </div>
                        )}
                        {pkg.popular && (
                          <div className="bg-pharma-blue text-white text-xs rounded-full px-2 py-0.5 inline-block mb-2 ml-1">
                            Popular
                          </div>
                        )}
                        <p className="text-sm text-gray-600 mt-1">
                          {pkg.description}
                        </p>
                        <p className="text-pharma-blue font-semibold mt-2">{pkg.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-8">
              <h3 className="font-medium text-pharma-blue">Selected package:</h3>
              {formData.selectedPackage ? (
                <div className="mt-2">
                  <p className="font-medium">{servicePackages.find(pkg => pkg.id === formData.selectedPackage)?.name}</p>
                  <p className="text-pharma-blue font-bold mt-1">
                    {servicePackages.find(pkg => pkg.id === formData.selectedPackage)?.price}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 italic">No package selected</p>
              )}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  
  
  return (
    
    <div className="min-h-screen bg-gray-50 mt-20">
      {(status === "unauthenticated" || !session || isLoading) && 
        (<div className="flex justify-center items-center h-screen">
        < Spinner loading={isLoading} />
        </div>)
      }
      <div className="bg-pharma-blue text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="mr-4">
              <h1 className="text-2xl font-bold">PharmaBridge</h1>
            </div>
            <div className="flex-1">
              <h2 className="text-xl">Onboarding for {session?.user?.name}</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-pharma-blue">
              Let's Get to Know You
            </h1>
            <p className="text-gray-600 text-center mt-2">
              Please complete the following information to personalize your experience
            </p>
            
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  {currentStep === 1 ? "Basic Info" : 
                   currentStep === 2 ? "Education" :
                   currentStep === 3 ? "Travel Intent" : "Services"}
                </span>
                <span className="text-xs text-muted-foreground">Complete</span>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-pharma-blue hover:bg-pharma-dark-blue"
                  disabled={!formData.selectedPackage}
                >
                  {isLoading ? "Submitting" : "Submit & Proceed to Dashboard"}
                </Button>
              )}
            </div>
          </form>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need assistance? <a href="/contact" className="text-pharma-blue hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
