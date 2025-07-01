"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import LearningCard from "@/components/learning-card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"

const learningCards = [
  {
    id: 1,
    title: "Global Impact of Cervical Cancer",
    content:
      "Every year, around 266,000 women die from cervical cancer worldwide. This staggering number represents not just statistics, but real lives lost to a largely preventable disease.\n\nMost of these deaths can be prevented through proper cervical cancer prevention and treatment programs. This highlights the critical importance of education, screening, and accessible healthcare.",
    infographic: "/placeholder.svg?height=300&width=400&text=Global+Cervical+Cancer+Statistics",
  },
  {
    id: 2,
    title: "HPV Connection",
    content:
      "Almost all cervical cancer is caused by a long-lasting infection with certain harmful types of the human papillomavirus (HPV). Understanding this connection is key to prevention strategies.\n\nThe disease usually develops slowly over 10–20 years. This gives enough time to detect and treat it early, making regular screening incredibly valuable for prevention.",
    infographic: "/placeholder.svg?height=300&width=400&text=HPV+to+Cancer+Timeline",
  },
  {
    id: 3,
    title: "Early Detection Methods",
    content:
      "There are low-cost tests that can find pre-cancer early. These screening methods are accessible and effective tools for preventing cervical cancer development.\n\nHPV vaccines are now available. If given to girls before they become sexually active, a large portion of cervical cancer can be prevented. This represents a major breakthrough in prevention.",
    infographic: "/placeholder.svg?height=300&width=400&text=Prevention+Methods+Infographic",
  },
]

interface Section1_1Props {
  onComplete: (nextSection?: number) => void
  isUnlocked: boolean
}

export default function Section1_1({ onComplete, isUnlocked }: Section1_1Props) {
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
    onComplete(2)
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
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Section 1: Reasons to Focus on Cervical Cancer</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Understanding the global impact and importance of cervical cancer prevention
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
