"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    name: "United States",
    image: "https://www.amadovenigeria.net/country/20240425095659.jpg",
    universities: 10,
    href: "/services#usa",
  },
  {
    name: "United Kingdom",
    image: "https://www.amadovenigeria.net/country/20240425095659.jpg",

    universities: 15,
    href: "/services#uk",
  },
  {
    name: "Canada",
    image: "https://www.amadovenigeria.net/country/20240425095659.jpg",

    universities: 5,
    href: "/services#canada",
  },
  {
    name: "Australia",
    image: "https://www.amadovenigeria.net/country/20240425095659.jpg",

    universities: 10,
    href: "/services#australia",
  },
  {
    name: "Germany",
    image: "https://www.amadovenigeria.net/country/20240425095659.jpg",

    universities: 10,
    href: "/services#germany",
  },
  {
    name: "Singapore",
    image: "https://www.amadovenigeria.net/country/20240425095659.jpg",

    universities: 5,
    href: "/services#singapore",
  },
];

export default function DestinationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Popular <span className="text-amber-500">Destinations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore top educational destinations where we help students pursue
            their academic dreams.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Link href={destination.href}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {destination.universities} Partner Universities
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
