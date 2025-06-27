"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock, Eye, EyeOff, Microscope, Search, Info } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section1_3Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "Introduction to Female Pelvic Anatomy",
    content:
      "Understanding female pelvic anatomy is crucial for cervical cancer education. The female reproductive system consists of external organs (visible to the naked eye or with a speculum) and internal organs (located inside the pelvis). This knowledge helps healthcare providers and patients understand screening procedures and potential health issues.",
    question: {
      text: "Female reproductive organs are divided into which two main categories?",
      options: [
        "Upper and lower organs",
        "External and internal organs",
        "Primary and secondary organs",
        "Anterior and posterior organs",
      ],
      correct: 1,
      explanation:
        "Female reproductive organs are divided into external organs (visible) and internal organs (inside the pelvis).",
    },
  },
  {
    id: 2,
    title: "The Vulva - External Protection",
    content:
      "The vulva is the area around the vaginal opening and serves as the external part of the female reproductive system. It includes several important structures that protect the internal reproductive organs and plays a crucial role in sexual function and childbirth.",
    question: {
      text: "What is the vulva?",
      options: [
        "An internal reproductive organ",
        "The area around the vaginal opening",
        "A part of the uterus",
        "The cervical opening",
      ],
      correct: 1,
      explanation:
        "The vulva is the area around the vaginal opening, serving as the external part of the female reproductive system.",
    },
  },
  {
    id: 3,
    title: "The Labia - Protective Skin Folds",
    content:
      "The labia consist of two sets of skin folds: the labia majora (major) and labia minora (minor). These protective folds surround and protect the vaginal opening from bacteria and other harmful substances. They also contain nerve endings that contribute to sexual sensation.",
    question: {
      text: "What is the primary function of the labia?",
      options: ["Hormone production", "Protecting the vaginal opening", "Urine storage", "Egg production"],
      correct: 1,
      explanation:
        "The labia are skin folds that protect the vaginal opening from bacteria and other harmful substances.",
    },
  },
  {
    id: 4,
    title: "The Clitoris - Sensitive Organ",
    content:
      "The clitoris is a small and very sensitive organ that enhances sexual pleasure. It contains thousands of nerve endings and plays an important role in female sexual response. Understanding its location and function is important for comprehensive reproductive health education.",
    question: {
      text: "What is the primary characteristic of the clitoris?",
      options: [
        "It produces hormones",
        "It is very sensitive and enhances sexual pleasure",
        "It stores urine",
        "It produces eggs",
      ],
      correct: 1,
      explanation:
        "The clitoris is a small and very sensitive organ that enhances sexual pleasure, containing thousands of nerve endings.",
    },
  },
  {
    id: 5,
    title: "The Urethra and Perineum",
    content:
      "The urethra is a small opening that expels urine from the bladder. It is separate from the vaginal opening. The perineum is the area between the vaginal opening and the anus. This area is important during childbirth and can be affected by various medical conditions.",
    question: {
      text: "What is the function of the urethra?",
      options: ["Sexual pleasure", "Expelling urine", "Protecting the vagina", "Hormone production"],
      correct: 1,
      explanation:
        "The urethra is a small opening that expels urine from the bladder, separate from the reproductive system.",
    },
  },
  {
    id: 6,
    title: "Bartholin Glands - Natural Lubrication",
    content:
      "The Bartholin glands produce clear mucus which lubricates the introitus (vaginal entrance) when a woman is sexually stimulated. These small glands are located on either side of the vaginal opening and play an important role in sexual comfort and function.",
    question: {
      text: "What do the Bartholin glands produce?",
      options: ["Hormones", "Clear mucus for lubrication", "Urine", "Blood cells"],
      correct: 1,
      explanation:
        "The Bartholin glands produce clear mucus which lubricates the introitus when a woman is sexually stimulated.",
    },
  },
  {
    id: 7,
    title: "Internal Organs Overview",
    content:
      "Internal organs are located inside the pelvis and are not visible except when exposed by an incision or laparoscopy. Laparoscopy is a surgical procedure used to examine the organs in the belly (abdomen). These organs include the bladder, uterus, and ureters.",
    question: {
      text: "How can internal reproductive organs be examined?",
      options: [
        "Only with naked eye",
        "Through incision or laparoscopy",
        "Using a speculum only",
        "Through blood tests",
      ],
      correct: 1,
      explanation:
        "Internal organs are not visible except when exposed by an incision or laparoscopy, a surgical examination procedure.",
    },
  },
  {
    id: 8,
    title: "The Bladder - Urine Storage",
    content:
      "The bladder receives urine from the kidneys and stores it for excretion. While not part of the reproductive system, the bladder is closely located to reproductive organs and can be affected by reproductive health conditions. Understanding its location helps in comprehensive pelvic health.",
    question: {
      text: "What is the primary function of the bladder?",
      options: ["Producing hormones", "Storing and excreting urine", "Developing babies", "Filtering blood"],
      correct: 1,
      explanation: "The bladder receives urine from the kidneys and stores it for excretion through the urethra.",
    },
  },
  {
    id: 9,
    title: "The Uterus - Site of Fetal Development",
    content:
      "The uterus is the area where a fetus (unborn baby) develops and grows during pregnancy. It is a muscular organ that can expand significantly during pregnancy and contracts during labor. The cervix, which is part of the uterus, is the focus of cervical cancer prevention and screening.",
    question: {
      text: "What is the primary function of the uterus?",
      options: ["Producing eggs", "Where a fetus develops and grows", "Storing urine", "Filtering blood"],
      correct: 1,
      explanation: "The uterus is the area where a fetus (unborn baby) develops and grows during pregnancy.",
    },
  },
  {
    id: 10,
    title: "The Ureters - Urine Transport",
    content:
      "The ureters are tubes that carry urine from the kidneys to the bladder. There are two ureters, one from each kidney. While part of the urinary system, their proximity to reproductive organs makes them relevant in understanding pelvic anatomy for comprehensive healthcare.",
    question: {
      text: "What do the ureters do?",
      options: ["Store urine", "Carry urine from kidneys to bladder", "Produce hormones", "Develop babies"],
      correct: 1,
      explanation:
        "The ureters are tubes that carry urine from the kidneys to the bladder, with one ureter from each kidney.",
    },
  },
]

export default function Section1_3({ onComplete, isUnlocked }: Section1_3Props) {
  const [currentCard, setCurrentCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [sectionCompleted, setSectionCompleted] = useState(false)
  const [showAnatomyDiagram, setShowAnatomyDiagram] = useState(false)

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
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <span>Section 3: Female Pelvic Anatomy and Physiology</span>
            </div>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Understanding external and internal female reproductive organs
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

      {/* Anatomy Overview */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card className="hover-shadow-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-orange-blue rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">External Organs</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Vulva (area around vaginal opening)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Labia (protective skin folds)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Clitoris (sensitive organ)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Urethra (urine opening)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Perineum (area between openings)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Bartholin glands (lubrication)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-shadow-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-blue-pink rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Internal Organs</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Bladder (urine storage)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Uterus (fetal development)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Ureters (urine transport)</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                <p className="text-xs text-blue-700 dark:text-blue-400">
                  Internal organs require incision or laparoscopy for examination
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Anatomy Diagram */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Interactive Anatomy Reference</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAnatomyDiagram(!showAnatomyDiagram)}
              className="hover-shadow-gradient bg-transparent"
            >
              {showAnatomyDiagram ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showAnatomyDiagram ? "Hide" : "Show"} Diagram
            </Button>
          </CardTitle>
        </CardHeader>
        {showAnatomyDiagram && (
          <CardContent>
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-6 rounded-lg">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Female Pelvic Anatomy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Educational reference diagram</p>
              </div>

              {/* Simplified anatomical representation */}
              <div className="relative mx-auto max-w-md">
                <svg viewBox="0 0 300 400" className="w-full h-auto">
                  {/* External anatomy outline */}
                  <ellipse
                    cx="150"
                    cy="200"
                    rx="80"
                    ry="120"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <text x="150" y="190" textAnchor="middle" className="text-xs fill-orange-600">
                    External Organs
                  </text>

                  {/* Internal anatomy outline */}
                  <rect
                    x="100"
                    y="100"
                    width="100"
                    height="80"
                    rx="10"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <text x="150" y="95" textAnchor="middle" className="text-xs fill-blue-600">
                    Internal Organs
                  </text>

                  {/* Labels */}
                  <circle cx="120" cy="250" r="3" fill="#f97316" />
                  <text x="130" y="255" className="text-xs fill-gray-600">
                    Vulva
                  </text>

                  <circle cx="180" cy="270" r="3" fill="#f97316" />
                  <text x="190" y="275" className="text-xs fill-gray-600">
                    Labia
                  </text>

                  <circle cx="150" cy="140" r="3" fill="#3b82f6" />
                  <text x="160" y="145" className="text-xs fill-gray-600">
                    Uterus
                  </text>

                  <circle cx="130" cy="120" r="3" fill="#3b82f6" />
                  <text x="140" y="125" className="text-xs fill-gray-600">
                    Bladder
                  </text>
                </svg>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  This is a simplified educational diagram. Consult medical textbooks for detailed anatomical
                  illustrations.
                </p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Learning Cards Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
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

      {/* Key Learning Points */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-green-500" />
            <span>Key Learning Points</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">External Organs (Visible)</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <strong>Vulva:</strong> Area around vaginal opening
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <strong>Labia:</strong> Protective skin folds (major & minor)
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <strong>Clitoris:</strong> Sensitive organ for sexual pleasure
                </div>
                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <strong>Bartholin Glands:</strong> Produce lubricating mucus
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Internal Organs (Hidden)</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Uterus:</strong> Where fetus develops and grows
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Bladder:</strong> Stores urine from kidneys
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Ureters:</strong> Carry urine from kidneys to bladder
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>Examination:</strong> Requires incision or laparoscopy
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
