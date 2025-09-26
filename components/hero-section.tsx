"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation, useParallax } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { ref: heroRef, isVisible } = useScrollAnimation()
  const parallaxOffset = useParallax()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "radial-gradient(circle at center, #000000 0%, #1E1E2F 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl transition-all duration-1000"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${10 + mousePosition.x * 0.1}%`,
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl transition-all duration-1000"
          style={{
            bottom: `${15 + mousePosition.y * 0.05}%`,
            right: `${15 + mousePosition.x * 0.05}%`,
          }}
        ></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className={`mb-12 transition-all duration-1200 delay-200 ${isVisible ? "scale-in visible" : "scale-in"}`}>
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-accent/30 flex items-center justify-center text-6xl font-black text-foreground border-4 border-accent/30 shadow-2xl glow-effect hover:scale-110 transition-transform duration-500">
            JC
          </div>
        </div>

        <div className={`transition-all duration-1200 delay-400 ${isVisible ? "fade-in-up visible" : "fade-in-up"}`}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-balance mb-8 leading-tight">
            Hi, I'm <span className="gradient-text animate-pulse">Jion Choi</span>
          </h1>
        </div>

        <div className={`transition-all duration-1200 delay-600 ${isVisible ? "fade-in-up visible" : "fade-in-up"}`}>
          <p className="text-xl sm:text-2xl text-foreground/80 text-balance mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            A passionate software development student at The King's University in Edmonton, Canada, dedicated to
            building innovative solutions and pursuing excellence in technology.
          </p>
        </div>

        <div className={`transition-all duration-1200 delay-800 ${isVisible ? "fade-in-up visible" : "fade-in-up"}`}>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-12 py-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold shadow-2xl hover:shadow-accent/25 transition-all duration-500 hover:scale-110 glow-effect"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-12 py-6 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-accent/25"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1200 ${isVisible ? "fade-in-up visible" : "fade-in-up"}`}
      >
        <div className="animate-bounce">
          <div className="w-8 h-14 border-2 border-accent rounded-full flex justify-center glow-effect">
            <div className="w-1.5 h-4 bg-accent rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
