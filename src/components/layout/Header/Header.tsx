import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { Typography } from "@/components/ui/Typography"

import { Container } from "@/components/ui/Container"
import { MobileMenu } from "./MobileMenu"
import { navigationItems } from "./navigation"

export const Header = () => {
  return (
    <header className="relative z-30 bg-background-light-yellow border-b border-line-1 sticky top-0">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="#home" aria-label="Luma home" className="shrink-0">
          <Typography variant="h5" as="span" className="text-text-primary">
            luma.
          </Typography>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary-blue"
            >
              <Typography
                variant="body1"
                as="span"
                className="text-text-secondary"
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="#login"
            className="transition-colors hover:text-primary-blue"
          >
            <Typography
              variant="body1"
              as="span"
              className="text-text-secondary"
            >
              Log in
            </Typography>
          </Link>
          <Button href="#courses" size="md" className="px-5 py-[10px]">
            Start learning
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  )
}
