"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield, Syringe } from "lucide-react"
import PostTestModal from "@/components/post-test-modal"

interface Module4Props {
  onComplete: () => void
  isUnlocked: boolean
}

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

export default function Module4({ onComplete, isUnlocked }: Module4Props) {
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
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Section Progress</h4>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {completedSections} / {sections.length} Complete
              </span>
            </div>
            <Progress value={(completedSections / sections.length) * 100} className="h-2" />
          </div>

          {/* Module Overview */}
          <div className="grid md:grid-cols-2 gap-4">
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

      {/* Post Test Modal */}
      <PostTestModal
        isOpen={showPostTest}
        onClose={() => setShowPostTest(false)}
        onComplete={onComplete}
        moduleTitle="HPV Vaccination"
        moduleId={4}
      />
    </div>
  )
}
