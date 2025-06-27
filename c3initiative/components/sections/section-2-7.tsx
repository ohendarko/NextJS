"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Shield } from "lucide-react"

interface Section2_7Props {
  onComplete: () => void
  isUnlocked: boolean
}

export default function Section2_7({ onComplete, isUnlocked }: Section2_7Props) {
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
            <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span>Section 7: Cervical Cancer and HIV</span>
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            The relationship between HIV infection and cervical cancer development
          </p>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold mb-4">Content Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This section will cover how HIV affects cervical cancer risk, earlier onset in HIV-positive women, and the
              importance of screening in immunocompromised individuals.
            </p>
            <Button onClick={onComplete} className="gradient-orange-blue text-white">
              Mark as Complete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
