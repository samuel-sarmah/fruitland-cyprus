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
        <section className="bg-yellow-600 text-white pt-18">
          <div className="container px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold mb-2 font-display">
                Connect With Our Farm
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95  mx-auto py-2">
                From Cyprus orchard to your table - we're here to help with orders, questions, and farm tours
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 pt-0">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>

                  {/* Social Media */}
                  <div>
                    <div className="bg-white rounded-2xl p-0">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Follow Our Journey</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <a href="#" className="group">
                          <div className="bg-gray-200 p-4 rounded-lg text-center ">
                            <Facebook className="mx-auto mb-2" />
                            <div className="text-sm font-medium">Facebook</div>
                          </div>
                        </a>
                        <a href="#" className="group">
                          <div className="bg-gray-200 p-4 rounded-lg text-center ">
                            <Instagram className="mx-auto mb-2" />
                            <div className="text-sm font-medium">Instagram</div>
                          </div>
                        </a>
                        <a href="#" className="group">
                          <div className="bg-gray-200 p-4 rounded-lg text-center ">
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
                  <h2 className="text-xl font-bold text-gray-900">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
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
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
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

                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="2"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                      </p>
                      <button
                        type="submit"
                        className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all flex items-center space-x-3 shadow-lg"
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
      </main>
      <Footer />
    </div>
  );
}