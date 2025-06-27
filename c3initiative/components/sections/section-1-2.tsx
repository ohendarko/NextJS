"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock, Globe, MapPin, TrendingUp, AlertTriangle, Users, Heart } from "lucide-react"
import LearningCard from "@/components/learning-card"
import QuizModal from "@/components/quiz-modal"

interface Section1_2Props {
  onComplete: () => void
  isUnlocked: boolean
}

const learningCards = [
  {
    id: 1,
    title: "Global Cervical Cancer Statistics",
    content:
      "Cervical cancer is the 4th most common cancer in women worldwide. In 2022, there were about 660,000 new cases and 350,000 deaths globally. By 2030, new cases are estimated to rise to 760,100 cases, with 411,000 deaths - showing the urgent need for prevention and treatment programs.",
    question: {
      text: "What is the global ranking of cervical cancer among cancers in women?",
      options: ["2nd most common", "3rd most common", "4th most common", "5th most common"],
      correct: 2,
      explanation:
        "Cervical cancer is the 4th most common cancer in women worldwide, with approximately 660,000 new cases in 2022.",
    },
  },
  {
    id: 2,
    title: "Global Health Inequality",
    content:
      "Around 94% of cervical cancer deaths happen in low- and middle-income countries, revealing a major gap in access to care. This stark disparity highlights how economic factors directly impact women's health outcomes and survival rates from preventable diseases.",
    question: {
      text: "What percentage of cervical cancer deaths occur in low- and middle-income countries?",
      options: ["85%", "90%", "94%", "98%"],
      correct: 2,
      explanation:
        "Around 94% of cervical cancer deaths occur in low- and middle-income countries, showing a major healthcare access gap.",
    },
  },
  {
    id: 3,
    title: "High-Risk Regions",
    content:
      "The highest rates of cervical cancer and deaths are seen in Sub-Saharan Africa, Central America, and South-East Asia. These differences are mainly due to inequality in access to HPV vaccines, cervical cancer screening, and proper treatment facilities.",
    question: {
      text: "Which regions have the highest cervical cancer rates?",
      options: [
        "Europe and North America",
        "Sub-Saharan Africa, Central America, and South-East Asia",
        "East Asia and Pacific",
        "Middle East and North Africa",
      ],
      correct: 1,
      explanation:
        "Sub-Saharan Africa, Central America, and South-East Asia have the highest cervical cancer rates due to limited healthcare access.",
    },
  },
  {
    id: 4,
    title: "Africa's Disproportionate Burden",
    content:
      "Africa bears a disproportionate cervical cancer burden with the highest rates globally. In Africa, 34 out of every 100,000 women are diagnosed with cervical cancer and 23 out of every 100,000 women die from it every year. This represents a significant public health challenge.",
    question: {
      text: "In Africa, how many women per 100,000 are diagnosed with cervical cancer annually?",
      options: ["24", "29", "34", "39"],
      correct: 2,
      explanation:
        "In Africa, 34 out of every 100,000 women are diagnosed with cervical cancer annually, representing the highest global rates.",
    },
  },
  {
    id: 5,
    title: "Causes of African Disparities",
    content:
      "The high cervical cancer burden in Africa is mainly due to limited access to healthcare, low vaccination rates against HPV, and few women getting screening or early treatment. These systemic issues create barriers to prevention and early intervention.",
    question: {
      text: "What are the main causes of high cervical cancer rates in Africa?",
      options: [
        "Genetic factors only",
        "Limited healthcare access, low HPV vaccination, poor screening uptake",
        "Environmental pollution",
        "Dietary factors only",
      ],
      correct: 1,
      explanation:
        "High rates in Africa are due to limited healthcare access, low HPV vaccination rates, and poor screening uptake.",
    },
  },
  {
    id: 6,
    title: "Ghana's Cervical Cancer Statistics",
    content:
      "Ghana has a high incidence rate of cervical cancer, about 18.3 cases per 100,000 women each year. More specifically, 29.3 out of every 100,000 women are diagnosed with cervical cancer and 27.6 out of every 100,000 women die from it annually in Ghana.",
    question: {
      text: "What is Ghana's cervical cancer incidence rate per 100,000 women?",
      options: ["15.3", "18.3", "21.3", "25.3"],
      correct: 1,
      explanation: "Ghana has a cervical cancer incidence rate of about 18.3 cases per 100,000 women each year.",
    },
  },
  {
    id: 7,
    title: "Cultural and Healthcare Barriers in Ghana",
    content:
      "Several factors contribute to Ghana's high cervical cancer numbers: strong trust in traditional healers and mistrust of hospital care, cultural beliefs about causes and treatment, limited access to HPV vaccine, low awareness of symptoms, and low screening uptake.",
    question: {
      text: "Which factor contributes to high cervical cancer rates in Ghana?",
      options: [
        "High vaccination rates",
        "Excellent screening programs",
        "Strong trust in traditional healers and mistrust of hospitals",
        "High awareness of symptoms",
      ],
      correct: 2,
      explanation:
        "Strong trust in traditional healers and mistrust of hospital care is one of several factors contributing to high rates in Ghana.",
    },
  },
]

export default function Section1_2({ onComplete, isUnlocked }: Section1_2Props) {
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
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span>Section 2: Epidemiology of Cervical Cancer</span>
            </div>
            {sectionCompleted && <span className="text-green-600 text-sm font-normal">✓ Completed</span>}
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Understanding global, African, and Ghanaian cervical cancer statistics and disparities
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

      {/* Key Statistics Overview */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card className="hover-shadow-gradient">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-orange-600">660K</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Global New Cases (2022)</div>
          </CardContent>
        </Card>

        <Card className="hover-shadow-gradient">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 gradient-blue-pink rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-600">34/100K</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Africa Incidence Rate</div>
          </CardContent>
        </Card>

        <Card className="hover-shadow-gradient">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-pink-600">18.3/100K</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Ghana Incidence Rate</div>
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

      {/* Regional Impact Visualization */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span>Regional Impact Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="font-medium">Sub-Saharan Africa</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-red-600">34/100K</div>
                <div className="text-xs text-gray-500">Highest burden globally</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <span className="font-medium">Ghana</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-orange-600">18.3/100K</div>
                <div className="text-xs text-gray-500">High national burden</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Global Average</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-blue-600">13.3/100K</div>
                <div className="text-xs text-gray-500">Worldwide incidence</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">Key Insight</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    94% of cervical cancer deaths occur in low- and middle-income countries, highlighting the critical
                    need for improved healthcare access and prevention programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ghana-Specific Challenges */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-pink-500" />
            <span>Ghana's Specific Challenges</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Cultural Barriers</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span>Strong trust in traditional healers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span>Mistrust of hospital care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span>Cultural beliefs about disease causes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Healthcare Access Issues</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Limited access to HPV vaccine</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Low awareness of symptoms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Poor screening uptake</span>
                </li>
              </ul>
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
