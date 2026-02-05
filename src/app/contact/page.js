'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
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
    alert('Thank you for your message! We\'ll respond within 2 hours.');
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
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-orange to-orange-600 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                Connect With Our Farm
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl mx-auto">
                From Cyprus orchard to your table - we're here to help with orders, questions, and farm tours
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary-orange to-orange-600 p-1 rounded-2xl h-full transform transition-transform group-hover:scale-105">
                    <div className="bg-white h-full p-8 rounded-2xl text-center">
                      <div className="text-4xl text-primary-orange mb-4">
                        <MapPin className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Visit Our Farm</h3>
                      <div className="text-gray-600 leading-relaxed">
                        Fruitland Cyprus<br />
                        Limassol District<br />
                        Cyprus, EU<br />
                        <span className="text-sm text-primary-orange font-semibold">
                          Farm tours available by appointment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-secondary-green to-green-600 p-1 rounded-2xl h-full transform transition-transform group-hover:scale-105">
                    <div className="bg-white h-full p-8 rounded-2xl text-center">
                      <div className="text-4xl text-secondary-green mb-4">
                        <Phone className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Call Direct</h3>
                      <div className="text-gray-600 leading-relaxed">
                        +357 25 123456<br />
                        Mon-Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM<br />
                        <span className="text-sm text-secondary-green font-semibold">
                          Immediate assistance available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-primary-yellow to-yellow-500 p-1 rounded-2xl h-full transform transition-transform group-hover:scale-105">
                    <div className="bg-white h-full p-8 rounded-2xl text-center">
                      <div className="text-4xl text-yellow-600 mb-4">
                        <Mail className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
                      <div className="text-gray-600 leading-relaxed">
                        info@fruitland-cy.com<br />
                        orders@fruitland-cy.com<br />
                        support@fruitland-cy.com<br />
                        <span className="text-sm text-yellow-600 font-semibold">
                          2-hour response guarantee
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-1 rounded-2xl h-full transform transition-transform group-hover:scale-105">
                    <div className="bg-white h-full p-8 rounded-2xl text-center">
                      <div className="text-4xl text-purple-600 mb-4">
                        <Clock className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Farm Hours</h3>
                      <div className="text-gray-600 leading-relaxed">
                        Mon-Fri: 7:00 AM - 5:00 PM<br />
                        Saturday: 8:00 AM - 1:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-sm text-purple-600 font-semibold">
                          Best time to visit: Early morning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map and Form Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Interactive Map */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Find Us in Cyprus</h2>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
                    <div className="bg-gray-200 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-primary-orange text-white p-6 rounded-full mb-4 inline-block">
                          <MapPin size={32} />
                        </div>
                        <p className="text-gray-600 font-semibold">Interactive Map</p>
                        <p className="text-sm text-gray-500">Limassol District, Cyprus</p>
                        <button className="mt-4 text-primary-orange font-semibold hover:text-orange-600">
                          Get Directions →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-gradient-to-r from-primary-orange to-secondary-green p-1 rounded-2xl">
                    <div className="bg-white rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Follow Our Journey</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <a href="#" className="group">
                          <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-orange hover:text-white transition-all">
                            <Facebook className="mx-auto mb-2" />
                            <div className="text-sm font-medium">Facebook</div>
                          </div>
                        </a>
                        <a href="#" className="group">
                          <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-orange hover:text-white transition-all">
                            <Instagram className="mx-auto mb-2" />
                            <div className="text-sm font-medium">Instagram</div>
                          </div>
                        </a>
                        <a href="#" className="group">
                          <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-orange hover:text-white transition-all">
                            <Linkedin className="mx-auto mb-2" />
                            <div className="text-sm font-medium">LinkedIn</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                          placeholder="+357 99 123456"
                        />
                      </div>

                      <div>
                        <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                          Product Interest
                        </label>
                        <select
                          id="productInterest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="oranges">Premium Oranges</option>
                          <option value="mangoes">Sweet Mangoes</option>
                          <option value="avocados">Premium Avocados</option>
                          <option value="mandarins">Sweet Mandarins</option>
                          <option value="wholesale">Wholesale Orders</option>
                          <option value="farm-tour">Farm Tour Request</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Quick response:</span> Within 2 hours
                      </p>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-primary-orange to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all flex items-center space-x-3 shadow-lg"
                      >
                        <Send size={20} />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-16 bg-gradient-to-r from-secondary-green to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">2 Hours</div>
                  <div className="text-lg opacity-90">Email Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Same Day</div>
                  <div className="text-lg opacity-90">Order Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2-3 Days</div>
                  <div className="text-lg opacity-90">Delivery Time</div>
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