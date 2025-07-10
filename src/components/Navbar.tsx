'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Effect for scroll-based behaviors
  useEffect(() => {
    const handleScroll = () => {
      // Navbar style change on scroll
      setIsScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ['home', 'experience', 'projects', 'contact'];
      const scrollPositionWithOffset = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav
      className={`fixed top-3 left-4 right-4 z-50 transition-all duration-300 ease-in-out rounded-2xl ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-lg h-16 border border-gray-100'
          : 'bg-white/95 shadow-sm h-20 border border-gray-200'
      } dark:bg-white/90 dark:border-gray-200`}
    >
      <div className="pt-5 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
              aria-label="Scroll to Home section"
            >
              <span className="text-blue-600">N</span>aufal
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
            {/* Contact button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-md transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100 rounded-2xl transition-all duration-300 ease-in-out transform dark:bg-white/90 dark:border-gray-200 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-3 py-3 mt-2 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}