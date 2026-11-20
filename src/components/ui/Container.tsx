import type { HTMLAttributes } from "react"

type ContainerWidth = "default" | "narrow" | "wide"

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxWidth?: ContainerWidth
}

const widthStyles: Record<ContainerWidth, string> = {
  default: "max-w-[1240px]",
  narrow: "max-w-3xl",
  wide: "max-w-7xl"
}

export const Container = ({
  maxWidth = "default",
  className = "",
  children,
  ...props
}: ContainerProps) => {
  const styles = [
    "mx-auto w-full px-6 sm:px-8 lg:px-10",
    widthStyles[maxWidth],
    className
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  )
}
