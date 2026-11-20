export type FooterLink = {
  label: string
  href: string
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export const footerContent = {
  logo: "luma.",
  description: "Practical learning for curious people.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: "#" },
        { label: "Categories", href: "#" },
        { label: "Instructors", href: "#" },
        { label: "For Teams", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Journal", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" }
      ]
    }
  ] satisfies FooterColumn[],
  copyright: "© 2026 Luma Learning"
}
