"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowLeft, BookOpen, Microscope, Search, Shield, Stethoscope, Users, Heart, Award } from "lucide-react"
import Link from "next/link"
import InteractiveProgressBar from "@/components/interactive-progress-bar"
import PostTestModal from "@/components/post-test-modal"

const modules = [
  {
    id: 1,
    title: "Introduction to Cervical Cancer",
    shortTitle: "Introduction",
    completed: true,
    unlocked: true,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Cervical Cancer - An Overview",
    shortTitle: "Overview",
    completed: true,
    unlocked: true,
    icon: Microscope,
  },
  {
    id: 3,
    title: "Risk Factors and Screening",
    shortTitle: "Risk & Screening",
    completed: true,
    unlocked: true,
    icon: Search,
  },
  {
    id: 4,
    title: "HPV Vaccination",
    shortTitle: "Vaccination",
    completed: true,
    unlocked: true,
    icon: Shield,
  },
  {
    id: 5,
    title: "Diagnostics and Staging",
    shortTitle: "Diagnostics",
    completed: true,
    unlocked: true,
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Treatment and Palliative Care",
    shortTitle: "Treatment",
    completed: false,
    unlocked: true,
    icon: Users,
  },
]

const sections = [
  {
    id: 1,
    title: "Treatment Options",
    description: "Surgery, radiotherapy, chemotherapy, and palliative care",
    completed: false,
    unlocked: true,
    icon: Stethoscope,
  },
]

export default function Module6Page() {
  const [activeSection, setActiveSection] = useState(1)
  type SectionProgress = { [key: number]: { completed: boolean; unlocked: boolean } }
  const [sectionProgress, setSectionProgress] = useState<SectionProgress>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: { completed: false, unlocked: section.unlocked } }), {}),
  )
  const [showPostTest, setShowPostTest] = useState(false)

  const handleSectionComplete = (sectionId: number) => {
    setSectionProgress((prev) => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], completed: true },
      [sectionId + 1]: { ...prev[sectionId + 1], unlocked: true },
    }))

    const allCompleted = sections.every((section) => section.id === sectionId || sectionProgress[section.id]?.completed)

    if (allCompleted) {
      setShowPostTest(true)
    }
  }

  const handleModuleClick = (moduleId: number) => {
    if (moduleId !== 6) {
      window.location.href = `/learn/cervical-cancer/module-${moduleId}`
    }
  }

  const handlePostTestComplete = () => {
    setShowPostTest(false)
    window.location.href = "/learn/cervical-cancer"
  }

  const completedSections = Object.values(sectionProgress).filter((p) => p.completed).length
  const allSectionsCompleted = completedSections === sections.length

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/learn/cervical-cancer">
            <Button variant="outline" className="hover-shadow-gradient bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Modules
            </Button>
          </Link>
        </div>

        {/* Module Progress Bar */}
        <div className="mb-8">
          <InteractiveProgressBar
            modules={modules}
            currentModule={6}
            onModuleClick={handleModuleClick}
            showCertificate={true}
          />
        </div>

        {/* Module Header */}
        <Card className="mb-8 hover-shadow-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">Module 6: Treatment and Palliative Care</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Understanding treatment options, procedures, and supportive care approaches
                </p>
              </div>
              <div className="text-right space-y-2">
                {allSectionsCompleted && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Module Complete
                  </Badge>
                )}
                <div className="text-sm text-gray-500">
                  <p>1 Section</p>
                  <p>35 minutes</p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Module Introduction</h4>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Button size="lg" className="gradient-orange-blue text-white">
                    <Play className="w-6 h-6 mr-2" />
                    Watch Introduction
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Section Progress</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {completedSections} / {sections.length} Complete
                </span>
              </div>
              <Progress value={(completedSections / sections.length) * 100} className="h-2" />
            </div>

            {/* Treatment Overview */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="hover-shadow-gradient">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Surgery</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hysterectomy, trachelectomy</p>
                </CardContent>
              </Card>

              <Card className="hover-shadow-gradient">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 gradient-blue-pink rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Radiation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">External beam, brachytherapy</p>
                </CardContent>
              </Card>

              <Card className="hover-shadow-gradient">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Chemotherapy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cisplatin, combination therapy</p>
                </CardContent>
              </Card>

              <Card className="hover-shadow-gradient">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 gradient-triple rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Palliative Care</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Supportive, comfort care</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Treatment Factors */}
        <Card className="mb-8 hover-shadow-gradient">
          <CardHeader>
            <CardTitle>Treatment Planning Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Stage of Cancer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Early stages may require surgery only, while advanced stages need combination therapy
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">General Health</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Overall health status affects treatment tolerance and options
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Available Resources</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Availability of facilities and specialists influences treatment choices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Message */}
        <Card className="mb-8 hover-shadow-gradient border-2 border-green-500">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">Hope and Prevention</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cervical cancer is preventable, treatable, and when caught early often curable. Through early screening,
              proper treatment, and supportive care, lives can be saved and the well-being of women and families
              improved.
            </p>
          </CardContent>
        </Card>

        {/* Certificate Achievement */}
        {allSectionsCompleted && (
          <Card className="hover-shadow-gradient border-2 border-green-500">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">🎉 Congratulations!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You've completed all 6 modules of the C3 Initiative cervical cancer education program. Your
                  certificate is ready to download!
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="gradient-orange-blue text-white hover-shadow-gradient">
                    <Award className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                  <Link href="/learn/cervical-cancer">
                    <Button variant="outline">View All Modules</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <PostTestModal
          isOpen={showPostTest}
          onClose={() => setShowPostTest(false)}
          onComplete={handlePostTestComplete}
          moduleTitle="Treatment and Palliative Care"
          moduleId={6}
        />
      </div>
    </div>
  )
}
