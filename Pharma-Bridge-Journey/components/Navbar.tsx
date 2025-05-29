"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from "../hooks/use-toast";
import { useAuth } from '@/app/context/auth-context';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Check if auth token exists in cookies
  const checkAuthStatus = () => {
        const token = Cookies.get('token');
    if (typeof token !== 'undefined') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  // Scroll effect for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Run auth check when window is focused
  useEffect(() => {
    checkAuthStatus();
    window.addEventListener('focus', checkAuthStatus);
    return () => window.removeEventListener('focus', checkAuthStatus);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if user is alreafy logged in and there's a session
  const { data: session, status } = useSession();
  const checkLoggedInStatus = () => {
    if (status === 'authenticated' && session) {
      setIsLoggedIn(true);
      router.push('/dashboard');
    } else {
      setIsLoggedIn(false);
      router.push('/login');
    }
  }

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
    });
  
    if (res.ok) {
      toast({ title: "Logged out", description: "You have been signed out." });
      Cookies.remove('token');
      setIsLoggedIn(false); // Immediately update state
      router.push('/login');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/whowehelp" className="text-foreground hover:text-pharma-blue font-medium">Who We Help</Link>
            <Link href="/#services" className="text-foreground hover:text-pharma-blue font-medium">Services</Link>
            <Link href="/pricing" className="text-foreground hover:text-pharma-blue font-medium">Pricing</Link>
            <Link href="/#process" className="text-foreground hover:text-pharma-blue font-medium">Process</Link>
            <Link href="/#about" className="text-foreground hover:text-pharma-blue font-medium">About</Link>
            <div className="flex space-x-4">
            
            <Button variant="outline" type='button' onClick={checkLoggedInStatus} className="border-pharma-blue text-pharma-blue hover:bg-pharma-light-blue">Log In</Button>
            
            <Link href="/createaccount">
              <Button className="bg-pharma-blue hover:bg-pharma-dark-blue text-white">Create Account</Button>
            </Link>
            </div>
           
            {/* <Button variant="outline" onClick={handleLogout} className="ml-4">Log Out</Button> */}
            
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="#services" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Services</Link>
              <Link href="/pricing" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Pricing</Link>
              <Link href="#process" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Process</Link>
              <Link href="#about" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>About</Link>
              <Link href="/welcome" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Welcome</Link>
              <Link href="/dashboard/onboarding" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Onboarding</Link>
              <Link href="/dashboard" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Dashboard</Link>
              
              {!isLoggedIn ? (
                <Link href="/createaccount">
                  <Button variant="outline" className="ml-4">Create Account</Button>
                </Link>
                ) : (
                  <Button variant="outline" onClick={handleLogout} className="ml-4">Log Out</Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
