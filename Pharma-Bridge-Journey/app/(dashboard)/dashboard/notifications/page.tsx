'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, FileText, Clock, ArrowLeft } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Link from 'next/link';

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  date: string;
  time: string;
  read: boolean;
  priority: "high" | "medium" | "low";
  action?: {
    label: string;
    url: string;
  }
}


const Notifications = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("all");
  
  const [notifications, setNotifications] = useState<Notification[]>([
    // {
    //   id: "notif-1",
    //   type: "reminder",
    //   title: "FPGEE Application Deadline Approaching",
    //   message: "Your FPGEE application deadline is in 2 weeks. Make sure to complete all required documents including your pharmacy degree verification and English proficiency scores.",
    //   date: "June 9, 2025",
    //   time: "1 hour ago",
    //   read: false,
    //   priority: "high",
    //   action: {
    //     label: "View Documents",
    //     url: "/dashboard/documents"
    //   }
    // },
    // {
    //   id: "notif-2",
    //   type: "event",
    //   title: "Upcoming Study Session",
    //   message: "Your next FPGEE study session with Dr. Smith is scheduled for tomorrow at 10:00 AM. Please review the materials beforehand.",
    //   date: "June 9, 2025",
    //   time: "3 hours ago",
    //   read: false,
    //   priority: "medium",
    //   action: {
    //     label: "Join Session",
    //     url: "/dashboard/appointments"
    //   }
    // },
    // {
    //   id: "notif-3",
    //   type: "update",
    //   title: "Document Verification Complete",
    //   message: "Your pharmacy degree has been successfully verified by our team. You can now proceed with the next step in your application process.",
    //   date: "June 8, 2025",
    //   time: "1 day ago",
    //   read: true,
    //   priority: "medium",
    //   action: {
    //     label: "View Roadmap",
    //     url: "/dashboard/roadmap"
    //   }
    // },
    // {
    //   id: "notif-4",
    //   type: "alert",
    //   title: "Payment Due Soon",
    //   message: "Your monthly payment for the FPGEE preparation program is due in 3 days. Please update your payment method if needed.",
    //   date: "June 7, 2025",
    //   time: "2 days ago",
    //   read: true,
    //   priority: "high",
    //   action: {
    //     label: "Make Payment",
    //     url: "/dashboard/billing"
    //   }
    // },
    // {
    //   id: "notif-5",
    //   type: "update",
    //   title: "New Study Materials Available",
    //   message: "Fresh practice questions and video lessons have been added to your FPGEE preparation course. Check them out now!",
    //   date: "June 6, 2025",
    //   time: "3 days ago",
    //   read: true,
    //   priority: "low",
    //   action: {
    //     label: "View Materials",
    //     url: "/dashboard/video-courses"
    //   }
    // },
    // {
    //   id: "notif-6",
    //   type: "event",
    //   title: "TOEFL Speaking Lab Session",
    //   message: "Don't forget about your TOEFL speaking practice session scheduled for this Friday at 2:00 PM.",
    //   date: "June 5, 2025",
    //   time: "4 days ago",
    //   read: true,
    //   priority: "medium",
    //   action: {
    //     label: "View Session",
    //     url: "/dashboard/speaking-labs"
    //   }
    // }
  ]);

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
  

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "event":
        return <Calendar className="h-5 w-5 text-green-500" />;
      case "update":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "alert":
        return <Bell className="h-5 w-5 text-red-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };



  const markAllAsRead = async () => {
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

  const markAsRead = async (id: string) => {
    const res = await fetch(`/api/notifications/${id}`, {
      method: "PUT",
    })

    if (!res.ok) throw new Error("Failed to mark as read")
    const updated = await res.json()

    const stored = localStorage.getItem("notifications")
    if (stored) {
      const parsed = JSON.parse(stored)
      const updatedList = parsed.map((n: any) =>
        n.id === id ? { ...n, read: true } : n
      )
      localStorage.setItem("notifications", JSON.stringify(updatedList))
      return updatedList
    }

    return [updated] // fallback
  }

  const deleteNotification = async (id: string) => {
    const res = await fetch(`/api/notifications/${id}`, {
      method: "DELETE",
    })

    if (!res.ok) throw new Error("Failed to delete notification")

    const stored = localStorage.getItem("notifications")
    if (stored) {
      const parsed = JSON.parse(stored)
      const updatedList = parsed.filter((n: any) => n.id !== id)
      localStorage.setItem("notifications", JSON.stringify(updatedList))
      return updatedList
    }

    return [] // fallback
  }

  const filteredNotifications = notifications.filter(notif => {
    switch (activeTab) {
      case "unread":
        return !notif.read;
      case "important":
        return notif.priority === "high";
      default:
        return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="pt-20 mt-20">
        <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        <div className="container mx-auto px-4 py-6 md:px-6 md:py-10">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-pharma-blue">Notifications</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Stay updated with important information about your journey
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  onClick={markAllAsRead}
                  disabled={unreadCount === 0}
                  size={isMobile ? "sm" : "default"}
                >
                  Mark All Read
                </Button>
                <Badge variant="secondary" className="px-3 py-1">
                  {unreadCount} Unread
                </Badge>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Your Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                  <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                  <TabsTrigger value="important">Important</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab} className="mt-6">
                  <div className="space-y-4">
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`p-4 border rounded-lg transition-all hover:shadow-sm ${
                            !notification.read ? 'border-l-4 border-l-pharma-blue bg-blue-50' : 'bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start space-x-3 flex-1 min-w-0">
                              <div className="mt-1 flex-shrink-0">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                  <h4 className={`font-medium text-base truncate flex-1 ${
                                    !notification.read ? 'text-pharma-blue' : 'text-gray-900'
                                  }`}>
                                    {notification.title}
                                  </h4>
                                  <div className="flex items-center gap-2 flex-shrink-0">
                                    <Badge className={getPriorityColor(notification.priority)}>
                                      {notification.priority}
                                    </Badge>
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-pharma-blue rounded-full"></div>
                                    )}
                                  </div>
                                </div>
                                
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                  {notification.message}
                                </p>
                                
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                  <span className="text-xs text-gray-500">
                                    {notification.date} • {notification.time}
                                  </span>
                                  
                                  <div className="flex gap-2">
                                    {notification.action && (
                                      <Button 
                                        variant="link" 
                                        className="p-0 h-auto text-pharma-blue text-sm"
                                        asChild
                                      >
                                        <a href={notification.action.url}>
                                          {notification.action.label}
                                        </a>
                                      </Button>
                                    )}
                                    {!notification.read && (
                                      <Button 
                                        variant="ghost" 
                                        size="sm"
                                        onClick={() => markAsRead(notification.id)}
                                        className="text-xs h-auto py-1 px-2"
                                      >
                                        Mark Read
                                      </Button>
                                    )}
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => deleteNotification(notification.id)}
                                      className="text-xs h-auto py-1 px-2 text-red-600 hover:text-red-800"
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          No notifications found
                        </h3>
                        <p className="text-gray-500">
                          {activeTab === "unread" 
                            ? "You're all caught up! No unread notifications." 
                            : "Check back later for new updates."}
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
