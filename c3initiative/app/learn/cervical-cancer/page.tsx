"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Lock,
  CheckCircle,
  ArrowRight,
  Award,
  Microscope,
  Search,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react"
import Link from "next/link"
import InteractiveProgressBar from "@/components/interactive-progress-bar"

const modules = [
  {
    id: 1,
    title: "Introduction to Cervical Cancer",
    shortTitle: "Introduction",
    description: "Understanding the basics and importance of cervical cancer prevention",
    sections: 3,
    duration: "45 min",
    completed: false,
    unlocked: true,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "HPV and Cervical Cancer Connection",
    shortTitle: "HPV Connection",
    description: "Learn about Human Papillomavirus and its role in cervical cancer",
    sections: 4,
    duration: "60 min",
    completed: false,
    unlocked: false,
    icon: Microscope,
  },
  {
    id: 3,
    title: "Screening and Early Detection",
    shortTitle: "Screening",
    description: "Pap smears, HPV testing, and screening guidelines",
    sections: 3,
    duration: "50 min",
    completed: false,
    unlocked: false,
    icon: Search,
  },
  {
    id: 4,
    title: "Prevention Strategies",
    shortTitle: "Prevention",
    description: "Vaccination, lifestyle factors, and preventive measures",
    sections: 2,
    duration: "40 min",
    completed: false,
    unlocked: false,
    icon: Shield,
  },
  {
    id: 5,
    title: "Treatment and Management",
    shortTitle: "Treatment",
    description: "Treatment options and patient care approaches",
    sections: 4,
    duration: "55 min",
    completed: false,
    unlocked: false,
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Community Health and Advocacy",
    shortTitle: "Community Health",
    description: "Public health approaches and patient communication",
    sections: 3,
    duration: "35 min",
    completed: false,
    unlocked: false,
    icon: Users,
  },
]

type ModuleProgress = {
  [id: number]: {
    completed: boolean
    unlocked: boolean
  }
}

export default function CervicalCancerLearnPage() {
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress>(
    modules.reduce((acc, module) => ({ ...acc, [module.id]: { completed: false, unlocked: module.unlocked } }), {} as ModuleProgress),
  )

  const completedModules = Object.values(moduleProgress).filter((p) => p.completed).length
  const allModulesCompleted = completedModules === modules.length

  // Prepare modules for progress bar
  const progressModules = modules.map((module) => ({
    ...module,
    completed: moduleProgress[module.id]?.completed || false,
    unlocked: moduleProgress[module.id]?.unlocked || false,
  }))

  const handleModuleClick = (moduleId: number) => {
    if (moduleProgress[moduleId]?.unlocked) {
      window.location.href = `/learn/cervical-cancer/module-${moduleId}`
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-0 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Cervical Cancer{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Learning Modules
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Master cervical cancer prevention, detection, and treatment through our comprehensive learning modules.
          </p>
        </div>

        {/* Interactive Progress Bar */}
        <div className="mb-8">
          <InteractiveProgressBar
            modules={progressModules}
            currentModule={1}
            onModuleClick={handleModuleClick}
            showCertificate={true}
          />
        </div>

        {/* Certificate Section */}
        {allModulesCompleted && (
          <Card className="mb-8 hover-shadow-gradient border-2 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-600">🎉 Congratulations!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      You've completed all modules. Your certificate is ready to download.
                    </p>
                  </div>
                </div>
                <Button className="gradient-orange-blue text-white hover-shadow-gradient">
                  <Award className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Learning Path */}
        <div className="relative">
          {/* Pathline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-blue-500 to-pink-500 opacity-30 hidden md:block"></div>

          <div className="space-y-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon

              return (
                <div key={module.id} className="relative flex items-start">
                  {/* Path Node */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 mr-6 hidden md:flex ${
                      moduleProgress[module.id]?.completed
                        ? "bg-green-500 border-green-500"
                        : moduleProgress[module.id]?.unlocked
                          ? "gradient-orange-blue border-transparent"
                          : "bg-gray-300 border-gray-300"
                    }`}
                  >
                    {moduleProgress[module.id]?.completed ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : moduleProgress[module.id]?.unlocked ? (
                      <IconComponent className="w-8 h-8 text-white" />
                    ) : (
                      <Lock className="w-8 h-8 text-gray-500" />
                    )}
                  </div>

                  {/* Module Card */}
                  <div className="flex-1">
                    <Card
                      className={`transition-all duration-300 ${
                        moduleProgress[module.id]?.unlocked
                          ? "hover-shadow-gradient cursor-pointer hover:scale-[1.02]"
                          : "opacity-50"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex flex-col items-center justify-between">
                          <div className="flex  items-center space-x-4">
                            {/* Mobile Path Node */}
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 md:hidden ${
                                moduleProgress[module.id]?.completed
                                  ? "bg-green-500 border-green-500"
                                  : moduleProgress[module.id]?.unlocked
                                    ? "gradient-orange-blue border-transparent"
                                    : "bg-gray-300 border-gray-300"
                              }`}
                            >
                              {moduleProgress[module.id]?.completed ? (
                                <CheckCircle className="w-6 h-6 text-white" />
                              ) : moduleProgress[module.id]?.unlocked ? (
                                <IconComponent className="w-6 h-6 text-white" />
                              ) : (
                                <Lock className="w-6 h-6 text-gray-500" />
                              )}
                            </div>
                            <div>
                              <CardTitle className="text-xl">
                                Module {module.id}: {module.title}
                              </CardTitle>
                            </div>
                          </div>

                          <div className="mt-4">
                              <p className="text-gray-600 dark:text-gray-400 mt-1">{module.description}</p>
                            </div>

                          <div className="text-right space-y-2">
                            {moduleProgress[module.id]?.completed && (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                Completed
                              </Badge>
                            )}
                            
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center justify-between">
                          {/* <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">                          
                            <span>🎯 Interactive Learning</span>
                          </div> */}

                          {moduleProgress[module.id]?.unlocked ? (
                            <Link href={`/learn/cervical-cancer/module-${module.id}`}>
                              <Button className="gradient-orange-blue text-white hover-shadow-gradient group">
                                {moduleProgress[module.id]?.completed ? "Review Module" : "Start Learning"}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          ) : (
                            <Button disabled className="opacity-50">
                              <Lock className="w-4 h-4 mr-2" />
                              Locked
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Learning Tips */}
        <Card className="mt-12 hover-shadow-gradient">
          <CardHeader>
            <CardTitle>Learning Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 gradient-orange-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Take Your Time</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Each module is designed to be comprehensive. Don't rush through the content.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-blue-pink rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Complete All Sections</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Make sure to complete all sections within a module to unlock the next one.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Earn Your Certificate</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete all 6 modules to earn your cervical cancer education certificate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
