import React from 'react'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Cpu
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Press", href: "#press" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "#ai-solutions" },
        { name: "Web Development", href: "#web-development" },
        { name: "Data Analytics", href: "#data-analytics" },
        { name: "Cloud Infrastructure", href: "#cloud" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Whitepapers", href: "#whitepapers" },
        { name: "Tutorials", href: "#tutorials" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookies", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" },
      ]
    }
  ]
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "#" },
  ]
  
  return (
    <footer className="bg-card text-card-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Cpu className="h-6 w-6 mr-2 text-primary" />
              <h2 className="font-bold text-2xl">
                <span className="text-gradient">Maximus</span>AI
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with cutting-edge AI and web solutions to transform 
              digital experiences and drive innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} MaximusAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}