"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl mb-6">
              Our <span className="text-amber-500">Services</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              We offer comprehensive educational consultancy services to help
              students navigate every step of their international education
              journey. From university selection to post-arrival support, we're
              with you all the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#study-abroad"
                className="inline-block px-6 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-sm font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
              >
                Study Abroad
              </a>
              <a
                href="#visa-assistance"
                className="inline-block px-6 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-sm font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
              >
                Visa Assistance
              </a>
              <a
                href="#university-placement"
                className="inline-block px-6 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-sm font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
              >
                University Placement
              </a>
              <a
                href="#test-preparation"
                className="inline-block px-6 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-sm font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
              >
                Test Preparation
              </a>
              <a
                href="#career-counseling"
                className="inline-block px-6 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-sm font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
              >
                Career Counseling
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px]"
          >
            <Image
              src="https://www.stamford.edu/wp-content/uploads/2019/07/Stamford-International-University-2019-IV-768x512.jpg"
              alt="Educational consultancy services"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-amber-300 opacity-20 blur-3xl"></div>
      <div className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-amber-500 opacity-20 blur-3xl"></div>
    </section>
  );
}
