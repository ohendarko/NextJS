"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Stethoscope, AlertCircle, Activity, Zap } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section32Props {
  onComplete: () => void
}

const learningCards = [
  {
    id: 1,
    title: "Understanding Early vs Advanced Disease",
    content: `Cervical cancer symptoms vary significantly depending on the stage of the disease. Understanding this distinction is crucial for early detection and treatment.

Key differences:
• Early disease: Often asymptomatic or subtle symptoms
• Advanced disease: More obvious and severe symptoms
• Symptoms usually begin after cancer has spread
• Early detection through screening is vital
• Many women have no symptoms until cancer is advanced`,
    icon: Stethoscope,
    color: "blue",
    quiz: {
      question: "When do cervical cancer symptoms typically begin to appear?",
      options: [
        "Immediately when cancer develops",
        "Only in very advanced stages",
        "Usually after the cancer has spread",
        "Only during menstruation",
      ],
      correctAnswer: 2,
      explanation:
        "Cervical cancer symptoms usually begin after the cancer has spread beyond the cervix. Early-stage cervical cancer is often asymptomatic, which is why regular screening is so important.",
    },
  },
  {
    id: 2,
    title: "Bleeding After Sexual Intercourse",
    content: `Post-coital bleeding (bleeding after sex) is one of the most common early symptoms of cervical cancer and should always be investigated.

Important characteristics:
• May be light spotting or heavier bleeding
• Can occur immediately after intercourse
• Often painless initially
• May be the only symptom present
• Should never be ignored, especially in women over 40
• Can also indicate other cervical conditions`,
    icon: AlertCircle,
    color: "red",
    quiz: {
      question: "What should women do if they experience bleeding after sexual intercourse?",
      options: [
        "Wait to see if it happens again",
        "Only worry if it's heavy bleeding",
        "Seek medical evaluation promptly",
        "It's normal and nothing to worry about",
      ],
      correctAnswer: 2,
      explanation:
        "Bleeding after sexual intercourse should always be evaluated by a healthcare provider, as it can be an early sign of cervical cancer or other serious conditions.",
    },
  },
  {
    id: 3,
    title: "Postmenopausal Bleeding",
    content: `Any vaginal bleeding that occurs after menopause (when periods have stopped for 12+ months) is abnormal and requires immediate medical attention.

Key points about postmenopausal bleeding:
• Always considered abnormal
• Can be a sign of cervical cancer
• May also indicate endometrial cancer
• Should be evaluated urgently
• Even light spotting is significant
• Never assume it's "normal" aging`,
    icon: Activity,
    color: "orange",
    quiz: {
      question: "How should postmenopausal bleeding be regarded?",
      options: [
        "Normal part of aging",
        "Only concerning if heavy",
        "Always abnormal and requires evaluation",
        "Common and usually harmless",
      ],
      correctAnswer: 2,
      explanation:
        "Any vaginal bleeding after menopause is abnormal and should be evaluated immediately, as it can be a sign of cervical cancer or other serious gynecological conditions.",
    },
  },
  {
    id: 4,
    title: "Abnormal Menstrual Bleeding",
    content: `Changes in menstrual patterns can be an early sign of cervical cancer, including bleeding between periods or unusually heavy/long periods.

Types of abnormal bleeding:
• Intermenstrual bleeding (between periods)
• Menorrhagia (heavy menstrual bleeding)
• Prolonged menstrual periods
• Irregular menstrual cycles
• Bleeding after douching
• Any unusual change in normal pattern`,
    icon: Zap,
    color: "purple",
    quiz: {
      question: "Which of the following represents abnormal menstrual bleeding that could indicate cervical cancer?",
      options: ["Regular 28-day cycles", "Bleeding between periods", "Light periods", "Periods that last 5 days"],
      correctAnswer: 1,
      explanation:
        "Bleeding between periods (intermenstrual bleeding) is abnormal and can be an early sign of cervical cancer. Any change from a woman's normal menstrual pattern should be evaluated.",
    },
  },
  {
    id: 5,
    title: "Abnormal Vaginal Discharge",
    content: `Changes in vaginal discharge, particularly foul-smelling discharge, can be an early symptom of cervical cancer.

Characteristics of concerning discharge:
• Foul or unusual odor
• Change in color (bloody, brown, or unusual)
• Change in consistency
• Increased amount
• Associated with other symptoms
• Persistent despite treatment`,
    icon: AlertCircle,
    color: "pink",
    quiz: {
      question: "What type of vaginal discharge is most concerning for cervical cancer?",
      options: [
        "Clear, odorless discharge",
        "Foul-smelling discharge",
        "White, thick discharge",
        "Discharge only during ovulation",
      ],
      correctAnswer: 1,
      explanation:
        "Foul-smelling vaginal discharge is particularly concerning and can be an early symptom of cervical cancer. Any persistent change in discharge should be evaluated.",
    },
  },
  {
    id: 6,
    title: "Pain During Sexual Intercourse",
    content: `Dyspareunia (pain during sex) can be an early symptom of cervical cancer, particularly deep pelvic pain.

Types of pain that may indicate cervical cancer:
• Deep pelvic pain during penetration
• Pain that's new or worsening
• Pain associated with bleeding
• Persistent pain not related to other causes
• Pain that doesn't improve with lubrication
• May be accompanied by other symptoms`,
    icon: AlertCircle,
    color: "red",
    quiz: {
      question: "What type of pain during intercourse is most concerning for cervical cancer?",
      options: [
        "Mild discomfort with first intercourse",
        "Deep pelvic pain that's new or worsening",
        "Pain only with certain positions",
        "Pain that improves with lubrication",
      ],
      correctAnswer: 1,
      explanation:
        "Deep pelvic pain during intercourse that is new, worsening, or persistent can be an early symptom of cervical cancer and should be evaluated by a healthcare provider.",
    },
  },
  {
    id: 7,
    title: "Advanced Disease Symptoms",
    content: `When cervical cancer spreads beyond the cervix, it causes more severe symptoms affecting multiple body systems.

Advanced symptoms include:
• Bowel problems: painful/difficult bowel movements, rectal bleeding
• Urinary problems: painful urination, blood in urine
• Swelling of legs (lymphedema)
• Persistent dull backache
• Abdominal pain
• Fatigue and weakness
• Weight loss`,
    icon: Activity,
    color: "gray",
    quiz: {
      question: "Which symptoms indicate cervical cancer has spread beyond the cervix?",
      options: [
        "Only vaginal bleeding",
        "Bowel and urinary problems, leg swelling, back pain",
        "Only pelvic pain",
        "Only abnormal discharge",
      ],
      correctAnswer: 1,
      explanation:
        "Advanced cervical cancer symptoms include bowel and urinary problems, leg swelling, persistent back pain, and systemic symptoms, indicating the cancer has spread beyond the cervix.",
    },
  },
]

export default function Section32({ onComplete }: Section32Props) {
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
                <Stethoscope className="w-6 h-6 text-blue-500" />
                <span>Section 2: Signs and Symptoms</span>
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Recognizing early and advanced symptoms of cervical cancer
              </p>
            </div>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Early & Advanced</Badge>
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
              <CardTitle className="text-lg">Symptoms</CardTitle>
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
            // isQuizCompleted={quizCompleted.includes(learningCards[currentCard].id)}
            card={learningCards[0]}
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
