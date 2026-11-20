import { createElement, type HTMLAttributes } from "react"

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h5"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "overline"
  | "quote"
  | "copyright"

type TypographyColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "blue"
  | "white"
  | "whiteSecondary"
  | "whiteTertiary"

type TypographyWeight = "regular" | "medium" | "semibold" | "bold" | "extrabold"

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "blockquote"

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant: TypographyVariant
  color?: TypographyColor
  fontWeight?: TypographyWeight
  as?: TypographyElement
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "font-heading text-[40px] leading-[44px] tracking-[-1px] md:text-[64px] md:leading-[70px] md:tracking-[-1.6px]",
  h2: "font-heading text-[36px] leading-[40px] tracking-[-0.9px] md:text-[56px] md:leading-[64px] md:tracking-[-1.4px]",
  h3: "font-heading text-[32px] leading-[36px] tracking-[-0.8px] md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]",
  h5: "font-heading text-[20px] leading-[28px] md:leading-[32px]",
  subtitle1:
    "font-body text-[16px] leading-[26px] md:text-[18px] md:leading-[28px]",
  subtitle2:
    "font-body text-[14px] leading-[24px] md:text-[16px] md:leading-[28px]",
  body1: "font-body text-[14px] leading-[24px]",
  overline: "font-body text-[12px] leading-[16px] tracking-[1.44px] uppercase",
  quote:
    "font-heading text-[20px] leading-[32px] md:text-[30px] md:leading-[44px] md:tracking-[-0.75px]",
  copyright: "font-body text-[13px] leading-[19.5px]"
}

const colorStyles: Record<TypographyColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  blue: "text-primary-blue",
  white: "text-text-white-primary",
  whiteSecondary: "text-text-white-secondary",
  whiteTertiary: "text-text-white-tertiary"
}

const weightStyles: Record<TypographyWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold"
}

const defaultFontWeights: Record<TypographyVariant, TypographyWeight> = {
  h1: "extrabold",
  h2: "extrabold",
  h3: "extrabold",
  h5: "bold",
  subtitle1: "regular",
  subtitle2: "regular",
  body1: "regular",
  overline: "semibold",
  quote: "semibold",
  copyright: "regular"
}

const defaultElements: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h5: "h5",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  overline: "span",
  quote: "blockquote",
  copyright: "p"
}

export const Typography = ({
  variant,
  color,
  fontWeight,
  as,
  className = "",
  children,
  ...props
}: TypographyProps) => {
  const element = as ?? defaultElements[variant]

  const styles = [
    variantStyles[variant],
    color ? colorStyles[color] : "",
    weightStyles[fontWeight ?? defaultFontWeights[variant]],
    className
  ]
    .filter(Boolean)
    .join(" ")

  return createElement(
    element,
    {
      className: styles,
      ...props
    },
    children
  )
}
