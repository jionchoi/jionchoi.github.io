import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Star, MapPin, Calendar } from "lucide-react"

const awards = [
  {
    id: 1,
    title: "Gold Medal - FIRST LEGO LEAGUE",
    organization: "FIRST Robotics",
    location: "London, Ontario",
    dateRange: "2023",
    type: "Competition",
    level: "Regional",
    description: "First place in regional FIRST LEGO LEAGUE competition with innovative programming solutions",
    details:
      "Led programming team to victory in regional robotics competition. Developed autonomous robot solutions using Java and Python, implementing advanced navigation algorithms and sensor integration. Team achieved highest scores in robot performance and programming categories.",
    technologies: ["Java", "Python", "LEGO Mindstorms"],
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    id: 2,
    title: "District Champion - FIRST Robotics Competition",
    organization: "Western University",
    location: "London, Ontario",
    dateRange: "2023",
    type: "Competition",
    level: "District",
    description: "District championship in FIRST Robotics Competition with advanced robot programming",
    details:
      "Achieved district championship with advanced robot programming and autonomous systems. Implemented complex control algorithms for robot manipulation and navigation. Collaborated with mechanical and electrical teams to create winning robot design.",
    technologies: ["Java", "C++", "Robot Programming"],
    icon: Medal,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Top 3 & Innovation Excellence Award - Leder Cup",
    organization: "The King's University",
    location: "Edmonton, Canada",
    dateRange: "2024",
    type: "Case Competition",
    level: "University",
    description: "Top 3 finish and Innovation Excellence Award in business case competition",
    details:
      "Developed innovative business solution addressing real-world challenges in technology sector. Presented comprehensive analysis and implementation strategy to panel of industry judges. Recognized for creative approach and technical feasibility of proposed solution.",
    technologies: ["JavaScript", "React", "Business Analysis"],
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    title: "Top 5 - NatIgnite Hackathon",
    organization: "Edmonton Unlimited",
    location: "Edmonton, Canada",
    dateRange: "2024",
    type: "Hackathon",
    level: "Regional",
    description: "Top 5 finish in Edmonton's premier hackathon with innovative tech solution",
    details:
      "Placed in top 5 at Edmonton's largest hackathon event with over 200 participants. Developed full-stack web application in 48 hours addressing urban sustainability challenges. Impressed judges with technical implementation and potential for real-world impact.",
    technologies: ["Python", "React", "Node.js", "APIs"],
    icon: Star,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function AwardsShowcase() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Awards & Recognition</h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Recognition for excellence in programming, innovation, and competitive achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award) => {
            const Icon = award.icon
            return (
              <Card key={award.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${award.bgColor}`}>
                      <Icon className={`w-6 h-6 ${award.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <CardTitle className="text-lg leading-tight">{award.title}</CardTitle>
                        <Badge variant="outline">{award.dateRange}</Badge>
                      </div>
                      <p className="text-muted-foreground">{award.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {award.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {award.dateRange}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="secondary">{award.type}</Badge>
                    <Badge variant="outline">{award.level}</Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-sm">Details:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{award.details}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {award.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
