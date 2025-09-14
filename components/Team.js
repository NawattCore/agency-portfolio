import { useState } from 'react'
import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

import avater from '../public/images/Avater.png'

export default function Team() {
  const members = [
    { 
      id: 1, 
      name: 'Mohammed Saif', 
      role: 'CEO & Founder', 
      photo:avater.src,
      bio: 'Leading the company with over 10 years of experience in legal consulting and business development.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    { 
      id: 2, 
      name: 'Yara Khaled', 
      role: 'Senior Legal Advisor', 
      photo:avater.src,
      bio: 'Specialist in corporate law and contract negotiations with extensive courtroom experience.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    { 
      id: 3, 
      name: 'Omar Adel', 
      role: 'Legal Consultant', 
      photo:avater.src,
      bio: 'Expert in commercial law and regulatory compliance with a focus on startup legal requirements.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    { 
      id: 4, 
      name: 'Sarah Ahmed', 
      role: 'Family Law Specialist', 
      photo:avater.src,
      bio: 'Dedicated to helping families navigate complex legal situations with compassion and expertise.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const membersPerSlide = 3
  const totalSlides = Math.ceil(members.length / membersPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentMembers = () => {
    const start = currentSlide * membersPerSlide
    return members.slice(start, start + membersPerSlide)
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Team Members Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 border border-gray-200"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 border border-gray-200"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentMembers().map((member, index) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Member Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Social Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
                      <a
                        href={member.social.facebook}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
                      >
                        <Facebook size={18} className="text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
                      >
                        <Twitter size={18} className="text-white" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
                      >
                        <Linkedin size={18} className="text-white" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
                      >
                        <Instagram size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brown to-brown-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get in touch with our professional legal consultants and discover how we can help you achieve your goals.
            </p>
            <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}