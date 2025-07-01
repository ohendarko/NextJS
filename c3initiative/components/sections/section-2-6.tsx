"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Microscope } from "lucide-react"
import LearningCard from "@/components/learning-card"
import { sections } from "./section-1"

const learningCards = [
  {
    id: 1,
    title: "How Cervical Cancer Spreads",
    content:
      "There are four, usually sequential, routes through which invasive cancer progresses.\n\nHow cervical cancer spreads:\na) Within the cervix: It can start small and gradually grow to cover the whole cervix, which may become as large as 8 cm. The cancer might form an open sore, grow outward, or spread inward.",
    infographic: "/placeholder.svg?height=300&width=400&text=Spread+Within+Cervix",
  },
  {
    id: 2,
    title: "Spread to Nearby Organs and Lymph Nodes",
    content:
      "b) To nearby organs: It can directly spread in all directions — downward to the vagina, upward into the uterus, sideways to pelvic tissues and ureters, backward to the rectum, and forward to the bladder.\n\nc) Through the lymph system: Even if still in the cervix, it may spread to nearby lymph nodes in ~15% of cases. It can eventually reach distant nodes like the collarbone or groin.",
    infographic: "/placeholder.svg?height=300&width=400&text=Organ+and+Lymph+Spread",
  },
  {
    id: 3,
    title: "Spread to Distant Organs",
    content:
      "d) To distant parts of the body: Cancer cells can travel through the blood or lymph and reach places like the liver, bones, lungs, or brain.\n\nImportant note:\nInvasive cervical cancer can often be cured with proper treatment if caught early. But without treatment, it usually spreads and becomes life-threatening.",
    infographic: "/placeholder.svg?height=300&width=400&text=Distant+Spread+and+Prognosis",
  },
];


interface Section1_2Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section2_6({ onComplete, isUnlocked }: Section1_2Props) {
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
                <CardTitle className="text-xl">Section 6: {sections[5].title} </CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Exploring the primary causes and risk factors for cervical cancer
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
