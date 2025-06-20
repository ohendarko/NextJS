import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Calendar, FileText, Clock, ShoppingBag, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
// import { useIsMobile } from "@/hooks/use-mobile";

interface QuickActionsProps {
  userProfile: any;
  limit?: number;
}

interface QuickActions {
  id: string;
  type: string;
  title: string;
  icon: React.ReactNode;
  action?: {
    label: string;
    url: string;
  }
}

const QuickActions: React.FC<QuickActionsProps> = ({ userProfile, limit }) => {
  // const isMobile = useIsMobile();
  

  const quickactions: QuickActions[] = [
    {
      id: "quick-1",
      type: "shop",
      title: "Shopping",
      icon: <ShoppingBag className="h-6 w-6 text-pharma-blue"/>,
      action: {
        label: "Go To Shop",
        url: "/dashboard/shopping"
      }
    },
    // {
    //   id: "notif-2",
    //   type: "event",
    //   title: "Upcoming Study Session",
    //   action: {
    //     label: "Join Session",
    //     url: "/dashboard/sessions"
    //   }
    // },
    // {
    //   id: "notif-3",
    //   type: "update",
    //   title: "Document Verified",
    //   action: {
    //     label: "View Roadmap",
    //     url: "/dashboard/roadmap"
    //   }
    // },
    // {
    //   id: "notif-4",
    //   type: "alert",
    //   title: "Payment Due",
    //   action: {
    //     label: "Make Payment",
    //     url: "/dashboard/billing"
    //   }
    // }
  ];
  
  // If limit is provided, show only that many quickactions
  const displayQuickActions = limit ? quickactions.slice(0, limit) : quickactions;
  
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
      {displayQuickActions.map(action => (
        <div className='flex' key={action.id}>
          <div>
            <Link href={action.action.url}>
              <Card className="h-full cursor-pointer hover:shadow-md transition-shadow justify-center items-center">
                <CardContent className="flex flex-col gap-2 items-center justify-center space-x-4 p-3">
                    <div className='flex px-4 py-4 gap-2'>
                      {action.icon}
                      {action.title}
                    </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      ))}
          
          
    {/* {limit && quickactions.length > limit && (
      <Link href="/dashboard/notifications">
        <Button variant="ghost" className="w-full text-xs md:text-sm">
          View All Notifications
        </Button>
      </Link>
    )} */}
        
      
    </div>
  );
};

export default QuickActions;
