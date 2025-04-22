"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export default function TestimonialsForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is just for UI demonstration - no actual submission
    alert("This is a frontend-only demo. In a real application, this would submit to a backend service.")
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Share Your <span className="text-amber-500">Success Story</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We'd love to hear about your experience with Dream Fly Educational Consultancy. Your story can inspire
              future students!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input id="university" placeholder="Your university" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Program/Course</Label>
                <Input id="program" placeholder="Your program or course" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="testimonial">Your Testimonial</Label>
              <Textarea
                id="testimonial"
                placeholder="Share your experience with Dream Fly..."
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">Photo (Optional)</Label>
              <Input id="photo" type="file" accept="image/*" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Upload a professional photo to be displayed with your testimonial.
              </p>
            </div>

            <div className="flex justify-center">
              <Button type="submit" size="lg" className="bg-amber-500 hover:bg-amber-600">
                <span className="flex items-center">
                  Submit Testimonial <Send className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              * This is a demo website. No actual data will be submitted.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
