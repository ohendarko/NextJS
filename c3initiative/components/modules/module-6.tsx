"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Lock, Stethoscope, Heart } from "lucide-react"
import PostTestModal from "@/components/post-test-modal"

interface Module6Props {
  onComplete: () => void
  isUnlocked: boolean
}

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

export default function Module6({ onComplete, isUnlocked }: Module6Props) {
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
      <Card className="hover-shadow-gradient">
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
      <Card className="hover-shadow-gradient border-2 border-green-500">
        <CardContent className="p-6 text-center">
          <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-600 mb-2">Hope and Prevention</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Cervical cancer is preventable, treatable, and when caught early often curable. Through early screening,
            proper treatment, and supportive care, lives can be saved and the well-being of women and families improved.
          </p>
        </CardContent>
      </Card>

      {/* Post Test Modal */}
      <PostTestModal
        isOpen={showPostTest}
        onClose={() => setShowPostTest(false)}
        onComplete={onComplete}
        moduleTitle="Treatment and Palliative Care"
        moduleId={6}
      />
    </div>
  )
}
