import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
}

const MenuCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredItems: MenuItem[] = [
    {
      id: '1',
      name: 'Wagyu Chicken',
      description: 'Premium wagyu with truffle jus and seasonal vegetables',
      price: '$85',
      image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Main Course',
      rating: 5
    },
    {
      id: '2',
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with citrus butter and herb potatoes',
      price: '$42',
      image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Main Course',
      rating: 5
    },
    {
      id: '3',
      name: 'Lobster Thermidor',
      description: 'Classic preparation with brandy cream and gruyere',
      price: '$68',
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Specialty',
      rating: 5
    },
    {
      id: '4',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry gastrique',
      price: '$56',
      image: 'https://images.pexels.com/photos/8753659/pexels-photo-8753659.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Main Course',
      rating: 5
    },
    {
      id: '5',
      name: 'Chocolate Soufflé',
      description: 'Rich dark chocolate with vanilla bean ice cream',
      price: '$18',
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Dessert',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [featuredItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % featuredItems.length;
      items.push(featuredItems[index]);
    }
    return items;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-taupe-900 mb-4">
            Featured Dishes
          </h2>
          <p className="font-poppins text-lg text-taupe-700 max-w-2xl mx-auto">
            Discover our chef's signature creations and seasonal specialties
          </p>
        </div>

        <div className="relative">
          {/* Mobile: Single card view */}
          <div className="block md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-4">
                    <Link to={`/menu/item/${item.id}`} className="group cursor-pointer block">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 bg-taupe-800/80 text-white px-3 py-1 rounded-full">
                            <span className="font-poppins font-medium text-xs">{item.category}</span>
                          </div>
                          <div className="absolute bottom-3 left-3 flex items-center space-x-1">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-gold-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-playfair font-bold text-lg text-taupe-900 group-hover:text-taupe-700 transition-colors">
                              {item.name}
                            </h3>
                            <span className="font-poppins font-bold text-lg text-gold-600">
                              {item.price}
                            </span>
                          </div>
                          <p className="font-poppins text-taupe-600 text-sm leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <span className="font-poppins text-gold-600 text-sm font-medium group-hover:text-gold-500 transition-colors">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Three cards view */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
                {getVisibleItems().map((item, index) => (
                  <Link
                    key={`${item.id}-${index}`}
                    to={`/menu/item/${item.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-taupe-800/80 text-white px-3 py-1 rounded-full">
                          <span className="font-poppins font-medium text-xs">{item.category}</span>
                        </div>
                        <div className="absolute bottom-3 left-3 flex items-center space-x-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-gold-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair font-bold text-lg text-taupe-900 group-hover:text-taupe-700 transition-colors">
                            {item.name}
                          </h3>
                          <span className="font-poppins font-bold text-lg text-gold-600">
                            {item.price}
                          </span>
                        </div>
                        {/* <p className="font-poppins text-taupe-600 text-sm leading-relaxed mb-3">
                          {item.description}
                        </p> */}
                        <span className="font-poppins text-gold-600 text-sm font-medium group-hover:text-gold-500 transition-colors">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-taupe-900 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-taupe-900 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Indicators for Mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-taupe-600 scale-125' 
                    : 'bg-taupe-300 hover:bg-taupe-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Menu Button */}
        <div className="text-center mt-12">
          <Link
            to="/menu/food"
            className="inline-flex bg-gradient-to-r from-taupe-600 to-rose-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:from-taupe-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuCarousel;