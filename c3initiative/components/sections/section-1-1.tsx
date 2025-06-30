"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Globe } from "lucide-react"
import LearningCard from "@/components/learning-card"

import Section2_1 from "@/components/sections/section-2-1"
import Section2_2 from "@/components/sections/section-2-2"
import Section2_3 from "@/components/sections/section-2-3"
import Section2_4 from "@/components/sections/section-2-4"
import Section2_5 from "@/components/sections/section-2-5"
import Section2_6 from "@/components/sections/section-2-6"
import Section2_7 from "@/components/sections/section-2-7"

export const sections = [
  {
    id: 1,
    title: "What Is Cancer?",
    description: "Understanding how abnormal cells lead to cancer",
    component: Section2_1,
    completed: false,
    unlocked: true,
  },
  {
    id: 2,
    title: "What is Cervical Pre-Cancer?",
    description: "How cervical pre-cancer forms and why it matters",
    component: Section2_2,
    completed: false,
    unlocked: false,
  },
  {
    id: 3,
    title: "What is Cervical Cancer?",
    description: "Learn how HPV causes cervical cancer and how it can be prevented",
    component: Section2_3,
    completed: false,
    unlocked: false,
  },
  {
    id: 4,
    title: "HPV Infection",
    description: "Understand what HPV is, how it's transmitted, and why it's so common",
    component: Section2_4,
    completed: false,
    unlocked: false,
  },
  {
    id: 5,
    title: "Timeline of Cervical Cancer",
    description: "How cervical cancer develops slowly and the importance of early detection",
    component: Section2_5,
    completed: false,
    unlocked: false,
  },
  {
    id: 6,
    title: "How Cancer Spreads",
    description: "Explore the four ways cervical cancer can spread through the body",
    component: Section2_6,
    completed: false,
    unlocked: false,
  },
  {
    id: 7,
    title: "HIV and Cervical Cancer",
    description: "Understand how HIV increases risk and affects the outcome of cervical cancer",
    component: Section2_7,
    completed: false,
    unlocked: false,
  },
];

const learningCards = [
  {
    id: 1,
    title: "Global Impact of Cervical Cancer",
    content:
      "Every year, around 266,000 women die from cervical cancer worldwide. This staggering number represents not just statistics, but real lives lost to a largely preventable disease.\n\nMost of these deaths can be prevented through proper cervical cancer prevention and treatment programs. This highlights the critical importance of education, screening, and accessible healthcare.",
    infographic: "/placeholder.svg?height=300&width=400&text=Global+Cervical+Cancer+Statistics",
  },
  {
    id: 2,
    title: "HPV Connection",
    content:
      "Almost all cervical cancer is caused by a long-lasting infection with certain harmful types of the human papillomavirus (HPV). Understanding this connection is key to prevention strategies.\n\nThe disease usually develops slowly over 10–20 years. This gives enough time to detect and treat it early, making regular screening incredibly valuable for prevention.",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+to+Cancer+Timeline",
  },
  {
    id: 3,
    title: "Early Detection Methods",
    content:
      "There are low-cost tests that can find pre-cancer early. These screening methods are accessible and effective tools for preventing cervical cancer development.\n\nHPV vaccines are now available. If given to girls before they become sexually active, a large portion of cervical cancer can be prevented. This represents a major breakthrough in prevention.",
    infographic: "/placeholder.svg?height=300&width=400&text=Prevention+Methods+Infographic",
  },
]

interface Section1_1Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section1_1({ onComplete, isUnlocked }: Section1_1Props) {
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
                <CardTitle className="text-xl">Section 1: Reasons to Focus on Cervical Cancer</CardTitle>
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
