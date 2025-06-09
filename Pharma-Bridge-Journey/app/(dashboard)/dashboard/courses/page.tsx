
import { getUserProfile } from "@/lib/db";
import VideoCourses from "./Course";
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";

export default async function DashboardPage() {
  // const {data: session, status} = useSession()
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return <div>Not authenticated</div>;
  }

  const userProfile = await getUserProfile(userId);

  if (!userProfile) {
    return <div>User profile not found</div>;
  }

  return <VideoCourses userProfile={userProfile} />;
}
