"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from "../hooks/use-toast";
import { useAuth } from '@/app/context/auth-context';
import { signOut } from "next-auth/react";

const LogInNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Check if auth token exists in cookies
  const checkAuthStatus = () => {
        const token = Cookies.get('token');
    if (typeof token !== 'undefined') {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
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

  const handleLogout = async () => {
    await signOut({
      redirect: false, // prevent automatic redirect so you can control it
    });

    toast({
      title: "Logged out",
      description: "You have been signed out.",
    });

    setIsLoggedIn(false); // update your local state if you track login status

    router.push("/login"); // redirect after sign out
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
            <a href="#services" className="text-foreground hover:text-pharma-blue font-medium">Services</a>
            <Link href="/pricing" className="text-foreground hover:text-pharma-blue font-medium">Pricing</Link>
            <a href="/#process" className="text-foreground hover:text-pharma-blue font-medium">Process</a>
            <a href="/#about" className="text-foreground hover:text-pharma-blue font-medium">About</a>
            <Link href="/dashboard" className="text-foreground hover:text-pharma-blue font-medium">Dashboard</Link>
            <Link href="/dashboard/profile" className="text-foreground hover:text-pharma-blue font-medium">Profile</Link>
            <Button variant="outline" onClick={handleLogout} className="border-pharma-blue text-pharma-blue hover:bg-pharma-light-blue">Log Out</Button>
             
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
              <Link href="/#process" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Process</Link>
              <Link href="/#about" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>About</Link>
              <Link href="/dashboard" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Dashboard</Link> 
              <Link href="/profile" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Profile</Link> 
              <Button variant="outline" onClick={handleLogout} className="ml-4">Log Out</Button>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LogInNavbar;
