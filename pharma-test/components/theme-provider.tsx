"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure theme transitions only happen after hydration to avoid layout shift
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider {...props}>
      <style jsx global>{`
        html {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
      `}</style>
      <div className={mounted ? "animate-fade-in" : "opacity-0"}>{children}</div>
    </NextThemesProvider>
  )
}
