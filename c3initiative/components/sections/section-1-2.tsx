"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Microscope } from "lucide-react"
import LearningCard from "@/components/learning-card"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"


const learningCards = [
  {
    id: 1,
    title: "Understanding HPV",
    content:
      "Human papillomavirus (HPV) is a group of more than 200 related viruses. HPV is so common that nearly all sexually active men and women get the virus at some point in their lives.\n\nMost HPV infections go away on their own within 2 years. But sometimes HPV infections persist and can cause cancer. HPV infections can cause cancers of the cervix, vagina, vulva, penis, anus, and oropharynx.",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+Types+and+Risks",
  },
  {
    id: 2,
    title: "High-Risk HPV Types",
    content:
      "There are about 14 high-risk HPV types that can cause cancer. HPV types 16 and 18 cause about 70% of cervical cancers and precancerous cervical lesions.\nOther high-risk HPV types include 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, and 68. These types are responsible for the remaining 30% of cervical cancer cases.",
    infographic: "/placeholder.svg?height=300&width=400&text=High-Risk+HPV+Types+Chart",
  },
  {
    id: 3,
    title: "Risk Factors",
    content:
      "Several factors increase the risk of developing persistent HPV infection that may lead to cervical cancer:\n• Having many sexual partners\n• Having sex at an early age\n• Having other sexually transmitted infections\n• Having a weakened immune system\n• Smoking tobacco\n• Long-term use of birth control pills",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+Risk+Factors+Diagram",
  },
  {
    id: 4,
    title: "Progression to Cancer",
    content:
      "HPV infection doesn't usually cause cancer right away. The process typically takes 10-20 years, giving plenty of time for detection and treatment.\n\nFirst, HPV causes changes in cervical cells (dysplasia). If not treated, these abnormal cells can become cancerous. This slow progression is why regular screening is so effective at preventing cervical cancer.",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+Risk+Factors+Diagram",
  },
  
]

interface Section1_2Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section1_2({ onComplete, isUnlocked }: Section1_2Props) {
  const [currentCard, setCurrentCard] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [sectionCompleted, setSectionCompleted] = useState(false)

  const [showCompletionModal, setShowCompletionModal] = useState(false)
  
  // useEffect(() => {
  //   if (sectionCompleted) {
  //     console.log("✅ Section is marked complete")
  //   }
  // }, [sectionCompleted])


  const handleCardComplete = () => {
    const cardId = learningCards[currentCard].id
    if (!completedCards.includes(cardId)) {
      setCompletedCards((prev) => [...prev, cardId])
    }

    if (currentCard < learningCards.length - 1) {
      setCurrentCard((prev) => prev + 1)
    } else {
      setShowCompletionModal(true)
    }
  }


  const handleSectionComplete = () => {
    onComplete(3) // Navigate to section 3
  }

  if (!isUnlocked) {
    return (
      <Card className="p-8 text-center">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Section Locked</h3>
          <p className="text-gray-600 dark:text-gray-400">Complete the previous section to unlock this content.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <Card className="hover-shadow-gradient">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Section 2: Risk Factors and Causes</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Exploring the primary causes and risk factors for cervical cancer
                </p>
              </div>
            </div>
            <div className="text-right">
              {sectionCompleted && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Complete
                </Badge>
              )}
              <p className="text-sm text-gray-500 mt-1">
                {completedCards.length} / {learningCards.length} cards
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={(completedCards.length / learningCards.length) * 100} className="h-2 [&>div]:bg-orange-400 [&>div]:rounded" />
        </CardContent>
      </Card>

      {/* Slide View for Learning Cards */}
      <div className="relative flex !mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute w-full h-full !mb-10"
          >
            <LearningCard
              key={learningCards[currentCard].id}
              card={learningCards[currentCard]}
              isActive
              isCompleted={completedCards.includes(learningCards[currentCard].id)}
              onComplete={handleCardComplete}
              canExpand
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section Completion */}
      {/* Modal for Section Complete */}
      <Dialog open={showCompletionModal} onOpenChange={setShowCompletionModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-green-600">Section 1 Complete!</DialogTitle>
          </DialogHeader>
          <div className="text-center text-sm text-gray-700 dark:text-gray-300 mb-6">
            <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
              You've completed this section. Let's move to the next one.
            </DialogDescription>
          </div>
          <DialogFooter className="flex justify-center">
            <Button onClick={handleSectionComplete} className="gradient-orange-blue text-white hover-shadow-gradient">
              Continue to Next Section
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    
  )
}