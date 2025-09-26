import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Smile, Code, Coffee } from "lucide-react"

const funFacts = [
  {
    title: "Cat Enthusiast",
    description: "I absolutely love cats and all the hilarious memes about them. They never fail to brighten my day!",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    title: "Meme Connoisseur",
    description:
      "I have an extensive collection of cat memes and I'm always ready to share the latest funny ones with friends.",
    icon: Smile,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Code & Music",
    description:
      "I often code while listening to music. There's something about the rhythm that helps me think through complex problems.",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Coffee Powered",
    description:
      "Like many developers, I run on coffee. My favorite coding sessions happen with a warm cup of coffee nearby.",
    icon: Coffee,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
]

export function FunFacts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Fun Facts About Me</h2>
          <p className="text-lg text-muted-foreground text-balance">The quirky side of a software developer</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {funFacts.map((fact) => {
            const Icon = fact.icon
            return (
              <Card
                key={fact.title}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full ${fact.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${fact.color}`} />
                  </div>
                  <CardTitle className="text-lg">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Cat Meme Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🐱</div>
              <h3 className="text-2xl font-bold mb-4">Cat Meme of the Day</h3>
              <p className="text-muted-foreground mb-6">
                "When you finally fix that bug that's been bothering you for hours... but then you realize you broke
                something else."
              </p>
              <div className="text-4xl">😸</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
