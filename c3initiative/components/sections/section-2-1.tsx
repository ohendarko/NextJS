"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Globe } from "lucide-react"
import LearningCard from "@/components/learning-card"
import { sections } from "@/app/learn/cervical-cancer/module-2/page"

const learningCards = [
  {
    id: 1,
    title: "How the Body Works",
    content:
      "The human body is made up of millions of cells. Every day, new cells are made to help the body grow and to replace cells that are old or damaged.\n\nThis is a normal and healthy process that keeps our bodies functioning properly.",
    infographic: "/placeholder.svg?height=300&width=400&text=Normal+Cell+Cycle",
  },
  {
    id: 2,
    title: "What Happens When Cells Go Wrong",
    content:
      "Sometimes, during the cell-making process, cells may grow abnormally and become unhealthy. Normally, the body fixes these abnormal cells.\n\nBut if it can’t fix them, these cells may continue to grow and divide out of control.",
    infographic: "/placeholder.svg?height=300&width=400&text=Abnormal+Cell+Growth",
  },
  {
    id: 3,
    title: "What Is Cancer?",
    content:
      "Cancer is the term used when abnormal cells grow and divide in a malignant, uncontrolled way. These cells do not respond to normal body signals to stop growing.\n\nThis uncontrolled growth is what leads to tumors and other serious health problems.",
    infographic: "/placeholder.svg?height=300&width=400&text=What+Is+Cancer",
  },
];


interface Section1_1Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section2_1({ onComplete, isUnlocked }: Section1_1Props) {
  const [currentCard, setCurrentCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [sectionCompleted, setSectionCompleted] = useState(false)

  const handleCardComplete = () => {
    const cardId = learningCards[currentCard].id
    if (!completedCards.includes(cardId)) {
      setCompletedCards([...completedCards, cardId])
    }

    if (currentCard < learningCards.length - 1) {
      setCurrentCard(currentCard + 1)
    } else {
      setSectionCompleted(true)
    }
  }

  const handleSectionComplete = () => {
    onComplete(2) // Navigate to section 2
  }

  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center">
        <CardContent className="p-8 text-center">
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
                <CardTitle className="text-xl">Section 1: {sections[0].title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Understanding the global impact and importance of cervical cancer prevention
                </p>
              </div>
            </div>
            <div className="text-right">
              {sectionCompleted && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Complete
                </Badge>
              )}
              
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={(completedCards.length / learningCards.length) * 100} className="h-2" />
        </CardContent>
      </Card>

      {/* Learning Cards */}
      <div className="space-y-4">
        {learningCards.map((card, index) => (
          <LearningCard
            key={card.id}
            card={card}
            isActive={index === currentCard}
            isCompleted={completedCards.includes(card.id)}
            onComplete={handleCardComplete}
            canExpand={index <= currentCard}
          />
        ))}
      </div>

      {/* Section Completion */}
      {sectionCompleted && (
        <Card className="hover-shadow-gradient border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Section 1 Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  You've learned about the global impact of cervical cancer and why prevention is crucial.
                </p>
              </div>
              <Button onClick={handleSectionComplete} className="gradient-orange-blue text-white hover-shadow-gradient">
                Continue to Next Section
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
