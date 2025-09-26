import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building } from "lucide-react"

const pastExperiences = [
  {
    id: 1,
    title: "Computer Science Teaching Assistant",
    company: "The King's University",
    location: "Edmonton, Canada",
    dateRange: "Sep 2024 - Dec 2024",
    description:
      "Assisted students with programming concepts and assignments in introductory computer science courses. Conducted lab sessions and provided guidance on Java, Python, and JavaScript programming.",
    technologies: ["Java", "Python", "JavaScript"],
    responsibilities: [
      "Conducted weekly lab sessions for 30+ students",
      "Provided one-on-one tutoring for struggling students",
      "Graded assignments and provided constructive feedback",
      "Assisted professors with course material preparation",
    ],
  },
  {
    id: 2,
    title: "Robotics Programmer",
    company: "Sir Frederick Banting S.S.",
    location: "London, Ontario",
    dateRange: "Oct 2022 – Apr 2023",
    description:
      "Led programming team in developing autonomous robot solutions for FIRST LEGO LEAGUE competition. Developed robotics solutions using Java and Python for competitive robotics challenges.",
    technologies: ["Java", "Python", "LEGO Mindstorms"],
    responsibilities: [
      "Programmed autonomous robot behaviors and navigation",
      "Led team of 5 students in programming challenges",
      "Debugged and optimized robot performance",
      "Collaborated with mechanical team for integrated solutions",
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Previous Experience</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Building my foundation in software development and technology
          </p>
        </div>

        <div className="space-y-8">
          {pastExperiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline line */}
              {index < pastExperiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-border -translate-x-0.5" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-3 h-3 bg-primary rounded-full -translate-x-1.5 border-4 border-background" />

              {/* Content */}
              <div className="ml-16">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <p className="text-lg text-muted-foreground mt-1">{experience.company}</p>
                      </div>
                      <Badge variant="outline">{experience.dateRange}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {experience.company}
                      </div>
                    </div>

                    <p className="leading-relaxed">{experience.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
