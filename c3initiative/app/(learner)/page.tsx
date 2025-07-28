import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import CTA from "@/components/cta"
import ScrollSlideUp from "@/components/ScrollSlideUp"

export default function HomePage() {
  return (
    <main className="min-h-screen space-y-16">
      <ScrollSlideUp><Hero /></ScrollSlideUp>
      <ScrollSlideUp><Features /></ScrollSlideUp>
      <ScrollSlideUp><About /></ScrollSlideUp>
      <ScrollSlideUp><CTA /></ScrollSlideUp>
    </main>
  )
}
