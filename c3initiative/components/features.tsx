import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Award, Smartphone, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths adapted to your knowledge level and learning style.",
    gradient: "gradient-orange-blue",
  },
  {
    icon: Users,
    title: "Expert-Curated Content",
    description: "Content developed by leading oncologists and healthcare professionals.",
    gradient: "gradient-blue-pink",
  },
  {
    icon: Award,
    title: "Certification Ready",
    description: "Earn certificates upon completion of modules to showcase your knowledge.",
    gradient: "gradient-orange-pink",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Learn anywhere, anytime with our fully responsive mobile platform.",
    gradient: "gradient-triple",
  },
  {
    icon: Clock,
    title: "Self-Paced Learning",
    description: "Progress at your own speed with flexible scheduling and bookmarking.",
    gradient: "gradient-orange-blue",
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your health information and learning data are completely secure and private.",
    gradient: "gradient-blue-pink",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container !px-1 mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              C3 Initiative?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with medical expertise to deliver the most effective cervical
            cancer education experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover-shadow-gradient group cursor-pointer">
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
