"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-20 bg-amber-500 dark:bg-amber-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-amber-100 mb-8">
            Contact us today for a free consultation and take the first step towards your dream education abroad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50" asChild>
              <Link href="/contact">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-600" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
          <p className="text-xs text-amber-100 mt-4">
            * This is a demo website. All consultation requests are for demonstration purposes only.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
