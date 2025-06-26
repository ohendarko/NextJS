"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section1_1Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "Global Impact of Cervical Cancer",
    content:
      "Every year, around 266,000 women die from cervical cancer worldwide. This staggering number represents not just statistics, but real lives lost to a largely preventable disease.",
    question: {
      text: "Approximately how many women die from cervical cancer worldwide each year?",
      options: ["150,000", "266,000", "400,000", "500,000"],
      correct: 1,
      explanation:
        "According to global health statistics, approximately 266,000 women die from cervical cancer each year worldwide.",
    },
  },
  {
    id: 2,
    title: "Prevention Potential",
    content:
      "Most of these deaths can be prevented through proper cervical cancer prevention and treatment programs. This highlights the critical importance of education, screening, and accessible healthcare.",
    question: {
      text: "What percentage of cervical cancer deaths can be prevented with proper programs?",
      options: ["50%", "70%", "Most deaths", "All deaths"],
      correct: 2,
      explanation:
        "Most cervical cancer deaths can be prevented through proper prevention and treatment programs, making education and screening crucial.",
    },
  },
  {
    id: 3,
    title: "HPV Connection",
    content:
      "Almost all cervical cancer is caused by a long-lasting infection with certain harmful types of the human papillomavirus (HPV). Understanding this connection is key to prevention strategies.",
    question: {
      text: "What causes almost all cases of cervical cancer?",
      options: ["Genetic factors", "HPV infection", "Poor diet", "Smoking"],
      correct: 1,
      explanation:
        "Almost all cervical cancer cases are caused by long-lasting infection with certain harmful types of HPV (Human Papillomavirus).",
    },
  },
  {
    id: 4,
    title: "Disease Development Timeline",
    content:
      "The disease usually develops slowly over 10–20 years. This gives enough time to detect and treat it early, making regular screening incredibly valuable for prevention.",
    question: {
      text: "How long does cervical cancer typically take to develop?",
      options: ["1-2 years", "5-7 years", "10-20 years", "25-30 years"],
      correct: 2,
      explanation:
        "Cervical cancer usually develops slowly over 10-20 years, providing ample opportunity for early detection and treatment.",
    },
  },
  {
    id: 5,
    title: "Early Detection Methods",
    content:
      "There are low-cost tests that can find pre-cancer early. These screening methods are accessible and effective tools for preventing cervical cancer development.",
    question: {
      text: "What is available to detect cervical pre-cancer early?",
      options: [
        "Expensive specialized tests",
        "Low-cost screening tests",
        "Only surgical procedures",
        "Blood tests only",
      ],
      correct: 1,
      explanation:
        "Low-cost screening tests are available that can effectively detect pre-cancerous changes early, making prevention accessible.",
    },
  },
  {
    id: 6,
    title: "HPV Vaccination",
    content:
      "HPV vaccines are now available. If given to girls before they become sexually active, a large portion of cervical cancer can be prevented. This represents a major breakthrough in prevention.",
    question: {
      text: "When should HPV vaccines be given for maximum effectiveness?",
      options: ["After diagnosis", "During treatment", "Before sexual activity", "At any age"],
      correct: 2,
      explanation:
        "HPV vaccines are most effective when given to girls before they become sexually active, preventing a large portion of cervical cancer cases.",
    },
  },
]

export default function Section1_1({ onComplete, isUnlocked }: Section1_1Props) {
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
            <span>Section 1: Reasons to Focus on Cervical Cancer</span>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Understanding the global impact and importance of cervical cancer prevention
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
