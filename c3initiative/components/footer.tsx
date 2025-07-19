// components/Footer.tsx
"use client"

import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-muted text-muted-foreground py-6 text-center text-sm">
      © {currentYear} C3Initiative. All rights reserved.
    </footer>
  )
}

export default Footer
