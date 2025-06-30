"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Shield, Users, BookOpen, Brain, Eye, Zap, Heart, Crown } from "lucide-react"

export default function Hero() {
  const coreValues = [
    { icon: Brain, label: "Knowledge", color: "text-orange-500" },
    { icon: Eye, label: "Awareness", color: "text-blue-500" },
    { icon: Zap, label: "Action", color: "text-pink-500" },
    { icon: Heart, label: "Attitude", color: "text-purple-500" },
    { icon: Crown, label: "Empowerment", color: "text-green-500" },
  ]

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-sm font-medium text-orange-700 dark:text-orange-300">
                <Shield className="w-4 h-4 mr-2" />
                Conquering Cervical Cancer, Ghana
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                C3 Initiative:{" "}
                <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Conquering Cervical Cancer
                </span>{" "}
                Through Education
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Empowering Ghanaian healthcare students and professionals with the knowledge, awareness, and tools
                needed to take decisive action against cervical cancer. Together, we're transforming attitudes and
                building a future where every woman is empowered with life-saving information.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-2 gradient-orange-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-medium ${value.color}`}>{value.label}</span>
                </div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg" className="gradient-orange-blue text-white hover-shadow-gradient group">
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="group hover-shadow-gradient bg-transparent">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Impact
              </Button>
            </div> */}

            {/* <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">10,000+ Ghanaian Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Evidence-Based Modules</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Lives Saved</span>
              </div>
            </div> */}
          </div>

          {/* <div className="relative"> */}
            {/* <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 hover-shadow-gradient">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-orange-pink rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">Empowering Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">Building knowledge that saves lives</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ghana Impact Progress</span>
                    <span className="text-sm text-gray-500">Growing Daily</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="gradient-orange-blue h-2 rounded-full animate-pulse" style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">95%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Knowledge Retention</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">4.9</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Impact Rating</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800 dark:text-green-300">Lives Impacted</span>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-400">
                    Every student educated becomes an advocate for cervical cancer prevention in their community.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Background decoration */}
            {/* <div className="absolute -top-4 -right-4 w-72 h-72 gradient-triple rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 gradient-blue-pink rounded-full opacity-20 blur-3xl"></div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
