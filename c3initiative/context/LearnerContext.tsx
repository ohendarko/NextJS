// context/LearnerContext.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

interface UserProfile {
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
  certificate?: boolean
}


interface LearnerContextType {
  userProfile: UserProfile | null
  loading: boolean
  canAccessModule: (moduleName: string) => boolean
  isLoggedIn: boolean
  isLoggedOut: boolean
}

const LearnerContext = createContext<LearnerContextType | undefined>(undefined)

export const LearnerProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const isLoggedIn = !loading && !!userProfile
  const isLoggedOut = !loading && !userProfile

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const res = await fetch(`/api/user/profile?email=${session.user.email}`)
          const data = await res.json()
          setUserProfile(data)
        } catch (err) {
          console.error("Error fetching user profile", err)
        }
      }
      setLoading(false)
    }

    fetchUserProfile()
  }, [session, status])

  const canAccessModule = (moduleName: string) => {
    if (!userProfile) return false
    return moduleName === userProfile.currentModule || moduleName === "module-1" || userProfile.completedModules.includes(moduleName)
  }

  return (
    <LearnerContext.Provider value={{
      userProfile, loading, canAccessModule, isLoggedIn, isLoggedOut }}>
      {children}
    </LearnerContext.Provider>
  )
}

export const useLearner = () => {
  const context = useContext(LearnerContext)
  if (!context) throw new Error("useLearner must be used within LearnerProvider")
  return context
}
