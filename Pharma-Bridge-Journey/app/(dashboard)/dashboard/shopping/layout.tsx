
import { getUserProfile } from "@/lib/db";
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
// import { useSession } from "next-auth/react";




export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  const userProfile = await getUserProfile(userId);

  if (!userProfile) {
    return <div>User profile not found</div>;
  }
  return (

    <>
      <DashboardNavbar userProfile={userProfile}/>
      <main>
        {children}
      </main>
    </>

  );
}
