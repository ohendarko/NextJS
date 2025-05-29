import React from 'react';
import { Progress } from "@/components/ui/progress";
import { 
  Calendar,
  Clock, 
  CheckCircle2, 
  Circle 
} from 'lucide-react';

interface RoadmapTrackerProps {
  userProfile: any;
  compact?: boolean;
}

interface MilestoneGroup {
  id: string;
  title: string;
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  date?: string;
  description?: string;
}

const RoadmapTracker: React.FC<RoadmapTrackerProps> = ({ userProfile, compact = false }) => {
  // NABP-based licensure roadmap data
  const milestoneGroups: MilestoneGroup[] = [
    {
      id: "prerequisites",
      title: "Prerequisite Requirements",
      milestones: [
        {
          id: "ms-1",
          title: "Foreign Pharmacy Degree Verification",
          status: "completed",
          date: "April 15, 2025",
          description: "Verify your pharmacy degree from an accredited pharmacy school in your home country"
        },
        {
          id: "ms-2",
          title: "English Language Proficiency",
          status: "in-progress",
          date: "May 30, 2025",
          description: "TOEFL iBT or IELTS with minimum scores required by NABP"
        }
      ]
    },
    {
      id: "fpgec",
      title: "FPGEC Certification",
      milestones: [
        {
          id: "ms-3",
          title: "FPGEC Application Submission",
          status: "in-progress",
          date: "June 15, 2025",
          description: "Submit application to Foreign Pharmacy Graduate Examination Committee"
        },
        {
          id: "ms-4",
          title: "Education Credentials Verification",
          status: "upcoming",
          date: "July 10, 2025",
          description: "Educational Credential Evaluators (ECE) review your pharmacy credentials"
        },
        {
          id: "ms-5",
          title: "FPGEE Exam",
          status: "upcoming",
          date: "October 25, 2025",
          description: "Foreign Pharmacy Graduate Equivalency Examination - passing score of 75 required"
        },
        {
          id: "ms-6",
          title: "FPGEC Certificate Issued",
          status: "upcoming",
          date: "December 1, 2025",
          description: "Receive FPGEC certificate after passing FPGEE and TOEFL"
        }
      ]
    },
    {
      id: "licensure",
      title: "State Licensure Process",
      milestones: [
        {
          id: "ms-7",
          title: "State Board Application",
          status: "upcoming",
          description: "Apply to your chosen state's board of pharmacy (requirements vary by state)"
        },
        {
          id: "ms-8",
          title: "NAPLEX Preparation",
          status: "upcoming",
          description: "Study for North American Pharmacist Licensure Examination"
        },
        {
          id: "ms-9",
          title: "NAPLEX Exam",
          status: "upcoming",
          description: "Computer-adaptive exam covering pharmacy practice and drug therapy"
        },
        {
          id: "ms-10",
          title: "MPJE Preparation",
          status: "upcoming",
          description: "Study for Multistate Pharmacy Jurisprudence Examination"
        },
        {
          id: "ms-11",
          title: "MPJE Exam",
          status: "upcoming",
          description: "Exam on federal and state pharmacy laws specific to your practice state"
        },
        {
          id: "ms-12",
          title: "Internship/Experience Hours",
          status: "upcoming",
          description: "Complete required pharmacy practice hours (requirements vary by state)"
        },
        {
          id: "ms-13",
          title: "Pharmacist License Issued",
          status: "upcoming",
          description: "Receive your pharmacist license after meeting all state requirements"
        }
      ]
    },
    {
      id: "cpe",
      title: "Continuing Education",
      milestones: [
        {
          id: "ms-14",
          title: "Continuing Pharmacy Education (CPE)",
          status: "upcoming",
          description: "Complete ongoing CE requirements to maintain licensure"
        },
        {
          id: "ms-15",
          title: "Specialization (Optional)",
          status: "upcoming",
          description: "Pursue board certification in specialty areas like oncology, nutrition, etc."
        }
      ]
    }
  ];
  
  // Calculate overall progress
  const totalMilestones = milestoneGroups.reduce((sum, group) => 
    sum + group.milestones.length, 0
  );
  const completedMilestones = milestoneGroups.reduce((sum, group) => 
    sum + group.milestones.filter(m => m.status === "completed").length, 0
  );
  const progressPercentage = Math.round((completedMilestones / totalMilestones) * 100);
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "upcoming":
        return <Circle className="h-5 w-5 text-gray-300" />;
      default:
        return null;
    }
  };
  
  // Compact view shows just the progress and next few milestones
  if (compact) {
    const allMilestones = milestoneGroups.flatMap(group => group.milestones);
    const nextMilestones = allMilestones
      .filter(m => m.status !== "completed")
      .sort((a, b) => {
        if (a.status === "in-progress" && b.status !== "in-progress") return -1;
        if (a.status !== "in-progress" && b.status === "in-progress") return 1;
        return 0;
      })
      .slice(0, 3);
      
    return (
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">NABP Licensure Progress</h3>
            <div className="text-sm font-medium">{progressPercentage}% Complete</div>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Current Priority Tasks</h3>
          
          {nextMilestones.map(milestone => (
            <div key={milestone.id} className="flex items-start space-x-3 p-3 border rounded-md">
              {getStatusIcon(milestone.status)}
              <div>
                <p className="font-medium">{milestone.title}</p>
                {milestone.date && <p className="text-sm text-gray-500">Target: {milestone.date}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Full roadmap view
  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">NABP Pharmacist Licensure Pathway</h3>
          <div className="text-sm font-medium">{progressPercentage}% Complete</div>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      <div className="space-y-12">
        {milestoneGroups.map(group => (
          <div key={group.id} className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">
              {group.title}
            </h3>
            
            <div className="space-y-6">
              {group.milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative">
                  {/* Vertical timeline line */}
                  {index < group.milestones.length - 1 && (
                    <div className="absolute left-2.5 top-5 h-full w-0.5 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="relative z-10 mt-1">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1 p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{milestone.title}</h4>
                        {milestone.status === "completed" && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            Completed
                          </span>
                        )}
                        {milestone.status === "in-progress" && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            In Progress
                          </span>
                        )}
                      </div>
                      
                      {milestone.date && <p className="text-sm text-gray-500 mt-1">Target: {milestone.date}</p>}
                      {milestone.description && <p className="text-sm mt-2">{milestone.description}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTracker;
