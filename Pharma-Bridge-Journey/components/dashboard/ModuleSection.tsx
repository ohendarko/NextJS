import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  FileText, 
  MessageSquare, 
  Video, 
  Calendar, 
  CheckCircle2, 
  Settings, 
  Upload, 
} from 'lucide-react';

interface UserProfile {
  activeServices: string[];
  [key: string]: any;
}

interface ModulesSectionProps {
  userProfile: UserProfile;
}

interface ServiceModule {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  requiredService: string;
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ userProfile }) => {
  const allModules: ServiceModule[] = [
    // FPGEE Prep modules
    {
      id: "video-courses",
      title: "Video Courses",
      description: "Watch expert-led pharmacy lessons",
      icon: <Video className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/courses",
      requiredService: "fpgee"
    },
    {
      id: "practice-questions",
      title: "Practice Questions",
      description: "Test your knowledge with thousands of questions",
      icon: <FileText className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/practice",
      requiredService: "fpgee"
    },
    {
      id: "study-tracker",
      title: "Study Tracker",
      description: "Track your progress and study hours",
      icon: <Calendar className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/tracker",
      requiredService: "fpgee"
    },
    
    // TOEFL Prep modules
    {
      id: "speaking-labs",
      title: "Speaking Labs",
      description: "Send us any speaking respnse to evaluate for you",
      icon: <MessageSquare className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/speaking-labs",
      requiredService: "toefl"
    },
    {
      id: "practice-tests",
      title: "TOEFL Practice Tests",
      description: "Full-length practice tests with detailed feedback",
      icon: <FileText className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/toefl-tests",
      requiredService: "toefl"
    },
    
    // Documentation Help modules
    {
      id: "secure-upload",
      title: "Secure Document Upload",
      description: "Upload and manage sensitive documents",
      icon: <FileText className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/documents/upload",
      requiredService: "doc_assist"
    },
    
    // Visa Support modules
    {
      id: "visa-portal",
      title: "Visa Application Portal",
      description: "Step-by-step guidance for visa applications",
      icon: <Settings className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/visa",
      requiredService: "visa_support"
    },
    
    // Internship Support modules
    {
      id: "intern-portal",
      title: "Internship Portal",
      description: "Find and apply for pharmacy internships",
      icon: <Upload className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/internships",
      requiredService: "internship"
    },
    
    // Full Package extra module
    {
      id: "roadmap",
      title: "Master Roadmap",
      description: "Your comprehensive path to U.S. licensure",
      icon: <CheckCircle2 className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/roadmap",
      requiredService: "full"
    }
  ];
  
  // Filter modules based on user's active services
  const availableModules = allModules.filter(module => 
    userProfile.selectedPackage?.includes(module.requiredService) || 
    userProfile.selectedPackage?.includes("full") // Full package includes all modules
  );
  
  // If no modules are available, show message to purchase services
  if (availableModules.length === 0) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-semibold mb-4">No Active Services</h3>
        <p className="text-gray-600 mb-6">
          You don't have any active services yet. Complete onboarding or Check out our service packages to begin your journey.
        </p>
        <Button asChild>
          <Link href="/#services">View Service Packages</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {availableModules.map((module) => (
        <Link href={module.link} key={module.id}>
          <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="mt-1">{module.icon}</div>
              <div className="space-y-1">
                <h3 className="font-semibold">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ModulesSection;
