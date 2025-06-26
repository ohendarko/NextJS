"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, BookOpen } from "lucide-react"

interface LearningCardProps {
  card: {
    id: number
    title: string
    content: string
  }
  onComplete: () => void
  isCompleted: boolean
}

export default function LearningCard({ card, onComplete, isCompleted }: LearningCardProps) {
  return (
    <Card className="hover-shadow-gradient">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-orange-blue rounded-full flex items-center justify-center">
              {isCompleted ? (
                <CheckCircle className="w-6 h-6 text-white" />
              ) : (
                <BookOpen className="w-6 h-6 text-white" />
              )}
            </div>
            <span>{card.title}</span>
          </div>
          {isCompleted && <span className="text-green-600 text-sm">✓ Completed</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">{card.content}</p>
        </div>

        {!isCompleted && (
          <div className="flex justify-end">
            <Button onClick={onComplete} className="gradient-orange-blue text-white hover-shadow-gradient">
              I've Read This
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
