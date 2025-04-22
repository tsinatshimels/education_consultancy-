"use client"

import { Button } from "@/components/ui/button"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { GraduationCap, FileCheck, Building, BookOpen, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Study Abroad Programs",
    description: "Comprehensive guidance for international education opportunities in top universities worldwide.",
    icon: GraduationCap,
    href: "/services#study-abroad",
  },
  {
    title: "Visa Assistance",
    description: "Expert support for student visa applications with high success rates across multiple countries.",
    icon: FileCheck,
    href: "/services#visa-assistance",
  },
  {
    title: "University Placement",
    description: "Personalized university selection and application assistance based on your academic profile.",
    icon: Building,
    href: "/services#university-placement",
  },
  {
    title: "Test Preparation",
    description: "Specialized coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
    icon: BookOpen,
    href: "/services#test-preparation",
  },
  {
    title: "Career Counseling",
    description: "Professional guidance to align your education with your career goals and aspirations.",
    icon: Briefcase,
    href: "/services#career-counseling",
  },
]

export default function FeaturedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Comprehensive educational consultancy services to help you achieve your academic and career goals.
          </p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-800">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
