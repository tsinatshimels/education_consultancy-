import type { Metadata } from "next"
import FaqHeader from "@/components/faq/faq-header"
import FaqAccordion from "@/components/faq/faq-accordion"
import FaqContact from "@/components/faq/faq-contact"

export const metadata: Metadata = {
  title: "FAQ | Dream Fly Educational Consultancy",
  description: "Find answers to frequently asked questions about studying abroad and our services",
}

export default function FaqPage() {
  return (
    <div className="pt-16">
      <FaqHeader />
      <FaqAccordion />
      <FaqContact />
    </div>
  )
}
