import { AboutHero } from "@/components/about-hero"
import { PersonalInterests } from "@/components/personal-interests"
import { FunFacts } from "@/components/fun-facts"

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <AboutHero />
      <PersonalInterests />
      <FunFacts />
    </div>
  )
}
