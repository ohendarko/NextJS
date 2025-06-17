'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  FileText, 
  MessageSquare,
  Pen, 
  Video, 
  Calendar, 
  CheckCircle2, 
  // Settings, 
  // Upload, 
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import Spinner from '../Spinner';

interface UserProfile {
  selectedPackage: string[];
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
  requiredService: string[];
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ userProfile }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [availableModules, setAvailableModules] = useState<ServiceModule[]>([]);
  const allModules: ServiceModule[] = [
    // FPGEE Prep modules
    {
      id: "video-courses",
      title: "Video Courses",
      description: "Watch expert-led pharmacy lessons",
      icon: <Video className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/courses",
      requiredService: ["fpgee"]
    },
    {
      id: "practice-questions",
      title: "Practice Questions",
      description: "Test your knowledge with thousands of questions",
      icon: <FileText className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/practice",
      requiredService: ["fpgee"]
    },
    {
      id: "study-tracker",
      title: "Study Tracker",
      description: "Track your progress and study hours",
      icon: <Calendar className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/tracker",
      requiredService: ["fpgee"]
    },
    
    // TOEFL Prep modules
    {
      id: "speaking-labs",
      title: "Speaking Labs",
      description: "Send us any speaking response to evaluate for you",
      icon: <MessageSquare className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/speaking-labs",
      requiredService: ["toefl", "toefl_prep-1hr", "toefl-prep-2hr", "toefl-lifetime"]
    },
    {
      id: "writing-labs",
      title: "Writing Labs",
      description: "Send us any writing response to evaluate for you",
      icon: <Pen className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/writing-labs",
      requiredService: ["toefl", "toefl_prep-1hr", "toefl-prep-2hr", "toefl-lifetime"]
    },
    {
      id: "practice-tests",
      title: "TOEFL Practice Tests",
      description: "Full-length practice tests with detailed feedback",
      icon: <FileText className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/toefl-tests",
      requiredService: ["toefl", "toefl_prep-1hr", "toefl-prep-2hr", "toefl-lifetime"]
    },
    
    // Documentation Help modules
    {
      id: "secure-upload",
      title: "Secure Document Upload",
      description: "Upload and manage sensitive documents",
      icon: <FileText className="h-6 w-6 text-pharma-blue" />,
      link: "/dashboard/documents/upload",
      requiredService: ["doc_assist"]
    },
    
    // Visa Support modules
    // {
    //   id: "visa-portal",
    //   title: "Visa Application Portal",
    //   description: "Step-by-step guidance for visa applications",
    //   icon: <Settings className="h-8 w-8 text-pharma-blue" />,
    //   link: "/dashboard/visa",
    //   requiredService: "visa_support"
    // },
    
    // // Internship Support modules
    // {
    //   id: "intern-portal",
    //   title: "Internship Portal",
    //   description: "Find and apply for pharmacy internships",
    //   icon: <Upload className="h-8 w-8 text-pharma-blue" />,
    //   link: "/dashboard/internships",
    //   requiredService: "internship"
    // },
    
    // Full Package extra module
    {
      id: "roadmap",
      title: "Master Roadmap",
      description: "Your comprehensive path to U.S. licensure",
      icon: <CheckCircle2 className="h-8 w-8 text-pharma-blue" />,
      link: "/dashboard/roadmap",
      requiredService: ["full"]
    }
  ];

  // console.log(status);
  useEffect(() => {
    const fetchModules = async () => {
      setIsLoading(true);
      try {
        const selectedPackages = userProfile?.selectedPackage || [];

        const filtered = allModules.filter((module) =>
          module.requiredService.some((service: string) =>
            selectedPackages.includes(service)
          ) || selectedPackages.includes("full")
        );

        setAvailableModules(filtered);
      } catch (error) {
        console.error("Failed to load modules:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userProfile) {
      fetchModules();
    }
  }, [userProfile]);


  if (isLoading) return <Spinner loading={true} />;
  
  // If no modules are available, show message to purchase services
  if (availableModules.length === 0) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-semibold mb-4">No Active Services</h3>
        <p className="text-gray-600 mb-6">
          You don't have any active services yet. Complete onboarding or Check out our service packages to begin your journey.
        </p>
        <Button asChild>
          <Link href="/dashboard/pricing">View Service Packages</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      {isLoading ? <Spinner loading={isLoading}/> :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableModules.map((module) => (
          <Link href={module.link} key={module.id}>
            <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col gap-2 items-start space-x-4">
                <div className='flex gap-1 '>
                  <div className="mt-1">{module.icon}</div>
                  <div className="space-y-1 mt-1">
                    <h3 className="font-semibold">{module.title}</h3>
                  </div>

                </div>
                  <p className="text-sm text-gray-600">{module.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      }
    </div>
  );
};

export default ModulesSection;
