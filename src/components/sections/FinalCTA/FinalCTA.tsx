import Image from "next/image"

import { Button } from "@/components/ui/Button"
import { Typography } from "@/components/ui/Typography"

import { Container } from "@/components/ui/Container"
import { finalCTA } from "./finalCTAData"

export const FinalCTA = () => {
  const { title, description, avatars, actions } = finalCTA

  return (
    <section className="relative isolate overflow-hidden bg-background-yellow py-14 md:py-22">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="hidden md:flex pointer-events-none absolute inset-0 z-0 overflow-hidden text-background-orange"
      >
        {/* Top left circle */}
        <span className="absolute -left-1 top-4 h-[108px] w-[108px] rounded-full border-2 border-current md:left-[22px] md:top-4" />
        {/* Top left tilted square */}
        <span className="absolute left-[25%] top-11 h-14 w-14 rotate-12 rounded-lg border border-current md:h-16 md:w-14" />
        {/* Small top circle */}
        <span className="absolute right-[30%] top-11 h-8 w-8 rounded-full border-2 border-current" />
        {/* Top right filled square */}
        <span className="absolute -right-5 -top-5 h-28 w-28 rotate-12 rounded-lg bg-current md:-right-1 md:-top-4 md:h-[116px] md:w-[116px]" />
        {/* Left speech bubble */}
        <svg
          className="absolute left-[11%] top-[46%] h-8 w-8 fill-current"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M16 2C8.3 2 2 7.9 2 15.2c0 3.1 1.2 5.9 3.2 8.1L4 29l6.5-2.4c1.7.8 3.6 1.2 5.5 1.2 7.7 0 14-5.9 14-13.2S23.7 2 16 2Z" />
        </svg>
        {/* Left edge tilted square */}
        <span className="absolute -left-7 top-[52%] h-14 w-14 rotate-12 rounded-lg bg-current" />
        {/* Bottom left filled circle */}
        <span className="absolute -bottom-10 left-[4%] h-[120px] w-[120px] rounded-full bg-current md:bottom-[-26px] md:left-[4.5%] md:h-[120px] md:w-[120px]" />
        {/* Bottom center abstract shape */}
        <svg
          className="absolute bottom-7 left-[24%] h-12 w-10 rotate-12 fill-current"
          viewBox="0 0 40 48"
          fill="none"
        >
          <path d="M8 2h12c8 0 13 4.5 13 11 0 4.2-2.3 7.5-6.3 9.2C32 23.5 36 27.5 36 34c0 7.5-5.5 12-14 12H8c-3 0-5-2-5-5V7c0-3 2-5 5-5Z" />
        </svg>
        {/* Decorative sparkle */}
        <svg
          className="absolute right-[15%] top-[19%] h-12 w-12 stroke-current"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M24 1v12M24 35v12M1 24h12M35 24h12M7.7 7.7l8.5 8.5M31.8 31.8l8.5 8.5M40.3 7.7l-8.5 8.5M16.2 31.8l-8.5 8.5" />
          <path
            d="M24 18c-2.5 4-7 7.5-7 11.5a7 7 0 0 0 14 0c0-4-4.5-7.5-7-11.5Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
        {/* Geometric cube */}
        <svg
          className="absolute right-[7%] top-[49%] h-[68px] w-[68px] stroke-current"
          viewBox="0 0 64 64"
          fill="none"
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          <path d="M32 2 60 19v26L32 62 4 45V19L32 2Z" />
          <path d="M4 19 32 36 60 19M32 36v26M32 2v34M4 45l28-17 28 17" />
        </svg>
        {/* Bottom right book icon */}
        <svg
          className="absolute bottom-[10%] right-[21%] h-9 w-11 stroke-current"
          viewBox="0 0 44 36"
          fill="none"
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="40" height="30" rx="1" />
          <path d="M22 2v30M10 12v10M34 12v10" strokeLinecap="round" />
          <path d="M10 12c-3 2-3 8 0 10M34 12c3 2 3 8 0 10" />
        </svg>
        {/* Bottom right circle */}
        <span className="absolute -bottom-1 right-[3%] h-8 w-8 rounded-full border-2 border-current md:bottom-1 md:right-[3%] md:h-8 md:w-8" />
      </div>

      <Container className="z-10 flex flex-col items-center text-center">
        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Community avatars */}
          <div
            className="mb-5 flex items-center justify-center -space-x-2"
            aria-label="Members of the Luma community"
          >
            {avatars.map((avatar) => (
              <Image
                key={avatar.id}
                src={avatar.image}
                alt={avatar.alt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-secondary-yellow object-cover"
              />
            ))}
          </div>
          <Typography variant="h2" color="primary" className="mb-3">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="secondary" className="mb-7">
            {description}
          </Typography>

          {/* Actions */}
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              href={actions.primary.href}
              variant="primary"
              fullWidth
              className="sm:w-auto"
            >
              <Typography variant="body1" color="white" fontWeight="bold">
                {actions.primary.label}
              </Typography>
            </Button>
            <Button
              href={actions.secondary.href}
              variant="secondary"
              fullWidth
              className="sm:w-auto"
            >
              <Typography variant="body1" color="primary" fontWeight="bold">
                {actions.secondary.label}
              </Typography>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
