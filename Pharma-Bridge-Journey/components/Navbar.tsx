'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useIsMobile } from "@/hooks/use-mobile";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-pharma-blue truncate max-w-[200px] sm:max-w-none`}>
              <Image src='/logos.png' height={160} width={160} alt='pharmabridge logo' className='px-0 py-3' />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            
            <Link href="/whowehelp" className="text-foreground hover:text-pharma-blue font-medium">Who We Help</Link>
            <Link href="/pricing" className="text-foreground hover:text-pharma-blue font-medium">Pricing</Link>
            <Link href="/contact" className="text-foreground hover:text-pharma-blue font-medium">Contact</Link>
            
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-pharma-blue text-pharma-blue hover:bg-pharma-light-blue">Log In</Button>
              </Link>
              <Link href="/createaccount">
                <Button className="bg-pharma-blue hover:bg-pharma-dark-blue text-white">Create Account</Button>
              </Link>
            </div>
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
          <div className="md:hidden absolute text-center top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-4">
              
              <Link href="/whowehelp" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Who We Help</Link>
              <Link href="/pricing" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Pricing</Link>
              <Link href="/contact" className="text-foreground hover:text-pharma-blue font-medium" onClick={toggleMenu}>Contact</Link>
              
              <div className="flex flex-col space-y-3">
                <Link href="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-pharma-blue text-pharma-blue hover:bg-pharma-light-blue">Log In</Button>
                </Link>
                <Link href="/createaccount" onClick={toggleMenu}>
                  <Button className="w-full bg-pharma-blue hover:bg-pharma-dark-blue text-white">Create Account</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
