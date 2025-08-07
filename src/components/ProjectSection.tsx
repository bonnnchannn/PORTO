'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react'; // Menggunakan ArrowUpRight untuk konsistensi
import { motion, Variants } from 'framer-motion';

// Data untuk proyek (tidak ada perubahan)
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
    description: 'Sebuah aplikasi rekomendasi film yang dibangun menggunakan algoritma machine learning sederhana.',
    image: '/pythonn.png',
    tags: ['Python', 'Streamlit'],
    liveUrl: 'https://opangflix.streamlit.app/',
    repoUrl: 'https://github.com/bonnnchannn/Recomendation-System',
  },
  {
    title: 'Prototype Dating App',
    description: 'Prototype aplikasi kencan yang dirancang untuk memberikan pengalaman pengguna yang intuitif dan menarik.',
    image: '/monamour.png',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/design/PuaKmurO6hOI7Sj4N4fdhD/mon-amour--Copy-?node-id=1-3&t=oOb6mgSONkLIW9KT-1',
    repoUrl: 'https://github.com/your-username/task-app', // Pastikan URL ini benar
  },
];

// PERUBAHAN: Varian animasi disederhanakan dan disatukan
const sectionFadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: 'easeOut'
    }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
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
    // PERUBAHAN: Background lebih simpel dan animasi di-handle oleh varian
    <motion.section 
      id="projects" 
      className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 w-full"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* PERUBAHAN: Animasi header disederhanakan */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Proyek Pilihan Saya
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa karya yang menunjukkan keahlian saya dalam merancang dan membangun solusi digital.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            // PERUBAHAN: Desain kartu dirombak total
            <motion.div 
              key={index}
              variants={itemFadeInUp}
              className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -6 }} // Efek hover lebih simpel
            >
              <div className="overflow-hidden h-56">
                <Image 
                  src={project.image}
                  alt={`Screenshot dari ${project.title}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* PERUBAHAN: Tata letak header kartu baru dengan link di kanan */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="Source Code" className="text-gray-400 hover:text-gray-800 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 text-sm flex-grow leading-relaxed mb-5">
                  {project.description}
                </p>
                
                {/* PERUBAHAN: Warna tags lebih netral */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}