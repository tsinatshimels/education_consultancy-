"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Scholarships for International Students in 2023",
    excerpt:
      "Discover the best scholarship opportunities for international students looking to study abroad this year.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 15, 2023",
    slug: "top-scholarships-2023",
  },
  {
    id: 2,
    title: "How to Prepare for Your Student Visa Interview",
    excerpt:
      "Essential tips and strategies to help you ace your student visa interview and increase your chances of approval.",
    image: "/placeholder.svg?height=200&width=400",
    date: "June 3, 2023",
    slug: "visa-interview-preparation",
  },
  {
    id: 3,
    title: "Choosing the Right University: Factors to Consider",
    excerpt:
      "A comprehensive guide to help you select the perfect university that aligns with your academic and career goals.",
    image: "/placeholder.svg?height=200&width=400",
    date: "July 12, 2023",
    slug: "choosing-right-university",
  },
]

export default function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Latest from Our <span className="text-amber-500">Blog</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Insights, tips, and guides to help you navigate your educational journey.
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30 mt-4 md:mt-0"
            asChild
          >
            <Link href="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 hover:text-amber-500 transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300 inline-flex items-center"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
