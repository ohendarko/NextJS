
import { getUserProfile } from "@/lib/db";
import AdminDashboard from "./AdminDashboard";
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  // const {data: session, status} = useSession()
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  const userProfile = await getUserProfile(userId);

  if (!userProfile) {
    return <div>User profile not found</div>;
  }

  return <AdminDashboard userEmail={userEmail} />;
}
