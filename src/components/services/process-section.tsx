"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, FileSearch, GraduationCap, FileCheck, Plane, Users } from "lucide-react"

const steps = [
  {
    title: "Initial Consultation",
    description:
      "Meet with our expert consultants to discuss your academic background, career goals, and preferences for studying abroad.",
    icon: MessageSquare,
  },
  {
    title: "University & Course Selection",
    description:
      "Based on your profile, we help you identify suitable universities and programs that align with your academic and career objectives.",
    icon: FileSearch,
  },
  {
    title: "Application Preparation",
    description:
      "We assist you in preparing compelling applications, including personal statements, recommendation letters, and other required documents.",
    icon: GraduationCap,
  },
  {
    title: "Visa Processing",
    description:
      "Our visa experts guide you through the entire visa application process, from documentation to interview preparation.",
    icon: FileCheck,
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "We provide comprehensive pre-departure orientation, including accommodation, travel arrangements, and cultural adaptation tips.",
    icon: Plane,
  },
  {
    title: "Post-Arrival Support",
    description:
      "Our support continues after you arrive at your destination, helping you settle in and connect with local communities.",
    icon: Users,
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Our <span className="text-amber-500">Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We follow a structured approach to ensure your educational journey is smooth and successful.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-full">
                <div className="absolute -top-5 left-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white">
                  {index + 1}
                </div>
                <div className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
