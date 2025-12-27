'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Appointments() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly to confirm your appointment.');
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Left Menu Items */}
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Services</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Testimonials</Link>
            </div>
            
            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <span className="text-xl font-medium text-gray-900">Lumena Clinic</span>
            </Link>
            
            {/* Right Menu Items */}
            <div className="flex space-x-8">
              <Link href="/appointments" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Book Appointment</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Patient Portal</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#1a2744] mb-6">
            Schedule Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward lasting weight loss. Book your comprehensive assessment today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-3xl font-bold text-[#1a2744] mb-6">
                Request an Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will contact you within 24 hours to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Appointment Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Appointment Type *
                  </label>
                  <select
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                  >
                    <option value="">Select an option</option>
                    <option value="initial">Initial Comprehensive Assessment</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="followup">Follow-up Appointment</option>
                    <option value="seminar">Weight Loss Seminar</option>
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 3pm)</option>
                      <option value="evening">Evening (3pm - 6pm)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                    placeholder="Tell us about your goals or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1a2744] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#2a3754] transition"
                >
                  Request Appointment
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-[#1a2744] text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">📍</span>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-gray-300">
                        18255 Brookhurst St., Suite 100<br />
                        Fountain Valley, CA 92708
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:555-123-4567" className="text-gray-300 hover:text-white transition">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">✉️</span>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@lumenaclinic.com" className="text-gray-300 hover:text-white transition">
                        info@lumenaclinic.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🕒</span>
                    <div>
                      <p className="font-semibold mb-1">Office Hours</p>
                      <p className="text-gray-300">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#1a2744] mb-6">What to Expect</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Confirmation Call</p>
                      <p className="text-sm text-gray-600">We'll call within 24 hours to confirm your appointment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Pre-Appointment Forms</p>
                      <p className="text-sm text-gray-600">Complete medical history forms before your visit</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Initial Assessment</p>
                      <p className="text-sm text-gray-600">60-90 minute comprehensive evaluation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Personalized Plan</p>
                      <p className="text-sm text-gray-600">Customized treatment plan created for you</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Insurance Info */}
              <div className="bg-blue-50 border-l-4 border-[#1a2744] p-6 rounded">
                <h4 className="font-bold text-[#1a2744] mb-2">Insurance & Payment</h4>
                <p className="text-gray-700 text-sm">
                  We work with most major insurance providers. Please bring your insurance card to your appointment. 
                  We also offer flexible payment plans for those without coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1a2744] mb-8 text-center">
            Visit Our Clinic
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0849364371887!2d-117.95624!3d33.71167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd28b0a1b1f1f1%3A0x1!2s18255%20Brookhurst%20St%20%23100%2C%20Fountain%20Valley%2C%20CA%2092708!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lumena Clinic Location"
              ></iframe>
            </div>
            <div className="mt-6 flex gap-4 justify-center">
              <a 
                href="https://maps.apple.com/?address=18255%20Brookhurst%20St,%20Suite%20100,%20Fountain%20Valley,%20CA%2092708"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400 transition"
              >
                Open in Apple Maps
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=18255+Brookhurst+St+Suite+100+Fountain+Valley+CA+92708"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white py-12">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - Logo & About */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <span className="text-xl font-semibold">Lumena Clinic</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Expert medical weight loss solutions for lasting results. Transform your health with our personalized care.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>18255 Brookhurst St., Suite 100<br />Fountain Valley, CA 92708</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:555-123-4567" className="hover:text-white transition">(555) 123-4567</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:info@lumenaclinic.com" className="hover:text-white transition">info@lumenaclinic.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Hours */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Monday - Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 2pm</li>
                <li>Sunday: Closed</li>
              </ul>
              {/* Social Icons */}
              <div className="mt-6">
                <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl hover:opacity-70 transition">📘</a>
                  <a href="#" className="text-2xl hover:opacity-70 transition">📷</a>
                  <a href="#" className="text-2xl hover:opacity-70 transition">🔗</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Lumena Clinic Inc. All rights reserved.
              </p>
              <div className="flex gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Use</a>
                <a href="#" className="hover:text-white transition">Notice of Privacy Practices</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}