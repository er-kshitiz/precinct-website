import React, { useState } from 'react';
import { Wine, Coffee, Beer, Sparkles } from 'lucide-react';

const DrinksMenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('cocktails');

  const categories = [
    { id: 'cocktails', name: 'Cocktails', icon: Sparkles },
    { id: 'wines', name: 'Wines', icon: Wine },
    { id: 'beers', name: 'Beers', icon: Beer },
    { id: 'mocktails', name: 'Mocktails', icon: Coffee }
  ];

  const drinkItems = {
    cocktails: [
      {
        id: 'cocktail-1',
        name: 'Precinct Signature',
        description: 'Premium gin, elderflower, cucumber, lime, and tonic',
        price: '$18',
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'cocktail-2',
        name: 'Smoked Old Fashioned',
        description: 'Bourbon whiskey, maple syrup, bitters, smoked with applewood',
        price: '$22',
        image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'cocktail-3',
        name: 'Golden Fizz',
        description: 'Champagne, elderflower, lemon, gold leaf garnish',
        price: '$24',
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      }
    ],
    wines: [
      {
        id: 'wine-1',
        name: 'Yarra Valley Chardonnay',
        description: 'Crisp, elegant white with citrus and oak notes',
        price: '$15 / $68',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'wine-2',
        name: 'Barossa Shiraz',
        description: 'Full-bodied red with rich berry and spice flavors',
        price: '$18 / $85',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'wine-3',
        name: 'King Valley Prosecco',
        description: 'Light, bubbly with fresh apple and pear notes',
        price: '$12 / $55',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      }
    ],
    beers: [
      {
        id: 'beer-1',
        name: 'Craft Pale Ale',
        description: 'Local brewery pale ale with citrus hop flavors',
        price: '$12',
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'beer-2',
        name: 'Premium Lager',
        description: 'Crisp and refreshing German-style lager',
        price: '$10',
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'beer-3',
        name: 'Dark Stout',
        description: 'Rich, creamy stout with coffee and chocolate notes',
        price: '$14',
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      }
    ],
    mocktails: [
      {
        id: 'mocktail-1',
        name: 'Garden Fresh',
        description: 'Cucumber, mint, lime, elderflower, soda water',
        price: '$12',
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'mocktail-2',
        name: 'Berry Bliss',
        description: 'Mixed berries, lemon, honey, sparkling water',
        price: '$10',
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        id: 'mocktail-3',
        name: 'Tropical Sunset',
        description: 'Pineapple, mango, coconut, lime, ginger',
        price: '$11',
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      }
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-taupe-900 mb-4">
            Drinks Menu
          </h1>
          <p className="font-poppins text-lg text-taupe-700 max-w-2xl mx-auto">
            Explore our curated selection of premium beverages and handcrafted cocktails
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-taupe-500 to-rose-400 text-white shadow-lg transform scale-105'
                    : 'bg-white text-taupe-700 hover:bg-cream-200 hover:text-taupe-900 shadow-md'
                }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinkItems[activeCategory as keyof typeof drinkItems].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-taupe-800/80 text-white px-3 py-1 rounded-full font-poppins font-medium text-xs">
                    {categories.find(cat => cat.id === activeCategory)?.name}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair font-bold text-lg text-taupe-900">
                    {item.name}
                  </h3>
                  <span className="font-poppins font-bold text-gold-600">
                    {item.price}
                  </span>
                </div>
                <p className="font-poppins text-taupe-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wine List Note */}
        {activeCategory === 'wines' && (
          <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-playfair font-bold text-xl text-taupe-900 mb-3">
              Wine List
            </h3>
            <p className="font-poppins text-taupe-700 mb-3">
              Prices shown are per glass / per bottle. Our extensive wine collection features 
              carefully selected vintages from Australia's premier wine regions.
            </p>
            <p className="font-poppins text-taupe-600 text-sm">
              Ask our sommelier about wine pairings with your meal selection.
            </p>
          </div>
        )}

        {/* Happy Hour Promotion */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gold-500 to-gold-400 rounded-2xl p-8 text-center">
            <h2 className="font-playfair font-bold text-3xl text-taupe-900 mb-4">
              Happy Hour
            </h2>
            <p className="font-poppins text-taupe-800 mb-6">
              Join us Monday to Friday, 5:00 PM - 7:00 PM for special drink prices
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-taupe-900">
              <div className="bg-white/20 rounded-lg p-4">
                <p className="font-poppins font-semibold">$2 off</p>
                <p className="font-poppins text-sm">All Cocktails</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="font-poppins font-semibold">$10</p>
                <p className="font-poppins text-sm">House Wines</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="font-poppins font-semibold">$8</p>
                <p className="font-poppins text-sm">Craft Beers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksMenuPage;