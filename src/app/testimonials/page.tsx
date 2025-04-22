import type { Metadata } from "next"
import TestimonialsHeader from "@/components/testimonials/testimonials-header"
import TestimonialsGrid from "@/components/testimonials/testimonials-grid"
import TestimonialsStats from "@/components/testimonials/testimonials-stats"
import TestimonialsForm from "@/components/testimonials/testimonials-form"

export const metadata: Metadata = {
  title: "Testimonials | Dream Fly Educational Consultancy",
  description: "Read success stories from students who achieved their educational dreams with our guidance",
}

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      <TestimonialsHeader />
      <TestimonialsStats />
      <TestimonialsGrid />
      <TestimonialsForm />
    </div>
  )
}
