'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  CheckCircle, 
  Play, 
  FileText, 
  Headphones, 
  Mic, 
  PenTool,
  Target,
  Trophy,
  BarChart3,
  ArrowLeft,
  Timer
} from 'lucide-react';
import Link from 'next/link';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

interface TestResult {
  id: string;
  date: string;
  type: string;
  score: number;
  maxScore: number;
  sections: {
    reading: number;
    listening: number;
    speaking: number;
    writing: number;
  };
}

interface TestQuestion {
  id: string;
  section: string;
  type: string;
  question: string;
  options?: string[];
  userAnswer?: string;
  correctAnswer?: string;
  explanation?: string;
}

const ToeflTests = ({userProfile}) => {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const [testStarted, setTestStarted] = useState(false);
  
  // Mock test results
  const [testResults] = useState<TestResult[]>([
    {
      id: '1',
      date: '2024-01-15',
      type: 'Full Practice Test',
      score: 95,
      maxScore: 120,
      sections: { reading: 24, listening: 23, speaking: 24, writing: 24 }
    },
    {
      id: '2',
      date: '2024-01-10',
      type: 'Reading Section',
      score: 26,
      maxScore: 30,
      sections: { reading: 26, listening: 0, speaking: 0, writing: 0 }
    }
  ]);

  // Mock questions for different sections
  const mockQuestions: TestQuestion[] = [
    {
      id: '1',
      section: 'reading',
      type: 'multiple-choice',
      question: 'According to the passage, what is the primary cause of climate change?',
      options: [
        'Natural weather patterns',
        'Human activities and greenhouse gas emissions',
        'Solar radiation changes',
        'Volcanic activity'
      ]
    },
    {
      id: '2',
      section: 'listening',
      type: 'multiple-choice',
      question: 'What is the main topic of the lecture?',
      options: [
        'Ancient civilizations',
        'Modern architecture',
        'Environmental science',
        'Computer technology'
      ]
    }
  ];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startTest = (testType: string) => {
    setActiveTest(testType);
    setTestStarted(true);
    setCurrentQuestion(0);
    setTimeLeft(testType === 'full' ? 10800 : 3600); // 3 hours for full test, 1 hour for sections
  };

  const TestOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Practice Test */}
        <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span>Full Practice Test</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Duration:</span>
                <Badge variant="outline">3 hours</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Questions:</span>
                <Badge variant="outline">76-96 questions</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Sections:</span>
                <Badge variant="outline">4 sections</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <FileText className="h-3 w-3" />
                <span>Reading</span>
              </div>
              <div className="flex items-center space-x-1">
                <Headphones className="h-3 w-3" />
                <span>Listening</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mic className="h-3 w-3" />
                <span>Speaking</span>
              </div>
              <div className="flex items-center space-x-1">
                <PenTool className="h-3 w-3" />
                <span>Writing</span>
              </div>
            </div>
            <Button 
              className="w-full" 
              onClick={() => startTest('full')}
            >
              <Play className="h-4 w-4 mr-2" />
              Start Full Test
            </Button>
          </CardContent>
        </Card>

        {/* Section Practice */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-green-600" />
              <span>Section Practice</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              Practice individual sections to focus on specific skills.
            </p>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => startTest('reading')}
              >
                <FileText className="h-4 w-4 mr-2" />
                Reading Section (60 min)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => startTest('listening')}
              >
                <Headphones className="h-4 w-4 mr-2" />
                Listening Section (45 min)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => startTest('speaking')}
              >
                <Mic className="h-4 w-4 mr-2" />
                Speaking Section (20 min)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => startTest('writing')}
              >
                <PenTool className="h-4 w-4 mr-2" />
                Writing Section (50 min)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-purple-600" />
            <span>Recent Test Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {testResults.length > 0 ? (
            <div className="space-y-4">
              {testResults.map((result) => (
                <div key={result.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{result.type}</h4>
                      <p className="text-sm text-gray-600">{result.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {result.score}/{result.maxScore}
                      </div>
                      <Badge variant="outline">
                        {Math.round((result.score / result.maxScore) * 100)}%
                      </Badge>
                    </div>
                  </div>
                  
                  {result.type === 'Full Practice Test' && (
                    <div className="grid grid-cols-4 gap-4 mt-3 pt-3 border-t">
                      <div className="text-center">
                        <div className="text-sm font-medium">{result.sections.reading}/30</div>
                        <div className="text-xs text-gray-600">Reading</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">{result.sections.listening}/30</div>
                        <div className="text-xs text-gray-600">Listening</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">{result.sections.speaking}/30</div>
                        <div className="text-xs text-gray-600">Speaking</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">{result.sections.writing}/30</div>
                        <div className="text-xs text-gray-600">Writing</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No test results yet. Take your first practice test!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const TestInterface = () => (
    <div className="space-y-6">
      {/* Test Header with Timer */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setActiveTest(null);
                  setTestStarted(false);
                }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tests
              </Button>
              <div>
                <h2 className="font-semibold capitalize">{activeTest} Section</h2>
                <p className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {mockQuestions.length}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Time Remaining</div>
                <div className="text-xl font-mono font-bold text-red-600">
                  <Timer className="h-5 w-5 inline mr-1" />
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Progress 
              value={((currentQuestion + 1) / mockQuestions.length) * 100} 
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Question Content */}
      <Card>
        <CardHeader>
          <CardTitle className="capitalize">
            {mockQuestions[currentQuestion]?.section} Question
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              {mockQuestions[currentQuestion]?.question}
            </p>
          </div>

          {mockQuestions[currentQuestion]?.options && (
            <div className="space-y-3">
              {mockQuestions[currentQuestion].options!.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4"
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                </Button>
              ))}
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            >
              Previous
            </Button>
            
            <Button
              onClick={() => {
                if (currentQuestion < mockQuestions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else {
                  // Finish test
                  setActiveTest(null);
                  setTestStarted(false);
                }
              }}
            >
              {currentQuestion < mockQuestions.length - 1 ? 'Next' : 'Finish Test'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <DashboardNavbar userProfile={userProfile} />
      <div className="flex items-center gap-4 mb-4 mt-20">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TOEFL Practice Tests
          </h1>
          <p className="text-gray-600">
            Prepare for the TOEFL iBT with full-length practice tests and section-specific practice.
          </p>
        </div>

        {activeTest ? <TestInterface /> : <TestOverview />}
      </div>
    </div>
  );
};

export default ToeflTests;
