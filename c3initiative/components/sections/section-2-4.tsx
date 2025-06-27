"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock, AlertTriangle, Info } from 'lucide-react'
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section2_4Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "HPV: The Primary Cause",
    content:
      "Almost all cancers of the cervix are caused by a virus called the human papillomavirus, also known as HPV. This virus is responsible for nearly 100% of cervical cancer cases worldwide, making it the most important risk factor to understand.",
    question: {
      text: "What causes almost all cancers of the cervix?",
      options: ["Bacteria", "Human papillomavirus (HPV)", "Genetic factors", "Environmental toxins"],
      correct: 1,
      explanation: "Almost all cervical cancers are caused by the human papillomavirus (HPV).",
    },
  },
  {
    id: 2,
    title: "Many Types of HPV",
    content:
      "There are more than 100 different types of HPV, but not all types of HPV cause cervical cancer. Only certain high-risk types (particularly types 16 and 18) are responsible for most cervical cancers. Many HPV types are harmless and cause no health problems.",
    question: {
      text: "How many different types of HPV exist?",
      options: ["About 50", "More than 100", "Exactly 75", "Less than 25"],
      correct: 1,
      explanation: "There are more than 100 different types of HPV, but only some cause cervical cancer.",
    },
  },
  {
    id: 3,
    title: "How HPV Spreads",
    content:
      "HPV spreads from person to person through skin-to-skin contact of the genitals during sexual activity. This includes vaginal, anal, and oral sex. The virus can be transmitted even when an infected person has no signs or symptoms.",
    question: {
      text: "How does HPV spread between people?",
      options: [
        "Through blood contact",
        "Through skin-to-skin contact of the genitals during sexual activity",
        "Through respiratory droplets",
        "Through contaminated food or water",
      ],
      correct: 1,
      explanation: "HPV spreads through skin-to-skin contact of the genitals during sexual activity.",
    },
  },
  {
    id: 4,
    title: "HPV is Very Common",
    content:
      "HPV is very common and can affect both women and men. It is one of the most common sexually transmitted infections. Most sexually active people will get HPV at some point in their lives, often without knowing it.",
    question: {
      text: "Who can be affected by HPV?",
      options: ["Only women", "Only men", "Both women and men", "Only people over 30"],
      correct: 2,
      explanation: "HPV is very common and can affect both women and men of all ages.",
    },
  },
  {
    id: 5,
    title: "Anyone Sexually Active Could Have HPV",
    content:
      "Anyone who has ever been sexually active could have HPV. You can get HPV even if you have had sex with only one person. The virus is so common that most people get it soon after becoming sexually active.",
    question: {
      text: "Who could potentially have HPV?",
      options: [
        "Only people with multiple partners",
        "Anyone who has ever been sexually active",
        "Only people with symptoms",
        "Only people over 25",
      ],
      correct: 1,
      explanation: "Anyone who has ever been sexually active could have HPV, even with just one partner.",
    },
  },
  {
    id: 6,
    title: "The Body Usually Clears HPV",
    content:
      "In most cases, the body clears the virus on its own within one to two years. The immune system is usually able to fight off HPV infections naturally. Most people with HPV never develop any health problems from it.",
    question: {
      text: "What usually happens to HPV infections?",
      options: [
        "They always become cancer",
        "The body clears the virus on its own within one to two years",
        "They require immediate treatment",
        "They spread to other organs",
      ],
      correct: 1,
      explanation: "In most cases, the body clears HPV infections naturally within one to two years.",
    },
  },
  {
    id: 7,
    title: "When HPV Persists",
    content:
      "However, in rare cases where the virus doesn't go away, certain types of HPV can cause abnormal cell changes that may develop into cervical cancer over time. This is why persistent high-risk HPV infections are concerning and require monitoring.",
    question: {
      text: "What can happen when high-risk HPV doesn't go away?",
      options: [
        "Nothing happens",
        "It can cause abnormal cell changes that may develop into cervical cancer",
        "It automatically becomes cancer",
        "It spreads to other people more easily",
      ],
      correct: 1,
      explanation:
        "When high-risk HPV persists, it can cause abnormal cell changes that may develop into cervical cancer over time.",
    },
  },
]

export default function Section2_4({ onComplete, isUnlocked }: Section2_4Props) {
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
              <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <span>Section 4: HPV Infection</span>
            </div>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive overview of Human Papillomavirus and its role in cervical cancer
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

      {/* HPV Facts Overview */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card className="hover-shadow-gradient">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-orange-600">100+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">HPV Types</div>
          </CardContent>
        </Card>

        <Card className="hover-shadow-gradient">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 gradient-blue-pink rounded-full flex items-center justify-center mx-auto mb-3">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-600">1-2 Years</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Natural Clearance Time</div>
          </CardContent>
        </Card>

        <Card className="hover-shadow-gradient">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-pink-600">~100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cervical Cancers Caused by HPV</div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Cards Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
        {learningCards.map((card, index) => (
          <Button
            key={card.id}
            variant={currentCard === index ? "default" : completedCards.includes(index) ? "secondary" : "outline"}
            size="sm"
            className={`h-12 ${
              currentCard === index
                ? "gradient-orange-blue text-white"
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

      {/* Key HPV Facts */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-blue-500" />
            <span>Key HPV Facts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">High-Risk HPV Types</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <strong>Types 16 & 18:</strong> Cause ~70% of cervical cancers
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <strong>Other high-risk types:</strong> 31, 33, 35, 39, 45, 51, 52, 56, 58, 59
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-600">HPV Transmission</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Method:</strong> Skin-to-skin genital contact
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Activities:</strong> Vaginal, anal, and oral sex
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Note:</strong> Can occur even without symptoms
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
          <Button className="gradient-orange-blue text-white">Section Complete ✓</Button>
        ) : (
          <Button
            onClick={() => setCurrentCard(Math.min(learningCards.length - 1, currentCard + 1))}
            disabled={currentCard >= Math.max(...completedCards, -1) + 1}
            className="gradient-orange-blue text-white"
          >
            Next Card
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
