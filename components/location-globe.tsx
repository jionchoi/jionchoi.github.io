"use client"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Code, Award, Briefcase } from "lucide-react"

// Mock data for experiences, projects, and awards
const locationData = [
  // Work Experiences
  {
    id: 1,
    type: "experience",
    title: "Robotics Programmer",
    organization: "Sir Frederick Banting S.S.",
    location: "London, Ontario",
    coordinates: [-81.2497, 42.9849],
    dateRange: "Oct 2022 - Apr 2023",
    languages: ["Java", "Python"],
    description: "Developed robotics solutions for FIRST LEGO LEAGUE competition",
    details:
      "Led programming team in developing autonomous robot solutions using Java and Python for competitive robotics challenges.",
  },
  {
    id: 2,
    type: "experience",
    title: "Computer Science Teaching Assistant",
    organization: "The King's University",
    location: "Edmonton, Canada",
    coordinates: [-113.4909, 53.5461],
    dateRange: "Sep 2024 - Dec 2024",
    languages: ["Java", "Python", "JavaScript"],
    description: "Assisted students with programming concepts and assignments",
    details:
      "Provided guidance to students in introductory programming courses, conducted lab sessions, and graded assignments.",
  },
  {
    id: 3,
    type: "experience",
    title: "Web Development Intern",
    organization: "BAM Canada",
    location: "Edmonton, Canada",
    coordinates: [-113.4909, 53.5461],
    dateRange: "Jan 2025 - Apr 2025",
    languages: ["TypeScript", "React", "Node.js"],
    description: "Developing modern web applications using React and TypeScript",
    details: "Working on full-stack web development projects, implementing responsive designs and RESTful APIs.",
  },
  // Projects
  {
    id: 4,
    type: "project",
    title: "Minesweeper Game",
    organization: "The King's University",
    location: "Edmonton, Canada",
    coordinates: [-113.4909, 53.5461],
    dateRange: "Fall 2023",
    languages: ["Java", "Swing"],
    description: "Classic Minesweeper game built with Java Swing",
    details: "Implemented the classic Minesweeper game with a graphical user interface using Java Swing framework.",
  },
  {
    id: 5,
    type: "project",
    title: "Emo Neuro",
    organization: "University of Alberta",
    location: "Edmonton, Canada",
    coordinates: [-113.5207, 53.5232],
    dateRange: "Summer 2024",
    languages: ["Python", "TensorFlow"],
    description: "Emotion recognition system using neural networks",
    details: "Developed a machine learning model for emotion recognition using Python and TensorFlow.",
  },
  {
    id: 6,
    type: "project",
    title: "Pick Up App",
    organization: "Personal Project",
    location: "Edmonton, Canada",
    coordinates: [-113.4909, 53.5461],
    dateRange: "2024",
    languages: ["React Native", "JavaScript"],
    description: "Mobile app for organizing pickup games",
    details: "Created a React Native mobile application for organizing and joining local pickup sports games.",
  },
  // Awards
  {
    id: 7,
    type: "award",
    title: "Gold Medal - FIRST LEGO LEAGUE",
    organization: "FIRST Robotics",
    location: "London, Ontario",
    coordinates: [-81.2497, 42.9849],
    dateRange: "2023",
    languages: ["Java", "Python"],
    description: "First place in regional FIRST LEGO LEAGUE competition",
    details: "Led team to victory in regional robotics competition with innovative programming solutions.",
  },
  {
    id: 8,
    type: "award",
    title: "District Champion - FIRST Robotics",
    organization: "Western University",
    location: "London, Ontario",
    coordinates: [-81.2497, 42.9849],
    dateRange: "2023",
    languages: ["Java", "C++"],
    description: "District championship in FIRST Robotics Competition",
    details: "Achieved district championship with advanced robot programming and autonomous systems.",
  },
  {
    id: 9,
    type: "award",
    title: "Top 3 & Innovation Excellence - Leder Cup",
    organization: "The King's University",
    location: "Edmonton, Canada",
    coordinates: [-113.4909, 53.5461],
    dateRange: "2024",
    languages: ["JavaScript", "React"],
    description: "Top 3 finish and Innovation Excellence Award in case competition",
    details:
      "Developed innovative business solution and won Innovation Excellence Award in university case competition.",
  },
  {
    id: 10,
    type: "award",
    title: "Top 5 - NatIgnite Hackathon",
    organization: "Edmonton Unlimited",
    location: "Edmonton, Canada",
    coordinates: [-113.4909, 53.5461],
    dateRange: "2024",
    languages: ["Python", "React", "Node.js"],
    description: "Top 5 finish in Edmonton's premier hackathon",
    details: "Placed in top 5 at Edmonton's largest hackathon with innovative tech solution.",
  },
]

const filterOptions = [
  { key: "all", label: "All", icon: MapPin },
  { key: "experience", label: "Work Experience", icon: Briefcase },
  { key: "project", label: "Projects", icon: Code },
  { key: "award", label: "Awards", icon: Award },
]

const typeColors = {
  experience: "bg-blue-500",
  project: "bg-green-500",
  award: "bg-yellow-500",
}

function Globe({ selectedFilter, onLocationClick }: { selectedFilter: string; onLocationClick: (item: any) => void }) {
  const filteredData =
    selectedFilter === "all" ? locationData : locationData.filter((item) => item.type === selectedFilter)

  return (
    <group>
      {/* Simple sphere representing Earth */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#4A90E2" wireframe />
      </mesh>

      {/* Location markers */}
      {filteredData.map((item) => {
        const [lng, lat] = item.coordinates
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = (lng + 180) * (Math.PI / 180)
        const radius = 2.1

        const x = -(radius * Math.sin(phi) * Math.cos(theta))
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)

        return (
          <group key={item.id} position={[x, y, z]}>
            <mesh onClick={() => onLocationClick(item)}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial
                color={item.type === "experience" ? "#3B82F6" : item.type === "project" ? "#10B981" : "#F59E0B"}
              />
            </mesh>
            <Html distanceFactor={10}>
              <div className="bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap pointer-events-none">
                {item.title}
              </div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

export function LocationGlobe() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const handleLocationClick = (item: any) => {
    setSelectedItem(item)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">My Journey Around the World</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Explore my experiences, projects, and achievements by location
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterOptions.map((option) => {
            const Icon = option.icon
            return (
              <Button
                key={option.key}
                variant={selectedFilter === option.key ? "default" : "outline"}
                onClick={() => setSelectedFilter(option.key)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {option.label}
              </Button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 3D Globe */}
          <div className="h-[500px] bg-card rounded-lg border">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <Suspense fallback={null}>
                <Environment preset="sunset" />
                <Globe selectedFilter={selectedFilter} onLocationClick={handleLocationClick} />
                <OrbitControls enablePan={false} enableZoom={true} minDistance={3} maxDistance={8} />
              </Suspense>
            </Canvas>
          </div>

          {/* Selected Item Details */}
          <div className="space-y-4">
            {selectedItem ? (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{selectedItem.title}</CardTitle>
                      <p className="text-muted-foreground">{selectedItem.organization}</p>
                    </div>
                    <Badge className={`${typeColors[selectedItem.type as keyof typeof typeColors]} text-white`}>
                      {selectedItem.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {selectedItem.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {selectedItem.dateRange}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.languages.map((lang: string) => (
                      <Badge key={lang} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm">{selectedItem.description}</p>
                  <p className="text-sm text-muted-foreground">{selectedItem.details}</p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Click on a location</h3>
                  <p className="text-muted-foreground">
                    Click on any marker on the globe to see detailed information about my experiences, projects, and
                    awards.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
