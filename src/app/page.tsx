import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { CourseCategories } from "@/components/sections/CourseCategories"
import { FeaturedCourse } from "@/components/sections/FeaturedCourse"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { GetInTouch } from "@/components/sections/GetInTouch"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { StudentsTeachers } from "@/components/sections/StudentsTeachers"
import { TestimonialStatistics } from "@/components/sections/TestimonialStatistics"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CourseCategories />
        <FeaturedCourse />
        <HowItWorks />
        <TestimonialStatistics />
        <StudentsTeachers />
        <GetInTouch />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default Home
