"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowLeft, BookOpen, Microscope, Search, Shield, Stethoscope, Users, Syringe } from "lucide-react"
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
    completed: false,
    unlocked: true,
    icon: Shield,
  },
  {
    id: 5,
    title: "Diagnostics and Staging",
    shortTitle: "Diagnostics",
    completed: false,
    unlocked: false,
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
    title: "WHO Recommendations",
    description: "Key World Health Organisation recommendations on HPV vaccines",
    completed: false,
    unlocked: true,
    icon: Shield,
  },
  {
    id: 2,
    title: "HPV Vaccines",
    description: "Types of vaccines, how they work, timing, and contraindications",
    completed: false,
    unlocked: false,
    icon: Syringe,
  },
]

type SectionProgress = {
  [key: number]: { completed: boolean; unlocked: boolean }
}

export default function Module4Page() {
  const [activeSection, setActiveSection] = useState(1)
  const [sectionProgress, setSectionProgress] = useState<SectionProgress>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: { completed: false, unlocked: section.unlocked } }), {} as SectionProgress),
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
    if (moduleId !== 4) {
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
            currentModule={4}
            onModuleClick={handleModuleClick}
            showCertificate={true}
          />
        </div>

        {/* Module Header */}
        <Card className="mb-8 hover-shadow-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">Module 4: HPV Vaccination</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Understanding HPV vaccines, WHO recommendations, and vaccination strategies
                </p>
              </div>
              <div className="text-right space-y-2">
                {allSectionsCompleted && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Module Complete
                  </Badge>
                )}
                <div className="text-sm text-gray-500">
                  <p>2 Sections</p>
                  <p>40 minutes</p>
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

        {/* Vaccine Information */}
        <Card className="hover-shadow-gradient">
          <CardHeader>
            <CardTitle>HPV Vaccine Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600">9-14</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Target Age (Years)</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Licensed Vaccines</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">70%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cancers Prevented</div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
                <strong>Bivalent (Cervarix):</strong> Protects against HPV types 16 and 18
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <strong>Quadrivalent (Gardasil):</strong> Protects against HPV types 6, 11, 16, and 18
              </div>
              <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded">
                <strong>Nonavalent (Gardasil 9):</strong> Protects against 9 HPV types including high-risk types
              </div>
            </div>
          </CardContent>
        </Card>

        <PostTestModal
          isOpen={showPostTest}
          onClose={() => setShowPostTest(false)}
          onComplete={handlePostTestComplete}
          moduleTitle="HPV Vaccination"
          moduleId={4}
        />
      </div>
    </div>
  )
}
