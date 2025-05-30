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

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600">Manage all client accounts, progress, and communications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + Add New Client
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:col-span-2"
            />
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
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
              <SelectTrigger>
                <SelectValue placeholder="Package" />
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
        </CardContent>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Client Directory ({filteredClients.length} clients)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Mentor</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Actions</TableHead>
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
                    <div className="w-full bg-gray-200 rounded-full h-2">
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
