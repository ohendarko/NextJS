// context/LearnerContext.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Module } from '@/lib/types';

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
  loading: boolean
  modules: Module[];
  canAccessModule: (moduleName: string) => boolean
  isLoggedIn: boolean
  isLoggedOut: boolean
}

const LearnerContext = createContext<LearnerContextType | undefined>(undefined)

export const LearnerProvider = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter()
  const { data: session, status } = useSession()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [modules, setModules] = useState<Module[]>([]);

  const isLoggedIn = !loading && !!userProfile
  const isLoggedOut = !loading && !userProfile

useEffect(() => {
  if (status === "unauthenticated") {
    router.replace('/learn')
    return
  }

  if (status !== "authenticated") return

  const fetchData = async () => {
    try {
      const [userRes, modulesRes] = await Promise.all([
        fetch(`/api/user/profile?email=${session.user.email}`, { cache: "no-store" } ),
        fetch('/api/modules'),
      ])

      const userData = await userRes.json()
      const modulesData = await modulesRes.json()

      setUserProfile(userData)
      setModules(modulesData)
    } catch (error) {
      console.error("Error fetching data", error)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [session, status])


  const canAccessModule = (moduleName: string) => {
    if (!userProfile) return false
    if (!userProfile.hasCompletedQuestionnaire) return false
    return moduleName === userProfile.currentModule || moduleName === "module-1" || userProfile.completedModules.includes(moduleName)
  }

  return (
    <LearnerContext.Provider value={{
      userProfile, loading, modules, canAccessModule, isLoggedIn, isLoggedOut }}>
      {children}
    </LearnerContext.Provider>
  )
}

export const useLearner = () => {
  const context = useContext(LearnerContext)
  if (!context) throw new Error("useLearner must be used within LearnerProvider")
  return context
}
