import { Typography } from "@/components/ui/Typography"
import Link from "next/link"
import type { Category } from "./categories"

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <article className="flex h-[265px] w-[265px] flex-col rounded-[16px] border border-line-1 p-5">
      <span className="mb-6 flex h-6 w-8 items-center justify-center rounded-[6px] bg-primary-blue-light">
        <Typography variant="overline" color="blue" className="text-[10px]">
          {category.id}
        </Typography>
      </span>
      <Typography variant="h5" className="mb-3">
        {category.title}
      </Typography>
      <Typography variant="body1" color="tertiary" className="mb-5">
        {category.description}
      </Typography>
      <Link
        href="#contact"
        className="mt-auto inline-flex w-fit items-center gap-2  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-blue"
      >
        <Typography
          variant="body1"
          color="primary"
          fontWeight="bold"
          className="hover:text-primary-blue"
        >
          Explore →
        </Typography>
      </Link>
    </article>
  )
}
