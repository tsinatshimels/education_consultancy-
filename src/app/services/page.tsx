import type { Metadata } from "next"
import ServicesList from "@/components/services/services-list"
import ServiceHero from "@/components/services/service-hero"
import CountriesSection from "@/components/services/countries-section"
import ProcessSection from "@/components/services/process-section"
import FaqSection from "@/components/services/faq-section"
import CtaSection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Services | Dream Fly Educational Consultancy",
  description: "Comprehensive educational consultancy services to help you achieve your academic goals abroad",
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServiceHero />
      <ServicesList />
      <CountriesSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
