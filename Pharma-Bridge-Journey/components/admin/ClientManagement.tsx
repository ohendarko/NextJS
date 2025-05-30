'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ClientDetailModal from './ClientDetailModal';
import { useIsMobile } from "@/hooks/use-mobile";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface ClientManagementProps {
  adminUser: AdminUser;
}

// Mock client data
const mockClients = [
  {
    id: 'client_001',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    country: 'India',
    whatsapp: '+91-9876543210',
    package: 'FPGEE Prep',
    status: 'Active',
    progress: 65,
    assignedMentor: 'Dr. Smith',
    joinDate: '2024-01-15',
    lastActivity: '2024-01-28',
    paymentStatus: 'Paid',
    documents: {
      degree: 'verified',
      license: 'pending',
      idProof: 'uploaded'
    }
  },
  {
    id: 'client_002',
    name: 'Michael Chen',
    email: 'mchen@email.com',
    country: 'Philippines',
    whatsapp: '+63-9123456789',
    package: 'Full Licensure',
    status: 'Active',
    progress: 35,
    assignedMentor: 'Dr. Williams',
    joinDate: '2024-01-10',
    lastActivity: '2024-01-27',
    paymentStatus: 'Paid',
    documents: {
      degree: 'verified',
      license: 'verified',
      idProof: 'verified'
    }
  },
  {
    id: 'client_003',
    name: 'Priya Patel',
    email: 'priya.p@email.com',
    country: 'Canada',
    whatsapp: '+1-416-555-0123',
    package: 'TOEFL Prep',
    status: 'Inactive',
    progress: 90,
    assignedMentor: 'Prof. Davis',
    joinDate: '2023-12-20',
    lastActivity: '2024-01-25',
    paymentStatus: 'Paid',
    documents: {
      degree: 'verified',
      license: 'verified',
      idProof: 'verified'
    }
  }
];

const ClientManagement: React.FC<ClientManagementProps> = ({ adminUser }) => {
  const [clients, setClients] = useState(mockClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [packageFilter, setPackageFilter] = useState('all');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const isMobile = useIsMobile();

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || client.status.toLowerCase() === statusFilter;
    const matchesPackage = packageFilter === 'all' || client.package === packageFilter;
    
    return matchesSearch && matchesStatus && matchesPackage;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      'Active': 'bg-green-100 text-green-800',
      'Inactive': 'bg-gray-100 text-gray-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Completed': 'bg-blue-100 text-blue-800'
    };
    return variants[status] || 'bg-gray-100 text-gray-800';
  };

  const getPaymentBadge = (status: string) => {
    const variants = {
      'Paid': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Overdue': 'bg-red-100 text-red-800'
    };
    return variants[status] || 'bg-gray-100 text-gray-800';
  };

  const handleClientClick = (client: any) => {
    setSelectedClient(client);
    setShowDetailModal(true);
  };

  // Enhanced mobile card view for clients
  const MobileClientCard = ({ client }: { client: any }) => (
    <Card className="mb-3 cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500" onClick={() => handleClientClick(client)}>
      <CardContent className="p-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src="" />
              <AvatarFallback className="text-xs bg-blue-100 text-blue-800">
                {client.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="font-medium text-sm truncate">{client.name}</div>
              <div className="text-xs text-gray-500 truncate">{client.email}</div>
            </div>
          </div>
          <Badge className={`${getStatusBadge(client.status)} text-xs flex-shrink-0 ml-2`}>
            {client.status}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs mb-2">
          <div className="min-w-0">
            <span className="text-gray-500 block">Package:</span>
            <div className="font-medium truncate">{client.package}</div>
          </div>
          <div className="min-w-0">
            <span className="text-gray-500 block">Country:</span>
            <div className="font-medium truncate">{client.country}</div>
          </div>
          <div className="min-w-0">
            <span className="text-gray-500 block">Mentor:</span>
            <div className="font-medium truncate">{client.assignedMentor}</div>
          </div>
          <div className="min-w-0">
            <span className="text-gray-500 block">Payment:</span>
            <Badge className={`${getPaymentBadge(client.paymentStatus)} text-xs mt-1`} variant="outline">
              {client.paymentStatus}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium">{client.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${client.progress}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4 md:space-y-6 p-1 md:p-0">
      {/* Header and Filters */}
      <div className="flex flex-col gap-3 md:gap-4 justify-between items-start">
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">Manage all client accounts, progress, and communications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto text-sm md:text-base">
          + Add New Client
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-4 md:pt-6 p-3 md:p-6">
          <div className="space-y-3 md:space-y-4">
            <Input
              placeholder="Search clients by name, email, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm md:text-base"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="text-sm md:text-base">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={packageFilter} onValueChange={setPackageFilter}>
                <SelectTrigger className="text-sm md:text-base">
                  <SelectValue placeholder="Filter by Package" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Packages</SelectItem>
                  <SelectItem value="FPGEE Prep">FPGEE Prep</SelectItem>
                  <SelectItem value="Full Licensure">Full Licensure</SelectItem>
                  <SelectItem value="TOEFL Prep">TOEFL Prep</SelectItem>
                  <SelectItem value="Credential Evaluation">Credential Evaluation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clients Display */}
      <Card>
        <CardHeader className="p-3 md:p-6 pb-2 md:pb-2">
          <CardTitle className="text-lg md:text-xl">
            Client Directory ({filteredClients.length} clients)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 md:p-6 pt-2 md:pt-2">
          {filteredClients.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <div className="text-gray-400 text-4xl md:text-6xl mb-4">👥</div>
              <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-2">No clients found</h3>
              <p className="text-sm md:text-base text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : isMobile ? (
            // Mobile view - Enhanced Cards
            <div className="space-y-3">
              {filteredClients.map((client) => (
                <MobileClientCard key={client.id} client={client} />
              ))}
            </div>
          ) : (
            // Desktop view - Table with horizontal scroll
            <div className="overflow-x-auto -mx-3 md:mx-0">
              <div className="min-w-[800px] px-3 md:px-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px]">Client</TableHead>
                      <TableHead className="min-w-[120px]">Package</TableHead>
                      <TableHead className="min-w-[80px]">Status</TableHead>
                      <TableHead className="min-w-[100px]">Progress</TableHead>
                      <TableHead className="min-w-[120px]">Mentor</TableHead>
                      <TableHead className="min-w-[80px]">Payment</TableHead>
                      <TableHead className="min-w-[100px]">Last Activity</TableHead>
                      <TableHead className="min-w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredClients.map((client) => (
                      <TableRow key={client.id} className="cursor-pointer hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-xs">
                                {client.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{client.name}</div>
                              <div className="text-sm text-gray-500">{client.email}</div>
                              <div className="text-xs text-gray-400">{client.country}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{client.package}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(client.status)}>
                            {client.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${client.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{client.progress}%</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{client.assignedMentor}</span>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPaymentBadge(client.paymentStatus)}>
                            {client.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-500">
                            {new Date(client.lastActivity).toLocaleDateString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleClientClick(client)}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Client Detail Modal */}
      {showDetailModal && selectedClient && (
        <ClientDetailModal
          client={selectedClient}
          isOpen={showDetailModal}
          onClose={() => setShowDetailModal(false)}
          adminUser={adminUser}
        />
      )}
    </div>
  );
};

export default ClientManagement;
