"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { ChevronDown, ArrowRight, Brain, Code, BarChart } from 'lucide-react'

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  }
  
  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  }
  
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  }
  
  return (
    <section 
      ref={targetRef}
      id="home" 
      className="min-h-screen w-full hero-gradient flex items-center justify-center relative pt-20"
    >
      <motion.div 
        className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10"
        style={{ opacity, scale, y }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 max-w-4xl text-balance"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Transform Your Business with <span className="text-gradient">AI-Powered</span> Solutions
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl text-balance"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          We combine cutting-edge artificial intelligence with expert web development to create powerful, intelligent solutions that drive your business forward.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Our Solutions
          </Button>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { 
              icon: <Brain className="h-8 w-8 mb-3 text-primary" />, 
              title: "AI Solutions", 
              description: "Machine learning models designed to solve complex business problems." 
            },
            { 
              icon: <Code className="h-8 w-8 mb-3 text-primary" />, 
              title: "Web Development", 
              description: "Cutting-edge web applications with seamless user experiences." 
            },
            { 
              icon: <BarChart className="h-8 w-8 mb-3 text-primary" />, 
              title: "Data Analytics", 
              description: "Transform your data into actionable business intelligence." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={iconVariants}
              className="glass rounded-xl px-6 py-8"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full border border-border"
            onClick={() => {
              const services = document.getElementById('services')
              services?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}