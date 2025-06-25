import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodMenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = {
    starters: [
      {
        id: 'starter-1',
        name: 'Oysters Natural',
        description: 'Fresh Sydney rock oysters with lemon and shallot vinaigrette',
        price: '$4.50 each',
        image: 'https://images.pexels.com/photos/5175533/pexels-photo-5175533.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: 'starter-1',
        name: 'Oysters Natural',
        description: 'Fresh Sydney rock oysters with lemon and shallot vinaigrette',
        price: '$4.50 each',
        image: 'https://images.pexels.com/photos/5175533/pexels-photo-5175533.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: 'starter-2',
        name: 'Burrata & Prosciutto',
        description: 'Creamy burrata with San Daniele prosciutto and fig compote',
        price: '$28',
        image: 'https://images.pexels.com/photos/4046719/pexels-photo-4046719.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: 'starter-3',
        name: 'Tuna Tartare',
        description: 'Yellowfin tuna with avocado, citrus, and sesame wafer',
        price: '$32',
        image: 'https://images.pexels.com/photos/8753659/pexels-photo-8753659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      }
    ],
    mains: [
      {
        id: '1',
        name: 'Wagyu Chicken',
        description: 'Premium wagyu chicken with truffle jus and seasonal vegetables',
        price: '$85',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: '2',
        name: 'Pan-Seared Salmon',
        description: 'Atlantic salmon with citrus butter and herb-roasted potatoes',
        price: '$42',
        image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: '3',
        name: 'Lobster Thermidor',
        description: 'Classic preparation with brandy cream sauce and gruyere',
        price: '$68',
        image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: '4',
        name: 'Duck Confit',
        description: 'Slow-cooked duck leg with cherry gastrique and wild rice',
        price: '$56',
        image: 'https://images.pexels.com/photos/8753659/pexels-photo-8753659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      }
    ],
    desserts: [
      {
        id: '5',
        name: 'Chocolate Soufflé',
        description: 'Rich dark chocolate soufflé with vanilla bean ice cream',
        price: '$18',
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      },
      {
        id: 'dessert-2',
        name: 'Lemon Tart',
        description: 'Classic lemon tart with raspberry coulis and meringue',
        price: '$16',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        rating: 5
      }
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-taupe-900 mb-4">
            Our Menu
          </h1>
          <p className="font-poppins text-lg text-taupe-700 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-taupe-500 to-rose-400 text-white shadow-lg transform scale-105'
                  : 'bg-white text-taupe-700 hover:bg-cream-200 hover:text-taupe-900 shadow-md'
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <Link
              key={item.id}
              to={`/menu/item/${item.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden h-40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-gold-400 fill-current" />
                    ))}
                  </div> */}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair font-bold text-lg text-taupe-900 group-hover:text-taupe-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-poppins font-bold text-gold-600">
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-taupe-900 to-taupe-800 rounded-2xl p-8 text-center">
            <h2 className="font-playfair font-bold text-3xl text-white mb-4">
              Ready to Dine?
            </h2>
            <p className="font-poppins text-cream-200 mb-6">
              Book your table now and experience our exceptional cuisine
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-gradient-to-r from-gold-500 to-gold-400 text-taupe-900 px-8 py-4 rounded-full font-poppins font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuPage;