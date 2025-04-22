"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold">Find Us</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-md h-[400px] w-full"
        >
          {/* Replace with actual map implementation */}
          <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300">Interactive Map Would Be Displayed Here</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
