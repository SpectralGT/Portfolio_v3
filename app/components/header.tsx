'use client'
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md text-black w-screen">
      <nav className="container px-4 py-3 max-w-screen w-screen flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-400">
          MyLogo
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="/home" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="www.w3.org"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="www.w3.org"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Conditionally Rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="/home" className="block px-4 py-2 hover:bg-gray-600">Home</a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-600">About</a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-600">Contact</a>
        </div>
      )}
    </header>
  );
};

