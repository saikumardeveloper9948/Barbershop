import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-500">
          FamaBarber
        </div>

        {/* Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('home')} className="dark:text-white text-gray-900 hover:text-amber-500 transition duration-300">Home</button>
          <button onClick={() => scrollToSection('testimonials')} className="dark:text-white text-gray-900 hover:text-amber-500 transition duration-300">About Us</button>
          <button onClick={() => scrollToSection('faq')} className="dark:text-white text-gray-900 hover:text-amber-500 transition duration-300">Queries</button>
          <button onClick={() => scrollToSection('services')} className="dark:text-white text-gray-900 hover:text-amber-500 transition duration-300">Services</button>
          <button onClick={() => scrollToSection('news')} className="dark:text-white text-gray-900 hover:text-amber-500 transition duration-300">Blog</button>
        </nav>

        <div className="flex items-center gap-4">
          {/* Book Appointment Button (visible on desktop) */}
          <div className="hidden md:block">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Book Appointment
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button 
            className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 text-white transition duration-300 focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            )}
          </button>

          {/* Mobile Menu Button (visible on mobile) */}
          <div className="md:hidden">
            <button 
              className="dark:text-white text-black focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className='hidden dark:block border-b border-gray-100'></div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-md`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-2 py-3">
            <button onClick={() => scrollToSection('home')} className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 text-left">Home</button>
            <button onClick={() => scrollToSection('testimonials')} className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 text-left">About Us</button>
            <button onClick={() => scrollToSection('faq')} className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 text-left">Queries</button>
            <button onClick={() => scrollToSection('services')} className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 text-left">Services</button>
            <button onClick={() => scrollToSection('news')} className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 text-left">Blog</button>
            <button onClick={toggleMobileMenu} className="w-full px-3 py-2 rounded-md text-base font-medium bg-amber-500 hover:bg-amber-600 text-white transition duration-300 mt-2">
              Book Appointment
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;