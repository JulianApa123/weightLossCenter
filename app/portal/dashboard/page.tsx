'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Upload, Home, Bell } from 'lucide-react';

export default function PatientDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Sample patient data (would come from backend later)
  const patientName = "John Smith";
  
  const upcomingAppointments = [
    {
      id: 1,
      date: "March 15, 2025",
      time: "10:00 AM",
      type: "Initial Consultation",
      provider: "Dr. Aparnath"
    },
    {
      id: 2,
      date: "March 29, 2025",
      time: "2:30 PM",
      type: "Follow-up Visit",
      provider: "Dr. Aparnath"
    }
  ];

  const recentMessages = [
    {
      id: 1,
      from: "Dr. Aparnath",
      subject: "Your lab results are ready",
      preview: "Your recent lab work has been completed. Please review in the Documents section.",
      date: "Feb 20, 2025",
      unread: true
    },
    {
      id: 2,
      from: "Front Desk",
      subject: "Appointment Reminder",
      preview: "This is a reminder for your upcoming appointment on March 15th at 10:00 AM.",
      date: "Feb 18, 2025",
      unread: false
    }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: "Lab Results - February 2025",
      type: "PDF",
      date: "Feb 20, 2025"
    },
    {
      id: 2,
      name: "Consent Form - Treatment Plan",
      type: "PDF",
      date: "Jan 15, 2025"
    },
    {
      id: 3,
      name: "Initial Assessment Summary",
      type: "PDF",
      date: "Jan 10, 2025"
    }
  ];

  useEffect(() => {
    document.title = "Patient Dashboard | Lumena Patient Portal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-4 md:px-6 max-w-7xl py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Lumena Logo" className="h-12 md:h-14" />
              <div className="hidden md:block">
                <div className="text-sm text-gray-600">Patient Portal</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/portal/dashboard" className="flex items-center space-x-2 text-[#1a2744] font-semibold border-b-2 border-[#1a2744] pb-1">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition relative">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
              </Link>
              <Link href="/portal/documents" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <FileText className="w-4 h-4" />
                <span>Documents</span>
              </Link>
              <Link href="/portal/profile" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
              <Link href="/portal/login" className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
              <Link href="/portal/dashboard" className="flex items-center space-x-2 text-[#1a2744] font-semibold py-2">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-gray-600 py-2">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-gray-600 py-2">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">1</span>
              </Link>
              <Link href="/portal/documents" className="flex items-center space-x-2 text-gray-600 py-2">
                <FileText className="w-4 h-4" />
                <span>Documents</span>
              </Link>
              <Link href="/portal/profile" className="flex items-center space-x-2 text-gray-600 py-2">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
              <Link href="/portal/login" className="flex items-center space-x-2 text-red-600 py-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 max-w-7xl py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
            Welcome back, {patientName}!
          </h1>
          <p className="text-gray-600">
            Here's an overview of your health journey with Mission Lumena.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <Link href="/portal/appointments/request" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#1a2744] hover-lift">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-[#1a2744]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2744] text-lg">Request Appointment</h3>
                <p className="text-sm text-gray-600">Schedule your next visit</p>
              </div>
            </div>
          </Link>

          <Link href="/portal/messages/new" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500 hover-lift">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2744] text-lg">Send Message</h3>
                <p className="text-sm text-gray-600">Contact your care team</p>
              </div>
            </div>
          </Link>

          <Link href="/portal/documents/upload" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500 hover-lift">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Upload className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2744] text-lg">Upload Document</h3>
                <p className="text-sm text-gray-600">Share files with your team</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Appointments & Messages */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#1a2744]">Upcoming Appointments</h2>
                <Link href="/portal/appointments" className="text-[#1a2744] hover:underline text-sm font-semibold">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="border-l-4 border-[#1a2744] pl-4 py-3 bg-blue-50 rounded-r">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-[#1a2744] text-lg">{appointment.type}</p>
                        <p className="text-gray-600 text-sm mt-1">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {appointment.date} at {appointment.time}
                        </p>
                        <p className="text-gray-600 text-sm">with {appointment.provider}</p>
                      </div>
                      <button className="text-[#1a2744] hover:bg-white px-3 py-1 rounded text-sm font-semibold border border-[#1a2744]">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#1a2744]">Recent Messages</h2>
                <Link href="/portal/messages" className="text-[#1a2744] hover:underline text-sm font-semibold">
                  View All →
                </Link>
              </div>
              <div className="space-y-3">
                {recentMessages.map(message => (
                  <div key={message.id} className={`p-4 rounded-lg border ${message.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-semibold text-[#1a2744]">{message.from}</p>
                          {message.unread && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-800">{message.subject}</p>
                        <p className="text-sm text-gray-600 mt-1">{message.preview}</p>
                        <p className="text-xs text-gray-500 mt-2">{message.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Documents & Info */}
          <div className="space-y-6">
            {/* My Documents */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#1a2744]">My Documents</h2>
                <Link href="/portal/documents" className="text-[#1a2744] hover:underline text-sm font-semibold">
                  View All →
                </Link>
              </div>
              <div className="space-y-3">
                {recentDocuments.map(doc => (
                  <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-[#1a2744]" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{doc.name}</p>
                        <p className="text-xs text-gray-600">{doc.date}</p>
                      </div>
                    </div>
                    <button className="text-[#1a2744] hover:underline text-sm">View</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-[#1a2744] to-[#2a3754] text-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Need Help?</h3>
              <p className="text-sm text-gray-200 mb-4">
                Our team is here to support you on your health journey.
              </p>
              <div className="space-y-2 text-sm">
                <p>📞 (555) 123-4567</p>
                <p>📧 info@lumenaclinic.com</p>
                <p>🕐 Mon-Fri: 9am - 6pm</p>
              </div>
              <Link href="/portal/messages/new" className="block mt-4 bg-white text-[#1a2744] text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Lumena Diagnostics and Therapeutics, Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-[#1a2744]">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#1a2744]">Terms of Use</Link>
              <Link href="/" className="text-gray-600 hover:text-[#1a2744]">Back to Website</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}