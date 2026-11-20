import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "accent"
type ButtonSize = "sm" | "md" | "lg"

type CommonButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}

type ButtonLinkProps = CommonButtonProps & {
  href: string
  target?: string
  rel?: string
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonElementProps = CommonButtonProps & {
  href?: never
  target?: never
  rel?: never
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  disabled?: boolean
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
}

type ButtonProps = ButtonLinkProps | ButtonElementProps

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-blue text-white hover:brightness-95",
  secondary:
    "border border-line-1 bg-white text-text-primary hover:bg-background-light-yellow",
  accent: "bg-secondary-yellow text-text-primary hover:brightness-95"
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-6 py-4 text-sm",
  lg: "px-7 py-3.5 text-sm"
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = ""
  } = props

  const styles = [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg font-body font-semibold",
    "transition-[filter,background-color,color,border-color] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-primary-blue",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className
  ]
    .filter(Boolean)
    .join(" ")

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={
          props.rel ??
          (props.target === "_blank" ? "noopener noreferrer" : undefined)
        }
        className={styles}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={styles}
    >
      {children}
    </button>
  )
}
