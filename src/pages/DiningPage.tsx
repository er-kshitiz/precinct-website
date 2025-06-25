import React from 'react';
import { Users, Wifi, Car, Music, Award, Heart } from 'lucide-react';

const DiningPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Private Dining',
      description: 'Intimate spaces for special occasions and business meetings'
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'Complimentary high-speed internet throughout the venue'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Convenient valet service available from 6 PM'
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Regular live music performances and special events'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in dining and service'
    },
    {
      icon: Heart,
      title: 'Special Occasions',
      description: 'Perfect venue for celebrations and romantic dinners'
    }
  ];

  const diningAreas = [
    {
      name: 'Main Dining Room',
      description: 'Our elegant main dining room features contemporary design with warm lighting and comfortable seating for up to 80 guests.',
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      capacity: '80 guests',
      atmosphere: 'Elegant & Contemporary'
    },
    {
      name: 'Wine Bar',
      description: 'An intimate wine bar setting with premium selections and expert sommelier guidance in a cozy atmosphere.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      capacity: '25 guests',
      atmosphere: 'Intimate & Cozy'
    },
    {
      name: 'Private Room',
      description: 'Exclusive private dining room perfect for business meetings or special celebrations with dedicated service.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      capacity: '12 guests',
      atmosphere: 'Exclusive & Private'
    },
    {
      name: 'Outdoor Terrace',
      description: 'Beautiful outdoor terrace with city views, perfect for al fresco dining during Melbourne\'s beautiful weather.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      capacity: '40 guests',
      atmosphere: 'Fresh Air & Views'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-primary-900 mb-4">
            Dining Experience
          </h1>
          <p className="font-poppins text-lg text-primary-700 max-w-2xl mx-auto">
            Immerse yourself in our carefully crafted ambiance designed for memorable dining experiences
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Restaurant interior"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-cream-50 max-w-2xl px-4">
              <h2 className="font-playfair font-bold text-3xl lg:text-5xl mb-4">
                Elegant Atmosphere
              </h2>
              <p className="font-poppins text-lg">
                Where exceptional cuisine meets sophisticated design
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
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

        {/* Dining Areas */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Dining Areas
          </h2>
          <div className="space-y-12">
            {diningAreas.map((area, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="font-playfair font-bold text-2xl lg:text-3xl text-primary-900">
                    {area.name}
                  </h3>
                  <p className="font-poppins text-primary-700 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gold-100 text-gold-800 px-4 py-2 rounded-full">
                      <span className="font-poppins font-medium text-sm">
                        Capacity: {area.capacity}
                      </span>
                    </div>
                    <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full">
                      <span className="font-poppins font-medium text-sm">
                        {area.atmosphere}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ambiance Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-cream-50 mb-6">
                  The Perfect Ambiance
                </h2>
                <p className="font-poppins text-cream-200 mb-6 leading-relaxed">
                  Our restaurant combines contemporary elegance with warm hospitality. 
                  From the moment you enter, you'll notice the attention to detail in 
                  every aspect of our design - from the carefully selected lighting 
                  that creates an intimate atmosphere to the premium table settings 
                  that enhance your dining experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="font-poppins text-cream-200">Carefully curated lighting design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="font-poppins text-cream-200">Premium table settings and linens</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="font-poppins text-cream-200">Contemporary art and décor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="font-poppins text-cream-200">Comfortable seating for extended dining</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Restaurant ambiance"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gold-400 text-primary-900 p-4 rounded-xl shadow-lg">
                  <p className="font-playfair font-bold text-lg">Awarded</p>
                  <p className="font-poppins text-sm">Best Ambiance 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-4">
              Ready to Experience Precinct?
            </h2>
            <p className="font-poppins text-primary-700 mb-8 max-w-2xl mx-auto">
              Reserve your table today and discover why we're Melbourne's premier 
              dining destination. Whether it's an intimate dinner for two or a special 
              celebration, we'll make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105">
                Book a Table
              </button>
              <button className="bg-gradient-to-r from-primary-800 to-primary-700 text-cream-50 px-8 py-4 rounded-full font-poppins font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105">
                View Private Dining
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiningPage;