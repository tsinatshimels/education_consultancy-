"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Globe, Award } from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
              Your Educational Journey Starts Here
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Fly Towards Your{" "}
              <span className="text-amber-500">Educational Dreams</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              We guide students through every step of their international
              education journey, from university selection to visa processing
              and beyond.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start justify-center">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white"
                asChild
              >
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:justify-start">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  500+ Universities
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  50+ Countries
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  2+ Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto h-[400px] w-full max-w-md md:h-[500px]"
          >
            <Image
              src="https://www.stamford.edu/wp-content/uploads/2019/07/Stamford-International-University-2019-IV-768x512.jpg"
              alt="Students studying abroad"
              fill
              className="object-contain"
              onLoad={() => setIsLoaded(true)}
              priority
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
