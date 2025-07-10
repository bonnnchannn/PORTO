'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeInUp: Variants = {
  initial: { 
    opacity: 0, y: 60 
  },
  whileInView: { 
    opacity: 1, y: 0, transition: {duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] 
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const scaleIn: Variants = {
  initial: { 
    opacity: 0, scale: 0.8 
  },
  whileInView: { 
    opacity: 1, scale: 1, transition: {duration: 0.6, ease: "easeOut" 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1, transition: {staggerChildren: 0.15, delayChildren: 0.1
    },
  },
};

const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {duration: 0.6, ease: "easeOut"
    }
  },
};

// Helper function untuk delayed animations
const createDelayedAnimation = (baseAnimation: Variants, delay: number): Variants => {
  const newAnimation: Variants = {};
  
  Object.keys(baseAnimation).forEach(key => {
    if (key === 'whileInView' && typeof baseAnimation[key] === 'object') {
      newAnimation[key] = {
        ...baseAnimation[key],
        transition: {
          ...(baseAnimation[key].transition || {}),
          delay
        }
      };
    } else {
      newAnimation[key] = baseAnimation[key];
    }
  });
  
  return newAnimation;
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl w-full">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-center"
        >
          Learning Journey & Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Webinar & Training Photos Section */}
          <motion.div 
            variants={createDelayedAnimation(fadeInUp, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <motion.span 
                className="w-3 h-3 bg-green-500 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Webinar & Training Journey
            </h3>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                variants={staggerItem}
                className="group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src="/react.png"
                      alt="Webinar React Advanced"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                     onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElem = e.currentTarget.nextElementSibling;
                        if (nextElem instanceof HTMLAnchorElement) {
                          nextElem.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-500/80 hidden items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-3xl mb-1">⚛️</div>
                        <p className="text-xs">React Webinar</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-800 text-lg">React Advanced Patterns</h4>
                      <span className="text-sm text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                        Maret 2024
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Webinar mendalam tentang advanced React patterns, custom hooks, dan performance optimization techniques untuk aplikasi React modern.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">React Hooks</span>
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Performance</span>
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Best Practices</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src="/images/webinar-ai.jpg"
                      alt="Webinar AI & Machine Learning"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                     onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElem = e.currentTarget.nextElementSibling;
                         if (nextElem instanceof HTMLAnchorElement) {
                          nextElem.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-purple-500/80 hidden items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-3xl mb-1">🤖</div>
                        <p className="text-xs">AI Webinar</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-800 text-lg">AI & Machine Learning</h4>
                      <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full">
                        Januari 2024
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Workshop komprehensif tentang implementasi AI dan machine learning dalam web development, termasuk integrasi dengan framework modern.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Machine Learning</span>
                      <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">TensorFlow</span>
                      <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">AI Integration</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src="/images/webinar-nextjs.jpg"
                      alt="Webinar Next.js Performance"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElem = e.currentTarget.nextElementSibling;
                        if (nextElem instanceof HTMLAnchorElement) {
                          nextElem.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-800/80 hidden items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-3xl mb-1">▲</div>
                        <p className="text-xs">Next.js Webinar</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-800 text-lg">Next.js Performance Optimization</h4>
                      <span className="text-sm text-gray-600 font-medium bg-gray-200 px-2 py-1 rounded-full">
                        Februari 2024
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Deep dive session tentang teknik optimasi Next.js, server-side rendering, dan best practices untuk aplikasi production-ready.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">Next.js</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">SSR</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">Optimization</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Sertifikasi & Achievement Section */}
          <motion.div 
            variants={createDelayedAnimation(fadeInUp, 0.4)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <motion.span 
                className="w-3 h-3 bg-yellow-500 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              Sertifikasi & Achievements
            </h3>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                variants={staggerItem}
                className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer border-l-4 border-blue-500"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0">
                    <Image
                      src="/dicoding.png"
                      alt="Sertifikat Dicoding"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElem = e.currentTarget.nextElementSibling;
                         if (nextElem instanceof HTMLAnchorElement) {
                          nextElem.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-500 hidden items-center justify-center text-white text-2xl">
                      📜
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-blue-600">Dicoding Indonesia</h4>
                      <span className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
                        Maret 2023
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-2">Frontend Web Developer Expert</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sertifikasi advanced dalam pengembangan frontend dengan fokus pada performance optimization dan modern JavaScript frameworks.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer border-l-4 border-green-500"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0">
                    <Image
                      src="/images/google-cert.jpg"
                      alt="Sertifikat Google"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElem = e.currentTarget.nextElementSibling;
                        if (nextElem instanceof HTMLAnchorElement) {
                          nextElem.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-green-500 hidden items-center justify-center text-white text-2xl">
                      🏆
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-green-600">Google Developer</h4>
                      <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full">
                        Januari 2024
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-2">AI & Web Development Certification</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sertifikasi komprehensif dalam pengembangan aplikasi AI dan integrasi machine learning dengan teknologi web modern.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer border-l-4 border-purple-500"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0">
                    <Image
                      src="/images/award-photo.jpg"
                      alt="Penghargaan Best Developer"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                     onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElem = e.currentTarget.nextElementSibling;
                         if (nextElem instanceof HTMLAnchorElement) {
                          nextElem.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-purple-500 hidden items-center justify-center text-white text-2xl">
                      🥇
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-purple-600">Best Developer Award</h4>
                      <span className="text-xs text-purple-500 bg-purple-100 px-2 py-1 rounded-full">
                        Desember 2023
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-2">Company Annual Achievement</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Penghargaan untuk kontribusi terbaik dalam pengembangan produk dan inovasi teknologi di perusahaan.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}