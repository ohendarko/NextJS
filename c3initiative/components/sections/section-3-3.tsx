"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, Microscope, Eye, TestTube, Shield, Users, Clock } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section33Props {
  onComplete: () => void
}

const learningCards = [
  {
    id: 1,
    title: "What is Cervical Cancer Screening?",
    content: `Cervical cancer screening is the systematic application of tests to identify unrecognized disease in people who have no symptoms.

Key principles of screening:
• Identifies disease before symptoms appear
• Applied to apparently healthy populations
• Aims to detect pre-cancer and early cancer
• Most effective when applied systematically
• Requires follow-up for positive results
• Cost-effective public health intervention`,
    icon: Search,
    color: "blue",
    quiz: {
      question: "What is the primary goal of cervical cancer screening?",
      options: [
        "To treat cervical cancer",
        "To identify disease before symptoms appear",
        "To prevent HPV infection",
        "To educate women about cancer",
      ],
      correctAnswer: 1,
      explanation:
        "The primary goal of cervical cancer screening is to identify pre-cancerous changes and early cancer before symptoms appear, when treatment is most effective.",
    },
  },
  {
    id: 2,
    title: "Benefits of Cervical Cancer Screening",
    content: `Cervical cancer screening programs provide multiple benefits for individual women and public health.

Major benefits include:
• Early detection of pre-cancer: Identifies and treats lesions before they become cancer
• Early detection of cancer: Finds cancer when it's most treatable
• Reduced cancer incidence: Prevents cancer by treating pre-cancerous conditions
• Reduced mortality: Saves lives through early intervention
• Cost-effective: Prevents expensive advanced cancer treatment`,
    icon: Shield,
    color: "green",
    quiz: {
      question: "How does screening reduce cervical cancer incidence?",
      options: [
        "By preventing HPV infection",
        "By treating pre-cancerous conditions before they become cancer",
        "By improving immune system function",
        "By providing HPV vaccination",
      ],
      correctAnswer: 1,
      explanation:
        "Screening reduces cervical cancer incidence by identifying and treating pre-cancerous conditions before they progress to invasive cancer.",
    },
  },
  {
    id: 3,
    title: "HPV Testing - Overview",
    content: `HPV testing is the most sensitive screening method, detecting high-risk HPV types that cause cervical cancer.

Key features of HPV testing:
• Tests for DNA of high-risk HPV types
• More sensitive than cytology
• Identifies women at risk before cell changes occur
• Can be done with or without speculum examination
• Allows for self-collection options
• Requires quality-assured, validated tests`,
    icon: TestTube,
    color: "purple",
    quiz: {
      question: "What does HPV testing detect?",
      options: [
        "Abnormal cervical cells",
        "DNA of high-risk HPV types",
        "Cervical cancer cells",
        "Inflammation in the cervix",
      ],
      correctAnswer: 1,
      explanation:
        "HPV testing detects the DNA of high-risk HPV types that are most likely to cause cervical cancer, making it a highly sensitive screening method.",
    },
  },
  {
    id: 4,
    title: "HPV Testing - Who Should Be Tested",
    content: `HPV testing recommendations are based on age and risk factors, with specific guidelines for optimal effectiveness.

WHO recommendations:
• Primary screening: Women aged 30 and above
• Not recommended for women under 30
• Younger women often clear HPV naturally
• Testing under 30 may cause unnecessary anxiety
• Over 30: Persistent HPV more likely to cause cancer
• Can be combined with cytology (co-testing)`,
    icon: Users,
    color: "blue",
    quiz: {
      question: "Why is HPV testing recommended for women 30 and above rather than younger women?",
      options: [
        "Younger women can't get HPV",
        "HPV tests don't work in younger women",
        "Younger women often clear HPV naturally",
        "Younger women don't get cervical cancer",
      ],
      correctAnswer: 2,
      explanation:
        "HPV testing is recommended for women 30 and above because younger women often clear HPV infections naturally, and testing them may lead to unnecessary anxiety and treatment.",
    },
  },
  {
    id: 5,
    title: "HPV Testing - Collection Methods",
    content: `HPV testing offers flexible collection methods, including provider-collected and self-collected samples.

Collection options:
• Provider-collected: Using speculum and brush
• Self-collected: Women collect their own samples
• No speculum required for self-collection
• Self-collection increases screening uptake
• Equally accurate when done properly
• Reduces barriers to screening access`,
    icon: TestTube,
    color: "teal",
    quiz: {
      question: "What is an advantage of HPV self-collection?",
      options: [
        "It's more accurate than provider collection",
        "It increases screening uptake and reduces barriers",
        "It's only for high-risk women",
        "It requires special training",
      ],
      correctAnswer: 1,
      explanation:
        "HPV self-collection increases screening uptake by reducing barriers such as embarrassment, time constraints, and access issues, while maintaining accuracy when done properly.",
    },
  },
  {
    id: 6,
    title: "Visual Inspection with Acetic Acid (VIA)",
    content: `VIA is a simple, low-cost screening method that provides immediate results and can be performed by trained healthcare workers.

VIA characteristics:
• Uses 3-5% acetic acid solution
• Direct visual examination of cervix
• Immediate results available
• Can be done by trained non-physicians
• Best for women under 50 years
• Requires adequate lighting and speculum`,
    icon: Eye,
    color: "orange",
    quiz: {
      question: "What is a key advantage of VIA screening?",
      options: [
        "It's the most accurate test",
        "It provides immediate results",
        "It doesn't require training",
        "It works best after menopause",
      ],
      correctAnswer: 1,
      explanation:
        "A key advantage of VIA is that it provides immediate results, allowing for same-visit diagnosis and treatment, which is particularly valuable in resource-limited settings.",
    },
  },
  {
    id: 7,
    title: "VIA - Age Recommendations and Procedure",
    content: `VIA has specific age recommendations and procedural requirements for optimal effectiveness.

VIA guidelines:
• Best for women under 50 years
• Transformation zone more visible pre-menopause
• After menopause, changes move inside cervical canal
• Requires speculum examination
• Trained healthcare provider needed
• Positive test: White areas that persist after acetic acid application`,
    icon: Clock,
    color: "pink",
    quiz: {
      question: "Why is VIA most effective in women under 50?",
      options: [
        "Older women don't get cervical cancer",
        "The transformation zone is more visible before menopause",
        "Acetic acid doesn't work after menopause",
        "Older women can't tolerate the procedure",
      ],
      correctAnswer: 1,
      explanation:
        "VIA is most effective in women under 50 because the cervical transformation zone (where pre-cancerous changes occur) is more visible before menopause, making abnormalities easier to detect.",
    },
  },
  {
    id: 8,
    title: "Cytology-Based Screening",
    content: `Cytology-based screening examines cervical cells under a microscope to detect abnormal changes.

Types of cytology screening:
• Conventional Pap smear: Cells spread directly on slide
• Liquid-based cytology (LBC): Cells placed in preservative solution
• Requires laboratory processing
• Results classified using Bethesda System
• Needs skilled cytotechnologists and pathologists
• Higher infrastructure requirements than other methods`,
    icon: Microscope,
    color: "indigo",
    quiz: {
      question: "What is the main difference between conventional Pap smear and liquid-based cytology?",
      options: [
        "LBC is less accurate",
        "Conventional Pap uses a preservative solution",
        "LBC places cells in preservative solution, conventional spreads directly on slide",
        "They test for different diseases",
      ],
      correctAnswer: 2,
      explanation:
        "The main difference is that liquid-based cytology places collected cells in a preservative solution for processing, while conventional Pap smears spread cells directly onto a glass slide.",
    },
  },
  {
    id: 9,
    title: "Cytology Screening - Collection and Processing",
    content: `Cytology screening requires specific collection techniques and laboratory processing for accurate results.

Collection requirements:
• Speculum examination required
• Adequate lighting essential
• Samples from cervix face and endocervix
• Proper labeling and transport crucial
• Laboratory processing by skilled personnel
• Quality assurance programs needed
• Results interpretation using standardized systems`,
    icon: TestTube,
    color: "gray",
    quiz: {
      question: "What is essential for accurate cytology screening results?",
      options: [
        "Only the collection technique",
        "Proper collection, labeling, transport, and skilled laboratory processing",
        "Only laboratory equipment",
        "Only the microscope quality",
      ],
      correctAnswer: 1,
      explanation:
        "Accurate cytology results require proper specimen collection, appropriate labeling and transport, and skilled laboratory personnel for processing and interpretation.",
    },
  },
]

export default function Section33({ onComplete }: Section33Props) {
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
                <Search className="w-6 h-6 text-green-500" />
                <span>Section 3: Screening Methods</span>
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Understanding HPV testing, VIA, and cytology-based screening approaches
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">3 Methods</Badge>
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

          <div className="grid grid-cols-9 gap-1">
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
              <CardTitle className="text-lg">Screening Methods</CardTitle>
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
