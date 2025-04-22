"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react"

export default function FaqContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            If you couldn't find the answer to your question, please don't hesitate to contact us. Our team is ready to
            assist you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <MessageSquare className="h-8 w-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Chat with our consultants in real-time</p>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
                onClick={() =>
                  alert("This is a frontend-only demo. Live chat would be implemented with a backend service.")
                }
              >
                Start Chat
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <Phone className="h-8 w-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Speak directly with our consultants</p>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
              >
                +1 (234) 567-8901
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <Mail className="h-8 w-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Send us your questions anytime</p>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
              >
                info@dreamfly.edu
              </Button>
            </div>
          </div>

          <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            * This is a demo website. All contact options are for demonstration purposes only.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
