"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock, Dna } from 'lucide-react'
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section2_2Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "Understanding the Transformation Zone",
    content:
      "Cervical pre-cancer happens when the cells in the transformation zone of the cervix start to grow in an abnormal way. The transformation zone is a specific area of the cervix where two different types of cells meet. This area is particularly vulnerable to changes.",
    question: {
      text: "Where does cervical pre-cancer typically occur?",
      options: [
        "Throughout the entire cervix",
        "In the transformation zone of the cervix",
        "Only in the vagina",
        "In the uterus",
      ],
      correct: 1,
      explanation:
        "Cervical pre-cancer typically occurs in the transformation zone of the cervix, where different cell types meet.",
    },
  },
  {
    id: 2,
    title: "The Role of High-Risk HPV",
    content:
      "This usually occurs when a high-risk HPV infection stays in the body for a long time. High-risk HPV types can cause the cells in the transformation zone to change and grow abnormally. Not all HPV infections lead to pre-cancer, but persistent high-risk infections increase the risk significantly.",
    question: {
      text: "What typically causes cervical pre-cancer?",
      options: [
        "Any HPV infection",
        "A high-risk HPV infection that stays in the body for a long time",
        "Poor hygiene",
        "Genetic factors only",
      ],
      correct: 1,
      explanation:
        "Cervical pre-cancer typically occurs when a high-risk HPV infection persists in the body for an extended period.",
    },
  },
  {
    id: 3,
    title: "What Makes Cervical Cancer Different",
    content:
      "What makes cervical cancer different from many other cancers is that it usually starts as a pre-cancer that develops slowly over many years. Unlike some cancers that can appear suddenly, cervical cancer gives us warning signs through these pre-cancerous changes.",
    question: {
      text: "How is cervical cancer different from many other cancers?",
      options: [
        "It develops very quickly",
        "It usually starts as a pre-cancer that develops slowly over many years",
        "It cannot be detected early",
        "It only affects older women",
      ],
      correct: 1,
      explanation:
        "Cervical cancer is unique because it usually starts as a pre-cancer that develops slowly over many years, unlike some other cancers.",
    },
  },
  {
    id: 4,
    title: "The Opportunity for Prevention",
    content:
      "This slow development provides ample opportunity for detection and treatment. Because cervical pre-cancer develops gradually, there are many chances to detect these changes before they become cancer. This is why regular screening is so important and effective.",
    question: {
      text: "Why is the slow development of cervical pre-cancer important?",
      options: [
        "It makes treatment more difficult",
        "It provides ample opportunity for detection and treatment",
        "It means the cancer is more aggressive",
        "It only affects certain age groups",
      ],
      correct: 1,
      explanation:
        "The slow development of cervical pre-cancer provides many opportunities for early detection and treatment before it becomes cancer.",
    },
  },
]

export default function Section2_2({ onComplete, isUnlocked }: Section2_2Props) {
  const [currentCard, setCurrentCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [sectionCompleted, setSectionCompleted] = useState(false)

  const handleCardComplete = () => {
    if (!completedCards.includes(currentCard)) {
      setCompletedCards([...completedCards, currentCard])
    }
    setShowQuiz(true)
  }

  const handleQuizComplete = (correct: boolean) => {
    setShowQuiz(false)

    if (currentCard < learningCards.length - 1) {
      setCurrentCard(currentCard + 1)
    } else if (completedCards.length === learningCards.length - 1) {
      setSectionCompleted(true)
      onComplete()
    }
  }

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
    <div className="space-y-6">
      {/* Section Header */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <span>Section 2: What is Cervical Pre-Cancer?</span>
            </div>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Learning about precancerous changes in cervical cells and their significance
            </p>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {completedCards.length} / {learningCards.length} cards completed
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={(completedCards.length / learningCards.length) * 100} className="h-2" />
        </CardContent>
      </Card>

      {/* Learning Cards Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {learningCards.map((card, index) => (
          <Button
            key={card.id}
            variant={currentCard === index ? "default" : completedCards.includes(index) ? "secondary" : "outline"}
            size="sm"
            className={`h-12 ${
              currentCard === index
                ? "gradient-orange-pink text-white"
                : completedCards.includes(index)
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                  : ""
            }`}
            onClick={() => setCurrentCard(index)}
            disabled={index > Math.max(...completedCards, -1) + 1}
          >
            {completedCards.includes(index) ? "✓" : index + 1}
          </Button>
        ))}
      </div>

      {/* Current Learning Card */}
      <LearningCard
        card={learningCards[currentCard]}
        onComplete={handleCardComplete}
        isCompleted={completedCards.includes(currentCard)}
      />

      {/* Quiz Modal */}
      <QuizModal
        isOpen={showQuiz}
        question={learningCards[currentCard]?.question}
        onComplete={handleQuizComplete}
        onClose={() => setShowQuiz(false)}
      />

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentCard(Math.max(0, currentCard - 1))}
          disabled={currentCard === 0}
        >
          Previous Card
        </Button>

        {sectionCompleted ? (
          <Button className="gradient-orange-pink text-white">Section Complete ✓</Button>
        ) : (
          <Button
            onClick={() => setCurrentCard(Math.min(learningCards.length - 1, currentCard + 1))}
            disabled={currentCard >= Math.max(...completedCards, -1) + 1}
            className="gradient-orange-pink text-white"
          >
            Next Card
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
