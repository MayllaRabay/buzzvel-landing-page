import Link from "next/link"

import { Typography } from "@/components/ui/Typography"

import { Container } from "@/components/ui/Container"
import { footerContent } from "./footerData"

export const Footer = () => {
  const { logo, description, columns, copyright } = footerContent

  return (
    <footer className="bg-background-darkblue pt-14 pb-8 md:pt-20 md:pb-10">
      <Container>
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <div className="col-span-2 flex flex-col items-start md:col-span-1">
            <Link
              href="/"
              aria-label="Luma - Home"
              className="mb-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Typography variant="h5" color="white">
                {logo}
              </Typography>
            </Link>
            <Typography
              variant="body1"
              color="whiteTertiary"
              className="w-full sm:max-w-[200px]"
            >
              {description}
            </Typography>
          </div>

          {/* Navigation columns */}
          {columns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col items-start gap-4"
            >
              <Typography variant="overline" color="whiteSecondary">
                {column.title}
              </Typography>

              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      <Typography
                        variant="body1"
                        color="whiteTertiary"
                        className="transition-colors hover:text-text-white-primary"
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex w-full justify-center mt-12 border-t border-white/20 pt-5 sm:justify-start">
          <Typography variant="copyright" color="whiteSecondary">
            {copyright}
          </Typography>
        </div>
      </Container>
    </footer>
  )
}
