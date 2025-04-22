import HeroSection from "@/components/home/hero-section"
import FeaturedServices from "@/components/home/featured-services"
import WhyChooseUs from "@/components/home/why-choose-us"
import DestinationsSection from "@/components/home/destinations-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import BlogPreview from "@/components/home/blog-preview"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <DestinationsSection />
      <TestimonialsSection />
      <BlogPreview />
      <CtaSection />
    </div>
  )
}
