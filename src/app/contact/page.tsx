import type { Metadata } from "next"
import ContactHeader from "@/components/contact/contact-header"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us | Dream Fly Educational Consultancy",
  description: "Get in touch with our educational consultants for personalized guidance on your study abroad journey",
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  )
}
