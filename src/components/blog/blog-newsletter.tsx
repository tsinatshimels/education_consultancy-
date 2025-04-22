"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is just for UI demonstration - no actual submission
    alert("This is a frontend-only demo. In a real application, this would submit to a backend service.")
    setEmail("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribe to Our Newsletter</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Stay updated with the latest educational opportunities and tips for studying abroad.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="focus-visible:ring-amber-500"
            />
            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
              <span className="flex items-center">
                Subscribe <Send className="ml-2 h-4 w-4" />
              </span>
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              * This is a demo website. No actual data will be submitted.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
