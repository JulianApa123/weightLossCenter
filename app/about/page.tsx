'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function AboutUs() {
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
              <Link href="/about" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Services</Link>
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
            About Lunena Clinic and Therapeutics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert medical weight loss care dedicated to your long-term success
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                The Weight Loss Center of Excellence was established with a clear mission: to provide 
                evidence-based, personalized weight management programs that deliver sustainable results. 
                We recognize that effective weight loss requires more than just diet and exercise advice—it 
                demands integrated medical, nutritional, and behavioral support to overcome complex challenges.
              </p>
              <p>
                Our center offers a holistic approach, combining medical supervision, nutritional counseling, 
                exercise physiology, and behavioral therapy under one roof. We've built our practice around 
                a concierge model with a limited patient panel, ensuring each client receives unparalleled 
                access, individualized attention, and truly personalized care.
              </p>
              <p>
                What distinguishes us is our commitment to long-term success. We don't just help you lose 
                weight—we empower you with the tools, knowledge, and ongoing support needed to maintain 
                your results and transform your overall health for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2744] mb-16 text-center">
            Meet Our Team
          </h2>

          {/* Lead Physician */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-md p-8 hover-lift">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500">[Doctor Photo]</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#1a2744] mb-2">
                  Dr. [Name], MD
                </h3>
                <p className="text-xl text-gray-600 mb-4">Medical Director</p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Board-certified in [Specialty] with over [X] years of experience in medical 
                    weight management and metabolic health.
                  </p>
                  <p className="font-semibold text-[#1a2744]">Education & Training:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>MD from [Medical School]</li>
                    <li>Residency at [Hospital/Program]</li>
                    <li>Fellowship in [Specialty]</li>
                    <li>Board Certified in [Specialty]</li>
                  </ul>
                  <p className="font-semibold text-[#1a2744] mt-4">Philosophy:</p>
                  <p className="italic">
                    "Every patient deserves a personalized approach to weight loss that addresses 
                    their unique medical, nutritional, and psychological needs."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Team */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1a2744] mb-8 text-center">
              Our Support Team
            </h3>
            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {/* Registered Dietitian */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover-lift">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">🥗</span>
                </div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-2">
                  Registered Dietitians
                </h4>
                <p className="text-gray-600">
                  Expert nutritional guidance and personalized meal planning to support your goals
                </p>
              </div>

              {/* Behavioral Therapist */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover-lift">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">🧠</span>
                </div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-2">
                  Behavioral Therapists
                </h4>
                <p className="text-gray-600">
                  Psychological support to address emotional eating and build sustainable habits
                </p>
              </div>

              {/* Exercise Physiologist */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover-lift">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">💪</span>
                </div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-2">
                  Exercise Physiologists
                </h4>
                <p className="text-gray-600">
                  Customized physical activity plans designed for your fitness level and preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-12 text-center">
              Our Concierge Approach
            </h2>
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                We operate on a concierge model with a limited patient panel, ensuring you receive 
                unparalleled access to our team, individualized attention, and truly integrated care 
                that focuses on long-term health—not just episodic weight loss.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Evidence-Based */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">Evidence-Based</h3>
                <p className="text-gray-700">
                  Our treatments are grounded in the latest medical research and proven clinical outcomes. 
                  We utilize advanced diagnostics including DEXA scans and metabolic testing to inform 
                  every treatment decision.
                </p>
              </div>

              {/* Personalized */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">Highly Personalized</h3>
                <p className="text-gray-700">
                  Every treatment plan is customized based on your comprehensive initial assessment, 
                  including medical history, body composition, metabolism, and psychological factors.
                </p>
              </div>

              {/* Comprehensive */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">Multidisciplinary Care</h3>
                <p className="text-gray-700">
                  All specialists under one roof—physicians, registered dietitians, exercise physiologists, 
                  and behavioral therapists—working together on your customized plan.
                </p>
              </div>

              {/* Supportive */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">Enhanced Access</h3>
                <p className="text-gray-700">
                  Direct phone and email access to your care team, expedited appointments, longer 
                  consultations, and a dedicated care coordinator to streamline your entire experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Model Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-6 text-center">
              The Concierge Difference
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our membership-based concierge model ensures you receive premium, highly personalized 
              care with unparalleled access to our team.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* What's Included */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-[#1a2744] mb-6">Membership Includes:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>Direct phone and email access to your care team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>Comprehensive diagnostic testing (DEXA scan, RMR testing, lab panels)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>More frequent and longer consultations with specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>Dedicated care coordinator to streamline your experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>Exclusive educational workshops and support groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>Access to state-of-the-art facilities and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span>Advanced telehealth options and secure patient portal</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-[#1a2744] mb-6">Your Benefits:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">★</span>
                    <span>Enhanced patient-provider relationship and trust</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">★</span>
                    <span>Reduced wait times and increased convenience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">★</span>
                    <span>Improved adherence and outcomes through consistent support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">★</span>
                    <span>Proactive health management, not just episodic care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">★</span>
                    <span>Focus on preventing co-morbidities and long-term well-being</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">★</span>
                    <span>Limited patient panel ensures personalized attention</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Special Offer Callout */}
            <div className="bg-[#1a2744] text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Special Seminar Offer</h3>
              <p className="text-lg mb-2">
                Attend our weight loss seminar and receive exclusive introductory membership benefits:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 mt-6">
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Discounted initial membership fee
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Complimentary comprehensive initial assessment
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Bonus session package with our specialists
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Priority onboarding and expedited scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your comprehensive assessment and take the first step toward lasting weight loss.
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