'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  Shield, 
  Eye, 
  Smile,
  Scale,
  Clock,
  Lock,
  Settings
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';

const Policy = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const downloadPolicy = (policyType: string) => {
    const url = "/policies.pdf"; // points to public/terms.pdf
    const link = document.createElement("a");
    link.href = url;
    link.download = "PharmaBridge_Policies.pdf"; // you can rename it for the user

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: `Downloading ${policyType} policy`,
    });
    
  };

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PharmaBridge Consulting</h1>
          <p className="text-xl text-gray-600 mb-4">Legal Policies</p>
          <Badge variant="outline" className="text-sm">
            Last Updated: June 2025
          </Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger value="cookies" className="flex items-center gap-2">
              <Smile className="w-4 h-4" />
              Cookie Policy
            </TabsTrigger>
            <TabsTrigger value="terms" className="flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Terms of Service
            </TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Privacy Policy - PharmaBridge Consulting
                </CardTitle>
                <CardDescription>
                  We value your privacy. This policy explains how we collect, use, and protect your personal information.
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => downloadPolicy('privacy')}
                  className="w-fit"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    What We Collect
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Full name, email, WhatsApp number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Country, degree info, uploaded documents</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-orange-600" />
                    How We Use It
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To provide services you've paid for (e.g., FPGEE prep, document reviews)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>For secure communication and mentoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To send updates, reminders, and onboarding guides</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-blue-600" />
                    Data Protection
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We do not sell or share your data with third parties. Data is stored securely with encryption.
                  </p>
                  <p className="text-sm text-gray-600">
                    You may request data deletion by emailing: <strong>support@pharmabridge.com</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cookies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smile className="w-5 h-5 text-orange-600" />
                  Cookie Policy - PharmaBridge Consulting
                </CardTitle>
                <CardDescription>
                  PharmaBridge uses cookies to improve user experience, analyze website traffic, and personalize content.
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => downloadPolicy('cookies')}
                  className="w-fit"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Types of cookies we use:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-blue-900">Essential Cookies</h4>
                      <p className="text-gray-700">For login and dashboard functionality</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-900">Performance Cookies</h4>
                      <p className="text-gray-700">To improve our services and analyze usage</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-orange-900">Functional Cookies</h4>
                      <p className="text-gray-700">To remember your preferences and settings</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Cookie Management</h3>
                  <p className="text-gray-700">
                    You can accept or refuse cookies via your browser settings. Note that disabling essential 
                    cookies may affect the functionality of your dashboard and learning experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="terms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Terms of Service - PharmaBridge Consulting
                </CardTitle>
                <CardDescription>
                  By using PharmaBridge services, you agree to these terms and conditions.
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => downloadPolicy('terms')}
                  className="w-fit"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Service Agreement</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Services provided as described in your package</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Access to mentors, study materials, and guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>No guarantee of exam pass rates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Payment Terms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Monthly subscriptions charged automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>7-day refund policy for new subscribers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Cancel anytime with 30 days notice</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">User Responsibilities</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Provide accurate information during registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Respect intellectual property of study materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Use services for legitimate educational purposes only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Report any technical issues or concerns promptly</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: June 2025 | Contact: support@pharmabridge.com</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <Link href="/">
          <Button className="mx-auto mt-5" onClick={() => router.back()}>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default Policy;
