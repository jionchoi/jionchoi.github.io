import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "jion.choi@example.com",
    description: "Best way to reach me for professional inquiries",
    action: "mailto:jion.choi@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Edmonton, Canada",
    description: "Currently based in Edmonton, Alberta",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/jionchoi",
    description: "Check out my code and projects",
    action: "https://github.com/jionchoi",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/jionchoi",
    description: "Let's connect professionally",
    action: "https://linkedin.com/in/jionchoi",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Let's Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and software development. Feel free to reach out through any of the channels below!
          </p>

          <div className="space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.title} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{method.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                    {method.action && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
                      >
                        <a href={method.action} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Visit
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Looking for Opportunities</h3>
          <p className="text-muted-foreground mb-6">
            I'm currently seeking internship and entry-level positions in software development. If you have an
            opportunity that might be a good fit, I'd love to hear from you!
          </p>
          <Button asChild>
            <a href="mailto:jion.choi@example.com?subject=Job Opportunity">
              <Mail className="w-4 h-4 mr-2" />
              Discuss Opportunities
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
