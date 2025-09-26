import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say
            hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
