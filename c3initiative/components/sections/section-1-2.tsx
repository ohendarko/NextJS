"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

interface Section1_2Props {
  onComplete: () => void
  isUnlocked: boolean
}

export default function Section1_2({ onComplete, isUnlocked }: Section1_2Props) {
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
    <Card className="hover-shadow-gradient">
      <CardHeader>
        <CardTitle>Section 2: Risk Factors and Causes</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">
          This section will cover the risk factors and causes of cervical cancer. Content coming soon...
        </p>
      </CardContent>
    </Card>
  )
}
