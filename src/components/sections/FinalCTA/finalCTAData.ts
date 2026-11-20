export type FinalCTAContent = {
  title: string
  description: string
  avatars: {
    id: string
    image: string
    alt: string
  }[]
  actions: {
    primary: {
      label: string
      href: string
    }
    secondary: {
      label: string
      href: string
    }
  }
}

export const finalCTA: FinalCTAContent = {
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  avatars: [
    {
      id: "avatar-1",
      image: "/images/avatar-1.jpg",
      alt: "Luma community member"
    },
    {
      id: "avatar-2",
      image: "/images/avatar-2.jpg",
      alt: "Luma community member"
    },
    {
      id: "avatar-3",
      image: "/images/avatar-3.jpg",
      alt: "Luma community member"
    },
    {
      id: "avatar-4",
      image: "/images/avatar-4.jpg",
      alt: "Luma community member"
    }
  ],
  actions: {
    primary: {
      label: "Explore all courses",
      href: "#courses"
    },
    secondary: {
      label: "Join Luma",
      href: "#contact"
    }
  }
}
