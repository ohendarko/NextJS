// components/Footer.tsx
"use client"

import React from "react"
import { SlideInFromBottom } from "./animations"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <SlideInFromBottom>
      <footer className="border-t bg-muted text-muted-foreground py-6 text-sm bg-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Brand Row */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">C3 Initiative</h2>
            <p>Building a future where every woman is empowered with life-saving information.</p>
          </div>

          {/* Grid Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/#about" className="hover:text-pharma-light-blue transition-colors">About Us</a></li>
                <li><a href="/#features" className="hover:text-pharma-light-blue transition-colors">Features</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-pharma-light-blue transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-pharma-light-blue transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-pharma-light-blue transition-colors">Contact Us</a></li>
                <li><a href="/support" className="hover:text-pharma-light-blue transition-colors">Support</a></li>
              </ul>
            </div> */}
          </div>

          {/* Divider + Bottom Bar */}
          <div className="h-[1px] bg-gradient-to-br from-gray-900 via-orange-900 to-blue-800 mb-4" />
          <div className="text-center py-2">
            © {currentYear} C3Initiative. All rights reserved.
          </div>
        </div>
      </footer>
    </SlideInFromBottom>

  )
}

export default Footer
