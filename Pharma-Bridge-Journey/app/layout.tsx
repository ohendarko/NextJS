import type { Metadata } from "next";
import "./global.css";
import { AuthProvider } from "./context/auth-context";
import SessionWrapper from "./providers/SessionWrapper";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

// import { SessionProvider } from "next-auth/react";

// import LogInNavbar from "@/components/LogInNavbar";



export const metadata: Metadata = {
  title: "Bridge to Pharmacy Success",
  description: "Are you a pharmacist from outside the US? Do you want to practice as a pharmacist in the US? This is your Guide to becoming a Pharmacist in the United States",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center">
      <body
        className={`antialiased max-w-7xl flex-column`}
      > 
        <SessionWrapper>
          <AuthProvider>
            {/* <ToastProvider> */}
              <div>
                <main >
                  {children}
                </main>
                <Toaster />
              </div>
            {/* </ToastProvider>   */}
          </AuthProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
