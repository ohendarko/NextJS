import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileText, GraduationCap, Home, MapPin, MessageSquare, Plane } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services & Packages</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Comprehensive support for every step of your U.S. pharmacy licensure journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-white" id="services-list">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-md transition-shadow" id="credential-evaluation">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Credential Evaluation Guidance</CardTitle>
                <CardDescription>
                  We guide you through preparing your transcripts, degree certificates, and documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Our support includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Assistance in submitting your pharmacy credentials to ECE</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Step-by-step support preparing your transcripts and certifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Timeline management to ensure eligibility for the FPGEE exam</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$200</span>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow" id="fpgee-prep">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>FPGEE Exam Preparation</CardTitle>
                <CardDescription>We help you master high-priority topics tested on the FPGEE.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Our support includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Personalized study plans aligned with NABP Competency Requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Resources guidance (books, online platforms)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Practice exams and exam strategies for success</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$500</span>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow" id="toefl">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>TOEFL-iBT Preparation</CardTitle>
                <CardDescription>
                  Specialized English proficiency preparation focused on speaking and writing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Our support includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">2hr weekly class ($50/week or $185/month)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">7-day intense class ($450)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Access to practice materials and test-taking strategies</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$200-500</span>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow" id="accommodation">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Accommodation & Hosting</CardTitle>
                <CardDescription>Support with travel, accommodation, and U.S. orientation.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Our support includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Guidance booking affordable flights to the U.S.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Support in securing temporary housing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">U.S. culture orientation (transportation, shopping, safety tips)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$300</span>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow" id="internship">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Internship Placement Strategy</CardTitle>
                <CardDescription>Guidance on securing the required 1,500 internship hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Our support includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Coaching on how to secure 1,500 internship hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Resume building for pharmacy employers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Interview preparation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$100</span>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-blue-100 hover:shadow-md transition-shadow" id="full-licensure">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Full Licensure Pathway Support</CardTitle>
                <CardDescription>Complete end-to-end support for your U.S. licensure journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">Our comprehensive package includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Full support: ECE, NABP, TOEFL, FPGEE, Internship, NAPLEX</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">State-specific licensing application assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Complete guidance from start to finish</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$3000</span>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Licensing Timeline</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The typical journey to becoming a licensed pharmacist in the U.S.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="grid grid-cols-1 gap-12">
              <div className="relative flex items-center justify-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 bg-white p-6 rounded-lg shadow-md max-w-md">
                  <h3 className="text-xl font-bold mb-2">Credential Evaluation</h3>
                  <p className="text-gray-500">
                    Submit your pharmacy degree and transcripts to Educational Credential Evaluators (ECE) for
                    verification.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center mt-24">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 bg-white p-6 rounded-lg shadow-md max-w-md">
                  <h3 className="text-xl font-bold mb-2">TOEFL Exam</h3>
                  <p className="text-gray-500">
                    Take and pass the TOEFL-iBT exam to demonstrate English language proficiency.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center mt-24">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 bg-white p-6 rounded-lg shadow-md max-w-md">
                  <h3 className="text-xl font-bold mb-2">FPGEE Exam</h3>
                  <p className="text-gray-500">
                    Study for and pass the Foreign Pharmacy Graduate Equivalency Examination.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center mt-24">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 bg-white p-6 rounded-lg shadow-md max-w-md">
                  <h3 className="text-xl font-bold mb-2">Internship (1,500 hours)</h3>
                  <p className="text-gray-500">
                    Complete required internship hours under the supervision of a licensed pharmacist.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center mt-24">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 bg-white p-6 rounded-lg shadow-md max-w-md">
                  <h3 className="text-xl font-bold mb-2">NAPLEX & MPJE</h3>
                  <p className="text-gray-500">
                    Take and pass the North American Pharmacist Licensure Examination and Multistate Pharmacy
                    Jurisprudence Examination.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center mt-24">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <span className="text-white font-bold">6</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 bg-white p-6 rounded-lg shadow-md max-w-md">
                  <h3 className="text-xl font-bold mb-2">U.S. Licensure</h3>
                  <p className="text-gray-500">
                    Apply for and receive your state pharmacy license to begin practicing as a pharmacist in the U.S.
                  </p>
                </div>
              </div>
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
                Ready to Begin Your Journey?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward your U.S. pharmacy career today.
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
