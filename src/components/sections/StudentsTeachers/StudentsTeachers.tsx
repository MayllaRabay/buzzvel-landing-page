import Image from "next/image"

import { Button } from "@/components/ui/Button"
import { Typography } from "@/components/ui/Typography"

import { Container } from "@/components/ui/Container"
import { studentsTeachers } from "./studentsTeachersData"

export const StudentsTeachers = () => {
  const { eyebrow, title, description, image, imageAlt, action } =
    studentsTeachers

  return (
    <section
      id="community"
      className="overflow-hidden bg-background-light-yellow py-14 md:py-22"
    >
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Section content */}
        <div className="flex flex-col gap-3 items-start">
          <Typography variant="overline" color="blue">
            {eyebrow}
          </Typography>
          <Typography variant="h3" color="primary" className="mb-4 max-w-lg">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            className="mb-6 max-w-lg"
          >
            {description}
          </Typography>
          <Button href={action.href} variant="secondary">
            <Typography variant="body1" color="primary" fontWeight="bold">
              {action.label}
            </Typography>
          </Button>
        </div>

        {/* Community collage */}
        <div className="relative mx-auto aspect-square w-full max-w-[530px]">
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full bg-primary-blue-light"
          />
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative z-10 object-contain"
          />
        </div>
      </Container>
    </section>
  )
}
