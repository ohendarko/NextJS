'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Upload, 
  FileText, 
  Check, 
  FileX,
  Shield,
  Lock,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  category: string;
  uploadDate: string;
  status: 'pending' | 'verified' | 'rejected';
  notes?: string;
}

const SecureDocumentUpload = ({userProfile}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadNotes, setUploadNotes] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "pharmacy_license.pdf",
      size: "2.4 MB",
      type: "PDF",
      category: "FPGEE Documents",
      uploadDate: "2024-01-15",
      status: "verified",
      notes: "License verified successfully"
    },
    {
      id: "2", 
      name: "passport_scan.jpg",
      size: "1.8 MB",
      type: "Image",
      category: "Identity Documents",
      uploadDate: "2024-01-14",
      status: "pending",
      notes: "Under review by verification team"
    }
  ]);

  const documentCategories = [
    "FPGEE Documents",
    "Identity Documents", 
    "Academic Transcripts",
    "TOEFL Certificates",
    "Visa Documents",
    "Other Supporting Documents"
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    console.log("Files to upload:", files);
    // In a real app, this would handle the file upload
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-green-100 text-green-800"><Check className="h-3 w-3 mr-1" />Verified</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><FileX className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <DashboardNavbar userProfile={userProfile} />
      <div className="container mx-auto px-4 mt-20">
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
          <h1 className="text-3xl font-bold text-pharma-blue mb-2">Secure Document Upload</h1>
          <p className="text-gray-600">
            Upload your sensitive documents securely with end-to-end encryption
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Security Notice */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Your Documents Are Secure</h3>
                    <p className="text-sm text-green-700">
                      All uploads are encrypted and stored in compliance with HIPAA and GDPR standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Area */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload New Document
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Document Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Document Category *</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document category" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Upload Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
                  <Textarea
                    placeholder="Add any relevant notes about this document..."
                    value={uploadNotes}
                    onChange={(e) => setUploadNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Drag & Drop Area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive 
                      ? 'border-pharma-blue bg-blue-50' 
                      : 'border-gray-300 hover:border-pharma-blue'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
                  </p>
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="hidden"
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button type="button" className="cursor-pointer">
                      Choose Files
                    </Button>
                  </label>
                </div>

                <Button 
                  className="w-full bg-pharma-blue hover:bg-pharma-dark-blue" 
                  disabled={!selectedCategory}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document(s)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upload Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Clear, readable scans</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Original documents preferred</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">No watermarks or stamps on copies</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">File size under 10MB</p>
                </div>
              </CardContent>
            </Card>

            {/* Document Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {documentCategories.slice(0, 4).map((category) => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-sm">{category}</span>
                      <Badge variant="outline" className="text-xs">Required</Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                  <Link href="/dashboard/documents">View Full Checklist</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Uploaded Documents */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Your Uploaded Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            {uploadedFiles.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No documents uploaded yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-gray-500" />
                          <div>
                            <h3 className="font-medium">{file.name}</h3>
                            <p className="text-sm text-gray-600">{file.category} • {file.size} • {file.type}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Uploaded on {file.uploadDate}</p>
                        {file.notes && (
                          <p className="text-sm text-gray-700 mt-2 italic">{file.notes}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {getStatusBadge(file.status)}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecureDocumentUpload;
