'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, Activity, Wind, Users, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import BackToTop from '@/components/BackToTop';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    document.title = "Our Services | Lumena Clinic and Therapeutics";
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
              <Link href="/services" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Services</Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">FAQ</Link>
            </div>
            
            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Lumena Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0" />
              <span className="text-base md:text-xl font-medium text-gray-900">Lumena Clinic<span className="hidden lg:inline"> and Therapeutics</span></span>
            </Link>
            
            {/* Desktop Right Menu Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Testimonials</Link>
              <Link href="/appointments" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Book Appointment</Link>
              <Link href="/portal/login" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Patient Portal</Link>
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
              <Link href="/services" className="block text-gray-900 font-semibold py-2 border-b border-gray-200">Services</Link>
              <Link href="/faq" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">FAQ</Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Book Appointment</Link>
              <Link href="/portal/login" className="block text-gray-700 hover:text-gray-900 py-2">Patient Portal</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#2a3754] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Physician-led, evidence-based obesity treatment focused on comprehensive evaluation and individualized care.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Comprehensive Obesity & Weight Management */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Icon */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 md:w-12 md:h-12 text-[#1a2744]" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
                  Comprehensive Obesity & Weight Management
                </h2>
                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Physician-led evaluation of obesity as a multisystem disease</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Evidence-based medical weight management, including GLP-1 / GIP-based therapies when clinically appropriate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Focus on sustainable outcomes rather than short-term weight change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Cardiometabolic Risk Assessment */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Icon */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                  <Activity className="w-10 h-10 md:w-12 md:h-12 text-[#1a2744]" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
                  Cardiometabolic Risk Assessment
                </h2>
                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Cardiovascular risk evaluation in the context of obesity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Metabolic risk assessment, including diabetes and fatty liver disease</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Long-term risk reduction strategy aligned with individual physiology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Pulmonary & Functional Performance Evaluation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Icon */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center">
                  <Wind className="w-10 h-10 md:w-12 md:h-12 text-[#1a2744]" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
                  Pulmonary & Functional Performance Evaluation
                </h2>
                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Assessment of pulmonary risk and exercise capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Identification of physiologic limitations affecting weight loss and health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Performance-oriented approach to improving functional capacity and durability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Personalized Health Strategy & Follow-Up */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Icon */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-[#1a2744]" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
                  Personalized Health Strategy & Follow-Up
                </h2>
                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Individualized care plans based on objective assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Ongoing physician oversight as appropriate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a2744] font-bold mr-3">•</span>
                    <span>Thoughtful coordination with other specialists when indicated to ensure continuity of care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a2744] to-[#2a3754] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Schedule a comprehensive evaluation to understand your health and develop a personalized treatment strategy.
            </p>
            <Link 
              href="/appointments"
              className="inline-block bg-white text-[#1a2744] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Schedule Your Evaluation
            </Link>
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
                <img src="/logo.jpg" alt="Lumena Logo" className="w-12 h-12 object-contain" />
                <span className="text-xl font-semibold">Lumena Clinic and Therapeutics</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Physician-led obesity treatment center focused on comprehensive evaluation and individualized care.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
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
                © 2025 Lumena Clinic and Therapeutics Inc. All rights reserved.
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