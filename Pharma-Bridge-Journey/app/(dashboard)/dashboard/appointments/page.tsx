'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import Spinner from '@/components/Spinner';

interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  advisor: string;
  status: "scheduled" | "completed" | "cancelled";
  medium: "video" | "phone" | "in-person";
  notes?: string;
}

const AppointmentCenter = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [newAppointment, setNewAppointment] = useState({
    userEmail: session.user.email,
    type: "",
    advisor: "",
    date: "",
    time: "",
    medium: "video" as "video" | "phone" | "in-person",
    notes: ""
  });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/appointments`);
        const data = await res.json();
        setAppointments(data);  
      } catch (error) {
        setIsLoading(false)
        console.error('Error loading appointments:', error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();

  }, [status, router]);
  
  // console.log(appointments);

  const isMobile = useIsMobile();

  const appointmentTypes = [
    "FPGEE Consultation",
    "Document Review", 
    "TOEFL Speaking Practice",
    "TOEFL Writing Review",
    "Visa Application Guidance",
    "Internship Planning",
    "General Academic Advising"
  ];

  const advisors = [
    "Dr. Smith",
    "Dr. Johnson", 
    "Ms. Rodriguez",
    "Dr. Patel",
    "Ms. Chen"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const handleScheduleAppointment = async (appointment: any) => {
    try {
      setIsLoading(true);

      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      });
  
      const data = await res.json();

      setAppointments((prev) => [...prev, data]);

      toast({
        title: 'Appointment successful',
        description: `Your Appointment for ${appointment.date} has been successfully scheduled`,
        duration: 7000,
      });

    } catch (error) {

      setIsLoading(false)
      toast({
        title: 'Appointment Failed',
        description: `Your Appointment for ${appointment.date} failed`,
        variant: "destructive",
      });
      console.error('Error Scheduling Appointment', error)

    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredAppointments = appointments.filter(apt => {
    if (!selectedDate) return true;
    return apt.date === selectedDate.toISOString().split('T')[0];
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* <DashboardNavbar userProfile={userProfile} /> */}
      <div className="container mx-auto px-4 py-6">
         <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-pharma-blue">Appointment Center</h1>
          <p className="text-gray-600 mt-2">Schedule and manage your appointments with our advisors</p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="schedule">Schedule New</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Your Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {isLoading ? 
                    <div>
                      <Spinner loading={isLoading}/>
                    </div> : 
                    (appointments.length === 0 ? 'You have no Appointments' : appointments.filter(apt => apt.status === "scheduled").map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.type}</h3>
                            <p className="text-gray-600">with {appointment.advisor}</p>
                          </div>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {appointment.time}
                          </div>
                          <Badge variant="outline">{appointment.medium}</Badge>
                        </div>

                        {appointment.notes && (
                          <p className="text-sm text-gray-700 mb-3">{appointment.notes}</p>
                        )}

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="outline" size="sm">Cancel</Button>
                          {appointment.medium === "video" && (
                            <Button size="sm">Join Meeting</Button>
                          )}
                        </div>
                      </div>
                    )))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  {selectedDate && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">
                        Appointments on {selectedDate.toDateString()}
                      </h4>
                      {filteredAppointments.length > 0 ? (
                        <div className="space-y-2">
                          {filteredAppointments.map(apt => (
                            <div key={apt.id} className="text-sm p-2 bg-blue-50 rounded">
                              <div className="font-medium">{apt.time}</div>
                              <div>{apt.type}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No appointments scheduled</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule New Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="appointment-type">Appointment Type *</Label>
                    <Select
                      value={newAppointment.type}
                      onValueChange={(value) => {
                          setNewAppointment({...newAppointment, type: value})
                        }
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="advisor">Preferred Advisor *</Label>
                    <Select value={newAppointment.advisor} onValueChange={(value) => setNewAppointment({...newAppointment, advisor: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select advisor" />
                      </SelectTrigger>
                      <SelectContent>
                        {advisors.map(advisor => (
                          <SelectItem key={advisor} value={advisor}>{advisor}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input 
                      type="date" 
                      value={newAppointment.date}
                      onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Time *</Label>
                    <Select value={newAppointment.time} onValueChange={(value) => setNewAppointment({...newAppointment, time: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="medium">Meeting Type</Label>
                    <Select value={newAppointment.medium} onValueChange={(value: "video" | "phone" | "in-person") => setNewAppointment({...newAppointment, medium: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Call</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="in-person">In-Person</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    placeholder="Any specific topics you'd like to discuss or questions you have..."
                    value={newAppointment.notes}
                    onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                  />
                </div>

                <Button onClick={()=> handleScheduleAppointment(newAppointment)} className="w-full" disabled={isLoading}>
                  {isLoading ? 'Scheduling' : "Schedule Appointment"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appointment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.filter(apt => apt.status === "completed" || apt.status === "cancelled").map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">{appointment.type}</h3>
                          <p className="text-gray-600">with {appointment.advisor}</p>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span>{appointment.date}</span>
                        <span>{appointment.time}</span>
                        <Badge variant="outline">{appointment.medium}</Badge>
                      </div>

                      {appointment.notes && (
                        <p className="text-sm text-gray-700">{appointment.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppointmentCenter;
