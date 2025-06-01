"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const CreateAccount = () => {
  const navigate = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    agreeTerms: false
  });

  const countries = [
    "United States", "India", "Philippines", "United Kingdom", "Canada", 
    "Australia", "Nigeria", "South Africa", "Egypt", "Pakistan",
    "Saudi Arabia", "UAE", "Jordan", "Kenya", "Ghana", "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = async (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.country || !formData.agreeTerms) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and accept the terms",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Password validation - at least 8 characters
    if (formData.password.length < 8) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }
    const password = formData.password;
    const passwordIsValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (!passwordIsValid) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 8 characters long and contain at least one letter and one digit",
        variant: "destructive",
      });
      // alert("Password must be at least 8 characters long and contain at least one letter and one digit.");
      return;
    }


    // Submit the form data to the server

    const submitformData = async() => {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          toast({ title: "Error", description: data.error || "Something went wrong", variant: "destructive" });
          
          return;
        }

        toast({ title: "Account Created", description: "Your account has been successfully created!" });
        navigate.push('/welcome');
      } catch (err) {
        toast({ title: "Error", description: "Failed to create account", variant: "destructive" });
      }
    }
    submitformData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pharma-gray flex flex-col items-center justify-center p-4 mt-20">
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-center">
        {/*Form */}
        
        
        <Card className="w-full shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.svg" alt="Logo" width={200} height={200}
               />
            </div>
            <CardTitle className="text-2xl md:text-3xl text-pharma-blue">Create Your PharmaBridge Account</CardTitle>
            <CardDescription> 
              
                Join thousands of pharmacy professionals in their journey to U.S. licensure<br/>
              
              <span className='text-xs text-left mt-5'>Fields marked as <span className='text-red-600'>*</span>  are required</span>
              </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name <span className='text-red-600'>*</span></Label>
                <Input 
                  id="fullName" 
                  name="fullName"
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address <span className='text-red-600'>*</span></Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password <span className='text-red-600'>*</span></Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    name="password"
                    type={showPassword ? "text" : "password"} 
                    placeholder="Create a password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pr-10"
                    required
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" x2="22" y1="2" y2="22"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Password must be at least 8 characters. <br/>
                  Must contain at least one letter. <br/>
                  Must contain at least one digit.
                </p>
              </div>
              
              {/* <div className="space-y-2">
                <Label htmlFor="country">Country of Pharmacy Qualification</Label>
                <select 
                  id="country" 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="" disabled>Select your country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div> */}
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the <Link href="/terms" className="text-pharma-blue hover:underline">Terms of Service</Link> and <Link href="#" className="text-pharma-blue hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <Button
                type="submit"
                disabled={!formData.agreeTerms}
                className={`!formData.agreeTerms ? "opacity-50 cursor-not-allowed" : "" w-full bg-pharma-blue hover:bg-pharma-dark-blue`}
              >
                Create Account
              </Button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2"
                  disabled={true}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </Button>
                
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account? <Link href="/login" className="text-pharma-blue hover:underline">Log in</Link>
            </p>
          </CardFooter>
        </Card>
        
        {/* Right side - Testimonials */}
        {/* <div className="w-full md:w-2/5 hidden md:block">
          <div className="bg-pharma-light-blue rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-pharma-blue mb-4">
              Join Thousands of Satisfied Pharmacists
            </h3>
            
            <div className="space-y-6">
              <blockquote className="border-l-4 border-pharma-blue pl-4 italic">
                "PharmaBridge made my transition to practicing pharmacy in the US seamless. Their guidance through the FPGEE and licensing process was invaluable."
                <footer className="mt-2 font-medium text-pharma-blue">
                  — Dr. Sarah K., Pharmacist from India
                </footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-pharma-blue pl-4 italic">
                "I was overwhelmed by the US pharmacy licensing requirements until I found PharmaBridge. Their step-by-step approach made it manageable."
                <footer className="mt-2 font-medium text-pharma-blue">
                  — Michael T., Pharmacist from Philippines
                </footer>
              </blockquote>
              
              <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
                <div className="bg-white p-2 rounded-lg shadow">
                  <p className="text-xs font-bold">FPGEE</p>
                  <p className="text-xs">Success Rate</p>
                  <p className="text-lg font-bold text-pharma-blue">92%</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow">
                  <p className="text-xs font-bold">Trusted by</p>
                  <p className="text-lg font-bold text-pharma-blue">5000+</p>
                  <p className="text-xs">Pharmacists</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow">
                  <p className="text-xs font-bold">Countries</p>
                  <p className="text-lg font-bold text-pharma-blue">40+</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CreateAccount;
