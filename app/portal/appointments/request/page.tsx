'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Home, CheckCircle, ArrowLeft, Clock } from 'lucide-react';

export default function RequestAppointment() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    appointmentType: '',
    provider: '',
    preferredDate1: '',
    preferredTime1: '',
    preferredDate2: '',
    preferredTime2: '',
    visitType: '',
    reason: '',
    urgency: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.title = "Request Appointment | Lumena Patient Portal";
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

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.appointmentType) {
      newErrors.appointmentType = 'Please select an appointment type';
    }

    if (!formData.provider) {
      newErrors.provider = 'Please select a provider';
    }

    if (!formData.preferredDate1) {
      newErrors.preferredDate1 = 'Please provide at least one preferred date';
    }

    if (!formData.preferredTime1) {
      newErrors.preferredTime1 = 'Please select a preferred time';
    }

    if (!formData.visitType) {
      newErrors.visitType = 'Please select visit type';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please provide a reason for visit';
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide more detail (at least 10 characters)';
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select urgency level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate submission (in real app, would call API)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
    }
  };

  // Get min date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get max date (3 months from now)
  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.setMonth(today.getMonth() + 3));
    return maxDate.toISOString().split('T')[0];
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
              Appointment Request Submitted!
            </h2>
            <p className="text-gray-600 mb-2">
              Your appointment request has been received.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-6 text-left">
              <p className="text-sm text-gray-700 mb-2">
                <strong>What's Next:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Our scheduling team will review your request</li>
                <li>• You'll receive a confirmation call or message within 24-48 hours</li>
                <li>• Check your Messages for updates</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              <strong>Request Details:</strong><br />
              {formData.appointmentType} with {formData.provider}<br />
              Preferred: {new Date(formData.preferredDate1).toLocaleDateString()} at {formData.preferredTime1}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portal/appointments"
                className="inline-block bg-[#1a2744] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
              >
                View My Appointments
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
      <main className="container mx-auto px-4 md:px-6 max-w-4xl py-8">
        {/* Back Button */}
        <Link
          href="/portal/appointments"
          className="inline-flex items-center text-[#1a2744] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Appointments
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
            Request Appointment
          </h1>
          <p className="text-gray-600">
            Schedule a visit with your care team
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Appointment Details Section */}
            <div>
              <h2 className="text-xl font-bold text-[#1a2744] mb-6 pb-3 border-b border-gray-200">
                Appointment Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Appointment Type */}
                <div className="md:col-span-2">
                  <label htmlFor="appointmentType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Appointment <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.appointmentType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                  >
                    <option value="">Select appointment type...</option>
                    <option value="Initial Consultation">Initial Consultation</option>
                    <option value="Follow-up Visit">Follow-up Visit</option>
                    <option value="Nutrition Consultation">Nutrition Consultation</option>
                    <option value="Medication Management">Medication Management</option>
                    <option value="Lab Review">Lab Results Review</option>
                    <option value="DEXA Scan">DEXA Scan</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.appointmentType && (
                    <p className="mt-1 text-sm text-red-500">{errors.appointmentType}</p>
                  )}
                </div>

                {/* Provider */}
                <div className="md:col-span-2">
                  <label htmlFor="provider" className="block text-sm font-semibold text-gray-700 mb-2">
                    Provider Preference <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="provider"
                    name="provider"
                    value={formData.provider}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.provider ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                  >
                    <option value="">Select provider...</option>
                    <option value="Dr. Aparnath">Dr. Aparnath</option>
                    <option value="Licensed Nutritionist">Licensed Nutritionist</option>
                    <option value="Medical Staff">Medical Staff (DEXA Scan, Labs)</option>
                    <option value="No Preference">No Preference</option>
                  </select>
                  {errors.provider && (
                    <p className="mt-1 text-sm text-red-500">{errors.provider}</p>
                  )}
                </div>

                {/* Visit Type */}
                <div className="md:col-span-2">
                  <label htmlFor="visitType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Visit Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="visitType"
                    name="visitType"
                    value={formData.visitType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.visitType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                  >
                    <option value="">Select visit type...</option>
                    <option value="In-Person">In-Person</option>
                    <option value="Telehealth">Telehealth (Video Call)</option>
                    <option value="No Preference">No Preference</option>
                  </select>
                  {errors.visitType && (
                    <p className="mt-1 text-sm text-red-500">{errors.visitType}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Scheduling Preferences Section */}
            <div>
              <h2 className="text-xl font-bold text-[#1a2744] mb-6 pb-3 border-b border-gray-200">
                Scheduling Preferences
              </h2>

              <div className="space-y-6">
                {/* First Choice */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    First Choice <span className="text-red-500">*</span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate1" className="block text-sm text-gray-600 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate1"
                        name="preferredDate1"
                        value={formData.preferredDate1}
                        onChange={handleChange}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className={`w-full px-4 py-3 border ${errors.preferredDate1 ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                      />
                      {errors.preferredDate1 && (
                        <p className="mt-1 text-sm text-red-500">{errors.preferredDate1}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="preferredTime1" className="block text-sm text-gray-600 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime1"
                        name="preferredTime1"
                        value={formData.preferredTime1}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.preferredTime1 ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                      >
                        <option value="">Select time...</option>
                        <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                        <option value="Afternoon (12pm-3pm)">Afternoon (12pm-3pm)</option>
                        <option value="Late Afternoon (3pm-6pm)">Late Afternoon (3pm-6pm)</option>
                      </select>
                      {errors.preferredTime1 && (
                        <p className="mt-1 text-sm text-red-500">{errors.preferredTime1}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Second Choice */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Second Choice (Optional)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate2" className="block text-sm text-gray-600 mb-2">
                        Alternate Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate2"
                        name="preferredDate2"
                        value={formData.preferredDate2}
                        onChange={handleChange}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime2" className="block text-sm text-gray-600 mb-2">
                        Alternate Time
                      </label>
                      <select
                        id="preferredTime2"
                        name="preferredTime2"
                        value={formData.preferredTime2}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
                      >
                        <option value="">Select time...</option>
                        <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                        <option value="Afternoon (12pm-3pm)">Afternoon (12pm-3pm)</option>
                        <option value="Late Afternoon (3pm-6pm)">Late Afternoon (3pm-6pm)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div>
              <h2 className="text-xl font-bold text-[#1a2744] mb-6 pb-3 border-b border-gray-200">
                Additional Information
              </h2>

              <div className="space-y-6">
                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                    How soon do you need to be seen? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.urgency ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                  >
                    <option value="">Select urgency...</option>
                    <option value="Routine (within 2-4 weeks)">Routine (within 2-4 weeks)</option>
                    <option value="Soon (within 1-2 weeks)">Soon (within 1-2 weeks)</option>
                    <option value="Urgent (within a few days)">Urgent (within a few days)</option>
                  </select>
                  {errors.urgency && (
                    <p className="mt-1 text-sm text-red-500">{errors.urgency}</p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                    Reason for Visit <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                    placeholder="Please describe the reason for your visit, any symptoms, or what you'd like to discuss..."
                  />
                  {errors.reason && (
                    <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Be as specific as possible to help us prepare for your visit
                  </p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">What happens next?</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Our scheduling team will review your request within 24-48 hours</li>
                    <li>• We'll confirm your appointment via phone or secure message</li>
                    <li>• You'll receive a confirmation email with appointment details</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center space-x-2 bg-[#1a2744] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Calendar className="w-5 h-5" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
              </button>
              <Link
                href="/portal/appointments"
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