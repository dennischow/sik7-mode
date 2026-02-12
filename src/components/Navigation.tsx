'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/branding-logo.svg"
                alt="Sik7 Mode Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Sik7 Mode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-yellow transition-colors"
            >
              Home
            </Link>
            <Link
              href="/video"
              className="text-gray-700 hover:text-brand-yellow transition-colors"
            >
              Videos
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-yellow transition-colors"
            >
              Bio
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-brand-yellow focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/video"
                className="text-gray-700 hover:text-brand-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bio
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
