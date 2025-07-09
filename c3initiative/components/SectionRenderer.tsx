"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, ArrowRight, Globe } from "lucide-react"
import LearningCard from "@/components/learning-card"

interface SectionRendererProps {
  section: {
    id: string
    title: string
    description: string
    order: number
    learningCards: {
      id: string | number
      title: string
      content: string
      infographic?: string
    }[]
  }
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function SectionRenderer({ section, onComplete, isUnlocked }: SectionRendererProps) {
  const [currentCard, setCurrentCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])

  const [showCompletionModal, setShowCompletionModal] = useState(false)

  useEffect(() => {
    const allCompleted = completedCards.length === section.learningCards.length
    if (allCompleted) {
      setShowCompletionModal(true)
    }
  }, [completedCards, section.learningCards.length])

  const handleCardComplete = (direction: "next" | "prev") => {
    if (!completedCards.includes(currentCard)) {
      setCompletedCards((prev) => [...prev, currentCard])
    }

    if (direction === "next") {
      if (currentCard < section.learningCards.length - 1) {
        setCurrentCard((prev) => prev + 1)
      }
    }

    if (direction === "prev") {
      if (currentCard > 0) {
        setCurrentCard((prev) => prev - 1)
      }
    }
  }


  const handleSectionComplete = () => {
    setShowCompletionModal(false)
    onComplete(section.order + 1)
  }

  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center">
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Section Locked</h3>
          <p className="text-gray-600 dark:text-gray-400">Complete the previous section to unlock this content.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{section.description}</p>
              </div>
            </div>
            <div className="text-right">
              {completedCards.length === section.learningCards.length && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Complete
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress
            value={(completedCards.length / section.learningCards.length) * 100}
            className="h-2 [&>div]:bg-orange-400 [&>div]:rounded"
          />
        </CardContent>
      </Card>

      {/* Learning Cards Carousel */}
      <div className="relative flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="w-full h-full"
          >
            <LearningCard
              key={section.learningCards[currentCard].id}
              card={section.learningCards[currentCard]}
              isActive
              isCompleted={completedCards.includes(currentCard)}
              onComplete={handleCardComplete}
              canExpand
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Completion Dialog */}
      <Dialog open={showCompletionModal} onOpenChange={setShowCompletionModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-green-600">Section Complete!</DialogTitle>
            <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
              You've completed this section. Let's move to the next one.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <Button onClick={handleSectionComplete} className="gradient-orange-blue text-white hover-shadow-gradient">
              Continue to Next Section
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
