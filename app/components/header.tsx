'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md w-screen fixed top-0 left-0">
      <nav className="container px-4 py-3 max-w-screen w-screen flex justify-between items-center z-10 relative">
        {/* Logo */}
        < Link href="/" className="text-xl font-bold">
          A
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="/home" className="">Home</a>
          <a href="/about" className="">About</a>
          <a href="/contact" className="">Contact</a>
        </div>

        {/* Mobile Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 z-10" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="www.w3.org"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="www.w3.org"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Conditionally Rendered) */}
      {
        isMenuOpen && (
          <div className="md:hidden bg1 h-screen w-screen fixed top-0 left-0 pt-10 z-0">
            <a href="/home" className="block px-4 py-2 hover:bg-gray-600">Home</a>
            <a href="/about" className="block px-4 py-2 hover:bg-gray-600">About</a>
            <a href="/contact" className="block px-4 py-2 hover:bg-gray-600">Contact</a>
          </div>
        )
      }
    </header >
  );
};

