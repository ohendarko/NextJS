'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/auth-context';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, Settings, User } from 'lucide-react';
// import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/hooks/use-toast";
import Cookies from 'js-cookie';



interface UserProfile {
  name: string;
  email: string;
  profileImage: string | null;
  [key: string]: any;
}

interface DashboardNavbarProps {
  userProfile: UserProfile;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ userProfile }) => {
  const [notifications, setNotifications] = useState([]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const checkAuthStatus = () => {
    const token = Cookies.get('token');
    if (typeof token !== 'undefined') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // console.log(isLoggedIn)
    }
  };

  // Run auth check when window is focused
  useEffect(() => {
    checkAuthStatus();
    window.addEventListener('focus', checkAuthStatus);
    return () => window.removeEventListener('focus', checkAuthStatus);
    
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("notifications")
    if (stored) {
      setNotifications(JSON.parse(stored))
    } else {
      fetch("/api/notifications")
        .then(res => res.json())
        .then(data => {
          setNotifications(data)
          localStorage.setItem("notifications", JSON.stringify(data))
        })
        .catch(err => console.error("Failed to fetch notifications", err))
    }
  }, [])

  const handleLogout = async () => {
    await signOut({
      redirect: false, // prevent automatic redirect so you can control it
    });

    // localStorage.removeItem(`pharmabridge_cart_${userId}`);

    toast({
      title: "Logged out",
      description: "You have been signed out.",
    });

    setIsLoggedIn(false); // update your local state if you track login status

    router.push("/login"); // redirect after sign out
  };

  const markAllRead = async () => {
    const updatedNotifications = notifications.map(notif => ({ ...notif, read: true }))
    setNotifications(updatedNotifications)
    localStorage.setItem("notifications", JSON.stringify(updatedNotifications))

    // Update each notification on the backend
    await Promise.all(
      notifications
        .filter(notif => !notif.read)
        .map(notif =>
          fetch(`/api/notifications/${notif.id}`, {
            method: "PUT",
          })
        )
    )
  }

  // const markNotificationAsRead = async (id: string) => {
  //   const res = await fetch(`/api/notifications/${id}`, {
  //     method: "PUT",
  //   })

  //   if (!res.ok) throw new Error("Failed to mark as read")
  //   const updated = await res.json()

  //   const stored = localStorage.getItem("notifications")
  //   if (stored) {
  //     const parsed = JSON.parse(stored)
  //     const updatedList = parsed.map((n: any) =>
  //       n.id === id ? { ...n, read: true } : n
  //     )
  //     localStorage.setItem("notifications", JSON.stringify(updatedList))
  //     return updatedList
  //   }

  //   return [updated] // fallback
  // }

  // const deleteNotification = async (id: string) => {
  //   const res = await fetch(`/api/notifications/${id}`, {
  //     method: "DELETE",
  //   })

  //   if (!res.ok) throw new Error("Failed to delete notification")

  //   const stored = localStorage.getItem("notifications")
  //   if (stored) {
  //     const parsed = JSON.parse(stored)
  //     const updatedList = parsed.filter((n: any) => n.id !== id)
  //     localStorage.setItem("notifications", JSON.stringify(updatedList))
  //     return updatedList
  //   }

  //   return [] // fallback
  // }



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lg md:text-xl font-bold text-pharma-blue truncate max-w-[120px] sm:max-w-none">
              <Image src="/logos.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            <Button variant="outline" onClick={handleLogout} className="border-pharma-blue text-pharma-blue hover:bg-pharma-light-blue">Log Out</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-1 md:p-2">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[260px] md:w-80">
                <DropdownMenuLabel className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Notifications</span>
                  <Button variant="ghost" size="sm" onClick={markAllRead} className="text-xs h-auto py-1 px-2">
                    Mark all read
                  </Button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <DropdownMenuItem key={notification.id} className={`cursor-pointer text-xs md:text-sm ${!notification.read ? 'font-medium bg-blue-50' : ''}`}>
                      <div className="flex flex-col py-1">
                        <span>{notification.message}</span>
                        <span className="text-xs text-gray-500">1 hour ago</span>
                      </div>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500">
                    No notifications
                  </div>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center">
                  <Link href="/dashboard/notifications" className="text-pharma-blue w-full text-center text-xs md:text-sm">
                    View all notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative flex items-center space-x-2">
                  <Avatar className="h-7 w-7 md:h-8 md:w-8">
                    <AvatarImage src={userProfile?.profileImage || ""} alt={userProfile?.name} />
                    <AvatarFallback>{userProfile?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline text-sm">{userProfile?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 md:w-56">
                <DropdownMenuLabel className="text-xs md:text-sm truncate">{userProfile?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-xs md:text-sm">
                  <Link href="/dashboard/profile">
                  <div className='flex'>
                    <Settings className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                    <span>Settings</span>
                  </div>
                  </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem className="cursor-pointer text-xs md:text-sm">
                  <Settings className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Settings</span>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-xs md:text-sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
