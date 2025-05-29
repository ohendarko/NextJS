
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Settings } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  advisor: string;
  medium?: "video" | "phone";
}

interface UpcomingAppointmentsProps {
  userProfile: any;
  limit?: number;
}

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({ userProfile, limit }) => {
  const isMobile = useIsMobile();
  
  // Mock appointments data - in a real app, this would come from your backend
  const appointments: Appointment[] = [
    {
      id: "appt-1",
      date: "June 2, 2025",
      time: "10:00 AM",
      type: "FPGEE Consultation",
      advisor: "Dr. Smith",
      medium: "video"
    },
    {
      id: "appt-2",
      date: "June 15, 2025",
      time: "2:00 PM",
      type: "Document Review",
      advisor: "Dr. Johnson",
      medium: "phone"
    },
    {
      id: "appt-3",
      date: "June 23, 2025",
      time: "11:30 AM",
      type: "TOEFL Speaking Practice",
      advisor: "Ms. Rodriguez",
      medium: "video"
    }
  ];

  // If limit is provided, show only that many appointments
  const displayAppointments = limit ? appointments.slice(0, limit) : appointments;

  const getMediumIcon = (medium?: "video" | "phone") => {
    switch (medium) {
      case "video":
        return <Video className="h-4 w-4" />;
      case "phone":
        return <Settings className="h-4 w-4" />; // Using settings as phone alternative
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {displayAppointments.length > 0 ? (
        <>
          {displayAppointments.map((appointment) => (
            <div key={appointment.id} className="border-l-4 border-pharma-blue pl-3 py-2">
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm md:text-base truncate">{appointment.type}</p>
                  <div className="flex items-center text-xs md:text-sm text-gray-600 mt-1">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{appointment.date}</span>
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600 mt-1">
                    <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{appointment.time}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 truncate">With {appointment.advisor}</p>
                </div>
                {appointment.medium && (
                  <div className="bg-gray-100 p-2 rounded-full ml-2 flex-shrink-0">
                    {getMediumIcon(appointment.medium)}
                  </div>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="outline" size={isMobile ? "sm" : "sm"} className="text-xs">Reschedule</Button>
                {appointment.medium === "video" && (
                  <Button size={isMobile ? "sm" : "sm"} className="text-xs">Join Meeting</Button>
                )}
              </div>
            </div>
          ))}
          
          {limit && appointments.length > limit && (
            <Button variant="ghost" className="w-full mt-2 text-xs md:text-sm">
              View All Appointments ({appointments.length})
            </Button>
          )}
        </>
      ) : (
        <div className="text-center py-4">
          <p className="text-gray-500 mb-4 text-sm">No upcoming appointments</p>
          <Button size={isMobile ? "sm" : "default"}>Schedule New Appointment</Button>
        </div>
      )}
      
      {!limit && (
        <Button className="w-full mt-4" size={isMobile ? "sm" : "default"}>
          Schedule New Appointment
        </Button>
      )}
    </div>
  );
};

export default UpcomingAppointments;
