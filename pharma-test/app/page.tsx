import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, GraduationCap, MapPin, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-pharma-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Bridge to U.S. Pharmacy Success
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Comprehensive advisory services for internationally trained pharmacists seeking U.S. licensure.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-pharma hover:opacity-90">
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-pharma text-pharma hover:bg-pharma-50">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pharmacist working in a modern pharmacy"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive support for every step of your U.S. pharmacy licensure journey
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-start p-6 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <BookOpen className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-xl font-bold mb-2">Credential Evaluation Guidance</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step support preparing your transcripts and certifications for ECE evaluation.
              </p>
              <Link
                href="/services#credential-evaluation"
                className="text-pharma hover:underline mt-auto inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-start p-6 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <GraduationCap className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-xl font-bold mb-2">FPGEE Exam Preparation</h3>
              <p className="text-muted-foreground mb-4">
                Personalized study plans aligned with NABP Competency Requirements and practice exams.
              </p>
              <Link
                href="/services#fpgee-prep"
                className="text-pharma hover:underline mt-auto inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-start p-6 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <MapPin className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accommodation & Hosting</h3>
              <p className="text-muted-foreground mb-4">
                Support in securing temporary housing and U.S. culture orientation for international clients.
              </p>
              <Link
                href="/services#accommodation"
                className="text-pharma hover:underline mt-auto inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-pharma text-pharma hover:bg-pharma-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose PharmaBridge</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our unique approach sets us apart
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-4">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <Award className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-lg font-bold mb-2">Official NABP-Based Process</h3>
              <p className="text-muted-foreground">Our guidance follows official NABP requirements and procedures.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <MessageSquare className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-lg font-bold mb-2">Personalized Coaching</h3>
              <p className="text-muted-foreground">Tailored support for each pharmacist's unique background.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <GraduationCap className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-lg font-bold mb-2">TOEFL Support</h3>
              <p className="text-muted-foreground">Specialized English proficiency preparation beyond just exams.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="p-2 rounded-full bg-pharma-100 mb-4">
                <MapPin className="h-6 w-6 text-pharma" />
              </div>
              <h3 className="text-lg font-bold mb-2">Full U.S. Success</h3>
              <p className="text-muted-foreground">
                Commitment to your complete journey from overseas to U.S. practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-pharma text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward your U.S. pharmacy career today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-white text-pharma hover:bg-white/90">Book Your Consultation Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
