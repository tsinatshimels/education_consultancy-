"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600 dark:text-gray-300">123 Education Street, Academic City, Country</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-8901</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">info@dreamfly.edu</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Office Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 my-6 pt-6">
        <h3 className="font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400">
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
