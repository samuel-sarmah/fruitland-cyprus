'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productInterest: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-orange to-orange-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                We'd love to hear from you! Reach out for orders, inquiries, or just to say hello.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Our Farm</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fruitland Cyprus Farm<br />
                  Limassol District<br />
                  Cyprus, EU
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  +357 25 123456<br />
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-yellow text-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  info@fruitland-cy.com<br />
                  orders@fruitland-cy.com<br />
                  support@fruitland-cy.com
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Farm Hours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mon-Fri: 7:00 AM - 5:00 PM<br />
                  Saturday: 8:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                        placeholder="+357 99 123456"
                      />
                    </div>

                    <div>
                      <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="oranges">Premium Oranges</option>
                        <option value="mangoes">Sweet Mangoes</option>
                        <option value="avocados">Premium Avocados</option>
                        <option value="mandarins">Sweet Mandarins</option>
                        <option value="wholesale">Wholesale Orders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Find Us</h2>
                  
                  {/* Map Placeholder */}
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin size={48} className="text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">Limassol District, Cyprus</p>
                    </div>
                  </div>
                </div>

                {/* Quick Response Times */}
                <div className="bg-secondary-green text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Email Response:</span>
                      <span className="font-semibold">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone Response:</span>
                      <span className="font-semibold">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Order Processing:</span>
                      <span className="font-semibold">Same day</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Follow Us</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-primary-orange hover:text-orange-600 transition-colors">
                      Facebook: @fruitlandcyprus
                    </a>
                    <a href="#" className="block text-primary-orange hover:text-orange-600 transition-colors">
                      Instagram: @fruitland_cy
                    </a>
                    <a href="#" className="block text-primary-orange hover:text-orange-600 transition-colors">
                      LinkedIn: Fruitland Cyprus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}