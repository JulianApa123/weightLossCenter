'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Home, Send, Paperclip, Search, Filter, ArrowLeft } from 'lucide-react';

export default function Messages() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'doctor' | 'staff'>('all');
  const [replyText, setReplyText] = useState('');

  // Sample messages data
  const messages = [
    {
      id: 1,
      from: "Dr. Aparnath",
      subject: "Your Lab Results Are Ready",
      preview: "Your recent lab work has been completed and reviewed. Overall, the results look good...",
      fullMessage: "Your recent lab work has been completed and reviewed. Overall, the results look good with some minor adjustments needed to your current plan.\n\nYour cholesterol levels have improved by 15% since your last visit, which is excellent progress. However, we should discuss adjusting your nutrition plan slightly to address your vitamin D levels.\n\nI've uploaded the full lab report to your Documents section for your review. Please schedule a follow-up appointment within the next two weeks so we can discuss these results in detail.\n\nBest regards,\nDr. Aparnath",
      date: "Feb 20, 2025",
      time: "10:30 AM",
      unread: true,
      type: "doctor",
      hasAttachment: true
    },
    {
      id: 2,
      from: "Front Desk",
      subject: "Appointment Reminder - March 15th",
      preview: "This is a reminder for your upcoming appointment on March 15th at 10:00 AM...",
      fullMessage: "This is a reminder for your upcoming appointment on March 15th at 10:00 AM with Dr. Aparnath.\n\nPlease arrive 15 minutes early to complete your intake forms. If you have any questions or need to reschedule, please don't hesitate to contact us.\n\nLocation:\n18255 Brookhurst St., Suite 100\nFountain Valley, CA 92708\n\nWhat to bring:\n- Insurance card\n- Photo ID\n- Current medications list\n- Food diary (if applicable)\n\nWe look forward to seeing you!\n\nBest,\nLumena Front Desk Team",
      date: "Feb 18, 2025",
      time: "2:15 PM",
      unread: false,
      type: "staff",
      hasAttachment: false
    },
    {
      id: 3,
      from: "Nutrition Team",
      subject: "Your Customized Meal Plan",
      preview: "Attached is your personalized nutrition plan based on your recent consultation...",
      fullMessage: "Attached is your personalized nutrition plan based on your recent consultation with our Licensed Nutritionist.\n\nYour meal plan includes:\n- Daily calorie targets\n- Macro breakdown (protein, carbs, fats)\n- Sample meals and recipes\n- Grocery shopping list\n- Meal prep tips\n\nPlease review the attached PDF and let us know if you have any questions. We recommend following this plan for at least 4 weeks before making any adjustments.\n\nRemember:\n- Stay hydrated (8-10 glasses of water daily)\n- Take your supplements as prescribed\n- Log your meals in the app we discussed\n\nIf you have any questions or need modifications due to food allergies or preferences, please reply to this message.\n\nTo your health,\nLumena Nutrition Team",
      date: "Feb 15, 2025",
      time: "11:20 AM",
      unread: false,
      type: "staff",
      hasAttachment: true
    },
    {
      id: 4,
      from: "Dr. Aparnath",
      subject: "GLP-1 Medication Update",
      preview: "I wanted to follow up on how you're responding to the new medication...",
      fullMessage: "I wanted to follow up on how you're responding to the new GLP-1 medication we started last month.\n\nPlease let me know if you're experiencing:\n- Any side effects (nausea, digestive issues, etc.)\n- Changes in appetite or energy levels\n- Any concerns or questions\n\nYour next injection is scheduled for this Thursday. If you're experiencing any significant side effects, please contact us before taking your next dose.\n\nAlso, please continue monitoring your blood glucose levels and recording them in your log. We'll review these at your next appointment.\n\nBest regards,\nDr. Aparnath",
      date: "Feb 10, 2025",
      time: "9:45 AM",
      unread: false,
      type: "doctor",
      hasAttachment: false
    },
    {
      id: 5,
      from: "Billing Department",
      subject: "Invoice for Recent Visit",
      preview: "Your invoice for the January 15th consultation is now available...",
      fullMessage: "Your invoice for the January 15th consultation is now available in your patient portal.\n\nInvoice Summary:\n- Date of Service: January 15, 2025\n- Provider: Dr. Aparnath\n- Service: Initial Comprehensive Evaluation\n- Amount Due: $450.00\n\nPayment Options:\n- Online payment (available in portal)\n- Credit card by phone: (555) 123-4567\n- Check by mail\n\nIf you have any questions about your invoice or need to discuss payment arrangements, please don't hesitate to contact our billing department.\n\nThank you,\nLumena Billing Team",
      date: "Jan 20, 2025",
      time: "3:30 PM",
      unread: false,
      type: "staff",
      hasAttachment: true
    }
  ];

  const filteredMessages = messages.filter(msg => {
    if (filterStatus === 'unread') return msg.unread;
    if (filterStatus === 'doctor') return msg.type === 'doctor';
    if (filterStatus === 'staff') return msg.type === 'staff';
    return true;
  });

  useEffect(() => {
    document.title = "Messages | Lumena Patient Portal";
    window.scrollTo(0, 0);
  }, []);

  const handleSendReply = () => {
    if (replyText.trim()) {
      // In real app, would send to backend
      alert('Reply sent! (Demo - no backend connected)');
      setReplyText('');
    }
  };

  const selectedMessageData = messages.find(m => m.id === selectedMessage);

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
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-[#1a2744] font-semibold border-b-2 border-[#1a2744] pb-1 relative">
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
              <Link href="/portal/dashboard" className="flex items-center space-x-2 text-gray-600 py-2">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-gray-600 py-2">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-[#1a2744] font-semibold py-2">
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
        {/* Message View (when message selected) */}
        {selectedMessage ? (
          <div className="bg-white rounded-lg shadow-md">
            {/* Message Header */}
            <div className="border-b border-gray-200 p-6">
              <button
                onClick={() => setSelectedMessage(null)}
                className="flex items-center text-[#1a2744] hover:underline mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Inbox
              </button>
              <h2 className="text-2xl font-bold text-[#1a2744] mb-2">
                {selectedMessageData?.subject}
              </h2>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="font-semibold">{selectedMessageData?.from}</span>
                <span className="mx-2">•</span>
                <span>{selectedMessageData?.date} at {selectedMessageData?.time}</span>
                {selectedMessageData?.hasAttachment && (
                  <>
                    <span className="mx-2">•</span>
                    <Paperclip className="w-4 h-4 mr-1" />
                    <span>Has attachment</span>
                  </>
                )}
              </div>
            </div>

            {/* Message Body */}
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedMessageData?.fullMessage}
                </p>
              </div>

              {selectedMessageData?.hasAttachment && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center text-sm">
                    <Paperclip className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="font-semibold text-gray-700">Attachment:</span>
                    <button className="ml-2 text-[#1a2744] hover:underline">
                      lab-results-feb-2025.pdf
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Reply Section */}
            <div className="border-t border-gray-200 p-6">
              <h3 className="font-semibold text-gray-700 mb-3">Reply</h3>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 min-h-[120px] focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
                placeholder="Type your reply..."
              />
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center text-gray-600 hover:text-[#1a2744]">
                  <Paperclip className="w-5 h-5 mr-2" />
                  Attach File
                </button>
                <button
                  onClick={handleSendReply}
                  className="flex items-center bg-[#1a2744] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2a3754] transition"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Inbox View */
          <>
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
                  Messages
                </h1>
                <p className="text-gray-600">
                  Secure communication with your care team
                </p>
              </div>
              <Link 
                href="/portal/messages/new"
                className="mt-4 md:mt-0 inline-flex items-center space-x-2 bg-[#1a2744] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
              >
                <Send className="w-5 h-5" />
                <span>New Message</span>
              </Link>
            </div>

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  filterStatus === 'all'
                    ? 'bg-[#1a2744] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                All Messages ({messages.length})
              </button>
              <button
                onClick={() => setFilterStatus('unread')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  filterStatus === 'unread'
                    ? 'bg-[#1a2744] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Unread ({messages.filter(m => m.unread).length})
              </button>
              <button
                onClick={() => setFilterStatus('doctor')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  filterStatus === 'doctor'
                    ? 'bg-[#1a2744] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                From Doctor ({messages.filter(m => m.type === 'doctor').length})
              </button>
              <button
                onClick={() => setFilterStatus('staff')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  filterStatus === 'staff'
                    ? 'bg-[#1a2744] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                From Staff ({messages.filter(m => m.type === 'staff').length})
              </button>
            </div>

            {/* Messages List */}
            <div className="space-y-3">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message.id)}
                  className={`bg-white rounded-lg shadow-md p-5 hover-lift cursor-pointer border-l-4 ${
                    message.unread ? 'border-[#1a2744] bg-blue-50' : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className={`text-lg ${message.unread ? 'font-bold' : 'font-semibold'} text-[#1a2744]`}>
                          {message.from}
                        </h3>
                        {message.unread && (
                          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                        {message.hasAttachment && (
                          <Paperclip className="w-4 h-4 text-gray-500 ml-2" />
                        )}
                      </div>
                      <p className={`${message.unread ? 'font-semibold' : ''} text-gray-800 mb-1`}>
                        {message.subject}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {message.preview}
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-sm text-gray-600">{message.date}</p>
                      <p className="text-xs text-gray-500">{message.time}</p>
                    </div>
                  </div>
                </div>
              ))}

              {filteredMessages.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No Messages</h3>
                  <p className="text-gray-600 mb-6">You don't have any messages in this category.</p>
                </div>
              )}
            </div>
          </>
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