"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  CheckCircle,
  Lock,
  ArrowLeft,
  BookOpen,
  Microscope,
  Search,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react"
import Link from "next/link"
import Section1_1 from "@/components/sections/section-1-1"
import Section1_2 from "@/components/sections/section-1-2"
import Section1_3 from "@/components/sections/section-1-3"
import InteractiveProgressBar from "@/components/interactive-progress-bar"

const modules = [
  {
    id: 1,
    title: "Introduction to Cervical Cancer",
    shortTitle: "Introduction",
    completed: false,
    unlocked: true,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "HPV and Cervical Cancer Connection",
    shortTitle: "HPV Connection",
    completed: false,
    unlocked: false,
    icon: Microscope,
  },
  {
    id: 3,
    title: "Screening and Early Detection",
    shortTitle: "Screening",
    completed: false,
    unlocked: false,
    icon: Search,
  },
  {
    id: 4,
    title: "Prevention Strategies",
    shortTitle: "Prevention",
    completed: false,
    unlocked: false,
    icon: Shield,
  },
  {
    id: 5,
    title: "Treatment and Management",
    shortTitle: "Treatment",
    completed: false,
    unlocked: false,
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Community Health and Advocacy",
    shortTitle: "Community Health",
    completed: false,
    unlocked: false,
    icon: Users,
  },
]

const sections = [
  {
    id: 1,
    title: "Reasons to Focus on Cervical Cancer",
    description: "Understanding the global impact and importance of cervical cancer prevention",
    component: Section1_1,
    completed: false,
    unlocked: true,
  },
  {
    id: 2,
    title: "Risk Factors and Causes",
    description: "Exploring the primary causes and risk factors for cervical cancer",
    component: Section1_2,
    completed: false,
    unlocked: false,
  },
  {
    id: 3,
    title: "Prevention Overview",
    description: "Introduction to prevention strategies and early intervention",
    component: Section1_3,
    completed: false,
    unlocked: false,
  },
]

export default function Module1Page() {
  const [activeSection, setActiveSection] = useState(1)
  type SectionProgress = {
    [key: number]: { completed: boolean; unlocked: boolean }
  }
  const [sectionProgress, setSectionProgress] = useState<SectionProgress>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: { completed: false, unlocked: section.unlocked } }), {})
  )

  const handleSectionComplete = (sectionId: number) => {
    setSectionProgress((prev) => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], completed: true },
      [sectionId + 1]: { ...prev[sectionId + 1], unlocked: true },
    }))
  }

  const handleModuleClick = (moduleId: number) => {
    if (moduleId !== 1) {
      // Navigate to other modules when they're unlocked
      window.location.href = `/learn/cervical-cancer/module-${moduleId}`
    }
  }

  const ActiveSectionComponent = sections.find((s) => s.id === activeSection)?.component || Section1_1
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
            currentModule={1}
            onModuleClick={handleModuleClick}
            showCertificate={true}
          />
        </div>

        {/* Module Header */}
        <Card className="mb-8 hover-shadow-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">Module 1: Introduction to Cervical Cancer</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Understanding the basics and importance of cervical cancer prevention
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
                  <p>45 minutes</p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Introductory Video */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Module Introduction</h4>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <video className="w-full h-full object-cover" poster="/placeholder.svg?height=300&width=500" controls>
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Button size="lg" className="gradient-orange-blue text-white">
                    <Play className="w-6 h-6 mr-2" />
                    Watch Introduction
                  </Button>
                </div>
              </div>
            </div>

            {/* Section Progress */}
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

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Section Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              <h4 className="font-semibold">Sections</h4>

              {/* Section Pathline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500 opacity-30"></div>

                {sections.map((section, index) => (
                  <div key={section.id} className="relative flex items-start mb-4">
                    {/* Path Node */}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        sectionProgress[section.id]?.completed
                          ? "bg-green-500 text-white"
                          : sectionProgress[section.id]?.unlocked
                            ? "gradient-orange-blue text-white"
                            : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {sectionProgress[section.id]?.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : sectionProgress[section.id]?.unlocked ? (
                        section.id
                      ) : (
                        <Lock className="w-3 h-3" />
                      )}
                    </div>

                    {/* Section Tab */}
                    <div
                      className={`ml-3 flex-1 cursor-pointer transition-all duration-300 ${
                        sectionProgress[section.id]?.unlocked ? "hover:scale-105" : "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => sectionProgress[section.id]?.unlocked && setActiveSection(section.id)}
                    >
                      <Card
                        className={`${
                          activeSection === section.id
                            ? "ring-2 ring-orange-500 shadow-lg"
                            : sectionProgress[section.id]?.unlocked
                              ? "hover-shadow-gradient"
                              : ""
                        }`}
                      >
                        <CardContent className="p-3">
                          <h5 className="font-medium text-sm mb-1">{section.title}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{section.description}</p>
                          {sectionProgress[section.id]?.completed && (
                            <Badge className="bg-green-100 text-green-800 text-xs mt-2">Complete</Badge>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="lg:col-span-3">
            <ActiveSectionComponent
              onComplete={() => handleSectionComplete(activeSection)}
              isUnlocked={sectionProgress[activeSection]?.unlocked || false}
            />
          </div>
        </div>

        {/* Module Completion */}
        {allSectionsCompleted && (
          <Card className="mt-8 hover-shadow-gradient">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Module 1 Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Congratulations! You've successfully completed the Introduction to Cervical Cancer module.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="/learn/cervical-cancer">
                    <Button className="gradient-orange-blue text-white hover-shadow-gradient">
                      Continue to Next Module
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    Review Module
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
