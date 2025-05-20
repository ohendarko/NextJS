import { Button } from "@/components/ui/button"
import { Award, CheckCircle2, Globe, Heart, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About PharmaBridge Consulting
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Bridging global pharmaceutical talent with U.S. pharmacy practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pharmacists working together"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-gray-500">
                  At PharmaBridge Consulting, we specialize in empowering internationally trained pharmacists to
                  successfully transition into the U.S. healthcare system. Our mission is simple yet impactful: to
                  bridge global pharmaceutical talent with U.S. pharmacy practice through expert guidance, structured
                  planning, and results-driven coaching.
                </p>
                <p className="text-gray-500">
                  Founded by a team of pharmacists who have personally navigated the complexities of U.S. licensure,
                  PharmaBridge Consulting was created to simplify the journey for others. We understand the challenges —
                  from credential evaluations to TOEFL proficiency, FPGEE preparation, internships, and final licensure.
                  And we know how overwhelming it can be without the right support.
                </p>
                <p className="text-gray-500">
                  That's why we built PharmaBridge Consulting: to be the trusted partner you can rely on every step of
                  the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md">
              <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-500">
                To become the premier consulting platform for internationally trained pharmacists seeking U.S.
                licensure, recognized for excellence, integrity, and transformational success.
              </p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md">
              <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-500">
                To provide internationally educated pharmacists with the tools, strategies, and personalized support
                they need to achieve U.S. licensure and thrive professionally in the American healthcare system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Comprehensive services to support your U.S. pharmacy licensure journey
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Credential Evaluation Guidance</h3>
              <p className="text-gray-500">ECE/NABP assistance for your pharmacy degree and transcripts.</p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">TOEFL-iBT Support</h3>
              <p className="text-gray-500">English proficiency preparation focused on speaking and writing.</p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">FPGEE Study Plans</h3>
              <p className="text-gray-500">Customized preparation and exam coaching for success.</p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">NABP Application Assistance</h3>
              <p className="text-gray-500">Help with e-Profile setup and exam scheduling.</p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Internship Placement</h3>
              <p className="text-gray-500">Strategy and interview preparation for securing required hours.</p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Full Licensure Support</h3>
              <p className="text-gray-500">Comprehensive guidance from start to finish, including NAPLEX & MPJE.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose PharmaBridge</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What sets us apart from other consulting services
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
              <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Firsthand Experience</h3>
              <p className="text-gray-500">
                Our founders have lived the journey you are about to embark on. We've navigated the complexities of U.S.
                licensure ourselves and understand the challenges you'll face.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
              <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Structured Programs</h3>
              <p className="text-gray-500">
                Our services are carefully aligned with NABP requirements and U.S. state board regulations to ensure
                you're following the correct path to licensure.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
              <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Attention</h3>
              <p className="text-gray-500">
                Every client receives tailored guidance based on their unique background, education, and career goals.
                We don't believe in one-size-fits-all solutions.
              </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
              <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Support</h3>
              <p className="text-gray-500">
                From your first credential submission to your final licensure — we are with you every step of the way,
                providing guidance, resources, and encouragement.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Future Starts Here</h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                If you are ready to take the next step toward becoming a licensed pharmacist in the United States,
                PharmaBridge Consulting is ready to walk that journey with you. Your dream is possible — and we are here
                to help you achieve it.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">Book Your Consultation Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
