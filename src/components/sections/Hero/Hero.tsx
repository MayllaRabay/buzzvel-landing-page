import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import Image from "next/image"

const HeroSocialProof = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg"].map(
          (avatar, index) => (
            <Image
              key={index}
              src={`/images/${avatar}`}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full border-2 border-background-light-yellow object-cover"
            />
          )
        )}
      </div>
      <Typography
        variant="body1"
        color="primary"
        fontWeight="bold"
        className="flex items-center gap-1"
      >
        Trusted by 24,000+
        <Typography
          variant="body1"
          color="secondary"
          fontWeight="regular"
          as="span"
        >
          learners
        </Typography>
      </Typography>
    </div>
  )
}

const HeroImage = () => {
  return (
    <div className="relative mx-auto w-full">
      {/* Decorative shapes */}
      <div
        aria-hidden="true"
        className="absolute -left-5 sm:-left-14 bottom-3 z-0 size-20 sm:size-30 rounded-full bg-primary-blue-light"
      />
      <div
        aria-hidden="true"
        className="absolute -right-4 sm:-right-10 top-5 z-0 h-[90%] w-10 rounded-r-[16px] bg-background-orange"
      />

      {/* Main image */}
      <div className="relative z-10 w-full overflow-hidden rounded-[24px] min-h-[380px] sm:h-[520px]">
        <Image
          src="/images/hero-student.jpg"
          alt="Student learning at a desk with a laptop"
          fill
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 500px"
          className="object-cover object-top sm:object-center"
        />
      </div>

      {/* Floating course information */}
      <div className="absolute -left-2 top-2 z-20 rounded-xl bg-white p-3 shadow-md sm:-left-3 sm:top-3">
        <div className="flex items-center gap-2">
          <Typography
            variant="body1"
            fontWeight="bold"
            color="blue"
            className="rounded-md bg-primary-blue-light px-1.5 py-1"
          >
            120+
          </Typography>
          <Typography variant="body1">expert-led courses</Typography>
        </div>
      </div>

      {/* Floating rating */}
      <div className="absolute bottom-10 -right-4 z-20 flex items-center gap-2 rounded-xl bg-white p-4 shadow-lg md:-right-15">
        <span
          aria-label="5 stars"
          className="text-xs tracking-wide text-[#FFCB35]"
        >
          ★★★★★
        </span>
        <Typography variant="body1" as="span">
          4.9 avg rating
        </Typography>
      </div>
    </div>
  )
}

export const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-background-light-yellow py-14 md:py-22"
    >
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* Image comes first on mobile */}
        <div className="order-1 md:order-2 md:mr-10">
          <HeroImage />
        </div>

        {/* Hero content */}
        <div className="order-2 flex flex-col items-start md:order-1 gap-3 z-1">
          <Typography variant="overline" color="blue" className="mb-3">
            Learn at your own pace
          </Typography>
          <Typography variant="h1" color="primary" className="max-w-[560px]">
            Build skills that actually move you forward.
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            className="mt-4 max-w-[480px]"
          >
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </Typography>
          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="#courses"
              variant="primary"
              fullWidth
              className="min-w-[170px]"
            >
              Explore courses
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              fullWidth
              className="min-w-[170px]"
            >
              See how it works
            </Button>
          </div>

          <div className="mt-6 flex w-full items-center justify-center sm:w-auto sm:justify-start">
            <HeroSocialProof />
          </div>
        </div>
      </Container>
    </section>
  )
}
