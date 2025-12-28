'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
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
              <Link href="/services" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Services</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Testimonials</Link>
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
            Our Services & Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive, evidence-based weight management solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Initial Assessment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a2744] mb-4">
                Initial Comprehensive Assessment
              </h2>
              <p className="text-xl text-gray-600">
                Your journey begins with a thorough evaluation to create your personalized treatment plan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 hover-lift">
                <h3 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center">
                  <span className="text-3xl mr-3">🩺</span>
                  Medical Evaluation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete medical history and physical examination</li>
                  <li>• Comprehensive blood work and lab panel</li>
                  <li>• Review of medications and co-morbidities</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover-lift">
                <h3 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Body Composition Analysis
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• DEXA scan for precise body composition</li>
                  <li>• Measurement of muscle mass, body fat percentage</li>
                  <li>• Bone density assessment</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover-lift">
                <h3 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔥</span>
                  Metabolic Testing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Resting Metabolic Rate (RMR) testing</li>
                  <li>• Determination of daily caloric needs</li>
                  <li>• Metabolic efficiency assessment</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover-lift">
                <h3 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center">
                  <span className="text-3xl mr-3">🥗</span>
                  Nutritional Assessment
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dietary habits and food preferences review</li>
                  <li>• Nutritional deficiencies identification</li>
                  <li>• Eating pattern analysis</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover-lift">
                <h3 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center">
                  <span className="text-3xl mr-3">💪</span>
                  Exercise Readiness
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Current fitness level assessment</li>
                  <li>• Physical limitations evaluation</li>
                  <li>• Exercise preferences and goals</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover-lift">
                <h3 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center">
                  <span className="text-3xl mr-3">🧠</span>
                  Psychological Assessment
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emotional eating patterns evaluation</li>
                  <li>• Stress and mental health screening</li>
                  <li>• Behavioral barriers identification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Our Core Services
          </h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Medical Management */}
            <div className="bg-white rounded-lg shadow-md p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">⚕️</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1a2744] mb-4">
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
                <div className="text-6xl flex-shrink-0">🥗</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1a2744] mb-4">
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
                <div className="text-6xl flex-shrink-0">💪</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1a2744] mb-4">
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
                <div className="text-6xl flex-shrink-0">🧠</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1a2744] mb-4">
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

      {/* Program Tiers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-6 text-center">
              Choose Your Program
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              We offer flexible program options to meet your unique needs and level of commitment
            </p>

            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {/* Intensive Program */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1a2744] mb-2">
                    Intensive Weight Loss Program
                  </h3>
                  <p className="text-gray-600">For significant, structured weight loss</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#1a2744] mb-2">
                    $6,500
                  </div>
                  <p className="text-gray-600">52-week program + medication costs</p>
                  <p className="text-sm text-gray-500">($125 per visit)</p>
                </div>

                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Structured multi-week program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Weekly appointments with care team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Comprehensive medical supervision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>All diagnostic testing included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Personalized meal and exercise plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Individual behavioral therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Direct team access via phone/email</span>
                  </li>
                </ul>

                <Link
                  href="/appointments"
                  className="block w-full bg-[#1a2744] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
                >
                  Get Started
                </Link>
              </div>

              {/* Maintenance Program */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1a2744] mb-2">
                    Maintenance Program
                  </h3>
                  <p className="text-gray-600">For long-term success support</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#1a2744] mb-2">
                    Custom
                  </div>
                  <p className="text-gray-600">Monthly or bi-monthly visits</p>
                </div>

                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Ongoing accountability and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Monthly or bi-monthly check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Group support sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Continued access to resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Weight monitoring and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Educational workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Lifestyle coaching</span>
                  </li>
                </ul>

                <Link
                  href="/appointments"
                  className="block w-full bg-gray-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Learn More
                </Link>
              </div>

              {/* A La Carte */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1a2744] mb-2">
                    A La Carte Services
                  </h3>
                  <p className="text-gray-600">Flexible, targeted support</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#1a2744] mb-2">
                    Varies
                  </div>
                  <p className="text-gray-600">Choose specific services</p>
                </div>

                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Select only the services you need</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Nutritional counseling sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Exercise physiology consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Behavioral therapy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Body composition testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Metabolic rate testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Flexible scheduling</span>
                  </li>
                </ul>

                <Link
                  href="/appointments"
                  className="block w-full bg-gray-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bariatric Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-[#1a2744] mb-6 text-center">
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
      <section className="py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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
                <li><a href="/#testimonials" className="hover:text-white transition">Testimonials</a></li>
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
                  <a href="mailto:info@lunenaclinic.com" className="hover:text-white transition">info@lunenaclinic.com</a>
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
                © 2025 Lunena Clinic and Therapeutics All rights reserved.
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