'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRightSquare, Github } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Data untuk proyek
const projectsData = [
  {
    title: 'Aplikasi E-Commerce',
    description: 'Sebuah platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran, dan panel admin untuk manajemen produk.',
    image: '/Sapu jagaD.png',
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    liveUrl: 'https://sapu.mimorivsl.com/',
    repoUrl: 'https://github.com/bonnnchannn/sapujagad',
  },
  {
    title: 'Recomendation System',
    description: 'Sebuah aplikasi rekomendasi film',
    image: '/pythonn.png',
    tags: ['Python', 'Streamlit'],
    liveUrl: 'https://opangflix.streamlit.app/',
    repoUrl: 'https://github.com/bonnnchannn/Recomendation-System',
  },
  {
    title: 'Prototype Dating App',
    description: 'Prototype dating app yang di bangun menggunakan figma.',
    image: '/monamour.png',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/design/PuaKmurO6hOI7Sj4N4fdhD/mon-amour--Copy-?node-id=1-3&t=oOb6mgSONkLIW9KT-1',
    repoUrl: 'https://github.com/your-username/task-app',
  },
];

// Animation variants
const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.25, 0.25, 0.75] 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function ProjectsSection() {
  return (
    <motion.section 
      id="projects" 
      className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            whileInView={{ 
              scale: [0.9, 1.05, 1],
              color: ["#111827", "#2563eb", "#111827"]
            }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            Proyek yang Pernah Saya Buat
          </motion.h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa karya pilihan yang menunjukkan keahlian saya dalam teknologi web modern.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="overflow-hidden">
                <Image 
                  src={project.image}
                  alt={`Screenshot dari ${project.title}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-semibold text-sky-800 bg-sky-100 rounded-full"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#0ea5e9",
                        color: "#ffffff"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Lihat demo langsung dari ${project.title}`}
                  >
                    <ArrowUpRightSquare className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Lihat source code dari ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}