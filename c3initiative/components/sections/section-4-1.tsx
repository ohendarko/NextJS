"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Globe } from "lucide-react"
import LearningCard from "@/components/learning-card"

const learningCards = [
  {
    id: 1,
    title: "What is HPV and Why Vaccinate Early?",
    content: "Human papillomavirus (HPV) is the most common sexually transmitted infection (STI).\nCervical cancer is caused by high-risk types of HPV.\nThere are currently vaccines that prevent infections from high-risk HPV types.\nVaccinating girls before initiation of sexual activity is an important primary prevention intervention against cervical cancer.",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+Basics"
  },
  {
    id: 2,
    title: "WHO Recommendations on HPV Vaccines",
    content: "1. Eligible individuals for vaccination:\n• Target group: girls aged 9–14 years\n• Other groups include:\n  – Girls aged 15 years and older\n  – Immunocompromised individuals, including those living with HIV\n\n2. Appropriate dosing schedule and target population:\n• Girls <15 years:\n  – One or two doses required\n  – Interval between doses: 6 months\n  – If 2nd dose <5 months after 1st, a 3rd dose is needed\n• Girls 15–20 years: One or two doses\n• Women >21 years: Two doses, 6 months apart\n• Immunocompromised individuals:\n  – Minimum of 2 doses; 3 when feasible\n  – 1–2 months between dose 1 and 2\n  – 3rd dose 6 months after the 1st",
    infographic: "/placeholder.svg?height=300&width=400&text=WHO+HPV+Recommendations"
  }
];



interface Section1_1Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section4_1({ onComplete, isUnlocked }: Section1_1Props) {
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
                <CardTitle className="text-xl">Section 1: Key WHO Recommendations ON HPV Vaccines</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Learn WHO recommendations for HPV vaccination by age and risk
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
