import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload, Settings } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  countryOfDegree: string;
  degreeType: string;
  graduationYear: number;
  profileImage: string | null;
  phoneNumber: string
  profileImageFile?: File;
  [key: string]: any;
}

interface ProfileSectionProps {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const countries = [
  "India", "Ghana", "Philippines", "Nigeria", "Egypt", "Pakistan", "Jordan", 
  "Bangladesh", "Colombia", "Ukraine", "Mexico", "Other"
];

const degrees = [
  "Bachelor of Pharmacy", "Master of Pharmacy", "Doctor of Pharmacy", 
  "PhD in Pharmaceutical Sciences", "Other"
];

const ProfileSection: React.FC<ProfileSectionProps> = ({ userProfile, setUserProfile }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setFormData({ ...userProfile });
    }
  }, [userProfile]);
  
  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      // Allow only digits, +, and -
      const filteredValue = value.replace(/[^\d+-]/g, "");
      setFormData({ ...formData, [name]: filteredValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleEditToggle = () => {
    if (isEditing) {
      // Save logic would go here in a real app
      setUserProfile(formData);
      
    }
    setIsEditing(!isEditing);
  };

  const handleEditSave = async () => {

    try {
      setIsUploading(true);
      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to update profile.");
      }

      const updatedUser = await res.json();

      setUserProfile(updatedUser);  // Update parent state
      setIsEditing(false);          // Exit edit mode

      toast({
        title: "Profile Updated",
        description: "Your profile information has been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was a problem saving your profile. Please try again.",
      });
      console.error("Update error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  
  const handleFileUpload = async () => {
    const file = formData.profileImageFile;
    if (!(file instanceof File)) return;

    const formDataPayload = new FormData();
    formDataPayload.append("file", file);

    try {
      setIsUploading(true);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formDataPayload,
      });

      const uploadData = await res.json();
      console.log(uploadData);

      if (!res.ok) throw new Error(uploadData.error || "Upload failed");

      // Save metadata to your /api/document
      const saveRes = await fetch("/api/document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: file.name,
          type: file.type.includes("pdf") ? "PDF" : "Image",
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          url: uploadData.secure_url,
          category: "profile", // or whatever category applies
        }),
      });

      const saveData = await saveRes.json();
      if (!saveRes.ok) throw new Error(saveData.error || "Failed to save document");

      // Update profileImage to use uploaded URL
      setFormData((prev) => ({
        ...prev,
        profileImage: uploadData.secure_url,
      }));

      toast({
        title: "Profile Image",
        description: "Image uploaded successfully.",
      });
    } catch (err: any) {
      toast({
        title: "Upload Error",
        description: err.message || "Something went wrong.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      profileImageFile: file, // temporarily storing File before upload
    }));
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
  
  if (!formData) return <p>Loading...</p>;


  return (
    <div className="space-y-8">
        <Button onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      <div className="flex flex-col md:flex-col items-start md:items-center gap-6">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-white shadow-md">
            <AvatarImage src={formData?.profileImage || ""} />
            <AvatarFallback className="text-3xl">
              {formData?.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          {isEditing && (
            <div className="mt-2">
              <Label htmlFor="profile-image" className="cursor-pointer flex gap-2 items-center justify-center text-sm text-pharma-blue">
                <Input 
                  type="file" 
                  id="profile-image" 
                  className="flex-1" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <Button
                  onClick={() =>{handleFileUpload()}}
                  disabled={isUploading}
                >
                  <Upload className="h-4 w-4 mr-1" />
                  {isUploading ? 'Uploading' : 'Change Photo'}
                </Button>
              </Label>
              
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData?.name} 
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
              value={formData?.email} 
              onChange={handleInputChange} 
              disabled={true} // Email typically shouldn't be editable without verification
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col">
            <Label htmlFor="country">Country</Label>
            {isEditing ? (
              <Select
                value={formData?.countryOfDegree}
                onValueChange={(val) => handleSelectChange("countryOfDegree", val)}
              >
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
                  id="countryofDegree" 
                  name="countryofDegree" 
                  type="countryofDegree" 
                  value={formData?.countryOfDegree || 'Not Selected'} 
                  onChange={handleInputChange} 
                  disabled={true} //
                />
              </div>
            )}
          </div>
          
          <div className="flex flex-col">
            <Label htmlFor="degree">Pharmacy Degree</Label>
            {isEditing ? (
              <Select
                value={formData?.degreeType}
                onValueChange={(val) => handleSelectChange("degreeType", val)}
              >
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
                  id="degreeType" 
                  name="degreeType" 
                  type="degreeType" 
                  value={formData?.degreeType || 'Not Selected'} 
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
              value={formData?.graduationYear} 
              onChange={handleInputChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="flex flex-col">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input 
              id="phoneNumber" 
              name="phoneNumber" 
              value={formData?.phoneNumber} 
              onChange={handleInputChange} 
              disabled={!isEditing} 
              placeholder="+15551234567"
              inputMode="tel"
            />
          </div>
        </div>
      </div>
      <div>
        {isEditing && 
        (<Button 
          onClick={handleEditSave}
          disabled={isUploading}
          >
          {isUploading ? 'Saving' : 'Save'}
        </Button>)}
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
