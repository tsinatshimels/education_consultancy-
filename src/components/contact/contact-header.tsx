"use client"

import { motion } from "framer-motion"

export default function ContactHeader() {
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
            Contact <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions about studying abroad? Get in touch with our educational consultants for personalized
            guidance on your journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
