import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Exquisite Dining Experience',
      subtitle: 'Where culinary artistry meets warm hospitality',
      cta: 'View Menu'
    },
    {
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Handcrafted Cocktails',
      subtitle: 'Premium spirits and carefully curated wine selection',
      cta: 'Explore Drinks'
    },
    {
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Intimate Atmosphere',
      subtitle: 'Perfect for romantic dinners and special celebrations',
      cta: 'Reserve Now'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-taupe-900/80 via-taupe-800/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 animate-slide-up">
                  {slide.title}
                </h1>
                <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-cream-100 mb-8 animate-slide-up">
                  {slide.subtitle}
                </p>
                <button className="bg-gradient-to-r from-taupe-500 to-rose-400 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:from-taupe-600 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-subtle">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>


      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;