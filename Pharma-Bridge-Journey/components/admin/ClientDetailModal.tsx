'use client'
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface ClientDetailModalProps {
  client: any;
  isOpen: boolean;
  onClose: () => void;
  adminUser: any;
}

const ClientDetailModal: React.FC<ClientDetailModalProps> = ({ 
  client, 
  isOpen, 
  onClose, 
  adminUser 
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [internalNote, setInternalNote] = useState("");

  const mockProgress = [
    { step: 'Initial Consultation', status: 'completed', date: '2024-01-15' },
    { step: 'Document Collection', status: 'completed', date: '2024-01-18' },
    { step: 'FPGEE Registration', status: 'in-progress', date: '2024-01-22' },
    { step: 'Study Plan Creation', status: 'pending', date: null },
    { step: 'Mock Exams', status: 'pending', date: null },
    { step: 'Final Review', status: 'pending', date: null }
  ];

  const mockCommunications = [
    {
      type: 'call',
      date: '2024-01-28',
      duration: '30 min',
      summary: 'Discussed FPGEE exam timeline and study materials',
      staff: 'Dr. Smith'
    },
    {
      type: 'email',
      date: '2024-01-25',
      summary: 'Sent study guide and practice questions',
      staff: 'Admin'
    },
    {
      type: 'whatsapp',
      date: '2024-01-24',
      summary: 'Quick check-in about document upload',
      staff: 'Support Team'
    }
  ];

  const mockDocuments = [
    { name: 'Pharmacy Degree Certificate', status: 'verified', uploadDate: '2024-01-16' },
    { name: 'Pharmacy License', status: 'pending', uploadDate: '2024-01-20' },
    { name: 'ID Proof', status: 'uploaded', uploadDate: '2024-01-18' },
    { name: 'TOEFL Scores', status: 'not-uploaded', uploadDate: null }
  ];

  const handleAddNote = () => {
    if (!internalNote.trim()) return;
    
    toast({
      title: "Note Added",
      description: "Internal note has been saved to client record.",
    });
    setInternalNote("");
  };

  const getProgressStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'pending': return '⏳';
      default: return '⭕';
    }
  };

  const getDocumentStatusBadge = (status: string) => {
    const variants = {
      'verified': 'bg-green-100 text-green-800',
      'pending': 'bg-yellow-100 text-yellow-800',
      'uploaded': 'bg-blue-100 text-blue-800',
      'not-uploaded': 'bg-gray-100 text-gray-800'
    };
    return variants[status] || 'bg-gray-100 text-gray-800';
  };

  const getCommunicationIcon = (type: string) => {
    switch (type) {
      case 'call': return '📞';
      case 'email': return '📧';
      case 'whatsapp': return '💬';
      default: return '💬';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="" />
              <AvatarFallback>
                {client.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{client.name}</h2>
              <p className="text-gray-600">{client.email}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Client Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Country</Label>
                    <p className="text-sm">{client.country}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">WhatsApp</Label>
                    <p className="text-sm">{client.whatsapp}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Package</Label>
                    <Badge variant="outline">{client.package}</Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Assigned Mentor</Label>
                    <p className="text-sm">{client.assignedMentor}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Join Date</Label>
                    <p className="text-sm">{new Date(client.joinDate).toLocaleDateString()}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Status Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Current Status</Label>
                    <Badge className={`ml-2 ${client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {client.status}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Progress</Label>
                    <div className="mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full" 
                          style={{ width: `${client.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{client.progress}% Complete</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Payment Status</Label>
                    <Badge className={`ml-2 ${client.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {client.paymentStatus}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Last Activity</Label>
                    <p className="text-sm">{new Date(client.lastActivity).toLocaleDateString()}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Service Progress Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProgress.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                      <span className="text-2xl">{getProgressStatusIcon(step.status)}</span>
                      <div className="flex-1">
                        <p className="font-medium">{step.step}</p>
                        {step.date && (
                          <p className="text-sm text-gray-500">
                            Completed on {new Date(step.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {step.status.replace('-', ' ')}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Document Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        {doc.uploadDate && (
                          <p className="text-sm text-gray-500">
                            Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getDocumentStatusBadge(doc.status)}>
                          {doc.status.replace('-', ' ')}
                        </Badge>
                        {doc.status !== 'not-uploaded' && (
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Communication History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCommunications.map((comm, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg">
                      <span className="text-2xl">{getCommunicationIcon(comm.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="capitalize">{comm.type}</Badge>
                          <span className="text-sm text-gray-500">{comm.date}</span>
                          {comm.duration && (
                            <span className="text-sm text-gray-500">({comm.duration})</span>
                          )}
                        </div>
                        <p className="text-sm mt-1">{comm.summary}</p>
                        <p className="text-xs text-gray-500">by {comm.staff}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Internal Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Add Internal Note</Label>
                  <Textarea
                    placeholder="Add private notes about this client..."
                    value={internalNote}
                    onChange={(e) => setInternalNote(e.target.value)}
                    className="mt-2"
                  />
                  <Button onClick={handleAddNote} className="mt-2">
                    Add Note
                  </Button>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Previous Notes</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm">Client is very motivated and responds quickly to emails. Prefers WhatsApp for quick updates.</p>
                      <p className="text-xs text-gray-500 mt-1">by Dr. Smith on Jan 20, 2024</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm">Document verification completed. All credentials are in order.</p>
                      <p className="text-xs text-gray-500 mt-1">by Admin on Jan 18, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDetailModal;
