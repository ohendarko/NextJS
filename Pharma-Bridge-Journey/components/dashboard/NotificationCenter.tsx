import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Calendar, FileText, Clock } from 'lucide-react';
import Link from 'next/link';
// import { useIsMobile } from "@/hooks/use-mobile";

interface NotificationCenterProps {
  userProfile: any;
  limit?: number;
}

interface Notification {
  id: string;
  type: "reminder" | "update" | "alert" | "event";
  title: string;
  message: string;
  date: string;
  read: boolean;
  action?: {
    label: string;
    url: string;
  }
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ userProfile, limit }) => {
  // const isMobile = useIsMobile();
  
  // Mock notifications data - in a real app, this would come from your backend
  const notifications: Notification[] = [
    {
      id: "notif-1",
      type: "reminder",
      title: "FPGEE Application Deadline",
      message: "Your FPGEE application deadline is in 2 weeks. Make sure to complete all required documents.",
      date: "1 hour ago",
      read: false,
      action: {
        label: "View Documents",
        url: "/dashboard/documents"
      }
    },
    {
      id: "notif-2",
      type: "event",
      title: "Upcoming Study Session",
      message: "Your next FPGEE study session with Dr. Smith is scheduled for tomorrow at 10:00 AM.",
      date: "3 hours ago",
      read: false,
      action: {
        label: "Join Session",
        url: "/dashboard/sessions"
      }
    },
    {
      id: "notif-3",
      type: "update",
      title: "Document Verified",
      message: "Your pharmacy degree has been verified. You can now proceed with the next step in your application.",
      date: "1 day ago",
      read: true,
      action: {
        label: "View Roadmap",
        url: "/dashboard/roadmap"
      }
    },
    {
      id: "notif-4",
      type: "alert",
      title: "Payment Due",
      message: "Your monthly payment for the FPGEE preparation program is due in 3 days.",
      date: "2 days ago",
      read: true,
      action: {
        label: "Make Payment",
        url: "/dashboard/billing"
      }
    }
  ];
  
  // If limit is provided, show only that many notifications
  const displayNotifications = limit ? notifications.slice(0, limit) : notifications;
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return <Clock className="h-4 w-4 md:h-5 md:w-5 text-amber-500" />;
      case "event":
        return <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-500" />;
      case "update":
        return <FileText className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />;
      case "alert":
        return <Bell className="h-4 w-4 md:h-5 md:w-5 text-red-500" />;
      default:
        return <Bell className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-3 md:space-y-4">
      {displayNotifications.length > 0 ? (
        <>
          {displayNotifications.map(notification => (
            <div 
              key={notification.id} 
              className={`p-3 md:p-4 border rounded-lg ${!notification.read ? 'border-l-4 border-l-pharma-blue' : ''}`}
            >
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="mt-1 flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start flex-wrap gap-1">
                    <h4 className={`font-medium text-sm md:text-base truncate ${!notification.read ? 'text-pharma-blue' : ''}`}>
                      {notification.title}
                    </h4>
                    <span className="text-xs text-gray-500 flex-shrink-0">{notification.date}</span>
                  </div>
                  <p className="text-xs md:text-sm mt-1 line-clamp-2">{notification.message}</p>
                  
                  {notification.action && (
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-pharma-blue mt-1 md:mt-2 text-xs md:text-sm"
                      asChild
                    >
                      <a href={notification.action.url}>{notification.action.label}</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {limit && notifications.length > limit && (
            <Link href="/dashboard/notifications">
              <Button variant="ghost" className="w-full text-xs md:text-sm">
                View All Notifications ({notifications.length})
              </Button>
            </Link>
          )}
        </>
      ) : (
        <div className="text-center py-6 md:py-8">
          <Bell className="h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-2 md:mb-3" />
          <p className="text-gray-500 text-sm md:text-base">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
