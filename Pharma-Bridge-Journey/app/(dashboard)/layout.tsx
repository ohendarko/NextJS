import type { Metadata } from "next";
import "../global.css";
import { AuthProvider } from "../context/auth-context";
import SessionWrapper from "../providers/SessionWrapper";





export const metadata: Metadata = {
  title: "Bridge to Pharmacy Success",
  description: "Are you a pharmacist from outside the US? Do you want to practice as a pharmacist in the US? This is your Guide to becoming a Pharmacist in the United States",
  
};

export default async function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {

  return (
 
      <SessionWrapper>
        <AuthProvider>  
            
              <main >
                {/* <DashboardNavbar userProfile={userProfile}/> */}
                {children}
              </main>
            
        </AuthProvider>
      </SessionWrapper>

  );
}
