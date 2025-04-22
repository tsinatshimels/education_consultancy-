"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Scholarships for International Students in 2023",
    excerpt:
      "Discover the best scholarship opportunities for international students looking to study abroad this year.",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    date: "May 15, 2023",
    author: "Sarah Johnson",
    category: "Scholarships",
    slug: "top-scholarships-2023",
  },
  {
    id: 2,
    title: "How to Prepare for Your Student Visa Interview",
    excerpt:
      "Essential tips and strategies to help you ace your student visa interview and increase your chances of approval.",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    date: "June 3, 2023",
    author: "Michael Chen",
    category: "Visa",
    slug: "visa-interview-preparation",
  },
  {
    id: 3,
    title: "Choosing the Right University: Factors to Consider",
    excerpt:
      "A comprehensive guide to help you select the perfect university that aligns with your academic and career goals.",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    date: "July 12, 2023",
    author: "Emma Wilson",
    category: "University Selection",
    slug: "choosing-right-university",
  },
  {
    id: 4,
    title: "IELTS vs. TOEFL: Which English Test Should You Take?",
    excerpt:
      "Compare the two most popular English proficiency tests and determine which one is better suited for your study abroad plans.",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    date: "August 5, 2023",
    author: "David Kim",
    category: "Test Preparation",
    slug: "ielts-vs-toefl",
  },
  {
    id: 5,
    title: "Budgeting for Your International Education: A Complete Guide",
    excerpt:
      "Learn how to plan your finances effectively for studying abroad, including tuition, living expenses, and hidden costs.",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    date: "September 20, 2023",
    author: "Priya Sharma",
    category: "Financial Planning",
    slug: "budgeting-international-education",
  },
  {
    id: 6,
    title: "Cultural Adaptation: Overcoming Culture Shock Abroad",
    excerpt:
      "Tips and strategies to help international students adjust to new cultures and environments while studying abroad.",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    date: "October 8, 2023",
    author: "James Rodriguez",
    category: "Student Life",
    slug: "cultural-adaptation-abroad",
  },
];

export default function BlogGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref}>
      <motion.div
        className="grid gap-8 md:grid-cols-2"
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
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  Read more →
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
