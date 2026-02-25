'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Home, Clock, MapPin, Video, Plus, Filter } from 'lucide-react';

export default function Appointments() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // Sample appointments data
  const upcomingAppointments = [
    {
      id: 1,
      date: "March 15, 2025",
      time: "10:00 AM",
      type: "Initial Consultation",
      provider: "Dr. Aparnath",
      location: "In-Person",
      address: "18255 Brookhurst St., Suite 100, Fountain Valley, CA",
      status: "confirmed",
      notes: "Please arrive 15 minutes early to complete intake forms."
    },
    {
      id: 2,
      date: "March 29, 2025",
      time: "2:30 PM",
      type: "Follow-up Visit",
      provider: "Dr. Aparnath",
      location: "In-Person",
      address: "18255 Brookhurst St., Suite 100, Fountain Valley, CA",
      status: "confirmed",
      notes: "Bring your food diary and current medications list."
    },
    {
      id: 3,
      date: "April 12, 2025",
      time: "11:00 AM",
      type: "Nutrition Consultation",
      provider: "Licensed Nutritionist",
      location: "Telehealth",
      address: "Video Call (link will be sent 24 hours before)",
      status: "pending",
      notes: "Review lab results and adjust nutrition plan."
    }
  ];

  const pastAppointments = [
    {
      id: 4,
      date: "January 15, 2025",
      time: "10:00 AM",
      type: "Initial Assessment",
      provider: "Dr. Aparnath",
      location: "In-Person",
      status: "completed",
      notes: "Comprehensive evaluation completed. Treatment plan created."
    },
    {
      id: 5,
      date: "December 10, 2024",
      time: "9:30 AM",
      type: "BodyDexa Scan",
      provider: "Medical Staff",
      location: "In-Person",
      status: "completed",
      notes: "Full body composition analysis performed."
    },
    {
      id: 6,
      date: "November 22, 2024",
      time: "2:00 PM",
      type: "Consultation",
      provider: "Dr. Aparnath",
      location: "In-Person",
      status: "completed",
      notes: "Initial consultation and health history review."
    }
  ];

  useEffect(() => {
    document.title = "My Appointments | Lumena Patient Portal";
    window.scrollTo(0, 0);
  }, []);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

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
              <Link href="/portal/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-[#1a2744] font-semibold border-b-2 border-[#1a2744] pb-1">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
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
              <Link href="/portal/dashboard" className="flex items-center space-x-2 text-gray-600 py-2">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-[#1a2744] font-semibold py-2">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-gray-600 py-2">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
            My Appointments
          </h1>
          <p className="text-gray-600">
            View and manage your appointments with Mission Lumena
          </p>
        </div>

        {/* Request Appointment Button */}
        <div className="mb-6">
          <Link 
            href="/portal/appointments/request"
            className="inline-flex items-center space-x-2 bg-[#1a2744] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            <span>Request New Appointment</span>
          </Link>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === 'upcoming'
                  ? 'text-[#1a2744] border-b-2 border-[#1a2744]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming ({upcomingAppointments.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === 'past'
                  ? 'text-[#1a2744] border-b-2 border-[#1a2744]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Past Appointments ({pastAppointments.length})
            </button>
          </div>
        </div>

        {/* Upcoming Appointments */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-lg shadow-md p-6 hover-lift border-l-4 border-[#1a2744]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  {/* Left Side - Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#1a2744] mb-1">
                          {appointment.type}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{appointment.date}</span>
                          <Clock className="w-4 h-4 ml-4 mr-2" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold">Provider:</span> {appointment.provider}
                      </p>
                      <p className="flex items-start">
                        {appointment.location === 'Telehealth' ? (
                          <Video className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                        ) : (
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                        )}
                        <span>
                          <span className="font-semibold">{appointment.location}</span>
                          {appointment.address && (
                            <span className="block text-gray-600 mt-1">{appointment.address}</span>
                          )}
                        </span>
                      </p>
                      {appointment.notes && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mt-3 rounded">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Note:</span> {appointment.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Status & Actions */}
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start md:items-end space-y-3">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold border ${getStatusColor(appointment.status)}`}>
                      {getStatusText(appointment.status)}
                    </span>
                    <div className="flex flex-col space-y-2 w-full md:w-auto">
                      <button className="px-4 py-2 border-2 border-[#1a2744] text-[#1a2744] rounded-lg font-semibold hover:bg-[#1a2744] hover:text-white transition text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition text-sm">
                        Reschedule
                      </button>
                      <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {upcomingAppointments.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Upcoming Appointments</h3>
                <p className="text-gray-600 mb-6">You don't have any scheduled appointments.</p>
                <Link 
                  href="/portal/appointments/request"
                  className="inline-flex items-center space-x-2 bg-[#1a2744] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
                >
                  <Plus className="w-5 h-5" />
                  <span>Request Appointment</span>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Past Appointments */}
        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastAppointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-lg shadow-md p-6 hover-lift border-l-4 border-gray-400">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  {/* Left Side - Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-700 mb-1">
                      {appointment.type}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{appointment.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{appointment.time}</span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold">Provider:</span> {appointment.provider}
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span> {appointment.location}
                      </p>
                      {appointment.notes && (
                        <div className="bg-gray-50 border-l-4 border-gray-300 p-3 mt-3 rounded">
                          <p className="text-sm text-gray-600">{appointment.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Status */}
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start md:items-end space-y-3">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold border ${getStatusColor(appointment.status)}`}>
                      {getStatusText(appointment.status)}
                    </span>
                    <button className="px-4 py-2 border-2 border-[#1a2744] text-[#1a2744] rounded-lg font-semibold hover:bg-[#1a2744] hover:text-white transition text-sm">
                      View Summary
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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