import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
  };

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-taupe-900 mb-4">
            Contact & Reservations
          </h1>
          <p className="font-poppins text-lg text-taupe-700 max-w-2xl mx-auto">
            Get in touch with us to make a reservation or inquire about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="font-playfair font-bold text-2xl text-taupe-900 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-taupe-500 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-1">
                      Address
                    </h3>
                    <p className="font-poppins text-taupe-700">
                      123 Gourmet Street<br />
                      Downtown District<br />
                      Melbourne, VIC 3000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-taupe-500 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-1">
                      Phone
                    </h3>
                    <p className="font-poppins text-taupe-700">
                      (03) 9123 4567<br />
                      <span className="text-sm text-taupe-600">
                        Reservations & General Inquiries
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-taupe-500 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-1">
                      Email
                    </h3>
                    <p className="font-poppins text-taupe-700">
                      hello@precinctbar.com<br />
                      <span className="text-sm text-taupe-600">
                        We'll respond within 24 hours
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-taupe-500 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-1">
                      Opening Hours
                    </h3>
                    <div className="font-poppins text-taupe-700 space-y-1">
                      <p><span className="font-medium">Mon - Thu:</span> 5:00 PM - 11:00 PM</p>
                      <p><span className="font-medium">Fri - Sat:</span> 5:00 PM - 12:00 AM</p>
                      <p><span className="font-medium">Sunday:</span> 12:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-playfair font-bold text-xl text-taupe-900 mb-4">
                Find Us
              </h3>
              <div className="bg-cream-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-taupe-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-poppins">Interactive Map</p>
                  <p className="font-poppins text-sm">123 Gourmet Street, Melbourne</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-gradient-to-r from-taupe-600 to-rose-500 text-white px-6 py-3 rounded-full font-poppins font-medium hover:from-taupe-700 hover:to-rose-600 transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="font-playfair font-bold text-2xl text-taupe-900 mb-6">
              Make a Reservation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-poppins font-medium text-taupe-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-poppins font-medium text-taupe-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-poppins font-medium text-taupe-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                  placeholder="(03) 1234 5678"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="date" className="block font-poppins font-medium text-taupe-900 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block font-poppins font-medium text-taupe-900 mb-2">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                  >
                    <option value="">Select time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block font-poppins font-medium text-taupe-900 mb-2">
                    Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                  >
                    <option value="">Number of guests</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="13+">13+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className="block font-poppins font-medium text-taupe-900 mb-2">
                  Special Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins"
                >
                  <option value="">Select occasion (optional)</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="business">Business Dinner</option>
                  <option value="date">Date Night</option>
                  <option value="celebration">Celebration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-poppins font-medium text-taupe-900 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-taupe-200 rounded-lg focus:outline-none focus:border-gold-400 font-poppins resize-none"
                  placeholder="Any dietary requirements, seating preferences, or special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-taupe-500 to-rose-400 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:from-taupe-600 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Reservation Request</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-cream-100 rounded-lg">
              <p className="font-poppins text-taupe-700 text-sm">
                <strong>Please note:</strong> This is a reservation request. We will contact you 
                within 24 hours to confirm your booking. For immediate assistance, please call us 
                at (03) 9123 4567.
              </p>
            </div>
          </div> */}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="h-12 w-12 text-gold-400 mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-2">
              Advance Booking
            </h3>
            <p className="font-poppins text-taupe-600 text-sm">
              We recommend booking at least 2-3 days in advance, especially for weekends and special occasions.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="h-12 w-12 text-gold-400 mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-2">
              Cancellation Policy
            </h3>
            <p className="font-poppins text-taupe-600 text-sm">
              Please provide at least 24 hours notice for cancellations. Same-day cancellations may incur a fee.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Users className="h-12 w-12 text-gold-400 mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-lg text-taupe-900 mb-2">
              Large Groups
            </h3>
            <p className="font-poppins text-taupe-600 text-sm">
              For parties of 8 or more, please call us directly to discuss seating arrangements and menu options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;