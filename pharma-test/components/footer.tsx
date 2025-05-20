import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gradient-pharma">PharmaBridge</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner from overseas to U.S. pharmacy success.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-pharma">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pharma">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pharma">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pharma">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-pharma">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-pharma">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-pharma">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coach" className="text-muted-foreground hover:text-pharma">
                  Meet Your Coach
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-pharma">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#credential-evaluation" className="text-muted-foreground hover:text-pharma">
                  Credential Evaluation
                </Link>
              </li>
              <li>
                <Link href="/services#fpgee-prep" className="text-muted-foreground hover:text-pharma">
                  FPGEE Preparation
                </Link>
              </li>
              <li>
                <Link href="/services#toefl" className="text-muted-foreground hover:text-pharma">
                  TOEFL Preparation
                </Link>
              </li>
              <li>
                <Link href="/services#internship" className="text-muted-foreground hover:text-pharma">
                  Internship Placement
                </Link>
              </li>
              <li>
                <Link href="/services#full-licensure" className="text-muted-foreground hover:text-pharma">
                  Full Licensure Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-pharma" />
                <span className="text-muted-foreground">+1 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-pharma" />
                <span className="text-muted-foreground">info@pharmabridgeconsulting.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-pharma" />
                <span className="text-muted-foreground">New Jersey, United States</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} PharmaBridge Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
