import { Typography } from "@/components/ui/Typography"
import type { ContactInfoItem } from "./getInTouchData"

type ContactInfoProps = {
  items: ContactInfoItem[]
}

const ContactIcon = ({ type }: { type: ContactInfoItem["icon"] }) => {
  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-blue-light text-primary-blue"
    >
      {type === "email" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Speech bubble */}
          <path d="M12 3.5c-4.7 0-8.5 3.4-8.5 7.7 0 2.1.9 4 2.4 5.4L5 20.5l4.4-2.1c.8.3 1.7.5 2.6.5 4.7 0 8.5-3.4 8.5-7.7S16.7 3.5 12 3.5Z" />

          {/* Three dots */}
          <circle
            cx="8.5"
            cy="11.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="12" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
          <circle
            cx="15.5"
            cy="11.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )}
    </span>
  )
}

export const ContactInfo = ({ items }: ContactInfoProps) => {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 rounded-lg bg-background-light-yellow p-4"
        >
          <ContactIcon type={item.icon} />
          <div className="flex min-w-0 flex-col gap-1">
            <Typography variant="body1" color="primary">
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color={item.id === "email" ? "blue" : "tertiary"}
            >
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  )
}
