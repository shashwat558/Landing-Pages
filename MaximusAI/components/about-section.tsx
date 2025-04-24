"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { Check, ArrowRight } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const statsItems = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "250+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "40+", label: "Team Members" }
  ]
  
  const features = [
    "Custom AI Solutions",
    "Expert Development Team",
    "Data-Driven Approach",
    "Cutting-Edge Technology",
    "Scalable Architecture",
    "24/7 Support"
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering the Future with <span className="text-gradient">Intelligence</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              With over 15 years of experience in software development and AI solutions, 
              we've been at the forefront of technological innovation. Our team of experts 
              combines deep technical knowledge with creative problem-solving to deliver 
              solutions that drive real business value.
            </p>
            <p className="text-muted-foreground mb-8">
              We're passionate about using technology to transform businesses and create 
              meaningful impact. Our collaborative approach ensures that we understand your 
              unique challenges and deliver tailored solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <Button className="bg-primary hover:bg-primary/90">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image
                src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg"
                alt="Team working on AI solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {statsItems.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="glass p-4 rounded-xl text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}