import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/jionchoi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jionchoi",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:jion.choi@example.com",
    icon: Mail,
  },
]

const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-xl text-primary mb-4 block">
              Jion Choi
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software Development Student at The King's University, passionate about creating innovative solutions and
              building the future through code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Jion Choi. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
