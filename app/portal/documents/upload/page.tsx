'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Home, Upload, X, CheckCircle, ArrowLeft, File } from 'lucide-react';

export default function UploadDocument() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    documentType: '',
    documentName: '',
    notes: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.title = "Upload Document | Lumena Patient Portal";
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
      
      // Validate file size (10MB max per file)
      const oversizedFiles = newFiles.filter(file => file.size > 10 * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        setErrors({
          ...errors,
          files: `Some files exceed the 10MB limit: ${oversizedFiles.map(f => f.name).join(', ')}`
        });
        return;
      }

      setFiles([...files, ...newFiles]);
      // Clear file error
      if (errors.files) {
        setErrors({
          ...errors,
          files: ''
        });
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.documentType) {
      newErrors.documentType = 'Please select a document type';
    }

    if (!formData.documentName.trim()) {
      newErrors.documentName = 'Document name is required';
    }

    if (files.length === 0) {
      newErrors.files = 'Please select at least one file to upload';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate upload (in real app, would call API)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 2000);
    }
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch(ext) {
      case 'pdf':
        return '📄';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '🖼️';
      case 'doc':
      case 'docx':
        return '📝';
      default:
        return '📎';
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
              Upload Successful!
            </h2>
            <p className="text-gray-600 mb-2">
              Your {files.length} {files.length === 1 ? 'document has' : 'documents have'} been uploaded successfully.
            </p>
            <p className="text-gray-600 mb-8">
              Document Type: <strong>{formData.documentType}</strong><br />
              Document Name: <strong>{formData.documentName}</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portal/documents"
                className="inline-block bg-[#1a2744] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
              >
                View My Documents
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
              <Link href="/portal/messages" className="flex items-center space-x-2 text-gray-600 hover:text-[#1a2744] transition">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </Link>
              <Link href="/portal/documents" className="flex items-center space-x-2 text-[#1a2744] font-semibold border-b-2 border-[#1a2744] pb-1">
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
              <Link href="/portal/messages" className="flex items-center space-x-2 text-gray-600 py-2">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </Link>
              <Link href="/portal/documents" className="flex items-center space-x-2 text-[#1a2744] font-semibold py-2">
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
          href="/portal/documents"
          className="inline-flex items-center text-[#1a2744] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Documents
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
            Upload Document
          </h1>
          <p className="text-gray-600">
            Share documents securely with your care team
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Document Type */}
            <div>
              <label htmlFor="documentType" className="block text-sm font-semibold text-gray-700 mb-2">
                Document Type <span className="text-red-500">*</span>
              </label>
              <select
                id="documentType"
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.documentType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
              >
                <option value="">Select document type...</option>
                <option value="Insurance Card">Insurance Card</option>
                <option value="ID/Driver's License">ID/Driver's License</option>
                <option value="Lab Results">Lab Results (from another provider)</option>
                <option value="Medical Records">Medical Records</option>
                <option value="Prescription">Prescription</option>
                <option value="Imaging/Scan">Imaging/Scan Results</option>
                <option value="Referral Letter">Referral Letter</option>
                <option value="Other">Other</option>
              </select>
              {errors.documentType && (
                <p className="mt-1 text-sm text-red-500">{errors.documentType}</p>
              )}
            </div>

            {/* Document Name */}
            <div>
              <label htmlFor="documentName" className="block text-sm font-semibold text-gray-700 mb-2">
                Document Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="documentName"
                name="documentName"
                value={formData.documentName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.documentName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900`}
                placeholder="e.g., Blue Cross Insurance Card - Front/Back"
              />
              {errors.documentName && (
                <p className="mt-1 text-sm text-red-500">{errors.documentName}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Give your document a descriptive name
              </p>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
                placeholder="Add any additional information about this document..."
              />
              <p className="mt-1 text-sm text-gray-500">
                Optional: Include any relevant context or notes
              </p>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select File(s) <span className="text-red-500">*</span>
              </label>
              
              {/* Drag and Drop Zone */}
              <div className={`border-2 border-dashed ${errors.files ? 'border-red-500' : 'border-gray-300'} rounded-lg p-8 text-center hover:border-[#1a2744] transition`}>
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-700 mb-2">
                  <label className="text-[#1a2744] font-semibold hover:underline cursor-pointer">
                    Click to upload
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    />
                  </label>
                  {' '}or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
                </p>
              </div>

              {errors.files && (
                <p className="mt-2 text-sm text-red-500">{errors.files}</p>
              )}

              {/* Selected Files List */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-gray-700">
                    Selected Files ({files.length}):
                  </p>
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getFileIcon(file.name)}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Security:</strong> All uploaded documents are encrypted and HIPAA compliant. Only you and your authorized care team can access these files.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center space-x-2 bg-[#1a2744] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Upload className="w-5 h-5" />
                <span>{isSubmitting ? 'Uploading...' : 'Upload Document'}</span>
              </button>
              <Link
                href="/portal/documents"
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