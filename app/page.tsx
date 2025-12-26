export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              Weight Loss Center
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book Consultation
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Life with Expert Weight Loss Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Medically supervised weight loss programs designed for lasting results. 
              Start your journey to a healthier, happier you today.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-semibold mb-3">Medical Weight Loss</h3>
              <p className="text-gray-600">
                Physician-supervised programs using the latest medical approaches for safe, effective weight loss.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🥗</div>
              <h3 className="text-2xl font-semibold mb-3">Nutrition Counseling</h3>
              <p className="text-gray-600">
                Personalized meal plans and nutritional guidance from certified dietitians.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">💪</div>
              <h3 className="text-2xl font-semibold mb-3">Lifestyle Coaching</h3>
              <p className="text-gray-600">
                Ongoing support and accountability to build sustainable healthy habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Expert Care You Can Trust</h2>
              <p className="text-gray-700 mb-4">
                Our board-certified physicians specialize in medical weight management, 
                combining proven treatments with personalized care.
              </p>
              <p className="text-gray-700 mb-6">
                With over 15 years of experience, we've helped thousands of patients 
                achieve their weight loss goals and maintain long-term success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Board-certified physicians
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Evidence-based treatments
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Personalized care plans
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Ongoing support and monitoring
                </li>
              </ul>
            </div>
            <div className="bg-blue-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600">[Doctor Photo Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "I lost 45 pounds in 6 months! The team was supportive every step of the way."
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Finally found a program that works. Down 60 pounds and feeling amazing!"
              </p>
              <p className="font-semibold">- John D.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "The personalized approach made all the difference. Highly recommend!"
              </p>
              <p className="font-semibold">- Michelle R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and take the first step toward a healthier you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
            Book Free Consultation
          </button>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>123 Medical Plaza<br />City, State 12345</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p>info@weightlosscenter.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Weight Loss Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
