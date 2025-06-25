import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-taupe-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-xl text-gold-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                <div className="font-poppins text-sm">
                  <p>123 Gourmet Street</p>
                  <p>Downtown District</p>
                  <p>Melbourne, VIC 3000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400" />
                <p className="font-poppins text-sm">(03) 9123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <p className="font-poppins text-sm">hello@precinctbar.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-playfair font-bold text-xl text-gold-400 mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold-400" />
                <div className="font-poppins text-sm">
                  <p className="font-medium">Mon - Thu</p>
                  <p className="text-cream-200">5:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="font-poppins text-sm ml-8">
                <p className="font-medium">Fri - Sat</p>
                <p className="text-cream-200">5:00 PM - 12:00 AM</p>
              </div>
              <div className="font-poppins text-sm ml-8">
                <p className="font-medium">Sunday</p>
                <p className="text-cream-200">12:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-xl text-gold-400 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2 font-poppins text-sm">
              <a href="/menu/food" className="block hover:text-gold-400 transition-colors">
                Food Menu
              </a>
              <a href="/menu/drinks" className="block hover:text-gold-400 transition-colors">
                Drinks Menu
              </a>
              <a href="/whats-on" className="block hover:text-gold-400 transition-colors">
                What's On
              </a>
              <a href="/functions" className="block hover:text-gold-400 transition-colors">
                Private Events
              </a>
              <a href="/dining" className="block hover:text-gold-400 transition-colors">
                Dining Experience
              </a>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-playfair font-bold text-xl text-gold-400 mb-4">
              Stay Connected
            </h3>
            {/* <p className="font-poppins text-sm text-cream-200 mb-4">
              Subscribe for special offers and events.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 rounded bg-taupe-800 border border-taupe-700 text-cream-50 placeholder-cream-300 focus:outline-none focus:border-gold-400 font-poppins text-sm"
              />
              <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-taupe-900 px-4 py-2 rounded font-poppins font-medium text-sm hover:from-gold-400 hover:to-gold-300 transition-all duration-200">
                Subscribe
              </button>
            </div> */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-taupe-800 mt-12 pt-8 text-center">
          <p className="font-poppins text-sm text-cream-200">
            © 2024 Precinct Bar & Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;