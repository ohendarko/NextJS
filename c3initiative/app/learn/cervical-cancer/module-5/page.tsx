"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  ArrowLeft,
  BookOpen,
  Microscope,
  Search,
  Shield,
  Stethoscope,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react"
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
    completed: false,
    unlocked: true,
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Treatment and Palliative Care",
    shortTitle: "Treatment",
    completed: false,
    unlocked: false,
    icon: Users,
  },
]

const sections = [
  {
    id: 1,
    title: "Diagnostic Tests",
    description: "Colposcopy, biopsy, and endocervical curettage",
    completed: false,
    unlocked: true,
    icon: Search,
  },
  {
    id: 2,
    title: "Cervical Cancer Staging",
    description: "FIGO staging system and classification",
    completed: false,
    unlocked: false,
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Prognostic Factors",
    description: "Factors influencing cervical cancer prognosis",
    completed: false,
    unlocked: false,
    icon: TrendingUp,
  },
]



export default function Module5Page() {
  const [activeSection, setActiveSection] = useState(1)
  const [sectionProgress, setSectionProgress] = useState<Record<number, { completed: boolean; unlocked: boolean }>>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: { completed: false, unlocked: section.unlocked } }), {}),
  )
  const [showPostTest, setShowPostTest] = useState(false)

  const handleModuleClick = (moduleId: number) => {
    if (moduleId !== 5) {
      window.location.href = `/learn/cervical-cancer/module-${moduleId}`
    }
  }

  const handlePostTestComplete = () => {
    setShowPostTest(false)
    window.location.href = "/learn/cervical-cancer"
  }

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
            currentModule={5}
            onModuleClick={handleModuleClick}
            showCertificate={true}
          />
        </div>

        {/* Module Header */}
        <Card className="mb-8 hover-shadow-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">Module 5: Diagnostics and Staging</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Understanding diagnostic procedures, staging systems, and prognostic factors
                </p>
              </div>
              <div className="text-right space-y-2">
                {allSectionsCompleted && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Module Complete
                  </Badge>
                )}
                <div className="text-sm text-gray-500">
                  <p>3 Sections</p>
                  <p>55 minutes</p>
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
          </CardContent>
        </Card>

        {/* FIGO Staging Overview */}
        <Card className="hover-shadow-gradient">
          <CardHeader>
            <CardTitle>FIGO Staging System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-xl font-bold text-green-600">Stage I</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Confined to cervix</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="text-xl font-bold text-yellow-600">Stage II</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Beyond cervix</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="text-xl font-bold text-orange-600">Stage III</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pelvic wall/lower vagina</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="text-xl font-bold text-red-600">Stage IV</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Distant spread</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <strong>Diagnostic Tools:</strong> Colposcopy, biopsy, endocervical curettage (ECC)
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                <strong>Prognostic Factors:</strong> Clinical stage, lymph node involvement, overall health, HIV status
              </div>
            </div>
          </CardContent>
        </Card>

        <PostTestModal
          isOpen={showPostTest}
          onClose={() => setShowPostTest(false)}
          onComplete={handlePostTestComplete}
          moduleTitle="Diagnostics and Staging"
          moduleId={5}
        />
      </div>
    </div>
  )
}
