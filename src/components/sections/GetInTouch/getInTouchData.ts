export type ContactInfoItem = {
  id: string
  title: string
  description: string
  icon: "email" | "clock"
}

export const getInTouchContent = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  formTitle: "Contact us",
  formDescription: "Fill out the fields and we will get in touch.",
  submitLabel: "Send message"
}

export const contactInfo: ContactInfoItem[] = [
  {
    id: "email",
    title: "Email",
    description: "contact@luma.com",
    icon: "email"
  },
  {
    id: "response-time",
    title: "Response Time",
    description: "Up to 24 hours on business days",
    icon: "clock"
  }
]
