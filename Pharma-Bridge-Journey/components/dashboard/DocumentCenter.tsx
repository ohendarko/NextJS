
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileText, 
  Upload, 
  Check, 
  Image
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DocumentCenterProps {
  userProfile: any;
}

const DocumentCenter: React.FC<DocumentCenterProps> = ({ userProfile }) => {
  const [activeTab, setActiveTab] = useState("fpgee");
  const [fileState, setFileState] = useState<Record<string, File | null>>({});
  const [uploadingState, setUploadingState] = useState<Record<string, boolean>>({});
  const [completionState, setCompletionState] = useState<Record<string, boolean>>({});
  
  
  // const [isUploading, setIsUploading] = useState(false);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const [completedItems, setCompletedItems] = useState({
    fpgeeFormSubmitted: userProfile?.fpgeeFormSubmitted,
    passportScanSubmitted: userProfile?.passportScanSubmitted,
    passportPhotoSubmitted   : userProfile?.passportPhotoSubmitted,
    pharmacyLicenseSubmitted : userProfile?.pharmacyLicenseSubmitted,
    goodStandingLetterSubmitted: userProfile?.goodStandingLetterSubmitted,
    eceApplicationCompleted  : userProfile?.eceApplicationCompleted,
    officialTranscriptsSent  : userProfile?.officialTranscriptsSent,
    courseDescriptionsSubmitted  : userProfile?.courseDescriptionsSubmitted,
    eceEvaluationFeeePaid  : userProfile?.eceEvaluationFeeePaid,
    toeflTestRegistered  : userProfile?.toeflTestRegistered,
    toeflTestCompleted  : userProfile?.toeflTestCompleted,
    toeflScoresSent  : userProfile?.toeflScoresSent,
    naplexEligibilityConfirmed  : userProfile?.naplexEligibilityConfirmed,
    naplexTestRegistered  : userProfile?.naplexTestRegistered,
    naplexCompleted  : userProfile?.naplexCompleted,
    mpjeEligibilityConfirmed  : userProfile?.mpjeEligibilityConfirmed,
    mpjeTestRegistered  : userProfile?.mpjeTestRegistered,
    mpjeTestCompleted  : userProfile?.mpjeTestCompleted,
  });

  const [formData, setFormData] = useState({});
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);


  

  useEffect(() => {
    console.log(completedItems)
  }, [completedItems])


  //When checkbox is checked or unchecked
  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    setCompletedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));

    setFormData(prev => {
      const updatedForm = { ...prev, [itemId]: checked };
      setHasChanges(true);
      return updatedForm;
    });
  };


  //When changes are made
  const handleCancelChanges = () => {
    setCompletedItems({
      fpgeeFormSubmitted: userProfile.fpgeeFormSubmitted,
      passportScanSubmitted: userProfile.passportScanSubmitted,
      passportPhotoSubmitted: userProfile.passportPhotoSubmitted,
      pharmacyLicenseSubmitted: userProfile.pharmacyLicenseSubmitted,
      goodStandingLetterSubmitted: userProfile.goodStandingLetterSubmitted,
      eceApplicationCompleted: userProfile.eceApplicationCompleted,
      officialTranscriptsSent: userProfile.officialTranscriptsSent,
      courseDescriptionsSubmitted: userProfile.courseDescriptionsSubmitted,
      eceEvaluationFeeePaid: userProfile.eceEvaluationFeeePaid,
      toeflTestRegistered: userProfile.toeflTestRegistered,
      toeflTestCompleted: userProfile.toeflTestCompleted,
      toeflScoresSent: userProfile.toeflScoresSent,
      naplexEligibilityConfirmed: userProfile.naplexEligibilityConfirmed,
      naplexTestRegistered: userProfile.naplexTestRegistered,
      naplexCompleted: userProfile.naplexCompleted,
      mpjeEligibilityConfirmed: userProfile.mpjeEligibilityConfirmed,
      mpjeTestRegistered: userProfile.mpjeTestRegistered,
      mpjeTestCompleted: userProfile.mpjeTestCompleted,
    });
    setFormData({});
    setHasChanges(false);
  };


  //When save is clicked
  const handleSave = async () => {
    const updates = Object.entries(formData); // [["fpgeeFormSubmitted", true], ...]

    if (updates.length === 0) return;

    try {
      setSaving(true);
      for (const [field, value] of updates) {
        const res = await fetch("/api/user/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fieldToUpdate: field,
            value: value,
          }),
        });

        if (!res.ok) {
          throw new Error(`Failed to update field: ${field}`);
        }
      }

      toast({
        title: "Changes saved",
        description: "Your checklist updates have been saved.",
        variant: "success", // Ensure this variant is defined in your toast system
      });

      
      //fetch userdata and update in real time
      const res = await fetch('/api/user');
      const updatedProfile = await res.json();

      setCompletedItems({
        fpgeeFormSubmitted: updatedProfile.fpgeeFormSubmitted,
        passportScanSubmitted: updatedProfile.passportScanSubmitted,
        passportPhotoSubmitted: updatedProfile.passportPhotoSubmitted,
        pharmacyLicenseSubmitted: updatedProfile.pharmacyLicenseSubmitted,
        goodStandingLetterSubmitted: updatedProfile.goodStandingLetterSubmitted,
        eceApplicationCompleted: updatedProfile.eceApplicationCompleted,
        officialTranscriptsSent: updatedProfile.officialTranscriptsSent,
        courseDescriptionsSubmitted: updatedProfile.courseDescriptionsSubmitted,
        eceEvaluationFeeePaid: updatedProfile.eceEvaluationFeeePaid,
        toeflTestRegistered: updatedProfile.toeflTestRegistered,
        toeflTestCompleted: updatedProfile.toeflTestCompleted,
        toeflScoresSent: updatedProfile.toeflScoresSent,
        naplexEligibilityConfirmed: updatedProfile.naplexEligibilityConfirmed,
        naplexTestRegistered: updatedProfile.naplexTestRegistered,
        naplexCompleted: updatedProfile.naplexCompleted,
        mpjeEligibilityConfirmed: updatedProfile.mpjeEligibilityConfirmed,
        mpjeTestRegistered: updatedProfile.mpjeTestRegistered,
        mpjeTestCompleted: updatedProfile.mpjeTestCompleted,
      });

      setHasChanges(false);
      setFormData({});
    } catch (error) {
      console.error(error);
      toast({
        title: "Save failed",
        description: "Some fields couldn't be updated. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };



  const handleFileChange = (itemId: string, file: File | null) => {
    setFileState(prev => ({
      ...prev,
      [itemId]: file,
    }));
  };


  //When upload is clicked
  const handleUpload = async (itemId: string, category: string, dbField: string) => {
    const selectedFile = fileState[itemId];
    if (!selectedFile) return;

    setUploadingState(prev => ({ ...prev, [itemId]: true }));

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Upload failed');

      const docRes = await fetch('/api/document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: selectedFile.name,
          type: selectedFile.type.includes('pdf') ? 'PDF' : 'Image',
          size: `${(selectedFile.size / 1024 / 1024).toFixed(1)} MB`,
          url: data.secure_url,
          category,
        }),
      });

      const docData = await docRes.json();
      if (!docRes.ok) throw new Error(docData.error || 'Save failed');

      // Update user document status field (e.g., fpgeeFormSubmitted)
      const updateRes = await fetch('/api/user/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fieldToUpdate: dbField,
          value: true,
        }),
      });

      const updateData = await updateRes.json();
      if (!updateRes.ok) throw new Error(updateData.error || 'User update failed');


      setFileState(prev => ({ ...prev, [itemId]: null }));
      setCompletionState(prev => ({
        ...prev,
        [itemId]: true,
      }));
      setCompletedItems(prev => ({
        ...prev,
        [dbField]: true,
      }));

      // Dynamically update the field specified by dbid to true
      
      
    } catch (err) {
      console.error(err);
    } finally {
      setUploadingState(prev => ({ ...prev, [itemId]: false }));
    }
  };

  console.log('completed Items:', completedItems);
  console.log('form data:',formData);


  const fpgeeRequirements = [
    {
      id: "fpgee-form",
      dbid: 'fpgeeFormSubmitted',
      title: "Notarized FPGEE Application Form",
      description: "Complete FPGEE application form notarized by a certified notary public",
      imageRequired: true,
      manual: false,
      required: true
    },
    {
      id: "passport-scan",
      dbid: 'passportScanSubmitted',
      title: "Scanned Passport Page",
      description: "Clear scan of passport identification pages",
      imageRequired: true,
      manual: false,
      required: true
    },
    {
      id: "passport-photo",
      dbid: 'passportPhotoSubmitted',
      title: "Passport Picture",
      description: "Recent passport-style photograph meeting NABP requirements",
      imageRequired: true,
      manual: false,
      required: true
    },
    {
      id: "pharmacy-license",
      dbid: 'pharmacyLicenseSubmitted',
      title: "Sealed and Stamped Envelope of Pharmacy License",
      description: "Original pharmacy license in sealed envelope with official stamps",
      imageRequired: true,
      manual: false,
      required: true
    },
    {
      id: "good-standing-letter",
      dbid: 'goodStandingLetterSubmitted',
      title: "Letter of Good Standing Checklist",
      description: "Completed checklist for letter of good standing from licensing board",
      imageRequired: true,
      manual: false,
      required: true
    }
  ];

  const eceRequirements = [
    {
      id: "ece-application",
      dbid: 'eceApplicationCompleted',
      title: "ECE Application Completed",
      description: "Submit completed ECE application through official portal",
      manual: true,
      required: true
    },
    {
      id: "official-transcripts",
      dbid: 'officialTranscriptsSent',
      title: "Official Transcripts Sent",
      description: "Official academic transcripts sent directly from university to ECE",
      manual: true,
      required: true
    },
    // {
    //   id: "course-descriptions",
    //   dbid: 'courseDescriptionsSubmitted',
    //   title: "Course Descriptions Submitted",
    //   description: "Detailed course descriptions for all pharmacy courses taken",
    //   manual: true,
    //   required: true
    // },
    {
      id: "ece-payment",
      dbid: 'eceEvaluationFeeePaid',
      title: "ECE Evaluation Fee Paid",
      description: "Payment confirmation for ECE credential evaluation",
      manual: true,
      required: true
    }
  ];

  const toeflRequirements = [
    {
      id: "toefl-registration",
      dbid: 'toeflTestRegistered',
      title: "TOEFL Test Registered",
      description: "Registered for TOEFL iBT test with ETS",
      manual: true,
      required: true
    },
    {
      id: "toefl-completed",
      dbid: 'toeflTestCompleted',
      title: "TOEFL Test Completed",
      description: "Successfully completed TOEFL iBT examination",
      manual: true,
      required: true
    },
    {
      id: "toefl-scores-sent",
      dbid: 'toeflScoresSent',
      title: "TOEFL Scores Sent to NABP",
      description: "Official TOEFL scores sent directly to NABP (minimum 61 overall)",
      manual: true,
      required: true
    }
  ];

  const naplexRequirements = [
    {
      id: "naplex-eligibility",
      dbid: 'naplexEligibilityConfirmed',
      title: "NAPLEX Eligibility Confirmed",
      description: "Confirmed eligibility to take NAPLEX with state board",
      manual: true,
      required: true
    },
    {
      id: "naplex-registered",
      dbid: 'naplexTestRegistered',
      title: "NAPLEX Test Registered",
      description: "Registered for NAPLEX examination through NABP",
      manual: true,
      required: true
    },
    {
      id: "naplex-completed",
      dbid: 'naplexCompleted',
      title: "NAPLEX Test Completed",
      description: "Successfully completed NAPLEX examination",
      manual: true,
      required: true
    }
  ];

  const mpjeRequirements = [
    {
      id: "mpje-eligibility",
      dbid: 'mpjeEligibilityConfirmed',
      title: "MPJE Eligibility Confirmed",
      description: "Confirmed eligibility to take MPJE with state board",
      manual: true,
      required: true
    },
    {
      id: "mpje-registered",
      dbid: 'mpjeTestRegistered',
      title: "MPJE Test Registered",
      description: "Registered for MPJE examination through NABP",
      manual: true,
      required: true
    },
    {
      id: "mpje-completed",
      dbid: 'mpjeTestCompleted',
      title: "MPJE Test Completed",
      description: "Successfully completed MPJE examination for your state",
      manual: true,
      required: true
    }
  ];

  const renderChecklistSection = (title: string, requirements: any[], showImageUpload = false) => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {requirements.map((req) => (
          <div key={req.dbid} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id={req.dbid}
                checked={
                  req.manual
                    ? completedItems[req.dbid] || false // manual: local state
                    : userProfile[req.dbid] || false  // automatic: DB-driven
                }
                // Due to unsustained state, This logic will be fetched from the database later
                // onCheckedChange={(value) =>
                // setCompletionState(prev => ({ ...prev, [req.id]: Boolean(value) }))
                // }
                onCheckedChange={(checked) => handleCheckboxChange(req.dbid, checked as boolean)}
                className="mt-1"
              />
              <div className="flex-1">
                <label htmlFor={req.id} className="font-medium cursor-pointer">
                  {req.title}
                  {req.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <p className="text-sm text-gray-600 mt-1">{req.description}</p>
                {req.imageRequired && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                    <Image className="h-4 w-4" />
                    <span>Image verification required</span>
                  </div>
                )}
              </div>
              {!req.manual ? (userProfile[req.dbid] && (
                <Badge className="bg-green-100 text-green-800">
                  <Check className="h-3 w-3 mr-1" />
                  Done
                </Badge>
              )) : completedItems[req.dbid] && (
                <Badge className="bg-green-100 text-green-800">
                  <Check className="h-3 w-3 mr-1" />
                  Done
                </Badge>
              )}
            </div>
            
            {showImageUpload && req.imageRequired && (
              <div className="ml-6 space-y-2">
                <label className="block text-sm font-medium">Upload Image for Verification</label>
                <div className="flex gap-2">
                  <Input
                    type="file"
                    accept="image/*,.pdf"
                    className="flex-1"
                    onChange={(e) => handleFileChange(req.id, e.target.files?.[0] || null)}
                  />
                  <Button
                    size="sm"
                    onClick={() => handleUpload(req.id, req.title, req.dbid)}disabled={uploadingState[req.id]}
                  >
                    <Upload className="h-4 w-4 mr-1" />
                     {uploadingState[req.id] ? 'Uploading...' : 'Upload'}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Supported File Formats:&nbsp; .jpg &nbsp; .jpeg &nbsp;.png &nbsp; .pdf
                </p>
                <p className="text-xs text-gray-500">
                  Upload clear images for our team to verify document standards
                </p>
              </div>
            )}
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Completion Status</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(requirements.filter(req =>
                    completedItems[req.dbid] === true
                  ).length / requirements.length) * 100}%`
                }}
              />
            </div>
            <span className="text-sm font-medium">
              {(requirements.filter(req =>
                    completedItems[req.dbid] === true
                  )).length} / {requirements.length}
            </span>
          </div>
        </div>

         {/* Cancel and Save buttons */}
         {hasChanges && requirements.some(req => req.manual) && (
          <div className="flex gap-4 mt-4">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-pharma-dark-blue text-white rounded"
            >
               {saving ? 'Saving... Please wait' : 'Save'}
            </Button>
            <Button
              onClick={handleCancelChanges}
              disabled={saving}
              className="px-4 py-2 bg-gray-300 text-black rounded"
            >
              Cancel
            </Button>
          </div>
        )}

        
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">NABP Checklist Center</h2>
        <p className="text-gray-600">Track your progress and mark completed requirements for each examination after  NABP account creation.</p>
      </div>

      <Tabs defaultValue="fpgee" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="ece">ECE</TabsTrigger>
          <TabsTrigger value="toefl">TOEFL</TabsTrigger>
          <TabsTrigger value="fpgee">FPGEE</TabsTrigger>
          <TabsTrigger value="naplex">NAPLEX</TabsTrigger>
          <TabsTrigger value="mpje">MPJE</TabsTrigger>
        </TabsList>
        
        <TabsContent value="fpgee" className="space-y-4">
          {renderChecklistSection("FPGEE Requirements", fpgeeRequirements, true)}
        </TabsContent>
        
        <TabsContent value="ece" className="space-y-4">
          {renderChecklistSection("ECE Requirements", eceRequirements)}
        </TabsContent>

        <TabsContent value="toefl" className="space-y-4">
          {renderChecklistSection("TOEFL Requirements", toeflRequirements)}
        </TabsContent>

        <TabsContent value="naplex" className="space-y-4">
          {renderChecklistSection("NAPLEX Requirements", naplexRequirements)}
        </TabsContent>

        <TabsContent value="mpje" className="space-y-4">
          {renderChecklistSection("MPJE Requirements", mpjeRequirements)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentCenter;
