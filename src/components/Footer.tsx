// Tambahkan baris ini untuk menandai sebagai Client Component
"use client";

import { Github, Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fungsi ini menggunakan 'document' yang hanya ada di browser,
  // ini adalah alasan lain mengapa komponen ini harus menjadi "use client".
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              opan<span className="text-blue-400">G</span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Web Developer yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/bonnnchannn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/naufal-firman-dhani-66967b28b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:kamu@email.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                {/* Tombol dengan onClick ini membutuhkan "use client" */}
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block text-sm">Email:</span>
                <a 
                  href="mailto:kamu@email.com" 
                  className="hover:text-white transition-colors"
                >
                  kamu@email.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block text-sm">Location:</span>
                <span>Surabaya, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} opanG. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}