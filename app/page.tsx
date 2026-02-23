'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Stethoscope, ClipboardList, HeartCrack, Phone, Calendar, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import BackToTop from '@/components/BackToTop';
import EngagementPopup from '@/components/EngagementPopup';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalSlides = 3;

  // BMI Calculator states
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [goalWeight, setGoalWeight] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    document.title = "Home | Lumena Clinic and Therapeutics";
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


  // BMI Calculator function
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) * 0.0254; // inches to meters
      const weightInKg = parseFloat(weight) * 0.453592; // pounds to kg
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      // Determine category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const calculateWeightLoss = () => {
    if (height && weight && goalWeight) {
      const currentWeight = parseFloat(weight);
      const target = parseFloat(goalWeight);
      const loss = currentWeight - target;
      return loss > 0 ? loss.toFixed(1) : '0';
    }
    return '0';
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-6">
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
              <a href="#" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Home</a>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">Services</Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-gray-300 transition">FAQ</Link>
            </div>
            
            {/* Center Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Lumena Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0" />
              <span className="text-base md:text-xl font-medium text-gray-900">Lumena Clinic<span className="hidden lg:inline"> and Therapeutics</span></span>
            </div>
            
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
              <a href="#" className="block text-gray-900 font-semibold py-2 border-b border-gray-200">Home</a>
              <Link href="/about" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">About Us</Link>
              <Link href="/services" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Services</Link>
              <Link href="/faq" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">FAQ</Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Book Appointment</Link>
              <Link href="/portal/login" className="block text-gray-700 hover:text-gray-900 py-2">Patient Portal</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:h-[600px]">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden h-[300px] md:h-auto">
            <img 
              src="/hero-image.jpg" 
              alt="Weight Loss Consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="flex items-center justify-center px-6 md:px-6 md:px-16 py-12 md:py-0">
            <div className="max-w-xl animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-[#1a2744] mb-6 md:mb-8 leading-tight">
                Mission Lumena
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed">
                A physician-led center dedicated to the comprehensive evaluation and treatment of obesity as a chronic, multisystem health condition. We focus on improving health and performance at any given weight, enabling sustainable weight loss, and minimizing long-term complications through rigorous clinical assessment and individualized care.
              </p>
              <p className="text-base md:text-lg text-gray-700 font-semibold mb-8 md:mb-12 italic">
                We treat the person as a whole — not a number.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/appointments"
                  className="bg-[#1a2744] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#2a3754] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold text-center"
                >
                  Schedule Evaluation
                </Link>
                <Link 
                  href="/services"
                  className="bg-gray-200 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 font-semibold text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2744] mb-6">
              Obesity as a Chronic Disease
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto w-full">
              Sustainable outcomes require addressing obesity as a multisystem medical condition,<br />
              not simply a matter of willpower or effort.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto stagger-children">
            {/* Column 1 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-8">
                Physician-Led<br />Evaluation
              </h3>
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <Stethoscope className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-8">
                Evidence-Based<br />Medicine
              </h3>
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <ClipboardList className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1a2744] mb-8">
                Individualized<br />Care Plans
              </h3>
              <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <HeartCrack className="w-20 h-20 text-[#1a2744]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Center of Excellence Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
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
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Our Process
          </h2>

          {/* Process Flow */}
          <div className="max-w-5xl mx-auto w-full">
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
              <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
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
              <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
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
              <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
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
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
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

      {/* BMI & Weight Loss Calculator Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] text-center mb-4">
              BMI & Weight Loss Calculator
            </h2>
            <p className="text-center text-gray-600 mb-8 md:mb-12">
              Calculate your BMI and see your weight loss goals
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-6">Enter Your Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Height (inches)
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g., 68"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Current Weight (lbs)
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g., 180"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Goal Weight (lbs) - Optional
                    </label>
                    <input
                      type="number"
                      value={goalWeight}
                      onChange={(e) => setGoalWeight(e.target.value)}
                      placeholder="e.g., 160"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <button
                    onClick={calculateBMI}
                    className="w-full bg-[#1a2744] text-white py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition-all duration-300 transform hover:scale-105"
                  >
                    Calculate
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold text-[#1a2744] mb-6">Your Results</h3>
                
                {bmi !== null ? (
                  <div className="space-y-6">
                    {/* BMI Result */}
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <p className="text-gray-600 mb-2">Your BMI</p>
                      <p className="text-5xl font-bold text-[#1a2744] mb-2">{bmi}</p>
                      <p className={`text-lg font-semibold ${
                        category === 'Normal weight' ? 'text-green-600' :
                        category === 'Overweight' ? 'text-yellow-600' :
                        category === 'Obese' ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {category}
                      </p>
                    </div>

                    {/* Weight Loss Goal */}
                    {goalWeight && parseFloat(goalWeight) < parseFloat(weight) && (
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <p className="text-gray-600 mb-2">Weight to Lose</p>
                        <p className="text-4xl font-bold text-[#1a2744] mb-2">
                          {calculateWeightLoss()} lbs
                        </p>
                        <p className="text-sm text-gray-600">
                          To reach your goal of {goalWeight} lbs
                        </p>
                      </div>
                    )}

                    {/* BMI Categories Reference */}
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">BMI Categories:</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>• Underweight: Below 18.5</p>
                        <p>• Normal: 18.5 - 24.9</p>
                        <p>• Overweight: 25 - 29.9</p>
                        <p>• Obese: 30 and above</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 mb-4 text-center">
                        Ready to start your weight loss journey?
                      </p>
                      <Link
                        href="/appointments"
                        className="block w-full bg-gray-200 text-[#1a2744] py-3 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
                      >
                        Book Your Assessment
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg">Enter your information and click Calculate to see your results</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-500 mt-8">
              *This calculator provides estimates only. Consult with our medical team for a comprehensive assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule CTA Section */}
      <section id="schedule" className="py-12 md:py-20 bg-white border-b-2 border-gray-800">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Schedule A Comprehensive<br />Assessment
          </h2>

          {/* Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 md:gap-16 max-w-4xl mx-auto mb-16">
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone className="w-24 h-24 text-[#1a2744]" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <Calendar className="w-24 h-24 text-[#1a2744]" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="w-24 h-24 text-[#1a2744]" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto w-full px-4">
            <button className="w-full md:w-auto bg-gray-300 text-gray-700 px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium hover:bg-gray-400 transition">
              Call Now
            </button>
            <Link 
              href="/appointments"
              className="w-full md:w-auto bg-gray-300 text-gray-700 px-8 md:px-16 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium hover:bg-gray-400 transition inline-block text-center"
            >
              Schedule An Appointment
            </Link>
            <button className="w-full md:w-auto bg-gray-300 text-gray-700 px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium hover:bg-gray-400 transition">
              Email Us
            </button>
          </div>
        </div>
      </section>


      {/* Find Us / Map Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1a2744] text-center mb-16">
            Find Us
          </h2>

          {/* Map Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
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
                title="Lumena Clinic and Therapeutics Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - Logo & About */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.jpg" alt="Lumena Logo" className="w-12 h-12 object-contain" />
                <span className="text-xl font-semibold">Lumena Clinic and Therapeutics</span>
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
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
                <li><Link href="/appointments" className="hover:text-white transition">Book Appointment</Link></li>
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
      <EngagementPopup />
    </div>
  );
}