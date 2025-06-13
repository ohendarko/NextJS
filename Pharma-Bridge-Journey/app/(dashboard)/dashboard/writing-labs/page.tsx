'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Progress } from "@/components/ui/progress";
import { 
  PenTool, 
  Clock, 
  FileText, 
  Send, 
  Save, 
  Eye,
  // Star,
  // CheckCircle,
  // AlertCircle,
  Timer,
  Target,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

interface EssayPrompt {
  id: string;
  type: 'academic' | 'toefl' | 'creative';
  title: string;
  prompt: string;
  timeLimit: number; // in minutes
  wordLimit: { min: number; max: number };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface EssaySubmission {
  id: string;
  promptId: string;
  title: string;
  content: string;
  submittedAt: string;
  wordCount: number;
  status: 'draft' | 'submitted' | 'reviewing' | 'graded';
  score?: number;
  maxScore: number;
  feedback?: {
    overall: string;
    grammar: { score: number; comments: string };
    vocabulary: { score: number; comments: string };
    organization: { score: number; comments: string };
    content: { score: number; comments: string };
  };
}

const WritingLabs = () => {
  const [activeTab, setActiveTab] = useState('prompts');
  const [selectedPrompt, setSelectedPrompt] = useState<EssayPrompt | null>(null);
  const [essayContent, setEssayContent] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  
  // Mock data
  const prompts: EssayPrompt[] = [
    {
      id: '1',
      type: 'toefl',
      title: 'Technology and Education',
      prompt: 'Do you agree or disagree with the following statement? Technology has made the world a better place to live. Use specific reasons and examples to support your answer.',
      timeLimit: 30,
      wordLimit: { min: 300, max: 500 },
      difficulty: 'intermediate'
    },
    {
      id: '2',
      type: 'academic',
      title: 'Climate Change Solutions',
      prompt: 'Discuss the most effective strategies for addressing climate change in the 21st century. Consider both individual and governmental actions.',
      timeLimit: 45,
      wordLimit: { min: 500, max: 800 },
      difficulty: 'advanced'
    },
    {
      id: '3',
      type: 'creative',
      title: 'A Day in 2050',
      prompt: 'Write a descriptive essay about what a typical day might look like in the year 2050. Consider technological, social, and environmental changes.',
      timeLimit: 25,
      wordLimit: { min: 250, max: 400 },
      difficulty: 'beginner'
    }
  ];

  const [submissions] = useState<EssaySubmission[]>([
    {
      id: '1',
      promptId: '1',
      title: 'Technology and Education',
      content: 'Technology has revolutionized our lives...',
      submittedAt: '2024-01-15',
      wordCount: 324,
      status: 'graded',
      score: 85,
      maxScore: 100,
      feedback: {
        overall: 'Well-structured essay with clear arguments. Good use of examples.',
        grammar: { score: 20, comments: 'Minor grammatical errors. Watch subject-verb agreement.' },
        vocabulary: { score: 22, comments: 'Good range of vocabulary. Try using more academic terms.' },
        organization: { score: 23, comments: 'Excellent organization and flow between paragraphs.' },
        content: { score: 20, comments: 'Strong arguments with relevant examples.' }
      }
    },
    {
      id: '2',
      promptId: '2',
      title: 'Climate Change Solutions',
      content: 'Climate change represents one of the most...',
      submittedAt: '2024-01-10',
      wordCount: 567,
      status: 'reviewing',
      score: 0,
      maxScore: 100
    }
  ]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isWriting && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWriting, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const startWriting = (prompt: EssayPrompt) => {
    setSelectedPrompt(prompt);
    setEssayContent('');
    setTimeLeft(prompt.timeLimit * 60);
    setIsWriting(true);
    setActiveTab('write');
  };

  const saveEssay = () => {
    console.log('Saving essay draft...');
    // In a real app, this would save to backend
  };

  const submitEssay = () => {
    console.log('Submitting essay for review...');
    setIsWriting(false);
    setSelectedPrompt(null);
    setActiveTab('submissions');
    // In a real app, this would submit to backend for review
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'toefl': return 'bg-blue-100 text-blue-800';
      case 'academic': return 'bg-purple-100 text-purple-800';
      case 'creative': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'reviewing': return 'bg-yellow-100 text-yellow-800';
      case 'graded': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-20">
      <div className="flex items-center gap-4 mb-4">
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
            Writing Labs
          </h1>
          <p className="text-gray-600">
            Practice your writing skills with guided prompts and receive detailed feedback from expert reviewers.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prompts">Writing Prompts</TabsTrigger>
            <TabsTrigger value="submissions">My Submissions</TabsTrigger>
            <TabsTrigger value="write" disabled={!selectedPrompt}>
              {selectedPrompt ? 'Active Writing' : 'Writing Session'}
            </TabsTrigger>
          </TabsList>

          {/* Writing Prompts */}
          <TabsContent value="prompts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prompts.map((prompt) => (
                <Card key={prompt.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{prompt.title}</CardTitle>
                      <div className="flex flex-col space-y-1">
                        <Badge className={getTypeColor(prompt.type)}>
                          {prompt.type.toUpperCase()}
                        </Badge>
                        <Badge className={getDifficultyColor(prompt.difficulty)}>
                          {prompt.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 line-clamp-4">
                      {prompt.prompt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{prompt.timeLimit} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="h-3 w-3" />
                        <span>{prompt.wordLimit.min}-{prompt.wordLimit.max} words</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => startWriting(prompt)}
                      className="w-full"
                    >
                      <PenTool className="h-4 w-4 mr-2" />
                      Start Writing
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Submissions */}
          <TabsContent value="submissions">
            <div className="space-y-6">
              {submissions.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {submissions.map((submission) => (
                    <Card key={submission.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{submission.title}</CardTitle>
                            <p className="text-sm text-gray-600">{submission.submittedAt}</p>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <Badge className={getStatusColor(submission.status)}>
                              {submission.status}
                            </Badge>
                            {submission.status === 'graded' && submission.score && (
                              <div className="text-right">
                                <div className="text-2xl font-bold text-green-600">
                                  {submission.score}/{submission.maxScore}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {Math.round((submission.score / submission.maxScore) * 100)}%
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{submission.wordCount}</span> words
                        </div>
                        
                        {submission.feedback && (
                          <div className="space-y-3">
                            <div className="bg-blue-50 border border-blue-200 rounded p-3">
                              <p className="text-sm text-blue-800">{submission.feedback.overall}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-gray-50 p-2 rounded">
                                <div className="font-medium">Grammar: {submission.feedback.grammar.score}/25</div>
                                <p className="text-gray-600">{submission.feedback.grammar.comments}</p>
                              </div>
                              <div className="bg-gray-50 p-2 rounded">
                                <div className="font-medium">Vocabulary: {submission.feedback.vocabulary.score}/25</div>
                                <p className="text-gray-600">{submission.feedback.vocabulary.comments}</p>
                              </div>
                              <div className="bg-gray-50 p-2 rounded">
                                <div className="font-medium">Organization: {submission.feedback.organization.score}/25</div>
                                <p className="text-gray-600">{submission.feedback.organization.comments}</p>
                              </div>
                              <div className="bg-gray-50 p-2 rounded">
                                <div className="font-medium">Content: {submission.feedback.content.score}/25</div>
                                <p className="text-gray-600">{submission.feedback.content.comments}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            View Essay
                          </Button>
                          {submission.status === 'graded' && (
                            <Button variant="outline" size="sm" className="flex-1">
                              <FileText className="h-4 w-4 mr-2" />
                              Download Report
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
                    <p className="text-gray-600 mb-4">Start writing your first essay to see it here!</p>
                    <Button onClick={() => setActiveTab('prompts')}>
                      Browse Writing Prompts
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Active Writing Session */}
          <TabsContent value="write">
            {selectedPrompt && (
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
                            setActiveTab('prompts');
                          }}
                        >
                          ← Back to Prompts
                        </Button>
                        <div>
                          <h2 className="font-semibold">{selectedPrompt.title}</h2>
                          <div className="flex space-x-2">
                            <Badge className={getTypeColor(selectedPrompt.type)}>
                              {selectedPrompt.type.toUpperCase()}
                            </Badge>
                            <Badge className={getDifficultyColor(selectedPrompt.difficulty)}>
                              {selectedPrompt.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Time Remaining</div>
                        <div className="text-xl font-mono font-bold text-red-600">
                          <Timer className="h-5 w-5 inline mr-1" />
                          {formatTime(timeLeft)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Prompt Display */}
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
                        <div className="text-sm text-gray-600">
                          <span className={countWords(essayContent) >= selectedPrompt.wordLimit.min && countWords(essayContent) <= selectedPrompt.wordLimit.max ? 'text-green-600' : 'text-red-600'}>
                            {countWords(essayContent)}
                          </span>
                          /{selectedPrompt.wordLimit.min}-{selectedPrompt.wordLimit.max} words
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={saveEssay}>
                            <Save className="h-4 w-4 mr-2" />
                            Save Draft
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={submitEssay}
                            disabled={countWords(essayContent) < selectedPrompt.wordLimit.min}
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
                          className="min-h-[500px] mt-2"
                        />
                      </div>
                      
                      {countWords(essayContent) > 0 && countWords(essayContent) < selectedPrompt.wordLimit.min && (
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                          You need at least {selectedPrompt.wordLimit.min - countWords(essayContent)} more words to meet the minimum requirement.
                        </div>
                      )}
                      
                      {countWords(essayContent) > selectedPrompt.wordLimit.max && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-800">
                          You are {countWords(essayContent) - selectedPrompt.wordLimit.max} words over the limit. Please reduce your essay length.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WritingLabs;
