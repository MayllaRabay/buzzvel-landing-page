export type HowItWorksStep = {
  id: string
  title: string
  description: string
  icon: "focus" | "experience" | "practice"
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus"
  },
  {
    id: "02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    icon: "experience"
  },
  {
    id: "03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice"
  }
]
