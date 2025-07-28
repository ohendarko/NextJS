"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X, BookOpen } from "lucide-react"
import { useLearner } from "@/context/LearnerContext"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { data: session, status } = useSession()
  const { userProfile } = useLearner()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [status])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 500) // adjust this value based on your hero height
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled
      ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
      : "bg-transparent text-white"
    }`;

  const textClass = isScrolled
    ? "text-gray-700 dark:text-gray-300"
    : "text-white";


  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" title="C3 Initiative">
            <div className="w-8 h-8 gradient-orange-blue rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className={`${textClass} text-xl font-bold`}>
              C3 Initiative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${textClass} hover:text-orange-500 transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${textClass} hover:text-orange-500 transition-colors`}>
              About
            </Link>
            {isLoggedIn && (
              <Link
                href="/learn/cervical-cancer"
                className={`${textClass} hover:text-orange-500 transition-colors`}
              >
                Modules
              </Link>
            )}
            {isLoggedIn && userProfile?.admin && (
              <Link
                href="/instructor"
                className={`${textClass} hover:text-orange-500 transition-colors`}
              >
                Instructor
              </Link>
            )}
            <Link href="/contact" className={`${textClass} hover:text-orange-500 transition-colors`}>
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn && (
              <Link href="/learn">
                <Button variant="ghost" className={`${textClass} hover:text-orange-500 transition-colors`}>
                  Login
                </Button>
              </Link>
            )}
            <Link href="/signup">
              <Button className="gradient-orange-blue text-white hover-shadow-gradient">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`${textClass} hover:text-orange-500 transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`${textClass} hover:text-orange-500 transition-colors`}>
                About
              </Link>
              {isLoggedIn && (
                <Link
                  href="/learn/cervical-cancer"
                  className={`${textClass} hover:text-orange-500 transition-colors`}
                >
                  Modules
                </Link>
              )}
              {isLoggedIn && userProfile?.admin && (
                <Link
                  href="/instructor"
                  className={`${textClass} hover:text-orange-500 transition-colors`}
                >
                  Instructor
                </Link>
              )}
              <Link
                href="/contact"
                className={`${textClass} hover:text-orange-500 transition-colors`}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                {!isLoggedIn && (
                  <Link href="/learn">
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                )}
                <Link href="/signup">
                  <Button className="w-full gradient-orange-blue text-white">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
