import Image from "next/image"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { featuredCourse } from "./featuredCourseData"

export const FeaturedCourse = () => {
  return (
    <section className="bg-primary-blue py-14 md:py-22">
      <Container className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Course image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={featuredCourse.image}
              alt={featuredCourse.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-3 -left-3 rounded-[6px] bg-secondary-yellow px-3 py-1.5 flex items-center">
            <Typography
              variant="overline"
              color="primary"
              fontWeight="semibold"
            >
              Featured course
            </Typography>
          </div>
        </div>

        {/* Course information */}
        <div className="flex flex-col items-start">
          <Typography variant="overline" color="white" className="mb-3">
            {featuredCourse.eyebrow}
          </Typography>
          <Typography variant="h3" color="white" className="mb-4">
            {featuredCourse.title}
          </Typography>
          <Typography variant="subtitle2" color="white" className="mb-5">
            {featuredCourse.description}
          </Typography>
          <Typography variant="subtitle2" color="white" className="mb-4">
            {featuredCourse.instructor}
          </Typography>

          {/* Course tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {featuredCourse.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[6px] border border-white/50 px-4 py-2"
              >
                <Typography variant="body1" color="white">
                  {tag}
                </Typography>
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-3 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href={featuredCourse.primaryAction.href}
              fullWidth
              variant="accent"
              className="sm:w-auto h-[52px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Typography variant="body1" color="primary" fontWeight="bold">
                {featuredCourse.primaryAction.label}
              </Typography>
            </Button>
            <Button
              href={featuredCourse.secondaryAction.href}
              fullWidth
              className="sm:w-auto h-[52px] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Typography
                variant="body1"
                color="whiteSecondary"
                fontWeight="bold"
              >
                {featuredCourse.secondaryAction.label}
              </Typography>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
