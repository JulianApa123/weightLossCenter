'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Lock, Calendar, FileText, MessageSquare } from 'lucide-react';
import BackToTop from '@/components/BackToTop';

export default function PatientPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Patient Portal | Lunena Clinic and Therapeutics";
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
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Testimonials</Link>
            </div>
            
            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <span className="text-base md:text-xl font-medium text-gray-900">Lunena Clinic<span className="hidden lg:inline"> and Therapeutics</span></span>
            </Link>
            
            {/* Desktop Right Menu Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/appointments" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Book Appointment</Link>
              <Link href="/patient-portal" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Patient Portal</Link>
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
              <Link href="/testimonials" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Book Appointment</Link>
              <Link href="/patient-portal" className="block text-gray-900 font-semibold py-2">Patient Portal</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#1a2744] to-[#2a3754] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Lock className="w-20 h-20 text-white/80" strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Patient Portal
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Secure access to your health information, appointments, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-4xl mx-auto">
            {/* Coming Soon Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-12 text-center mb-12 shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-4">
                Coming Soon!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our secure patient portal is currently under development. Soon you'll be able to access all your health information in one convenient place.
              </p>
              <p className="text-gray-600">
                We're working hard to bring you the best experience possible. Check back soon!
              </p>
            </div>

            {/* What to Expect */}
            <h3 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-8 text-center">
              What You Can Expect
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-lg p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-12 h-12 text-[#1a2744]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                      Appointment Management
                    </h4>
                    <p className="text-gray-700">
                      Schedule, reschedule, and view upcoming appointments at your convenience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-lg p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-12 h-12 text-[#1a2744]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                      Lab Results & Records
                    </h4>
                    <p className="text-gray-700">
                      Access your test results, DEXA scans, and medical records securely online.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-lg p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <MessageSquare className="w-12 h-12 text-[#1a2744]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                      Secure Messaging
                    </h4>
                    <p className="text-gray-700">
                      Communicate directly with your care team through secure, encrypted messages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-50 rounded-lg p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Lock className="w-12 h-12 text-[#1a2744]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                      Privacy & Security
                    </h4>
                    <p className="text-gray-700">
                      Your health information protected with bank-level encryption and HIPAA compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#1a2744] text-white rounded-lg p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                New Patient?
              </h3>
              <p className="text-gray-200 mb-6">
                Start your journey with us today. Book your initial assessment to get started.
              </p>
              <Link 
                href="/appointments" 
                className="inline-block bg-white text-[#1a2744] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Book Your Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
                <li><Link href="/appointments" className="hover:text-white transition">Book Appointment</Link></li>
              </ul>
            </div>

            {/* Column 3 - Contact */}
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
                  <a href="#" className="hover:opacity-70 transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition">
                    <Linkedin className="w-6 h-6" />
                  </a>
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
      <BackToTop />
    </div>
  );
}