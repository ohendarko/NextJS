import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  country: string;
  degree: string;
  graduationYear: number;
  profileImage: string | null;
  documents?: {
    license: { uploaded: boolean; verificationStatus: string | null };
    degree: { uploaded: boolean; verificationStatus: string | null };
    idProof: { uploaded: boolean; verificationStatus: string | null };
  };
  [key: string]: any;
}

interface ProfileSectionProps {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const countries = [
  "India", "Philippines", "Nigeria", "Egypt", "Pakistan", "Jordan", 
  "Bangladesh", "Colombia", "Ukraine", "Mexico", "Other"
];

const degrees = [
  "Bachelor of Pharmacy", "Master of Pharmacy", "Doctor of Pharmacy", 
  "PhD in Pharmaceutical Sciences", "Other"
];

const ProfileSection: React.FC<ProfileSectionProps> = ({ userProfile, setUserProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userProfile });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleEditToggle = () => {
    if (isEditing) {
      // Save logic would go here in a real app
      setUserProfile(formData);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been saved successfully.",
      });
    }
    setIsEditing(!isEditing);
  };
  
  const handleFileUpload = (documentType: string) => {
    // In a real app, this would trigger a file upload dialog and process the file
    toast({
      title: "Document Upload",
      description: `${documentType} upload functionality would be implemented here.`,
    });
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle profile image upload
    const files = e.target.files;
    if (files && files.length > 0) {
      // In a real app, you'd upload this to your server/storage
      const imageUrl = URL.createObjectURL(files[0]);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const getStatusBadge = (status: string | null) => {
    if (!status) return null;
    
    const statusClasses = {
      verified: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      rejected: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[status as keyof typeof statusClasses] || ''}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-col items-start md:items-center gap-6">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-white shadow-md">
            <AvatarImage src={formData.profileImage || ""} />
            <AvatarFallback className="text-3xl">
              {formData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          {isEditing && (
            <div className="mt-2">
              <Label htmlFor="profile-image" className="cursor-pointer flex items-center justify-center text-sm text-pharma-blue">
                <Upload className="h-4 w-4 mr-1" />
                Change Photo
              </Label>
              <Input 
                type="file" 
                id="profile-image" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              disabled={true} // Email typically shouldn't be editable without verification
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col">
            <Label htmlFor="country">Country</Label>
            {isEditing ? (
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="text-sm text-pharma-blue">
                <Input 
                  id="country" 
                  name="country" 
                  type="country" 
                  value={userProfile.country || 'Not Selected'} 
                  onChange={handleInputChange} 
                  disabled={true} //
                />
              </div>
            )}
          </div>
          
          <div className="flex flex-col">
            <Label htmlFor="degree">Pharmacy Degree</Label>
            {isEditing ? (
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a degree" />
                </SelectTrigger>
                <SelectContent>
                  {degrees.map((degree) => (
                    <SelectItem key={degree} value={degree}>{degree}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="text-sm text-pharma-blue">
                <Input 
                  id="country" 
                  name="country" 
                  type="country" 
                  value={userProfile.degree || 'Not Selected'} 
                  onChange={handleInputChange} 
                  disabled={true} //
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col">
            <Label htmlFor="graduationYear">Graduation Year</Label>
            <Input 
              id="graduationYear" 
              name="graduationYear" 
              type="number" 
              value={formData.graduationYear} 
              onChange={handleInputChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="flex flex-col">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input 
              id="phone" 
              name="phone" 
              value={formData.phone || ''} 
              onChange={handleInputChange} 
              disabled={!isEditing} 
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>
      
      {/* <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex flex-col">
          <Label htmlFor="documents">Documents</Label>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Label htmlFor="license">Pharmacy License</Label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {userProfile.documents?.license?.uploaded && 
                    getStatusBadge(userProfile.documents.license.verificationStatus)
                  }
                </div>
                <div className="flex items-center gap-2">
                  {userProfile.documents?.license?.uploaded ? "Replace" : "Upload"}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <Label htmlFor="degree">Degree Certificate</Label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {userProfile.documents?.degree?.uploaded && 
                    getStatusBadge(userProfile.documents?.degree.verificationStatus)
                  }
                </div>
                <div className="flex items-center gap-2">
                  {userProfile.documents?.degree?.uploaded ? "Replace" : "Upload"}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <Label htmlFor="idProof">Identity Proof</Label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {userProfile.documents?.idProof?.uploaded && 
                    getStatusBadge(userProfile.documents?.idProof.verificationStatus)
                  }
                </div>
                <div className="flex items-center gap-2">
                  {userProfile.documents?.idProof?.uploaded ? "Replace" : "Upload"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileSection;
