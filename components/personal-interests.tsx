import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Guitar, Piano } from "lucide-react"

const interests = [
  {
    title: "Piano",
    description:
      "I've been playing piano for several years and love exploring different genres from classical to contemporary pieces.",
    icon: Piano,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Acoustic Guitar",
    description:
      "There's something magical about the warm sound of an acoustic guitar. I enjoy fingerpicking and strumming along to my favorite songs.",
    icon: Guitar,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Bass Guitar",
    description: "The foundation of any good song! I love the deep, rhythmic grooves that bass guitar brings to music.",
    icon: Music,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function PersonalInterests() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Musical Interests</h2>
          <p className="text-lg text-muted-foreground text-balance">When I'm not coding, you'll find me making music</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest) => {
            const Icon = interest.icon
            return (
              <Card
                key={interest.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${interest.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${interest.color}`} />
                  </div>
                  <CardTitle className="text-xl">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{interest.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
