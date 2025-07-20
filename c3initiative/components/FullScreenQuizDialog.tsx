"use client"

import React, { useState } from "react"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { useLearner } from "@/context/LearnerContext"

type Question = {
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

type Props = {
  isOpen: boolean
  mode: string
  onClose: () => void
  onComplete: (score: number, mode: string) => void
  questions: Question[]
}

export default function FullScreenQuizDialog({
  isOpen,
  onClose,
  questions,
  onComplete,
  mode
}: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { loading } = useLearner()

  const handleOptionSelect = (qIndex: number, option: string) => {
    // if (isSubmitted && mode !== "posttest") return
    const updated = [...selectedAnswers]
    updated[qIndex] = option
    setSelectedAnswers(updated)
  }


  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const numCorrect = questions.reduce((total, q, i) => {
    return total + (selectedAnswers[i] === q.correctAnswer ? 1 : 0)
  }, 0)


  const isCorrect = (qIndex: number) =>
    selectedAnswers[qIndex] === questions[qIndex].correctAnswer

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4">
          <div className="relative w-full max-w-4xl rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Module {mode === "pretest" ? "Pretest" : "Post Test"} </h2>
            {mode === "pretest" && !isSubmitted && (
              <p className="text-xs text-gray-500 mb-6">
                You must complete the pretest before you start the module!
              </p>
            )}
            <form className="space-y-10">
              {questions.map((q, index) => (
                <div key={index} className="space-y-2">
                  <p className="font-semibold">
                    {index + 1}. {q.question}
                  </p>
                  <div className="space-y-1">
                    {q.options.map((option, oIndex) => (
                      <label
                        key={oIndex}
                        className={`flex items-center p-2 border rounded-md cursor-pointer ${selectedAnswers[index] === option
                            ? "border-blue-600"
                            : "border-gray-300"
                          }`}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          disabled={isSubmitted && mode !== "posttest"}
                          checked={selectedAnswers[index] === option}
                          onChange={() => handleOptionSelect(index, option)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  {isSubmitted && (
                    <div
                      className={`mt-2 p-3 rounded-md text-sm ${isCorrect(index)
                          ? "bg-green-100 text-green-800 border-l-4 border-green-500"
                          : "bg-red-50 text-red-700 border-l-4 border-red-500"
                        }`}
                    >
                      {mode === "posttest" && q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </form>

            {!isSubmitted && selectedAnswers.length === questions.length && (
              <button
                onClick={handleSubmit}
                disabled={questions.length === 0}
                className="mt-6 gradient-orange-blue text-white px-6 py-2 rounded-md"
              >
                Submit Test
              </button>
            )}

            {isSubmitted && (
              <div className=" flex flex-col gap-4 mt-6 text-center text-lg font-medium">
                <p>You scored {questions.filter((q, i) => isCorrect(i)).length} out
                  of {questions.length}
                </p>

                <Button variant="outline" disabled={isLoading} onClick={() => window.location.reload()}>
                  Retake Test
                </Button>

                <Button 
                  className="gradient-orange-blue text-white"
                  onClick={() => {
                    setIsLoading(true)
                    onComplete(numCorrect, mode)
                    
                  }}
                  disabled={isLoading}
                >
                  {mode === "pretest" ? "Continue to Module" : "Finish Module"}
                </Button>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  )
}
