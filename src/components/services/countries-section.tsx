"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const countries = [
  {
    id: "usa",
    name: "United States",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    description:
      "The United States offers world-renowned universities, diverse program options, and cutting-edge research opportunities. With flexible education pathways and post-study work options, it remains a top choice for international students.",
    universities: [
      "Harvard University",
      "Stanford University",
      "MIT",
      "Columbia University",
      "University of California",
    ],
    requirements:
      "TOEFL/IELTS, SAT/ACT (undergraduate), GRE/GMAT (graduate), Financial documentation, F-1 student visa",
  },
  {
    id: "uk",
    name: "United Kingdom",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    description:
      "The UK education system is known for its quality and prestigious institutions. With shorter program durations and diverse cultural experiences, it offers excellent value for international students seeking global recognition.",
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "University of Edinburgh",
    ],
    requirements:
      "IELTS/TOEFL, Personal Statement, References, Financial documentation, Tier 4 student visa",
  },
  {
    id: "canada",
    name: "Canada",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    description:
      "Canada provides high-quality education at affordable tuition rates compared to other English-speaking countries. With its welcoming immigration policies and post-graduation work permits, it's an excellent destination for those seeking long-term opportunities.",
    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Alberta",
      "University of Waterloo",
    ],
    requirements:
      "IELTS/TOEFL, Academic transcripts, Study plan, Financial documentation, Study permit",
  },
  {
    id: "australia",
    name: "Australia",
    image:
      "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/international_students_1.jpg?itok=7Vt9RmJd",

    description:
      "Australia offers innovative education in a stunning natural environment. With its strong focus on research, excellent quality of life, and post-study work rights, it's a popular choice for international students.",
    universities: [
      "University of Melbourne",
      "University of Sydney",
      "Australian National University",
      "University of Queensland",
      "Monash University",
    ],
    requirements:
      "IELTS/TOEFL/PTE, Academic transcripts, Statement of Purpose, Financial documentation, Student visa (subclass 500)",
  },
];

export default function CountriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Popular <span className="text-amber-500">Study Destinations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore top educational destinations where we help students pursue
            their academic dreams.
          </p>
        </motion.div>

        <Tabs defaultValue="usa" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8 h-auto bg-transparent space-y-2 sm:space-y-0">
            {countries.map((country) => (
              <TabsTrigger
                key={country.id}
                value={country.id}
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                {country.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {countries.map((country) => (
            <TabsContent key={country.id} value={country.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {country.description}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Top Universities
                      </h4>
                      <ul className="space-y-2">
                        {country.universities.map((university, index) => (
                          <li key={index} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {university}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Requirements
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {country.requirements}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
