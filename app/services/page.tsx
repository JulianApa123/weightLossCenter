'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Stethoscope, Activity, Flame, Salad, Dumbbell, Brain, Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
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
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Testimonials</Link>
            </div>
            
            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <span className="text-base md:text-xl font-medium text-gray-900">Lumena Clinic<span className="hidden lg:inline"> and Therapeutics</span></span>
            </Link>
            
            {/* Desktop Right Menu Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/appointments" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Book Appointment</Link>
              <Link href="/patient-portal" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Patient Portal</Link>
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
              <Link href="/testimonials" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Book Appointment</Link>
              <Link href="/patient-portal" className="block text-gray-700 hover:text-gray-900 py-2">Patient Portal</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-12 md:py-12 md:py-20">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a2744] mb-4 md:mb-6">
            Our Services & Programs
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto w-full">
            Comprehensive, evidence-based weight management solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Initial Assessment Section */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-4">
                Initial Comprehensive Evaluation
              </h2>
              <p className="text-base md:text-xl text-gray-600 mb-8">
                Medical Evaluation with Dr. Aparnath followed by a customized series of evaluations tailored to patient needs.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#1a2744] p-6 text-left max-w-3xl mx-auto">
                <p className="text-gray-700 mb-2">
                  <strong>Investment in Your Health:</strong> The initial consultation fee will be credited toward your customized treatment plan pricing.
                </p>
                <p className="text-sm text-gray-600">
                  Contact us to discuss pricing tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a2744] mb-6 text-center">
                Your Comprehensive First Evaluation Includes:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Evaluation 1 */}
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift border-l-4 border-[#1a2744]">
                  <div className="flex items-start gap-4">
                    <Stethoscope className="w-10 h-10 text-[#1a2744] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                        Full Evaluation with Licensed Physician
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <em>Not a Mid-Level Provider</em>
                      </p>
                      <p className="text-gray-600">
                        Comprehensive medical assessment with Dr. Aparnath to understand your complete health picture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation 2 */}
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift border-l-4 border-[#1a2744]">
                  <div className="flex items-start gap-4">
                    <Activity className="w-10 h-10 text-[#1a2744] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                        Full Comprehensive Laboratory Exam
                      </h4>
                      <p className="text-gray-600">
                        Complete blood work and diagnostic testing to identify underlying health factors affecting your weight.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation 3 */}
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift border-l-4 border-[#1a2744]">
                  <div className="flex items-start gap-4">
                    <Activity className="w-10 h-10 text-[#1a2744] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                        Full Professional Medical BodyDexa Scan
                      </h4>
                      <p className="text-gray-600">
                        Precise body composition analysis measuring muscle mass, body fat percentage, and bone density.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation 4 */}
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift border-l-4 border-[#1a2744]">
                  <div className="flex items-start gap-4">
                    <Salad className="w-10 h-10 text-[#1a2744] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                        Licensed Nutriology Consultation
                      </h4>
                      <p className="text-gray-600">
                        Personalized nutritional assessment and guidance from our licensed nutrition specialist.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation 5 */}
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift border-l-4 border-[#1a2744]">
                  <div className="flex items-start gap-4">
                    <Dumbbell className="w-10 h-10 text-[#1a2744] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                        Certified Fitness Consultation
                      </h4>
                      <p className="text-gray-600">
                        Exercise assessment and personalized fitness planning with our certified exercise physiologist.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation 6 */}
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift border-l-4 border-[#1a2744]">
                  <div className="flex items-start gap-4">
                    <Brain className="w-10 h-10 text-[#1a2744] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2744] mb-2">
                        Emotional Support Counseling
                      </h4>
                      <p className="text-gray-600">
                        Behavioral health assessment addressing emotional eating patterns and psychological factors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/appointments"
                className="inline-block bg-[#1a2744] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#2a3754] transition transform hover:scale-105"
              >
                Schedule Your Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 md:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Our Core Services
          </h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Medical Management */}
            <div className="bg-white rounded-lg shadow-md p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Heart className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-4">
                    Medical Evaluation & Management
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Physician-led medical oversight ensures safe and effective weight loss, especially for patients 
                    with co-morbidities such as diabetes, hypertension, or sleep apnea.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Regular physician consultations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Medication management and review
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Prescription weight loss medications (when appropriate)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Management of obesity-related conditions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Ongoing monitoring and adjustments
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Coordination with other specialists
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nutritional Programs */}
            <div className="bg-white rounded-lg shadow-md p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Salad className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-4">
                    Personalized Nutritional Programs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our registered dietitians create individualized meal plans based on your preferences, 
                    lifestyle, and medical needs—not one-size-fits-all diets.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Customized meal planning
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Portion control education
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Healthy food choices guidance
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Mindful eating techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Individual and group counseling
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Nutrition education workshops
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exercise Programs */}
            <div className="bg-white rounded-lg shadow-md p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Dumbbell className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-4">
                    Structured Exercise Programs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Certified exercise physiologists design safe, effective exercise routines tailored to your 
                    fitness level, physical limitations, and personal preferences.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Personalized exercise prescriptions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Supervised exercise sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Home exercise program development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Progress tracking and adjustments
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Safe exercise for medical conditions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Strength and cardiovascular training
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Behavioral Health */}
            <div className="bg-white rounded-lg shadow-md p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Brain className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-4">
                    Behavioral Health Support
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Licensed therapists address the psychological aspects of weight loss, helping you overcome 
                    emotional eating, build healthy habits, and maintain motivation.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Individual therapy sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Group support therapy
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Emotional eating intervention
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Stress management techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Body image counseling
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Cognitive behavioral therapy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Bariatric Support Section */}
      <section className="py-12 md:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-6 text-center">
              Bariatric Surgery Support
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide comprehensive pre-operative and post-operative support for patients considering 
              or recovering from bariatric surgery.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-4">Pre-Operative Support:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Medical clearance and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Pre-surgery weight loss guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Nutritional preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Psychological readiness assessment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-4">Post-Operative Support:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Recovery monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Dietary progression guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Long-term nutritional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Lifestyle maintenance coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-12 md:py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto w-full">
            Schedule your comprehensive assessment and discover which program is right for you.
          </p>
          <Link 
            href="/appointments"
            className="inline-block bg-white text-[#1a2744] px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition"
          >
            Book Your Assessment
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
                <span className="text-xl font-semibold">Lumena Clinic and Therapeutics</span>
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