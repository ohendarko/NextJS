import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Find answers to common questions about the U.S. pharmacy licensure process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                How long does the entire licensure process take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  The entire process typically takes about 24 months from start to finish. This includes credential
                  evaluation, TOEFL exam, FPGEE preparation and exam, internship hours (1,500 hours), and NAPLEX & MPJE
                  exams. The timeline can vary based on individual circumstances, state requirements, and how quickly
                  you complete each step.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Is the TOEFL exam mandatory for all candidates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  Yes, EVERY foreign graduate must prove English proficiency via the TOEFL-iBT exam. This is a
                  requirement set by the National Association of Boards of Pharmacy (NABP) and cannot be waived, even if
                  you come from an English-speaking country or completed your pharmacy education in English.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Can you help me find a place to stay in the U.S.?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  Yes! Through our Arrival & Hosting Aid package, we provide guidance on booking affordable flights to
                  the U.S., support in securing temporary housing (Airbnb, student housing, extended stays), and
                  optional hosting aid or local support contacts in selected cities to help you settle. We also offer
                  U.S. culture orientation covering transportation, shopping, and safety tips.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Can I apply without a pharmacy degree?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  No. A 5-YEAR Bachelor's or Doctor of Pharmacy degree is required to be eligible for the FPGEE and U.S.
                  licensure process. The degree must be from a recognized institution in your home country and must be
                  verified through the Educational Credential Evaluators (ECE) or another NABP-approved credential
                  evaluation service.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                What is the FPGEE exam and how difficult is it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  The Foreign Pharmacy Graduate Equivalency Examination (FPGEE) is a comprehensive exam that tests your
                  knowledge of pharmacy practice as it relates to U.S. standards. It covers topics like pharmacology,
                  clinical sciences, biomedical sciences, and social/behavioral aspects of pharmacy practice. The exam
                  is challenging and requires thorough preparation, but with our structured study plans and guidance,
                  many of our clients pass on their first attempt.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                How do I complete the required internship hours?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  Most states require approximately 1,500 internship hours under the supervision of a licensed
                  pharmacist. These hours can be completed in various pharmacy settings, including community pharmacies,
                  hospitals, and other healthcare facilities. Our Internship Placement Strategy service helps you with
                  resume building, pharmacy employer outreach, and interview preparation to secure these opportunities.
                  The specific requirements vary by state, and we provide guidance based on your target state for
                  licensure.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                Do you guarantee job placement after licensure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  While we provide comprehensive support throughout the licensure process and offer guidance on job
                  searching strategies, we do not guarantee job placement. Our services focus on helping you
                  successfully navigate the licensure requirements and prepare you for the U.S. pharmacy job market.
                  Many of our clients have successfully secured positions after completing our program, but employment
                  outcomes depend on various factors including location, job market conditions, and individual
                  qualifications.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                What is the difference between NAPLEX and MPJE exams?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  The North American Pharmacist Licensure Examination (NAPLEX) tests your knowledge and ability to apply
                  pharmacy principles to practice scenarios. It's a standardized exam required in all U.S. states. The
                  Multistate Pharmacy Jurisprudence Examination (MPJE) tests your knowledge of pharmacy law specific to
                  the state where you're seeking licensure. You'll need to pass both exams to become licensed, and the
                  MPJE varies by state since pharmacy laws differ across jurisdictions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                Do you provide visa or immigration assistance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  Our services focus specifically on the pharmacy licensure process and do not include visa or
                  immigration assistance. We recommend consulting with an immigration attorney or authorized immigration
                  consultant for guidance on visa options and immigration processes. However, we can provide general
                  information about the types of visas that may be relevant for internationally trained pharmacists
                  seeking to practice in the U.S.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">
                How do I get started with PharmaBridge Consulting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                <p>
                  The first step is to book an initial consultation with us. During this consultation, we'll assess your
                  current situation, discuss your goals, and recommend the most appropriate service package for your
                  needs. We'll also provide an overview of the licensure process and answer any questions you may have.
                  You can book a consultation through our website or by contacting us directly via email or phone.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We're here to help you navigate every step of your journey to becoming a licensed pharmacist in the U.S.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
