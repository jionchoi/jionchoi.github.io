"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Overview", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-out",
        scrolled ? "glass-effect border-b border-accent/20 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-2xl gradient-text hover:scale-105 transition-transform duration-300">
            Jion Choi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-500 relative group",
                  "after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-accent after:to-accent/50",
                  "after:transition-all after:duration-500 after:ease-out",
                  "hover:after:w-full hover:scale-105 hover:text-white",
                  pathname === item.href ? "text-white after:w-full scale-105" : "text-white/90",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 glass-effect border-t border-accent/20 animate-in slide-in-from-top-4 duration-500">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-all duration-300 hover:text-white hover:bg-accent/20 rounded-lg",
                    pathname === item.href ? "text-white bg-accent/20 border-l-2 border-accent" : "text-white/90",
                  )}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
