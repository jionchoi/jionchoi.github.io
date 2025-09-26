import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { LocationGlobe } from "@/components/location-globe"

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <TechStack />
      <LocationGlobe />
    </div>
  )
}
