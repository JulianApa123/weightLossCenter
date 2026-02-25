'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Home, Send, Paperclip, X, CheckCircle, ArrowLeft } from 'lucide-react';

export default function NewMessage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    subject: '',
    message: ''
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.title = "New Message | Lumena Patient Portal";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments([...attachments, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.recipient) {
      newErrors.recipient = 'Please select a recipient';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate sending (in real app, would call API)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Simple header for success page */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Lumena Logo" className="h-12 md:h-14" />
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#1a2744] mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-2">
              Your message to <strong>{formData.recipient}</strong> has been sent.
            </p>
            <p className="text-gray-600 mb-8">
              You should receive a response within 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portal/messages"
                className="inline-block bg-[#1a2744] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
              >
                View Messages
              </Link>
              <Link
                href="/portal/dashboard"
                className="inline-block border-2 border-[#1a2744] text-[#1a2744] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2744] hover:text-white transition"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <Link href="/portal/messages" className="flex items-center space-x-2 text-[#1a2744] font-semibold border-b-2 border-[#1a2744] pb-1">
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
              <Link href="/portal/appointments" className="flex items-center space-x-2 text-gray-600 py-2">
                <Calendar className="w-4 h-4" />
                <span>Appointments</span>
              </Link>
              <Link href="/portal/messages" className="flex items-center space-x-2 text-[#1a2744] font-semibold py-2">
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
      <main className="container mx-auto px-4 md:px-6 max-w-4xl py-8">
        {/* Back Button */}
        <Link
          href="/portal/messages"
          className="inline-flex items-center text-[#1a2744] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Messages
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
            New Message
          </h1>
          <p className="text-gray-600">
            Send a secure message to your care team
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipient */}
            <div>
              <label htmlFor="recipient" className="block text-sm font-semibold text-gray-700 mb-2">
                Send To <span className="text-red-500">*</span>
              </label>
              <select
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.recipient ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
              >
                <option value="">Select recipient...</option>
                <option value="Dr. Aparnath">Dr. Aparnath</option>
                <option value="Nutrition Team">Nutrition Team</option>
                <option value="Front Desk">Front Desk</option>
                <option value="Billing Department">Billing Department</option>
                <option value="Medical Staff">Medical Staff</option>
              </select>
              {errors.recipient && (
                <p className="mt-1 text-sm text-red-500">{errors.recipient}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                placeholder="What is this message about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                placeholder="Type your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Minimum 10 characters. Be as detailed as possible.
              </p>
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Attachments (Optional)
              </label>
              
              {/* File Input */}
              <div className="flex items-center">
                <label className="flex items-center space-x-2 px-4 py-2 border-2 border-[#1a2744] text-[#1a2744] rounded-lg font-semibold hover:bg-[#1a2744] hover:text-white transition cursor-pointer">
                  <Paperclip className="w-4 h-4" />
                  <span>Attach File</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  />
                </label>
              </div>

              {/* Attached Files List */}
              {attachments.length > 0 && (
                <div className="mt-4 space-y-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Paperclip className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-2 text-xs text-gray-500">
                Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Please note:</strong> Responses typically take 1-2 business days. For urgent medical concerns, please call our office at (555) 123-4567.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center space-x-2 bg-[#1a2744] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              <Link
                href="/portal/messages"
                className="flex-1 flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
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