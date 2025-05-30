'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminNavbar from '@/components/admin/AdminNavbar';
import ClientManagement from '@/components/admin/ClientManagement';
import EmployeePanel from '@/components/admin/EmployeePanel';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import PaymentModule from '@/components/admin/PaymentModule';
import ResourceLibrary from '@/components/admin/ResourceLibrary';
import AdminSettings from '@/components/admin/AdminSettings';
import { useIsMobile } from "@/hooks/use-mobile";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// Mock admin user data - In real app, this would come from authentication
const adminUser = {
  id: 'admin_001',
  name: 'Benjamin Admin',
  email: 'admin@pharmabridge.com',
  role: 'admin', // admin, support, mentor, technical, finance
  permissions: ['all']
};

// Mock dashboard stats
const dashboardStats = {
  totalClients: 245,
  activeClients: 189,
  pendingTasks: 23,
  monthlyRevenue: 45600,
  newSignups: 12,
  completedServices: 89
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const { data: session, status } = useSession();

  const router = useRouter()

  useEffect(() => {
      const verifyAdmin = async () => {
        // if (status === 'loading') return;
  
        if (status === 'unauthenticated') {
          setCheckedAuth(true);
          router.replace('/not-found');
          return;
        }
  
        try {
          const res = await fetch('/api/user');
          const user = await res.json();
  
          if (user?.admin) {
            setIsAdmin(true);
          } else {
            router.replace('/not-found');
          }
        } catch (err) {
          console.error(err);
          router.replace('/not-found');
        } finally {
          setCheckedAuth(true);
        }
      };
  
      verifyAdmin();
    }, [status]);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <span className="text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalClients}</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <span className="text-2xl">✅</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.activeClients}</div>
            <p className="text-xs text-muted-foreground">Currently enrolled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <span className="text-2xl">⏳</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.pendingTasks}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <span className="text-2xl">💰</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${dashboardStats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Priority Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
                <span className="text-2xl">📄</span>
                <div className="flex-1">
                  <p className="font-medium">Review FPGEE Applications</p>
                  <p className="text-sm text-gray-600">5 pending reviews</p>
                </div>
                <Button size="sm">Review</Button>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <span className="text-2xl">💬</span>
                <div className="flex-1">
                  <p className="font-medium">Client Follow-ups</p>
                  <p className="text-sm text-gray-600">8 clients need check-in</p>
                </div>
                <Button size="sm">Contact</Button>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                <span className="text-2xl">📅</span>
                <div className="flex-1">
                  <p className="font-medium">Upcoming Consultations</p>
                  <p className="text-sm text-gray-600">3 meetings today</p>
                </div>
                <Button size="sm">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">New client registration: Sarah Johnson</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">Document uploaded by Michael Chen</p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">Payment received: $1,200 FPGEE Package</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">TOEFL exam scheduled: Priya Patel</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'clients':
        return <ClientManagement adminUser={adminUser} />;
      case 'employees':
        return <EmployeePanel adminUser={adminUser} />;
      case 'analytics':
        return <AnalyticsDashboard adminUser={adminUser} />;
      case 'payments':
        return <PaymentModule adminUser={adminUser} />;
      case 'resources':
        return <ResourceLibrary adminUser={adminUser} />;
      case 'settings':
        return <AdminSettings adminUser={adminUser} />;
      default:
        return renderOverview();
    }
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'clients', label: 'Client Management', icon: '👥' },
    { id: 'employees', label: 'Employee Panel', icon: '👨‍💼' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'payments', label: 'Payments', icon: '💳' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  if (!checkedAuth) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {(status === "unauthenticated" || !session || status==='loading') ? 
        (<div className="flex justify-center items-center h-screen text-4xl">
        
        </div>) : ( 
          <div>
      <AdminNavbar adminUser={adminUser} />
      
      <div className="flex pt-20">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="outline"
            size="icon"
            className="fixed top-24 left-4 z-40 md:hidden bg-white shadow-lg border-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
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
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className={`w-full justify-start text-left ${
                    activeTab === item.id 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobile) setSidebarOpen(false);
                  }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </Button>
              ))}
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
          <div className="container mx-auto px-4 py-6 md:px-6 md:py-10">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-600">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Welcome back, {adminUser.name}! Manage your pharmacy bridge operations.
              </p>
            </div>
            
            {renderContent()}
          </div>
        </div>
      </div> 
      </div>)}
    </div>
  );
};

export default AdminDashboard;
