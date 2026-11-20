import Image from "next/image"

import { Typography } from "@/components/ui/Typography"

import { Container } from "@/components/ui/Container"
import { testimonialStatistics } from "./testimonialStatisticsData"

export const TestimonialStatistics = () => {
  const { quote, author, statistics } = testimonialStatistics

  return (
    <section className="bg-background-white py-14 md:py-22">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr] md:items-center md:gap-12">
        {/* Testimonial */}
        <article className="flex flex-col items-start">
          <span
            aria-hidden="true"
            className="mb-3 font-heading text-4xl font-extrabold leading-none text-primary-blue"
          >
            &ldquo;
          </span>
          <Typography variant="quote" color="primary" className="pb-8 pr-16">
            {quote}
          </Typography>
          <div className="flex items-center gap-4">
            <Image
              src={author.image}
              alt={author.imageAlt}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <Typography variant="subtitle2" color="primary" fontWeight="bold">
                {author.name}
              </Typography>
              <Typography variant="body1" color="secondary">
                {author.role}
              </Typography>
            </div>
          </div>
        </article>

        {/* Statistics */}
        <dl className="flex flex-row gap-6 border-t border-line-1 pt-8 sm:border-l sm:border-t-0 sm:py-0 sm:pl-12 sm:flex-col">
          {statistics.map((statistic) => (
            <div key={statistic.value} className="flex flex-col gap-1">
              <Typography variant="h1" as="span" color="blue">
                {statistic.value}
              </Typography>
              <Typography variant="body1" as="span" color="tertiary">
                {statistic.label}
              </Typography>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
