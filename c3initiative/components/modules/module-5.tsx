"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Lock, Search, BarChart3, TrendingUp } from "lucide-react"
import PostTestModal from "@/components/post-test-modal"

interface Module5Props {
  onComplete: () => void
  isUnlocked: boolean
}

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

export default function Module5({ onComplete, isUnlocked }: Module5Props) {
  const [sectionProgress, setSectionProgress] = useState(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: { completed: false, unlocked: section.unlocked } }), {}),
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

      {/* Post Test Modal */}
      <PostTestModal
        isOpen={showPostTest}
        onClose={() => setShowPostTest(false)}
        onComplete={onComplete}
        moduleTitle="Diagnostics and Staging"
        moduleId={5}
      />
    </div>
  )
}
