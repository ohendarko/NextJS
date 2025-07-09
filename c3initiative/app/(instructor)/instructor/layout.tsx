import '@/app/globals.css'
import { AdminProvider } from "@/context/AdminContext";

export default async function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <AdminProvider>  
          <main >
            {/* <DashboardNavbar userProfile={userProfile}/> */}
            {children}
          </main>  
  </AdminProvider>
  );
}
