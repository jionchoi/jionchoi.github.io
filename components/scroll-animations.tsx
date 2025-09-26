"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollFadeIn({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef} className={`fade-in-up ${className}`}>
      {children}
    </div>
  )
}

export function ParallaxSection({ children, className = "", speed = 0.5 }: ScrollAnimationProps & { speed?: number }) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * speed
        elementRef.current.style.setProperty("--parallax-offset", `${parallax}px`)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={`parallax ${className}`}>
      {children}
    </div>
  )
}
