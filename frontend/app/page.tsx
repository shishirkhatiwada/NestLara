import { ContactForm } from '@/components/ContactForm'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-16 max-w-lg">
        <div className="bg-card rounded-lg shadow-lg p-8 animate-fade-up">
          <h1 className="text-3xl font-bold text-center mb-8 animate-fade-down">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}