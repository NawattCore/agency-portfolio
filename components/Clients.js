import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import avater from '../public/images/Avater.png'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Mohammed Saif',
      role: 'CEO/Company',
      photo:avater.src,
      testimonial: '"With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered."'
    },
    {
      id: 2,
      name: 'Sarah Ahmed',
      role: 'Business Owner',
      photo:avater.src,
      testimonial: '"Exceptional legal services with a personal touch. The team\'s expertise in corporate law helped us navigate complex business restructuring seamlessly. Their attention to detail and proactive communication made all the difference."'
    },
    {
      id: 3,
      name: 'Omar Hassan',
      role: 'Startup Founder',
      photo:avater.src,
      testimonial: '"From contract negotiations to regulatory compliance, Al Safar and Partners provided comprehensive legal support that allowed us to focus on growing our business. Their strategic advice was invaluable during our expansion phase."'
    },
    {
      id: 4,
      name: 'Layla Mahmoud',
      role: 'Real Estate Developer',
      photo:avater.src,
      testimonial: '"Professional, reliable, and results-driven. The legal team handled our property development projects with remarkable efficiency. Their deep understanding of real estate law saved us both time and money."'
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Auto-advance every 8 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="py-20" style={{ backgroundColor: '#4B2615' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What our clients are saying
          </h2>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Our clients range from individual investors, to local, international as 
            well as fortune 500 companies.Our clients range from individual 
            investors, to local, international as well as fortune 500 companies.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Client Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={current.photo}
                  alt={current.name}
                  className="w-full h-[500px] object-cover transition-all duration-500"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Quote size={32} className="text-amber-700" />
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-8 -left-4 text-8xl text-white/20 font-serif leading-none">
                "
              </div>
              
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                  {current.testimonial}
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {current.name}
                  </h3>
                  <p className="text-white/70 text-lg">
                    {current.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="pointer-events-auto -ml-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="pointer-events-auto -mr-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Alternative Clients Component (if you want to keep the original clients section)
export function Clients() {
  const clients = [
    { id: 1, name: 'Client A', logo: '/images/client-logo-1.png' },
    { id: 2, name: 'Client B', logo: '/images/client-logo-2.png' },
    { id: 3, name: 'Client C', logo: '/images/client-logo-3.png' },
    { id: 4, name: 'Client D', logo: '/images/client-logo-4.png' },
    { id: 5, name: 'Client E', logo: '/images/client-logo-5.png' },
    { id: 6, name: 'Client F', logo: '/images/client-logo-6.png' },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're proud to work with some of the most innovative companies across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}