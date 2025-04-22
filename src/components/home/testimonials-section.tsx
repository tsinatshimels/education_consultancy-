"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "International Student, USA",
    image: "/images/image1.png",
    quote:
      "Dream Fly made my journey to study in the US seamless. Their guidance through the visa process and university applications was invaluable. I'm now studying at my dream university thanks to their support!",
    university: "Harvard University",
    program: "Master of Business Administration",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Graduate Student, UK",
    image:
      "https://cdn.pixabay.com/photo/2023/09/21/09/36/new-simple-style-boy-photo-8266357_640.jpg",
    quote:
      "The personalized attention I received from Dream Fly consultants helped me secure a scholarship at a top UK university. Their knowledge of the application process and requirements was exceptional.",
    university: "University of Oxford",
    program: "MSc in Computer Science",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Undergraduate Student, Canada",
    image: "/images/image.png",
    quote:
      "I was overwhelmed by the process of studying abroad until I found Dream Fly. They simplified everything and provided step-by-step guidance that made my dream of studying in Canada a reality.",
    university: "University of Toronto",
    program: "Bachelor of Science in Psychology",
  },
  {
    id: 4,
    name: "Biniyam Girma",
    role: "MBA Student, Australia",
    image: "/images/image.png",
    quote:
      "The test preparation courses at Dream Fly helped me achieve a high GMAT score, which was crucial for my MBA admission. Their career counseling also helped me choose the right specialization.",
    university: "University of Melbourne",
    program: "Master of Business Administration",
  },
  {
    id: 5,
    name: "Benjamin Müller",
    role: "PhD Student, Germany",
    image: "/images/image.png",
    quote:
      "Dream Fly's connections with universities in Germany opened doors for my research aspirations. Their guidance on research proposals and funding opportunities was particularly helpful.",
    university: "Technical University of Munich",
    program: "PhD in Mechanical Engineering",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const displayedTestimonials = () => {
    // For mobile: show 1, tablet: show 2, desktop: show 3
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
    ];
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            What Our <span className="text-amber-500">Students Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Hear from students who have successfully achieved their educational
            goals with our guidance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-amber-500 text-amber-500 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayedTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={
                  index === 2
                    ? "hidden lg:block"
                    : index === 1
                    ? "hidden md:block"
                    : ""
                }
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-amber-500 mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
