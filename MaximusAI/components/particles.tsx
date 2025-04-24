"use client"

import React, { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()
    
    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100)
    
    const primaryColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.5)'
    const accentColor = theme === 'dark' ? 'rgba(6, 182, 212, 0.7)' : 'rgba(8, 145, 178, 0.5)'
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 0.5
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? primaryColor : accentColor
      })
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
        
        // Move particle
        p.x += p.speedX
        p.y += p.speedY
        
        // Edge detection
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
        
        // Connect particles
        for (let j = i; j < particlesArray.length; j++) {
          const p2 = particlesArray[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = p.color
            ctx.lineWidth = 0.2
            ctx.globalAlpha = 1 - (distance / 100)
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 opacity-50"
    />
  )
}