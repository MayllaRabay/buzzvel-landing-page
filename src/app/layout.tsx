import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Luma | Build skills that move you forward",
  description:
    "Practical courses designed to help you build skills for real life."
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
