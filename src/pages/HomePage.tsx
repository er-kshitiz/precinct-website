import React from 'react';
import HeroSlider from '../components/HeroSlider';
import MenuCarousel from '../components/MenuCarousel';
import { Clock, Award, Users, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroSlider />
      <MenuCarousel />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-taupe-900 to-taupe-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-white mb-4">
              Why Choose Precinct
            </h2>
            <p className="font-poppins text-lg text-cream-200 max-w-2xl mx-auto">
              Experience the perfect blend of culinary excellence and warm hospitality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold-500 to-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-taupe-900" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-white mb-2">Award Winning</h3>
              <p className="font-poppins text-cream-200 text-sm">Recognized for culinary excellence and outstanding service</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold-500 to-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-taupe-900" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-white mb-2">Fresh Daily</h3>
              <p className="font-poppins text-cream-200 text-sm">Locally sourced ingredients prepared fresh every day</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold-500 to-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-taupe-900" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-white mb-2">Expert Team</h3>
              <p className="font-poppins text-cream-200 text-sm">Experienced chefs and professional service staff</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold-500 to-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-taupe-900" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-white mb-2">Memorable Experience</h3>
              <p className="font-poppins text-cream-200 text-sm">Creating unforgettable moments for every occasion</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-taupe-900 mb-6">
                Our Story
              </h2>
              <p className="font-poppins text-lg text-taupe-700 mb-6 leading-relaxed">
                Located in the heart of Melbourne's dining precinct, our restaurant has been serving 
                exceptional cuisine since 2015. We pride ourselves on creating memorable dining 
                experiences that combine innovative flavors with timeless hospitality.
              </p>
              <p className="font-poppins text-taupe-600 mb-8 leading-relaxed">
                Our passionate team of chefs crafts each dish with precision and creativity, 
                using only the finest locally-sourced ingredients. Whether you're celebrating 
                a special occasion or enjoying an intimate dinner, we're committed to making 
                every visit extraordinary.
              </p>
              <button className="bg-gradient-to-r from-taupe-600 to-rose-500 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:from-taupe-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-400 text-taupe-900 p-6 rounded-xl shadow-lg">
                <p className="font-playfair font-bold text-2xl">9+ Years</p>
                <p className="font-poppins text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;