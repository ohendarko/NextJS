"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft, FileText } from "lucide-react"
import { useRouter } from "next/navigation"

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    age: "",
    relationshipStatus: "",
    relationshipOther: "",
    religion: "",
    religionOther: "",
    programOfStudy: "",
    yearOfStudy: "",
    sexuallyActive: "",
    familyHistoryCancer: "",
    cancerType: "",
    cervicalCancerEducation: "",
    papSmearTest: "",
    hpvVaccine: "",
  })
  const router = useRouter()

  const totalSteps = 3

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the questionnaire data
    // For now, we'll redirect to the dashboard
    router.push("/dashboard")
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="age">1. Age</Label>
        <Input
          id="age"
          type="number"
          value={formData.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          className="focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="space-y-3">
        <Label>2. Relationship Status</Label>
        <RadioGroup
          value={formData.relationshipStatus}
          onValueChange={(value) => handleInputChange("relationshipStatus", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dating-living-together" id="dating-living-together" />
            <Label htmlFor="dating-living-together">Dating with a steady partner and living together</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dating-not-living-together" id="dating-not-living-together" />
            <Label htmlFor="dating-not-living-together">Dating with a steady partner and not living together</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="steady-living-together" id="steady-living-together" />
            <Label htmlFor="steady-living-together">Steady partner and living together</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="steady-not-living-together" id="steady-not-living-together" />
            <Label htmlFor="steady-not-living-together">Steady partner but not living together</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="not-dating" id="not-dating" />
            <Label htmlFor="not-dating">Not dating</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="relationship-other" />
            <Label htmlFor="relationship-other">Others (please specify)</Label>
          </div>
        </RadioGroup>
        {formData.relationshipStatus === "other" && (
          <Input
            placeholder="Please specify"
            value={formData.relationshipOther}
            onChange={(e) => handleInputChange("relationshipOther", e.target.value)}
            className="mt-2"
          />
        )}
      </div>

      <div className="space-y-3">
        <Label>3. Religion</Label>
        <RadioGroup value={formData.religion} onValueChange={(value) => handleInputChange("religion", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="christian" id="christian" />
            <Label htmlFor="christian">Christian</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="muslim" id="muslim" />
            <Label htmlFor="muslim">Muslim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="traditionalist" id="traditionalist" />
            <Label htmlFor="traditionalist">Traditionalist</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="religion-other" id="religion-other" />
            <Label htmlFor="religion-other">Others (please specify)</Label>
          </div>
        </RadioGroup>
        {formData.religion === "religion-other" && (
          <Input
            placeholder="Please specify"
            value={formData.religionOther}
            onChange={(e) => handleInputChange("religionOther", e.target.value)}
            className="mt-2"
          />
        )}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>4. Program of Study</Label>
        <RadioGroup
          value={formData.programOfStudy}
          onValueChange={(value) => handleInputChange("programOfStudy", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medical-imaging" id="medical-imaging" />
            <Label htmlFor="medical-imaging">Medical Imaging</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medical-laboratory" id="medical-laboratory" />
            <Label htmlFor="medical-laboratory">Medical Laboratory Sciences</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="physiotherapy" id="physiotherapy" />
            <Label htmlFor="physiotherapy">Physiotherapy and Sports Science</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nursing" id="nursing" />
            <Label htmlFor="nursing">Nursing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="midwifery" id="midwifery" />
            <Label htmlFor="midwifery">Midwifery</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label>5. Year of Study</Label>
        <RadioGroup value={formData.yearOfStudy} onValueChange={(value) => handleInputChange("yearOfStudy", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1st-year" id="1st-year" />
            <Label htmlFor="1st-year">1st Year</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2nd-year" id="2nd-year" />
            <Label htmlFor="2nd-year">2nd Year</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3rd-year" id="3rd-year" />
            <Label htmlFor="3rd-year">3rd Year</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4th-year" id="4th-year" />
            <Label htmlFor="4th-year">4th Year</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label>6. Are you sexually active?</Label>
        <RadioGroup
          value={formData.sexuallyActive}
          onValueChange={(value) => handleInputChange("sexuallyActive", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="sexually-active-yes" />
            <Label htmlFor="sexually-active-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="sexually-active-no" />
            <Label htmlFor="sexually-active-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="sexually-active-prefer" />
            <Label htmlFor="sexually-active-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>7. Do you have a family history of cancer?</Label>
        <RadioGroup
          value={formData.familyHistoryCancer}
          onValueChange={(value) => handleInputChange("familyHistoryCancer", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="family-history-yes" />
            <Label htmlFor="family-history-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="family-history-no" />
            <Label htmlFor="family-history-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="family-history-prefer" />
            <Label htmlFor="family-history-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>

      {formData.familyHistoryCancer === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="cancerType">8. If "Yes", please specify the cancer type</Label>
          <Input
            id="cancerType"
            value={formData.cancerType}
            onChange={(e) => handleInputChange("cancerType", e.target.value)}
            className="focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      )}

      <div className="space-y-3">
        <Label>9. Have you received any education on cervical cancer?</Label>
        <RadioGroup
          value={formData.cervicalCancerEducation}
          onValueChange={(value) => handleInputChange("cervicalCancerEducation", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="education-yes" />
            <Label htmlFor="education-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="education-no" />
            <Label htmlFor="education-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="education-prefer" />
            <Label htmlFor="education-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label>10. Have you done a Pap smear test before?</Label>
        <RadioGroup value={formData.papSmearTest} onValueChange={(value) => handleInputChange("papSmearTest", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="pap-smear-yes" />
            <Label htmlFor="pap-smear-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="pap-smear-no" />
            <Label htmlFor="pap-smear-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="pap-smear-prefer" />
            <Label htmlFor="pap-smear-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label>11. Have you taken the HPV vaccine before?</Label>
        <RadioGroup value={formData.hpvVaccine} onValueChange={(value) => handleInputChange("hpvVaccine", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="hpv-vaccine-yes" />
            <Label htmlFor="hpv-vaccine-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="hpv-vaccine-no" />
            <Label htmlFor="hpv-vaccine-no">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer-not-say" id="hpv-vaccine-prefer" />
            <Label htmlFor="hpv-vaccine-prefer">Prefer not to say</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-orange-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold">
            Pre-Learning{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Assessment
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Help us personalize your learning experience</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="gradient-orange-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-2xl hover-shadow-gradient">
          <CardHeader>
            <CardTitle>Questionnaire for Data Collection</CardTitle>
            <CardDescription>
              This information helps us understand your background and tailor the learning content to your needs. All
              responses are confidential and used solely for educational purposes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={handlePrevious} className="hover-shadow-gradient">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Previous
                  </Button>
                )}

                <div className="ml-auto">
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="gradient-orange-blue text-white hover-shadow-gradient group"
                    >
                      Next
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button type="submit" className="gradient-orange-blue text-white hover-shadow-gradient group">
                      Complete Assessment
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
