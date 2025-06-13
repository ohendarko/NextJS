'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Clock, 
  CheckCircle, 
  BookOpen, 
  // Users, 
  // Star,
  ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';


// Mock user data
const userData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  activeServices: ['fpgee_prep'],
  progress: {
    completedCourses: 8,
    totalCourses: 15,
    totalWatchTime: 1240 // minutes
  }
};

// Mock video course data
const courseModules = [
  {
    id: 'pharmacology',
    title: 'Pharmacology Fundamentals',
    description: 'Core concepts in pharmacology for FPGEE preparation',
    totalVideos: 12,
    completedVideos: 8,
    totalDuration: 180, // minutes
    difficulty: 'Intermediate',
    videos: [
      { id: 1, title: 'Introduction to Pharmacokinetics', duration: 15, completed: true },
      { id: 2, title: 'Drug Absorption and Distribution', duration: 18, completed: true },
      { id: 3, title: 'Metabolism and Excretion', duration: 16, completed: true },
      { id: 4, title: 'Pharmacodynamics Basics', duration: 14, completed: true },
      { id: 5, title: 'Receptor Theory', duration: 20, completed: false },
      { id: 6, title: 'Drug Interactions', duration: 22, completed: false }
    ]
  },
  {
    id: 'pharmaceutical-sciences',
    title: 'Pharmaceutical Sciences',
    description: 'Physical pharmacy and pharmaceutical calculations',
    totalVideos: 10,
    completedVideos: 3,
    totalDuration: 145,
    difficulty: 'Advanced',
    videos: [
      { id: 1, title: 'Physical Pharmacy Principles', duration: 25, completed: true },
      { id: 2, title: 'Solutions and Solubility', duration: 18, completed: true },
      { id: 3, title: 'Pharmaceutical Calculations', duration: 20, completed: true },
      { id: 4, title: 'Dosage Forms', duration: 16, completed: false },
      { id: 5, title: 'Stability and Kinetics', duration: 22, completed: false }
    ]
  },
  {
    id: 'clinical-pharmacy',
    title: 'Clinical Pharmacy Practice',
    description: 'Patient care and clinical decision making',
    totalVideos: 8,
    completedVideos: 2,
    totalDuration: 120,
    difficulty: 'Intermediate',
    videos: [
      { id: 1, title: 'Patient Assessment', duration: 15, completed: true },
      { id: 2, title: 'Drug Therapy Monitoring', duration: 18, completed: true },
      { id: 3, title: 'Medication Counseling', duration: 16, completed: false },
      { id: 4, title: 'Clinical Guidelines', duration: 20, completed: false }
    ]
  }
];

const VideoCourses = () => {
  const [selectedModule, setSelectedModule] = useState(courseModules[0]);


  const totalProgress = (userData.progress.completedCourses / userData.progress.totalCourses) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-pharma-blue mb-2">Video Courses</h1>
            <p className="text-gray-600 mb-4">
              Comprehensive FPGEE preparation video content from expert instructors
            </p>
            
            {/* Progress Overview */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pharma-blue mb-1">
                      {userData.progress.completedCourses}/{userData.progress.totalCourses}
                    </div>
                    <p className="text-sm text-gray-600">Courses Completed</p>
                    <Progress value={totalProgress} className="mt-2" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pharma-blue mb-1">
                      {Math.floor(userData.progress.totalWatchTime / 60)}h {userData.progress.totalWatchTime % 60}m
                    </div>
                    <p className="text-sm text-gray-600">Total Watch Time</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pharma-blue mb-1">
                      {courseModules.length}
                    </div>
                    <p className="text-sm text-gray-600">Available Modules</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Course Modules List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Course Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3">
                      {courseModules.map((module) => {
                        const progress = (module.completedVideos / module.totalVideos) * 100;
                        return (
                          <div
                            key={module.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                              selectedModule.id === module.id 
                                ? 'border-pharma-blue bg-pharma-light-blue' 
                                : 'border-gray-200 hover:border-pharma-blue'
                            }`}
                            onClick={() => setSelectedModule(module)}
                          >
                            <h3 className="font-medium text-sm mb-2">{module.title}</h3>
                            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                              <span>{module.completedVideos}/{module.totalVideos} videos</span>
                              <Badge className={getDifficultyColor(module.difficulty)}>
                                {module.difficulty}
                              </Badge>
                            </div>
                            <Progress value={progress} className="h-1" />
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{selectedModule.title}</CardTitle>
                      <p className="text-gray-600 mb-3">{selectedModule.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {selectedModule.totalVideos} videos
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {selectedModule.totalDuration} minutes
                        </span>
                        <Badge className={getDifficultyColor(selectedModule.difficulty)}>
                          {selectedModule.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Progress</div>
                      <div className="text-lg font-semibold text-pharma-blue">
                        {Math.round((selectedModule.completedVideos / selectedModule.totalVideos) * 100)}%
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {selectedModule.videos.map((video, index) => (
                      <div
                        key={video.id}
                        className={`p-4 rounded-lg border transition-colors ${
                          video.completed 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-gray-200 hover:border-pharma-blue hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-full ${
                              video.completed ? 'bg-green-500' : 'bg-pharma-blue'
                            }`}>
                              {video.completed ? (
                                <CheckCircle className="h-4 w-4 text-white" />
                              ) : (
                                <Play className="h-4 w-4 text-white" />
                              )}
                            </div>
                            
                            <div>
                              <h3 className="font-medium text-gray-900">{video.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="h-3 w-3" />
                                <span>{video.duration} minutes</span>
                                {video.completed && (
                                  <Badge variant="outline" className="text-green-700 border-green-300">
                                    Completed
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            variant={video.completed ? "outline" : "default"}
                            size="sm"
                            className={video.completed ? "border-green-300 text-green-700" : ""}
                          >
                            {video.completed ? 'Rewatch' : 'Watch Now'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedModule.videos.length > 6 && (
                    <div className="mt-4 text-center">
                      <Button variant="outline">Load More Videos</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCourses;
