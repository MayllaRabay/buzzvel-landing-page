import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { CategoryCard } from "./CategoryCard"
import { categories } from "./categories"

export const CourseCategories = () => {
  return (
    <section id="courses" className="bg-background-white py-14 md:py-22">
      <Container>
        <div className="flex flex-col gap-3 mb-8 max-w-xl">
          <Typography variant="overline" color="blue" className="mb-3">
            Find your next skill
          </Typography>
          <Typography variant="h3" className="mb-2">
            Learn something worth knowing.
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Short, practical courses designed around skills you can put to work
            immediately.
          </Typography>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  )
}
