"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Route } from "lucide-react"

interface Section2_6Props {
  onComplete: () => void
  isUnlocked: boolean
}

export default function Section2_6({ onComplete, isUnlocked }: Section2_6Props) {
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
            <div className="w-12 h-12 gradient-blue-pink rounded-full flex items-center justify-center">
              <Route className="w-6 h-6 text-white" />
            </div>
            <span>Section 6: Cancer Progression Routes</span>
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            How invasive cervical cancer spreads through the body as it progresses
          </p>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold mb-4">Content Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This section will cover the four routes of cancer progression: within the cervix, to nearby organs,
              through the lymph system, and to distant parts of the body.
            </p>
            <Button onClick={onComplete} className="gradient-blue-pink text-white">
              Mark as Complete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
