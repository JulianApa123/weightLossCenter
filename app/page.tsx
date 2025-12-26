'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 1</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 2</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 3</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 4</a>
            </div>
            
            {/* Center Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <span className="text-xl font-medium text-gray-900">Lumena Clinic</span>
            </div>
            
            {/* Right Menu Items */}
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 5</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 6</a>
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

      {/* Our Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Our Team Is Comprised Of<br />The Best
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto items-center">
            {/* Left Side - Stats */}
            <div className="space-y-8">
              <div className="w-56 h-56 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                <p className="text-center text-gray-700 font-medium px-8">
                  # Years Of<br />Combined<br />Experience
                </p>
              </div>
              <div className="w-56 h-56 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                <p className="text-center text-gray-700 font-medium px-8">
                  # Combined<br />Patients Treated
                </p>
              </div>
            </div>

            {/* Middle - Team Roles */}
            <div className="space-y-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-700">
                Exercise<br />Physiologists
              </h3>
              <h3 className="text-2xl font-semibold text-gray-700">
                Behavioral<br />Therapists
              </h3>
              <h3 className="text-2xl font-semibold text-gray-700">
                Registered<br />Dietitians
              </h3>
            </div>

            {/* Right Side - Treatment Plan Message */}
            <div className="flex items-center">
              <h3 className="text-3xl font-bold text-[#1a2744] leading-snug">
                To Guide You Along A Personalized Treatment Plan
              </h3>
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
            {/* Initial Assessment + Then Choose One */}
            <div className="flex items-center gap-8 mb-12">
              <h3 className="text-3xl font-semibold text-gray-700">
                Initial<br />Assessment
              </h3>
              <p className="text-lg text-[#1a2744]">
                Then Choose One
              </p>
            </div>

            {/* Programs */}
            <div className="space-y-8 pl-12">
              {/* Intensive Weight Loss Program */}
              <div className="flex items-start gap-16">
                <h3 className="text-2xl font-semibold text-gray-700 min-w-[280px] text-right">
                  Intensive<br />Weight Loss<br />Program
                </h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Structured</li>
                  <li>• Multi-week</li>
                  <li>• Frequent Appointments</li>
                </ul>
              </div>

              {/* Maintenance Program */}
              <div className="flex items-start gap-16">
                <h3 className="text-2xl font-semibold text-gray-700 min-w-[280px] text-right">
                  Maintenance<br />Program
                </h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Monthly/Bi-Weekly Check-ins</li>
                  <li>• Group Support</li>
                  <li>• Access To Resources For Long Term Success</li>
                </ul>
              </div>

              {/* A La Carte Services */}
              <div className="flex items-start gap-16">
                <h3 className="text-2xl font-semibold text-gray-700 min-w-[280px] text-right">
                  A La Carte<br />Services
                </h3>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Choose Specific Services</li>
                  <li>• ...</li>
                  <li>• ...</li>
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
              <div className="bg-gray-300 rounded-lg h-96 mb-6"></div>
              <p className="text-2xl text-gray-700 font-medium text-center">Name</p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="bg-gray-300 rounded-lg h-96 mb-6"></div>
              <p className="text-2xl text-gray-700 font-medium text-center">Name</p>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mb-12">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
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
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
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
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="flex items-center justify-between bg-transparent py-6 border-b border-gray-300">
              <p className="text-2xl text-gray-600 pr-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <button className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl text-gray-600 hover:bg-gray-400 transition">
                +
              </button>
            </div>

            {/* FAQ 2 */}
            <div className="flex items-center justify-between bg-transparent py-6 border-b border-gray-300">
              <p className="text-2xl text-gray-600 pr-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <button className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl text-gray-600 hover:bg-gray-400 transition">
                +
              </button>
            </div>

            {/* FAQ 3 */}
            <div className="flex items-center justify-between bg-transparent py-6 border-b border-gray-300">
              <p className="text-2xl text-gray-600 pr-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <button className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl text-gray-600 hover:bg-gray-400 transition">
                +
              </button>
            </div>

            {/* FAQ 4 */}
            <div className="flex items-center justify-between bg-transparent py-6 border-b border-gray-300">
              <p className="text-2xl text-gray-600 pr-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
              <button className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl text-gray-600 hover:bg-gray-400 transition">
                +
              </button>
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
                1234 Street Avenue<br />
                12345, City, State
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-xl hover:bg-gray-400 transition">
                  Open In Apple Maps
                </button>
                <button className="w-full bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-xl hover:bg-gray-400 transition">
                  Open In Google Maps
                </button>
              </div>
            </div>

            {/* Right Side - Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-96"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t border-gray-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 items-start mb-8">
            {/* Left - Logo */}
            <div>
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            </div>

            {/* Center - Navigation */}
            <div className="space-y-6">
              {/* First Row */}
              <div className="grid grid-cols-4 gap-4 text-gray-700">
                <a href="#" className="hover:text-[#1a2744]">Page 1</a>
                <a href="#" className="hover:text-[#1a2744]">Page 2</a>
                <a href="#" className="hover:text-[#1a2744]">Page 3</a>
                <a href="#" className="hover:text-[#1a2744]">Page 4</a>
              </div>
              {/* Second Row */}
              <div className="grid grid-cols-4 gap-4 text-gray-700">
                <a href="#" className="hover:text-[#1a2744]">Page 5</a>
                <a href="#" className="hover:text-[#1a2744]">Page 6</a>
                <a href="#" className="hover:text-[#1a2744]">Page 7</a>
                <a href="#" className="hover:text-[#1a2744]">Page 8</a>
              </div>
            </div>

            {/* Right - Social Icons */}
            <div className="flex justify-end gap-6">
              <a href="#" className="text-4xl hover:opacity-70">📷</a>
              <a href="#" className="text-4xl hover:opacity-70">f</a>
              <a href="#" className="text-4xl hover:opacity-70">🎵</a>
              <a href="#" className="text-4xl hover:opacity-70">in</a>
            </div>
          </div>

          {/* Bottom Row - Copyright and Legal */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-300">
            <p className="text-gray-600">2025 Lumena Clinic Inc</p>
            <div className="flex gap-8 text-gray-600">
              <a href="#" className="hover:text-[#1a2744]">Terms of Use</a>
              <a href="#" className="hover:text-[#1a2744]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1a2744]">Notice of Privacy Practices</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}