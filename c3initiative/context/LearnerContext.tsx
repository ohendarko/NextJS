"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Module } from '@/lib/types'

export interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  name: string
  password?: string
  currentModule: string
  preTestCompleted: string[]
  postTestCompleted: string[]
  completedModules: string[]
  completedSections: string[]
  moduleProgress: string[]
  admin?: boolean
  hasCompletedQuestionnaire?: boolean
  certificate?: boolean
}

interface LearnerContextType {
  userProfile: UserProfile | null
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
  loading: boolean
  modules: Module[]
  canAccessModule: (moduleName: string) => boolean
  isLoggedIn: boolean
  isLoggedOut: boolean
}

const LearnerContext = createContext<LearnerContextType | undefined>(undefined)

export const LearnerProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)

  const isLoggedIn = !loading && !!userProfile
  const isLoggedOut = !loading && !userProfile

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      if (status === "unauthenticated") {
        router.push('/learn')
        return
      }

      if (status !== "authenticated" || !session?.user?.email) return

      try {
        const [profileResult, modulesResult] = await Promise.allSettled([
          fetch(`/api/user/profile?email=${session.user.email}`),
          fetch('/api/modules'),
        ])

        if (mounted) {
          if (profileResult.status === "fulfilled") {
            const profileData = await profileResult.value.json()
            setUserProfile(profileData)
          }

          if (modulesResult.status === "fulfilled") {
            const modulesData = await modulesResult.value.json()
            setModules(modulesData)
          }
        }
      } catch (err) {
        console.error("Error loading learner data", err)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    loadData()

    return () => {
      mounted = false
    }
  }, [session, status, router])

  const canAccessModule = (moduleName: string) => {
    if (!userProfile) return false
    if (!userProfile.hasCompletedQuestionnaire) return false
    return (
      moduleName === userProfile.currentModule ||
      moduleName === "module-1" ||
      userProfile.completedModules.includes(moduleName)
    )
  }

  return (
    <LearnerContext.Provider value={{
      userProfile,
      setUserProfile,
      loading,
      modules,
      canAccessModule,
      isLoggedIn,
      isLoggedOut,
    }}>
      {children}
    </LearnerContext.Provider>
  )
}

export const useLearner = () => {
  const context = useContext(LearnerContext)
  if (!context) throw new Error("useLearner must be used within LearnerProvider")
  return context
}
