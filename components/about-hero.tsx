import { Card, CardContent } from "@/components/ui/card"

export function AboutHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground text-balance">Get to know the person behind the code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
              JC
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi there! I'm Jion Choi, a passionate software development student at The King's University in
                    Edmonton, Canada. My journey into technology began with a curiosity about how things work and a
                    desire to create solutions that make a difference.
                  </p>
                  <p>
                    Currently pursuing my degree in software development, I've had the opportunity to work on diverse
                    projects ranging from robotics programming to machine learning applications. Each experience has
                    taught me something new and fueled my passion for continuous learning.
                  </p>
                  <p>
                    What drives me is the endless possibility that technology offers to solve real-world problems.
                    Whether it's developing a mobile app to connect sports enthusiasts or creating emotion recognition
                    systems, I'm always excited to tackle new challenges and push the boundaries of what's possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">My Philosophy</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I believe that great software is built not just with technical skills, but with empathy, creativity,
                    and a deep understanding of user needs. Every line of code I write is an opportunity to make
                    someone's life a little bit better.
                  </p>
                  <p>
                    Collaboration and continuous learning are at the heart of my approach. The tech industry evolves
                    rapidly, and I'm committed to staying curious, asking questions, and growing alongside it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
