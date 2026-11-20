export type Statistic = {
  value: string
  label: string
}

export type TestimonialStatisticsData = {
  quote: string
  author: {
    name: string
    role: string
    image: string
    imageAlt: string
  }
  statistics: Statistic[]
}

export const testimonialStatistics: TestimonialStatisticsData = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    image: "/images/testimonial-author.jpg",
    imageAlt: "Portrait of the testimonial author"
  },
  statistics: [
    {
      value: "24K+",
      label: "active learners"
    },
    {
      value: "120+",
      label: "expert-led courses"
    },
    {
      value: "92%",
      label: "complete their first course"
    }
  ]
}
