"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Section1_1 from "@/components/sections/section-1-1"
import Section1_2 from "@/components/sections/section-1-2"
import Section1_3 from "@/components/sections/section-1-3"
import PostTestModal from "@/components/post-test-modal"

interface Module1Props {
  onComplete: () => void
  isUnlocked: boolean
}

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

export default function Module1({ onComplete, isUnlocked }: Module1Props) {
  const [activeSection, setActiveSection] = useState(1)
  type SectionProgress = { [key: number]: { completed: boolean; unlocked: boolean } }
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

  const handlePostTestPass = () => {
    setShowPostTest(false)
    onComplete()
  }

  const ActiveSectionComponent = sections.find((s) => s.id === activeSection)?.component || Section1_1

  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Module Locked</h3>
          <p className="text-gray-600 dark:text-gray-400">Complete the previous module to unlock this content.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <Card className="hover-shadow-gradient">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Module 1: Introduction to Cervical Cancer</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This module has been moved to its dedicated page. Please navigate using the module links.
          </p>
        </CardContent>
      </Card>

      {/* Section Content */}
      <div className="grid lg:grid-cols-4 gap-6">
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
        onComplete={handlePostTestPass}
        moduleTitle="Introduction to Cervical Cancer"
        moduleId={1}
      />
    </div>
  )
}
