import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import Particles from '@/components/particles'
import { FloatingObjects } from '@/components/floating-objects'

export default function Home() {
  return (
    <main className="antialiased min-h-screen">
      <Navbar />
      <Particles />
      <FloatingObjects />
      
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}