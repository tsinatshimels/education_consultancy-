"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the general requirements for studying abroad?",
    answer:
      "General requirements typically include academic transcripts, standardized test scores (like IELTS/TOEFL for English proficiency, and GRE/GMAT for graduate programs), statement of purpose, recommendation letters, and proof of financial support. Specific requirements vary by country, university, and program level.",
  },
  {
    question: "How long does the visa application process take?",
    answer:
      "Visa processing times vary by country, ranging from 2-12 weeks. We recommend starting the visa application process at least 3 months before your intended departure to allow for any unexpected delays.",
  },
  {
    question: "Can you help with scholarship applications?",
    answer:
      "Yes, we provide comprehensive assistance with scholarship applications. We help identify suitable scholarships, prepare compelling applications, and guide you through the entire process to maximize your chances of securing financial aid.",
  },
  {
    question: "What is the best time to start the application process?",
    answer:
      "For fall (September) intake, we recommend starting the process 12-15 months in advance. For spring (January/February) intake, begin 9-12 months ahead. This timeline allows sufficient time for test preparation, university selection, application submission, and visa processing.",
  },
  {
    question: "Do you provide assistance after I receive my visa?",
    answer:
      "Our support continues after visa approval. We provide pre-departure orientation, help with accommodation arrangements, travel guidance, and connect you with alumni networks at your destination. We also offer post-arrival support to help you settle in.",
  },
  {
    question: "What if my visa application is rejected?",
    answer:
      "If your visa application is rejected, we analyze the reasons for rejection and develop a strategy for reapplication or explore alternative options. Our consultants have extensive experience in handling visa rejections and helping students overcome these challenges.",
  },
]

export default function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services and the study abroad process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
        </div>
      </div>
    </section>
  )
}
