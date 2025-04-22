"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, GraduationCap, Globe, Award } from "lucide-react"

const stats = [
  {
    value: "5000+",
    label: "Students Placed",
    icon: Users,
  },
  {
    value: "500+",
    label: "Partner Universities",
    icon: GraduationCap,
  },
  {
    value: "50+",
    label: "Countries",
    icon: Globe,
  },
  {
    value: "95%",
    label: "Visa Success Rate",
    icon: Award,
  },
]

export default function TestimonialsStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-12 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
