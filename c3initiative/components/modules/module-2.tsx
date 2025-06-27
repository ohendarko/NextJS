"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Lock, Microscope, Dna, Clock, Route, Shield, AlertTriangle } from 'lucide-react'
import Section2_1 from "@/components/sections/section-2-1"
import Section2_2 from "@/components/sections/section-2-2"
import Section2_3 from "@/components/sections/section-2-3"
import Section2_4 from "@/components/sections/section-2-4"
import Section2_5 from "@/components/sections/section-2-5"
import Section2_6 from "@/components/sections/section-2-6"
import Section2_7 from "@/components/sections/section-2-7"
import PostTestModal from "@/components/post-test-modal"

interface Module2Props {
  onComplete: () => void
  isUnlocked: boolean
}

const sections = [
  {
    id: 1,
    title: "What is Cancer?",
    description: "Understanding the basic biology of cancer and cell growth",
    component: Section2_1,
    completed: false,
    unlocked: true,
    icon: Microscope,
  },
  {
    id: 2,
    title: "What is Cervical Pre-Cancer?",
    description: "Learning about precancerous changes in cervical cells",
    component: Section2_2,
    completed: false,
    unlocked: false,
    icon: Dna,
  },
  {
    id: 3,
    title: "What is Cervical Cancer?",
    description: "Understanding cervical cancer development and prevention",
    component: Section2_3,
    completed: false,
    unlocked: false,
    icon: Shield,
  },
  {
    id: 4,
    title: "HPV Infection",
    description: "Comprehensive overview of Human Papillomavirus",
    component: Section2_4,
    completed: false,
    unlocked: false,
    icon: AlertTriangle,
  },
  {
    id: 5,
    title: "Development Timeline",
    description: "How cervical cancer develops over time",
    component: Section2_5,
    completed: false,
    unlocked: false,
    icon: Clock,
  },
  {
    id: 6,
    title: "Cancer Progression Routes",
    description: "How invasive cancer spreads through the body",
    component: Section2_6,
    completed: false,
    unlocked: false,
    icon: Route,
  },
  {
    id: 7,
    title: "Cervical Cancer and HIV",
    description: "The relationship between HIV and cervical cancer",
    component: Section2_7,
    completed: false,
    unlocked: false,
    icon: Shield,
  },
]

type SectionProgress = {
  [key: number]: { completed: boolean; unlocked: boolean }
}

export default function Module2({ onComplete, isUnlocked }: Module2Props) {
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

    // Check if all sections are completed
    const allCompleted = sections.every((section) => section.id === sectionId || sectionProgress[section.id]?.completed)

    if (allCompleted) {
      setShowPostTest(true)
    }
  }

  const handlePostTestComplete = () => {
    setShowPostTest(false)
    onComplete()
  }

  const ActiveSectionComponent = sections.find((s) => s.id === activeSection)?.component || Section2_1
  const completedSections = Object.values(sectionProgress).filter((p) => p.completed).length
  const allSectionsCompleted = completedSections === sections.length

  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center">
        <Lock className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Module Locked</h3>
        <p className="text-gray-600 dark:text-gray-400">Complete the previous module to unlock this content.</p>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">Module 2: Cervical Cancer - An Overview</CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Understanding cancer biology, HPV infection, and cervical cancer development
              </p>
            </div>
            <div className="text-right space-y-2">
              {allSectionsCompleted && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  Module Complete
                </Badge>
              )}
              <div className="text-sm text-gray-500">
                <p>7 Sections</p>
                <p>60 minutes</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
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

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-pink-500 opacity-30"></div>

              {sections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <div key={section.id} className="relative flex items-start mb-4">
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        sectionProgress[section.id]?.completed
                          ? "bg-green-500 text-white"
                          : sectionProgress[section.id]?.unlocked
                            ? "gradient-blue-pink text-white"
                            : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {sectionProgress[section.id]?.completed ? (
                        "✓"
                      ) : sectionProgress[section.id]?.unlocked ? (
                        <IconComponent className="w-4 h-4" />
                      ) : (
                        <Lock className="w-3 h-3" />
                      )}
                    </div>

                    <div
                      className={`ml-3 flex-1 cursor-pointer transition-all duration-300 ${
                        sectionProgress[section.id]?.unlocked ? "hover:scale-105" : "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => sectionProgress[section.id]?.unlocked && setActiveSection(section.id)}
                    >
                      <Card
                        className={`${
                          activeSection === section.id
                            ? "ring-2 ring-blue-500 shadow-lg"
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
                )
              })}
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

      {/* Post Test Modal */}
      <PostTestModal
        isOpen={showPostTest}
        onClose={() => setShowPostTest(false)}
        onComplete={handlePostTestComplete}
        moduleTitle="Cervical Cancer - An Overview"
        moduleId={2}
      />
    </div>
  )
}

