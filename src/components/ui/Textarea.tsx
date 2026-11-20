import { useId, type TextareaHTMLAttributes } from "react"

import { Typography } from "./Typography"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

export const Textarea = ({
  id,
  label,
  error,
  className = "",
  ...props
}: TextareaProps) => {
  const generatedId = useId()
  const textareaId = id ?? props.name ?? generatedId

  const describedBy =
    [props["aria-describedby"], error ? `${textareaId}-error` : undefined]
      .filter(Boolean)
      .join(" ") || undefined

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={textareaId}>
        <Typography
          variant="body1"
          as="span"
          fontWeight="semibold"
          color="primary"
        >
          {label}
        </Typography>
      </label>

      <textarea
        {...props}
        id={textareaId}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={describedBy}
        className={[
          "min-h-32 w-full resize-y rounded-md border border-transparent bg-background-light-yellow p-4",
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
          id={`${textareaId}-error`}
        >
          {error}
        </Typography>
      )}
    </div>
  )
}
