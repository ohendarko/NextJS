import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto !px-1 max-w-4xl text-center">
        <div className="space-y-8">
          <div className="w-20 h-20 gradient-triple rounded-full flex items-center justify-center mx-auto">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Join the{" "}
              <span className="bg-gradient-to-r from-orange-500 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                C3 Initiative
              </span>{" "}
              Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Be part of the C3 Initiative and join thousands of healthcare students and professionals who are making a
              difference in cervical cancer prevention through evidence-based education.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="gradient-orange-blue text-white hover-shadow-gradient group">
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/modules">
              <Button size="lg" variant="outline" className="hover-shadow-gradient bg-transparent">
                Explore Modules
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Free to join • No credit card required • Start learning immediately
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
