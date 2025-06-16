
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pharma-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PharmaBridge</h2>
            <p className="mb-4">Guiding international pharmacists on their journey to U.S. licensure with expertise and empathy.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-pharma-light-blue transition-colors">Our Services</a></li>
              <li><a href="/#process" className="hover:text-pharma-light-blue transition-colors">Our Process</a></li>
              <li><a href="/#about" className="hover:text-pharma-light-blue transition-colors">About Us</a></li>
              <li><a href="/#testimonials" className="hover:text-pharma-light-blue transition-colors">Testimonials</a></li>
              <li><a href="/#faq" className="hover:text-pharma-light-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-pharma-light-blue transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-pharma-light-blue transition-colors">Terms of Service</a></li>
              <li><a href="/privacy-policy/#cookies" className="hover:text-pharma-light-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-center text-sm text-white/70">
          <p>© {currentYear} PharmaBridge Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
