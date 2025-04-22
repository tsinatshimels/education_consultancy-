"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqCategories = [
  {
    id: "general",
    name: "General",
    faqs: [
      {
        question: "What services does Dream Fly Educational Consultancy offer?",
        answer:
          "Dream Fly offers comprehensive educational consultancy services including study abroad programs, visa assistance, university placement, test preparation, and career counseling. We guide students through every step of their international education journey.",
      },
      {
        question: "How experienced is Dream Fly in the educational consultancy field?",
        answer:
          "Dream Fly has over 10 years of experience in educational consultancy, having helped thousands of students achieve their dreams of studying abroad. Our team consists of experienced consultants with specialized knowledge of different countries and education systems.",
      },
      {
        question: "Do you charge for the initial consultation?",
        answer:
          "No, we offer a free initial consultation to understand your academic background, career goals, and preferences. This helps us provide personalized guidance tailored to your specific needs.",
      },
      {
        question: "How can I schedule an appointment with Dream Fly?",
        answer:
          "You can schedule an appointment through our website's contact form, by calling our office, or by visiting us in person. We offer both in-person and virtual consultations for your convenience.",
      },
    ],
  },
  {
    id: "applications",
    name: "Applications",
    faqs: [
      {
        question: "When should I start the university application process?",
        answer:
          "For fall (September) intake, we recommend starting the process 12-15 months in advance. For spring (January/February) intake, begin 9-12 months ahead. This timeline allows sufficient time for test preparation, university selection, application submission, and visa processing.",
      },
      {
        question: "What documents are typically required for university applications?",
        answer:
          "Common requirements include academic transcripts, standardized test scores (IELTS/TOEFL, GRE/GMAT), statement of purpose, letters of recommendation, CV/resume, and passport copy. Specific requirements vary by university and program.",
      },
      {
        question: "Can you help me with my personal statement and essays?",
        answer:
          "Yes, we provide comprehensive assistance with personal statements and essays. Our experts help you craft compelling narratives that highlight your strengths, achievements, and aspirations, increasing your chances of admission.",
      },
      {
        question: "How many universities should I apply to?",
        answer:
          "We typically recommend applying to 5-8 universities, including a mix of ambitious, moderate, and safe options. The exact number depends on your academic profile, budget, and preferences.",
      },
    ],
  },
  {
    id: "visa",
    name: "Visa",
    faqs: [
      {
        question: "What is the visa success rate for Dream Fly clients?",
        answer:
          "Dream Fly maintains a high visa success rate of over 95% across various countries. Our thorough preparation and documentation review process significantly increases the chances of visa approval for our clients.",
      },
      {
        question: "How long does the visa application process take?",
        answer:
          "Visa processing times vary by country, ranging from 2-12 weeks. We recommend starting the visa application process at least 3 months before your intended departure to allow for any unexpected delays.",
      },
      {
        question: "What if my visa application is rejected?",
        answer:
          "If your visa application is rejected, we analyze the reasons for rejection and develop a strategy for reapplication or explore alternative options. Our consultants have extensive experience in handling visa rejections and helping students overcome these challenges.",
      },
      {
        question: "Do you provide mock visa interviews?",
        answer:
          "Yes, we conduct comprehensive mock visa interviews to prepare you for the actual interview. We simulate the interview environment, ask typical questions, and provide feedback on your responses and presentation to increase your confidence and chances of success.",
      },
    ],
  },
  {
    id: "financial",
    name: "Financial",
    faqs: [
      {
        question: "What are the costs associated with studying abroad?",
        answer:
          "Costs include tuition fees, living expenses (accommodation, food, transportation), health insurance, visa fees, and miscellaneous expenses. These vary significantly by country, city, and institution. We provide detailed cost breakdowns for your chosen destinations.",
      },
      {
        question: "Can you help with scholarship applications?",
        answer:
          "Yes, we provide comprehensive assistance with scholarship applications. We help identify suitable scholarships, prepare compelling applications, and guide you through the entire process to maximize your chances of securing financial aid.",
      },
      {
        question: "Are there any part-time work opportunities for international students?",
        answer:
          "Most countries allow international students to work part-time during their studies, typically 20 hours per week during semesters and full-time during breaks. Regulations vary by country, and we provide detailed information about work rights in your chosen destination.",
      },
      {
        question: "What are the payment options for your services?",
        answer:
          "We offer flexible payment options including one-time payments and installment plans. We accept various payment methods including credit/debit cards, bank transfers, and digital payment platforms. Detailed payment information is provided during the consultation.",
      },
    ],
  },
]

export default function FaqAccordion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8 h-auto bg-transparent space-y-2 sm:space-y-0">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
