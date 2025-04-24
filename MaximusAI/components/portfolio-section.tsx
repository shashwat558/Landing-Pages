"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Predictive analytics platform with real-time insights for e-commerce",
    image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg",
    category: "AI / Data Analytics"
  },
  {
    title: "Intelligent Customer Service Bot",
    description: "NLP-based chatbot handling customer inquiries with 95% accuracy",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    category: "Machine Learning / NLP"
  },
  {
    title: "Financial Forecasting System",
    description: "Predictive modeling system for financial markets and investments",
    image: "https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg",
    category: "AI / FinTech"
  },
  {
    title: "Smart Inventory Management",
    description: "AI-driven system optimizing inventory and reducing waste by 35%",
    image: "https://images.pexels.com/photos/7411987/pexels-photo-7411987.jpeg",
    category: "Machine Learning / Enterprise"
  }
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section id="portfolio" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Innovative solutions that have transformed businesses and created measurable impact
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 max-w-md">{project.description}</p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}