// components/Footer.tsx
"use client"

import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-muted text-muted-foreground py-6 text-center text-sm bg-gradient-to-br from-orange-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      © {currentYear} C3Initiative. All rights reserved.
    </footer>
  )
}

export default Footer
