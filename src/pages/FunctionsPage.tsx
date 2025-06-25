import React, { useState } from 'react';
import { Users, Calendar, Utensils, Music, Wine, Star, Clock, MapPin } from 'lucide-react';

const FunctionsPage: React.FC = () => {
  const [activePackage, setActivePackage] = useState('corporate');

  const eventTypes = [
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional meetings, conferences, and team building events'
    },
    {
      icon: Calendar,
      title: 'Private Celebrations',
      description: 'Birthdays, anniversaries, and milestone celebrations'
    },
    {
      icon: Wine,
      title: 'Wedding Functions',
      description: 'Engagement parties, rehearsal dinners, and intimate weddings'
    },
    {
      icon: Music,
      title: 'Special Occasions',
      description: 'Holiday parties, product launches, and themed events'
    }
  ];

  const packages = {
    corporate: {
      title: 'Corporate Packages',
      subtitle: 'Professional events tailored to your business needs',
      options: [
        {
          name: 'Executive Lunch',
          people: '8-15 guests',
          duration: '2 hours',
          price: 'From $85 per person',
          features: [
            '3-course set menu',
            'Premium wine selection',
            'Private dining room',
            'A/V equipment included',
            'Dedicated service staff'
          ]
        },
        {
          name: 'Board Meeting Package',
          people: '6-12 guests',
          duration: '4 hours',
          price: 'From $120 per person',
          features: [
            'Private boardroom',
            'Catered breakfast & lunch',
            'Coffee & tea service',
            'Presentation facilities',
            'High-speed WiFi'
          ]
        },
        {
          name: 'Team Building Dinner',
          people: '15-40 guests',
          duration: '3 hours',
          price: 'From $95 per person',
          features: [
            'Semi-private dining area',
            'Interactive dining experience',
            'Welcome cocktails',
            'Shared plates menu',
            'Team activity coordination'
          ]
        }
      ]
    },
    private: {
      title: 'Private Celebrations',
      subtitle: 'Make your special moments unforgettable',
      options: [
        {
          name: 'Intimate Celebration',
          people: '6-20 guests',
          duration: '3 hours',
          price: 'From $110 per person',
          features: [
            'Private dining room',
            'Customized menu',
            'Champagne welcome',
            'Birthday cake service',
            'Special decorations'
          ]
        },
        {
          name: 'Milestone Party',
          people: '20-50 guests',
          duration: '4 hours',
          price: 'From $125 per person',
          features: [
            'Semi-private venue hire',
            'Cocktail reception',
            '4-course dinner',
            'Live music arrangement',
            'Photography coordination'
          ]
        },
        {
          name: 'Anniversary Dinner',
          people: '2-30 guests',
          duration: '3 hours',
          price: 'From $150 per person',
          features: [
            'Romantic private setting',
            'Chef\'s tasting menu',
            'Wine pairing',
            'Floral arrangements',
            'Personalized service'
          ]
        }
      ]
    },
    wedding: {
      title: 'Wedding Functions',
      subtitle: 'Elegant celebrations for your special day',
      options: [
        {
          name: 'Engagement Party',
          people: '30-80 guests',
          duration: '4 hours',
          price: 'From $135 per person',
          features: [
            'Full venue hire',
            'Cocktail & canapé service',
            '3-course dinner',
            'Bridal suite access',
            'Wedding cake cutting'
          ]
        },
        {
          name: 'Rehearsal Dinner',
          people: '15-40 guests',
          duration: '3 hours',
          price: 'From $120 per person',
          features: [
            'Private dining room',
            'Welcome drinks',
            'Family-style dining',
            'Speech facilities',
            'Rehearsal coordination'
          ]
        },
        {
          name: 'Intimate Wedding',
          people: '20-60 guests',
          duration: '6 hours',
          price: 'From $180 per person',
          features: [
            'Ceremony space',
            'Bridal preparation room',
            'Full reception service',
            'Wedding coordinator',
            'Photography locations'
          ]
        }
      ]
    }
  };

  const packageCategories = [
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'private', name: 'Private Celebrations' },
    { id: 'wedding', name: 'Wedding Functions' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-primary-900 mb-4">
            Functions & Events
          </h1>
          <p className="font-poppins text-lg text-primary-700 max-w-2xl mx-auto">
            Create unforgettable moments with our bespoke event services and private dining experiences
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Private dining event"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-cream-50 max-w-2xl px-4">
              <h2 className="font-playfair font-bold text-3xl lg:text-5xl mb-4">
                Private Events
              </h2>
              <p className="font-poppins text-lg">
                Exceptional venues for your most important occasions
              </p>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Event Types We Host
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-br from-gold-500 to-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-900" />
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-primary-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="font-poppins text-primary-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Packages Section */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Event Packages
          </h2>
          
          {/* Package Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {packageCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActivePackage(category.id)}
                className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                  activePackage === category.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 shadow-lg transform scale-105'
                    : 'bg-white text-primary-700 hover:bg-gold-50 hover:text-primary-900 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Package Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-playfair font-bold text-2xl text-primary-900 mb-2">
                {packages[activePackage as keyof typeof packages].title}
              </h3>
              <p className="font-poppins text-primary-700">
                {packages[activePackage as keyof typeof packages].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages[activePackage as keyof typeof packages].options.map((option, index) => (
                <div
                  key={index}
                  className="border border-primary-200 rounded-xl p-6 hover:border-gold-400 transition-colors duration-300"
                >
                  <h4 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                    {option.name}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-primary-600">
                      <Users size={16} />
                      <span className="font-poppins text-sm">{option.people}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-600">
                      <Clock size={16} />
                      <span className="font-poppins text-sm">{option.duration}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-playfair font-bold text-lg text-gold-600">
                      {option.price}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                        <span className="font-poppins text-primary-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-primary-800 to-primary-700 text-cream-50 py-3 rounded-lg font-poppins font-medium hover:from-primary-700 hover:to-primary-600 transition-all duration-300">
                    Enquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Spaces */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Event Spaces
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Private dining room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                  Private Dining Room
                </h3>
                <p className="font-poppins text-primary-600 mb-4">
                  Intimate space perfect for business meetings or small celebrations. 
                  Features state-of-the-art A/V equipment and elegant décor.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm font-poppins text-primary-700">
                  <div>
                    <span className="font-semibold">Capacity:</span> 6-15 guests
                  </div>
                  <div>
                    <span className="font-semibold">Setup:</span> Boardroom style
                  </div>
                  <div>
                    <span className="font-semibold">Features:</span> A/V equipment
                  </div>
                  <div>
                    <span className="font-semibold">Ambiance:</span> Intimate
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Main dining area"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                  Main Dining Area
                </h3>
                <p className="font-poppins text-primary-600 mb-4">
                  Spacious main dining room available for larger events and celebrations. 
                  Can be configured for various event styles and group sizes.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm font-poppins text-primary-700">
                  <div>
                    <span className="font-semibold">Capacity:</span> 30-80 guests
                  </div>
                  <div>
                    <span className="font-semibold">Setup:</span> Flexible
                  </div>
                  <div>
                    <span className="font-semibold">Features:</span> Full bar
                  </div>
                  <div>
                    <span className="font-semibold">Ambiance:</span> Elegant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Process */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8">
            <h2 className="font-playfair font-bold text-3xl text-cream-50 mb-8 text-center">
              Event Planning Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gold-400 text-primary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-playfair font-bold text-xl">
                  1
                </div>
                <h3 className="font-playfair font-bold text-lg text-cream-50 mb-2">
                  Initial Consultation
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  Discuss your vision, requirements, and budget
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400 text-primary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-playfair font-bold text-xl">
                  2
                </div>
                <h3 className="font-playfair font-bold text-lg text-cream-50 mb-2">
                  Custom Proposal
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  Receive a tailored proposal with menu and pricing
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400 text-primary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-playfair font-bold text-xl">
                  3
                </div>
                <h3 className="font-playfair font-bold text-lg text-cream-50 mb-2">
                  Final Planning
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  Finalize details, timeline, and special requests
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400 text-primary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-playfair font-bold text-xl">
                  4
                </div>
                <h3 className="font-playfair font-bold text-lg text-cream-50 mb-2">
                  Event Execution
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  Enjoy your perfectly executed event
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="font-poppins text-primary-700 mb-8 max-w-2xl mx-auto">
              Our experienced events team is ready to help you create an unforgettable 
              experience. Contact us today to discuss your requirements and receive a 
              custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105">
                Request Proposal
              </button>
              <button className="bg-gradient-to-r from-primary-800 to-primary-700 text-cream-50 px-8 py-4 rounded-full font-poppins font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105">
                Schedule Viewing
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-primary-600">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="font-poppins text-sm">123 Gourmet Street</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span className="font-poppins text-sm">(03) 9123 4567</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FunctionsPage;