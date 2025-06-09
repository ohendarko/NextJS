'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload, 
  Mic, 
  Play, 
  Pause, 
  Star, 
  Clock, 
  FileAudio, 
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import Link from 'next/link';

interface AudioSubmission {
  id: string;
  fileName: string;
  uploadDate: string;
  duration: number;
  score: number;
  status: 'pending' | 'scored' | 'reviewed';
  feedback?: string;
  taskType: string;
}

const SpeakingLabs = ({userProfile}) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [submissions, setSubmissions] = useState<AudioSubmission[]>([
    {
      id: '1',
      fileName: 'speaking_task_1.mp3',
      uploadDate: '2024-01-15',
      duration: 45,
      score: 22,
      status: 'scored',
      feedback: 'Good pronunciation and fluency. Work on vocabulary range and grammatical accuracy.',
      taskType: 'Independent Speaking Task 1'
    },
    {
      id: '2',
      fileName: 'speaking_task_2.mp3',
      uploadDate: '2024-01-14',
      duration: 60,
      score: 18,
      status: 'scored',
      feedback: 'Clear delivery but needs improvement in organization and development of ideas.',
      taskType: 'Integrated Speaking Task 2'
    },
    {
      id: '3',
      fileName: 'speaking_task_3.mp3',
      uploadDate: '2024-01-13',
      duration: 50,
      score: 0,
      status: 'pending',
      taskType: 'Independent Speaking Task 1'
    }
  ]);
  const [selectedTask, setSelectedTask] = useState('task1');
  const { toast } = useToast();

  const taskTypes = {
    task1: 'Independent Speaking Task 1',
    task2: 'Integrated Speaking Task 2',
    task3: 'Integrated Speaking Task 3',
    task4: 'Integrated Speaking Task 4'
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an audio file (MP3, WAV, etc.)",
        variant: "destructive",
      });
    }
  };

  const handleSubmitAudio = async () => {
    if (!audioFile) return;

    setIsUploading(true);

    try {
      // Step 1: Upload audio file to Cloudinary via  API route
      const formDataPayload = new FormData();
      formDataPayload.append("file", audioFile);

      const uploadRes = await fetch("/api/document/upload", {
        method: "POST",
        body: formDataPayload,
      });

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok || !uploadData.url) {
        throw new Error(uploadData.error || "Audio upload failed");
      }

      // Step 2: Create the new submission entry
      const newSubmission: AudioSubmission = {
        id: Date.now().toString(),
        fileName: audioFile.name,
        uploadDate: new Date().toISOString().split('T')[0],
        duration: 45, // You can replace this with actual duration if available
        score: 0,
        status: 'pending',
        taskType: taskTypes[selectedTask as keyof typeof taskTypes]
      };

      // Step 3: Update UI state
      setSubmissions([newSubmission, ...submissions]);
      setAudioFile(null);

      toast({
        title: "Audio uploaded successfully",
        description: "Your submission will be reviewed and scored within 24 hours.",
      });
    } catch (error: any) {
      toast({
        title: "Upload Error",
        description: error.message || "Something went wrong while uploading the audio.",
      });
    } finally {
      setIsUploading(false);
    }
  };



  const getScoreColor = (score: number) => {
    if (score >= 24) return 'text-green-600';
    if (score >= 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'scored':
        return <Badge variant="default"><CheckCircle className="w-3 h-3 mr-1" />Scored</Badge>;
      case 'reviewed':
        return <Badge variant="outline"><Star className="w-3 h-3 mr-1" />Reviewed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <DashboardNavbar userProfile={userProfile} />
      <div className="container mx-auto px-4 max-w-6xl mt-20">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Speaking Labs</h1>
          <p className="text-gray-600">Practice TOEFL speaking tasks and get expert feedback</p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5" />
              Upload Speaking Response
            </CardTitle>
            <CardDescription>
              Upload your audio response to get scored and reviewed by our experts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Task Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Select Task Type</label>
              <select 
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.entries(taskTypes).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>

            {/* File Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
                id="audio-upload"
              />
              <label htmlFor="audio-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Click to upload audio file
                </p>
                <p className="text-sm text-gray-500">
                  Supports MP3, WAV, M4A files up to 10MB
                </p>
              </label>
            </div>

            {audioFile && (
              <Alert>
                <FileAudio className="w-4 h-4" />
                <AlertDescription>
                  Selected file: {audioFile.name} ({(audioFile.size / 1024 / 1024).toFixed(2)} MB)
                </AlertDescription>
              </Alert>
            )}

            <Button 
              onClick={handleSubmitAudio}
              disabled={!audioFile || isUploading}
              className="w-full"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Submit Audio
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Submissions History */}
        <Card>
          <CardHeader>
            <CardTitle>Your Submissions</CardTitle>
            <CardDescription>
              Track your progress and review feedback from previous submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-8">
                <FileAudio className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No submissions yet. Upload your first audio response!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div key={submission.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{submission.fileName}</h3>
                        <p className="text-sm text-gray-500">{submission.taskType}</p>
                        <p className="text-xs text-gray-400">
                          Uploaded on {new Date(submission.uploadDate).toLocaleDateString()} • {submission.duration}s
                        </p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(submission.status)}
                        {submission.status === 'scored' || submission.status === 'reviewed' ? (
                          <div className="mt-2">
                            <span className={`text-2xl font-bold ${getScoreColor(submission.score)}`}>
                              {submission.score}/30
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {submission.status === 'scored' && (
                      <>
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Score</span>
                            <span>{submission.score}/30</span>
                          </div>
                          <Progress value={(submission.score / 30) * 100} className="h-2" />
                        </div>
                        
                        {submission.feedback && (
                          <div className="bg-blue-50 p-3 rounded-md">
                            <h4 className="font-medium text-blue-900 mb-1 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Expert Feedback
                            </h4>
                            <p className="text-sm text-blue-800">{submission.feedback}</p>
                          </div>
                        )}
                      </>
                    )}

                    {submission.status === 'pending' && (
                      <div className="bg-yellow-50 p-3 rounded-md">
                        <p className="text-sm text-yellow-800">
                          Your submission is being reviewed. You'll receive your score and feedback within 24 hours.
                        </p>
                      </div>
                    )}
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

export default SpeakingLabs;
