import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { howItWorksSteps } from "./howItWorksData"

type StepIconProps = {
  variant: "focus" | "experience" | "practice"
}

const StepIcon = ({ variant }: StepIconProps) => {
  const iconStyles = {
    focus: {
      container:
        "relative rounded-full bg-primary-blue-light w-[56px] h-[56px]",
      shape:
        "absolute top-2 left-2 h-[24px] w-[24px] rounded-[6px] bg-primary-blue"
    },
    experience: {
      container:
        "relative rotate-12 rounded-md bg-background-orange w-[56px] h-[56px]",
      shape:
        "absolute bottom-2 right-1 h-[28px] w-[28px] rounded-full bg-primary-orange"
    },
    practice: {
      container: "relative rounded-md bg-background-yellow w-[56px] h-[56px]",
      shape:
        "absolute bottom-2 left-2 h-[20px] w-[20px] rounded-full bg-primary-yellow"
    }
  }
  const styles = iconStyles[variant]
  return (
    <div
      aria-hidden="true"
      className={`flex h-10 w-10 items-center justify-center ${styles.container}`}
    >
      <span className={styles.shape} />
    </div>
  )
}

const HowItWorksStepConnector = () => {
  return (
    <span className="absolute w-[1px] h-[35%] border-line-1 border-l left-7 -bottom-20 sm:w-full sm:h-[1px] sm:border-t sm:top-7 sm:left-10" />
  )
}

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-background-light-yellow py-14 md:pt-22 pb-26"
    >
      <Container>
        {/* Section heading */}
        <div className="flex flex-col gap-3 mb-12 text-center md:mb-22">
          <Typography variant="overline" color="blue" className="mb-2">
            How Luma works
          </Typography>
          <Typography variant="h3">Less browsing. More learning.</Typography>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-3 sm:gap-10">
          {howItWorksSteps.map((step, index) => (
            <article
              key={step.id}
              className="relative flex flex-col gap-2 items-start"
            >
              {index < howItWorksSteps.length - 1 && (
                <HowItWorksStepConnector />
              )}
              <div className="mb-4">
                <StepIcon variant={step.icon} />
              </div>
              <Typography variant="overline" color="tertiary" className="mb-2">
                Step {step.id}
              </Typography>
              <Typography variant="h5" color="primary" className="mb-1">
                {step.title}
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                {step.description}
              </Typography>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
