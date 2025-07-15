"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  CheckCircle,
  Users,
  ArrowRight,
  BookOpen,
  Microscope,
  Search,
  Shield,
  Stethoscope,
  Lock,
  Play,
} from "lucide-react"
import Link from "next/link"
// import InteractiveProgressBar from "@/components/interactive-progress-bar"
import Skeleton from "@mui/material/Skeleton"
import SectionRenderer from "@/components/SectionRenderer"
import { useProtectedModuleRoute } from "@/hooks/useProtectedModuleRoute"
import { useLearner } from "@/context/LearnerContext"
// import PostTestModal from "@/components/post-test-modal"

type LearningCard = {
  id: string
  title: string
  content: string
  infographic?: string
  order: number
}

type Section = {
  id: string
  title: string
  description: string
  order: number
  learningCards: LearningCard[]
  quizzes: any[] // define if needed
}

type PostTest = {
  id: string
  question: string
  options: string[]
  correct: string
}

type Module = {
  id: string
  module: string
  title: string
  description: string
  icon: string
  order: number
  introVideo: string
  completed: boolean
  unlocked: boolean
  sections: Section[]
  postTest: PostTest[]
}

// const modules = [
//   {
//     id: 1,
//     title: "Introduction to Cervical Cancer",
//     shortTitle: "Introduction",
//     completed: false,
//     unlocked: true,
//     icon: BookOpen,
//   },
//   {
//     id: 2,
//     title: "HPV and Cervical Cancer Connection",
//     shortTitle: "HPV Connection",
//     completed: false,
//     unlocked: false,
//     icon: Microscope,
//   },
//   {
//     id: 3,
//     title: "Screening and Early Detection",
//     shortTitle: "Screening",
//     completed: false,
//     unlocked: false,
//     icon: Search,
//   },
//   {
//     id: 4,
//     title: "Prevention Strategies",
//     shortTitle: "Prevention",
//     completed: false,
//     unlocked: false,
//     icon: Shield,
//   },
//   {
//     id: 5,
//     title: "Treatment and Management",
//     shortTitle: "Treatment",
//     completed: false,
//     unlocked: false,
//     icon: Stethoscope,
//   },
//   {
//     id: 6,
//     title: "Community Health and Advocacy",
//     shortTitle: "Community Health",
//     completed: false,
//     unlocked: false,
//     icon: Users,
//   },
// ]


type SectionProgress = {
  [key: number]: { completed: boolean; unlocked: boolean }
}

export default function ModulePage() {
  const { loading } = useLearner()
  useProtectedModuleRoute()

  const router = useRouter()
  const [activeSection, setActiveSection] = useState(1)
  const [sectionProgress, setSectionProgress] = useState<SectionProgress>({})
  const [showPostTest, setShowPostTest] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [lesson, setLesson] = useState<Module | null>(null)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [hasShownCompletionModal, setHasShownCompletionModal] = useState(false)
  const [totalModules, setTotalModules] = useState(0)


  const  params = useParams()
  const { module } = params as  {module: string}



  useEffect(() => {
    const fetchModule = async () => {
      try {
        setIsLoading(true)
        const  data =  await fetch("/api/module-summary")
        const datares = await data.json()
        setTotalModules(datares.summaryCount)
        const res = await fetch(`/api/modules/${module}`)
        if (!res.ok) throw new Error("Failed to fetch")
        const json = await res.json()
        setLesson(json)

        const newProgress: SectionProgress = {}
        json.sections.forEach((section: Section) => {
          newProgress[section.order] = {
            completed: false,
            unlocked: section.order === 1,
          }
        })
        setSectionProgress(newProgress)
      } catch (err) {
        console.error(err)
        setLesson(null)
      } finally {
        setIsLoading(false)
      }
    }

    if (module) {
      fetchModule()
    }
  }, [module])


  // console.log('totalmodules',totalModules)
  // console.log(lesson)
  // console.log('sectionprogress', sectionProgress)
  
  const handleSectionComplete = (sectionId: number, nextSection?: number) => {
    setSectionProgress((prev) => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], completed: true },
      [sectionId + 1]: { ...prev[sectionId + 1], unlocked: true },
    }))

    if (nextSection && lesson && nextSection <= lesson.sections.length) {
      setActiveSection(nextSection)
    }

    const allCompleted = lesson?.sections.every(
      (section) => section.order === sectionId || sectionProgress[section.order]?.completed
    )

    if (allCompleted) {
      setShowPostTest(true)
    }
  }

  const handlePostTestPass = () => {
    setShowPostTest(false)
    // Navigate to next module
    router.push("/learn/cervical-cancer/module-2")
  }

  const handleModuleClick = (moduleId: number) => {
    if (moduleId !== 1) {
      // Navigate to other modules when they're unlocked
      router.push(`/learn/cervical-cancer/module-${moduleId}`)
    }
  }

  const activeSectionData = lesson && lesson.sections.find(s => s.order === activeSection)
  const completedSections = Object.values(sectionProgress).filter((p) => p.completed).length
  const allSectionsCompleted = completedSections === lesson?.sections.length

  useEffect(() => {
    const allCompleted = completedSections === lesson?.sections.length

    if (allCompleted && !hasShownCompletionModal) {
      setShowCompletionModal(true)
      setHasShownCompletionModal(true)
    }
  }, [completedSections, lesson, hasShownCompletionModal])



  return (
    <div className="min-h-screen pt-24 pb-4 mb-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-3">
        {/* Back Navigation */}
        <div className="mb-6">
          {(loading || isLoading) ? <Skeleton width={200} height={50} /> : <Link href="/learn/cervical-cancer">
            <Button variant="outline" className="hover-shadow-gradient bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Modules
            </Button>
          </Link>}
        </div>

        {/* Module Progress Bar */}
        {/* <div className="mb-8">
          <InteractiveProgressBar
            modules={modules}
            currentModule={1}
            onModuleClick={handleModuleClick}
            showCertificate={true}
          />
        </div> */}

        {/* Module Header */}
        <Card className="mb-8 hover-shadow-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                {(loading || isLoading) ? <Skeleton width={200} height={50} /> : <CardTitle className="text-3xl">Module {lesson?.order}: {lesson?.title} </CardTitle>}
                {(loading || isLoading) ? <Skeleton width={700} /> : <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {lesson?.description}
                </p>}
              </div>
              <div className="text-right space-y-2">
                {(loading || isLoading) ? <Skeleton width={200} /> : allSectionsCompleted && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Module Complete
                  </Badge>
                )}
               
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Introductory Video */}
            <div className="mb-6">
              {(loading || isLoading) ? <Skeleton width={200} /> : <h4 className="font-semibold mb-3">Module Introduction</h4>}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                {(loading || isLoading) ? <Skeleton width={700} height={500} /> : <video className="w-full h-full object-cover" poster="/placeholder.svg?height=300&width=500" controls>
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  {(loading || isLoading) ? <Skeleton width={200} height={60} /> : <Button size="lg" className="gradient-orange-blue text-white">
                    <Play className="w-6 h-6 mr-2" />
                    Watch Introduction
                  </Button>}
                </div>
              </div>
            </div>

            {/* Section Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                {(loading || isLoading) ? <Skeleton width={200} /> : <h4 className="font-semibold">Section Progress</h4>}
                {(loading || isLoading) ? <Skeleton width={150} /> : <span className="text-sm text-gray-600 dark:text-gray-400">
                  {completedSections} / {lesson?.sections.length} Complete
                </span>}
              </div>
              {(loading || isLoading) ? <Skeleton width={800} height={5} /> : <Progress value={lesson && (completedSections / lesson.sections.length) * 100} className="h-2 [&>div]:bg-orange-400 text-black" />}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Section Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              {(loading || isLoading) ? <Skeleton width={100} /> : <h4 className="font-semibold">Sections</h4>}

              {/* Section Pathline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-500 opacity-30"></div>

                {lesson && lesson.sections.map((section, index) => (
                  <div key={section.order} className="relative flex items-start mb-4">
                    {/* Path Node */}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        sectionProgress[section.order]?.completed
                          ? "bg-green-500 text-white"
                          : sectionProgress[section.order]?.unlocked
                            ? "gradient-orange-blue text-white"
                            : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {(loading || isLoading) ? <Skeleton width={70} height={70} /> : sectionProgress[section.order]?.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : sectionProgress[section.order]?.unlocked ? (
                        section.id
                      ) : (
                        <Lock className="w-3 h-3" />
                      )}
                    </div>

                    {/* Section Tab */}
                    <div
                      className={`ml-3 flex-1 cursor-pointer transition-all duration-300 ${
                        sectionProgress[section.order]?.unlocked ? "hover:scale-105" : "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => {sectionProgress[section.order]?.unlocked && setActiveSection(section.order); console.log(completedSections)}}
                    >
                      <Card
                        className={`${
                          activeSection === section.order
                            ? "ring-2 ring-orange-500 shadow-lg"
                            : sectionProgress[section.order]?.unlocked
                              ? "hover-shadow-gradient"
                              : ""
                        }`}
                      >
                        <CardContent className="p-3">
                          {(loading || isLoading) ? <Skeleton width={200} /> : <h5 className="font-medium text-sm mb-1">{section.title}</h5>}
                          {(loading || isLoading) ? <Skeleton width={600} /> : <p className="text-xs text-gray-600 dark:text-gray-400">{section.description}</p>}
                          {sectionProgress[section.order]?.completed && (
                            <Badge className="bg-green-100 text-green-800 text-xs mt-2">Complete</Badge>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="lg:col-span-3 mb-10">
            {(loading || isLoading) ? <Skeleton width={800} height={600} /> : activeSectionData && (
              <SectionRenderer
                totalSections={lesson.sections.length}
                key={activeSection}
                section={activeSectionData}
                onComplete={(nextSection) => handleSectionComplete(activeSection, nextSection)}
                isUnlocked={sectionProgress[activeSection]?.unlocked || false}
              />
            )}
          </div>
        </div>

        {/* Module Completion */}
        {allSectionsCompleted
        // && !showPostTest 
        && (
          
          <Dialog open={showCompletionModal} onOpenChange={setShowCompletionModal}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <DialogTitle className="text-center text-2xl font-bold text-green-600">Module {lesson.order} Complete!</DialogTitle>
                <DialogDescription className="text-center text-gray-600 dark:text-gray-400 text wrap">
                  Congratulations! You've successfully completed the {lesson.title} module.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-center">
                <div className="flex justify-center space-x-4 gap-3 flex-wrap">
                  {lesson.order < totalModules  && 
                  <Button
                    onClick={() => router.push(`/learn/cervical-cancer/module-${lesson.order + 1}`)}
                    className="gradient-orange-blue text-white hover-shadow-gradient"
                  >
                    Continue to Module {lesson.order + 1}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>}
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    Review Module
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        {allSectionsCompleted  && 
        // lesson.order < totalModules  &&
          <Card>
            <CardHeader className="text-sm text-gray-500">You've successfully completed the {lesson.title} module.</CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4 gap-3 flex-wrap">
                {lesson.order < totalModules && <Button
                  onClick={() => router.push(`/learn/cervical-cancer/module-${lesson.order + 1}`)}
                  className="gradient-orange-blue text-white hover-shadow-gradient"
                >
                  Continue to Module {lesson.order + 1}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>}
                <Button variant="outline" onClick={() => window.location.reload()}>
                  Review Module
                </Button>
              </div>
            </CardContent>
          </Card>  
        }

        {/* Post Test Modal */}
        {/* <PostTestModal
          isOpen={showPostTest}
          onClose={() => setShowPostTest(false)}
          onPass={handlePostTestPass}
          moduleTitle="Introduction to Cervical Cancer"
          moduleId={1}
        /> */}
      </div>
    </div>
  )
}
