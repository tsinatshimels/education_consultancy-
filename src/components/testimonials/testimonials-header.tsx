"use client"

import { motion } from "framer-motion"

export default function TestimonialsHeader() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl mb-6">
            Student <span className="text-amber-500">Success Stories</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Read inspiring testimonials from students who have successfully achieved their educational dreams with our
            guidance. Their stories reflect our commitment to excellence and personalized service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
