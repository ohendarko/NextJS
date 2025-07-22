"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, CheckCircle, ArrowRight, Lock, ArrowLeft } from "lucide-react"
import Image from "next/image"

interface LearningCardProps {
  card: {
    id: number | string
    title: string
    content: string
    infographic?: string
    order: number
  }
  isActive: boolean
  isCompleted: boolean
  onComplete: (direction: "next" | "prev") => void

  canExpand: boolean
}

export default function LearningCard({ card, isActive, isCompleted, onComplete, canExpand }: LearningCardProps) {
  const [isExpanded, setIsExpanded] = useState(isActive)

  const handleToggle = () => {
    if (canExpand) {
      setIsExpanded(!isExpanded)
    }
  }

  const handleComplete = () => {
    onComplete('next')
  }

  // Auto-expand when card becomes active
  if (isActive && !isExpanded && canExpand) {
    setIsExpanded(true)
  }

  return (
    <Card
      className={`transition-all duration-300 mb-10 ${
        isCompleted
          ? "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10"
          : isActive
            ? "ring-2 ring-orange-500 shadow-lg hover-shadow-gradient"
            : canExpand
              ? "hover-shadow-gradient cursor-pointer"
              : "opacity-60"
      }`}
    >
      <CardHeader
        className={`cursor-pointer transition-colors ${canExpand ? "hover:bg-gray-50 dark:hover:bg-gray-800/50" : ""}`}
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isActive
                    ? "gradient-orange-blue text-white"
                    : canExpand
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      : "bg-gray-300 text-gray-500"
              }`}
            >
              {isCompleted ? <CheckCircle className="w-4 h-4" /> : canExpand ? card.id : <Lock className="w-3 h-3" />}
            </div>
            <div>
              <CardTitle className="text-lg">{card.title}</CardTitle>
              {isCompleted && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs mt-1">
                  Complete
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isActive && !isCompleted && (
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                Current
              </Badge>
            )}
            {/* {canExpand && (
              <div className="text-gray-400">
                {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </div>
            )} */}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          {/* Infographic */}
          {card.infographic && (
            <div className="mb-6">
              <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden ">
                <Image
                  src={card.infographic || "/placeholder.svg"}
                  alt={`Infographic for ${card.title}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none mb-6">
            <div className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed whitespace-pre-line">{card.content}</div>
          </div>

          {/* Action Button */}
          {isActive && (
            <div className="flex justify-between">
              <Button
                onClick={() => onComplete("prev")}
                disabled={card.order === 1}
                className="gradient-orange-blue text-white hover-shadow-gradient"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={() => {
                  if (!isCompleted) {
                    onComplete("next") // Let parent handle it
                  } else {
                    onComplete("next")
                  }
                }}
                className="gradient-orange-blue text-white hover-shadow-gradient"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}


          {/* {isCompleted && (
            <div className="flex justify-end">
              <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed
              </div>
            </div>
          )} */}
        </CardContent>
      )}
    </Card>
  )
}
