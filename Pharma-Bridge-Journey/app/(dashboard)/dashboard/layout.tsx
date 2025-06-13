
import { CartProvider } from "@/context/CartContext";
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import { getUserProfile } from "@/lib/db";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";



export default async function RootLayout({ children }: { children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email || "guest";
  const userid = session?.user?.id;

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  const userProfile = await getUserProfile(userid);

  if (!userProfile) {
    return <div className="h-full flex justify-center align-center">User profile not found! You may want to check your internet connection.</div>;
  }

  return (
    <html lang="en">
      <body>
        <CartProvider userId={userId}>
          <DashboardNavbar userProfile={userProfile}/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
