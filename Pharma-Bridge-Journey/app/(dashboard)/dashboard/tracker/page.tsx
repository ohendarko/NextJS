'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp, 
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  Award,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

interface StudySession {
  id: string;
  subject: string;
  duration: number; // in minutes
  date: string;
  type: 'video' | 'practice' | 'reading' | 'review';
}

interface StudyGoal {
  id: string;
  title: string;
  target: number; // hours per week
  current: number;
  category: string;
}

interface WeeklyStats {
  totalHours: number;
  sessionsCount: number;
  averageSession: number;
  topSubject: string;
}

const StudyTracker = () => {
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [currentSession, setCurrentSession] = useState<number>(0); // in seconds
  const [selectedSubject, setSelectedSubject] = useState('Pharmacology');
  const [sessionType, setSessionType] = useState<'video' | 'practice' | 'reading' | 'review'>('reading');

  // Mock data
  const studyGoals: StudyGoal[] = [
    { id: '1', title: 'Weekly Study Goal', target: 20, current: 14.5, category: 'Total Hours' },
    { id: '2', title: 'Pharmacology Focus', target: 8, current: 6.2, category: 'Subject Hours' },
    { id: '3', title: 'Practice Questions', target: 5, current: 3.8, category: 'Practice Hours' }
  ];

  const recentSessions: StudySession[] = [
    { id: '1', subject: 'Pharmacology', duration: 45, date: '2024-01-15', type: 'video' },
    { id: '2', subject: 'Pharmaceutical Chemistry', duration: 60, date: '2024-01-15', type: 'reading' },
    { id: '3', subject: 'Pharmacy Practice', duration: 30, date: '2024-01-14', type: 'practice' },
    { id: '4', subject: 'Pharmacology', duration: 90, date: '2024-01-14', type: 'review' }
  ];

  const weeklyStats: WeeklyStats = {
    totalHours: 14.5,
    sessionsCount: 12,
    averageSession: 72, // minutes
    topSubject: 'Pharmacology'
  };

  const subjects = [
    'Pharmacology',
    'Pharmaceutical Chemistry',
    'Pharmaceutics',
    'Pharmacy Practice',
    'Biopharmaceutics',
    'Clinical Pharmacy'
  ];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsTimerActive(true);
    // In a real app, you'd set up an interval here
  };

  const pauseTimer = () => {
    setIsTimerActive(false);
  };

  const resetTimer = () => {
    setIsTimerActive(false);
    setCurrentSession(0);
  };

  const finishSession = () => {
    if (currentSession > 0) {
      // In a real app, you'd save the session to the backend
      console.log('Session completed:', {
        subject: selectedSubject,
        duration: Math.floor(currentSession / 60),
        type: sessionType,
        date: new Date().toISOString().split('T')[0]
      });
      resetTimer();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* <DashboardNavbar userProfile={userProfile} /> */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pharma-blue mb-2">Study Tracker</h1>
          <p className="text-gray-600">Monitor your study progress and achieve your goals</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Timer Section */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Study Timer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-pharma-blue mb-4">
                  {formatTime(currentSession)}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select 
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Activity Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['reading', 'video', 'practice', 'review'] as const).map(type => (
                        <Button
                          key={type}
                          variant={sessionType === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSessionType(type)}
                          className="capitalize"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {!isTimerActive ? (
                    <Button 
                      onClick={startTimer}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                  ) : (
                    <Button 
                      onClick={pauseTimer}
                      variant="outline"
                      className="flex-1"
                    >
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                  )}
                  
                  <Button 
                    onClick={resetTimer}
                    variant="outline"
                    size="icon"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                {currentSession > 0 && (
                  <Button 
                    onClick={finishSession}
                    className="w-full mt-3 bg-pharma-blue hover:bg-pharma-dark-blue"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Finish Session
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Stats */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>This Week's Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pharma-blue">{weeklyStats.totalHours}h</div>
                  <div className="text-sm text-gray-600">Total Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pharma-blue">{weeklyStats.sessionsCount}</div>
                  <div className="text-sm text-gray-600">Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pharma-blue">{weeklyStats.averageSession}m</div>
                  <div className="text-sm text-gray-600">Avg Session</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-pharma-blue">{weeklyStats.topSubject}</div>
                  <div className="text-sm text-gray-600">Top Subject</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Study Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Study Goals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studyGoals.map((goal) => {
                const progress = (goal.current / goal.target) * 100;
                return (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{goal.title}</span>
                      <Badge variant={progress >= 100 ? "default" : "secondary"}>
                        {progress >= 100 ? (
                          <>
                            <Award className="h-3 w-3 mr-1" />
                            Complete
                          </>
                        ) : (
                          `${Math.round(progress)}%`
                        )}
                      </Badge>
                    </div>
                    <Progress value={Math.min(progress, 100)} className="h-2" />
                    <div className="text-sm text-gray-600">
                      {goal.current}h / {goal.target}h ({goal.category})
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Recent Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        session.type === 'video' ? 'bg-blue-500' :
                        session.type === 'practice' ? 'bg-green-500' :
                        session.type === 'reading' ? 'bg-yellow-500' :
                        'bg-purple-500'
                      }`} />
                      <div>
                        <div className="font-medium">{session.subject}</div>
                        <div className="text-sm text-gray-600">{session.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{session.duration}m</div>
                      <div className="text-sm text-gray-600 capitalize">{session.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyTracker;
