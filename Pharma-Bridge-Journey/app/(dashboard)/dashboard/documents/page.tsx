'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  CheckCircle,
  AlertCircle,
  Calendar,
  Eye,
  Download,
  ArrowLeft
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';

interface Document {
  id: string;
  name: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected' | 'missing';
  uploadDate?: string;
  expiryDate?: string;
  size?: string;
  type?: string;
  description: string;
}

const Documents = () => {
  const { data: session, status } = useSession();
    const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  
  

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/document`);
        const data = await res.json();
        setDocuments(data);  
      } catch (error) {
        setIsLoading(false)
        console.error('Error loading document:', error)
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchDocuments();

  }, [status, router]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><Calendar className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><AlertCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      case 'missing':
        return <Badge variant="outline"><Upload className="h-3 w-3 mr-1" />Upload Required</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusCount = (status: string) => {
    return documents.filter(doc => doc.status === status).length;
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const approvedCount = getStatusCount('approved');
  const totalRequired = documents.length;
  const completionPercentage = (approvedCount / totalRequired) * 100;
  // console.log(completionPercentage)

  return (
    <div className="min-h-screen bg-gray-100 py-6 mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
          <h1 className="text-3xl font-bold text-pharma-blue mb-2">Document Center</h1>
          <p className="text-gray-600">
            Manage and track all your application documents in one place
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Documents</p>
                  <p className="text-2xl font-bold">{documents.length}</p>
                </div>
                <FileText className="h-8 w-8 text-pharma-blue" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-green-600">{getStatusCount('approved')}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-yellow-600">{getStatusCount('pending')}</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Missing</p>
                  <p className="text-2xl font-bold text-red-600">{getStatusCount('missing')}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Document Completion Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-medium">{approvedCount}/{totalRequired} documents approved</span>
              </div>
              <Progress value={completionPercentage} className="h-3" />
              <p className="text-sm text-gray-600">
                {(typeof completionPercentage === "number" && !isNaN(completionPercentage) ? completionPercentage : 0).toFixed(0)}% of required documents have been approved
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        { isLoading ? <div><Spinner loading={isLoading} /></div> :
        (<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Document List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Your Documents</CardTitle>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search documents..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Button asChild>
                      <Link href="/dashboard/documents/upload">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload New
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredDocuments.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-5 w-5 text-gray-500" />
                            <div>
                              <h3 className="font-medium">{doc.name}</h3>
                              <p className="text-sm text-gray-600">{doc.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">{doc.category}</span>
                            {doc.uploadDate && <span>Uploaded: {doc.uploadDate}</span>}
                            {doc.size && <span>{doc.size} • {doc.type}</span>}
                            {doc.expiryDate && <span>Expires: {doc.expiryDate}</span>}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(doc.status)}
                          
                          {doc.status !== 'missing' && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-3 w-3 mr-1" />
                                Download
                              </Button>
                            </div>
                          )}
                          
                          {doc.status === 'missing' && (
                            <Button size="sm" asChild>
                              <Link href="/dashboard/documents/upload">
                                <Upload className="h-3 w-3 mr-1" />
                                Upload
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {doc.status === 'rejected' && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                          <p className="text-sm text-red-800">
                            <strong>Rejection Reason:</strong> Document quality is too low. Please upload a clearer scan.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {filteredDocuments.length === 0 && (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No documents found.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/documents/upload">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Document
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    View Checklist
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </CardContent>
            </Card>

            {/* Document Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['FPGEE', 'ECE', 'TOEFL', 'Identity', 'Other'].map((category) => {
                    const count = documents.filter(doc => doc.category === category).length;
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm">{category}</span>
                        <Badge variant="outline" className="text-xs">{count}</Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Having trouble with document requirements or uploads?
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
                <Button variant="link" className="w-full text-xs">
                  View Document Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default Documents;
