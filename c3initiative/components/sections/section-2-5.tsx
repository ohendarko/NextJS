"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Clock } from "lucide-react"

interface Section2_5Props {
  onComplete: () => void
  isUnlocked: boolean
}

export default function Section2_5({ onComplete, isUnlocked }: Section2_5Props) {
  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center">
        <Lock className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Section Locked</h3>
        <p className="text-gray-600 dark:text-gray-400">Complete the previous section to unlock this content.</p>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span>Section 5: Development Timeline of Cervical Cancer</span>
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            Understanding how cervical cancer develops gradually over 10-20 years
          </p>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold mb-4">Content Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This section will cover the timeline of cervical cancer development, from normal cells to HPV infection,
              pre-cancer, and invasive cancer.
            </p>
            <Button onClick={onComplete} className="gradient-orange-pink text-white">
              Mark as Complete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
