export type StudentsTeachersData = {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  action: {
    label: string
    href: string
  }
}

export const studentsTeachers: StudentsTeachersData = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  description:
    "We are a community of students and teachers from all over the world, learning and working together to achieve our goals. Join us and be part of this amazing journey.",
  image: "/images/community-collage.png",
  imageAlt:
    "Collage showing students and teachers learning and working together",
  action: {
    label: "Explore teachers and students",
    href: "#contact"
  }
}
