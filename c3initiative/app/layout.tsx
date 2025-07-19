import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Toaster } from "@/components/ui/toaster"
import Head from "next/head"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "C3 Initiative - Smart Cervical Cancer Education",
  description: "C3 Initiative's e-learning platform for cervical cancer education and awareness",
  verification: {
    google: "zGMyfhH9SW9Q0rGib_uc7PpwuyuXaN6ZDu607DqwVyE",
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Head>
        <meta name="google-site-verification" content="zGMyfhH9SW9Q0rGib_uc7PpwuyuXaN6ZDu607DqwVyE" />
      </Head> */}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThemeToggle />
          <main>
            {children}
            <Toaster />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
