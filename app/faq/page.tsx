'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import BackToTop from '@/components/BackToTop';

export default function FAQ() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First question open by default

  useEffect(() => {
    document.title = "FAQ | Lumena Clinic and Therapeutics";
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you prescribe GLP-1 / GIP-based medications?",
      answer: `Yes — when clinically appropriate, as part of comprehensive, physician-led obesity care.

GLP-1 and dual GLP-1/GIP medications are among the more effective pharmacologic treatments developed for obesity and play an important role in modern medical weight management.

We approach obesity as a chronic, multisystem disease. Our evaluation focuses on:
• pulmonary risk and exercise capacity
• cardiovascular risk
• metabolic risk, including diabetes and fatty liver disease
• overall performance, function, and durability

When used, these medications are prescribed to improve health and performance at any given weight, facilitate sustainable weight loss, and reduce long-term obesity-related complications.

We treat the person as a whole — not a number.`
    },
    {
      question: "I've tried diet, exercise, and even medications. Why haven't I seen lasting results?",
      answer: `Because in many cases, effort is not the limiting factor — physiology is.

Sustained weight loss depends on metabolic regulation and the body's ability to adapt. Limitations in exercise capacity — whether driven by cardiac, pulmonary, musculoskeletal, or other physiologic factors — can significantly blunt response, even when nutrition, activity, and medications are appropriate.

We aim to identify what is preventing progress using objective, physiology-based assessments and current clinical evidence, rather than escalating treatment blindly.`
    },
    {
      question: "Do you accept insurance?",
      answer: `No. We operate as a direct, physician-led practice.

This structure allows us to:
• spend adequate time on physician-led evaluation
• pursue clinically justified assessments without external constraints
• make decisions based on medical judgment rather than billing requirements

Our focus is clinical accountability — not as a guarantee of outcomes, but as a commitment to thoughtful, individualized care and long-term health strategy.`
    },
    {
      question: "What kind of patients tend to do best here?",
      answer: `This approach works best for individuals who want more than a one-size-fits-all solution.

Many patients initially come seeking weight loss — sometimes quickly — and stay because they are interested in minimizing the multitude of health complications associated with obesity and improving long-term outcomes.

This model is well-suited for those who value physician-led evaluation, individualized strategy, and data-driven decision-making.`
    },
    {
      question: "Do I need to already be on a GLP-1 medication to work with you?",
      answer: `No. Some patients come to us already on therapy, others do not.

We evaluate where you are, how you're responding, and what makes sense medically going forward. The starting point is assessment — not a preset path.`
    },
    {
      question: "Can you help if I'm losing weight but not feeling healthier or stronger?",
      answer: `Yes. Weight loss alone does not always translate to improved health or performance.

We focus on how your body is functioning — including exercise capacity, metabolic regulation, and overall resilience — so progress reflects meaningful health improvement.`
    },
    {
      question: "How long does it take to see results?",
      answer: `That depends on the type of result.

Some changes occur quickly. Others — particularly improvements in health risk and durability — take time. We prioritize decisions that make sense both short-term and long-term.`
    },
    {
      question: "Is this a long-term commitment?",
      answer: `Not necessarily.

Some patients seek focused evaluation and direction, while others choose ongoing care. The appropriate level of involvement is determined together, based on goals and response.`
    }
  ];

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
              <Link href="/faq" className="text-gray-900 font-semibold border-b-2 border-[#1a2744] pb-1">FAQ</Link>
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
              <Link href="/services" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Services</Link>
              <Link href="/faq" className="block text-gray-900 font-semibold py-2 border-b border-gray-200">FAQ</Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Testimonials</Link>
              <Link href="/appointments" className="block text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200">Book Appointment</Link>
              <Link href="/portal/login" className="block text-gray-700 hover:text-gray-900 py-2">Patient Portal</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a2744] to-[#2a3754] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Common questions about our physician-led approach to obesity treatment and what to expect at Mission Lumena.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover-lift">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition text-left"
                >
                  <h3 className="text-lg md:text-xl text-[#1a2744] pr-8 font-semibold">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`flex-shrink-0 w-6 h-6 text-[#1a2744] transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    strokeWidth={2}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed whitespace-pre-line animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help. Schedule a consultation to discuss your specific health goals and learn how our physician-led approach can support your journey.
            </p>
            <Link 
              href="/appointments"
              className="inline-block bg-[#1a2744] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2a3754] transition transform hover:scale-105"
            >
              Schedule Consultation
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