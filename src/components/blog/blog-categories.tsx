import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Scholarships", count: 12 },
  { name: "Visa", count: 8 },
  { name: "University Selection", count: 15 },
  { name: "Test Preparation", count: 10 },
  { name: "Financial Planning", count: 7 },
  { name: "Student Life", count: 14 },
  { name: "Career Development", count: 9 },
  { name: "Country Guides", count: 11 },
]

export default function BlogCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex justify-between items-center py-2 hover:text-amber-500 transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full px-2 py-1">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
