'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Play,
  ArrowLeft,
  Target,
  Trophy,
  Brain
} from 'lucide-react';
import Link from 'next/link';
// import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

// Mock user data
// const userData = {
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
//   profileImage: null,
//   activeServices: ['fpgee_prep']
// };

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface QuizSession {
  totalQuestions: number;
  currentQuestion: number;
  score: number;
  timeElapsed: number;
  isActive: boolean;
  answers: (number | null)[];
}

const PracticeQuestions = () => {
  const [quizMode, setQuizMode] = useState<'selection' | 'quiz' | 'results'>('selection');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizSession, setQuizSession] = useState<QuizSession>({
    totalQuestions: 0,
    currentQuestion: 0,
    score: 0,
    timeElapsed: 0,
    isActive: false,
    answers: []
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Mock questions data
  const mockQuestions: Question[] = [
    {
      id: 1,
      question: "Which of the following is the primary mechanism of action for ACE inhibitors?",
      options: [
        "Block calcium channels",
        "Inhibit angiotensin-converting enzyme",
        "Block beta-adrenergic receptors",
        "Increase sodium excretion"
      ],
      correctAnswer: 1,
      explanation: "ACE inhibitors work by blocking the angiotensin-converting enzyme, which prevents the conversion of angiotensin I to angiotensin II, leading to vasodilation and reduced blood pressure.",
      category: "Pharmacology",
      difficulty: "Medium"
    },
    {
      id: 2,
      question: "What is the recommended storage temperature for most vaccines?",
      options: [
        "Room temperature (20-25°C)",
        "Refrigerated (2-8°C)",
        "Frozen (-15 to -25°C)",
        "Ultra-frozen (-70°C)"
      ],
      correctAnswer: 1,
      explanation: "Most vaccines should be stored in a refrigerator at 2-8°C (36-46°F) to maintain their potency and effectiveness.",
      category: "Pharmacy Practice",
      difficulty: "Easy"
    },
    {
      id: 3,
      question: "Which cytochrome P450 enzyme is responsible for metabolizing approximately 25% of all drugs?",
      options: [
        "CYP1A2",
        "CYP2C9",
        "CYP2D6",
        "CYP3A4"
      ],
      correctAnswer: 3,
      explanation: "CYP3A4 is the most abundant CYP enzyme in the liver and intestine and is responsible for metabolizing approximately 50% of all drugs, making it clinically very important.",
      category: "Pharmacokinetics",
      difficulty: "Hard"
    }
  ];

  const categories = [
    { name: "Pharmacology", count: 150, description: "Drug mechanisms and effects" },
    { name: "Pharmacy Practice", count: 120, description: "Clinical practice and patient care" },
    { name: "Pharmacokinetics", count: 80, description: "Drug absorption, distribution, metabolism" },
    { name: "Medicinal Chemistry", count: 90, description: "Drug structure and properties" },
    { name: "Pharmacy Law", count: 60, description: "Regulations and legal aspects" }
  ];

  const stats = {
    totalAttempted: 245,
    correctAnswers: 189,
    accuracy: 77,
    averageTime: 45,
    weakestArea: "Pharmacokinetics",
    strongestArea: "Pharmacy Practice"
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizSession.isActive) {
      interval = setInterval(() => {
        setQuizSession(prev => ({
          ...prev,
          timeElapsed: prev.timeElapsed + 1
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizSession.isActive]);

  const startQuiz = (category: string, questionCount: number) => {
    const categoryQuestions = mockQuestions.filter(q => q.category === category);
    const selectedQuestions = categoryQuestions.slice(0, questionCount);
    
    setQuestions(selectedQuestions);
    setQuizSession({
      totalQuestions: selectedQuestions.length,
      currentQuestion: 0,
      score: 0,
      timeElapsed: 0,
      isActive: true,
      answers: new Array(selectedQuestions.length).fill(null)
    });
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizMode('quiz');
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQ = questions[quizSession.currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    
    const newAnswers = [...quizSession.answers];
    newAnswers[quizSession.currentQuestion] = selectedAnswer;
    
    setQuizSession(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: newAnswers
    }));
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (quizSession.currentQuestion < quizSession.totalQuestions - 1) {
      setQuizSession(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      setQuizSession(prev => ({ ...prev, isActive: false }));
      setQuizMode('results');
    }
  };

  const resetQuiz = () => {
    setQuizMode('selection');
    setSelectedCategory('');
    setQuestions([]);
    setQuizSession({
      totalQuestions: 0,
      currentQuestion: 0,
      score: 0,
      timeElapsed: 0,
      isActive: false,
      answers: []
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[quizSession.currentQuestion];

  if (quizMode === 'selection') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <DashboardNavbar userProfile={userProfile} /> */}
        
        <div className="pt-20 px-4 md:px-6 max-w-6xl mx-auto mt-10">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-pharma-blue mb-2">Practice Questions</h1>
            <p className="text-gray-600">Test your pharmacy knowledge with our comprehensive question bank</p>
          </div>

          {/* Statistics Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                Your Performance Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pharma-blue">{stats.totalAttempted}</div>
                  <div className="text-sm text-gray-600">Questions Attempted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.accuracy}%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.averageTime}s</div>
                  <div className="text-sm text-gray-600">Avg. Time/Question</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{stats.strongestArea}</div>
                  <div className="text-sm text-gray-600">Strongest Area</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Select Practice Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {categories.map((category) => (
                  <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow border-2 border-transparent hover:border-pharma-blue">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{category.name}</h3>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                          <Badge variant="secondary" className="mt-2">{category.count} questions</Badge>
                        </div>
                        <div className="space-x-2">
                          <Button 
                            variant="outline" 
                            onClick={() => startQuiz(category.name, 5)}
                          >
                            Quick Quiz (5Q)
                          </Button>
                          <Button 
                            onClick={() => startQuiz(category.name, 10)}
                            className="bg-pharma-blue hover:bg-pharma-dark-blue"
                          >
                            Full Practice (10Q)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizMode === 'quiz') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <DashboardNavbar userProfile={userData} /> */}
        
        <div className="pt-20 px-4 md:px-6 max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <Button variant="outline" onClick={resetQuiz}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit Quiz
              </Button>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {formatTime(quizSession.timeElapsed)}
                </div>
                <Badge variant="secondary">
                  {quizSession.currentQuestion + 1} / {quizSession.totalQuestions}
                </Badge>
              </div>
            </div>
            <Progress 
              value={(quizSession.currentQuestion / quizSession.totalQuestions) * 100} 
              className="mb-4"
            />
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Question {quizSession.currentQuestion + 1}</CardTitle>
                <Badge variant={currentQuestion.difficulty === 'Easy' ? 'secondary' : currentQuestion.difficulty === 'Medium' ? 'default' : 'destructive'}>
                  {currentQuestion.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">{currentQuestion.question}</p>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full text-left justify-start p-4 h-auto ${
                      showExplanation && index === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500'
                        : showExplanation && selectedAnswer === index && index !== currentQuestion.correctAnswer
                        ? 'bg-red-100 border-red-500'
                        : ''
                    }`}
                    onClick={() => !showExplanation && setSelectedAnswer(index)}
                    disabled={showExplanation}
                  >
                    <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                    {option}
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 ml-auto text-green-600" />
                    )}
                    {showExplanation && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 ml-auto text-red-600" />
                    )}
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Explanation:</h4>
                  <p className="text-sm">{currentQuestion.explanation}</p>
                </div>
              )}

              <div className="mt-6 flex justify-end">
                {!showExplanation ? (
                  <Button 
                    onClick={submitAnswer} 
                    disabled={selectedAnswer === null}
                    className="bg-pharma-blue hover:bg-pharma-dark-blue"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button 
                    onClick={nextQuestion}
                    className="bg-pharma-blue hover:bg-pharma-dark-blue"
                  >
                    {quizSession.currentQuestion < quizSession.totalQuestions - 1 ? 'Next Question' : 'View Results'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizMode === 'results') {
    const accuracy = Math.round((quizSession.score / quizSession.totalQuestions) * 100);
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <DashboardNavbar userProfile={userData} /> */}
        
        <div className="pt-20 px-4 md:px-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-pharma-blue mb-2">
                  {quizSession.score} / {quizSession.totalQuestions}
                </div>
                <div className="text-xl text-gray-600 mb-4">
                  {accuracy}% Accuracy
                </div>
                <div className="text-sm text-gray-500">
                  Completed in {formatTime(quizSession.timeElapsed)}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-green-800">Correct</div>
                  <div className="text-2xl font-bold text-green-600">{quizSession.score}</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold text-red-800">Incorrect</div>
                  <div className="text-2xl font-bold text-red-600">{quizSession.totalQuestions - quizSession.score}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-800">Avg. Time</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(quizSession.timeElapsed / quizSession.totalQuestions)}s
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={resetQuiz}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Another Quiz
                </Button>
                <Button className="bg-pharma-blue hover:bg-pharma-dark-blue">
                  <Brain className="h-4 w-4 mr-2" />
                  Review Mistakes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default PracticeQuestions;
