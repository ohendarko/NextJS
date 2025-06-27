"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock, Shield } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section2_3Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "HPV as the Primary Cause",
    content:
      "Cervical cancer is caused by long-lasting infection with certain high-risk types of HPV. This makes HPV the most important risk factor for cervical cancer development. Understanding this connection is crucial for prevention strategies.",
    question: {
      text: "What causes cervical cancer?",
      options: [
        "Genetic factors only",
        "Long-lasting infection with certain high-risk types of HPV",
        "Poor hygiene",
        "Age-related changes",
      ],
      correct: 1,
      explanation: "Cervical cancer is caused by long-lasting infection with certain high-risk types of HPV.",
    },
  },
  {
    id: 2,
    title: "The Process of Cell Changes",
    content:
      "Cervical cancer starts when cells in the cervix begin to change abnormally. These changes don't happen overnight but develop gradually over time. The process begins with normal cells that become infected with high-risk HPV.",
    question: {
      text: "How does cervical cancer start?",
      options: [
        "Cells suddenly become cancerous",
        "Cells in the cervix begin to change abnormally",
        "Only older cells are affected",
        "It starts in other organs first",
      ],
      correct: 1,
      explanation: "Cervical cancer starts when cells in the cervix begin to change abnormally over time.",
    },
  },
  {
    id: 3,
    title: "The Only Preventable Gynecologic Cancer",
    content:
      "Cervical cancer is the only gynecologic cancer that can be prevented through regular screening and HPV vaccination. This makes it unique among cancers affecting women's reproductive organs and highlights the importance of prevention programs.",
    question: {
      text: "What makes cervical cancer unique among gynecologic cancers?",
      options: [
        "It's the most common",
        "It only affects young women",
        "It's the only one that can be prevented through screening and vaccination",
        "It has no symptoms",
      ],
      correct: 2,
      explanation:
        "Cervical cancer is the only gynecologic cancer that can be prevented through regular screening and HPV vaccination.",
    },
  },
  {
    id: 4,
    title: "Early Detection and Prevention",
    content:
      "Regular screening helps detect or stop abnormal changes before they turn into cancer. This is why screening programs are so effective - they can catch problems early when they're easier to treat or even prevent cancer from developing.",
    question: {
      text: "How does regular screening help with cervical cancer?",
      options: [
        "It cures existing cancer",
        "It helps detect or stop abnormal changes before they turn into cancer",
        "It only works for older women",
        "It prevents all types of cancer",
      ],
      correct: 1,
      explanation:
        "Regular screening helps detect or stop abnormal changes before they turn into cancer, making prevention possible.",
    },
  },
  {
    id: 5,
    title: "Early Detection Leads to Cure",
    content:
      "In addition, if detected early and treated, cervical cancer can be cured. This emphasizes the critical importance of regular screening and early intervention. The earlier cervical cancer is found, the better the chances of successful treatment.",
    question: {
      text: "What happens when cervical cancer is detected early?",
      options: [
        "It spreads more quickly",
        "It can be cured with proper treatment",
        "It becomes more aggressive",
        "Treatment is not possible",
      ],
      correct: 1,
      explanation: "When detected early and treated properly, cervical cancer can be cured.",
    },
  },
]

export default function Section2_3({ onComplete, isUnlocked }: Section2_3Props) {
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
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span>Section 3: What is Cervical Cancer?</span>
            </div>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Understanding cervical cancer development, prevention, and the importance of early detection
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
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
