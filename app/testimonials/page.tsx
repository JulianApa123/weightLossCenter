'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Testimonials() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 md:px-6 max-w-full py-6">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Left Menu Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Services</Link>
              <Link href="/testimonials" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Testimonials</Link>
            </div>
            
            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <span className="text-base md:text-xl font-medium text-gray-900">Lunena Clinic<span className="hidden lg:inline"> and Therapeutics</span></span>
            </Link>
            
            {/* Desktop Right Menu Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/appointments" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Book Appointment</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Patient Portal</a>
            </div>

            {/* Mobile Book Appointment Button */}
            <Link href="/appointments" className="md:hidden bg-[#1a2744] text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              Book
            </Link>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <Link href="/" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Home</Link>
              <Link href="/about" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">About Us</Link>
              <Link href="/services" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Services</Link>
              <Link href="/testimonials" className="block text-gray-900 font-semibold py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Book Appointment</Link>
              <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">Patient Portal</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-12 md:py-12 md:py-20">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a2744] mb-4 md:mb-6">
            Patient Success Stories
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto w-full">
            Real transformations from real people who achieved lasting weight loss with our program
          </p>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Featured Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto w-full">
            {/* Featured Story 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="bg-gray-300 h-96 flex items-center justify-center">
                <p className="text-3xl text-gray-500 font-medium">Coming Soon...</p>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a2744]">[Name]</h3>
                    <p className="text-gray-600">Lost [X] lbs in [X] months</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Patient testimonial quote will go here..."
                </p>
                <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
              </div>
            </div>

            {/* Featured Story 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="bg-gray-300 h-96 flex items-center justify-center">
                <p className="text-3xl text-gray-500 font-medium">Coming Soon...</p>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a2744]">[Name]</h3>
                    <p className="text-gray-600">Lost [X] lbs in [X] months</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Patient testimonial quote will go here..."
                </p>
                <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 md:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Video Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
            {/* Video 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-white text-xl">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">[Patient Name]</h3>
                <p className="text-gray-600">Weight loss journey overview</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-white text-xl">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">[Patient Name]</h3>
                <p className="text-gray-600">Weight loss journey overview</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-white text-xl">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">[Patient Name]</h3>
                <p className="text-gray-600">Weight loss journey overview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-16 text-center">
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 shadow-md hover-lift">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-4">
                  "Patient testimonial will go here. This will be their story about how the program helped them achieve their weight loss goals..."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-bold text-[#1a2744]">[Patient Name]</p>
                    <p className="text-sm text-gray-600">Lost [X] lbs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 md:py-12 md:py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Results Speak For Themselves
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">[X]+</div>
              <p className="text-xl text-gray-300">Patients Helped</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">[X]%</div>
              <p className="text-xl text-gray-300">Success Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">[X] lbs</div>
              <p className="text-xl text-gray-300">Average Weight Loss</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">[X]%</div>
              <p className="text-xl text-gray-300">Maintained Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-12 md:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-6 text-center">
            Transformation Gallery
          </h2>
          <p className="text-base md:text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto w-full">
            See the incredible transformations of our patients (with their permission)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
                <div className="grid grid-cols-2">
                  <div className="bg-gray-300 h-64 flex items-center justify-center border-r-2 border-white">
                    <p className="text-gray-500 font-medium">Before</p>
                  </div>
                  <div className="bg-gray-300 h-64 flex items-center justify-center">
                    <p className="text-gray-500 font-medium">After</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="font-bold text-[#1a2744]">[Patient Name]</p>
                  <p className="text-gray-600">Lost [X] lbs in [X] months</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto w-full">
            Join hundreds of patients who have transformed their lives with our comprehensive weight loss program.
          </p>
          <Link 
            href="/appointments"
            className="inline-block w-full md:w-auto bg-[#1a2744] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-xl font-semibold hover:bg-[#2a3754] transition"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white py-12 border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - Logo & About */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <span className="text-xl font-semibold">Lunena Clinic and Therapeutics</span>
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
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>18255 Brookhurst St., Suite 100<br />Fountain Valley, CA 92708</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="tel:555-123-4567" className="hover:text-white transition">(555) 123-4567</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
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
                  <a href="#" className="hover:opacity-70 transition"><Facebook className="w-6 h-6" /></a>
                  <a href="#" className="hover:opacity-70 transition"><Instagram className="w-6 h-6" /></a>
                  <a href="#" className="hover:opacity-70 transition"><Linkedin className="w-6 h-6" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Lunena Clinic and Therapeutics Inc. All rights reserved.
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