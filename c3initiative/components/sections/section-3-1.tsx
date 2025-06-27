"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Users, Cigarette, Shield, Heart, Clock } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section31Props {
  onComplete: () => void
}

const learningCards = [
  {
    id: 1,
    title: "Human Papillomavirus (HPV) Infection",
    content: `HPV infection is the primary risk factor for cervical cancer. High-risk HPV types, particularly HPV 16 and 18, are responsible for approximately 70% of cervical cancers worldwide.

Key points about HPV:
• HPV is a sexually transmitted infection
• Most sexually active people will get HPV at some point
• The immune system usually clears HPV naturally
• Persistent infection with high-risk HPV types can lead to cervical cancer
• HPV 16 and 18 are the most dangerous types`,
    icon: AlertTriangle,
    color: "red",
    quiz: {
      question: "Which HPV types are responsible for approximately 70% of cervical cancers?",
      options: ["HPV 6 and 11", "HPV 16 and 18", "HPV 31 and 33", "HPV 45 and 52"],
      correctAnswer: 1,
      explanation:
        "HPV 16 and 18 are the high-risk HPV types responsible for approximately 70% of all cervical cancers worldwide. These are the most oncogenic (cancer-causing) HPV types.",
    },
  },
  {
    id: 2,
    title: "Immunocompromised Status",
    content: `People with weakened immune systems have a significantly higher risk of developing cervical cancer, particularly those living with HIV.

Why immunocompromised individuals are at higher risk:
• Reduced ability to clear HPV infections naturally
• Higher likelihood of persistent HPV infection
• Faster progression from HPV infection to cancer
• HIV-positive women have 5-6 times higher risk
• Other immunosuppressive conditions also increase risk`,
    icon: Shield,
    color: "orange",
    quiz: {
      question: "Why are immunocompromised individuals at higher risk for cervical cancer?",
      options: [
        "They are more likely to get HPV",
        "They cannot clear HPV infections as effectively",
        "They have more sexual partners",
        "They don't get screened regularly",
      ],
      correctAnswer: 1,
      explanation:
        "Immunocompromised individuals have a reduced ability to clear HPV infections naturally, leading to persistent infections that are more likely to progress to cervical cancer.",
    },
  },
  {
    id: 3,
    title: "Other Sexually Transmitted Infections",
    content: `Other STIs increase the risk of HPV infection and cervical cancer by creating inflammation and making it easier for HPV to establish persistent infection.

STIs that increase cervical cancer risk:
• Herpes simplex virus (HSV)
• Chlamydia trachomatis
• Gonorrhea
• Syphilis
• These infections cause inflammation and tissue damage
• They may suppress local immune responses`,
    icon: Heart,
    color: "pink",
    quiz: {
      question: "How do other STIs increase cervical cancer risk?",
      options: [
        "They directly cause cancer",
        "They increase the risk of getting HPV",
        "They prevent HPV vaccination",
        "They cause genetic mutations",
      ],
      correctAnswer: 1,
      explanation:
        "Other STIs increase cervical cancer risk by making it easier for HPV to establish infection and by creating inflammation that may impair the local immune response to HPV.",
    },
  },
  {
    id: 4,
    title: "Multiple Sexual Partners",
    content: `Having multiple sexual partners increases the likelihood of HPV exposure and infection, which is the primary pathway to cervical cancer.

Risk factors related to sexual behavior:
• More partners = higher HPV exposure risk
• Partner's sexual history also matters
• Age at first sexual contact is important
• Barrier protection reduces but doesn't eliminate risk
• Sexual behavior of partners affects risk`,
    icon: Users,
    color: "blue",
    quiz: {
      question: "Why does having multiple sexual partners increase cervical cancer risk?",
      options: [
        "It causes hormonal changes",
        "It increases exposure to HPV",
        "It weakens the immune system",
        "It causes cervical trauma",
      ],
      correctAnswer: 1,
      explanation:
        "Having multiple sexual partners increases the likelihood of exposure to HPV, which is the primary cause of cervical cancer. Each new partner represents a potential source of HPV infection.",
    },
  },
  {
    id: 5,
    title: "Early Onset of Sexual Activity",
    content: `Beginning sexual activity at a young age increases cervical cancer risk because the cervix is still developing and more vulnerable to HPV infection.

Why early sexual activity increases risk:
• Adolescent cervix is more susceptible to HPV
• Immature cervical cells are easier to infect
• Longer lifetime exposure to potential HPV infection
• Cervical transformation zone is larger in young women
• Immune system may be less effective at clearing infection`,
    icon: Clock,
    color: "purple",
    quiz: {
      question: "Why does early onset of sexual activity increase cervical cancer risk?",
      options: [
        "Young people have more partners",
        "The adolescent cervix is more vulnerable to HPV",
        "Contraception is less effective",
        "Screening starts later",
      ],
      correctAnswer: 1,
      explanation:
        "The adolescent cervix is more susceptible to HPV infection because the cervical cells are still developing and the transformation zone is larger, making it easier for HPV to establish infection.",
    },
  },
  {
    id: 6,
    title: "Tobacco Smoking",
    content: `Smoking tobacco significantly increases the risk of cervical cancer, particularly squamous cell carcinoma of the cervix.

How smoking increases cervical cancer risk:
• Tobacco byproducts found in cervical mucus
• Damages cervical cell DNA directly
• Weakens local immune system in the cervix
• Reduces ability to fight HPV infection
• Risk increases with duration and amount of smoking
• Quitting smoking reduces risk over time`,
    icon: Cigarette,
    color: "gray",
    quiz: {
      question: "How does tobacco smoking increase cervical cancer risk?",
      options: [
        "It only affects lung cancer risk",
        "It damages cervical cell DNA and weakens local immunity",
        "It increases HPV transmission",
        "It prevents effective screening",
      ],
      correctAnswer: 1,
      explanation:
        "Tobacco smoking increases cervical cancer risk by depositing carcinogenic byproducts in cervical mucus, directly damaging cervical cell DNA, and weakening the local immune system's ability to fight HPV infection.",
    },
  },
  {
    id: 7,
    title: "Long-term Oral Contraceptive Use",
    content: `Using oral contraceptives (birth control pills) for more than 5 years slightly increases cervical cancer risk, though the mechanism is not fully understood.

Key points about oral contraceptives:
• Risk increases with duration of use (>5 years)
• Risk returns to normal after stopping use
• Benefits often outweigh risks for most women
• May be related to hormonal effects on cervical cells
• Important to discuss with healthcare provider
• Regular screening remains crucial`,
    icon: Shield,
    color: "teal",
    quiz: {
      question: "What is important to know about oral contraceptives and cervical cancer risk?",
      options: [
        "They should never be used",
        "Risk increases with use >5 years but returns to normal after stopping",
        "They prevent cervical cancer",
        "They only affect women with HPV",
      ],
      correctAnswer: 1,
      explanation:
        "Long-term use of oral contraceptives (>5 years) slightly increases cervical cancer risk, but this risk returns to normal levels after discontinuing use. The benefits often outweigh the risks for most women.",
    },
  },
]

export default function Section31({ onComplete }: Section31Props) {
  const [currentCard, setCurrentCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState<number[]>([])

  const handleCardComplete = (cardId: number) => {
    if (!completedCards.includes(cardId)) {
      setCompletedCards([...completedCards, cardId])
    }
  }

  const handleQuizComplete = (cardId: number) => {
    if (!quizCompleted.includes(cardId)) {
      setQuizCompleted([...quizCompleted, cardId])
    }
    setShowQuiz(false)

    // Move to next card or complete section
    if (currentCard < learningCards.length - 1) {
      setCurrentCard(currentCard + 1)
    } else if (quizCompleted.length + 1 === learningCards.length) {
      onComplete()
    }
  }

  const progress = ((completedCards.length + quizCompleted.length) / (learningCards.length * 2)) * 100

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <span>Section 1: Risk Factors for Cervical Cancer</span>
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Understanding the key factors that increase the risk of developing cervical cancer
              </p>
            </div>
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">7 Risk Factors</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Section Progress</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-7 gap-2">
            {learningCards.map((card, index) => (
              <div
                key={card.id}
                className={`h-2 rounded-full ${
                  completedCards.includes(card.id) && quizCompleted.includes(card.id)
                    ? "bg-green-500"
                    : completedCards.includes(card.id)
                      ? "bg-blue-500"
                      : "bg-gray-200 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Content */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Card Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Risk Factors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {learningCards.map((card, index) => {
                const Icon = card.icon
                const isCompleted = completedCards.includes(card.id) && quizCompleted.includes(card.id)
                const isActive = currentCard === index

                return (
                  <Button
                    key={card.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-auto p-3 ${
                      isCompleted ? "bg-green-50 hover:bg-green-100 dark:bg-green-900/20" : ""
                    }`}
                    onClick={() => setCurrentCard(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-4 h-4 ${isCompleted ? "text-green-600" : ""}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{card.title}</p>
                      </div>
                      {isCompleted && <CheckCircle className="w-4 h-4 text-green-600" />}
                    </div>
                  </Button>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <LearningCard
            {...learningCards[currentCard]}
            onComplete={() => handleCardComplete(learningCards[currentCard].id)}
            // onQuiz={() => setShowQuiz(true)}
            isCompleted={completedCards.includes(learningCards[currentCard].id)}
            card={learningCards[0]}
            // isQuizCompleted={quizCompleted.includes(learningCards[currentCard].id)}
          />
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          onComplete={() => handleQuizComplete(learningCards[currentCard].id)}
          question={{
            text: learningCards[currentCard].quiz.question,
            options: learningCards[currentCard].quiz.options,
            correct: learningCards[currentCard].quiz.correctAnswer,
            explanation: learningCards[currentCard].quiz.explanation,
          }}
        />
      )}
    </div>
  )
}
