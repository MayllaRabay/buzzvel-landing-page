import { useId, type InputHTMLAttributes } from "react"

import { Typography } from "./Typography"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Input = ({
  id,
  label,
  error,
  className = "",
  ...props
}: InputProps) => {
  const generatedId = useId()
  const inputId = id ?? props.name ?? generatedId

  const describedBy =
    [props["aria-describedby"], error ? `${inputId}-error` : undefined]
      .filter(Boolean)
      .join(" ") || undefined

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId}>
        <Typography
          variant="body1"
          as="span"
          fontWeight="semibold"
          color="primary"
        >
          {label}
        </Typography>
      </label>

      <input
        {...props}
        id={inputId}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={describedBy}
        className={[
          "h-12 w-full rounded-md border border-transparent bg-background-light-yellow px-4",
          "font-body text-sm text-text-primary placeholder:text-text-tertiary",
          "transition-colors outline-none",
          "focus-visible:border-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue/20",
          "disabled:cursor-not-allowed disabled:opacity-60",
          error ? "border-red-500" : "",
          className
        ]
          .filter(Boolean)
          .join(" ")}
      />

      {error && (
        <Typography
          variant="copyright"
          as="span"
          className="text-red-600"
          id={`${inputId}-error`}
        >
          {error}
        </Typography>
      )}
    </div>
  )
}
