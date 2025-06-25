import React from 'react';
import { Calendar, Music, Utensils, Users } from 'lucide-react';

const WhatsOnPage: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Live Jazz Nights',
      description: 'Enjoy smooth jazz performances while dining',
      date: 'Every Friday',
      time: '7:00 PM - 10:00 PM',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      icon: Music,
      category: 'Entertainment'
    },
    {
      id: 2,
      title: 'Wine Tasting Dinner',
      description: '5-course meal paired with premium wines',
      date: 'March 15, 2024',
      time: '6:30 PM',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      icon: Utensils,
      category: 'Special Event'
    },
    {
      id: 3,
      title: 'Sunday Brunch',
      description: 'Extended brunch menu with bottomless mimosas',
      date: 'Every Sunday',
      time: '10:00 AM - 3:00 PM',
      image: 'https://images.pexels.com/photos/1192035/pexels-photo-1192035.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      icon: Calendar,
      category: 'Weekly Special'
    },
    {
      id: 4,
      title: 'Chef\'s Table Experience',
      description: 'Intimate dining experience with our head chef',
      date: 'Last Saturday of each month',
      time: '7:00 PM',
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      icon: Users,
      category: 'Exclusive'
    }
  ];

  const weeklySpecials = [
    {
      day: 'Monday',
      special: 'Steak Night',
      description: 'Premium cuts at special prices',
      discount: '25% off'
    },
    {
      day: 'Tuesday',
      special: 'Seafood Special',
      description: 'Fresh catch of the day',
      discount: '20% off'
    },
    {
      day: 'Wednesday',
      special: 'Wine Wednesday',
      description: 'Half price on selected bottles',
      discount: '50% off'
    },
    {
      day: 'Thursday',
      special: 'Date Night',
      description: '3-course menu for two',
      discount: '$120 for 2'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-primary-900 mb-4">
            What's On
          </h1>
          <p className="font-poppins text-lg text-primary-700 max-w-2xl mx-auto">
            Discover our exciting events, weekly specials, and live entertainment
          </p>
        </div>

        {/* Featured Events */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-gold-400 text-primary-900 px-3 py-1 rounded-full">
                      <span className="font-poppins font-semibold text-sm">{event.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-cream-50">
                      <div className="flex items-center space-x-2 mb-1">
                        <IconComponent size={20} />
                        <span className="font-poppins font-semibold">{event.date}</span>
                      </div>
                      <p className="font-poppins text-sm">{event.time}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-xl text-primary-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="font-poppins text-primary-600 leading-relaxed">
                      {event.description}
                    </p>
                    <button className="mt-4 bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-6 py-2 rounded-full font-poppins font-medium hover:from-gold-400 hover:to-gold-300 transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Weekly Specials */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-8 text-center">
            Weekly Specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklySpecials.map((special, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <h3 className="font-playfair font-bold text-xl text-primary-900 mb-2">
                    {special.day}
                  </h3>
                  <h4 className="font-poppins font-semibold text-gold-600 mb-3">
                    {special.special}
                  </h4>
                  <p className="font-poppins text-primary-600 text-sm mb-4">
                    {special.description}
                  </p>
                  <div className="bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-4 py-2 rounded-full font-poppins font-bold text-sm">
                    {special.discount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Calendar */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8">
            <h2 className="font-playfair font-bold text-3xl text-cream-50 mb-6 text-center">
              Upcoming Events Calendar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-playfair font-bold text-2xl text-gold-400 mb-2">
                  March 15
                </div>
                <h3 className="font-poppins font-semibold text-cream-50 mb-2">
                  Wine Tasting Dinner
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  5-course paired dinner
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-playfair font-bold text-2xl text-gold-400 mb-2">
                  March 22
                </div>
                <h3 className="font-poppins font-semibold text-cream-50 mb-2">
                  Whiskey Masterclass
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  Learn from our sommelier
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-playfair font-bold text-2xl text-gold-400 mb-2">
                  March 30
                </div>
                <h3 className="font-poppins font-semibold text-cream-50 mb-2">
                  Chef's Table
                </h3>
                <p className="font-poppins text-cream-200 text-sm">
                  Exclusive 8-course experience
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105">
                Book Event Tickets
              </button>
            </div>
          </div>
        </section>

        {/* Live Music Schedule */}
        <section>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-playfair font-bold text-3xl text-primary-900 mb-6 text-center">
              Live Music Schedule
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-l-4 border-gold-400 bg-cream-50 rounded-r-lg">
                <div>
                  <h3 className="font-poppins font-semibold text-primary-900">The Melbourne Jazz Trio</h3>
                  <p className="font-poppins text-primary-600 text-sm">Contemporary jazz and classics</p>
                </div>
                <div className="text-right">
                  <p className="font-poppins font-semibold text-gold-600">Friday, March 8</p>
                  <p className="font-poppins text-primary-600 text-sm">7:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-l-4 border-gold-400 bg-cream-50 rounded-r-lg">
                <div>
                  <h3 className="font-poppins font-semibold text-primary-900">Sarah Chen Acoustic</h3>
                  <p className="font-poppins text-primary-600 text-sm">Folk and indie acoustic sets</p>
                </div>
                <div className="text-right">
                  <p className="font-poppins font-semibold text-gold-600">Friday, March 15</p>
                  <p className="font-poppins text-primary-600 text-sm">7:30 PM - 9:30 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-l-4 border-gold-400 bg-cream-50 rounded-r-lg">
                <div>
                  <h3 className="font-poppins font-semibold text-primary-900">The Blues Brothers Tribute</h3>
                  <p className="font-poppins text-primary-600 text-sm">Classic blues and soul music</p>
                </div>
                <div className="text-right">
                  <p className="font-poppins font-semibold text-gold-600">Friday, March 22</p>
                  <p className="font-poppins text-primary-600 text-sm">8:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatsOnPage;