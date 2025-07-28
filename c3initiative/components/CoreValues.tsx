"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Shield, Users, BookOpen, Brain, Eye, Zap, Heart, Crown } from "lucide-react"
import ScrollSlideUp from "@/components/ScrollSlideUp"
import ScrollFadeIn from "./ScrollFadeIn"
import SlideInFromRight from "./SlideInFromRight"
import SlideInFromTop from "./SlideInFromTop"
import { SlideInFromBottom } from "./animations"
import SlideInFromLeft from "./SlideInFromLeft"
import Image from 'next/image'

const CoreValues = () => {
  const coreValues = [
    { icon: Brain, label: "Knowledge", color: "text-white", background: "/images/auditorium.jpg" },
    { icon: Eye, label: "Awareness", color: "text-white", background: "/images/bel.jpg" },
    { icon: Zap, label: "Action", color: "text-white", background: "/images/picture3.jpg" },
    { icon: Heart, label: "Attitude", color: "text-white", background: "/images/picture7.jpg" },
    { icon: Crown, label: "Empowerment", color: "text-white", background: "/images/picture4.jpg" },
  ]
  return (
    <div className="container !px-1 mx-auto max-w-4xl">
      
      {/* Core Values */}
      <SlideInFromBottom>
        <div className="flex justify-center text-3xl sm:text-4xl font-bold text-center !mt-20"><span>Our Core Values</span></div>
      </SlideInFromBottom>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
        <SlideInFromBottom>
          <div className='mt-5'>
            <p className='text-gray-700 text-lg p-3'>
              The C3 initiative seeks to empower Ghanaians with knowledge and resources needed to take decisive action to prevent and control cervical cancer. Together, we are changing attitude and building a future where every woman in Ghana is empowered with life-saving information.
            </p>
          </div>
        </SlideInFromBottom>
        <SlideInFromRight>
          <div className='relative w-full h-96 mt-5 !p-3'>
            <Image
              src="/images/core-value.jpg"
              alt="core value"
              className="object-cover rounded-sm"
              fill
            />
          </div>
        </SlideInFromRight>
      </div>
      
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
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
              {/* <ScrollFadeIn>

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
      </div> */}
    </div>
  )
}

export default CoreValues