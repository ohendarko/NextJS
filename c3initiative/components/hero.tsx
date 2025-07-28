"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Shield, Users, BookOpen, Brain, Eye, Zap, Heart, Crown } from "lucide-react"
import ScrollSlideUp from "@/components/ScrollSlideUp"
import ScrollFadeIn from "./ScrollFadeIn"
import SlideInFromRight from "./SlideInFromRight"
import SlideInFromTop from "./SlideInFromTop"
import { SlideInFromBottom } from "./animations"
import SlideInFromLeft from "./SlideInFromLeft"

export default function Hero() {
  const coreValues = [
    { icon: Brain, label: "Knowledge", color: "text-white", background: "/images/auditorium.jpg" },
    { icon: Eye, label: "Awareness", color: "text-white", background: "/images/bel.jpg" },
    { icon: Zap, label: "Action", color: "text-white", background: "/images/picture3.jpg" },
    { icon: Heart, label: "Attitude", color: "text-white", background: "/images/picture7.jpg" },
    { icon: Crown, label: "Empowerment", color: "text-white", background: "/images/picture4.jpg" },
  ]

  return (
    <section className="pt-24 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/30">
      {/* Background image with blur */}
      <div
        className="absolute w-screen inset-0 z-0"
        style={{
          backgroundImage: `url(images/shaggi.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          opacity: 0.3
        }}
      />
      <div className="container !px-1 mx-auto max-w-4xl">
        <div className="flex gap-12 items-center">
          <div className="space-y-8">
            <div className="relative space-y-4">
            

              {/* Content above background */}
              <SlideInFromBottom>

              <div className="relative z-10 p-4">
                <SlideInFromLeft>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-sm font-medium text-orange-700 dark:text-orange-300">
                    <Shield className="w-4 h-4 mr-2" />
                    Conquering Cervical Cancer, Ghana
                  </div>
                </SlideInFromLeft>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
                  C3 Initiative:{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    Conquering Cervical Cancer
                  </span>{" "}
                  Through Education
                </h1>
                <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                  Empowering Ghanaian healthcare students and professionals with the knowledge, awareness, and tools
                  needed to take decisive action against cervical cancer. Together, we're transforming attitudes and
                  building a future where every woman is empowered with life-saving information.
                </p>
              </div>
              </SlideInFromBottom>
            </div>
            {/* Core Values */}
            <SlideInFromBottom>
              <div className="flex justify-center text-3xl sm:text-4xl font-bold text-center !mt-20"><span>Our Core Values</span></div>
            </SlideInFromBottom>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
              {coreValues.map((value, index) => (
                <ScrollSlideUp key={index}>
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden p-0 pt-12 text-center group shadow-md"
                  style={{
                    backgroundImage: `url(${value.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Blur overlay */}
                  {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-0" /> */}

                  {/* Content */}
                  <ScrollFadeIn>

                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-pink-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`flex justify-center text-sm bg-white/10 p-1 pb-5 backdrop-blur-sm font-medium ${value.color}`}>{value.label}</span>
                  </div>
                  </ScrollFadeIn>
                  
                </div>

                </ScrollSlideUp>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
