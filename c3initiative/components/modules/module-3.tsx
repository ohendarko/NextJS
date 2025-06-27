"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Lock, AlertTriangle, Stethoscope, Search } from "lucide-react"
import PostTestModal from "@/components/post-test-modal"

interface Module3Props {
  onComplete: () => void
  isUnlocked: boolean
}

const sections = [
  {
    id: 1,
    title: "Risk Factors",
    description: "Understanding factors that increase cervical cancer risk",
    completed: false,
    unlocked: true,
    icon: AlertTriangle,
  },
  {
    id: 2,
    title: "Signs and Symptoms",
    description: "Early and advanced disease symptoms",
    completed: false,
    unlocked: false,
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Screening Methods",
    description: "HPV testing, VIA, and cytology-based screening",
    completed: false,
    unlocked: false,
    icon: Search,
  },
]

type SectionProgress = {
  [id: number]: {
    completed: boolean
    unlocked: boolean
  }
}

export default function Module3({ onComplete, isUnlocked }: Module3Props) {
  const [sectionProgress, setSectionProgress] = useState<SectionProgress>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: { completed: false, unlocked: section.unlocked } }), {} as SectionProgress),
  )

  const [showPostTest, setShowPostTest] = useState(false)

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
              <CardTitle className="text-3xl">Module 3: Risk Factors, Signs, Symptoms and Screening</CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Understanding risk factors, recognizing symptoms, and learning about screening methods
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
                <p>50 minutes</p>
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

          {/* Module Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <Card key={section.id} className="hover-shadow-gradient">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{section.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{section.description}</p>
                    {sectionProgress[section.id]?.completed && (
                      <Badge className="bg-green-100 text-green-800 text-xs mt-2">Complete</Badge>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Content Coming Soon */}
      <Card className="hover-shadow-gradient">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Module Content Coming Soon</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This module will cover risk factors for cervical cancer, early and advanced symptoms, and comprehensive
            screening methods including HPV testing, VIA, and cytology-based approaches.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
              <strong>Risk Factors:</strong> HPV infection, immunocompromised status, multiple partners, early sexual
              activity, smoking, oral contraceptives
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <strong>Symptoms:</strong> Abnormal bleeding, discharge, pain during sex, advanced disease symptoms
            </div>
            <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded">
              <strong>Screening:</strong> HPV testing, VIA, Pap smears, liquid-based cytology
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post Test Modal */}
      <PostTestModal
        isOpen={showPostTest}
        onClose={() => setShowPostTest(false)}
        onComplete={onComplete}
        moduleTitle="Risk Factors, Signs, Symptoms and Screening"
        moduleId={3}
      />
    </div>
  )
}
