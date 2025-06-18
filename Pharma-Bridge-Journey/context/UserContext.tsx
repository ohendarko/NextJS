"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  countryOfDegree: string;
  degreeType: string;
  graduationYear: number;
  preferredState: string;
  timezone: string;
  selectedPackage: string[];
  arrivalDate: string;
  profileImage: string;
  admin: boolean;
  hasVisa: boolean;
  visaType: string;
  boardSpecialization: boolean;
  maintainLicensure: boolean;
  hasCompletedOnboarding: boolean;
  hasPausedOnboarding: boolean;
  fpgeeFormSubmitted: boolean;
  fpgecApplicationSubmitted: boolean;
  fpgecCertficateIssued: boolean;
  eceApplicationCompleted: boolean;
  eceEvaluationFeeePaid: boolean;
  courseDescriptionsSubmitted: boolean;
  goodStandingLetterSubmitted: boolean;
  officialTranscriptsSent: boolean;
  passportPhotoSubmitted: boolean;
  passportScanSubmitted: boolean;
  passportFile: string | null;
  degreeFile: string | null;
  licenseFile: string | null;
  pharmacyLicenseSubmitted: boolean;
  pharmacyLicenseObtained: boolean;
  internshipHoursCompleted: boolean;
  naplexEligibilityConfirmed: boolean;
  naplexTestRegistered: boolean;
  naplexPreparationCompleted: boolean;
  naplexCompleted: boolean;
  mpjeEligibilityConfirmed: boolean;
  mpjeTestRegistered: boolean;
  mpjePreparationCompleted: boolean;
  mpjeTestCompleted: boolean;
  toeflTestRegistered: boolean;
  toeflTestCompleted: boolean;
  toeflScoresSent: boolean;
  toeflDuration: string | null;
  toeflType: string | null;
  verified: boolean;
  createdAt: string;
  documentCategories: any[];
  password: string;
}

interface UserContextType {
  userProfile: UserProfile | null;
  isLoading: boolean;
  refetchUser: () => Promise<void>;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

const UserContext = createContext<UserContextType>({
  userProfile: null,
  isLoading: true,
  refetchUser: async () => {},
  setUserProfile: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
  userEmail: string;
}

export const UserProvider = ({ children, userEmail }: UserProviderProps) => {
  const { status } = useSession();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchUser = async () => {
    try {
      if (status === "unauthenticated") {
        return
      }
      setIsLoading(true);
  
      const res = await fetch(`/api/user?email=${userEmail}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch user");
      setUserProfile(data);
    } catch (error) {
      console.error("Error loading user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      toast({
        title: 'Acess Denied',
        description: 'You need to be logged in to acess this page',
        variant: 'destructive',
      });
      return;
    }
    if (status === "authenticated") {
      fetchUser();
    }
  }, [status]);

  return (
    <UserContext.Provider value={{ userProfile, isLoading, setUserProfile, refetchUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
