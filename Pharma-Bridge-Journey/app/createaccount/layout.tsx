import type { Metadata } from "next";
import "../global.css"

import Navbar from "../../components/Navbar";


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
        <div>
          <div className="mt-20">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
