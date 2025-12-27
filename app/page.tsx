'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const totalSlides = 3;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const carouselImages = [
    '/carousel-1.jpg',
    '/carousel-2.jpg',
    '/carousel-3.jpg'
  ];

  const carouselTitles = [
    'Initial Medical Assessment',
    'Personalized Meal Plan',
    'Physical Activity Plan'
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Left Menu Items */}
            <div className="flex space-x-8">
              <a href="#" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Home</a>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Services</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Testimonials</Link>
            </div>
            
            {/* Center Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <span className="text-xl font-medium text-gray-900">Lumena Clinic</span>
            </div>
            
            {/* Right Menu Items */}
            <div className="flex space-x-8">
              <a href="#schedule" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Book Appointment</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Patient Portal</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="grid grid-cols-2 h-[600px]">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden">
            <img 
              src="/hero-image.jpg" 
              alt="Weight Loss Consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="flex items-center justify-center px-16">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-[#1a2744] mb-8 leading-tight">
                Achieve Lasting Weight Loss With Medical Expertise
              </h1>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Personalized nutritional programs, advanced diagnostic tools, and behavioral health support for those who struggle with weight loss.
              </p>
              <div className="flex gap-4">
                <button className="bg-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-400">
                  Button 1
                </button>
                <button className="bg-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-400">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Loss Philosophy Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-6">
              Weight Loss Isn't Just About<br />Diet & Exercise
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              If you have a BMI over 25 and have tried commercial programs without lasting success,<br />
              you already know the truth: conventional weight loss methods aren't effective.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Column 1 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-8">
                Medical Barries Go<br />Ignored
              </h3>
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-7xl">🩺</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-8">
                Cookie Cutter<br />Programs Don't Work
              </h3>
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-7xl">📋</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-8">
                No Support When It<br />Matters Most
              </h3>
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-7xl">💔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Center of Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-4">
              That's Why We Created A<br />Center Of Excellence
            </h2>
            <p className="text-xl text-gray-600 mt-8">
              Our Core Offerings Will Include
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-5xl mx-auto relative">
            <div className="bg-gray-200 rounded-lg overflow-hidden min-h-[500px] relative">
              {/* Carousel Image */}
              <img 
                src={carouselImages[currentSlide]} 
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 px-12 py-6 rounded-lg shadow-lg">
                  <h3 className="text-4xl font-bold text-[#1a2744] text-center">
                    {carouselTitles[currentSlide]}
                  </h3>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded flex items-center justify-center hover:bg-white transition shadow-lg z-10"
              >
                <span className="text-2xl text-gray-700">←</span>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded flex items-center justify-center hover:bg-white transition shadow-lg z-10"
              >
                <span className="text-2xl text-gray-700">→</span>
              </button>
              
              {/* Page Indicator */}
              <div className="absolute bottom-8 right-8 text-2xl text-white bg-gray-800/50 px-4 py-2 rounded z-10">
                {currentSlide + 1}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Our Process
          </h2>

          {/* Process Flow */}
          <div className="max-w-5xl mx-auto">
            {/* Step 1 - Initial Assessment */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-12 h-12 bg-[#1a2744] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-3xl font-bold text-[#1a2744]">
                  Initial Assessment
                </h3>
              </div>
              <p className="text-gray-600 ml-18 text-lg">
                Comprehensive evaluation of your health, medical history, and weight loss goals
              </p>
            </div>

            {/* Arrow/Divider */}
            <div className="text-center my-8">
              <div className="inline-block bg-[#1a2744] text-white px-8 py-3 rounded-full text-lg font-medium">
                Then Choose One
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Intensive Program */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 text-[#1a2744] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2A
                </div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-4">
                  Intensive Weight Loss Program
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Structured
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Multi-week
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Frequent Appointments
                  </li>
                </ul>
              </div>

              {/* Maintenance Program */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 text-[#1a2744] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2B
                </div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-4">
                  Maintenance Program
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Monthly/Bi-Weekly Check-ins
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Group Support
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Access To Resources For Long Term Success
                  </li>
                </ul>
              </div>

              {/* A La Carte */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 text-[#1a2744] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2C
                </div>
                <h4 className="text-xl font-bold text-[#1a2744] mb-4">
                  A La Carte Services
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Choose Specific Services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Flexible scheduling
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Pay as you go
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Testimonials
          </h2>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* Card 1 */}
            <div>
              <div className="bg-gray-300 rounded-lg h-96 mb-6 flex items-center justify-center">
                <p className="text-3xl text-gray-600 font-medium">Coming soon...</p>
              </div>
              <p className="text-2xl text-gray-700 font-medium text-center">Name</p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="bg-gray-300 rounded-lg h-96 mb-6 flex items-center justify-center">
                <p className="text-3xl text-gray-600 font-medium">Coming soon...</p>
              </div>
              <p className="text-2xl text-gray-700 font-medium text-center">Name</p>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mb-12">
            <button 
              onClick={() => setCurrentSlide(0)}
              className={`w-4 h-4 rounded-full transition ${currentSlide === 0 ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-gray-500`}
              aria-label="Go to testimonial 1"
            ></button>
            <button 
              onClick={() => setCurrentSlide(1)}
              className={`w-4 h-4 rounded-full transition ${currentSlide === 1 ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-gray-500`}
              aria-label="Go to testimonial 2"
            ></button>
            <button 
              onClick={() => setCurrentSlide(2)}
              className={`w-4 h-4 rounded-full transition ${currentSlide === 2 ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-gray-500`}
              aria-label="Go to testimonial 3"
            ></button>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="border-2 border-[#1a2744] text-[#1a2744] px-12 py-4 rounded-full text-xl font-medium hover:bg-[#1a2744] hover:text-white transition">
              Hear More Member Stories
            </button>
          </div>
        </div>
      </section>

      {/* Schedule CTA Section */}
      <section className="py-20 bg-white border-b-2 border-gray-800">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Schedule A Comprehensive<br />Assessment
          </h2>

          {/* Icons */}
          <div className="grid grid-cols-3 gap-16 max-w-4xl mx-auto mb-16">
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-8xl">📞</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-8xl">📅</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-8xl">✉️</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-6 max-w-5xl mx-auto">
            <button className="bg-gray-300 text-gray-700 px-12 py-4 rounded-full text-xl font-medium hover:bg-gray-400 transition">
              Call Now
            </button>
            <button className="bg-gray-300 text-gray-700 px-16 py-4 rounded-full text-xl font-medium hover:bg-gray-400 transition">
              Schedule An Appointment
            </button>
            <button className="bg-gray-300 text-gray-700 px-12 py-4 rounded-full text-xl font-medium hover:bg-gray-400 transition">
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100 border-b-2 border-gray-800">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Frequently Asked<br />Questions
          </h2>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <p className="text-xl text-gray-700 pr-8 text-left font-medium">
                  What makes your weight loss program different from others?
                </p>
                <div className={`flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-600 transition-transform ${openFaq === 0 ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>Our program is medically supervised and personalized to your specific health needs, medical history, and weight loss goals. Unlike one-size-fits-all programs, we address underlying medical barriers and provide ongoing professional support.</p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <p className="text-xl text-gray-700 pr-8 text-left font-medium">
                  How long does the program take?
                </p>
                <div className={`flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-600 transition-transform ${openFaq === 1 ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>Program length varies based on your individual goals and which program you choose. Our Intensive Weight Loss Program typically runs 12-16 weeks, while our Maintenance Program is ongoing with monthly or bi-weekly check-ins.</p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <p className="text-xl text-gray-700 pr-8 text-left font-medium">
                  Do you accept insurance?
                </p>
                <div className={`flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-600 transition-transform ${openFaq === 2 ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>We work with most major insurance providers. Coverage varies by plan and specific services. Contact us for a free consultation to discuss your insurance coverage and payment options.</p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <p className="text-xl text-gray-700 pr-8 text-left font-medium">
                  What can I expect during the initial assessment?
                </p>
                <div className={`flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-600 transition-transform ${openFaq === 3 ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>Your initial comprehensive assessment includes a full medical evaluation, review of your health history, body composition analysis, metabolic testing, and a consultation with our physician to create your personalized treatment plan.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Find Us / Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Find Us
          </h2>

          {/* Map Container */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Left Side - Address and Buttons */}
            <div className="space-y-8">
              <div className="text-2xl text-gray-700">
                18255 Brookhurst St.<br />
                Suite 100<br />
                Fountain Valley, CA 92708
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://maps.apple.com/?address=18255%20Brookhurst%20St,%20Suite%20100,%20Fountain%20Valley,%20CA%2092708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-xl hover:bg-gray-400 transition block text-center"
                >
                  Open In Apple Maps
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=18255+Brookhurst+St+Suite+100+Fountain+Valley+CA+92708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-xl hover:bg-gray-400 transition block text-center"
                >
                  Open In Google Maps
                </a>
              </div>
            </div>

            {/* Right Side - Embedded Google Map */}
            <div className="rounded-lg overflow-hidden h-96 shadow-lg">
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
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
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