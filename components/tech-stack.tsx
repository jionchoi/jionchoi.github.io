import { Card, CardContent } from "@/components/ui/card"

const languages = [
  {
    name: "TypeScript",
    logo: "/typescript-logo-blue.jpg",
    category: "Language",
  },
  {
    name: "JavaScript",
    logo: "/javascript-logo-yellow.jpg",
    category: "Language",
  },
  {
    name: "Java",
    logo: "/placeholder-epet9.png",
    category: "Language",
  },
  {
    name: "Python",
    logo: "/python-logo-blue-yellow.jpg",
    category: "Language",
  },
]

const frameworks = [
  {
    name: "React",
    logo: "/react-logo-blue.jpg",
    category: "Framework",
  },
  {
    name: "Vite",
    logo: "/vite-logo-purple-yellow.jpg",
    category: "Tool",
  },
  {
    name: "React Native",
    logo: "/placeholder-qu23s.png",
    category: "Framework",
  },
  {
    name: "Spring Boot",
    logo: "/placeholder-azvov.png",
    category: "Framework",
  },
  {
    name: "PostgreSQL",
    logo: "/placeholder-qmwe3.png",
    category: "Database",
  },
  {
    name: "MySQL",
    logo: "/placeholder-r657x.png",
    category: "Database",
  },
  {
    name: "Git",
    logo: "/placeholder-3jurq.png",
    category: "Tool",
  },
]

export function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Languages & Technologies</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Here are the programming languages, frameworks, and tools I'm proficient in
          </p>
        </div>

        {/* Languages Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((tech) => (
              <Card key={tech.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      className="w-15 h-15 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Frameworks & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {frameworks.map((tech) => (
              <Card key={tech.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      className="w-15 h-15 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
