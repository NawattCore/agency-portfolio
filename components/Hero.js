import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import hero from '../public/images/hero-1.png'
import avater from '../public/images/Avater.png'

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      img: '/images/hero-bg.jpg', // Replace with your actual image path
      title: 'Lorem Ipsum',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      buttonText: 'Read More',
      showProfile: true,
      profileImg: '/images/profile-1.jpg' // Replace with your actual profile image
    },
    {
      id: 2,
      img: '/images/hero-bg-2.jpg', // Replace with your actual image path
      title: 'Legal Consultation Services',
      subtitle: 'Professional legal services with comprehensive consultation covering all legal aspects including corporate law, contract negotiations, and legal compliance.',
      buttonText: 'Learn More',
      showProfile: false
    },
    {
      id: 3,
      img: '/images/hero-bg-3.jpg', // Replace with your actual image path
      title: 'Expert Legal Solutions',
      subtitle: 'Delivering exceptional legal expertise with personalized service tailored to meet your specific legal requirements and business objectives.',
      buttonText: 'Get Started',
      showProfile: false
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden"
    style={{
    backgroundImage: `url(${hero.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}

    >
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                About us
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Blog
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Our Team
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Contact us
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300 transition-colors p-2">
                <Search size={18} />
              </button>
              <button className="bg-transparent border border-white/40 text-white px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition-all">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 z-20'
                : 'opacity-0 z-10'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              style={{
                backgroundImage: `url(${slide.img})`,
                filter: 'brightness(0.7)'
              }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-#4B2615/70 via-#4B2615/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                      {slide.buttonText}
                    </button>
                  </div>

                  {/* Profile Image (only on first slide) */}
                  {slide.showProfile && (
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative">
                        <div className="w-80 h-80 relative">
                          <img 
                            src={avater.src} // Replace with actual image
                            alt="Profile"
                            className="w-full h-full object-cover rounded-lg border-4 border-blue-500/30 shadow-2xl"
                          />
                          {/* Blue dimension label */}
                          <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                            374 x 374
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 transition-all"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Vertical Dot Navigation (Left Side) */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 -translate-x-12 z-30">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-8 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white rounded-full'
                  : 'bg-white/40 hover:bg-white/60 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}