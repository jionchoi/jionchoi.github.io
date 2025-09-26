import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Building } from "lucide-react"

const currentJob = {
  title: "Web Development Intern",
  company: "BAM Canada",
  location: "Edmonton, Canada",
  dateRange: "Jan 2025 - Apr 2025",
  status: "Current Position",
  description:
    "Developing modern web applications using React and TypeScript. Working on full-stack web development projects, implementing responsive designs and RESTful APIs.",
  technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Git"],
  responsibilities: [
    "Develop responsive web applications using React and TypeScript",
    "Implement RESTful APIs and database integrations",
    "Collaborate with design team to create user-friendly interfaces",
    "Participate in code reviews and agile development processes",
  ],
}

export function ExperienceHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Work Experience</h1>
          <p className="text-lg text-muted-foreground text-balance">
            My professional journey in software development and technology
          </p>
        </div>

        {/* Current Position - Featured */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <Badge className="mb-3 bg-primary text-primary-foreground">Current Position</Badge>
                <CardTitle className="text-2xl sm:text-3xl">{currentJob.title}</CardTitle>
                <p className="text-xl text-muted-foreground mt-2">{currentJob.company}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {currentJob.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {currentJob.dateRange}
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                {currentJob.company}
              </div>
            </div>

            <p className="text-lg leading-relaxed">{currentJob.description}</p>

            <div>
              <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {currentJob.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {currentJob.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
