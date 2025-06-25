import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Users } from 'lucide-react';

const MenuItemPage: React.FC = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const menuItems: { [key: string]: any } = {
    '1': {
      id: '1',
      name: 'Wagyu Chicken',
      description: 'Premium wagyu chicken with truffle jus and seasonal vegetables',
      fullDescription: 'Our signature wagyu chicken tenderloin is sourced from premium Australian cattle and aged to perfection. Served with a rich truffle jus, seasonal roasted vegetables, and creamy mashed potatoes. This dish represents the pinnacle of fine dining excellence.',
      price: '$85',
      image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Main Course',
      rating: 5,
      cookTime: '25 minutes',
      serves: '1 person',
      ingredients: [
        '300g Premium Wagyu Chicken Tenderloin',
        'Black truffle jus',
        'Seasonal roasted vegetables',
        'Creamy mashed potatoes',
        'Fresh herbs',
        'Sea salt flakes'
      ],
      allergens: ['None'],
      nutritional: {
        calories: 650,
        protein: 45,
        carbs: 25,
        fat: 35
      }
    }
  };

  const item = menuItems[id || '1'] || menuItems['1'];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-primary-700 hover:text-primary-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-poppins">Back to Menu</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary-900/80 text-cream-50 px-4 py-2 rounded-full">
                <span className="font-poppins font-semibold">{item.category}</span>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-primary-900 mb-4">
                {item.name}
              </h1>
              <p className="font-poppins text-xl text-primary-600 mb-6">
                {item.description}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <span className="font-playfair font-bold text-3xl text-gold-600">
                  {item.price}
                </span>
                <div className="flex items-center space-x-4 text-primary-600">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span className="font-poppins text-sm">{item.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span className="font-poppins text-sm">{item.serves}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-playfair font-bold text-xl text-primary-900 mb-4">
                Description
              </h3>
              <p className="font-poppins text-primary-700 leading-relaxed">
                {item.fullDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-playfair font-bold text-xl text-primary-900 mb-4">
                Ingredients
              </h3>
              <ul className="space-y-2">
                {item.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="font-poppins text-primary-700 flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-playfair font-bold text-lg text-primary-900 mb-3">
                  Nutritional Info
                </h3>
                <div className="space-y-2 font-poppins text-sm text-primary-700">
                  <div className="flex justify-between">
                    <span>Calories:</span>
                    <span className="font-semibold">{item.nutritional.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein:</span>
                    <span className="font-semibold">{item.nutritional.protein}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbs:</span>
                    <span className="font-semibold">{item.nutritional.carbs}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat:</span>
                    <span className="font-semibold">{item.nutritional.fat}g</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-playfair font-bold text-lg text-primary-900 mb-3">
                  Allergens
                </h3>
                <div className="space-y-2">
                  {item.allergens.map((allergen: string, index: number) => (
                    <span key={index} className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-poppins font-medium">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold text-center hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105"
              >
                Reserve This Dish
              </Link>
              <Link
                to="/contact"
                className="flex-1 bg-gradient-to-r from-primary-800 to-primary-700 text-cream-50 px-8 py-4 rounded-full font-poppins font-semibold text-center hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemPage;