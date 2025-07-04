"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Microscope } from "lucide-react"
import LearningCard from "@/components/learning-card"

const learningCards = [
  {
    id: 1,
    title: "Importance and Use of Staging",
    content: "Cervical cancer staging is done using international staging systems.\n• Importance:\n  – Determines cancer invasion extent and metastasis\n  – Guides treatment decisions\n\nFIGO is the most widely used staging system:\n• FIGO = International Federation of Gynaecology and Obstetrics\n• Classifies cancer by tumor size, pelvic spread, and distant spread",
    infographic: "/placeholder.svg?height=300&width=400&text=Why+Staging+Matters"
  },
  {
    id: 2,
    title: "Stages of Cervical Cancer (FIGO)",
    content: "FIGO system defines 4 stages:\n• Stage I: Disease confined to cervix\n• Stage II: Cancer spread beyond cervix, not to pelvic wall/lower vagina\n• Stage III: Cancer spread to pelvic wall/lower vagina\n• Stage IV: Spread to surrounding organs/distant tissues (lungs, lymph nodes)",
    infographic: "/placeholder.svg?height=300&width=400&text=FIGO+Staging"
  }
];

interface Section1_2Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section5_2({ onComplete, isUnlocked }: Section1_2Props) {
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
    onComplete(3) // Navigate to section 3
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
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Section 2: Cervical Cancer Staging</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Learn how cervical cancer staging is done and what FIGO means
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
              <p className="text-sm text-gray-500 mt-1">
                {completedCards.length} / {learningCards.length} cards
              </p>
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
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Section 2 Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  You've learned about HPV and the risk factors for cervical cancer development.
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
