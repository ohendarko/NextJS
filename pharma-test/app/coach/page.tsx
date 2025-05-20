import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoachPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Coach</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dr. Benjamin Appau: From Ghana to the U.S. - A Pharmacist's Journey
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Benjamin Appau"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Dr. Benjamin Appau's Journey</h2>
              <p className="text-gray-500 text-lg">
                Dr. Benjamin Appau's path to becoming a licensed pharmacist in the United States is a testament to
                perseverance and dedication. After earning his pharmacy degree in Ghana, he navigated the complex
                process of U.S. licensure, including credential evaluations, the Foreign Pharmacy Graduate Equivalency
                Examination (FPGEE), and securing a pharmacist intern position at New Jersey and New York.
              </p>
              <p className="text-gray-500 text-lg">
                His firsthand experience with the challenges international pharmacists face inspired him to co-found
                PharmaBridge Consulting. Through this platform, Dr. Appau aims to guide others through the U.S.
                licensure process, offering personalized coaching and support to help them achieve their professional
                goals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Committed to Your Success</h3>
              <p className="text-gray-500 text-lg">
                At PharmaBridge Consulting, Dr. Appau leverages his journey to provide comprehensive services,
                including:
              </p>
              <ul className="space-y-2 text-gray-500 text-lg list-disc pl-6">
                <li>
                  <span className="font-medium">Credential Evaluation Guidance:</span> Assisting with the preparation
                  and submission of necessary documents.
                </li>
                <li>
                  <span className="font-medium">FPGEE Exam Preparation:</span> Offering study strategies and resources
                  tailored to individual needs.
                </li>
                <li>
                  <span className="font-medium">Internship Placement Support:</span> Helping clients find suitable
                  internship opportunities to fulfill licensure requirements.
                </li>
              </ul>
              <p className="text-gray-500 text-lg">
                Dr. Appau's mission is to empower internationally trained pharmacists to successfully transition into
                the U.S. healthcare system, ensuring they have the tools and knowledge needed to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Areas of Expertise</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dr. Appau specializes in these key areas to help you succeed
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Credential Evaluation</h3>
                <p className="text-gray-500">
                  Expert guidance on preparing and submitting your pharmacy credentials for evaluation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">FPGEE Preparation</h3>
                <p className="text-gray-500">
                  Personalized study plans and strategies for passing the Foreign Pharmacy Graduate Equivalency
                  Examination.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Licensure Navigation</h3>
                <p className="text-gray-500">
                  Comprehensive guidance through the complex U.S. pharmacy licensure process and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Internship Placement</h3>
                <p className="text-gray-500">
                  Support in finding and securing the required 1,500 internship hours for licensure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from pharmacists who have successfully navigated the U.S. licensure process with Dr. Appau's
                guidance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Testimonial author"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah K.</h4>
                  <p className="text-sm text-gray-500">Pharmacist from Nigeria</p>
                </div>
              </div>
              <p className="text-gray-500 italic">
                "Dr. Appau's guidance was invaluable throughout my FPGEE preparation. His personalized study plan and
                constant support helped me pass on my first attempt. I'm now completing my internship hours in Texas!"
              </p>
            </div>

            <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Testimonial author"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-sm text-gray-500">Pharmacist from India</p>
                </div>
              </div>
              <p className="text-gray-500 italic">
                "The credential evaluation process seemed overwhelming until I found PharmaBridge. Dr. Appau walked me
                through each step, helping me avoid common pitfalls. His knowledge of the NABP requirements is
                exceptional."
              </p>
            </div>

            <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Testimonial author"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Elena R.</h4>
                  <p className="text-sm text-gray-500">Pharmacist from Philippines</p>
                </div>
              </div>
              <p className="text-gray-500 italic">
                "Dr. Appau not only helped me prepare for my exams but also assisted with finding accommodation and
                navigating life in the U.S. His comprehensive support made all the difference in my journey to becoming
                licensed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Your Journey with Dr. Appau
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a consultation today and take the first step toward your U.S. pharmacy career.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">Book Your Consultation Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
