import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu/food', label: 'Menu' },
    { path: '/whats-on', label: "What's On" },
    { path: '/dining', label: 'Dining' },
    { path: '/functions', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-taupe-500 to-rose-400 p-2 rounded-full">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair font-bold text-xl transition-colors ${
                isScrolled ? 'text-taupe-900' : 'text-taupe-900'
              }`}>
                Precinct
              </span>
              <span className={`font-poppins text-xs -mt-1 transition-colors ${
                isScrolled ? 'text-taupe-600' : 'text-taupe-600'
              }`}>
                Bar & Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-poppins font-medium text-sm transition-all duration-200 hover:text-gold-500 relative group ${
                  location.pathname === item.path
                    ? 'text-gold-500'
                    : isScrolled ? 'text-taupe-800' : 'text-taupe-800'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Book Table Button - Desktop */}
          <Link
            to="/contact"
            className="hidden md:inline-flex bg-gradient-to-r from-taupe-500 to-rose-400 text-white px-6 py-2.5 rounded-full font-poppins font-medium text-sm hover:from-taupe-600 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Reserve Table
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-taupe-800 hover:text-gold-500' : 'text-taupe-800 hover:text-gold-500'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 font-poppins text-sm transition-colors duration-200 hover:text-gold-500 hover:bg-cream-100 rounded-lg mx-2 ${
                  location.pathname === item.path
                    ? 'text-gold-500 bg-cream-200'
                    : 'text-taupe-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-4 mt-4 bg-gradient-to-r from-taupe-500 to-rose-400 text-white px-4 py-3 rounded-full font-poppins font-medium text-sm text-center hover:from-taupe-600 hover:to-rose-500 transition-all duration-300"
            >
              Reserve Table
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;