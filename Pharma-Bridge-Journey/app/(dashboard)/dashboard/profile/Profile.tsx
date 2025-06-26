'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { Edit, Save, User, Mail, MapPin, GraduationCap, Trash2 } from "lucide-react";
import Link from 'next/link';


const countries = [
  "Australia", "Bangladesh", "Canada", "Colombia", "Egypt", "Ghana", 
  "India", "Jordan", "Kenya", "Nigeria", "Pakistan", "Philippines", 
  "Saudi Arabia", "South Africa", "UAE", "Ukraine", "United Kingdom", 
  "United States", "Other"
].sort();

const degrees = [
  "Bachelor of Pharmacy", "Master of Pharmacy", "Doctor of Pharmacy", 
  "PhD in Pharmaceutical Sciences", "Other"
];

const Profile = ({userProfile}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // useEffect(() => {
//   if (session?.user?.email) {
//     fetch(`/api/user?email=${session.user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error)
//         } else {
//           setUser(data)
//         }
//       })
//       .catch(() => setError('Failed to fetch user'))
//   }
// }, [session])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSave = async () => {
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

      setFormData(updatedUser);  // Update parent state
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

  

  const handleDeleteAccount = async (email: string) => {
    try {
    const res = await fetch(`/api/user?email=${encodeURIComponent(email)}`, {
      method: "DELETE",
    })

    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.error || "Failed to delete user")
    }
    toast({
      title: "Account Deletion Requested",
      description: "Your account deletion request has been completed. You will receive a confirmation email.",
      variant: "destructive"
    });
    setShowDeleteDialog(false);

    return await res.json() // { message: "User deleted successfully" }
  } catch (err: any) {
    console.error("Delete user failed:", err.message)
    throw err
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

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-pharma-blue">My Profile</h1>
              <p className="text-gray-600 mt-1">Manage your personal information and account settings</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="bg-pharma-blue hover:bg-pharma-dark-blue"
                disabled={isUploading}
              >
                {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>
              {isEditing && 
                <Button
                  onClick={() => setIsEditing(false)}
                  disabled={isUploading}
                >
                  Cancel
                </Button>}
              <Link href="/dashboard">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="relative mx-auto">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarImage src={formData.profileImage || ""} />
                  <AvatarFallback className="text-4xl bg-pharma-light-blue text-pharma-blue">
                    {formData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                {isEditing && (
                  <div className="mt-4">
                    <Label htmlFor="profile-image" className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-pharma-blue bg-pharma-light-blue rounded-md hover:bg-blue-100 transition-colors">
                      📷 Change Photo
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
              
              <div className="space-y-2 mt-4">
                <h3 className="text-xl font-semibold text-pharma-blue">{formData.name}</h3>
                <p className="text-gray-600 flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {formData.email}
                </p>
                <p className="text-gray-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {formData.countryOfDegree}
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center space-y-3">
                <Badge variant="secondary" className="bg-pharma-light-blue text-pharma-blue">
                  Member since {new Date(formData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </Badge>
                
                {/* <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{formData.completionRate}%</div>
                    <div className="text-sm text-gray-600">Completion Rate</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{formData.studyStreak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    disabled={true}
                    className="mt-1 bg-gray-50"
                  />
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phoneNumber} 
                    onChange={handleInputChange} 
                    disabled={!isEditing} 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label>Date of Birth</Label>
                  <div className="mt-1 px-3 py-2 border rounded-md bg-gray-50 text-gray-900">
                    {new Date(formData.dateOfBirth).toLocaleDateString()}
                  </div>
                </div>
                
                <div>
                  <Label>Gender</Label>
                  <div className="mt-1 px-3 py-2 border rounded-md bg-gray-50 text-gray-900 capitalize">
                    {formData.gender}
                  </div>
                </div>
                
                <div>
                  <Label>Timezone</Label>
                  <div className="mt-1 px-3 py-2 border rounded-md bg-gray-50 text-gray-900">
                    {formData.timezone}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Education Information */}
              <div>
                <h4 className="text-lg font-semibold text-pharma-blue mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country">Country</Label>
                    {isEditing ? (
                      <Select value={formData.countryOfDegree} onValueChange={(value) => handleSelectChange('country', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>{country}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="mt-1 px-3 py-2 border rounded-md bg-gray-50 text-gray-900">
                        {formData.countryOfDegree}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="degree">Pharmacy Degree</Label>
                    {isEditing ? (
                      <Select value={formData.degreeType} onValueChange={(value) => handleSelectChange('degree', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a degree" />
                        </SelectTrigger>
                        <SelectContent>
                          {degrees.map((degree) => (
                            <SelectItem key={degree} value={degree}>{degree}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="mt-1 px-3 py-2 border rounded-md bg-gray-50 text-gray-900">
                        {formData.degreeType}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input 
                      id="graduationYear" 
                      name="graduationYear" 
                      type="number" 
                      value={formData.graduationYear} 
                      onChange={handleInputChange} 
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>Country of Degree</Label>
                    <div className="mt-1 px-3 py-2 border rounded-md bg-gray-50 text-gray-900">
                      {formData.countryOfDegree}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Service Information */}
              <div>
                <h4 className="text-lg font-semibold text-pharma-blue mb-4">Service Package</h4>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium text-pharma-blue">
                    {formData.selectedPackage[0].toUpperCase()}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Your current service package and support plan
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Danger Zone */}
        <Card className="mt-8 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
            <p className="text-sm text-gray-600">
              Once you delete your account, there is no going back. Please be certain.
            </p>
          </CardHeader>
          <CardContent>
            <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="flex items-center" disabled>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove all your data from our servers, including:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Your profile information</li>
                      <li>Study progress and history</li>
                      <li>Documents and uploads</li>
                      <li>Appointment history</li>
                      <li>Service subscriptions</li>
                    </ul>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={() => handleDeleteAccount(userProfile.email)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Yes, delete my account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;


