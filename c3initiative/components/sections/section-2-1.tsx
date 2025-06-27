"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock, Microscope } from 'lucide-react'
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section2_1Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "The Body's Building Blocks",
    content:
      "The body is made up of millions of cells. These cells are the basic building blocks of all living things. Every part of your body - your skin, muscles, organs, and blood - is made up of these tiny cells working together.",
    question: {
      text: "What are the basic building blocks of the human body?",
      options: ["Tissues", "Organs", "Cells", "Muscles"],
      correct: 2,
      explanation: "Cells are the basic building blocks of all living things, including the human body.",
    },
  },
  {
    id: 2,
    title: "Daily Cell Renewal",
    content:
      "Every day, the body makes new cells to grow and replace old and damaged cells. This is a normal, healthy process that happens continuously throughout your life. Your body is constantly renewing itself at the cellular level.",
    question: {
      text: "What does the body do with old and damaged cells?",
      options: ["Stores them", "Replaces them with new cells", "Ignores them", "Converts them to energy"],
      correct: 1,
      explanation: "The body continuously makes new cells to replace old and damaged cells as part of normal renewal.",
    },
  },
  {
    id: 3,
    title: "When Cell Growth Goes Wrong",
    content:
      "Sometimes during this process, some cells may grow abnormally and become unhealthy. This can happen due to various factors like infections, toxins, or genetic changes. These abnormal cells don't function properly.",
    question: {
      text: "What can cause cells to grow abnormally?",
      options: [
        "Only genetic factors",
        "Only infections",
        "Infections, toxins, or genetic changes",
        "Only environmental factors",
      ],
      correct: 2,
      explanation:
        "Cells can grow abnormally due to various factors including infections, toxins, or genetic changes.",
    },
  },
  {
    id: 4,
    title: "The Body's Repair System",
    content:
      "Normally, the body fixes these abnormal cells. Your immune system and cellular repair mechanisms work to identify and correct problems with abnormal cells. This is one of your body's natural defense systems.",
    question: {
      text: "What normally happens to abnormal cells in the body?",
      options: ["They multiply rapidly", "The body fixes them", "They become cancerous", "They spread to other organs"],
      correct: 1,
      explanation: "Normally, the body's immune system and repair mechanisms fix abnormal cells.",
    },
  },
  {
    id: 5,
    title: "When Repair Systems Fail",
    content:
      "But if the body can't fix the abnormal cells, they may keep growing and dividing. When the body's natural repair and control systems fail, these abnormal cells can continue to multiply without the normal controls that limit cell growth.",
    question: {
      text: "What happens when the body cannot fix abnormal cells?",
      options: [
        "They disappear naturally",
        "They may keep growing and dividing",
        "They become normal again",
        "They stop functioning completely",
      ],
      correct: 1,
      explanation: "When the body cannot fix abnormal cells, they may continue to grow and divide uncontrollably.",
    },
  },
  {
    id: 6,
    title: "The Development of Cancer",
    content:
      "When abnormal cells keep growing and dividing uncontrollably, it can lead to cancer. Cancer is a term used for the malignant, autonomous and uncontrolled growth of cells and tissues. This uncontrolled growth can form tumors and spread to other parts of the body.",
    question: {
      text: "What is cancer?",
      options: [
        "Normal cell growth",
        "Malignant, autonomous and uncontrolled growth of cells and tissues",
        "Temporary cell damage",
        "Slow cell division",
      ],
      correct: 1,
      explanation:
        "Cancer is defined as the malignant, autonomous and uncontrolled growth of cells and tissues.",
    },
  },
]

export default function Section2_1({ onComplete, isUnlocked }: Section2_1Props) {
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
              <div className="w-12 h-12 gradient-blue-pink rounded-full flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <span>Section 1: What is Cancer?</span>
            </div>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Understanding the basic biology of cancer and how normal cells become cancerous
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {learningCards.map((card, index) => (
          <Button
            key={card.id}
            variant={currentCard === index ? "default" : completedCards.includes(index) ? "secondary" : "outline"}
            size="sm"
            className={`h-12 ${
              currentCard === index
                ? "gradient-blue-pink text-white"
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
          <Button className="gradient-blue-pink text-white">Section Complete ✓</Button>
        ) : (
          <Button
            onClick={() => setCurrentCard(Math.min(learningCards.length - 1, currentCard + 1))}
            disabled={currentCard >= Math.max(...completedCards, -1) + 1}
            className="gradient-blue-pink text-white"
          >
            Next Card
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
