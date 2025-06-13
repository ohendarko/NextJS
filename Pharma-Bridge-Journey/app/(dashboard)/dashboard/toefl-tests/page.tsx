'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  // Clock, 
  // CheckCircle, 
  Play, 
  FileText, 
  Headphones, 
  Mic, 
  PenTool,
  Target,
  Trophy,
  BarChart3,
  ArrowLeft,
  Timer,
  Send,
  Save
} from 'lucide-react';
import Link from 'next/link';


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

interface EssayPrompt {
  id: string;
  type: 'integrated' | 'independent';
  title: string;
  prompt: string;
  timeLimit: number; // in minutes
  wordLimit: { min: number; max: number };
}

interface EssaySubmission {
  id: string;
  promptId: string;
  content: string;
  submittedAt: string;
  wordCount: number;
  status: 'draft' | 'submitted' | 'reviewed';
  score?: number;
  feedback?: string;
}

const ToeflTests = () => {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const [testStarted, setTestStarted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Writing Lab states
  const [selectedPrompt, setSelectedPrompt] = useState<EssayPrompt | null>(null);
  const [essayContent, setEssayContent] = useState('');
  const [writingTimeLeft, setWritingTimeLeft] = useState(0);
  const [isWriting, setIsWriting] = useState(false);
  
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

  // Mock essay prompts
  const essayPrompts: EssayPrompt[] = [
    {
      id: '1',
      type: 'independent',
      title: 'Technology and Education',
      prompt: 'Do you agree or disagree with the following statement? Technology has made the world a better place to live. Use specific reasons and examples to support your answer.',
      timeLimit: 30,
      wordLimit: { min: 300, max: 500 }
    },
    {
      id: '2',
      type: 'independent',
      title: 'Work from Home',
      prompt: 'Some people prefer to work from home, while others prefer to work in an office. Which do you think is better? Use specific reasons and examples to support your answer.',
      timeLimit: 30,
      wordLimit: { min: 300, max: 500 }
    },
    {
      id: '3',
      type: 'integrated',
      title: 'Academic Discussion',
      prompt: 'You will read a passage and listen to a lecture on the same topic. Then you will write a response to a question that asks you to relate the lecture to the reading passage.',
      timeLimit: 20,
      wordLimit: { min: 150, max: 225 }
    }
  ];

  // Mock essay submissions
  const [essaySubmissions] = useState<EssaySubmission[]>([
    {
      id: '1',
      promptId: '1',
      content: 'Technology has revolutionized our lives in countless ways...',
      submittedAt: '2024-01-15',
      wordCount: 324,
      status: 'reviewed',
      score: 24,
      feedback: 'Good use of examples and clear structure. Work on varying sentence structure.'
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

  // Timer effect for tests
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testStarted, timeLeft]);

  // Timer effect for writing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isWriting && writingTimeLeft > 0) {
      interval = setInterval(() => {
        setWritingTimeLeft(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWriting, writingTimeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const startTest = (testType: string) => {
    setActiveTest(testType);
    setTestStarted(true);
    setCurrentQuestion(0);
    setTimeLeft(testType === 'full' ? 10800 : 3600); // 3 hours for full test, 1 hour for sections
  };

  const startWriting = (prompt: EssayPrompt) => {
    setSelectedPrompt(prompt);
    setEssayContent('');
    setWritingTimeLeft(prompt.timeLimit * 60); // Convert minutes to seconds
    setIsWriting(true);
    setActiveTab('writing-active');
  };

  const saveEssay = () => {
    console.log('Saving essay draft...');
    // In a real app, this would save to backend
  };

  const submitEssay = () => {
    console.log('Submitting essay for review...');
    setIsWriting(false);
    setSelectedPrompt(null);
    setActiveTab('writing-lab');
    // In a real app, this would submit to backend for review
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
                onClick={() => setActiveTab('writing-lab')}
              >
                <PenTool className="h-4 w-4 mr-2" />
                Writing Lab
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

  const WritingLab = () => (
    <div className="space-y-6">
      {/* Writing Lab Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PenTool className="h-6 w-6 text-green-600" />
            <span>Writing Lab</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Practice TOEFL writing tasks with realistic prompts. Submit your essays for detailed feedback and scoring.
          </p>
        </CardContent>
      </Card>

      {/* Essay Prompts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Available Prompts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {essayPrompts.map((prompt) => (
              <div key={prompt.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{prompt.title}</h4>
                    <Badge variant="outline" className="mt-1">
                      {prompt.type === 'independent' ? 'Independent' : 'Integrated'}
                    </Badge>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>{prompt.timeLimit} min</div>
                    <div>{prompt.wordLimit.min}-{prompt.wordLimit.max} words</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                  {prompt.prompt}
                </p>
                
                <Button
                  size="sm"
                  onClick={() => startWriting(prompt)}
                  className="w-full"
                >
                  <PenTool className="h-4 w-4 mr-2" />
                  Start Writing
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Previous Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {essaySubmissions.length > 0 ? (
              <div className="space-y-4">
                {essaySubmissions.map((submission) => {
                  const prompt = essayPrompts.find(p => p.id === submission.promptId);
                  return (
                    <div key={submission.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{prompt?.title}</h4>
                          <p className="text-sm text-gray-600">{submission.submittedAt}</p>
                        </div>
                        <div className="text-right">
                          {submission.status === 'reviewed' && submission.score && (
                            <div className="text-lg font-bold text-green-600">
                              {submission.score}/30
                            </div>
                          )}
                          <Badge variant={
                            submission.status === 'reviewed' ? 'default' :
                            submission.status === 'submitted' ? 'secondary' : 'outline'
                          }>
                            {submission.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        {submission.wordCount} words
                      </div>
                      
                      {submission.feedback && (
                        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                          <p className="text-sm text-blue-800">{submission.feedback}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No submissions yet. Choose a prompt to get started!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ActiveWriting = () => {
    if (!selectedPrompt) return null;
    
    const wordCount = countWords(essayContent);
    const isWithinLimit = wordCount >= selectedPrompt.wordLimit.min && wordCount <= selectedPrompt.wordLimit.max;
    
    return (
      <div className="space-y-6">
        {/* Writing Header with Timer */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setIsWriting(false);
                    setSelectedPrompt(null);
                    setActiveTab('writing-lab');
                  }}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Writing Lab
                </Button>
                <div>
                  <h2 className="font-semibold">{selectedPrompt.title}</h2>
                  <Badge variant="outline">
                    {selectedPrompt.type === 'independent' ? 'Independent' : 'Integrated'} Task
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm text-gray-600">Time Remaining</div>
                  <div className="text-xl font-mono font-bold text-red-600">
                    <Timer className="h-5 w-5 inline mr-1" />
                    {formatTime(writingTimeLeft)}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prompt */}
        <Card>
          <CardHeader>
            <CardTitle>Essay Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">{selectedPrompt.prompt}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Word limit: {selectedPrompt.wordLimit.min}-{selectedPrompt.wordLimit.max} words</span>
              <span>Time limit: {selectedPrompt.timeLimit} minutes</span>
            </div>
          </CardContent>
        </Card>

        {/* Writing Area */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Essay</CardTitle>
              <div className="flex items-center space-x-4">
                <div className={`text-sm ${isWithinLimit ? 'text-green-600' : 'text-red-600'}`}>
                  {wordCount} / {selectedPrompt.wordLimit.min}-{selectedPrompt.wordLimit.max} words
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={saveEssay}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={submitEssay}
                    disabled={!isWithinLimit}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit for Review
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="essay">Write your essay below:</Label>
                <Textarea
                  id="essay"
                  value={essayContent}
                  onChange={(e) => setEssayContent(e.target.value)}
                  placeholder="Begin writing your essay here..."
                  className="min-h-[400px] mt-2"
                />
              </div>
              
              {!isWithinLimit && wordCount > 0 && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                  {wordCount < selectedPrompt.wordLimit.min 
                    ? `You need at least ${selectedPrompt.wordLimit.min - wordCount} more words.`
                    : `You are ${wordCount - selectedPrompt.wordLimit.max} words over the limit.`
                  }
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

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
      <div className="max-w-6xl mx-auto mt-20">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TOEFL Practice Tests
          </h1>
          <p className="text-gray-600">
            Prepare for the TOEFL iBT with full-length practice tests, section-specific practice, and writing lab.
          </p>
        </div>

        {activeTest ? (
          <TestInterface />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Test Overview</TabsTrigger>
              <TabsTrigger value="writing-lab">Writing Lab</TabsTrigger>
              <TabsTrigger value="writing-active" disabled={!selectedPrompt}>
                {selectedPrompt ? 'Active Writing' : 'Writing Session'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <TestOverview />
            </TabsContent>
            
            <TabsContent value="writing-lab">
              <WritingLab />
            </TabsContent>
            
            <TabsContent value="writing-active">
              <ActiveWriting />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default ToeflTests;
