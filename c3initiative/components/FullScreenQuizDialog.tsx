"use client"

import React, { useState } from "react"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"

type Question = {
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
  questions: Question[]
}

export default function FullScreenQuizDialog({ isOpen, onClose, questions, onComplete }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<(string)[]>(
    Array(questions.length).fill("")
  )

  const handleOptionSelect = (qIndex: number, option: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[qIndex] = option
    setSelectedAnswers(newAnswers)
    console.log("Questions:", questions)
    console.log("Selected Answers:", newAnswers)

  }


  const isCorrect = (qIndex: number) =>
    selectedAnswers[qIndex] === questions[qIndex].correctAnswer

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4">
          <div className="relative w-full max-w-4xl rounded-xl bg-white p-6 shadow-xl">
            {/* <button onClick={onClose} className="absolute right-4 top-4 text-gray-600">
              <X className="h-6 w-6" />
            </button> */}
            <h2 className="text-2xl font-bold mb-6">Module Quiz</h2>
            <span className="text-xs text-gray-500 mb-20">You must complete the pretest before you start the module!</span>
            <div className="space-y-10">
              {questions.map((q, index) => (
                <div key={index} className="space-y-4">
                  <p className="font-semibold">
                    {index + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option, oIndex) => {
                      const isSelected = selectedAnswers[index] === option
                      const correct = q.correctAnswer === option
                      const hasAnswered = selectedAnswers[index] !== ""
                      const bgColor =
                        hasAnswered && isSelected
                          ? correct
                            ? "bg-green-100 border-green-600"
                            : "bg-white border-red-400"
                          : "bg-white border-gray-300"

                      return (
                        <button
                          key={oIndex}
                          onClick={() => handleOptionSelect(index, option)}
                          className={`w-full text-left px-4 py-2 border cursor-pointer rounded-md ${bgColor}`}
                          // disabled={hasAnswered}
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>

                  {selectedAnswers[index] && (
                    <div
                      className={`mt-2 p-3 rounded-md text-sm ${isCorrect(index)
                          ? "bg-green-100 text-green-800"
                          : "bg-white text-red-600"
                        } border-l-4 ${isCorrect(index) ? "border-green-500" : "border-red-400"
                        }`}
                    >
                      { q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
