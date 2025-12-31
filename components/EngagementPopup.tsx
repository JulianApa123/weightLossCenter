'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

const popupMessages = [
  "Don't understand why you just can't keep the weight off?",
  "Tired of not reaching your goals?",
  "Discover why your body does not respond to Diet or exercise."
];

export default function EngagementPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown this session
    const popupShown = sessionStorage.getItem('popupShown');
    
    if (!popupShown && !hasShown) {
      // Random message
      const randomIndex = Math.floor(Math.random() * popupMessages.length);
      setCurrentMessage(popupMessages[randomIndex]);
      
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm border-2 border-[#1a2744] relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="pr-6">
          <p className="text-lg font-semibold text-[#1a2744] mb-4">
            {currentMessage}
          </p>
          <Link
            href="/appointments"
            onClick={handleClose}
            className="block w-full bg-[#1a2744] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#2a3754] transition"
          >
            Get Answers Now
          </Link>
        </div>
      </div>
    </div>
  );
}