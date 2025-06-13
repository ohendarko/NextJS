'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import RoadmapTracker from '@/components/dashboard/RoadmapTracker';
import DocumentCenter from '@/components/dashboard/DocumentCenter';

const MasterRoadmap = ({ userProfile }) => {

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6 mt-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                ← Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Master Roadmap</h1>
              <p className="text-gray-600">Your complete pathway to U.S. pharmacy licensure</p>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Current Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-blue-600">FPGEC Preparation</p>
                <p className="text-sm text-gray-600">
                  Focus on document preparation and TOEFL completion
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Estimated Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-green-600">18-24 months</p>
                <p className="text-sm text-gray-600">
                  To complete full licensure process
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Next Milestone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-orange-600">TOEFL Test</p>
                <p className="text-sm text-gray-600">
                  Scheduled for May 30, 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Roadmap Tracker */}
          <Card>
            <CardHeader>
              <CardTitle>Licensure Pathway Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <RoadmapTracker userProfile={userProfile} />
            </CardContent>
          </Card>

          {/* Quick Access Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Access Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <Link href="/dashboard/documents/upload">
                  <Button variant="outline" className="w-full justify-start">
                    Document Upload Center
                  </Button>
                </Link>
                
                <Link href="/dashboard/toefl-tests">
                  <Button variant="outline" className="w-full justify-start">
                    TOEFL Practice Tests
                  </Button>
                </Link>
                
                <Link href="/dashboard/video-courses">
                  <Button variant="outline" className="w-full justify-start">
                    FPGEE Video Courses
                  </Button>
                </Link>
                
                <Link href="/dashboard/practice">
                  <Button variant="outline" className="w-full justify-start">
                    Practice Questions
                  </Button>
                </Link>
                
                <Link href="/dashboard/tracker">
                  <Button variant="outline" className="w-full justify-start">
                    Study Tracker
                  </Button>
                </Link>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Need Help?</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Schedule a consultation with our pharmacy licensure experts
                </p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Document Checklist Section */}
        <Card>
          <CardHeader>
            <CardTitle>Document Requirements Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <DocumentCenter userProfile={userProfile} />
          </CardContent>
        </Card>

        {/* Important Notes Section */}
        <Card>
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">NABP Requirements</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FPGEC certificate is mandatory</li>
                  <li>• TOEFL minimum score: 61 iBT</li>
                  <li>• ECE credential evaluation required</li>
                  <li>• State-specific requirements vary</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Timeline Considerations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FPGEE offered 3 times per year</li>
                  <li>• ECE evaluation takes 8-12 weeks</li>
                  <li>• NAPLEX can be taken after FPGEC</li>
                  <li>• Internship requirements vary by state</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Stay Updated</h4>
              <p className="text-sm text-yellow-800">
                NABP requirements and state regulations can change. We'll keep you informed of any updates that affect your pathway.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MasterRoadmap;
