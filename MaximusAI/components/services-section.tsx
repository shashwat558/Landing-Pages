"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Server, 
  Cpu, 
  BarChart3, 
  Globe, 
  Layers, 
  MessageSquare 
} from 'lucide-react'

const services = [
  {
    icon: <Cpu />,
    title: "Machine Learning",
    description: "Custom ML models for classification, prediction, and decision-making to automate processes and uncover insights."
  },
  {
    icon: <MessageSquare />,
    title: "NLP Solutions",
    description: "Text analysis, sentiment analysis, and conversational AI to transform how you interact with customers."
  },
  {
    icon: <Server />,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions designed for performance and reliability."
  },
  {
    icon: <Globe />,
    title: "Web Development",
    description: "Dynamic, responsive web applications with seamless user interfaces and powerful functionality."
  },
  {
    icon: <Layers />,
    title: "Custom Software",
    description: "Bespoke applications designed to address your unique business challenges."
  },
  {
    icon: <BarChart3 />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization."
  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section id="services" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cutting-edge AI/ML technologies and web solutions to transform your business
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl hover:shadow-lg transition-all group"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}