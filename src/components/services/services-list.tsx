"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  FileCheck,
  Building,
  BookOpen,
  Briefcase,
} from "lucide-react";

const services = [
  {
    id: "study-abroad",
    title: "Study Abroad Programs",
    description:
      "We provide comprehensive guidance for international education opportunities in top universities worldwide. Our experts help you navigate through country selection, university options, and program choices based on your academic background, career goals, and budget.",
    icon: GraduationCap,
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description:
      "Our visa experts provide end-to-end support for student visa applications with high success rates across multiple countries. We guide you through documentation, financial requirements, interview preparation, and application submission to maximize your chances of approval.",
    icon: FileCheck,
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",
  },
  {
    id: "university-placement",
    title: "University Placement",
    description:
      "We offer personalized university selection and application assistance based on your academic profile. Our consultants help you identify the best-fit universities, prepare compelling applications, secure admission letters, and negotiate scholarships and financial aid.",
    icon: Building,
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",
  },
  {
    id: "test-preparation",
    title: "Test Preparation",
    description:
      "Our specialized coaching programs prepare you for IELTS, TOEFL, GRE, GMAT, SAT, and other standardized tests required for international admissions. Our experienced trainers use proven methodologies and practice materials to help you achieve your target scores.",
    icon: BookOpen,
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "Our professional career counselors provide guidance to align your education with your career goals and aspirations. We help you identify suitable career paths, select relevant courses, and develop a roadmap for achieving your long-term professional objectives.",
    icon: Briefcase,
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",
  },
];

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mb-6">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {service.title} Feature {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
