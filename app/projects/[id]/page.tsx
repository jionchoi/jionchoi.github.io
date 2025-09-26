import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "Minesweeper Game",
    organization: "The King's University",
    location: "Edmonton, Canada",
    dateRange: "Fall 2023",
    technologies: ["Java", "Swing", "OOP"],
    description: "Classic Minesweeper game built with Java Swing framework featuring intuitive GUI and game logic.",
    longDescription:
      "Implemented the classic Minesweeper game with a complete graphical user interface using Java Swing framework. Features include customizable grid sizes, mine placement algorithms, recursive cell revealing, and score tracking. Applied object-oriented programming principles for clean, maintainable code architecture.",
    features: [
      "Customizable grid sizes (Beginner, Intermediate, Expert)",
      "Intelligent mine placement algorithm",
      "Recursive cell revealing with flood-fill algorithm",
      "Timer and mine counter functionality",
      "Right-click flagging system",
      "Game state management (Win/Loss detection)",
    ],
    challenges: [
      "Implementing efficient flood-fill algorithm for cell revealing",
      "Managing complex game state transitions",
      "Creating responsive GUI with Swing components",
    ],
    image: "/minesweeper-game-java-swing-interface.jpg",
  },
  {
    id: 2,
    title: "Emo Neuro",
    organization: "University of Alberta",
    location: "Edmonton, Canada",
    dateRange: "Summer 2024",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Computer Vision"],
    description: "Emotion recognition system using neural networks to analyze facial expressions and detect emotions.",
    longDescription:
      "Developed a machine learning model for real-time emotion recognition using Python and TensorFlow. The system processes facial images to classify emotions with high accuracy, utilizing convolutional neural networks and computer vision techniques.",
    features: [
      "Real-time facial emotion detection",
      "Support for 7 basic emotions (Happy, Sad, Angry, Fear, Surprise, Disgust, Neutral)",
      "Convolutional Neural Network architecture",
      "Data preprocessing and augmentation pipeline",
      "Model evaluation with accuracy metrics",
      "Web interface for live emotion detection",
    ],
    challenges: [
      "Handling diverse facial expressions and lighting conditions",
      "Optimizing model performance for real-time processing",
      "Data collection and preprocessing for training",
    ],
    image: "/placeholder-ke4az.png",
  },
  {
    id: 3,
    title: "Pick Up App",
    organization: "Personal Project",
    location: "Edmonton, Canada",
    dateRange: "2024",
    technologies: ["React Native", "JavaScript", "Firebase", "Mobile Development"],
    description: "Mobile application for organizing and joining local pickup sports games and activities.",
    longDescription:
      "Created a React Native mobile application that connects sports enthusiasts for organizing pickup games. Features include location-based game discovery, user profiles, real-time messaging, and event management.",
    features: [
      "Location-based game discovery using GPS",
      "User authentication and profile management",
      "Real-time chat for game coordination",
      "Event creation and management system",
      "Push notifications for game updates",
      "Rating and review system for players",
    ],
    challenges: [
      "Implementing real-time location tracking",
      "Managing complex state across multiple screens",
      "Optimizing performance for mobile devices",
    ],
    image: "/mobile-sports-app-interface-react-native.jpg",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover rounded-lg mb-8"
          />

          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.organization}</p>
            </div>
            <Badge variant="outline" className="text-sm">
              {project.dateRange}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {project.dateRange}
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button>
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid gap-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.longDescription}</p>
              <div>
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
