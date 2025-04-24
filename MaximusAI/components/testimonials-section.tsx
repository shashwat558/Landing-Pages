"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Maximus AI transformed our customer support with their intelligent chatbot solution. Our response times improved by 70% and customer satisfaction scores increased significantly.",
    author: "Sarah Johnson",
    position: "CTO, RetailX",
    avatar: "SJ"
  },
  {
    quote: "The predictive analytics dashboard Maximus AI built for us has been a game-changer. We can now forecast trends with unprecedented accuracy and make data-driven decisions with confidence.",
    author: "Michael Chen",
    position: "Data Director, FinancePro",
    avatar: "MC"
  },
  {
    quote: "Working with Maximus AI was seamless from start to finish. Their development team understood our complex requirements and delivered a solution that exceeded our expectations.",
    author: "Emily Rodriguez",
    position: "VP of Operations, TechGlobal",
    avatar: "ER"
  },
  {
    quote: "The AI-powered recommendation engine has boosted our conversion rates by 45%. Maximus AI's solution was well-architected, robust, and surprisingly easy to integrate with our existing systems.",
    author: "David Thompson",
    position: "E-commerce Director, MegaShop",
    avatar: "DT"
  }
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See what our clients have to say about our AI and web solutions
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="glass p-6 rounded-xl h-full">
                    <Quote className="h-8 w-8 text-primary/70 mb-4" />
                    <blockquote className="mb-6">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}