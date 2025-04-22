import type { Metadata } from "next"
import BlogHeader from "@/components/blog/blog-header"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import BlogNewsletter from "@/components/blog/blog-newsletter"

export const metadata: Metadata = {
  title: "Blog | Dream Fly Educational Consultancy",
  description: "Latest insights, tips, and guides for your educational journey abroad",
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="space-y-8">
            <BlogCategories />
            <BlogNewsletter />
          </div>
        </div>
      </div>
    </div>
  )
}
