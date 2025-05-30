'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileSection from '@/components/dashboard/ProfileSection';
import ModulesSection from '@/components/dashboard/ModuleSection';
import UpcomingAppointments from '@/components/dashboard/UpcomingAppointments';
import DocumentCenter from '@/components/dashboard/DocumentCenter';
import RoadmapTracker from '@/components/dashboard/RoadmapTracker';
import MessagingCenter from '@/components/dashboard/MessagingCenter';
import NotificationCenter from '@/components/dashboard/NotificationCenter';
import BillingSupport from '@/components/dashboard/BillingSupport';
import ServiceUpgrade from '@/components/dashboard/ServiceUpgrade';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { useIsMobile } from "@/hooks/use-mobile";
import { User, FileText, Calendar, MessageSquare, Settings, Upload, Menu, UserPlus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { Alert } from '@/components/ui/alert';
import { stat } from 'fs';
import Link from 'next/link';

// Mock data - In a real app, this would come from your backend
const userData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  country: "India",
  degree: "Bachelor of Pharmacy",
  graduationYear: 2020,
  profileImage: null,
  activeServices: ['fpgee_prep', 'toefl_prep'], // Tags for active services
  documents: {
    license: { uploaded: true, verificationStatus: 'verified' },
    degree: { uploaded: true, verificationStatus: 'pending' },
    idProof: { uploaded: false, verificationStatus: '' }
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [userData, setUserData] = useState({
    name: "User",
    email: "jane.doe@example.com",
    country: "India",
    degree: "Bachelor of Pharmacy",
    graduationYear: 2020,
    profileImage: null,
    hasCompletedOnboarding: false, // Flag to check if onboarding is complete
    activeServices: ['fpgee_prep', 'toefl_prep'], // Tags for active services
    documents: {
      license: { uploaded: true, verificationStatus: 'verified' },
      degree: { uploaded: true, verificationStatus: 'pending' },
      idProof: { uploaded: false, verificationStatus: null }
    }
  });
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(userData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const router = useRouter()


  
  
  // In a real app, this would fetch user data from your backend
  useEffect(() => {
  const fetchUser = async () => {
    try {
      setIsLoading(true);

      if (status === 'unauthenticated') {
        alert('You must be logged in to access this page.');
        router.push('/login');
        return;
      }

      if (status === 'loading') return; // Wait until session resolves

      const res = await fetch('/api/user');
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch user');

      setUserData(data);
      setUserProfile(data);
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchUser();
}, [status, router]);

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Calendar },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'roadmap', label: 'Roadmap', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'billing', label: 'Billing & Support', icon: Settings },
    { id: 'upgrade', label: 'Upgrade Services', icon: Upload }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Your Active Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ModulesSection userProfile={userProfile} />
                </CardContent>
              </Card>
              
              { userProfile.hasCompletedOnboarding === false ? <div></div> :
                (<Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <NotificationCenter userProfile={userProfile} limit={3} />
                </CardContent>
              </Card>)}
            </div>
            
            { userProfile.hasCompletedOnboarding === false ? <div></div> :
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RoadmapTracker userProfile={userProfile} compact={true} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <UpcomingAppointments userProfile={userProfile} limit={2} />
                  </CardContent>
                </Card>
              </div>}
          </div>
        );
      case 'profile':
        return (
          
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfileSection userProfile={userProfile} setUserProfile={setUserProfile} />
            </CardContent>
          </Card>
        );
      case 'documents':
        return (
          userProfile.hasCompletedOnboarding === false ? 
          (
            <Card>
            <CardHeader>
              <CardTitle>Document Center</CardTitle>
            </CardHeader>
            <CardContent>
              No Documents available yet. Please complete your onboarding to access the Document Center.
            </CardContent>
          </Card>
          ) :
          (<Card>
            <CardHeader>
              <CardTitle>Document Center</CardTitle>
            </CardHeader>
            <CardContent>
              <DocumentCenter userProfile={userProfile} />
            </CardContent>
          </Card>)
        );
      case 'roadmap':
        return (
          userProfile.hasCompletedOnboarding === false ? 
          (
          <Card>
            <CardHeader>
              <CardTitle>Your Personalized Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You have no selected packages. Please complete your onboarding or check out our packages.
              </p><br/>
              <Button asChild>
              <Link href="/#services">View Service Packages</Link>
            </Button>
            </CardContent>
          </Card>
          ) :
          (<Card>
            <CardHeader>
              <CardTitle>Your Personalized Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <RoadmapTracker userProfile={userProfile} compact={false} />
            </CardContent>
          </Card>)
        );
      case 'messages':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Messaging Center</CardTitle>
            </CardHeader>
            <CardContent>
              <MessagingCenter userProfile={userProfile} />
            </CardContent>
          </Card>
        );
      case 'billing':
        return (
          userProfile.hasCompletedOnboarding === false ? 
          (
          <Card>
            <CardHeader>
              <CardTitle>Billing and Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You have no selected packages. Please complete your onboarding or check out our packages.
              </p><br/>
              <Button asChild>
              <Link href="/#services">View Service Packages</Link>
            </Button>
            </CardContent>
          </Card>
          ) :
          (<Card>
            <CardHeader>
              <CardTitle>Billing & Support</CardTitle>
            </CardHeader>
            <CardContent>
              <BillingSupport userProfile={userProfile} />
            </CardContent>
          </Card>)
        );
      case 'upgrade':
        return (
          userProfile.hasCompletedOnboarding === false ? 
          (
          <Card>
            <CardHeader>
              <CardTitle>Service Upgrade Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You have no selected packages. Please complete your onboarding or check out our packages.
              </p><br/>
              <Button asChild>
              <Link href="/#services">View Service Packages</Link>
            </Button>
            </CardContent>
          </Card>
          ) :
          (<Card>
            <CardHeader>
              <CardTitle>Service Upgrade Center</CardTitle>
            </CardHeader>
            <CardContent>
              <ServiceUpgrade userProfile={userProfile} />
            </CardContent>
          </Card>)
        );
      default:
        return null;
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-50">
      {(status === "unauthenticated" || !session || isLoading) ?
        (<div className="flex justify-center items-center h-screen">
        < Spinner loading={isLoading} />
        </div>) :
        <div>
      
      <DashboardNavbar userProfile={userProfile} />
      
      <div className="flex pt-20">
        {/* Mobile Menu Button - Better positioned and styled */}
        {isMobile && (
          <Button
            variant="outline"
            size="icon"
            className="fixed top-24 left-4 z-40 md:hidden bg-white shadow-lg border-pharma-blue hover:bg-pharma-blue hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* Sidebar Navigation */}
        <div className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out pt-20
          ${isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          md:relative md:translate-x-0 md:w-64 md:flex-shrink-0
        `}>
          <ScrollArea className="h-full">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left ${
                      activeTab === item.id 
                        ? 'bg-pharma-blue text-white hover:bg-pharma-dark-blue' 
                        : 'hover:bg-gray-100'
                    } ${item.id === 'upgrade' ? 'border border-pharma-blue' : ''}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >
                    <IconComponent className="h-4 w-4 mr-3" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="container mx-auto px-4 py-6 md:px-6 md:py-10 overflow-x-auto">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-pharma-blue">My Dashboard</h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Welcome back, {userProfile.name}! Here's your personalized journey.
              </p>
            </div>
            { userProfile.hasCompletedOnboarding === false &&
              <Card className="bg-gradient-to-br from-pharma-blue/90 to-pharma-blue text-white mb-10">
              <CardHeader>
                <CardTitle className="text-white">Let us get to know you better</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Complete your profile information to help us provide the best possible guidance for your journey.</p>
                <Link href="/dashboard/onboarding" className="inline-flex items-center justify-center w-full bg-white text-pharma-blue font-medium rounded-md px-4 py-2 hover:bg-gray-100 transition-colors">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Start Onboarding
                </Link>
              </CardContent>
            </Card>}
            <div className='overflow-x-auto'>

            {renderContent()}
            </div>
          </div>
        </div>
      </div> 
      </div>}
    </div>
  );
};

export default Dashboard;
