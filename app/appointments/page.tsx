'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';
import BackToTop from '@/components/BackToTop';

export default function Appointments() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.title = "Book Appointment | Lunena Clinic and Therapeutics";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.appointmentType) newErrors.appointmentType = 'Please select an appointment type';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Show loading state
    setIsSubmitting(true);

    // Simulate submission (replace this with actual submission later)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Store in localStorage as backup
      const submissions = JSON.parse(localStorage.getItem('appointmentSubmissions') || '[]');
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('appointmentSubmissions', JSON.stringify(submissions));
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        appointmentType: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });

      // Scroll to success message
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

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
              <Link href="/appointments" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">Book Appointment</Link>
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
              <Link href="/services" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Services</Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-900 font-semibold py-2 border-b border-gray-200">Book Appointment</Link>
              <Link href="/patient-portal" className="block text-gray-700 hover:text-gray-900 py-2">Patient Portal</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-12 md:py-12 md:py-20">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a2744] mb-4 md:mb-6">
            Schedule Your Appointment
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto w-full">
            Take the first step toward lasting weight loss. Book your comprehensive assessment today.
          </p>
        </div>
      </section>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mx-4 md:mx-auto max-w-4xl mt-6 rounded-lg animate-fade-in">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                Appointment Request Received!
              </h3>
              <p className="text-green-700 mb-3">
                Thank you for your submission. Our team will contact you within 24 hours to confirm your appointment.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-green-600 hover:text-green-800 font-medium text-sm underline"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-12 md:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto w-full">
            {/* Left Side - Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-6">
                Request an Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will contact you within 24 hours to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                        errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                        errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                    }`}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Appointment Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Appointment Type *
                  </label>
                  <select
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                      errors.appointmentType ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                    }`}
                  >
                    <option value="">Select an option</option>
                    <option value="initial">Initial Comprehensive Assessment</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="followup">Follow-up Appointment</option>
                    <option value="seminar">Weight Loss Seminar</option>
                  </select>
                  {errors.appointmentType && (
                    <p className="text-red-500 text-sm mt-1">{errors.appointmentType}</p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                        errors.preferredDate ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 text-base md:text-lg text-gray-900 border rounded-lg focus:outline-none transition ${
                        errors.preferredTime ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#1a2744]'
                      }`}
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 3pm)</option>
                      <option value="evening">Evening (3pm - 6pm)</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 text-base md:text-lg text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a2744] transition"
                    placeholder="Tell us about your goals or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#1a2744] hover:bg-[#2a3754] transform hover:scale-105 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Request Appointment'
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-[#1a2744] text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-gray-300">
                        18255 Brookhurst St., Suite 100<br />
                        Fountain Valley, CA 92708
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:555-123-4567" className="text-gray-300 hover:text-white transition">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@lumenaclinic.com" className="text-gray-300 hover:text-white transition">
                        info@lumenaclinic.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Office Hours</p>
                      <p className="text-gray-300">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-lg md:text-2xl font-bold text-[#1a2744] mb-6">What to Expect</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Confirmation Call</p>
                      <p className="text-sm text-gray-600">We'll call within 24 hours to confirm your appointment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Pre-Appointment Forms</p>
                      <p className="text-sm text-gray-600">Complete medical history forms before your visit</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Initial Assessment</p>
                      <p className="text-sm text-gray-600">60-90 minute comprehensive evaluation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <p className="font-semibold">Personalized Plan</p>
                      <p className="text-sm text-gray-600">Customized treatment plan created for you</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Insurance Info */}
              <div className="bg-blue-50 border-l-4 border-[#1a2744] p-6 rounded">
                <h4 className="font-bold text-[#1a2744] mb-2">Insurance & Payment</h4>
                <p className="text-gray-700 text-sm">
                  We work with most major insurance providers. Please bring your insurance card to your appointment. 
                  We also offer flexible payment plans for those without coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <h2 className="text-xl md:text-3xl font-bold text-[#1a2744] mb-8 text-center">
            Visit Our Clinic
          </h2>
          <div className="max-w-4xl mx-auto w-full">
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0849364371887!2d-117.95624!3d33.71167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd28b0a1b1f1f1%3A0x1!2s18255%20Brookhurst%20St%20%23100%2C%20Fountain%20Valley%2C%20CA%2092708!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lunena Clinic and Therapeutics Location"
              ></iframe>
            </div>
            <div className="mt-6 flex gap-4 justify-center">
              <a 
                href="https://maps.apple.com/?address=18255%20Brookhurst%20St,%20Suite%20100,%20Fountain%20Valley,%20CA%2092708"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400 transition"
              >
                Open in Apple Maps
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=18255+Brookhurst+St+Suite+100+Fountain+Valley+CA+92708"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-400 transition"
              >
                Open in Google Maps
              </a>
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
      <BackToTop />
    </div>
  );
}