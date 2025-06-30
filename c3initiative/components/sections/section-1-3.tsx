"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Shield } from "lucide-react"
import LearningCard from "@/components/learning-card"
import { useRouter } from "next/navigation"

const learningCards = [
  {
    id: 1,
    title: "Primary Prevention: HPV Vaccination",
    content:
      "HPV vaccines protect against infection with HPV types that cause most cervical cancers. The vaccines are most effective when given before any exposure to HPV.\n\nThe CDC recommends HPV vaccination for all preteens (both boys and girls) at age 11 or 12 years. The vaccine can be given as early as age 9 and up to age 26 for those who didn't get vaccinated when younger.",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+Vaccination+Schedule",
  },
  {
    id: 2,
    title: "Secondary Prevention: Screening",
    content:
      "Regular screening can find precancerous changes in the cervix before they become cancer. \nTwo main tests are used:\n• Pap test (Pap smear): Looks for precancers and cancer cells\n• HPV test: Looks for the virus that can cause these cell changes\nBoth tests can be done in a doctor's office during a pelvic exam.\n\nCurrent screening recommendations:\n• Ages 21-29: Pap test every 3 years\n• Ages 30-65: Pap test + HPV test every 5 years (preferred) OR Pap test alone every 3 years\n• Over 65: May stop screening if recent tests were normal\n\nWomen who have had a hysterectomy may not need screening.",
    infographic: "/placeholder.svg?height=300&width=400&text=Cervical+Screening+Methods",
  },
  {
    id: 3,
    title: "Lifestyle Prevention",
    content:
      "Additional ways to reduce cervical cancer risk:\n\n• Limit number of sexual partners\n• Use condoms (though they don't provide complete protection against HPV)\n• Don't smoke tobacco\n• Get regular screening tests\n• Follow up on abnormal test results\n• Consider HPV vaccination if eligible",
    infographic: "/placeholder.svg?height=300&width=400&text=Lifestyle+Prevention+Tips",
  },
]

interface Section1_3Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section1_3({ onComplete, isUnlocked }: Section1_3Props) {
  const router = useRouter()
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
    onComplete() // Complete the module (no next section)
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
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Section 3: Prevention Overview</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Introduction to prevention strategies and early intervention
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
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Section 3 Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  You've learned about prevention strategies including vaccination and screening.
                </p>
              </div>
              <Button onClick={() => {
                  handleSectionComplete;
                  router.push("/learn/cervical-cancer")

                }} className="gradient-orange-blue text-white hover-shadow-gradient">
                Complete Module 1
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
