"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lock } from "lucide-react"

interface Module6Props {
  onComplete: () => void
  isUnlocked: boolean
}

export default function Module6({ onComplete, isUnlocked }: Module6Props) {
  console.log(onComplete)
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
    <Card className="hover-shadow-gradient">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-4">Module 6: Community Health and Advocacy</h3>
        <p className="text-gray-600 dark:text-gray-400">Content coming soon...</p>
      </CardContent>
    </Card>
  )
}
