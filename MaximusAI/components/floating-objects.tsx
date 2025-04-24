"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface ObjectProps {
  className?: string
  delay?: number
  duration?: number
  scale?: number
  shape?: 'circle' | 'square' | 'triangle' | 'donut' | 'ring'
}

export function FloatingObject({ 
  className = "", 
  delay = 0, 
  duration = 20,
  scale = 1,
  shape = 'circle'
}: ObjectProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  // Define shape components
  const shapes = {
    circle: (
      <div className={`absolute rounded-full bg-primary/10 backdrop-blur-md ${className}`} />
    ),
    square: (
      <div className={`absolute rounded-md bg-accent/10 backdrop-blur-md ${className}`} />
    ),
    triangle: (
      <div className={`absolute w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-primary/20 border-r-[25px] border-r-transparent ${className}`} />
    ),
    donut: (
      <div className={`absolute rounded-full border-4 border-accent/30 ${className}`} />
    ),
    ring: (
      <div className={`absolute rounded-full border border-primary/20 ${className}`} />
    ),
  }
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale,
        opacity: 0.5,
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {shapes[shape]}
    </motion.div>
  )
}

export function FloatingObjects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <FloatingObject 
        shape="circle" 
        className="top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96" 
        duration={25} 
      />
      <FloatingObject 
        shape="square" 
        className="bottom-1/3 right-1/5 w-48 h-48 md:w-80 md:h-80" 
        delay={2} 
        duration={20} 
      />
      <FloatingObject 
        shape="triangle" 
        className="top-2/3 left-1/3" 
        delay={1} 
        scale={1.5}
        duration={15} 
      />
      <FloatingObject 
        shape="donut" 
        className="top-1/3 right-1/4 w-32 h-32 md:w-64 md:h-64" 
        delay={3} 
        duration={30} 
      />
      <FloatingObject 
        shape="ring" 
        className="bottom-1/4 left-1/5 w-64 h-64 md:w-96 md:h-96" 
        delay={4} 
        duration={40} 
      />
    </div>
  )
}