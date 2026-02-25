'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, User, LogOut, Home, Download, Eye, Upload, Search, Filter, Folder } from 'lucide-react';

export default function Documents() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<'all' | 'lab-results' | 'forms' | 'imaging' | 'other'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample documents data
  const documents = [
    {
      id: 1,
      name: "Lab Results - February 2025",
      category: "lab-results",
      date: "Feb 20, 2025",
      size: "245 KB",
      type: "PDF",
      uploadedBy: "Dr. Aparnath",
      description: "Comprehensive metabolic panel and lipid profile results"
    },
    {
      id: 2,
      name: "DEXA Scan Results",
      category: "imaging",
      date: "Feb 10, 2025",
      size: "1.2 MB",
      type: "PDF",
      uploadedBy: "Medical Staff",
      description: "Full body composition analysis and bone density scan"
    },
    {
      id: 3,
      name: "Treatment Plan - Initial",
      category: "forms",
      date: "Jan 15, 2025",
      size: "180 KB",
      type: "PDF",
      uploadedBy: "Dr. Aparnath",
      description: "Personalized treatment plan and health goals"
    },
    {
      id: 4,
      name: "Consent Form - GLP-1 Therapy",
      category: "forms",
      date: "Jan 15, 2025",
      size: "95 KB",
      type: "PDF",
      uploadedBy: "Front Desk",
      description: "Signed consent form for GLP-1 medication therapy"
    },
    {
      id: 5,
      name: "Lab Results - January 2025",
      category: "lab-results",
      date: "Jan 10, 2025",
      size: "230 KB",
      type: "PDF",
      uploadedBy: "Dr. Aparnath",
      description: "Initial assessment labs - thyroid, metabolic panel, A1C"
    },
    {
      id: 6,
      name: "Nutrition Plan",
      category: "other",
      date: "Jan 8, 2025",
      size: "420 KB",
      type: "PDF",
      uploadedBy: "Nutrition Team",
      description: "Customized meal plan with macros and recipes"
    },
    {
      id: 7,
      name: "Medical History Form",
      category: "forms",
      date: "Dec 15, 2024",
      size: "125 KB",
      type: "PDF",
      uploadedBy: "Front Desk",
      description: "Completed medical history and intake questionnaire"
    },
    {
      id: 8,
      name: "Insurance Card - Front/Back",
      category: "other",
      date: "Dec 15, 2024",
      size: "850 KB",
      type: "JPG",
      uploadedBy: "You",
      description: "Health insurance card images"
    },
    {
      id: 9,
      name: "EKG Results",
      category: "imaging",
      date: "Nov 20, 2024",
      size: "340 KB",
      type: "PDF",
      uploadedBy: "Medical Staff",
      description: "Electrocardiogram results and interpretation"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    document.title = "My Documents | Lumena Patient Portal";
    window.scrollTo(0, 0);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'lab-results':
        return '🧪';
      case 'imaging':
        return '📊';
      case 'forms':
        return '📋';
      default:
        return '📄';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'lab-results':
        return 'Lab Results';
      case 'imaging':
        return 'Imaging & Scans';
      case 'forms':
        return 'Forms & Consents';
      case 'other':
        return 'Other';
      default:
        return 'All Documents';
    }
  };

  const getCategoryCount = (category: string) => {
    if (category === 'all') return documents.length;
    return documents.filter(doc => doc.category === category).length;
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
      <main className="container mx-auto px-4 md:px-6 max-w-7xl py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
              My Documents
            </h1>
            <p className="text-gray-600">
              Access your medical records, lab results, and forms
            </p>
          </div>
          <Link 
            href="/portal/documents/upload"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 bg-[#1a2744] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
          >
            <Upload className="w-5 h-5" />
            <span>Upload Document</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'all'
                ? 'bg-[#1a2744] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            All Documents ({getCategoryCount('all')})
          </button>
          <button
            onClick={() => setFilterCategory('lab-results')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'lab-results'
                ? 'bg-[#1a2744] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            🧪 Lab Results ({getCategoryCount('lab-results')})
          </button>
          <button
            onClick={() => setFilterCategory('imaging')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'imaging'
                ? 'bg-[#1a2744] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            📊 Imaging & Scans ({getCategoryCount('imaging')})
          </button>
          <button
            onClick={() => setFilterCategory('forms')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'forms'
                ? 'bg-[#1a2744] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            📋 Forms ({getCategoryCount('forms')})
          </button>
          <button
            onClick={() => setFilterCategory('other')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterCategory === 'other'
                ? 'bg-[#1a2744] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            📄 Other ({getCategoryCount('other')})
          </button>
        </div>

        {/* Documents List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg shadow-md p-6 hover-lift border-l-4 border-[#1a2744]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                {/* Left Side - Document Info */}
                <div className="flex-1 flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                      {getCategoryIcon(doc.category)}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a2744] mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {doc.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {doc.date}
                      </span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-semibold">
                        {doc.type}
                      </span>
                      <span>•</span>
                      <span>Uploaded by {doc.uploadedBy}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Actions */}
                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col space-y-2 w-full md:w-auto">
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#1a2744] text-white rounded-lg font-semibold hover:bg-[#2a3754] transition">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-[#1a2744] text-[#1a2744] rounded-lg font-semibold hover:bg-[#1a2744] hover:text-white transition">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredDocuments.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Documents Found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery 
                  ? `No documents match "${searchQuery}"`
                  : 'You don\'t have any documents in this category.'}
              </p>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-[#1a2744] mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            About Your Documents
          </h3>
          <ul className="text-sm text-gray-700 space-y-1 ml-7">
            <li>• All documents are securely stored and HIPAA compliant</li>
            <li>• Lab results are typically available within 3-5 business days</li>
            <li>• You can download documents as PDFs for your records</li>
            <li>• Contact us if you need assistance accessing any documents</li>
          </ul>
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