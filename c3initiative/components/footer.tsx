// components/Footer.tsx
"use client"

import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted text-muted-foreground py-6 text-center text-sm bg-gradient-to-br from-gray-900 via-orange-800 to-blue-700 flex flex-col justify-center items-center text-white">
      <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl">
        {/* Brand Column */}
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-4">C3 Initiative</h2>
          <p className="mb-4">Building a future where every woman is empowered with life-saving information.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/#about" className="hover:text-pharma-light-blue transition-colors">About Us</a></li>
            {/* <li><a href="/#testimonials" className="hover:text-pharma-light-blue transition-colors">Testimonials</a></li> */}
            <li><a href="/#features" className="hover:text-pharma-light-blue transition-colors">Features</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-pharma-light-blue transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-pharma-light-blue transition-colors">Terms of Service</a></li>
            {/* <li><a href="/privacy-policy/#cookies" className="hover:text-pharma-light-blue transition-colors">Cookie Policy</a></li> */}
          </ul>
        </div>
        
      </div>
      <div className="w-full">
        {/* Fake top border with gradient */}
        <div className="h-[1px] bg-gradient-to-br from-gray-900 via-orange-900 to-blue-800"></div>

        {/* Footer content */}
        <div className="flex w-full justify-center py-4">
          © {currentYear} C3Initiative. All rights reserved.
        </div>
      </div>

    </footer>
  )
}

export default Footer
