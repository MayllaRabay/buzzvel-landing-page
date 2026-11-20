"use client"

import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/Button"
import { Typography } from "@/components/ui/Typography"

import { navigationItems } from "./navigation"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen((previous) => !previous)
  }

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
        className="flex size-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-primary-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-full z-50 mt-2 w-[calc(100vw-40px)] max-w-sm rounded-xl border border-line-1 bg-white p-5 shadow-lg"
        >
          <ul className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-background-light-yellow"
                >
                  <Typography
                    variant="body1"
                    as="span"
                    className="text-text-primary"
                  >
                    {item.label}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 border-t border-line-1 pt-4">
            <Link
              href="#login"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-center"
            >
              <Typography
                variant="body1"
                as="span"
                className="text-text-primary"
              >
                Log in
              </Typography>
            </Link>

            <Button href="#courses" fullWidth>
              Start learning
            </Button>
          </div>
        </nav>
      )}
    </div>
  )
}
