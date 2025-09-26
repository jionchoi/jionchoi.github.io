import { ExperienceHero } from "@/components/experience-hero"
import { ExperienceTimeline } from "@/components/experience-timeline"

export default function ExperiencePage() {
  return (
    <div className="space-y-20">
      <ExperienceHero />
      <ExperienceTimeline />
    </div>
  )
}
