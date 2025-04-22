"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "International Student, USA",
    image:
      "/https://cdn.pixabay.com/photo/2021/03/27/19/25/alone-boy-6129399_640.jpg",
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
    image: "/placeholder.svg?height=100&width=100",
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
  {
    id: 6,
    name: "Carlos Rodriguez",
    role: "Exchange Student, Singapore",
    image:
      "https://cdn.pixabay.com/photo/2023/09/21/09/36/new-simple-style-boy-photo-8266357_640.jpg",

    quote:
      "Thanks to Dream Fly, my exchange semester in Singapore was perfectly arranged. From accommodation to course selection, they handled everything professionally and made the process stress-free.",
    university: "National University of Singapore",
    program: "Exchange Program in Business",
  },
  {
    id: 7,
    name: "Aisha Patel",
    role: "Postgraduate Student, New Zealand",
    image:
      "https://cdn.pixabay.com/photo/2023/09/21/09/36/new-simple-style-boy-photo-8266357_640.jpg",

    quote:
      "Dream Fly's consultants understood my unique situation and helped me find the perfect program in New Zealand. Their visa assistance was crucial in getting my application approved quickly.",
    university: "University of Auckland",
    program: "Master of Environmental Science",
  },
  {
    id: 8,
    name: "Hiroshi Tanaka",
    role: "Language Student, France",
    image:
      "https://cdn.pixabay.com/photo/2023/09/21/09/36/new-simple-style-boy-photo-8266357_640.jpg",

    quote:
      "When I wanted to study French in Paris, Dream Fly connected me with the best language schools and helped with all the arrangements. Their cultural preparation advice was especially valuable.",
    university: "Sorbonne University",
    program: "French Language Immersion",
  },
  {
    id: 9,
    name: "Sophia Williams",
    role: "Law Student, Netherlands",
    image:
      "https://cdn.pixabay.com/photo/2023/09/21/09/36/new-simple-style-boy-photo-8266357_640.jpg",

    quote:
      "Dream Fly's expertise in European education systems helped me navigate the complex application process for law school in the Netherlands. Their guidance was comprehensive and personalized.",
    university: "Leiden University",
    program: "Master of Laws (LLM)",
  },
];

export default function TestimonialsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
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
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                        {testimonial.program} | {testimonial.university}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
