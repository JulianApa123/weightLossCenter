'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Lock, Mail } from 'lucide-react';

export default function PortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = "Patient Portal Login | Lumena Clinic and Therapeutics";
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just redirect to dashboard
    window.location.href = '/portal/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2744] to-[#2a3754] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <img src="/logo.jpg" alt="Lumena Logo" className="h-24 mx-auto" />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Patient Portal
          </h1>
          <p className="text-gray-300">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2744] focus:border-transparent text-gray-900"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-end">
              <Link href="/portal/forgot-password" className="text-sm text-[#1a2744] hover:underline font-semibold">
                Forgot your password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#1a2744] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#2a3754] transition-colors duration-200 transform hover:scale-105"
            >
              Login to Portal
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/portal/register" className="text-[#1a2744] hover:underline font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Website Link */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            ← Back to Main Website
          </Link>
        </div>
      </div>
    </div>
  );
}