'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Link href="/testimonials" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Testimonials</Link>
            </div>
            
            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <span className="text-xl font-medium text-gray-900">Lunena Clinic and Therapeutics</span>
            </Link>
            
            {/* Right Menu Items */}
            <div className="flex space-x-8">
              <a href="/appointments" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Book Appointment</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Patient Portal</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-[#1a2744] mb-6">
            Patient Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people who achieved lasting weight loss with our program
          </p>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Featured Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Video Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-16 text-center">
            What Our Patients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-6">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-6 text-center">
            Transformation Gallery
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            See the incredible transformations of our patients (with their permission)
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of patients who have transformed their lives with our comprehensive weight loss program.
          </p>
          <Link 
            href="/appointments"
            className="inline-block bg-[#1a2744] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#2a3754] transition"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white py-12 border-t border-gray-700">
        <div className="container mx-auto px-6">
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