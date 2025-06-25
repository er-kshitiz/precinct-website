import React from 'react';
import { Baby, Users, Utensils, Star, Clock, Shield } from 'lucide-react';

const FamilyFriendlyPage: React.FC = () => {
  const familyFeatures = [
    {
      icon: Baby,
      title: 'High Chairs Available',
      description: 'Comfortable high chairs and booster seats for little ones'
    },
    {
      icon: Utensils,
      title: 'Kids Menu',
      description: 'Specially crafted menu with healthy, delicious options for children'
    },
    {
      icon: Users,
      title: 'Family Seating',
      description: 'Spacious tables and dedicated family-friendly dining areas'
    },
    {
      icon: Clock,
      title: 'Early Dining',
      description: 'Family-friendly service times from 5:30 PM on weekdays'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Child-safe environment with attentive, family-oriented staff'
    },
    {
      icon: Star,
      title: 'Special Occasions',
      description: 'Birthday celebrations and special family milestone events'
    }
  ];

  const kidsMenuItems = [
    {
      name: 'Mini Chicken Sliders',
      description: 'Two mini wagyu chicken sliders with chips and vegetables',
      price: '$18'
    },
    {
      name: 'Grilled Chicken Tenders',
      description: 'Free-range chicken tenders with sweet potato fries',
      price: '$16'
    },
    {
      name: 'Fresh Fish & Chips',
      description: 'Beer-battered fresh fish with house-made chips',
      price: '$17'
    },
    {
      name: 'Pasta Marinara',
      description: 'Fresh pasta with our signature tomato sauce',
      price: '$14'
    },
    {
      name: 'Chocolate Brownie Sundae',
      description: 'Warm brownie with vanilla ice cream and berries',
      price: '$12'
    },
    {
      name: 'Fresh Fruit Platter',
      description: 'Seasonal fruits with yogurt dipping sauce',
      price: '$10'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-primary-900 mb-4">
            Family Friendly Dining
          </h1>
          <p className="font-poppins text-lg text-primary-700 max-w-2xl mx-auto">
            Creating memorable dining experiences for the whole family, where children are welcome and parents can relax
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Family dining"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-cream-50 max-w-2xl px-4">
              <h2 className="font-playfair font-bold text-3xl lg:text-5xl mb-4">
                Families Welcome
              </h2>
              <p className="font-poppins text-lg">
                Where fine dining meets family comfort
              </p>
            </div>
          </div>
        </div>

        {/* Family Features */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Family-Friendly Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-br from-gold-500 to-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-900" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-primary-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kids Menu Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-6 text-center">
              Kids Menu
            </h2>
            <p className="font-poppins text-primary-700 text-center mb-8 max-w-2xl mx-auto">
              Our children's menu features smaller portions of high-quality ingredients, 
              designed to appeal to young palates while maintaining our commitment to fresh, 
              nutritious food.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kidsMenuItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start p-4 border-l-4 border-gold-400 bg-cream-50 rounded-r-lg hover:bg-gold-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-lg text-primary-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="font-poppins text-primary-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-poppins font-bold text-gold-600 ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Dining Areas */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Family Dining Spaces
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Family dining area"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                Family Section
              </h3>
              <p className="font-poppins text-primary-600 mb-4">
                Our dedicated family dining area features spacious tables with easy access 
                for strollers and high chairs. The atmosphere is relaxed and welcoming, 
                perfect for families with children of all ages.
              </p>
              <div className="flex items-center space-x-4 text-sm font-poppins text-primary-700">
                <span>• Spacious seating</span>
                <span>• High chair storage</span>
                <span>• Easy stroller access</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Outdoor family seating"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                Outdoor Terrace
              </h3>
              <p className="font-poppins text-primary-600 mb-4">
                Our outdoor terrace provides a perfect setting for families, with fresh air 
                and more space for children to feel comfortable. Weather permitting, this 
                area offers a delightful al fresco dining experience.
              </p>
              <div className="flex items-center space-x-4 text-sm font-poppins text-primary-700">
                <span>• Fresh air dining</span>
                <span>• Child-safe barriers</span>
                <span>• Flexible seating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Family Guidelines */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8">
            <h2 className="font-playfair font-bold text-3xl text-cream-50 mb-6 text-center">
              Making Your Visit Comfortable
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair font-bold text-xl text-gold-400 mb-4">
                  What We Provide
                </h3>
                <ul className="space-y-2 font-poppins text-cream-200">
                  <li>• High chairs and booster seats</li>
                  <li>• Kids' cutlery and plates</li>
                  <li>• Colouring sheets and crayons</li>
                  <li>• Bibs and wet wipes</li>
                  <li>• Baby changing facilities</li>
                  <li>• Kids' cup with lid</li>
                </ul>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-gold-400 mb-4">
                  Best Times to Visit
                </h3>
                <div className="space-y-3 font-poppins text-cream-200">
                  <div>
                    <p className="font-semibold">Weekdays: 5:30 PM - 7:30 PM</p>
                    <p className="text-sm">Quieter atmosphere, perfect for families</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sundays: 12:00 PM - 3:00 PM</p>
                    <p className="text-sm">Extended brunch menu with kids' options</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturday Early: 5:00 PM - 6:30 PM</p>
                    <p className="text-sm">Before the evening rush</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            What Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>
              <p className="font-poppins text-primary-700 mb-4 italic">
                "Finally, a fine dining restaurant where we can bring our kids! The staff was 
                incredibly accommodating, and the kids' menu was fantastic. Our 6-year-old 
                said it was the best chicken tenders he's ever had!"
              </p>
              <div className="font-poppins">
                <p className="font-semibold text-primary-900">Sarah & Michael Chen</p>
                <p className="text-primary-600 text-sm">Family of four</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>
              <p className="font-poppins text-primary-700 mb-4 italic">
                "We celebrated our daughter's 8th birthday here, and it was perfect. The staff 
                went above and beyond to make her feel special, and the food was exceptional 
                for both adults and kids. We'll definitely be back!"
              </p>
              <div className="font-poppins">
                <p className="font-semibold text-primary-900">Emma & James Wilson</p>
                <p className="text-primary-600 text-sm">Parents of two</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-4">
              Bring the Whole Family
            </h2>
            <p className="font-poppins text-primary-700 mb-8 max-w-2xl mx-auto">
              Experience fine dining that welcomes families. Book your table today and 
              create lasting memories with your loved ones in our comfortable, 
              family-friendly environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105">
                Book Family Table
              </button>
              <button className="bg-gradient-to-r from-primary-800 to-primary-700 text-cream-50 px-8 py-4 rounded-full font-poppins font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105">
                View Kids Menu
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FamilyFriendlyPage;