"use client"

import { useState } from "react"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Typography } from "@/components/ui/Typography"

import { Container } from "@/components/ui/Container"
import { ContactInfo } from "./ContactInfo"
import { contactInfo, getInTouchContent } from "./getInTouchData"

export const GetInTouch = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-background-white py-14 md:py-22">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-22">
        {/* Contact information */}
        <div className="flex flex-col items-start">
          <Typography variant="overline" color="blue" className="mb-3">
            {getInTouchContent.eyebrow}
          </Typography>
          <Typography variant="h3" className="mb-4">
            {getInTouchContent.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            className="mb-8 max-w-lg"
          >
            {getInTouchContent.description}
          </Typography>
          <div className="w-full">
            <ContactInfo items={contactInfo} />
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-[16px] border border-line-1 bg-background-white p-6 shadow-[0_4px_20px_rgba(23,27,44,0.04)] md:p-8">
          <div className="mb-6">
            <Typography variant="h5" className="mb-2">
              {getInTouchContent.formTitle}
            </Typography>
            <Typography variant="body1" color="secondary">
              {getInTouchContent.formDescription}
            </Typography>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              id="contact-name"
              name="name"
              label="Full name"
              placeholder="Your name"
              autoComplete="name"
              required
            />
            <Input
              id="contact-email"
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <Textarea
              id="contact-message"
              name="message"
              label="Your question"
              placeholder="Tell us how we can help..."
              rows={4}
              required
            />
            <Button type="submit" variant="primary" fullWidth>
              {getInTouchContent.submitLabel}
            </Button>
            {isSubmitted && (
              <p role="status" className="font-body text-sm text-primary-blue">
                Thank you! Your message was submitted successfully.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}
